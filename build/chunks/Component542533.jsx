/** Chunk was on 14078 **/
/** chunk id: 542533, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  a: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk765671 = require("./765671.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk439303 = require("./439303.jsx"),
  Chunk183802 = require("./183802.jsx"),
  Chunk748959 = require("./748959.jsx"),
  Chunk793885 = require("./793885.jsx"),
  Chunk896447 = require("./896447.jsx"),
  Chunk65356 = require("./65356.js"),
  Chunk652215 = require("./652215.js"),
  Chunk131841 = require("./131841.js");

function x(e) {
  var l, t;
  let {
    applicationId: x,
    guildId: h,
    page: A
  } = e, {
    ref: m,
    width: k
  } = (0, i.Ay)(), v = (0, o.jM)(), {
    analyticsLocations: j
  } = (0, d.Ay)(), b = s.useRef(null), {
    handleScroll: E
  } = (0, p.b)(b, v, j), [S, C] = s.useMemo(() => {
    if ((null == A ? true : A.skuIds) == null || 0 === A.skuIds.length) return [
      [],
      []
    ];
    let e = Math.round(null != k ? k : 0);
    return (null == A ? true : A.leaderboard) == null || null == e || e < 564 ? [
      [], A.skuIds
    ] : e < 1104 ? A.skuIds.length >= 2 ? [
      [], A.skuIds
    ] : [A.skuIds.slice(0, 1), A.skuIds.slice(1)] : [A.skuIds.slice(0, 2), A.skuIds.slice(2)]
  }, [A, k]), N = 1 === S.length && null != k && k >= 834;
  return (s.useEffect(() => {
    let {
      sessionId: e,
      guildId: l,
      pageIndex: t,
      pageTitle: n,
      isUserGuildMember: s,
      pageHasLeaderboard: a
    } = v;
    r.default.track(I.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
      slayer_storefront_session_id: e,
      guild_id: l,
      page_index: t,
      page_title: n,
      is_user_guild_member: s,
      page_has_leaderboard: a,
      location_stack: j
    })
  }, [v, j]), null == A) ? null : (0, n.jsx)(a.ChK, {
    ref: b,
    onScroll: E,
    children: (0, n.jsxs)("section", {
      ref: m,
      className: f.k,
      children: [(0, n.jsx)(g.m, {
        applicationId: x,
        backgroundImageAssetId: null == (l = A.leaderboard) ? true : l.backgroundImageAssetId
      }), (0, n.jsx)(u.I, {
        analyticsSectionId: "leaderboard",
        leaderboard: A.leaderboard,
        skuId: N ? S[0] : true,
        applicationId: x,
        guildId: h,
        analyticsLocations: j
      }), (0, n.jsx)(_.A, {
        analyticsSectionId: "featured-top-section",
        applicationId: x,
        guildId: h,
        skuIds: N ? true : S,
        variant: c.s.MEDIUM
      }), (0, n.jsx)(_.A, {
        analyticsSectionId: "non-featured-top-section",
        applicationId: x,
        guildId: h,
        skuIds: C
      }), null == (t = A.sections) ? true : t.map((e, l) => {
        var t;
        return (0, n.jsx)(_.A, {
          analyticsSectionId: "index:".concat(l),
          guildId: h,
          applicationId: x,
          sectionTitle: null != (t = e.title) ? t : true,
          skuIds: e.skuIds
        }, "".concat(e.title, "-").concat(l))
      })]
    })
  })
}