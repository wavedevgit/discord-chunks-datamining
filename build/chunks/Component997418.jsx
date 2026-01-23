/** Chunk was on 47841 **/
/** chunk id: 997418, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
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

function m() {
  let e = (0, l.bG)([d.A], () => d.A.getGuild()),
    t = null == e ? true : e.id,
    n = (0, l.bG)([d.A], () => d.A.getProfileError()),
    m = (0, l.bG)([d.A], () => d.A.getGuildProfile()),
    p = (0, l.bG)([o.A], () => o.A.getIsUpdating(t)),
    f = i.useMemo(() => (null == n ? true : n.status) === 429 ? g.intl.string(u.default["bFRS/s"]) : null == n ? true : n.getAnyErrorMessage(), [n]),
    b = i.useCallback(() => {
      if (null == e || null == m) return;
      let t = {
        tag: m.tag,
        badge: m.badge,
        badgeColorPrimary: m.badgeColorPrimary,
        badgeColorSecondary: m.badgeColorSecondary
      };
      (0, a._C)(e.id, t)
    }, [e, m]),
    h = i.useCallback(() => {
      null != t && c.A.init(t)
    }, [t]);
  return (0, r.jsx)(s.A, {
    submitting: p,
    errorMessage: f,
    onSave: b,
    onReset: h
  })
}