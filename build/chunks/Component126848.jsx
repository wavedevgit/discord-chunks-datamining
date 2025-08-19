/** Chunk was on 31930 **/
/** chunk id: 126848, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
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

function v(e) {
  let t, {
      decoration: n,
      label: s,
      isSelected: v
    } = e,
    C = (0, d.N)(),
    _ = (0, u.Ng)(),
    y = (0, c.Vi)(),
    O = (null == C ? true : C.trial_id) === m.a7,
    S = [];
  y && S.push(o.z.BOGO_2025_NITRO_TAB_BADGE);
  let [E, w] = (0, a.US)(S, true, true);
  return r.useEffect(() => {
    true === v && E === o.z.BOGO_2025_NITRO_TAB_BADGE && w(f.L.AUTO_DISMISS)
  }, [w, v, E]), t = y ? (0, i.jsx)(h.Z, {}) : null != _ ? (0, i.jsx)(p.GN, {
    isTabSelected: v,
    userDiscount: _,
    includesAmountOff: false
  }) : null == C || O ? null != n ? n : (0, i.jsx)(g.Z, {
    isSelected: v
  }) : (0, i.jsx)(p.$H, {
    isTabSelected: v,
    trialOffer: C
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: l()(b.premiumLabel, {
        [b.selected]: v && !y
      }),
      children: [s, t]
    }), (0, i.jsx)("div", {
      className: l()(b.background, {
        [b.selectedBackground]: !y && v
      })
    })]
  })
}