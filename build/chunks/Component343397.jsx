/** Chunk was on 384 **/
/** chunk id: 343397, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    profile: t,
    canManageGuild: n
  } = e, d = t.id, u = (0, l.e7)([o.Z], () => o.Z.getError("name")), g = i.useCallback(e => {
    s.Z.updateGuild({
      name: e
    }), s.Z.updateGuildProfile(d, {
      name: e
    })
  }, [d]);
  return (0, r.jsx)(a.oil, {
    label: c.intl.string(c.t.X56QcF),
    type: "text",
    disabled: !n,
    value: t.name,
    maxLength: 100,
    onChange: g,
    error: u
  })
}