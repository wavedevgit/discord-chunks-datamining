/** Chunk was on 77033 **/
/** chunk id: 323540, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  $: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk393238 = require("./393238.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk590961 = require("./590961.jsx"),
  Chunk840724 = require("./840724.jsx"),
  Chunk533785 = require("./533785.jsx"),
  Chunk171524 = require("./171524.jsx"),
  Chunk822458 = require("./822458.jsx"),
  Chunk640173 = require("./640173.js"),
  Chunk981631 = require("./981631.js"),
  Chunk329353 = require("./329353.js");

function h(e) {
  var n, t;
  let {
    applicationId: h,
    guildId: x,
    page: m
  } = e, {
    ref: v,
    width: C
  } = (0, o.ZP)(), b = (0, d.oR)(), {
    analyticsLocations: k
  } = (0, r.ZP)(), j = i.useRef(null), {
    handleScroll: S
  } = (0, _.I)(j, b, k), [Z, E] = i.useMemo(() => {
    if ((null == m ? true : m.skuIds) == null || (null == m ? true : m.skuIds.length) === 0) return [
      [],
      []
    ];
    let e = Math.round(null != C ? C : 0);
    return (null == m ? true : m.leaderboard) == null || null == e || e <= 516 || e < 1104 ? [
      [], null == m ? true : m.skuIds
    ] : [null == m ? true : m.skuIds.slice(0, 2), null == m ? true : m.skuIds.slice(2)]
  }, [m, C]);
  return (i.useEffect(() => {
    let {
      sessionId: e,
      guildId: n,
      pageIndex: t,
      pageTitle: l,
      isUserGuildMember: i,
      pageHasLeaderboard: a
    } = b;
    s.default.track(f.rMx.SLAYER_STOREFRONT_PAGE_VIEWED, {
      slayer_storefront_session_id: e,
      guild_id: n,
      page_index: t,
      page_title: l,
      is_user_guild_member: i,
      page_has_leaderboard: a,
      location_stack: k
    })
  }, [b, k]), null == m) ? null : (0, l.jsx)(a.h21, {
    ref: j,
    onScroll: S,
    children: (0, l.jsxs)("section", {
      ref: v,
      className: I.container,
      children: [(0, l.jsx)(g.n, {
        applicationId: h,
        backgroundImageAssetId: null == (n = m.leaderboard) ? true : n.backgroundImageAssetId
      }), (0, l.jsx)(u.t, {
        leaderboard: m.leaderboard
      }), (0, l.jsx)(p.Z, {
        analyticsSectionId: "featured-top-section",
        applicationId: h,
        guildId: x,
        skuIds: Z,
        variant: c.Z.MEDIUM
      }), (0, l.jsx)(p.Z, {
        analyticsSectionId: "non-featured-top-section",
        applicationId: h,
        guildId: x,
        skuIds: E
      }), null == (t = m.sections) ? true : t.map((e, n) => {
        var t;
        return (0, l.jsx)(p.Z, {
          analyticsSectionId: "index:".concat(n),
          guildId: x,
          applicationId: h,
          sectionTitle: null != (t = e.title) ? t : true,
          skuIds: e.skuIds
        }, "".concat(e.title, "-").concat(n))
      })]
    })
  })
}