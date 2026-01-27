/** Chunk was on web.js **/
/** chunk id: 478681, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  pq: () => l,
  vF: () => u
});
var Chunk919015 = require("./919015.js"),
  Chunk588522 = require("./588522.js");
let a = "Sentry Logger ",
  o = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  s = {};

function l(e) {
  if (!("console" in i.O)) return e();
  let t = i.O.console,
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
      isEnabled: () => e
    };
  return r.T ? o.forEach(n => {
    t[n] = (...t) => {
      e && l(() => {
        i.O.console[n](`${a}[${n}]:`, ...t)
      })
    }
  }) : o.forEach(e => {
    t[e] = () => true
  }), t
}
let u = (0, Chunk588522.B)("logger", c)