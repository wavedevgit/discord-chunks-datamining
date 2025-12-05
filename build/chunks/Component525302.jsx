/** Chunk was on 84608 **/
/** chunk id: 525302, original params: e,t,r (module,exports,require) **/
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
  return (0, i.jsx)(d, {
    wishlistItem: e
  })
}

function u(e) {
  let {
    application: t
  } = e, r = null != t ? t.getIconURL(o.Si.SMALL) : true;
  return null != r ? (0, i.jsx)("img", {
    src: r,
    alt: null == t ? true : t.name
  }) : (0, i.jsx)(n.EOn, {
    color: "currentColor",
    size: "xs"
  })
}

function d(e) {
  let {
    wishlistItem: t
  } = e, r = (0, a.e7)([s.Z], () => (0, l.F)(t) ? s.Z.getApplication(t.sku.applicationId) : true);
  return (0, i.jsx)(u, {
    application: r
  })
}