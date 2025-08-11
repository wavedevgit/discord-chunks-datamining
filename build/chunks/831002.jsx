/** Chunk was on web.js **/
/** chunk id: 831002, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $A: () => E,
  j8: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx");
require("./358221.js"), require("./431368.jsx"), require("./167675.jsx"), require("./418469.jsx"), require("./673539.jsx");
var Chunk218035 = require("./218035.jsx"),
  Chunk775666 = require("./775666.jsx"),
  Chunk423589 = require("./423589.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk881824 = require("./881824.js"),
  Chunk146085 = require("./146085.js"),
  Chunk427679 = require("./427679.js");
require("./354459.js");
var Chunk388032 = require("./388032.jsx");

function E(e) {
  let t = (0, a.e7)([f.Z], () => f.Z.getChannel(e), [e]),
    n = (0, a.e7)([_.Z], () => _.Z.can(h.yP, t)),
    i = (0, a.e7)([m.Z], () => m.Z.getStageInstanceByChannel(e), [e]),
    o = (0, l.bp)(),
    c = () => null != t && (0, p.T)(t, o);
  return (null == t ? true : t.isGuildStageVoice()) && n ? null != i ? <s.sNh id={"edit-stage"} label={g.intl.string(g.t["I+9bLy"])} action={c} /> : <s.sNh id={"start-stage"} label={g.intl.string(g.t.OYbHfn)} action={c} /> : null
}

function b(e) {
  let t = (0, a.e7)([f.Z], () => f.Z.getChannel(e), [e]);
  o()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
  let n = (0, d.Mn)("StageChannelCallOverflowMenu"),
    r = (0, u.ZP)(t),
    i = (0, c.Z)(t);
  return n ? r : i
}