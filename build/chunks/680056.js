/** Chunk was on 57478 **/
/** chunk id: 680056, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk407316 = require("./407316.js"),
  Chunk937784 = require("./937784.jsx");
let o = e => {
  let {
    channelId: t,
    setExporting: n
  } = e, {
    analyticsLocations: o
  } = (0, a.ZP)();
  return {
    onShareClick: l.useCallback(async e => {
      let {
        clip: l,
        cropData: a,
        applicationAudioEnabled: s,
        voiceAudioEnabled: c,
        onShareComplete: u
      } = e;
      n(l.id);
      try {
        var d, p, m, f, g, b, h, x, j, y;
        let e = (0, r.W)(t);
        await (0, i.e)(l, {
          channelId: e ? t : true,
          analyticsLocations: o,
          editMetadata: {
            start: null != (b = null != (g = null == a ? true : a.start) ? g : null == (d = l.editMetadata) ? true : d.start) ? b : 0,
            end: null != (x = null != (h = null == a ? true : a.end) ? h : null == (p = l.editMetadata) ? true : p.end) ? x : l.length / 1e3,
            applicationAudio: null == (j = null != s ? s : null == (m = l.editMetadata) ? true : m.applicationAudio) || j,
            voiceAudio: null == (y = null != c ? c : null == (f = l.editMetadata) ? true : f.voiceAudio) || y
          }
        })
      } catch (e) {} finally {
        null == u || u(), n(null)
      }
    }, [t, o, n])
  }
}