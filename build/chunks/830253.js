/** Chunk was on web.js **/
/** chunk id: 830253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk146779 = require("./146779.js"),
  Chunk545511 = require("./545511.js"),
  Chunk386965 = require("./386965.js"),
  Chunk695346 = require("./695346.js"),
  Chunk358085 = require("./358085.js"),
  Chunk763296 = require("./763296.js"),
  Chunk242291 = require("./242291.js"),
  Chunk22382 = require("./22382.js"),
  Chunk747071 = require("./747071.js"),
  Chunk509571 = require("./509571.js");

function m(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : (() => {
      var e;
      return null != (r = null == (e = c.kU.getSetting()) ? true : e.volume) ? r : 100
    })(),
    m = arguments.length > 3 && true !== arguments[3] ? arguments[3] : h.w.DEFAULT,
    {
      audioRef: g
    } = i.useContext(l.Z),
    [E, b] = i.useState(false),
    y = (0, a.e7)([d.Z], () => d.Z.isPlayingSound(e.soundId), [e]);
  return {
    playSoundboardSound: i.useCallback(n => {
      null != g.current && g.current.pause(), null != t && (0, f.GN)(e, t, n)
    }, [e, g, t]),
    isPlayingSound: y,
    previewSound: i.useCallback(async () => {
      let t = (0, p.Z)(e.soundId),
        r = new(await (0, s.Z)(t));
      if (r.src = t, null != g.current && g.current.pause(), u.isPlatformEmbedded && m === h.w.VOICE) {
        var i;
        null == (i = r.setSinkId) || i.call(r, o.voiceSinkId)
      }
      g.current = r, r.currentTime = 0, r.volume = (0, _.Z)(e.volume, n), r.play(), b(true), r.addEventListener("pause", () => b(false), {
        once: true
      })
    }, [e, n, g, m]),
    isPreviewingSound: E
  }
}