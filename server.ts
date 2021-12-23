import { serve } from "https://deno.land/std@0.119.0/http/server.ts"
import { parse } from "https://deno.land/std@0.119.0/flags/mod.ts"

serve(
    async (req) => {
        const path = (new URL(req.url)).pathname.slice(1)
        return (path === "favicon.ico" || path === "")
            ? new Response(
                "",
                { status: 404 },
            )
            : new Response(
                (await Deno.emit("https://" + path, {
                    bundle: "module",
                    compilerOptions: {
                        lib: ["esnext", "dom"],
                    },
                })).files["deno:///bundle.js"],
                {
                    headers: {
                        "Content-Type": "application/javascript; charset=utf-8",
                        "Access-Control-Allow-Origin": "*",
                    },
                },
            )
    },
    { port: (p => isNaN(p) ? 8080 : p)(Number(parse(Deno.args)["p"])) },
)
