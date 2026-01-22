/** Chunk was on web.js **/
/** chunk id: 342744, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  let i = (0, E.aE)(e, t);
  await (0, d.Ey)(n), await (0, u.nV)(e, {
    items: i
  }, {
    amount: 0,
    currency: e.currency
  }, (0, E.UC)(i, e.currency, e.paymentSourceId), r)
}

function A(e) {
  let {
    errorMsg: t
  } = e;
  return (0, r.jsxs)("div", {
    className: y.rf,
    children: [null !== t && (0, r.jsx)("div", {
      className: y.z3,
      children: (0, r.jsx)(c.wx6, {
        type: "critical",
        children: t
      })
    }), (0, r.jsx)("div", {
      children: b.intl.string(b.t.DY2CXs)
    })]
  })
}

function v() {
  return (0, r.jsxs)("div", {
    className: y.rf,
    children: [(0, r.jsx)("div", {
      className: y.dk
    }), (0, r.jsx)("div", {
      children: b.intl.string(b.t.G27uHe)
    })]
  })
}

function S(e) {
  let {
    guildBoostSlotId: t,
    transitionState: n,
    onClose: a
  } = e, {
    analyticsLocations: d
  } = (0, h.Ay)(_.A.GUILD_BOOST_UNCANCELLATION_MODAL);
  i.useEffect(() => {
    g.A.hasFetchedSubscriptions() || (0, u.hP)()
  }, []);
  let y = (0, l.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
    [S, I] = i.useState(1),
    [T, C] = i.useState(false),
    [N, R] = i.useState(null),
    w = i.useCallback(async () => {
      if (null != y) try {
        C(true), R(null);
        let e = (0, m.v)(y, 1);
        s()((0, E.bx)(e) <= (0, E.bx)(y.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await O(y, e, t, d), I(2)
      } catch (t) {
        let e = t instanceof f.Ey ? t : new f.Ey(t, t.code);
        R(b.intl.string(e.code === p.tG.BILLING_PAUSE_INVALID_UPDATE ? b.t.dq4vq7 : b.t["5mlOCW"])), C(false)
      }
    }, [y, t, d]),
    P = () => {
      switch (S) {
        case 1:
          return b.intl.string(b.t.l52ih2);
        case 2:
          return b.intl.string(b.t.H9QUAB);
        default:
          return ""
      }
    },
    D = () => {
      switch (S) {
        case 1:
          return [{
            variant: "secondary",
            text: b.intl.string(b.t.oEAioF),
            disabled: T,
            onClick: a
          }, {
            variant: "primary",
            text: b.intl.string(b.t.etZP4B),
            loading: T,
            onClick: w
          }];
        case 2:
          return [{
            variant: "primary",
            text: b.intl.string(b.t.BddRzS),
            onClick: a
          }];
        default:
          return []
      }
    },
    x = () => {
      if (null == y) return (0, r.jsx)(c.y$y, {});
      switch (S) {
        case 1:
          return (0, r.jsx)(A, {
            errorMsg: N
          });
        case 2:
          return (0, r.jsx)(v, {});
        default:
          throw Error("Unexpected step: ".concat(S))
      }
    };
  return (0, r.jsx)(h.f5, {
    value: d,
    children: (0, r.jsx)(o.Modal, {
      transitionState: n,
      onClose: async () => await a(),
      size: "sm",
      title: P(),
      actions: D(),
      children: x()
    })
  })
}