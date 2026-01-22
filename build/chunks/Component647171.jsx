/** Chunk was on 47841 **/
/** chunk id: 647171, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  l: () => g
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

function g() {
  let {
    vanityURLCode: e,
    hasChanges: t,
    errorDetails: n
  } = (0, l.cf)([d.A], () => ({
    vanityURLCode: d.A.vanityURLCode,
    hasChanges: d.A.hasChanges(),
    errorDetails: d.A.errorDetails
  })), {
    guild: g,
    submitting: b,
    errors: m,
    hasChanges: p
  } = (0, l.cf)([c.A], () => c.A.getProps()), x = i.useMemo(() => null != n ? (0, u.z)(null == n ? true : n.code) : (0, f.$s)(m), [m, n]), h = i.useCallback(async () => {
    if (null != g && (t && await (0, o.zf)(g.id, e, {
        throwErr: true
      }), p)) {
      let e = {
        premiumProgressBarEnabled: g.premiumProgressBarEnabled,
        banner: g.banner,
        splash: g.splash
      };
      await a.A.saveGuild(g.id, e, {
        throwErr: true
      })
    }
  }, [g, p, t, e]), j = i.useCallback(() => {
    null != g && (a.A.init(g.id), (0, o.fx)())
  }, [g]);
  return (0, r.jsx)(s.A, {
    submitting: b,
    errorMessage: x,
    onSave: h,
    onReset: j
  })
}