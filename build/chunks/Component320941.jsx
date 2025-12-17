/** Chunk was on 31800 **/
/** chunk id: 320941, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  n: () => v
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
  Chunk745769 = require("./745769.js");

function h(e) {
  let {
    onClose: t
  } = e, a = (0, r.jsx)(o.Text, {
    className: C.description,
    variant: "text-md/normal",
    children: m.intl.string(m.t.FCsTCk)
  });
  return (0, r.jsx)(b.Z, {
    type: s.ZP.Types.PREMIUM_ACTIVATED,
    text: a,
    buttonText: m.intl.string(m.t.TkTvBz),
    hideClose: false,
    onClose: t
  })
}

function S(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(p.ZP, {
    planId: f.Xh.PREMIUM_MONTH_TIER_0,
    onClose: t
  })
}
let v = e => {
  let {
    transitionState: t,
    onClose: a,
    premiumType: s
  } = e, b = s === f.PremiumTypes.TIER_0, p = n.useCallback(() => {
    c.S.dispatch(u.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), l.Z.isDisplayingWowMomentConfirmation && l.Z.isAnimated ? setTimeout(() => {
      a()
    }, i.P) : a()
  }, [a]);
  return (0, r.jsxs)(o.Y0X, {
    "data-migration-pending": true,
    className: C.root,
    transitionState: t,
    parentComponent: "ResubscribeSuccessStep",
    children: [(0, r.jsx)(d.Z, {
      onClose: p,
      upgradeToPremiumType: s
    }), (0, r.jsx)(o.hzk, {
      "data-migration-pending": true,
      children: (0, r.jsx)(b ? S : h, {
        onClose: p
      })
    })]
  })
}