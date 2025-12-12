/** Chunk was on 9536 **/
/** chunk id: 276687, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk524329 = require("./524329.js"),
  Chunk575258 = require("./575258.js"),
  Chunk388032 = require("./388032.jsx");
let d = () => {
  let {
    guild: e
  } = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps()), {
    submitting: t,
    welcomeSettings: n
  } = (0, Chunk442837.e7)([Chunk575258.Z], () => Chunk575258.Z.getSettingsProps());
  return null == module ? null : (0, Chunk54381.jsx)(Chunk796027.Z, {
    onSave: () => (0, Chunk524329.Es)(module.id, require),
    onReset: Chunk524329.Xb,
    submitting: exports,
    onSaveText: Chunk388032.intl.string(Chunk388032.t["7NqTJn"]),
    message: Chunk388032.intl.string(Chunk388032.t["Z0/Wme"])
  })
}