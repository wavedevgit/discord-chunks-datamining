/** Chunk was on 72762 **/
/** chunk id: 126848, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk846133 = require("./846133.js");

function g(e) {
  let t, {
      decoration: n,
      label: l,
      isSelected: g
    } = e,
    j = (0, d.N)(),
    y = (0, u.Ng)(),
    v = (0, c.Vi)(),
    S = (null == j ? true : j.trial_id) === h.a7,
    E = [];
  v && E.push(o.z.BOGO_2025_NITRO_TAB_BADGE);
  let [x, P] = (0, a.US)(E, true, true);
  return i.useEffect(() => {
    true === g && x === o.z.BOGO_2025_NITRO_TAB_BADGE && P(O.L.AUTO_DISMISS)
  }, [P, g, x]), t = v ? (0, r.jsx)(f.Z, {}) : null != y ? (0, r.jsx)(p.GN, {
    isTabSelected: g,
    userDiscount: y,
    includesAmountOff: false
  }) : null == j || S ? null != n ? n : (0, r.jsx)(b.Z, {
    isSelected: g
  }) : (0, r.jsx)(p.$H, {
    isTabSelected: g,
    trialOffer: j
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(m.premiumLabel, {
        [m.selected]: g && !v
      }),
      children: [l, t]
    }), (0, r.jsx)("div", {
      className: s()(m.background, {
        [m.selectedBackground]: !v && g
      })
    })]
  })
}