/** Chunk was on 60667 **/
/** chunk id: 342744, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
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
async function x(e, t, n, r) {
  let i = (0, h.aE)(e, t);
  await (0, u.Ey)(n), await (0, d.nV)(e, {
    items: i
  }, {
    amount: 0,
    currency: e.currency
  }, (0, h.UC)(i, e.currency, e.paymentSourceId), r)
}

function O(e) {
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
      children: b.intl.string(b.t.DY2CXs)
    })]
  })
}

function C() {
  return (0, r.jsxs)("div", {
    className: E.rf,
    children: [(0, r.jsx)("div", {
      className: E.dk
    }), (0, r.jsx)("div", {
      children: b.intl.string(b.t.G27uHe)
    })]
  })
}

function T(e) {
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
    [T, I] = i.useState(1),
    [S, j] = i.useState(false),
    [v, N] = i.useState(null),
    y = i.useCallback(async () => {
      if (null != E) try {
        j(true), N(null);
        let e = (0, A.v)(E, 1);
        s()((0, h.bx)(e) <= (0, h.bx)(E.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await x(E, e, t, u), I(2)
      } catch (t) {
        let e = t instanceof _.Ey ? t : new _.Ey(t, t.code);
        N(b.intl.string(e.code === p.tG.BILLING_PAUSE_INVALID_UPDATE ? b.t.dq4vq7 : b.t["5mlOCW"])), j(false)
      }
    }, [E, t, u]);
  return (0, r.jsx)(g.f5, {
    value: u,
    children: (0, r.jsx)(a.Modal, {
      transitionState: n,
      onClose: async () => await l(),
      size: "sm",
      title: (() => {
        switch (T) {
          case 1:
            return b.intl.string(b.t.l52ih2);
          case 2:
            return b.intl.string(b.t.H9QUAB);
          default:
            return ""
        }
      })(),
      actions: (() => {
        switch (T) {
          case 1:
            return [{
              variant: "secondary",
              text: b.intl.string(b.t.oEAioF),
              disabled: S,
              onClick: l
            }, {
              variant: "primary",
              text: b.intl.string(b.t.etZP4B),
              loading: S,
              onClick: y
            }];
          case 2:
            return [{
              variant: "primary",
              text: b.intl.string(b.t.BddRzS),
              onClick: l
            }];
          default:
            return []
        }
      })(),
      children: (() => {
        if (null == E) return (0, r.jsx)(c.y$y, {});
        switch (T) {
          case 1:
            return (0, r.jsx)(O, {
              errorMsg: v
            });
          case 2:
            return (0, r.jsx)(C, {});
          default:
            throw Error("Unexpected step: ".concat(T))
        }
      })()
    })
  })
}