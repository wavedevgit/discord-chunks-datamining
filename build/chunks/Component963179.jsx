/** Chunk was on 70104 **/
/** chunk id: 963179, original params: t,e,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  ItemDetailsModal: () => j
}), require("./228524.js"), require("./733351.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk423090 = require("./423090.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk67480 = require("./67480.js"),
  Chunk328968 = require("./328968.js"),
  Chunk371794 = require("./371794.js"),
  Chunk998218 = require("./998218.js"),
  Chunk56754 = require("./56754.js"),
  Chunk550732 = require("./550732.jsx"),
  Chunk376374 = require("./376374.jsx"),
  Chunk86889 = require("./86889.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function j(t) {
  var e, r, j, f;
  let {
    onClose: g,
    transitionState: h,
    skuId: y,
    appId: E,
    onHeaderTitleClick: b
  } = t, A = (0, s.bG)([o.A], () => o.A.getForSKU(y), [y]), I = (0, s.bG)([a.A], () => a.A.get(y), [y]), O = (0, u.L)(y);
  if (null == I) return null;
  let S = null != (e = I.name) ? e : "",
    T = null != (r = null == A || null == (f = A.description) ? true : f.trim()) ? r : true,
    R = (null == A ? true : A.headerBackground) != null && null != (j = d.A.toURLSafe((0, c.YE)(E, A.headerBackground, 256))) ? j : true,
    N = I.type === v.Puh.DURABLE && O,
    P = I.type === v.Puh.DURABLE ? N ? _.intl.string(_.t.bm82mm) : _.intl.string(_.t["6gprwf"]) : true,
    {
      price: k
    } = I;
  return null == k ? null : (0, n.jsx)(x.C, {
    appId: E,
    skuId: I.id,
    transitionState: h,
    onHeaderTitleClick: null != b ? b : g,
    onClose: g,
    footer: (0, n.jsx)(p.$P, {
      appId: E,
      sku: I
    }),
    children: (0, n.jsx)(m.D, {
      appId: E,
      skuId: I.id,
      title: S,
      description: T,
      imgSrc: R,
      tag: null != P ? (0, n.jsx)(l.v, {
        text: P
      }) : true,
      FallbackIcon: i.qyI
    })
  })
}