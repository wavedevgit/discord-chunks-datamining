/** Chunk was on 9536 **/
/** chunk id: 802005, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  C: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk736617 = require("./736617.js"),
  Chunk566084 = require("./566084.js"),
  Chunk196961 = require("./196961.js"),
  Chunk203377 = require("./203377.js");

function f() {
  let {
    vanityURLCode: e,
    hasChanges: t,
    errorDetails: n
  } = (0, l.cj)([d.Z], () => ({
    vanityURLCode: d.Z.vanityURLCode,
    hasChanges: d.Z.hasChanges(),
    errorDetails: d.Z.errorDetails
  })), {
    guild: f,
    submitting: m,
    errors: b,
    hasChanges: p
  } = (0, l.cj)([o.Z], () => o.Z.getProps()), h = i.useMemo(() => null != n ? (0, u.i)(null == n ? true : n.code) : (0, g.LG)(b), [b, n]), x = i.useCallback(async () => {
    if (null != f && (t && await (0, c.en)(f.id, e, {
        throwErr: true
      }), p)) {
      let e = {
        premiumProgressBarEnabled: f.premiumProgressBarEnabled,
        banner: f.banner,
        splash: f.splash
      };
      await s.Z.saveGuild(f.id, e, {
        throwErr: true
      })
    }
  }, [f, p, t, e]), j = i.useCallback(() => {
    null != f && (s.Z.init(f.id), (0, c.H7)())
  }, [f]);
  return (0, r.jsx)(a.Z, {
    submitting: m,
    errorMessage: h,
    onSave: x,
    onReset: j
  })
}