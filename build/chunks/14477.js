/** Chunk was on web.js **/
/** chunk id: 14477, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./321073.js"), require("./896048.js");
var Chunk205693 = require("./205693.js"),
  Chunk827343 = require("./827343.js"),
  Chunk439372 = require("./439372.js"),
  Chunk626584 = require("./626584.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk723702 = require("./723702.js"),
  Chunk842772 = require("./842772.js"),
  Chunk652215 = require("./652215.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = "c6_BVC",
  _ = new Chunk626584.A("KrispBVCDeviceManager"),
  h = [],
  m = [],
  g = {
    block_list: [],
    allow_list: []
  };
for (let e of ((0, Chunk723702.isMac)() ? g = require("./361494.js") : (0, Chunk723702.isWindows)() && (g = require("./699248.js")), g.block_list)) "name" in module && m.push(module.name.toLowerCase());
for (let e of g.allow_list) "name" in module && h.push(module.name.toLowerCase());

function E() {
  var e;
  if (!(0, c.isMac)() && !(0, c.isWindows)() || !o.A.getKrispModels().includes(p)) return;
  let t = o.A.getInputDeviceId(),
    n = o.A.getInputDevices()[t],
    r = null != l.A.getChannelId();
  if (null == n) return;
  let a = null == (e = l.A.getRTCConnection()) ? true : e.getInputDeviceSampleRate(),
    s = u._.getCurrentConfig({
      location: "KrispBVCDeviceManager"
    }, {
      autoTrackExposure: false
    }).allowBVC;
  if (null != a && a < 16e3) {
    o.A.getKrispModelOverride() && (_.info("BVC model doesn't support <16kHz sample rate, disabling BVC."), i.A.setKrispModelOverride(""));
    return
  }
  let d = n.name.toLowerCase();
  if (m.some(e => d.includes(e))) {
    o.A.getKrispModelOverride() && (_.info("BVC not compatible with device, disabling BVC."), i.A.setKrispModelOverride(""));
    return
  }
  h.some(e => d.includes(e)) ? (r && u._.trackExposure({
    location: "KrispBVCDeviceManager"
  }), s) ? o.A.getKrispModelOverride() !== p && (_.info("BVC compatible with device, enabling BVC."), i.A.setKrispModelOverride(p)) : i.A.setKrispModelOverride("") : o.A.getKrispModelOverride() && (_.info("Unknown BVC compatibility with device, disabling BVC."), i.A.setKrispModelOverride(""))
}
class y extends Chunk439372.A {
  constructor(...e) {
    super(...e), f(this, "actions", {
      AUDIO_SET_INPUT_DEVICE: E,
      MEDIA_ENGINE_DEVICES: E,
      RTC_CONNECTION_STATE: e => {
        let {
          context: t,
          state: n
        } = e;
        t === r.x.DEFAULT && n === d.S7L.RTC_CONNECTING && E()
      },
      AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED: E
    })
  }
}
let b = new y