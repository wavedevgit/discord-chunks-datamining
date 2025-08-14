/** Chunk was on 7384 **/
/** chunk id: 886077, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => f
}), require("./388685.js"), require("./35282.js");
var Chunk670481 = require("./670481.js"),
  Chunk607070 = require("./607070.js"),
  Chunk819640 = require("./819640.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk585483 = require("./585483.js"),
  Chunk5967 = require("./5967.js"),
  Chunk13140 = require("./13140.js"),
  Chunk981631 = require("./981631.js");
let m = new Set(["PageDown", "PageUp", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
  p = new Set(["Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Hyper", "Meta", "NumLock", "OS", "ScrollLock", "Shift", "Super", "Symbol", "SymbolLock"]),
  g = new Set(["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "Accept", "ContextMenu", "Find", "ZoomIn", "ZoomOut"]),
  h = new Set(["ChannelDown", "ChannelUp", "MediaFastForward", "MediaPause", "MediaPlay", "MediaPlayPause", "MediaRecord", "MediaRewind", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "AudioBalanceLeft", "AudioBalanceRight", "AudioBassDown", "AudioBassBoostDown", "AudioBassBoostToggle", "AudioBassBoostUp", "AudioBassUp", "AudioFaderFront", "AudioFaderReader", "AudioSurroundModeNext", "AudioTrebleDown", "AudioTreblUp", "AudioVolumeDown", "AudioVolumeMute", "AudioVolumeUp", "VolumeUp", "VolumeDown", "VolumeMute"]),
  f = {
    binds: ["any-character"],
    keydown(e, t) {
      var n;
      let f = null == (n = (0, c.uB)(e)) ? true : n.activeElement;
      if ((0, c.VG)(f) || i.fC.isActive() || p.has(t) || g.has(t) || h.has(t)) returnfalse;
      let b = null != f && "BODY" === f.tagName;
      return !(r.Z.keyboardModeEnabled && !b && !/^[a-zA-Z0-9]$/.test(t) || o.S.hasSubscribers(u.CkL.MODAL_CLOSE) || s.Z.hasLayers()) && ("Tab" === t && o.S.hasSubscribers(u.CkL.TEXTAREA_FOCUS) && null != document.querySelector('[data-can-focus="true"]') ? (e.preventDefault(), o.S.dispatch(u.CkL.TEXTAREA_FOCUS), false) : !(l.Z.isConnected() && a.Z.getMode() === u.pM4.PUSH_TO_TALK && !a.Z.isSelfMute() && Object.values(a.Z.getShortcuts()).map(d.d2).some(t => t.map(e => e.keyCode).includes(e.keyCode))) && void(!e.metaKey && !e.ctrlKey && !m.has(t) && o.S.dispatchToLastSubscribed(u.CkL.TEXTAREA_FOCUS)))
    }
  }