/** Chunk was on web.js **/
/** chunk id: 680056, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk39604 = require("./39604.js"),
  Chunk407316 = require("./407316.js"),
  Chunk937784 = require("./937784.jsx");
let l = e => {
  let {
    analyticsLocations: t
  } = (0, i.ZP)();
  return {
    onShareClick: r.useCallback(async n => {
      let {
        clips: r,
        onShareComplete: i,
        messageReference: l
      } = n;
      if (0 === r.length) return;
      let c = (0, o.W)(e);
      (0, a.UY)(r.map(e => e.id));
      try {
        await (0, s.e)(r, {
          channelId: c ? e : true,
          analyticsLocations: t,
          messageReference: l
        })
      } catch (e) {} finally {
        (0, a.UY)(null), null == i || i()
      }
    }, [e, t])
  }
}