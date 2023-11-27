// eslint-disable-next-line no-undef
module.exports = {
    apps: 
    
    [{
      name: "admin-panel",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "production"
      }
    }]
  };