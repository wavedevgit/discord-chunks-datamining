/** Chunk was on 21738 **/
/** chunk id: 551036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk9113 = require("./9113.js"),
  Chunk726249 = require("./726249.js"),
  Chunk683271 = require("./683271.js"),
  Chunk936555 = require("./936555.js"),
  Chunk465932 = require("./465932.js"),
  Chunk142120 = require("./142120.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk615405 = require("./615405.js"),
  Chunk300233 = require("./300233.jsx"),
  Chunk217976 = require("./217976.js"),
  Chunk514179 = require("./514179.jsx"),
  Chunk715837 = require("./715837.jsx"),
  Chunk457830 = require("./457830.jsx"),
  Chunk167010 = require("./167010.jsx"),
  Chunk139613 = require("./139613.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk169194 = require("./169194.js");

function T(e) {
  let {
    guildId: t
  } = e, n = (0, a.bG)([f.A], () => f.A.getGuild(t), [t]), T = (0, a.bG)([g.A], () => g.A.isConnected()), j = (0, p.A)(t), x = (0, b.A)(t), P = (0, a.bG)([A.A], () => A.A.isSubscriptionFetching), w = (0, _.X)(), {
    shouldHideGuildPurchaseEntryPoints: L,
    restrictionsLoading: R
  } = (0, h.MH)(t), D = null == n || !w || P || R;
  (0, u.HU)({
    subsection: C.intl.string(C.t["KzCF/6"]),
    location: null == n ? true : n.name
  }), (0, c.A)(l.Fr ? "role-subscriptions-overview" : true);
  let M = T && (null == n || !(j || x) || L && !R);
  if (i.useEffect(() => {
      o.hP()
    }, []), i.useEffect(() => {
      M && !l.Fr && (0, d.B)(t, S.VV.ROLE_SUBSCRIPTIONS)
    }, [t, M]), l.Fr && M) {
    let e = null == n ? y.b.NOT_GUILD_MEMBER : y.b.GUILD_NOT_ELIGIBLE;
    return (0, r.jsx)(y.k, {
      errorType: e
    })
  }
  return (0, r.jsxs)("div", {
    className: N.kL,
    children: [(0, r.jsxs)(m.A, {
      toolbar: (0, r.jsx)(i.Fragment, {}),
      className: N.jr,
      children: [(0, r.jsx)(m.A.Icon, {
        icon: (0, s.kHD)(E.A),
        "aria-hidden": true
      }), (0, r.jsx)(m.A.Title, {
        children: C.intl.string(C.t["KzCF/6"])
      })]
    }), (0, r.jsx)("div", {
      id: v.K
    }), (0, r.jsx)("div", {
      className: N.Qs,
      children: j ? (0, r.jsx)(s.d_W, {
        className: N.XG,
        children: (0, r.jsx)("div", {
          className: N.gT,
          children: D ? (0, r.jsx)(s.y$y, {}) : (0, r.jsx)(O.A, {
            guild: n
          })
        })
      }) : (0, r.jsx)(I.A, {})
    })]
  })
}

function j(e) {
  let {
    guildId: t
  } = e;
  return (0, r.jsx)(_.H, {
    guildId: t,
    refetchOnMount: true,
    children: (0, r.jsx)(T, {
      guildId: t
    })
  })
}