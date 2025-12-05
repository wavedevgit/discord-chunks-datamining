/** Chunk was on 47168 **/
/** chunk id: 320941, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  n: () => S
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk518727 = require("./518727.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk453227 = require("./453227.js"),
  Chunk709093 = require("./709093.jsx"),
  Chunk741245 = require("./741245.jsx"),
  Chunk783017 = require("./783017.jsx"),
  Chunk317269 = require("./317269.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk724683 = require("./724683.js");

function f(e) {
  let {
    onClose: t
  } = e, r = (0, a.jsx)(o.Text, {
    className: h.description,
    variant: "text-md/normal",
    children: _.intl.string(_.t.FCsTCk)
  });
  return (0, a.jsx)(p.Z, {
    type: d.ZP.Types.PREMIUM_ACTIVATED,
    text: r,
    buttonText: _.intl.string(_.t.TkTvBz),
    hideClose: false,
    onClose: t
  })
}

function C(e) {
  let {
    onClose: t
  } = e;
  return (0, a.jsx)(u.ZP, {
    planId: b.Xh.PREMIUM_MONTH_TIER_0,
    onClose: t
  })
}
let S = e => {
  let {
    transitionState: t,
    onClose: r,
    premiumType: d
  } = e, p = d === b.PremiumTypes.TIER_0, u = n.useCallback(() => {
    l.S.dispatch(m.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), c.Z.isDisplayingWowMomentConfirmation && c.Z.isAnimated ? setTimeout(() => {
      r()
    }, i.P) : r()
  }, [r]);
  return (0, a.jsxs)(o.Y0X, {
    className: h.root,
    transitionState: t,
    parentComponent: "ResubscribeSuccessStep",
    children: [(0, a.jsx)(s.Z, {
      onClose: u,
      upgradeToPremiumType: d
    }), (0, a.jsx)(o.hzk, {
      children: (0, a.jsx)(p ? C : f, {
        onClose: u
      })
    })]
  })
}