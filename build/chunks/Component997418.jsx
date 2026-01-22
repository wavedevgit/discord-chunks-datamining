/** Chunk was on 47841 **/
/** chunk id: 997418, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk250527 = require("./250527.js"),
  Chunk837011 = require("./837011.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk583970 = require("./583970.js"),
  Chunk985018 = require("./985018.jsx");

function g() {
  let e = (0, l.bG)([d.A], () => d.A.getGuild()),
    t = null == e ? true : e.id,
    n = (0, l.bG)([d.A], () => d.A.getProfileError()),
    g = (0, l.bG)([d.A], () => d.A.getGuildProfile()),
    b = (0, l.bG)([c.A], () => c.A.getIsUpdating(t)),
    m = i.useMemo(() => (null == n ? true : n.status) === 429 ? f.intl.string(u.default["bFRS/s"]) : null == n ? true : n.getAnyErrorMessage(), [n]),
    p = i.useCallback(() => {
      if (null == e || null == g) return;
      let t = {
        tag: g.tag,
        badge: g.badge,
        badgeColorPrimary: g.badgeColorPrimary,
        badgeColorSecondary: g.badgeColorSecondary
      };
      (0, a._C)(e.id, t)
    }, [e, g]),
    x = i.useCallback(() => {
      null != t && o.A.init(t)
    }, [t]);
  return (0, r.jsx)(s.A, {
    submitting: b,
    errorMessage: m,
    onSave: p,
    onReset: x
  })
}