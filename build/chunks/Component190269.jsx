/** Chunk was on 66801 **/
/** chunk id: 190269, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  B: () => S
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

function f(e) {
  let {
    onClose: t
  } = e, r = (0, a.jsx)(i.Text, {
    className: y.h,
    variant: "text-md/normal",
    children: m.intl.string(m.t.FCsTCk)
  });
  return (0, a.jsx)(b.A, {
    type: d.Ay.Types.PREMIUM_ACTIVATED,
    text: r,
    buttonText: m.intl.string(m.t.TkTvBz),
    hideClose: false,
    onClose: t
  })
}

function g(e) {
  let {
    onClose: t
  } = e;
  return (0, a.jsx)(_.Ay, {
    planId: p.gD.PREMIUM_MONTH_TIER_0,
    onClose: t
  })
}
let S = e => {
  let {
    transitionState: t,
    onClose: r,
    premiumType: d
  } = e, b = d === p.PremiumTypes.TIER_0, _ = n.useCallback(() => {
    l._.dispatch(u.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), c.A.isDisplayingWowMomentConfirmation && c.A.isAnimated ? setTimeout(() => {
      r()
    }, o.K) : r()
  }, [r]);
  return (0, a.jsxs)(i.EOs, {
    "data-migration-pending": true,
    className: y.z,
    transitionState: t,
    parentComponent: "ResubscribeSuccessStep",
    children: [(0, a.jsx)(s.A, {
      onClose: _,
      upgradeToPremiumType: d
    }), (0, a.jsx)(i.$mQ, {
      "data-migration-pending": true,
      children: (0, a.jsx)(b ? g : f, {
        onClose: _
      })
    })]
  })
}