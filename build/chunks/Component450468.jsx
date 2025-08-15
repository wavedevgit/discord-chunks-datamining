/** Chunk was on 30202 **/
/** chunk id: 450468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
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
async function E(e, t, n, i) {
  let r = (0, x.MY)(e, t);
  await (0, u.bG)(n), await (0, d.Mg)(e, {
    items: r
  }, {
    amount: 0,
    currency: e.currency
  }, (0, x.UX)(r, e.currency, e.paymentSourceId), i)
}

function C(e) {
  let {
    errorMsg: t
  } = e;
  return (0, i.jsxs)("div", {
    className: j.body,
    children: [null !== t && (0, i.jsx)(c.kzN, {
      className: j.error,
      children: t
    }), (0, i.jsx)("div", {
      children: _.intl.string(_.t.DY2CXl)
    })]
  })
}

function O() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk409150.body,
    children: [(0, Chunk255367.jsx)("div", {
      className: Chunk409150.uncancelImage
    }), (0, Chunk255367.jsx)("div", {
      children: Chunk388032.intl.string(Chunk388032.t.G27uHR)
    })]
  })
}

function v(e) {
  let {
    guildBoostSlotId: t,
    transitionState: n,
    onClose: s
  } = e, {
    analyticsLocations: u
  } = (0, h.ZP)(g.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
  r.useEffect(() => {
    b.Z.hasFetchedSubscriptions() || (0, d.jg)()
  }, []);
  let j = (0, l.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
    [v, S] = r.useState(1),
    [T, N] = r.useState(false),
    [I, y] = r.useState(null),
    A = r.useCallback(async () => {
      if (null != j) try {
        N(true), y(null);
        let e = (0, f.g)(j, 1);
        a()((0, x.uV)(e) <= (0, x.uV)(j.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await E(j, e, t, u), S(2)
      } catch (t) {
        let e = t instanceof m.HF ? t : new m.HF(t, t.code);
        y(_.intl.string(e.code === p.SM.BILLING_PAUSE_INVALID_UPDATE ? _.t.dq4vq6 : _.t["5mlOCQ"])), N(false)
      }
    }, [j, t, u]);
  return (0, i.jsx)(h.Gt, {
    value: u,
    children: (0, i.jsx)(o.Modal, {
      transitionState: n,
      onClose: async () => await s(),
      size: "sm",
      title: (() => {
        switch (v) {
          case 1:
            return _.intl.string(_.t.l52ih4);
          case 2:
            return _.intl.string(_.t.H9QUAA);
          default:
            return ""
        }
      })(),
      actions: (() => {
        switch (v) {
          case 1:
            return [{
              variant: "secondary",
              text: _.intl.string(_.t.oEAioK),
              disabled: T,
              onClick: s
            }, {
              variant: "primary",
              text: _.intl.string(_.t.etZP4O),
              loading: T,
              onClick: A
            }];
          case 2:
            return [{
              variant: "primary",
              text: _.intl.string(_.t.BddRzc),
              onClick: s
            }];
          default:
            return []
        }
      })(),
      children: (() => {
        if (null == j) return (0, i.jsx)(c.$jN, {});
        switch (v) {
          case 1:
            return (0, i.jsx)(C, {
              errorMsg: I
            });
          case 2:
            return (0, i.jsx)(O, {});
          default:
            throw Error("Unexpected step: ".concat(v))
        }
      })()
    })
  })
}