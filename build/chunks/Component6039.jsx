/** Chunk was on 1272 **/
/** chunk id: 6039, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk555562 = require("./555562.js");

function T(e) {
  let {
    guild: t,
    width: n,
    height: l
  } = e, a = i.useMemo(() => (null == t ? true : t.splash) != null ? f.ZP.getGuildSplashURL({
    id: null == t ? true : t.id,
    splash: null == t ? true : t.splash
  }) : null, [null == t ? true : t.splash, null == t ? true : t.id]), s = (0, u.N)(a);
  return null == a ? (0, r.jsx)("div", {
    className: S.defaultGradient
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      className: S.splash,
      src: a,
      imageClassName: S.cover,
      width: n,
      height: l
    }), null != s && (0, r.jsx)("div", {
      className: S.splashGradient,
      style: {
        background: "linear-gradient(180deg, ".concat((0, h.aD)(s, .16), " 0%, ").concat((0, h.aD)(s, 1), " 100%)")
      }
    }), (0, r.jsx)("div", {
      className: S.splashGradient
    })]
  })
}
let N = e => {
  let {
    guildId: t
  } = e, {
    ref: n,
    width: c,
    height: u
  } = (0, o.ZP)(), [f, h] = i.useState(I.hO.INITIAL), N = (0, l.e7)([b.Z], () => b.Z.getRequest(t)), j = (0, l.e7)([p.Z], () => p.Z.getGuild(t)), {
    hasFetchedRequestToJoinGuilds: P,
    guildPreviewDisabled: x
  } = (0, l.cj)([b.Z], () => ({
    hasFetchedRequestToJoinGuilds: b.Z.hasFetchedRequestToJoinGuilds,
    guildPreviewDisabled: b.Z.getJoinRequestGuild(t)
  }));
  i.useEffect(() => {
    null != j && (0, d.uL)(v.Z5c.CHANNEL(t))
  }, [j, t]), i.useEffect(() => {
    P || g.Z.fetchRequestToJoinGuilds()
  }, [P]);
  let A = i.useCallback(() => {
      h(Math.max(f, I.hO.FILLING)), g.Z.removeGuildJoinRequest(t), (0, d.uL)(v.Z5c.ME)
    }, [t, f]),
    Z = (e, t) => () => {
      (0, s.h7j)(n => {
        var i, l;
        return (0, r.jsx)(s.ConfirmModal, (i = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({
          header: C.intl.string(C.t.y0CVes),
          cancelText: C.intl.string(C.t.oEAioF),
          onConfirm: t,
          confirmText: C.intl.string(C.t.p89ACt),
          confirmButtonColor: a.zx.Colors.RED
        }, n), l = l = {
          children: (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: e
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      })
    },
    w = async () => {
      await g.Z.resetGuildJoinRequest(t), (0, m.hk)(t)
    }, L = Z(C.intl.format(C.t["9ZezpN"], {
      name: null == x ? true : x.name
    }), A), R = Z(C.intl.format(C.t.fJwWVt, {
      name: null == x ? true : x.name
    }), A);
  return (0, r.jsxs)("div", {
    className: S.page,
    ref: n,
    children: [(0, r.jsx)(T, {
      guild: x,
      height: u,
      width: c
    }), (0, r.jsx)("div", {
      className: S.contentWrapper,
      children: (() => {
        if (null == N) return null;
        switch (N.applicationStatus) {
          case _.wB.SUBMITTED:
            return (0, r.jsx)(y.Z, {
              onWithdrawApplication: L,
              guild: x
            });
          case _.wB.REJECTED:
            return (0, r.jsx)(O.Z, {
              reapplyText: C.intl.string(C.t.I1LYVk),
              onReapply: w,
              confirmText: C.intl.string(C.t.g9tK0o),
              onWithdrawApplication: L,
              rejectionReason: N.rejectionReason,
              guild: x
            });
          default:
            return (0, r.jsx)(E.s, {
              onDiscardApplication: R,
              onContinueApplication: () => (0, m.hk)(t),
              guild: x
            })
        }
      })()
    }), (0, r.jsx)("div", {
      className: S.dragRegion
    })]
  })
}