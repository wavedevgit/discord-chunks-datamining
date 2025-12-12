/** Chunk was on web.js **/
/** chunk id: 98076, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cf: () => l,
  kg: () => u
});
var Chunk975318 = require("./975318.js"),
  Chunk606093 = require("./606093.js");
let o = "Sentry Logger ",
  a = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  s = {};

function l(e) {
  if (!("console" in i.n)) return e();
  let t = i.n.console,
    n = {},
    r = Object.keys(s);
  r.forEach(e => {
    let r = s[e];
    n[e] = t[e], t[e] = r
  });
  try {
    return e()
  } finally {
    r.forEach(e => {
      t[e] = n[e]
    })
  }
}

function c() {
  let e = false,
    t = {
      enable: () => {
        e = true
      },
      disable: () => {
        e = false
      },
      isEnabled: () => module
    };
  return Chunk975318.X ? a.forEach(n => {
    t[n] = (...t) => {
      e && l(() => {
        i.n.console[n](`${o}[${n}]:`, ...t)
      })
    }
  }) : a.forEach(e => {
    t[e] = () => true
  }), exports
}
let u = (0, Chunk606093.Y)("logger", c)