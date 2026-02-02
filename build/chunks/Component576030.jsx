/** Chunk was on 97246 **/
/** chunk id: 576030, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GM: () => _,
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
  let t = null != e.gifterUserId ? u.default.getUser(e.gifterUserId) : null;
  return null == t ? null : (0, l.jsx)(i.euF, {
    src: t.getAvatarURL(true, 48),
    size: i._3J.SIZE_48,
    "aria-label": t.username
  })
}

function _(e) {
  return (0, l.jsx)(b, {
    wishlistItem: e
  })
}

function p(e) {
  let {
    application: t
  } = e, n = null != t ? t.getIconURL(c.iu.SMALL) : true;
  return null != n ? (0, l.jsx)("img", {
    src: n,
    alt: null == t ? true : t.name
  }) : (0, l.jsx)(r.U1X, {
    color: "currentColor",
    size: "xs"
  })
}

function b(e) {
  let {
    wishlistItem: t
  } = e, n = (0, o.bG)([a.A], () => (0, s.$)(t) ? a.A.getApplication(t.sku.applicationId) : true);
  return (0, l.jsx)(p, {
    application: n
  })
}