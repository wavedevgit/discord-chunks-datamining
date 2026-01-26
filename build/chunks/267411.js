/** Chunk was on web.js **/
/** chunk id: 267411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hv: () => p,
  Lc: () => h,
  o7: () => f,
  zs: () => _
}), require("./65821.js");
var Chunk214958 = require("./214958.js"),
  i = require.n(Chunk214958),
  Chunk118356 = require("./118356.js"),
  Chunk396574 = require("./396574.js");
let o = new Chunk118356.Vy("LibDaveManager"),
  l = null,
  c = null,
  u = null,
  d = {
    onRuntimeInitialized: () => {
      o.info("DAVE loaded")
    }
  };

function f() {
  return ("Firefox" !== i().name || !(s.It < 142)) && s.PF && s.zU
}

function p() {
  return "object" == typeof WebAssembly
}

function _() {
  return null != l ? l : l = new Promise((e, t) => {
    Promise.all([n.e("23484"), n.e("42664"), n.e("20074")]).then(n.bind(n, 590641)).then(n => {
      let {
        DaveModuleFactory: r
      } = n;
      r(d).then(t => {
        o.info("Successfully initialized DAVE"), c = t, e(t)
      }).catch(e => {
        o.error("Failed to initialize DAVE", e), t(e)
      })
    }).catch(e => {
      o.error("Failed to load DAVE module", e), t(e)
    })
  })
}

function h() {
  if (null == c) throw Error("DAVE module not loaded");
  return null == u && (u = new c.TransientKeys), u
}