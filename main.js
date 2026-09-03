// (1) relative import of a project source file listed in optimizeDeps.include
const relative = await import("./src/lib/index.js");
// (2) control: identical code, imported through a bare specifier
const bare = await import("my-engine");
console.log(relative.engine(), bare.engine());
