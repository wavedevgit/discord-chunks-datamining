/** Chunk was on web.js **/
/** chunk id: 963179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  ItemDetailsModal: () => g
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

function g(e) {
  var t, n, g, E;
  let {
    onClose: b,
    transitionState: y,
    skuId: O,
    appId: A,
    onHeaderTitleClick: v
  } = e, S = (0, a.bG)([l.A], () => l.A.getForSKU(O), [O]), I = (0, a.bG)([o.A], () => o.A.get(O), [O]), T = (0, d.L)(O);
  if (null == I) return null;
  let C = null != (t = I.name) ? t : "",
    N = null != (n = null == S || null == (E = S.description) ? true : E.trim()) ? n : true,
    R = (null == S ? true : S.headerBackground) != null && null != (g = u.A.toURLSafe((0, c.YE)(A, S.headerBackground, 256))) ? g : true,
    w = I.type === h.Puh.DURABLE && T,
    P = I.type === h.Puh.DURABLE ? w ? m.intl.string(m.t.bm82mm) : m.intl.string(m.t["6gprwf"]) : true,
    {
      price: D
    } = I;
  return null == D ? null : (0, r.jsx)(f.C, {
    appId: A,
    skuId: I.id,
    transitionState: y,
    onHeaderTitleClick: null != v ? v : b,
    onClose: b,
    footer: (0, r.jsx)(p.$P, {
      appId: A,
      sku: I
    }),
    children: (0, r.jsx)(_.D, {
      appId: A,
      skuId: I.id,
      title: C,
      description: N,
      imgSrc: R,
      tag: null != P ? (0, r.jsx)(i.v, {
        text: P
      }) : true,
      FallbackIcon: s.qyI
    })
  })
}