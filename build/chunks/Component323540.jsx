/** Chunk was on 77033 **/
/** chunk id: 323540, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  $: () => x
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
  Chunk174260 = require("./174260.jsx"),
  Chunk640173 = require("./640173.js"),
  Chunk981631 = require("./981631.js"),
  Chunk380063 = require("./380063.js");

function x(e) {
  var n, t;
  let {
    applicationId: x,
    guildId: _,
    page: m
  } = e, {
    ref: b,
    width: v
  } = (0, o.ZP)(), C = (0, d.oR)(), {
    analyticsLocations: k
  } = (0, s.ZP)(), S = i.useRef(null), {
    handleScroll: j
  } = (0, p.I)(S, C, k), [Z, E] = i.useMemo(() => {
    if ((null == m ? true : m.skuIds) == null || 0 === m.skuIds.length) return [
      [],
      []
    ];
    let e = Math.round(null != v ? v : 0);
    return (null == m ? true : m.leaderboard) == null || null == e || e < 564 ? [
      [], m.skuIds
    ] : e < 1104 ? m.skuIds.length >= 2 ? [
      [], m.skuIds
    ] : [m.skuIds.slice(0, 1), m.skuIds.slice(1)] : [m.skuIds.slice(0, 2), m.skuIds.slice(2)]
  }, [m, v]), L = 1 === Z.length && null != v && v >= 834;
  return (i.useEffect(() => {
    let {
      sessionId: e,
      guildId: n,
      pageIndex: t,
      pageTitle: l,
      isUserGuildMember: i,
      pageHasLeaderboard: a
    } = C;
    r.default.track(I.rMx.SLAYER_STOREFRONT_PAGE_VIEWED, {
      slayer_storefront_session_id: e,
      guild_id: n,
      page_index: t,
      page_title: l,
      is_user_guild_member: i,
      page_has_leaderboard: a,
      location_stack: k
    })
  }, [C, k]), null == m) ? null : (0, l.jsx)(a.h21, {
    ref: S,
    onScroll: j,
    children: (0, l.jsxs)("section", {
      ref: b,
      className: h.container,
      children: [(0, l.jsx)(f.n, {
        applicationId: x,
        backgroundImageAssetId: null == (n = m.leaderboard) ? true : n.backgroundImageAssetId
      }), (0, l.jsx)(u.t, {
        analyticsSectionId: "leaderboard",
        leaderboard: m.leaderboard,
        skuId: L ? Z[0] : true,
        applicationId: x,
        guildId: _,
        analyticsLocations: k
      }), (0, l.jsx)(g.Z, {
        analyticsSectionId: "featured-top-section",
        applicationId: x,
        guildId: _,
        skuIds: L ? true : Z,
        variant: c.Z.MEDIUM
      }), (0, l.jsx)(g.Z, {
        analyticsSectionId: "non-featured-top-section",
        applicationId: x,
        guildId: _,
        skuIds: E
      }), null == (t = m.sections) ? true : t.map((e, n) => {
        var t;
        return (0, l.jsx)(g.Z, {
          analyticsSectionId: "index:".concat(n),
          guildId: _,
          applicationId: x,
          sectionTitle: null != (t = e.title) ? t : true,
          skuIds: e.skuIds
        }, "".concat(e.title, "-").concat(n))
      })]
    })
  })
}