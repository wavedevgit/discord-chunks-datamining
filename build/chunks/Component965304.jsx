/** Chunk was on 44411 **/
/** chunk id: 965304, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => O,
  e: () => S
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk404374 = require("./404374.jsx"),
  Chunk379848 = require("./379848.jsx"),
  Chunk40185 = require("./40185.js"),
  Chunk552736 = require("./552736.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk603488 = require("./603488.jsx"),
  Chunk105390 = require("./105390.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk788868 = require("./788868.js"),
  Chunk738386 = require("./738386.js");

function S() {
  let e, t = arguments.length > 0 && true !== arguments[0] && arguments[0],
    n = (0, f.V)(),
    r = (0, g.O)(),
    l = (0, h.cg)(),
    a = null != (0, p.A)(),
    d = l || a,
    u = (null == n ? true : n.trial_id) === b.Dw,
    m = [];
  d && m.push(o.M.BOGO_2025_NITRO_TAB_BADGE);
  let [S, O] = (0, c.kn)(m, true, true);
  return s.useEffect(() => {
    true === t && S === o.M.BOGO_2025_NITRO_TAB_BADGE && O(v.i.AUTO_DISMISS)
  }, [O, t, S]), d ? e = (0, i.jsx)(C.A, {}) : null != r ? e = (0, i.jsx)(y.fY, {
    isTabSelected: t,
    userDiscount: r,
    includesAmountOff: false
  }) : null == n || u || (e = (0, i.jsx)(y.Ag, {
    isTabSelected: t,
    trialOffer: n
  })), e
}

function O(e) {
  var t, n;
  let {
    decoration: s,
    label: r,
    isSelected: o
  } = e, c = (0, h.cg)(), p = null != (t = null != (n = S(o)) ? n : s) ? t : (0, i.jsx)(d.tvc, {
    size: "sm",
    color: o ? a.A.unsafe_rawColors.WHITE.css : u.k0.PREMIUM_TIER_2
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: l()(m.gj, {
        [m.wH]: o && !c
      }),
      children: [r, p]
    }), (0, i.jsx)("div", {
      className: l()(m.Tp, {
        [m._I]: !c && o
      })
    })]
  })
}