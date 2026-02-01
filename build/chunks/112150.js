/** Chunk was on 9753 **/
/** chunk id: 112150, original params: e,t,n (module,exports,require) **/
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
  } = e, n = (0, a.Ag)(e), {
    url: c
  } = (0, l.A)({
    applicationId: n ? e.id : true,
    size: 600,
    names: ["embedded_cover"]
  });
  return r.useMemo(() => {
    let r, l, u = o.u.BOT;
    if (null != t) {
      let {
        banner: e
      } = t;
      r = (0, s.z)({
        id: t.id,
        banner: e,
        size: 512,
        canAnimate: false
      }), (0, s.VI)(e) && null == c && (l = (0, s.z)({
        id: t.id,
        banner: e,
        size: 512,
        canAnimate: true
      }))
    }
    if (n) {
      let t = (0, a.Cx)(e);
      null != c && (r = c, u = o.u.ACTIVITY);
      let n = null == t ? true : t.activity_preview_video_asset_id;
      null != n && (l = (0, i.A)(e.id, n), u = o.u.ACTIVITY)
    }
    return {
      staticBannerSrc: r,
      videoBannerSrc: l,
      bannerAspectRatio: u
    }
  }, [c, t, n, e])
}