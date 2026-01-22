/** Chunk was on 66801 **/
/** chunk id: 190269, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  B: () => x
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk639289 = require("./639289.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk573359 = require("./573359.js"),
  Chunk28003 = require("./28003.jsx"),
  Chunk659746 = require("./659746.jsx"),
  Chunk4471 = require("./4471.jsx"),
  Chunk380083 = require("./380083.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk401517 = require("./401517.js");

function y(e) {
  let {
    onClose: t
  } = e, r = (0, a.jsx)(c.Text, {
    className: m.h,
    variant: "text-md/normal",
    children: _.intl.string(_.t.FCsTCk)
  });
  return (0, a.jsx)(l.A, {
    type: d.Ay.Types.PREMIUM_ACTIVATED,
    text: r,
    buttonText: _.intl.string(_.t.TkTvBz),
    hideClose: false,
    onClose: t
  })
}

function g(e) {
  let {
    onClose: t
  } = e;
  return (0, a.jsx)(b.Ay, {
    planId: u.gD.PREMIUM_MONTH_TIER_0,
    onClose: t
  })
}
let x = e => {
  let {
    transitionState: t,
    onClose: r,
    premiumType: d
  } = e, l = d === u.PremiumTypes.TIER_0, b = n.useCallback(() => {
    o._.dispatch(p.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), f.A.isDisplayingWowMomentConfirmation && f.A.isAnimated ? setTimeout(() => {
      r()
    }, i.K) : r()
  }, [r]);
  return (0, a.jsxs)(c.EOs, {
    "data-migration-pending": true,
    className: m.z,
    transitionState: t,
    parentComponent: "ResubscribeSuccessStep",
    children: [(0, a.jsx)(s.A, {
      onClose: b,
      upgradeToPremiumType: d
    }), (0, a.jsx)(c.$mQ, {
      "data-migration-pending": true,
      children: (0, a.jsx)(l ? g : y, {
        onClose: b
      })
    })]
  })
}