/** Chunk was on web.js **/
/** chunk id: 794905, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk399925 = require("./399925.js"),
  Chunk74847 = require("./74847.js"),
  Chunk602902 = require("./602902.jsx");
let l = e => {
  let {
    analyticsLocations: t
  } = (0, i.Ay)();
  return {
    onShareClick: r.useCallback(async n => {
      let {
        clips: r,
        onShareComplete: i,
        messageReference: l
      } = n;
      if (0 === r.length) return;
      let c = (0, s.t)(e);
      (0, a.H1)(r.map(e => e.id));
      try {
        await (0, o.K)(r, {
          channelId: c ? e : true,
          analyticsLocations: t,
          messageReference: l
        })
      } catch (e) {} finally {
        (0, a.H1)(null), null == i || i()
      }
    }, [e, t])
  }
}