/** Chunk was on web.js **/
/** chunk id: 880251, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk361213 = require("./361213.js"),
  Chunk778569 = require("./778569.js"),
  Chunk783097 = require("./783097.js"),
  Chunk768581 = require("./768581.js"),
  Chunk758199 = require("./758199.jsx");

function c(e) {
  let {
    bot: t
  } = e, n = (0, o.ye)(e), {
    url: c
  } = (0, a.Z)({
    applicationId: n ? e.id : true,
    size: 600,
    names: ["embedded_cover"]
  });
  return r.useMemo(() => {
    let r, a, u = l.u.BOT;
    if (null != t) {
      let {
        banner: e
      } = t;
      r = (0, s.aN)({
        id: t.id,
        banner: e,
        size: 512,
        canAnimate: false
      }), (0, s.xR)(e) && null == c && (a = (0, s.aN)({
        id: t.id,
        banner: e,
        size: 512,
        canAnimate: true
      }))
    }
    if (n) {
      let t = (0, o.yJ)(e);
      null != c && (r = c, u = l.u.ACTIVITY);
      let n = null == t ? true : t.activity_preview_video_asset_id;
      null != n && (a = (0, i.Z)(e.id, n), u = l.u.ACTIVITY)
    }
    return {
      staticBannerSrc: r,
      videoBannerSrc: a,
      bannerAspectRatio: u
    }
  }, [c, t, n, e])
}