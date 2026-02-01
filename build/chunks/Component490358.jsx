/** Chunk was on 21738 **/
/** chunk id: 490358, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk765671 = require("./765671.js"),
  Chunk4616 = require("./4616.jsx"),
  Chunk743674 = require("./743674.js"),
  Chunk976860 = require("./976860.js"),
  Chunk71393 = require("./71393.js"),
  Chunk486020 = require("./486020.js"),
  Chunk998304 = require("./998304.js"),
  Chunk624458 = require("./624458.js"),
  Chunk202384 = require("./202384.js"),
  Chunk513461 = require("./513461.js"),
  Chunk212455 = require("./212455.js"),
  Chunk892040 = require("./892040.jsx"),
  Chunk385310 = require("./385310.jsx"),
  Chunk6939 = require("./6939.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk852431 = require("./852431.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk532956 = require("./532956.js");

function S(e) {
  let {
    guild: t,
    width: n,
    height: l
  } = e, a = i.useMemo(() => (null == t ? true : t.splash) != null ? p.Ay.getGuildSplashURL({
    id: null == t ? true : t.id,
    splash: null == t ? true : t.splash
  }) : null, [null == t ? true : t.splash, null == t ? true : t.id]), s = (0, c.S)(a);
  return null == a ? (0, r.jsx)("div", {
    className: v.Eq
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.A, {
      className: v.Yi,
      src: a,
      imageClassName: v.Iv,
      width: n,
      height: l
    }), null != s && (0, r.jsx)("div", {
      className: v.qj,
      style: {
        background: "linear-gradient(180deg, ".concat((0, h.cb)(s, .16), " 0%, ").concat((0, h.cb)(s, 1), " 100%)")
      }
    }), (0, r.jsx)("div", {
      className: v.qj
    })]
  })
}
let C = e => {
  let {
    guildId: t
  } = e, {
    ref: n,
    width: o,
    height: c
  } = (0, s.Ay)(), [p, h] = i.useState(y.go.INITIAL), C = (0, l.bG)([A.A], () => A.A.getRequest(t)), N = (0, l.bG)([d.A], () => d.A.getGuild(t)), {
    hasFetchedRequestToJoinGuilds: T,
    guildPreviewDisabled: j
  } = (0, l.cf)([A.A], () => ({
    hasFetchedRequestToJoinGuilds: A.A.hasFetchedRequestToJoinGuilds,
    guildPreviewDisabled: A.A.getJoinRequestGuild(t)
  }));
  i.useEffect(() => {
    null != N && (0, u.pX)(O.BVt.CHANNEL(t))
  }, [N, t]), i.useEffect(() => {
    T || g.A.fetchRequestToJoinGuilds()
  }, [T]);
  let x = i.useCallback(() => {
      h(Math.max(p, y.go.FILLING)), g.A.removeGuildJoinRequest(t), (0, u.pX)(O.BVt.ME)
    }, [t, p]),
    P = (e, t) => () => {
      (0, a.A)({
        title: I.intl.string(I.t.y0CVes),
        subtitle: e,
        cancelText: I.intl.string(I.t.oEAioF),
        onConfirm: t,
        confirmText: I.intl.string(I.t.p89ACt)
      })
    },
    w = async () => {
      await g.A.resetGuildJoinRequest(t), (0, m.Ze)(t)
    }, L = e => {
      e ? P(I.intl.format(I.t["9ZezpN"], {
        name: null == j ? true : j.name
      }), x)() : x()
    }, R = P(I.intl.format(I.t.fJwWVt, {
      name: null == j ? true : j.name
    }), x);
  return (0, r.jsxs)("div", {
    className: v.MY,
    ref: n,
    children: [(0, r.jsx)(S, {
      guild: j,
      height: c,
      width: o
    }), (0, r.jsx)("div", {
      className: v.FG,
      children: (() => {
        if (null == C) return null;
        switch (C.applicationStatus) {
          case f.B5.SUBMITTED:
            return (0, r.jsx)(E.A, {
              onWithdrawApplication: () => L(true),
              guild: j
            });
          case f.B5.REJECTED:
            return (0, r.jsx)(b.A, {
              reapplyText: I.intl.string(I.t.I1LYVk),
              onReapply: w,
              confirmText: I.intl.string(I.t.g9tK0o),
              onWithdrawApplication: L,
              rejectionReason: C.rejectionReason,
              guild: j
            });
          default:
            return (0, r.jsx)(_.K, {
              onDiscardApplication: R,
              onContinueApplication: () => (0, m.Ze)(t),
              guild: j
            })
        }
      })()
    }), (0, r.jsx)("div", {
      className: v.T_
    })]
  })
}