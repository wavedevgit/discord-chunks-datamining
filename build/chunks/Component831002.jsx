/** Chunk was on 86357 **/
/** chunk id: 831002, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $A: () => y,
  j8: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx");
require("./358221.js"), require("./431368.jsx"), require("./167675.jsx"), require("./418469.jsx"), require("./673539.jsx");
var Chunk218035 = require("./218035.jsx"),
  Chunk775666 = require("./775666.jsx"),
  Chunk423589 = require("./423589.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk881824 = require("./881824.jsx"),
  Chunk146085 = require("./146085.js"),
  Chunk427679 = require("./427679.js");
require("./354459.js");
var Chunk388032 = require("./388032.jsx");

function y(e) {
  let t = (0, a.e7)([p.Z], () => p.Z.getChannel(e), [e]),
    n = (0, a.e7)([h.Z], () => h.Z.can(m.yP, t)),
    i = (0, a.e7)([g.Z], () => g.Z.getStageInstanceByChannel(e), [e]),
    l = (0, s.bp)(),
    c = () => null != t && (0, f.T)(t, l);
  return (null == t ? true : t.isGuildStageVoice()) && n ? null != i ? (0, r.jsx)(o.sNh, {
    id: "edit-stage",
    label: b.intl.string(b.t["I+9bLy"]),
    action: c
  }) : (0, r.jsx)(o.sNh, {
    id: "start-stage",
    label: b.intl.string(b.t.OYbHfn),
    action: c
  }) : null
}

function _(e) {
  let t = (0, a.e7)([p.Z], () => p.Z.getChannel(e), [e]);
  l()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
  let n = (0, d.Mn)("StageChannelCallOverflowMenu"),
    r = (0, u.ZP)(t),
    i = (0, c.Z)(t);
  return n ? r : i
}