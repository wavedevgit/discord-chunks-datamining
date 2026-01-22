/** Chunk was on 21738 **/
/** chunk id: 108722, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk64983 = require("./64983.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk183292 = require("./183292.js");

function u(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e;
  return (0, r.jsx)(i.A, {
    image: c,
    guild: t,
    onDismissed: () => n(s.i.UNKNOWN),
    onClick: () => {
      open(l.A.getArticleURL(a.MVz.CONNECTION_DETAILS)), n(s.i.UNKNOWN)
    },
    title: o.intl.string(o.t.YMgaJt),
    message: o.intl.string(o.t["AV/9eW"]),
    cta: o.intl.string(o.t.hvVgAZ),
    trackingSource: a.kZU.LINKED_ROLES_ADMIN_NUX,
    type: a.n5X.LINKED_ROLES_ADMIN
  })
}