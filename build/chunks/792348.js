/** Chunk was on web.js **/
/** chunk id: 792348, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk946261 = require("./946261.js"),
  Chunk536184 = require("./536184.js"),
  Chunk523006 = require("./523006.js"),
  Chunk253932 = require("./253932.js"),
  Chunk723702 = require("./723702.js"),
  Chunk209932 = require("./209932.js"),
  Chunk536432 = require("./536432.js"),
  Chunk102597 = require("./102597.js"),
  Chunk904054 = require("./904054.js"),
  Chunk257645 = require("./257645.js");

function h(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : (() => {
      var e, t;
      return null != (e = null == (t = l.dG.getSetting()) ? true : t.volume) ? e : 100
    })(),
    h = arguments.length > 3 && true !== arguments[3] ? arguments[3] : _.a.DEFAULT,
    {
      audioRef: m
    } = r.useContext(s.A),
    [g, E] = r.useState(false),
    y = (0, i.bG)([u.A], () => u.A.isPlayingSound(e.soundId), [e]);
  return {
    playSoundboardSound: r.useCallback(n => {
      null != m.current && m.current.pause(), null != t && (0, d.Ak)(e, t, n)
    }, [e, m, t]),
    isPlayingSound: y,
    previewSound: r.useCallback(async () => {
      let t = (0, f.A)(e.soundId),
        r = new(await (0, o.A)(t));
      if (r.src = t, null != m.current && m.current.pause(), c.isPlatformEmbedded && h === _.a.VOICE) {
        var i;
        null == (i = r.setSinkId) || i.call(r, a.voiceSinkId)
      }
      m.current = r, r.currentTime = 0, r.volume = (0, p.A)(e.volume, n), r.play(), E(true), r.addEventListener("pause", () => E(false), {
        once: true
      })
    }, [e, n, m, h]),
    isPreviewingSound: g
  }
}