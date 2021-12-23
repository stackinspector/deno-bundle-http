# [Deno](https://deno.land/) Bundle over HTTP

Execute `deno bundle` over http request in order to import esm in the browser without need of lots of requests.

## Run

> deno run --unstable --allow-net server.ts

```
OPTIONS:
    -p, --port <port>     [default: 8080]
```

## Use

> GET /deno.land/std@0.119.0/encoding/base64.ts
