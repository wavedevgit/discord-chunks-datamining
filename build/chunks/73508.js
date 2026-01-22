/** Chunk was on web.js **/
/** chunk id: 73508, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./321073.js"), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk77729 = require("./77729.js");
require("./143770.js");
var Chunk837921 = require("./837921.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
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
  for (let t of c) u(t.gpus) && (e = o({}, e, t.experiment.getCurrentConfig({
    location: "updateFlags"
  })));
  a.Ay.setChromiumSwitches(e)
}
class p extends Chunk439372.A {
  constructor(...e) {
    super(...e), s(this, "actions", {
      POST_CONNECTION_OPEN: async () => {
        try {
          var e, t, n, r;
          if (d || (null == (n = window.DiscordNative) || null == (t = n.gpuSettings) ? true : t.setChromiumSwitches) == null) return;
          for (let t of null != (e = null == (r = (await i.A.processUtils.getSystemInfo()).electronGPUInfo) ? true : r.gpuDevice) ? e : []) true === t.active && (l = [t.vendorId, t.deviceId]);
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