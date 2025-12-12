/** Chunk was on 9536 **/
/** chunk id: 934638, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk345074 = require("./345074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    profile: t,
    canManageGuild: n
  } = e, u = t.id, g = i.useCallback(e => {
    o.Z.updateGuild({
      description: e
    }), o.Z.updateGuildProfile(u, {
      description: e
    })
  }, [u]), f = (0, a.e7)([c.Z], () => c.Z.getError("description"));
  return (0, r.jsx)(s.Kx8, {
    label: d.intl.string(d.t.Z27SCb),
    description: d.intl.string(d.t.pw0MIk),
    value: t.description,
    placeholder: d.intl.string(d.t.Nvfowl),
    onChange: g,
    maxLength: l.Us,
    disabled: !n,
    error: f
  })
}