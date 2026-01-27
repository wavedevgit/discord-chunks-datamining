/** Chunk was on 92917 **/
/** chunk id: 794905, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk399925 = require("./399925.js"),
  Chunk74847 = require("./74847.js"),
  Chunk602902 = require("./602902.jsx");
let o = e => {
  let {
    analyticsLocations: t
  } = (0, i.Ay)();
  return {
    onShareClick: r.useCallback(async n => {
      let {
        clips: r,
        onShareComplete: i,
        messageReference: o
      } = n;
      if (0 === r.length) return;
      let c = (0, a.t)(e);
      (0, l.H1)(r.map(e => e.id));
      try {
        await (0, s.K)(r, {
          channelId: c ? e : true,
          analyticsLocations: t,
          messageReference: o
        })
      } catch (e) {} finally {
        (0, l.H1)(null), null == i || i()
      }
    }, [e, t])
  }
}