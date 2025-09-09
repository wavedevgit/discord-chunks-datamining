/** Chunk was on web.js **/
/** chunk id: 126848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v,
  x: () => O
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk44315 = require("./44315.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk367074 = require("./367074.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk655525 = require("./655525.jsx"),
  Chunk924540 = require("./924540.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk563042 = require("./563042.js");

function O() {
  let e, t = arguments.length > 0 && true !== arguments[0] && arguments[0],
    n = (0, Chunk639119.N)(),
    a = (0, Chunk104494.Ng)(),
    o = (0, Chunk367074.Vi)(),
    l = (null == require ? true : require.trial_id) === Chunk474936.a7,
    c = [];
  o && Chunk44315.push(Chunk704215.z.BOGO_2025_NITRO_TAB_BADGE);
  let [u, g] = (0, Chunk243778.US)(Chunk44315, true, true);
  return Chunk647438.useEffect(() => {
    true === exports && Chunk436774 === Chunk704215.z.BOGO_2025_NITRO_TAB_BADGE && Chunk981631(Chunk921944.L.AUTO_DISMISS)
  }, [Chunk981631, exports, Chunk436774]), o ? e = (0, Chunk951288.jsx)(Chunk655525.Z, {}) : null != Chunk120356 ? e = (0, Chunk951288.jsx)(Chunk924540.GN, {
    isTabSelected: exports,
    userDiscount: Chunk120356,
    includesAmountOff: false
  }) : null == require || Chunk481060 || (e = (0, Chunk951288.jsx)(Chunk924540.$H, {
    isTabSelected: exports,
    trialOffer: require
  })), module
}

function v(e) {
  var t, n;
  let {
    decoration: i,
    label: a,
    isSelected: s
  } = e, d = (0, f.Vi)(), _ = null != (n = null != (t = O(s)) ? t : i) ? n : (0, r.jsx)(l.SrA, {
    size: "sm",
    color: s ? (0, c.Lq)(g.Ilk.WHITE_500) : u.JX.PREMIUM_TIER_2
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o()(y.premiumLabel, {
        [y.selected]: s && !d
      }),
      children: [a, _]
    }), (0, r.jsx)("div", {
      className: o()(y.background, {
        [y.selectedBackground]: !d && s
      })
    })]
  })
}