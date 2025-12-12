/** Chunk was on web.js **/
/** chunk id: 469121, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk493773 = require("./493773.js"),
  Chunk146779 = require("./146779.js"),
  Chunk545511 = require("./545511.js"),
  Chunk386965 = require("./386965.js"),
  Chunk509571 = require("./509571.js");

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      audioRef: n
    } = r.useContext(s.Z),
    c = r.useRef(null),
    [u, d] = r.useState(() => {
      var e;
      return null != t.soundId && (null == (e = n.current) ? true : e.dataset.soundId) === t.soundId && !n.current.paused
    });
  (0, i.ZP)(() => {
    let {
      current: e
    } = n;
    null != e && null != t.soundId && u && e.addEventListener("pause", () => d(false), {
      once: true
    })
  });
  let f = r.useCallback(async () => {
    if (null == e) {
      c.current = null;
      return
    }
    if (null != c.current && c.current.src === e) return;
    let t = new(await (0, a.Z)(e));
    t.src = e, c.current = t
  }, [c, e]);
  return {
    isPlaying: u,
    playSound: r.useCallback(function() {
      var e, r;
      let {
        volume: i,
        outputChannel: a = l.w.DEFAULT
      } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      f(), null == (e = n.current) || e.pause();
      let {
        current: s
      } = c;
      return null != s && (n.current = s, s.currentTime = 0, s.volume = null != i ? i : 1, s.dataset.soundId = t.soundId, a === l.w.VOICE && (null == (r = s.setSinkId) || r.call(s, o.voiceSinkId)), s.play(), s.onplay = () => d(true), s.onpause = () => d(false), s.onended = () => d(false), true)
    }, [n, t.soundId, f]),
    stopSound: r.useCallback(() => {
      let {
        current: e
      } = n;
      null != e && (null == t.soundId || e.dataset.soundId === t.soundId) && (e.pause(), d(false))
    }, [n, t.soundId]),
    preloadSound: f
  }
}