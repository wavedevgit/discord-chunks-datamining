/** Chunk was on 9536 **/
/** chunk id: 802005, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  C: () => m
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

function m() {
  let {
    vanityURLCode: e,
    hasChanges: t,
    errorDetails: n
  } = (0, l.cj)([d.Z], () => ({
    vanityURLCode: d.Z.vanityURLCode,
    hasChanges: d.Z.hasChanges(),
    errorDetails: d.Z.errorDetails
  })), {
    guild: m,
    submitting: f,
    errors: b,
    hasChanges: p
  } = (0, l.cj)([o.Z], () => o.Z.getProps()), h = i.useMemo(() => null != n ? (0, u.i)(null == n ? true : n.code) : (0, g.LG)(b), [b, n]), x = i.useCallback(async () => {
    if (null != m && (t && await (0, c.en)(m.id, e, {
        throwErr: true
      }), p)) {
      let e = {
        premiumProgressBarEnabled: m.premiumProgressBarEnabled,
        banner: m.banner,
        splash: m.splash
      };
      await s.Z.saveGuild(m.id, e, {
        throwErr: true
      })
    }
  }, [m, p, t, e]), j = i.useCallback(() => {
    null != m && (s.Z.init(m.id), (0, c.H7)())
  }, [m]);
  return (0, r.jsx)(a.Z, {
    submitting: f,
    errorMessage: h,
    onSave: x,
    onReset: j
  })
}