/** Chunk was on web.js **/
/** chunk id: 584014, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk964486 = require("./964486.js"),
  Chunk946261 = require("./946261.js"),
  Chunk536184 = require("./536184.js"),
  Chunk523006 = require("./523006.js"),
  Chunk257645 = require("./257645.js");

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      audioRef: n
    } = r.useContext(o.A),
    c = r.useRef(null),
    [u, d] = r.useState(() => {
      var e;
      return null != t.soundId && (null == (e = n.current) ? true : e.dataset.soundId) === t.soundId && !n.current.paused
    });
  (0, i.Ay)(() => {
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
    let t = new(await (0, s.A)(e));
    t.src = e, c.current = t
  }, [c, e]);
  return {
    isPlaying: u,
    playSound: r.useCallback(function() {
      var e, r;
      let {
        volume: i,
        outputChannel: s = l.a.DEFAULT
      } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      f(), null == (e = n.current) || e.pause();
      let {
        current: o
      } = c;
      return null != o && (n.current = o, o.currentTime = 0, o.volume = null != i ? i : 1, o.dataset.soundId = t.soundId, s === l.a.VOICE && (null == (r = o.setSinkId) || r.call(o, a.voiceSinkId)), o.play(), o.onplay = () => d(true), o.onpause = () => d(false), o.onended = () => d(false), true)
    }, [n, t.soundId, f]),
    stopSound: r.useCallback(() => {
      let {
        current: e
      } = n;
      null == e || (null == t.soundId || e.dataset.soundId === t.soundId) && (e.pause(), d(false))
    }, [n, t.soundId]),
    preloadSound: f
  }
}