/** Chunk was on 60667 **/
/** chunk id: 82038, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => A
}), require("./896048.js"), require("./747238.js");
var Chunk621466 = require("./621466.js"),
  Chunk158954 = require("./158954.js"),
  Chunk775602 = require("./775602.js"),
  Chunk186111 = require("./186111.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk203982 = require("./203982.js"),
  Chunk350535 = require("./350535.js"),
  Chunk652215 = require("./652215.js");
let _ = new Set(["PageDown", "PageUp", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
  p = new Set(["Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Hyper", "Meta", "NumLock", "OS", "ScrollLock", "Shift", "Super", "Symbol", "SymbolLock"]),
  m = new Set(["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "Accept", "ContextMenu", "Find", "ZoomIn", "ZoomOut"]),
  g = new Set(["ChannelDown", "ChannelUp", "MediaFastForward", "MediaPause", "MediaPlay", "MediaPlayPause", "MediaRecord", "MediaRewind", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "AudioBalanceLeft", "AudioBalanceRight", "AudioBassDown", "AudioBassBoostDown", "AudioBassBoostToggle", "AudioBassBoostUp", "AudioBassUp", "AudioFaderFront", "AudioFaderReader", "AudioSurroundModeNext", "AudioTrebleDown", "AudioTreblUp", "AudioVolumeDown", "AudioVolumeMute", "AudioVolumeUp", "VolumeUp", "VolumeDown", "VolumeMute"]),
  A = {
    binds: ["any-character"],
    keydown(e, t) {
      var n;
      let A = null == (n = (0, r.BF)(e)) ? true : n.activeElement;
      if ((0, r.Cw)(A) || i.rxt.isActive() || p.has(t) || m.has(t) || g.has(t)) returnfalse;
      let f = null != A && "BODY" === A.tagName;
      return !(l.A.keyboardModeEnabled && !f && !/^[a-zA-Z0-9]$/.test(t) || c._.hasSubscribers(u.jej.MODAL_CLOSE) || s.A.hasLayers()) && ("Tab" === t && c._.hasSubscribers(u.jej.TEXTAREA_FOCUS) && null != document.querySelector('[data-can-focus="true"]') ? (e.preventDefault(), c._.dispatch(u.jej.TEXTAREA_FOCUS), false) : !(o.A.isConnected() && a.A.getMode() === u.TBI.PUSH_TO_TALK && !a.A.isSelfMute() && Object.values(a.A.getShortcuts()).map(d.pi).some(t => t.map(e => e.keyCode).includes(e.keyCode))) && void(!e.metaKey && !e.ctrlKey && !_.has(t) && c._.dispatchToLastSubscribed(u.jej.TEXTAREA_FOCUS)))
    }
  }