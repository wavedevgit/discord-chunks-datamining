/** Chunk was on 384 **/
/** chunk id: 934638, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk345074 = require("./345074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    profile: t,
    canManageGuild: n
  } = e, d = t.id, g = i.useCallback(e => {
    o.Z.updateGuild({
      description: e
    }), o.Z.updateGuildProfile(d, {
      description: e
    })
  }, [d]), m = (0, s.e7)([c.Z], () => c.Z.getError("description"));
  return (0, r.jsx)(a.Kx8, {
    label: u.intl.string(u.t.Z27SCb),
    description: u.intl.string(u.t.pw0MIk),
    value: t.description,
    placeholder: u.intl.string(u.t.Nvfowl),
    onChange: g,
    maxLength: l.Us,
    disabled: !n,
    error: m
  })
}