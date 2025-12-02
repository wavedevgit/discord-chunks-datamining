/** Chunk was on 384 **/
/** chunk id: 976269, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    guildId: t
  } = e, n = (0, l.e7)([c.Z], () => c.Z.getSettings()), s = (0, l.e7)([c.Z], () => c.Z.getSubmitting()), u = i.useCallback(() => {
    try {
      (0, o.oo)(t, n)
    } catch (e) {}
  }, [t, n]);
  return (0, r.jsx)(a.Z, {
    onSave: u,
    onReset: o.bj,
    submitting: s,
    onSaveText: d.intl.string(d.t["R3BPH+"])
  })
}
let g = function() {
  let e = (0, Chunk399606.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild());
  return null == module ? null : (0, Chunk54381.jsx)(u, {
    guildId: module.id
  })
}