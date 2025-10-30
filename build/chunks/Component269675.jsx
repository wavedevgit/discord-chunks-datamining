/** Chunk was on 1272 **/
/** chunk id: 269675, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk270237 = require("./270237.js"),
  Chunk252618 = require("./252618.js"),
  Chunk423000 = require("./423000.js"),
  Chunk200876 = require("./200876.js"),
  Chunk674180 = require("./674180.js"),
  Chunk38618 = require("./38618.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk351402 = require("./351402.js"),
  Chunk730647 = require("./730647.jsx"),
  Chunk772021 = require("./772021.js"),
  Chunk396828 = require("./396828.jsx"),
  Chunk293423 = require("./293423.jsx"),
  Chunk20967 = require("./20967.jsx"),
  Chunk504762 = require("./504762.jsx"),
  Chunk807152 = require("./807152.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk214689 = require("./214689.js");

function j(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([g.Z], () => g.Z.getGuild(t), [t]), j = (0, a.e7)([m.Z], () => m.Z.isConnected()), P = (0, p.Z)(t), x = (0, E.Z)(t), A = (0, a.e7)([_.Z], () => _.Z.isSubscriptionFetching), Z = (0, b.f)(), {
    shouldHideGuildPurchaseEntryPoints: w,
    restrictionsLoading: L
  } = (0, f.uP)(t), R = null == n || !Z || A || L;
  (0, u.Tt)({
    subsection: T.intl.string(T.t["KzCF/6"]),
    location: null == n ? true : n.name
  }), (0, c.Z)(l.tq ? "role-subscriptions-overview" : true);
  let D = j && (null == n || !(P || x) || w && !L);
  if (i.useEffect(() => {
      o.jg()
    }, []), i.useEffect(() => {
      D && !l.tq && (0, d.M)(t, S.oC.ROLE_SUBSCRIPTIONS)
    }, [t, D]), l.tq && D) {
    let e = null == n ? y.J.NOT_GUILD_MEMBER : y.J.GUILD_NOT_ELIGIBLE;
    return (0, r.jsx)(y.z, {
      errorType: e
    })
  }
  return (0, r.jsxs)("div", {
    className: N.container,
    children: [(0, r.jsxs)(h.Z, {
      toolbar: (0, r.jsx)(i.Fragment, {}),
      className: N.headerBar,
      children: [(0, r.jsx)(h.Z.Icon, {
        icon: (0, s.GSL)(O.Z),
        "aria-hidden": true
      }), (0, r.jsx)(h.Z.Title, {
        children: T.intl.string(T.t["KzCF/6"])
      })]
    }), (0, r.jsx)("div", {
      id: C.v
    }), (0, r.jsx)("div", {
      className: N.content,
      children: P ? (0, r.jsx)(s.u2D, {
        className: N.scroller,
        children: (0, r.jsx)("div", {
          className: N.scrollerContent,
          children: R ? (0, r.jsx)(s.$jN, {}) : (0, r.jsx)(I.Z, {
            guild: n
          })
        })
      }) : (0, r.jsx)(v.Z, {})
    })]
  })
}

function P(e) {
  let {
    guildId: t
  } = e;
  return (0, r.jsx)(b.l, {
    guildId: t,
    refetchOnMount: true,
    children: (0, r.jsx)(j, {
      guildId: t
    })
  })
}