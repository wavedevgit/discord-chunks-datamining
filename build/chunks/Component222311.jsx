/** Chunk was on 87997 **/
/** chunk id: 222311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk849736 = require("./849736.js"),
  Chunk776781 = require("./776781.js"),
  Chunk312006 = require("./312006.js"),
  Chunk150401 = require("./150401.js"),
  Chunk354583 = require("./354583.js"),
  Chunk418208 = require("./418208.js"),
  Chunk985018 = require("./985018.jsx");

function y(e) {
  var t;
  let n = (0, g.A)(),
    y = null == n ? true : n.id,
    m = null == n ? true : n.guild_id,
    E = (0, l.bG)([u.A], () => u.A.getGuild(m), [m]),
    j = (0, l.bG)([s.A], () => null != y ? s.A.getVoiceStateForChannel(y, e.id) : null, [y, e.id]),
    v = (null == (t = c.default.getCurrentUser()) ? true : t.id) === e.id,
    _ = (0, f.A)(),
    h = (0, l.bG)([b.Ay], () => b.Ay.getPermissionsForUser(e.id, y), [y, e.id]),
    S = (0, A.Ni)(y),
    D = (0, O.zU)();
  if (null == n || null == E || null == j || h.speaker) return null;
  let I = () => {
    if (v) {
      if ((0, O.Cf)(n.id)) return void a.A.showAgeVerificationGetStartedModal({
        entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND
      });
      (0, d.e7)(n, false)
    } else(0, d.SA)(n, e.id)
  };
  return v && D ? null : S ? (0, r.jsx)(i.Drp, {
    id: "invite-speaker",
    label: v ? p.intl.string(p.t["W6c/Vf"]) : p.intl.string(p.t.VUCWcO),
    action: I
  }) : _ && v ? (0, r.jsx)(i.Drp, {
    id: "invite-speaker",
    label: p.intl.string(p.t["W6c/Vf"]),
    action: I
  }) : null
}