/** Chunk was on web.js **/
/** chunk id: 342744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => I
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

function v(e) {
  let {
    errorMsg: t
  } = e;
  return (0, r.jsxs)("div", {
    className: b.rf,
    children: [null !== t && (0, r.jsx)("div", {
      className: b.z3,
      children: (0, r.jsx)(c.wx6, {
        type: "critical",
        children: t
      })
    }), (0, r.jsx)("div", {
      children: y.intl.string(y.t.DY2CXs)
    })]
  })
}

function A() {
  return (0, r.jsxs)("div", {
    className: b.rf,
    children: [(0, r.jsx)("div", {
      className: b.dk
    }), (0, r.jsx)("div", {
      children: y.intl.string(y.t.G27uHe)
    })]
  })
}

function I(e) {
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
  let b = (0, l.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
    [I, S] = i.useState(1),
    [T, C] = i.useState(false),
    [N, R] = i.useState(null),
    w = i.useCallback(async () => {
      if (null != b) try {
        C(true), R(null);
        let e = (0, m.v)(b, 1);
        s()((0, E.bx)(e) <= (0, E.bx)(b.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await O(b, e, t, d), S(2)
      } catch (t) {
        let e = t instanceof f.Ey ? t : new f.Ey(t, t.code);
        R(y.intl.string(e.code === p.tG.BILLING_PAUSE_INVALID_UPDATE ? y.t.dq4vq7 : y.t["5mlOCW"])), C(false)
      }
    }, [b, t, d]),
    P = () => {
      switch (I) {
        case 1:
          return y.intl.string(y.t.l52ih2);
        case 2:
          return y.intl.string(y.t.H9QUAB);
        default:
          return ""
      }
    },
    D = () => {
      switch (I) {
        case 1:
          return [{
            variant: "secondary",
            text: y.intl.string(y.t.oEAioF),
            disabled: T,
            onClick: a
          }, {
            variant: "primary",
            text: y.intl.string(y.t.etZP4B),
            loading: T,
            onClick: w
          }];
        case 2:
          return [{
            variant: "primary",
            text: y.intl.string(y.t.BddRzS),
            onClick: a
          }];
        default:
          return []
      }
    },
    x = () => {
      if (null == b) return (0, r.jsx)(c.y$y, {});
      switch (I) {
        case 1:
          return (0, r.jsx)(v, {
            errorMsg: N
          });
        case 2:
          return (0, r.jsx)(A, {});
        default:
          throw Error("Unexpected step: ".concat(I))
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