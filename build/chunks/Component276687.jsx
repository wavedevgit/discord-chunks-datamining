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
  } = (0, i.e7)([a.Z], () => a.Z.getProps()), {
    submitting: t,
    welcomeSettings: n
  } = (0, i.e7)([o.Z], () => o.Z.getSettingsProps());
  return null == e ? null : (0, r.jsx)(l.Z, {
    onSave: () => (0, s.Es)(e.id, n),
    onReset: s.Xb,
    submitting: t,
    onSaveText: c.intl.string(c.t["7NqTJn"]),
    message: c.intl.string(c.t["Z0/Wme"])
  })
}