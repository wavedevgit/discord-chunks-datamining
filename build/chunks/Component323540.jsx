/** Chunk was on 77033 **/
/** chunk id: 323540, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  $: () => _
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

function _(e) {
  var n, t;
  let {
    applicationId: _,
    guildId: f,
    page: h
  } = e, {
    ref: m,
    width: v
  } = (0, o.ZP)(), C = (0, d.oR)(), {
    analyticsLocations: j
  } = (0, s.ZP)(), [k, b] = i.useMemo(() => {
    if ((null == h ? true : h.skuIds) == null || (null == h ? true : h.skuIds.length) === 0) return [
      [],
      []
    ];
    let e = Math.round(null != v ? v : 0);
    return (null == h ? true : h.leaderboard) == null || null == e || e <= 516 || e < 1104 ? [
      [], null == h ? true : h.skuIds
    ] : [null == h ? true : h.skuIds.slice(0, 2), null == h ? true : h.skuIds.slice(2)]
  }, [h, v]);
  return (i.useEffect(() => {
    let {
      sessionId: e,
      guildId: n,
      pageIndex: t,
      pageTitle: l,
      isUserGuildMember: i
    } = C;
    r.default.track(I.rMx.SLAYER_SHOP_VIEWED, {
      slayer_shop_session_id: e,
      guild_id: n,
      page_index: t,
      page_title: l,
      is_user_guild_member: i,
      location_stack: j
    })
  }, [C, j]), null == h) ? null : (0, l.jsx)(a.zJl, {
    children: (0, l.jsxs)("section", {
      ref: m,
      className: x.container,
      children: [(0, l.jsx)(p.n, {
        applicationId: _,
        backgroundImageAssetId: null == (n = h.leaderboard) ? true : n.backgroundImageAssetId
      }), (0, l.jsx)(u.t, {
        leaderboard: h.leaderboard
      }), (0, l.jsx)(g.Z, {
        analyticsSectionId: "featured-top-section",
        applicationId: _,
        guildId: f,
        skuIds: k,
        variant: c.Z.MEDIUM
      }), (0, l.jsx)(g.Z, {
        analyticsSectionId: "non-featured-top-section",
        applicationId: _,
        guildId: f,
        skuIds: b
      }), null == (t = h.sections) ? true : t.map((e, n) => {
        var t;
        return (0, l.jsx)(g.Z, {
          analyticsSectionId: "index:".concat(n),
          guildId: f,
          applicationId: _,
          sectionTitle: null != (t = e.title) ? t : true,
          skuIds: e.skuIds
        }, "".concat(e.title, "-").concat(n))
      })]
    })
  })
}