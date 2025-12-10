/** Chunk was on web.js **/
/** chunk id: 147496, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  ItemDetailsModal: () => g
}), require("./953529.js"), require("./781311.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk942682 = require("./942682.jsx"),
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

function g(e) {
  var t, n, g, E;
  let {
    onClose: b,
    transitionState: y,
    skuId: O,
    appId: v,
    onHeaderTitleClick: S
  } = e, I = (0, a.e7)([l.Z], () => l.Z.getForSKU(O), [O]), T = (0, a.e7)([s.Z], () => s.Z.get(O), [O]), C = (0, d.M)(O);
  if (null == T) return null;
  let A = null != (n = T.name) ? n : "",
    N = null != (g = null == I || null == (t = I.description) ? true : t.trim()) ? g : true,
    P = (null == I ? true : I.headerBackground) != null && null != (E = u.Z.toURLSafe((0, c._W)(v, I.headerBackground, 256))) ? E : true,
    R = T.type === m.epS.DURABLE && C,
    w = T.type === m.epS.DURABLE ? R ? h.intl.string(h.t.bm82mm) : h.intl.string(h.t["6gprwf"]) : true,
    {
      price: D
    } = T;
  return null == D ? null : (0, r.jsx)(f.A, {
    appId: v,
    skuId: T.id,
    transitionState: y,
    onHeaderTitleClick: null != S ? S : b,
    onClose: b,
    footer: (0, r.jsx)(p.YG, {
      appId: v,
      sku: T
    }),
    children: (0, r.jsx)(_.i, {
      appId: v,
      skuId: T.id,
      title: A,
      description: N,
      imgSrc: P,
      tag: null != w ? (0, r.jsx)(i.V, {
        text: w
      }) : true,
      FallbackIcon: o.Prq
    })
  })
}