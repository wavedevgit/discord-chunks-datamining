/** Chunk was on web.js **/
/** chunk id: 450468, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => S
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk179360 = require("./179360.js"),
  Chunk881052 = require("./881052.js"),
  Chunk128069 = require("./128069.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk431369 = require("./431369.js"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk409150 = require("./409150.js");
async function O(e, t, n, r) {
  let i = (0, E.MY)(e, t);
  await (0, d.bG)(n), await (0, u.Mg)(e, {
    items: i
  }, {
    amount: 0,
    currency: e.currency
  }, (0, E.UX)(i, e.currency, e.paymentSourceId), r)
}

function v(e) {
  let {
    errorMsg: t
  } = e;
  return (0, r.jsxs)("div", {
    className: y.body,
    children: [null !== t && (0, r.jsx)("div", {
      className: y.error,
      children: (0, r.jsx)(c.M14, {
        type: "critical",
        children: t
      })
    }), (0, r.jsx)("div", {
      children: b.intl.string(b.t.DY2CXs)
    })]
  })
}

function I() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk409150.body,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk409150.uncancelImage
    }), (0, Chunk951288.jsx)("div", {
      children: Chunk388032.intl.string(Chunk388032.t.G27uHe)
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
  } = (0, h.ZP)(p.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
  i.useEffect(() => {
    g.Z.hasFetchedSubscriptions() || (0, u.jg)()
  }, []);
  let y = (0, l.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
    [S, T] = i.useState(1),
    [A, C] = i.useState(false),
    [N, R] = i.useState(null),
    P = i.useCallback(async () => {
      if (null != y) try {
        C(true), R(null);
        let e = (0, m.g)(y, 1);
        o()((0, E.uV)(e) <= (0, E.uV)(y.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await O(y, e, t, d), T(2)
      } catch (t) {
        let e = t instanceof f.HF ? t : new f.HF(t, t.code);
        R(b.intl.string(e.code === _.SM.BILLING_PAUSE_INVALID_UPDATE ? b.t.dq4vq7 : b.t["5mlOCW"])), C(false)
      }
    }, [y, t, d]),
    w = () => {
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
            disabled: A,
            onClick: a
          }, {
            variant: "primary",
            text: b.intl.string(b.t.etZP4B),
            loading: A,
            onClick: P
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
    L = () => {
      if (null == y) return (0, r.jsx)(c.$jN, {});
      switch (S) {
        case 1:
          return (0, r.jsx)(v, {
            errorMsg: N
          });
        case 2:
          return (0, r.jsx)(I, {});
        default:
          throw Error("Unexpected step: ".concat(S))
      }
    };
  return (0, r.jsx)(h.Gt, {
    value: d,
    children: (0, r.jsx)(s.Modal, {
      transitionState: n,
      onClose: async () => await a(),
      size: "sm",
      title: w(),
      actions: D(),
      children: L()
    })
  })
}