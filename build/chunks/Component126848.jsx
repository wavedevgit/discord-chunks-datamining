/** Chunk was on 81498 **/
/** chunk id: 126848, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function C(e) {
  let t, {
      decoration: n,
      label: s,
      isSelected: C
    } = e,
    b = (0, d.N)(),
    y = (0, c.Ng)(),
    O = (0, u.Vi)(),
    S = (null == b ? true : b.trial_id) === v.a7,
    E = [];
  O && E.push(o.z.BOGO_2025_NITRO_TAB_BADGE);
  let [_, w] = (0, a.US)(E, true, true);
  return r.useEffect(() => {
    true === C && _ === o.z.BOGO_2025_NITRO_TAB_BADGE && w(f.L.AUTO_DISMISS)
  }, [w, C, _]), t = O ? (0, i.jsx)(h.Z, {}) : null != y ? (0, i.jsx)(p.GN, {
    isTabSelected: C,
    userDiscount: y,
    includesAmountOff: false
  }) : null == b || S ? null != n ? n : (0, i.jsx)(g.Z, {
    isSelected: C
  }) : (0, i.jsx)(p.$H, {
    isTabSelected: C,
    trialOffer: b
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: l()(m.premiumLabel, {
        [m.selected]: C && !O
      }),
      children: [s, t]
    }), (0, i.jsx)("div", {
      className: l()(m.background, {
        [m.selectedBackground]: !O && C
      })
    })]
  })
}