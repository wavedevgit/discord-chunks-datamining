/** Chunk was on web.js **/
/** chunk id: 126848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v,
  x: () => O
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk367074 = require("./367074.js"),
  Chunk347896 = require("./347896.js"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk655525 = require("./655525.jsx"),
  Chunk924540 = require("./924540.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk836374 = require("./836374.js");

function O() {
  let e, t = arguments.length > 0 && true !== arguments[0] && arguments[0],
    n = (0, h.N)(),
    a = (0, _.N)(),
    o = (0, f.Vi)(),
    l = null != (0, p.Z)(),
    c = o || l,
    u = (null == n ? true : n.trial_id) === b.a7,
    y = [];
  c && y.push(s.z.BOGO_2025_NITRO_TAB_BADGE);
  let [O, v] = (0, d.US)(y, true, true);
  return i.useEffect(() => {
    true === t && O === s.z.BOGO_2025_NITRO_TAB_BADGE && v(E.L.AUTO_DISMISS)
  }, [v, t, O]), c ? e = (0, r.jsx)(m.Z, {}) : null != a ? e = (0, r.jsx)(g.GN, {
    isTabSelected: t,
    userDiscount: a,
    includesAmountOff: false
  }) : null == n || u || (e = (0, r.jsx)(g.$H, {
    isTabSelected: t,
    trialOffer: n
  })), e
}

function v(e) {
  var t, n;
  let {
    decoration: i,
    label: a,
    isSelected: s
  } = e, d = (0, f.Vi)(), p = null != (n = null != (t = O(s)) ? t : i) ? n : (0, r.jsx)(c.SrA, {
    size: "sm",
    color: s ? l.Z.unsafe_rawColors.WHITE.css : u.JX.PREMIUM_TIER_2
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o()(y.premiumLabel, {
        [y.selected]: s && !d
      }),
      children: [a, p]
    }), (0, r.jsx)("div", {
      className: o()(y.background, {
        [y.selectedBackground]: !d && s
      })
    })]
  })
}