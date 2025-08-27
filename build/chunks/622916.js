/** Chunk was on web.js **/
/** chunk id: 622916, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cf: () => l,
  kg: () => c
});
var Chunk176984 = require("./176984.js"),
  Chunk899517 = require("./899517.js");
let a = "Sentry Logger ",
  o = ["debug", "info", "warn", "error", "log", "assert", "trace"],
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
let c = function() {
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
  return Chunk176984.X ? o.forEach(n => {
    t[n] = (...t) => {
      e && l(() => {
        i.n.console[n](`${a}[${n}]:`, ...t)
      })
    }
  }) : o.forEach(e => {
    t[e] = () => true
  }), exports
}()