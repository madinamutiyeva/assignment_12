// button/button.jsx
const ButtonComponent = {
    template: `
      <button @click="onClick">
        Click me
      </button>
    `,
    methods: {
      onClick() {
        console.log('Button clicked');
      },
    },
  };
  
  export default ButtonComponent;
  