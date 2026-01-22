/** Chunk was on web.js **/
/** chunk id: 965304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A,
  e: () => O
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function O() {
  let e, t = arguments.length > 0 && true !== arguments[0] && arguments[0],
    n = (0, h.V)(),
    a = (0, _.O)(),
    s = (0, f.cg)(),
    l = null != (0, p.A)(),
    c = s || l,
    u = (null == n ? true : n.trial_id) === b.Dw,
    y = [];
  c && y.push(o.M.BOGO_2025_NITRO_TAB_BADGE);
  let [O, A] = (0, d.kn)(y, true, true);
  return i.useEffect(() => {
    true === t && O === o.M.BOGO_2025_NITRO_TAB_BADGE && A(E.i.AUTO_DISMISS)
  }, [A, t, O]), c ? e = (0, r.jsx)(m.A, {}) : null != a ? e = (0, r.jsx)(g.fY, {
    isTabSelected: t,
    userDiscount: a,
    includesAmountOff: false
  }) : null == n || u || (e = (0, r.jsx)(g.Ag, {
    isTabSelected: t,
    trialOffer: n
  })), e
}

function A(e) {
  var t, n;
  let {
    decoration: i,
    label: a,
    isSelected: o
  } = e, d = (0, f.cg)(), p = null != (t = null != (n = O(o)) ? n : i) ? t : (0, r.jsx)(c.tvc, {
    size: "sm",
    color: o ? l.A.unsafe_rawColors.WHITE.css : u.k0.PREMIUM_TIER_2
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(y.gj, {
        [y.wH]: o && !d
      }),
      children: [a, p]
    }), (0, r.jsx)("div", {
      className: s()(y.Tp, {
        [y._I]: !d && o
      })
    })]
  })
}