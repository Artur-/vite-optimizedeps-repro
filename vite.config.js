export default {
  optimizeDeps: {
    // both are listed; only the bare one is actually used by the browser
    include: ['src/lib/index.js', 'my-engine']
  }
};
