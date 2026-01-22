/** Chunk was on web.js **/
/** chunk id: 82038, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => g
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
let f = "BODY",
  p = new Set(["PageDown", "PageUp", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
  _ = new Set(["Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Hyper", "Meta", "NumLock", "OS", "ScrollLock", "Shift", "Super", "Symbol", "SymbolLock"]),
  h = new Set(["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "Accept", "ContextMenu", "Find", "ZoomIn", "ZoomOut"]),
  m = new Set(["ChannelDown", "ChannelUp", "MediaFastForward", "MediaPause", "MediaPlay", "MediaPlayPause", "MediaRecord", "MediaRewind", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "AudioBalanceLeft", "AudioBalanceRight", "AudioBassDown", "AudioBassBoostDown", "AudioBassBoostToggle", "AudioBassBoostUp", "AudioBassUp", "AudioFaderFront", "AudioFaderReader", "AudioSurroundModeNext", "AudioTrebleDown", "AudioTreblUp", "AudioVolumeDown", "AudioVolumeMute", "AudioVolumeUp", "VolumeUp", "VolumeDown", "VolumeMute"]),
  g = {
    binds: ["any-character"],
    keydown(e, t) {
      var n;
      let g = null == (n = (0, r.BF)(e)) ? true : n.activeElement;
      if ((0, r.Cw)(g) || i.rxt.isActive() || _.has(t) || h.has(t) || m.has(t)) returnfalse;
      let E = null != g && g.tagName === f;
      return !(a.A.keyboardModeEnabled && !E && !/^[a-zA-Z0-9]$/.test(t) || c._.hasSubscribers(d.jej.MODAL_CLOSE) || s.A.hasLayers()) && ("Tab" === t && c._.hasSubscribers(d.jej.TEXTAREA_FOCUS) && null != document.querySelector('[data-can-focus="true"]') ? (e.preventDefault(), c._.dispatch(d.jej.TEXTAREA_FOCUS), false) : !(l.A.isConnected() && o.A.getMode() === d.TBI.PUSH_TO_TALK && !o.A.isSelfMute() && Object.values(o.A.getShortcuts()).map(u.pi).some(t => t.map(e => e.keyCode).includes(e.keyCode))) && void(!e.metaKey && !e.ctrlKey && !p.has(t) && c._.dispatchToLastSubscribed(d.jej.TEXTAREA_FOCUS)))
    }
  }