/** Chunk was on 92818 **/
/** chunk id: 483968, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk590180 = require("./590180.js"),
  Chunk4227 = require("./4227.js"),
  Chunk993408 = require("./993408.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk616198 = require("./616198.js");
let p = e => {
  let {
    skuId: t,
    canUsePremiumCollectibles: n,
    isPurchaseSection: p,
    isPremiumSection: m
  } = e, f = (0, a.aT)(t), g = (0, l.bG)([o.A, c.A], () => {
    let e = o.A.getProduct(t),
      n = c.A.getPurchase(t);
    return null != n ? (0, a.gA)(n) : (0, a.G0)(e)
  });
  return p || m && n ? null : f ? (0, r.jsx)(s.JIr, {
    className: d.Ad,
    text: (0, r.jsxs)("div", {
      className: d.rm,
      children: [(0, r.jsx)(s.XAi, {
        size: "xxs",
        color: "currentColor"
      }), u.intl.string(u.t.y2b7CA)]
    })
  }) : (0, r.jsx)(s.fkz, {
    icon: g ? () => (0, r.jsx)(s.tvc, {
      size: "custom",
      color: "currentColor",
      width: 14,
      height: 14
    }) : () => (0, r.jsx)(s.XAi, {
      size: "xxs",
      color: "currentColor"
    }),
    color: i.A.colors.BACKGROUND_MOD_STRONG.css,
    className: d.bG
  })
}