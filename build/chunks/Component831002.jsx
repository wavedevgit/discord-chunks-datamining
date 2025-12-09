/** Chunk was on 73755 **/
/** chunk id: 831002, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $A: () => _,
  j8: () => v
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js");
require("./358221.js"), require("./431368.jsx"), require("./167675.jsx"), require("./418469.jsx"), require("./673539.jsx");
var Chunk218035 = require("./218035.jsx"),
  Chunk775666 = require("./775666.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk423589 = require("./423589.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk881824 = require("./881824.jsx"),
  Chunk146085 = require("./146085.js"),
  Chunk427679 = require("./427679.js"),
  Chunk430104 = require("./430104.js"),
  Chunk852159 = require("./852159.js");
require("./354459.js");
var Chunk388032 = require("./388032.jsx");

function _(e) {
  let t = (0, a.e7)([p.Z], () => p.Z.getChannel(e), [e]),
    n = (0, a.e7)([h.Z], () => h.Z.can(m.yP, t)),
    r = (0, b.sP)(),
    l = (0, a.e7)([g.Z], () => g.Z.getStageInstanceByChannel(e), [e]),
    s = (0, u.bp)(),
    c = (0, C.A)(t);
  return (null == t ? true : t.isGuildStageVoice()) && n && !r ? null != l ? (0, i.jsx)(o.sNh, {
    id: "edit-stage",
    label: y.intl.string(y.t["I+9bLx"]),
    action: () => {
      null != t && (0, f.T)(t, s)
    }
  }) : (0, i.jsx)(o.sNh, {
    id: "start-stage",
    label: y.intl.string(y.t.OYbHfv),
    action: c
  }) : null
}

function v(e) {
  let t = (0, a.e7)([p.Z], () => p.Z.getChannel(e), [e]);
  l()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
  let n = (0, d.Mn)("StageChannelCallOverflowMenu"),
    i = (0, c.ZP)(t),
    r = (0, s.Z)(t);
  return n ? i : r
}