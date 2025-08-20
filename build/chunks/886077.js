/** Chunk was on web.js **/
/** chunk id: 886077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => g
}), require("./388685.js"), require("./35282.js");
var Chunk34415 = require("./34415.js"),
  Chunk607070 = require("./607070.js"),
  Chunk819640 = require("./819640.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk585483 = require("./585483.js"),
  Chunk5967 = require("./5967.js"),
  Chunk13140 = require("./13140.js"),
  Chunk981631 = require("./981631.js");
let f = "BODY",
  _ = new Set(["PageDown", "PageUp", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
  p = new Set(["Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Hyper", "Meta", "NumLock", "OS", "ScrollLock", "Shift", "Super", "Symbol", "SymbolLock"]),
  h = new Set(["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "Accept", "ContextMenu", "Find", "ZoomIn", "ZoomOut"]),
  m = new Set(["ChannelDown", "ChannelUp", "MediaFastForward", "MediaPause", "MediaPlay", "MediaPlayPause", "MediaRecord", "MediaRewind", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "AudioBalanceLeft", "AudioBalanceRight", "AudioBassDown", "AudioBassBoostDown", "AudioBassBoostToggle", "AudioBassBoostUp", "AudioBassUp", "AudioFaderFront", "AudioFaderReader", "AudioSurroundModeNext", "AudioTrebleDown", "AudioTreblUp", "AudioVolumeDown", "AudioVolumeMute", "AudioVolumeUp", "VolumeUp", "VolumeDown", "VolumeMute"]),
  g = {
    binds: ["any-character"],
    keydown(e, t) {
      var n;
      let g = null == (n = (0, c.uB)(e)) ? true : n.activeElement;
      if ((0, c.VG)(g) || r.fC.isActive() || p.has(t) || h.has(t) || m.has(t)) returnfalse;
      let E = null != g && g.tagName === f;
      return !(i.Z.keyboardModeEnabled && !E && !/^[a-zA-Z0-9]$/.test(t) || l.S.hasSubscribers(d.CkL.MODAL_CLOSE) || a.Z.hasLayers()) && ("Tab" === t && l.S.hasSubscribers(d.CkL.TEXTAREA_FOCUS) && null != document.querySelector('[data-can-focus="true"]') ? (e.preventDefault(), l.S.dispatch(d.CkL.TEXTAREA_FOCUS), false) : !(s.Z.isConnected() && o.Z.getMode() === d.pM4.PUSH_TO_TALK && !o.Z.isSelfMute() && Object.values(o.Z.getShortcuts()).map(u.d2).some(t => t.map(e => e.keyCode).includes(e.keyCode))) && void(!e.metaKey && !e.ctrlKey && !_.has(t) && l.S.dispatchToLastSubscribed(d.CkL.TEXTAREA_FOCUS)))
    }
  }