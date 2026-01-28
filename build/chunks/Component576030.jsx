/** Chunk was on web.js **/
/** chunk id: 576030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GM: () => f,
  mW: () => p,
  uq: () => d
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

function d(e) {
  let t = null != e.gifterUserId ? c.default.getUser(e.gifterUserId) : null;
  return null == t ? null : (0, r.jsx)(o.euF, {
    src: t.getAvatarURL(true, 48),
    size: o._3J.SIZE_48,
    "aria-label": t.username
  })
}

function f(e) {
  return (0, r.jsx)(_, {
    wishlistItem: e
  })
}

function p(e) {
  let {
    application: t
  } = e, n = null != t ? t.getIconURL(u.iu.SMALL) : true;
  return null != n ? (0, r.jsx)("img", {
    src: n,
    alt: null == t ? true : t.name
  }) : (0, r.jsx)(i.U1X, {
    color: "currentColor",
    size: "xs"
  })
}

function _(e) {
  let {
    wishlistItem: t
  } = e, n = (0, a.bG)([s.A], () => (0, l.$)(t) ? s.A.getApplication(t.sku.applicationId) : true);
  return (0, r.jsx)(p, {
    application: n
  })
}