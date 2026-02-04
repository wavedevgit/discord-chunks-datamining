/** Chunk was on 54711 **/
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

function g(e) {
  let {
    onClose: t
  } = e, r = (0, n.jsx)(o.Text, {
    className: y.h,
    variant: "text-md/normal",
    children: _.intl.string(_.t.FCsTCk)
  });
  return (0, n.jsx)(u.A, {
    type: d.Ay.Types.PREMIUM_ACTIVATED,
    text: r,
    buttonText: _.intl.string(_.t.TkTvBz),
    hideClose: false,
    onClose: t
  })
}

function f(e) {
  let {
    onClose: t
  } = e;
  return (0, n.jsx)(p.Ay, {
    planId: b.gD.PREMIUM_MONTH_TIER_0,
    onClose: t
  })
}
let S = e => {
  let {
    transitionState: t,
    onClose: r,
    premiumType: d
  } = e, u = d === b.PremiumTypes.TIER_0, p = a.useCallback(() => {
    l._.dispatch(m.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), s.A.isDisplayingWowMomentConfirmation && s.A.isAnimated ? setTimeout(() => {
      r()
    }, i.K) : r()
  }, [r]);
  return (0, n.jsxs)(o.EOs, {
    "data-migration-pending": true,
    className: y.z,
    transitionState: t,
    parentComponent: "ResubscribeSuccessStep",
    children: [(0, n.jsx)(c.A, {
      onClose: p,
      upgradeToPremiumType: d
    }), (0, n.jsx)(o.$mQ, {
      "data-migration-pending": true,
      children: (0, n.jsx)(u ? f : g, {
        onClose: p
      })
    })]
  })
}