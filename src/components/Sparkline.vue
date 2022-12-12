<template>
  <svg class="sparkline" :width="width" :height="height" :stroke-width="stroke">
    <path class="sparkline--line" :d="shape" fill="none"></path>
    <path class="sparkline--fill" :d="[shape, fillEndPath].join(' ')" stroke="none"></path>
  </svg>
</template>

<script>
  export default {
    props: ["data"],
    data: () => ({
      width: 145,
      height: 50,
      stroke: 2
    }),
    
    computed: {
      shape() {
        const stroke = this.stroke;
        const width = this.width;
        const height = this.height - stroke * 2;
        const data = this.data || [];
        const highestPoint = Math.max.apply(null, data);
        const coordinates = [];
        const totalPoints = this.data.length - 1;
        
        data.forEach((item, i) => {
          const x = (i / totalPoints) * width + stroke;
          const y = height - (item / highestPoint) * height + stroke;
          coordinates.push({ x, y });
        });
        
        if (!coordinates[0]) {
          return (
            "M 0 " +
            this.stroke +
            " L 0 " +
            this.stroke +
            " L " +
            this.width +
            " " +
            this.stroke
          );
        }
        
        const path = [];
        
        coordinates.forEach((point) => path.push(["L", point.x, point.y].join(" ")));
        return ["M" + coordinates[0].x, coordinates[0].y, ...path].join(" ");
      },
      fillEndPath() {
        return `V ${this.height} L 4 ${this.height} Z`;
      }
    }
  }
  </script>
  