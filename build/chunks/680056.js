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
  } = (0, r.ZP)();
  return {
    onShareClick: l.useCallback(async e => {
      let {
        clip: l,
        cropData: r,
        applicationAudioEnabled: c,
        voiceAudioEnabled: s,
        onShareComplete: u
      } = e;
      n(l.id);
      try {
        var d, p, m, f, b, g, h, y, x, j;
        let e = (0, a.W)(t);
        await (0, i.e)(l, {
          channelId: e ? t : true,
          analyticsLocations: o,
          editMetadata: {
            start: null != (g = null != (b = null == r ? true : r.start) ? b : null == (d = l.editMetadata) ? true : d.start) ? g : 0,
            end: null != (y = null != (h = null == r ? true : r.end) ? h : null == (p = l.editMetadata) ? true : p.end) ? y : l.length / 1e3,
            applicationAudio: null == (x = null != c ? c : null == (m = l.editMetadata) ? true : m.applicationAudio) || x,
            voiceAudio: null == (j = null != s ? s : null == (f = l.editMetadata) ? true : f.voiceAudio) || j
          }
        })
      } catch (e) {} finally {
        null == u || u(), n(null)
      }
    }, [t, o, n])
  }
}