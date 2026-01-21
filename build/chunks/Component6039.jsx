/** Chunk was on 1272 **/
/** chunk id: 6039, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk393238 = require("./393238.js"),
  Chunk877604 = require("./877604.jsx"),
  Chunk998730 = require("./998730.js"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk768581 = require("./768581.js"),
  Chunk302221 = require("./302221.js"),
  Chunk693546 = require("./693546.js"),
  Chunk305325 = require("./305325.js"),
  Chunk246364 = require("./246364.js"),
  Chunk937111 = require("./937111.js"),
  Chunk381416 = require("./381416.jsx"),
  Chunk523924 = require("./523924.jsx"),
  Chunk390500 = require("./390500.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk898625 = require("./898625.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk643854 = require("./643854.js");

function S(e) {
  let {
    guild: t,
    width: n,
    height: l
  } = e, a = i.useMemo(() => (null == t ? true : t.splash) != null ? p.ZP.getGuildSplashURL({
    id: null == t ? true : t.id,
    splash: null == t ? true : t.splash
  }) : null, [null == t ? true : t.splash, null == t ? true : t.id]), o = (0, c.N)(a);
  return null == a ? (0, r.jsx)("div", {
    className: C.defaultGradient
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      className: C.splash,
      src: a,
      imageClassName: C.cover,
      width: n,
      height: l
    }), null != o && (0, r.jsx)("div", {
      className: C.splashGradient,
      style: {
        background: "linear-gradient(180deg, ".concat((0, f.aD)(o, .16), " 0%, ").concat((0, f.aD)(o, 1), " 100%)")
      }
    }), (0, r.jsx)("div", {
      className: C.splashGradient
    })]
  })
}
let T = e => {
  let {
    guildId: t
  } = e, {
    ref: n,
    width: s,
    height: c
  } = (0, o.ZP)(), [p, f] = i.useState(v.hO.INITIAL), T = (0, l.e7)([b.Z], () => b.Z.getRequest(t)), N = (0, l.e7)([d.Z], () => d.Z.getGuild(t)), {
    hasFetchedRequestToJoinGuilds: j,
    guildPreviewDisabled: x
  } = (0, l.cj)([b.Z], () => ({
    hasFetchedRequestToJoinGuilds: b.Z.hasFetchedRequestToJoinGuilds,
    guildPreviewDisabled: b.Z.getJoinRequestGuild(t)
  }));
  i.useEffect(() => {
    null != N && (0, u.uL)(I.Z5c.CHANNEL(t))
  }, [N, t]), i.useEffect(() => {
    j || g.Z.fetchRequestToJoinGuilds()
  }, [j]);
  let P = i.useCallback(() => {
      f(Math.max(p, v.hO.FILLING)), g.Z.removeGuildJoinRequest(t), (0, u.uL)(I.Z5c.ME)
    }, [t, p]),
    A = (e, t) => () => {
      (0, a.Z)({
        title: y.intl.string(y.t.y0CVes),
        subtitle: e,
        cancelText: y.intl.string(y.t.oEAioF),
        onConfirm: t,
        confirmText: y.intl.string(y.t.p89ACt)
      })
    },
    Z = async () => {
      await g.Z.resetGuildJoinRequest(t), (0, h.hk)(t)
    }, w = e => {
      if (!e) return void P();
      A(y.intl.format(y.t["9ZezpN"], {
        name: null == x ? true : x.name
      }), P)()
    }, L = A(y.intl.format(y.t.fJwWVt, {
      name: null == x ? true : x.name
    }), P);
  return (0, r.jsxs)("div", {
    className: C.page,
    ref: n,
    children: [(0, r.jsx)(S, {
      guild: x,
      height: c,
      width: s
    }), (0, r.jsx)("div", {
      className: C.contentWrapper,
      children: (() => {
        if (null == T) return null;
        switch (T.applicationStatus) {
          case m.wB.SUBMITTED:
            return (0, r.jsx)(O.Z, {
              onWithdrawApplication: () => w(true),
              guild: x
            });
          case m.wB.REJECTED:
            return (0, r.jsx)(_.Z, {
              reapplyText: y.intl.string(y.t.I1LYVk),
              onReapply: Z,
              confirmText: y.intl.string(y.t.g9tK0o),
              onWithdrawApplication: w,
              rejectionReason: T.rejectionReason,
              guild: x
            });
          default:
            return (0, r.jsx)(E.s, {
              onDiscardApplication: L,
              onContinueApplication: () => (0, h.hk)(t),
              guild: x
            })
        }
      })()
    }), (0, r.jsx)("div", {
      className: C.dragRegion
    })]
  })
}