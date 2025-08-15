/** Chunk was on 2668 **/
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
  } = (0, l.ZP)();
  return {
    onShareClick: r.useCallback(async e => {
      let {
        clip: r,
        cropData: l,
        applicationAudioEnabled: s,
        voiceAudioEnabled: c,
        onShareComplete: u
      } = e;
      n(r.id);
      try {
        var d, p, m, f, b, g, j, h, y, x;
        let e = (0, a.W)(t);
        await (0, i.e)(r, {
          channelId: e ? t : true,
          analyticsLocations: o,
          editMetadata: {
            start: null != (g = null != (b = null == l ? true : l.start) ? b : null == (d = r.editMetadata) ? true : d.start) ? g : 0,
            end: null != (h = null != (j = null == l ? true : l.end) ? j : null == (p = r.editMetadata) ? true : p.end) ? h : r.length / 1e3,
            applicationAudio: null == (y = null != s ? s : null == (m = r.editMetadata) ? true : m.applicationAudio) || y,
            voiceAudio: null == (x = null != c ? c : null == (f = r.editMetadata) ? true : f.voiceAudio) || x
          }
        })
      } catch (e) {} finally {
        null == u || u(), n(null)
      }
    }, [t, o, n])
  }
}