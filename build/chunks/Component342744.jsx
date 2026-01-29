/** Chunk was on 2827 **/
/** chunk id: 342744, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk923408 = require("./923408.js"),
  Chunk198982 = require("./198982.js"),
  Chunk136857 = require("./136857.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk253390 = require("./253390.js"),
  Chunk166403 = require("./166403.js"),
  Chunk927578 = require("./927578.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk359294 = require("./359294.js");
async function O(e, t, n, r) {
  let i = (0, b.aE)(e, t);
  await (0, u.Ey)(n), await (0, d.nV)(e, {
    items: i
  }, {
    amount: 0,
    currency: e.currency
  }, (0, b.UC)(i, e.currency, e.paymentSourceId), r)
}

function C(e) {
  let {
    errorMsg: t
  } = e;
  return (0, r.jsxs)("div", {
    className: E.rf,
    children: [null !== t && (0, r.jsx)("div", {
      className: E.z3,
      children: (0, r.jsx)(c.wx6, {
        type: "critical",
        children: t
      })
    }), (0, r.jsx)("div", {
      children: h.intl.string(h.t.DY2CXs)
    })]
  })
}

function x() {
  return (0, r.jsxs)("div", {
    className: E.rf,
    children: [(0, r.jsx)("div", {
      className: E.dk
    }), (0, r.jsx)("div", {
      children: h.intl.string(h.t.G27uHe)
    })]
  })
}

function S(e) {
  let {
    guildBoostSlotId: t,
    transitionState: n,
    onClose: l
  } = e, {
    analyticsLocations: u
  } = (0, g.Ay)(m.A.GUILD_BOOST_UNCANCELLATION_MODAL);
  i.useEffect(() => {
    f.A.hasFetchedSubscriptions() || (0, d.hP)()
  }, []);
  let E = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
    [S, T] = i.useState(1),
    [I, y] = i.useState(false),
    [N, j] = i.useState(null),
    v = i.useCallback(async () => {
      if (null != E) try {
        y(true), j(null);
        let e = (0, A.v)(E, 1);
        s()((0, b.bx)(e) <= (0, b.bx)(E.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await O(E, e, t, u), T(2)
      } catch (t) {
        let e = t instanceof _.Ey ? t : new _.Ey(t, t.code);
        j(h.intl.string(e.code === p.tG.BILLING_PAUSE_INVALID_UPDATE ? h.t.dq4vq7 : h.t["5mlOCW"])), y(false)
      }
    }, [E, t, u]);
  return (0, r.jsx)(g.f5, {
    value: u,
    children: (0, r.jsx)(a.Modal, {
      transitionState: n,
      onClose: async () => await l(),
      size: "sm",
      title: (() => {
        switch (S) {
          case 1:
            return h.intl.string(h.t.l52ih2);
          case 2:
            return h.intl.string(h.t.H9QUAB);
          default:
            return ""
        }
      })(),
      actions: (() => {
        switch (S) {
          case 1:
            return [{
              variant: "secondary",
              text: h.intl.string(h.t.oEAioF),
              disabled: I,
              onClick: l
            }, {
              variant: "primary",
              text: h.intl.string(h.t.etZP4B),
              loading: I,
              onClick: v
            }];
          case 2:
            return [{
              variant: "primary",
              text: h.intl.string(h.t.BddRzS),
              onClick: l
            }];
          default:
            return []
        }
      })(),
      children: (() => {
        if (null == E) return (0, r.jsx)(c.y$y, {});
        switch (S) {
          case 1:
            return (0, r.jsx)(C, {
              errorMsg: N
            });
          case 2:
            return (0, r.jsx)(x, {});
          default:
            throw Error("Unexpected step: ".concat(S))
        }
      })()
    })
  })
}