/** Chunk was on 66866 **/
/** chunk id: 880251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk361213 = require("./361213.js"),
  Chunk778569 = require("./778569.js"),
  Chunk783097 = require("./783097.js"),
  Chunk768581 = require("./768581.js"),
  Chunk758199 = require("./758199.jsx");

function c(e) {
  let {
    bot: t
  } = e, n = (0, a.ye)(e), {
    url: c
  } = (0, l.Z)({
    applicationId: n ? e.id : true,
    size: 600,
    names: ["embedded_cover"]
  });
  return r.useMemo(() => {
    let r, l, u = s.u.BOT;
    if (null != t) {
      let {
        banner: e
      } = t;
      r = (0, o.aN)({
        id: t.id,
        banner: e,
        size: 512,
        canAnimate: false
      }), (0, o.xR)(e) && null == c && (l = (0, o.aN)({
        id: t.id,
        banner: e,
        size: 512,
        canAnimate: true
      }))
    }
    if (n) {
      let t = (0, a.yJ)(e);
      null != c && (r = c, u = s.u.ACTIVITY);
      let n = null == t ? true : t.activity_preview_video_asset_id;
      null != n && (l = (0, i.Z)(e.id, n), u = s.u.ACTIVITY)
    }
    return {
      staticBannerSrc: r,
      videoBannerSrc: l,
      bannerAspectRatio: u
    }
  }, [c, t, n, e])
}