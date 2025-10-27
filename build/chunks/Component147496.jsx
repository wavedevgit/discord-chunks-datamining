/** Chunk was on web.js **/
/** chunk id: 147496, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  ItemDetailsModal: () => g
}), require("./953529.js"), require("./781311.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    onHeaderTitleClick: I
  } = e, T = (0, a.e7)([l.Z], () => l.Z.getForSKU(O), [O]), S = (0, a.e7)([s.Z], () => s.Z.get(O), [O]), A = (0, d.M)(O);
  if (null == S) return null;
  let C = null != (n = S.name) ? n : "",
    N = null != (g = null == T || null == (t = T.description) ? true : t.trim()) ? g : true,
    R = (null == T ? true : T.headerBackground) != null && null != (E = u.Z.toURLSafe((0, c._W)(v, T.headerBackground, 256))) ? E : true,
    P = S.type === h.epS.DURABLE && A,
    D = S.type === h.epS.DURABLE ? P ? m.intl.string(m.t.bm82mm) : m.intl.string(m.t["6gprwf"]) : true,
    {
      price: w
    } = S;
  return null == w ? null : (0, r.jsx)(f.A, {
    appId: v,
    skuId: S.id,
    transitionState: y,
    onHeaderTitleClick: null != I ? I : b,
    onClose: b,
    footer: (0, r.jsx)(_.YG, {
      appId: v,
      sku: S
    }),
    children: (0, r.jsx)(p.i, {
      appId: v,
      skuId: S.id,
      title: C,
      description: N,
      imgSrc: R,
      tag: null != D ? (0, r.jsx)(i.V, {
        text: D
      }) : true,
      FallbackIcon: o.Prq
    })
  })
}