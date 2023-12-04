import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
    entries: ["./src/index"],
    clean: true,
    rollup: {
        inlineDependencies: false,
        emitCJS: true,
        esbuild: {
            target: "ESNext",
            minify: true,
        },
    },
    declaration: true,
});
