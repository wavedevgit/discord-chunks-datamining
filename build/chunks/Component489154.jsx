/** Chunk was on 47841 **/
/** chunk id: 489154, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk250527 = require("./250527.js"),
  Chunk837011 = require("./837011.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js");

function u() {
  let e = (0, l.bG)([d.A], () => d.A.getGuild()),
    t = null == e ? true : e.id,
    n = (0, l.bG)([d.A], () => d.A.getProfileError()),
    u = (0, l.bG)([d.A], () => d.A.getGuildProfile()),
    f = (0, l.bG)([c.A], () => c.A.getIsUpdating(t)),
    g = i.useMemo(() => null == n ? true : n.getAnyErrorMessage(), [n]),
    b = i.useCallback(() => {
      if (null == e || null == u) return;
      let t = {
        name: u.name,
        description: u.description,
        icon: u.icon,
        brandColorPrimary: u.brandColorPrimary,
        traits: u.traits,
        visibility: u.visibility,
        gameApplicationIds: u.gameApplicationIds,
        customBanner: u.customBanner
      };
      (0, a._C)(e.id, t)
    }, [e, u]),
    m = i.useCallback(() => {
      null != t && o.A.init(t)
    }, [t]);
  return (0, r.jsx)(s.A, {
    submitting: f,
    errorMessage: g,
    onSave: b,
    onReset: m
  })
}