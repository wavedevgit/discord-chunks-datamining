/** Chunk was on web.js **/
/** chunk id: 576030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GM: () => c,
  mW: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk587895 = require("./587895.js"),
  Chunk721932 = require("./721932.js"),
  Chunk360469 = require("./360469.js");

function c(e) {
  return (0, r.jsx)(d, {
    wishlistItem: e
  })
}

function u(e) {
  let {
    application: t
  } = e, n = null != t ? t.getIconURL(l.iu.SMALL) : true;
  return null != n ? (0, r.jsx)("img", {
    src: n,
    alt: null == t ? true : t.name
  }) : (0, r.jsx)(i.U1X, {
    color: "currentColor",
    size: "xs"
  })
}

function d(e) {
  let {
    wishlistItem: t
  } = e, n = (0, a.bG)([s.A], () => (0, o.$)(t) ? s.A.getApplication(t.sku.applicationId) : true);
  return (0, r.jsx)(u, {
    application: n
  })
}