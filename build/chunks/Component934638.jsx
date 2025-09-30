/** Chunk was on 64982 **/
/** chunk id: 934638, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk345074 = require("./345074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk270856 = require("./270856.js");

function m(e) {
  let {
    profile: t,
    canManageGuild: n
  } = e, m = t.id, g = i.useCallback(e => {
    o.Z.updateGuild({
      description: e
    }), o.Z.updateGuildProfile(m, {
      description: e
    })
  }, [m]), p = (0, s.e7)([c.Z], () => c.Z.getError("description"));
  return (0, r.jsxs)(a.hjN, {
    className: u.section,
    children: [(0, r.jsxs)("div", {
      className: u.sectionHeader,
      children: [(0, r.jsx)(a.vwX, {
        children: d.intl.string(d.t.Z27SCQ)
      }), (0, r.jsx)(a.R94, {
        type: a.geA.DESCRIPTION,
        children: d.intl.string(d.t.pw0MIi)
      })]
    }), (0, r.jsx)(a.Kx8, {
      value: t.description,
      placeholder: d.intl.string(d.t.Nvfows),
      onChange: g,
      maxLength: l.Us,
      disabled: !n,
      error: p
    })]
  })
}