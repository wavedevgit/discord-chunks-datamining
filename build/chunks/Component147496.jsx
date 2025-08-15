/** Chunk was on 69796 **/
/** chunk id: 147496, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  ItemDetailsModal: () => v
}), require("./953529.js"), require("./781311.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk752843 = require("./752843.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk110742 = require("./110742.js"),
  Chunk886253 = require("./886253.jsx"),
  Chunk680005 = require("./680005.jsx"),
  Chunk938337 = require("./938337.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function v(e) {
  var n, t, v, f;
  let {
    onClose: j,
    transitionState: g,
    skuId: b,
    appId: N,
    onHeaderTitleClick: S
  } = e, I = (0, a.e7)([s.Z], () => s.Z.getForSKU(b), [b]), k = (0, a.e7)([i.Z], () => i.Z.get(b), [b]), O = (0, u.M)(b);
  if (null == k) return null;
  let C = null != (t = k.name) ? t : "",
    y = null != (v = null == I || null == (n = I.description) ? true : n.trim()) ? v : true,
    R = (null == I ? true : I.headerBackground) != null && null != (f = d.Z.toURLSafe((0, c._W)(N, I.headerBackground, 256))) ? f : true,
    T = k.type === h.epS.DURABLE && O,
    B = k.type === h.epS.DURABLE ? T ? p.intl.string(p.t.bm82mp) : p.intl.string(p.t["6gprwc"]) : true,
    {
      price: E
    } = k;
  return null == E ? null : (0, l.jsx)(x.A, {
    appId: N,
    skuId: k.id,
    transitionState: g,
    onHeaderTitleClick: null != S ? S : j,
    onClose: j,
    footer: (0, l.jsx)(m.YG, {
      appId: N,
      sku: k
    }),
    children: (0, l.jsx)(_.i, {
      appId: N,
      skuId: k.id,
      title: C,
      description: y,
      imgSrc: R,
      tag: null != B ? (0, l.jsx)(r.V, {
        text: B
      }) : true,
      FallbackIcon: o.Prq
    })
  })
}