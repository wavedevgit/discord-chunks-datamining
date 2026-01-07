/** Chunk was on 9536 **/
/** chunk id: 966357, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk699553 = require("./699553.js"),
  Chunk314852 = require("./314852.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk551199 = require("./551199.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let e = (0, l.e7)([d.Z], () => d.Z.getGuild()),
    t = null == e ? true : e.id,
    n = (0, l.e7)([d.Z], () => d.Z.getProfileError()),
    f = (0, l.e7)([d.Z], () => d.Z.getGuildProfile()),
    m = (0, l.e7)([o.Z], () => o.Z.getIsUpdating(t)),
    b = i.useMemo(() => (null == n ? true : n.status) === 429 ? g.intl.string(u.default["bFRS/s"]) : null == n ? true : n.getAnyErrorMessage(), [n]),
    p = i.useCallback(() => {
      if (null == e || null == f) return;
      let t = {
        tag: f.tag,
        badge: f.badge,
        badgeColorPrimary: f.badgeColorPrimary,
        badgeColorSecondary: f.badgeColorSecondary
      };
      (0, s.pV)(e.id, t)
    }, [e, f]),
    h = i.useCallback(() => {
      null != t && c.Z.init(t)
    }, [t]);
  return (0, r.jsx)(a.Z, {
    submitting: m,
    errorMessage: b,
    onSave: p,
    onReset: h
  })
}