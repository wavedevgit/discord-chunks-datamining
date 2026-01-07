/** Chunk was on web.js **/
/** chunk id: 703767, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./539854.js"), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk579806 = require("./579806.js");
require("./987170.js");
var Chunk998502 = require("./998502.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
let l = [0, 0],
  c = [];

function u(e) {
  for (let t of e)
    if (t[0] === l[0] && t[1] === l[1]) returntrue;
  returnfalse
}
let d = false;

function f() {
  let e = {};
  for (let t of c) u(t.gpus) && (e = s({}, e, t.experiment.getCurrentConfig({
    location: "updateFlags"
  })));
  a.ZP.setChromiumSwitches(e)
}
class p extends Chunk147913.Z {
  constructor(...e) {
    super(...e), o(this, "actions", {
      POST_CONNECTION_OPEN: async () => {
        try {
          var e, t, n, r;
          if (d || (null == (t = window.DiscordNative) || null == (e = t.gpuSettings) ? true : e.setChromiumSwitches) == null) return;
          for (let e of null != (r = null == (n = (await i.Z.processUtils.getSystemInfo()).electronGPUInfo) ? true : n.gpuDevice) ? r : []) true === e.active && (l = [e.vendorId, e.deviceId]);
          for (let e of (d = true, c)) u(e.gpus) && e.experiment.subscribe({
            location: "GPU experiment subscription"
          }, f);
          f()
        } catch (e) {}
      }
    })
  }
}
let _ = new p