/** Chunk was on 83037 **/
/** chunk id: 525302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk812206 = require("./812206.js"),
  Chunk321947 = require("./321947.js"),
  Chunk701488 = require("./701488.js");

function c(e) {
  return (0, r.jsx)(d, {
    wishlistItem: e
  })
}

function u(e) {
  let {
    application: t
  } = e, n = null != t ? t.getIconURL(s.Si.SMALL) : true;
  return null != n ? (0, r.jsx)("img", {
    src: n,
    alt: null == t ? true : t.name
  }) : (0, r.jsx)(i.EOn, {
    color: "currentColor",
    size: "xs"
  })
}

function d(e) {
  let {
    wishlistItem: t
  } = e, n = (0, l.e7)([o.Z], () => (0, a.F)(t) ? o.Z.getApplication(t.sku.applicationId) : true);
  return (0, r.jsx)(u, {
    application: n
  })
}