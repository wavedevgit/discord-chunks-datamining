/** Chunk was on web.js **/
/** chunk id: 126848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
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
  Chunk563042 = require("./563042.js");

function E(e) {
  let t, {
      decoration: n,
      label: a,
      isSelected: E
    } = e,
    b = (0, d.N)(),
    y = (0, u.Ng)(),
    O = (0, c.Vi)(),
    v = (null == b ? true : b.trial_id) === m.a7,
    I = [];
  O && I.push(s.z.BOGO_2025_NITRO_TAB_BADGE);
  let [T, S] = (0, l.US)(I, true, true);
  return i.useEffect(() => {
    true === E && T === s.z.BOGO_2025_NITRO_TAB_BADGE && S(h.L.AUTO_DISMISS)
  }, [S, E, T]), t = O ? (0, r.jsx)(f.Z, {}) : null != y ? (0, r.jsx)(_.GN, {
    isTabSelected: E,
    userDiscount: y,
    includesAmountOff: false
  }) : null == b || v ? null != n ? n : (0, r.jsx)(p.Z, {
    isSelected: E
  }) : (0, r.jsx)(_.$H, {
    isTabSelected: E,
    trialOffer: b
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o()(g.premiumLabel, {
        [g.selected]: E && !O
      }),
      children: [a, t]
    }), (0, r.jsx)("div", {
      className: o()(g.background, {
        [g.selectedBackground]: !O && E
      })
    })]
  })
}