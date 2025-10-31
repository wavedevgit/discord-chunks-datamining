/** Chunk was on web.js **/
/** chunk id: 960861, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  UB: () => D,
  Uc: () => I,
  ZP: () => H,
  kE: () => x
});
var i, Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk872810 = require("./872810.js"),
  Chunk361291 = require("./361291.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk102172 = require("./102172.js"),
  Chunk74299 = require("./74299.js"),
  Chunk692417 = require("./692417.js"),
  Chunk783443 = require("./783443.js"),
  Chunk299570 = require("./299570.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var I = function(e) {
  return e[e.Present = 0] = "Present", e[e.Update = 1] = "Update", e[e.Cancel = 2] = "Cancel", e[e.Error = 3] = "Error", e
}({});
let T = false,
  S = 0,
  A = 0,
  C = false,
  N = {};

function R() {
  return Chunk131951.Z.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
}

function P() {
  return Chunk131951.Z.getUseSystemScreensharePicker()
}

function w() {
  let e = P() && (A > 0 || T && 0 === S);
  if (module !== C) {
    var t, n;
    C = module, null == (n = Chunk131951.Z.getMediaEngine()) || null == (t = require.setNativeDesktopVideoSourcePickerActive) || exports.call(require, C)
  }
}

function D() {
  return (0, Chunk647438.useEffect)(() => (S++, w(), () => {
    0 == --S && w()
  }), [])
}

function x() {
  return (0, Chunk647438.useEffect)(() => (A++, w(), () => {
    --A, w()
  }), [])
}

function L() {
  let e = Chunk592125.Z.getChannel(Chunk944486.Z.getVoiceChannelId());
  return T = null != module && (0, Chunk74299.Z)(Chunk131951.Z) && (0, Chunk102172.JL)(module, Chunk430824.Z, Chunk496675.Z, false), w(), false
}

function M() {
  return null != r ? (0, Chunk783443.Z)(r) : null
}

function j() {
  return null != r ? (0, Chunk692417.Z)(r) : null
}

function k() {
  var e;
  let {
    soundshareEnabled: t
  } = Chunk361291.Z.getState();
  return {
    sourceId: "prepicked:0",
    nativePickerStyleUsed: N.lastPresentedPickerStyle,
    sourceName: null != (e = M()) ? module : Chunk388032.intl.string(Chunk388032.t.KKcy95),
    sound: exports
  }
}
class U extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([Chunk131951.Z, Chunk944486.Z, Chunk592125.Z, Chunk430824.Z, Chunk496675.Z], L), L()
  }
  supported() {
    return R()
  }
  enabled() {
    return P()
  }
  releasePickerStream() {
    (0, Chunk299570.t)()
  }
  getPickerState() {
    return N
  }
  getLastPickedContent() {
    return r
  }
  getLastPickedContentTitle() {
    return M()
  }
  getLastPickedContentPID() {
    return j()
  }
  getStreamStartOptions() {
    return k()
  }
}

function G(e) {
  let {
    existing: t,
    content: n
  } = e;
  if (N = {
      lastPickerAction: 1
    }, r = n, 0 === S && !t) {
    let e = u.Z.getChannel(p.Z.getVoiceChannelId());
    null != e && (0, m.Z)(f.Z) && (0, h.JL)(e, d.Z, _.Z, false) && (0, l.WH)(e.getGuildId(), e.id, k())
  }
}

function B() {
  N = {
    lastPickerAction: 2
  }
}

function Z(e) {
  let {
    error: t
  } = e;
  N = {
    lastPickerAction: 3,
    lastPickerError: t
  }
}

function F(e) {
  let {
    style: t
  } = e;
  N = {
    lastPickerAction: 0,
    lastPresentedPickerStyle: t
  }
}

function V() {
  N = {}
}
v(U, "displayName", "NativeScreenSharePickerStore");
let H = new U(Chunk570140.Z, {
  NATIVE_SCREEN_SHARE_PICKER_UPDATE: G,
  NATIVE_SCREEN_SHARE_PICKER_CANCEL: B,
  NATIVE_SCREEN_SHARE_PICKER_ERROR: Z,
  NATIVE_SCREEN_SHARE_PICKER_PRESENT: F,
  NATIVE_SCREEN_SHARE_PICKER_RELEASE: V
})