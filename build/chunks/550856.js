/** Chunk was on web.js **/
/** chunk id: 550856, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./539854.js"), require("./388685.js");
var Chunk46973 = require("./46973.js"),
  Chunk846027 = require("./846027.js"),
  Chunk147913 = require("./147913.js"),
  Chunk710845 = require("./710845.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk358085 = require("./358085.js"),
  Chunk621413 = require("./621413.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = "c6_BVC",
  _ = new Chunk710845.Z("KrispBVCDeviceManager"),
  m = [],
  h = [],
  g = {
    block_list: [],
    allow_list: []
  };
for (let e of ((0, Chunk358085.isMac)() ? g = require("./598473.js") : (0, Chunk358085.isWindows)() && (g = require("./689437.js")), g.block_list)) "name" in module && h.push(module.name.toLowerCase());
for (let e of g.allow_list) "name" in module && m.push(module.name.toLowerCase());

function E() {
  var e;
  if (!(0, Chunk358085.isMac)() && !(0, Chunk358085.isWindows)() || !Chunk131951.Z.getKrispModels().includes(p)) return;
  let t = Chunk131951.Z.getInputDeviceId(),
    n = Chunk131951.Z.getInputDevices()[exports],
    r = null != Chunk19780.Z.getChannelId();
  if (null == require) return;
  let o = null == (e = Chunk19780.Z.getRTCConnection()) ? true : module.getInputDeviceSampleRate(),
    a = Chunk621413.F.getCurrentConfig({
      location: "KrispBVCDeviceManager"
    }, {
      autoTrackExposure: false
    }).allowBVC;
  if (null != Chunk147913 && Chunk147913 < 16e3) {
    Chunk131951.Z.getKrispModelOverride() && (_.info("BVC model doesn't support <16kHz sample rate, disabling BVC."), Chunk846027.Z.setKrispModelOverride(""));
    return
  }
  let d = require.name.toLowerCase();
  if (h.some(e => d.includes(e))) {
    Chunk131951.Z.getKrispModelOverride() && (_.info("BVC not compatible with device, disabling BVC."), Chunk846027.Z.setKrispModelOverride(""));
    return
  }
  if (m.some(e => d.includes(e))) return (Chunk46973 && Chunk621413.F.trackExposure({
    location: "KrispBVCDeviceManager"
  }), Chunk710845) ? void(Chunk131951.Z.getKrispModelOverride() !== p && (_.info("BVC compatible with device, enabling BVC."), Chunk846027.Z.setKrispModelOverride(p))) : void Chunk846027.Z.setKrispModelOverride("");
  Chunk131951.Z.getKrispModelOverride() && (_.info("Unknown BVC compatibility with device, disabling BVC."), Chunk846027.Z.setKrispModelOverride(""))
}
class b extends Chunk147913.Z {
  constructor(...e) {
    super(...e), f(this, "actions", {
      AUDIO_SET_INPUT_DEVICE: E,
      MEDIA_ENGINE_DEVICES: E,
      RTC_CONNECTION_STATE: e => {
        let {
          context: t,
          state: n
        } = e;
        t === r.Yn.DEFAULT && n === d.hes.RTC_CONNECTING && E()
      },
      AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED: E
    })
  }
}
let y = new b