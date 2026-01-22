/** Chunk was on web.js **/
/** chunk id: 112150, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk435582 = require("./435582.js"),
  Chunk283488 = require("./283488.js"),
  Chunk735991 = require("./735991.js"),
  Chunk486020 = require("./486020.js"),
  Chunk572211 = require("./572211.jsx");

function c(e) {
  let {
    bot: t
  } = e, n = (0, s.Ag)(e), {
    url: c
  } = (0, a.A)({
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
      r = (0, o.z)({
        id: t.id,
        banner: e,
        size: 512,
        canAnimate: false
      }), (0, o.VI)(e) && null == c && (a = (0, o.z)({
        id: t.id,
        banner: e,
        size: 512,
        canAnimate: true
      }))
    }
    if (n) {
      let t = (0, s.Cx)(e);
      null != c && (r = c, u = l.u.ACTIVITY);
      let n = null == t ? true : t.activity_preview_video_asset_id;
      null != n && (a = (0, i.A)(e.id, n), u = l.u.ACTIVITY)
    }
    return {
      staticBannerSrc: r,
      videoBannerSrc: a,
      bannerAspectRatio: u
    }
  }, [c, t, n, e])
}