/** Chunk was on web.js **/
/** chunk id: 126848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b,
  x: () => E
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk367074 = require("./367074.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk655525 = require("./655525.jsx"),
  Chunk924540 = require("./924540.jsx"),
  Chunk170671 = require("./170671.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk494723 = require("./494723.js");

function E() {
  let e, t = arguments.length > 0 && true !== arguments[0] && arguments[0],
    n = (0, Chunk639119.N)(),
    a = (0, Chunk104494.Ng)(),
    o = (0, Chunk367074.Vi)(),
    p = (null == require ? true : require.trial_id) === Chunk474936.a7,
    g = [];
  o && Chunk494723.push(Chunk704215.z.BOGO_2025_NITRO_TAB_BADGE);
  let [E, b] = (0, Chunk243778.US)(Chunk494723, true, true);
  return Chunk647438.useEffect(() => {
    true === exports && E === Chunk704215.z.BOGO_2025_NITRO_TAB_BADGE && b(Chunk921944.L.AUTO_DISMISS)
  }, [b, exports, E]), o ? e = (0, Chunk951288.jsx)(Chunk655525.Z, {}) : null != Chunk120356 ? e = (0, Chunk951288.jsx)(Chunk924540.GN, {
    isTabSelected: exports,
    userDiscount: Chunk120356,
    includesAmountOff: false
  }) : null == require || Chunk170671 || (e = (0, Chunk951288.jsx)(Chunk924540.$H, {
    isTabSelected: exports,
    trialOffer: require
  })), module
}

function b(e) {
  var t, n;
  let {
    decoration: i,
    label: a,
    isSelected: s
  } = e, l = (0, c.Vi)(), u = null != (n = null != (t = E(s)) ? t : i) ? n : (0, r.jsx)(p.Z, {
    isSelected: s
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o()(g.premiumLabel, {
        [g.selected]: s && !l
      }),
      children: [a, u]
    }), (0, r.jsx)("div", {
      className: o()(g.background, {
        [g.selectedBackground]: !l && s
      })
    })]
  })
}