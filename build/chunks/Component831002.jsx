/** Chunk was on 34740 **/
/** chunk id: 831002, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $A: () => _,
  j8: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js");
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
  Chunk430104 = require("./430104.js");
require("./354459.js");
var Chunk388032 = require("./388032.jsx");

function _(e) {
  let t = (0, a.e7)([f.Z], () => f.Z.getChannel(e), [e]),
    n = (0, a.e7)([m.Z], () => m.Z.can(b.yP, t)),
    r = (0, C.sP)(),
    l = (0, a.e7)([y.Z], () => y.Z.getStageInstanceByChannel(e), [e]),
    u = (0, p.bp)(),
    d = () => {
      (0, C.u1)() ? s.Z.showAgeVerificationGetStartedModal({
        entryPoint: c.cU.START_STAGE_PROMPT
      }): null != t && (0, g.T)(t, u)
    };
  return (null == t ? true : t.isGuildStageVoice()) && n && !r ? null != l ? (0, i.jsx)(o.sNh, {
    id: "edit-stage",
    label: v.intl.string(v.t["I+9bLx"]),
    action: d
  }) : (0, i.jsx)(o.sNh, {
    id: "start-stage",
    label: v.intl.string(v.t.OYbHfv),
    action: d
  }) : null
}

function x(e) {
  let t = (0, a.e7)([f.Z], () => f.Z.getChannel(e), [e]);
  l()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
  let n = (0, h.Mn)("StageChannelCallOverflowMenu"),
    i = (0, d.ZP)(t),
    r = (0, u.Z)(t);
  return n ? i : r
}