/** Chunk was on 84018 **/
/** chunk id: 576030, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  GM: () => p,
  mW: () => h,
  uq: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk587895 = require("./587895.js"),
  Chunk721932 = require("./721932.js"),
  Chunk287809 = require("./287809.js"),
  Chunk360469 = require("./360469.js");

function u(e) {
  let t = null != e.gifterUserId ? c.default.getUser(e.gifterUserId) : null;
  return null == t ? null : (0, i.jsx)(l.euF, {
    src: t.getAvatarURL(true, 48),
    size: l._3J.SIZE_48,
    "aria-label": t.username
  })
}

function p(e) {
  return (0, i.jsx)(f, {
    wishlistItem: e
  })
}

function h(e) {
  let {
    application: t
  } = e, n = null != t ? t.getIconURL(d.iu.SMALL) : true;
  return null != n ? (0, i.jsx)("img", {
    src: n,
    alt: null == t ? true : t.name
  }) : (0, i.jsx)(r.U1X, {
    color: "currentColor",
    size: "xs"
  })
}

function f(e) {
  let {
    wishlistItem: t
  } = e, n = (0, s.bG)([o.A], () => (0, a.$)(t) ? o.A.getApplication(t.sku.applicationId) : true);
  return (0, i.jsx)(h, {
    application: n
  })
}