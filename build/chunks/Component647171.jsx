/** Chunk was on 39048 **/
/** chunk id: 647171, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  l: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk310527 = require("./310527.js"),
  Chunk737331 = require("./737331.js"),
  Chunk446291 = require("./446291.js"),
  Chunk927573 = require("./927573.js");

function m() {
  let {
    vanityURLCode: e,
    hasChanges: t,
    errorDetails: n
  } = (0, l.cf)([d.A], () => ({
    vanityURLCode: d.A.vanityURLCode,
    hasChanges: d.A.hasChanges(),
    errorDetails: d.A.errorDetails
  })), {
    guild: m,
    submitting: p,
    errors: f,
    hasChanges: h
  } = (0, l.cf)([o.A], () => o.A.getProps()), b = i.useMemo(() => null != n ? (0, u.z)(null == n ? true : n.code) : (0, g.$s)(f), [f, n]), x = i.useCallback(async () => {
    if (null != m && (t && await (0, c.zf)(m.id, e, {
        throwErr: true
      }), h)) {
      let e = {
        premiumProgressBarEnabled: m.premiumProgressBarEnabled,
        banner: m.banner,
        splash: m.splash
      };
      await a.A.saveGuild(m.id, e, {
        throwErr: true
      })
    }
  }, [m, h, t, e]), j = i.useCallback(() => {
    null != m && (a.A.init(m.id), (0, c.fx)())
  }, [m]);
  return (0, r.jsx)(s.A, {
    submitting: p,
    errorMessage: b,
    onSave: x,
    onReset: j
  })
}