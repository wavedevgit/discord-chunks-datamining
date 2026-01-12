/** Chunk was on 9536 **/
/** chunk id: 308619, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk699553 = require("./699553.js"),
  Chunk314852 = require("./314852.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js");

function u() {
  let e = (0, l.e7)([d.Z], () => d.Z.getGuild()),
    t = null == e ? true : e.id,
    n = (0, l.e7)([d.Z], () => d.Z.getProfileError()),
    u = (0, l.e7)([d.Z], () => d.Z.getGuildProfile()),
    g = (0, l.e7)([o.Z], () => o.Z.getIsUpdating(t)),
    f = i.useMemo(() => null == n ? true : n.getAnyErrorMessage(), [n]),
    m = i.useCallback(() => {
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
      (0, s.pV)(e.id, t)
    }, [e, u]),
    b = i.useCallback(() => {
      null != t && c.Z.init(t)
    }, [t]);
  return (0, r.jsx)(a.Z, {
    submitting: g,
    errorMessage: f,
    onSave: m,
    onReset: b
  })
}