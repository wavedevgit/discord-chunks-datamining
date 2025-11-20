/** Chunk was on 77033 **/
/** chunk id: 323540, original params: e,n,l (module,exports,require) **/
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
  Chunk981631 = require("./981631.js"),
  Chunk329353 = require("./329353.js");

function h(e) {
  var n, l;
  let {
    applicationId: h,
    guildId: m,
    page: _
  } = e, {
    ref: f,
    width: v
  } = (0, o.ZP)(), j = (0, s.oR)(), {
    analyticsLocations: C
  } = (0, d.ZP)(), [k, b] = i.useMemo(() => {
    if ((null == _ ? true : _.skuIds) == null || (null == _ ? true : _.skuIds.length) === 0) return [
      [],
      []
    ];
    let e = Math.round(null != v ? v : 0);
    return (null == _ ? true : _.leaderboard) == null || null == e || e <= 516 || e < 1104 ? [
      [], null == _ ? true : _.skuIds
    ] : [null == _ ? true : _.skuIds.slice(0, 2), null == _ ? true : _.skuIds.slice(2)]
  }, [_, v]);
  return (i.useEffect(() => {
    let {
      sessionId: e,
      guildId: n,
      pageIndex: l,
      pageTitle: t,
      isUserGuildMember: i
    } = j;
    r.default.track(I.rMx.SLAYER_SHOP_VIEWED, {
      slayer_shop_session_id: e,
      guild_id: n,
      page_index: l,
      page_title: t,
      is_user_guild_member: i,
      location_stack: C
    })
  }, [j, C]), null == _) ? null : (0, t.jsx)(a.zJl, {
    children: (0, t.jsxs)("section", {
      ref: f,
      className: x.container,
      children: [(0, t.jsx)(p.n, {
        applicationId: h,
        backgroundImageAssetId: null == (n = _.leaderboard) ? true : n.backgroundImageAssetId
      }), (0, t.jsx)(u.t, {
        leaderboard: _.leaderboard
      }), (0, t.jsx)(g.Z, {
        analyticsSectionId: "featured-top-section",
        applicationId: h,
        guildId: m,
        skuIds: k,
        variant: c.Z.MEDIUM
      }), (0, t.jsx)(g.Z, {
        analyticsSectionId: "non-featured-top-section",
        applicationId: h,
        guildId: m,
        skuIds: b
      }), null == (l = _.sections) ? true : l.map((e, n) => {
        var l;
        return (0, t.jsx)(g.Z, {
          analyticsSectionId: "index:".concat(n),
          guildId: m,
          applicationId: h,
          sectionTitle: null != (l = e.title) ? l : true,
          skuIds: e.skuIds
        }, "".concat(e.title, "-").concat(n))
      })]
    })
  })
}