/** Chunk was on web.js **/
/** chunk id: 586021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D5: () => _,
  Ft: () => p,
  IT: () => f,
  Yk: () => m
}), require("./415506.js");
var Chunk264344 = require("./264344.js"),
  i = require.n(Chunk264344),
  Chunk579092 = require("./579092.js"),
  Chunk436620 = require("./436620.js");
let s = new Chunk579092.Yd("LibDaveManager"),
  l = null,
  c = null,
  u = null,
  d = {
    onRuntimeInitialized: () => {
      s.info("DAVE loaded")
    }
  };

function f() {
  return ("Firefox" !== i().name || !(Chunk436620.Zb < 142)) && Chunk436620.WS && "function" == typeof RTCRtpSender && ("transform" in RTCRtpSender.prototype || "createEncodedStreams" in RTCRtpSender.prototype)
}

function p() {
  return "object" == typeof WebAssembly
}

function _() {
  return null != l ? l : l = new Promise((e, t) => {
    Promise.all([n.e("69418"), n.e("13263")]).then(n.bind(n, 129487)).then(n => {
      let {
        DaveModuleFactory: r
      } = n;
      r(d).then(t => {
        s.info("Successfully initialized DAVE"), c = t, e(t)
      }).catch(e => {
        s.error("Failed to initialize DAVE", e), t(e)
      })
    }).catch(e => {
      s.error("Failed to load DAVE module", e), t(e)
    })
  })
}

function m() {
  if (null == c) throw Error("DAVE module not loaded");
  return null == u && (u = new c.TransientKeys), u
}