/** Chunk was on 87997 **/
/** chunk id: 222311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  var t;
  let n = (0, g.A)(),
    p = null == n ? true : n.id,
    _ = null == n ? true : n.guild_id,
    y = (0, l.bG)([u.A], () => u.A.getGuild(_), [_]),
    h = (0, l.bG)([s.A], () => null != p ? s.A.getVoiceStateForChannel(p, e.id) : null, [p, e.id]),
    m = (null == (t = c.default.getCurrentUser()) ? true : t.id) === e.id,
    j = (0, f.A)(),
    v = (0, l.bG)([b.Ay], () => b.Ay.getPermissionsForUser(e.id, p), [p, e.id]),
    S = (0, A.Ni)(p),
    T = (0, O.zU)();
  if (null == n || null == y || null == h || v.speaker) return null;
  let I = () => {
    if (m) {
      if ((0, O.Cf)(n.id)) return void a.A.showAgeVerificationGetStartedModal({
        entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND
      });
      (0, d.e7)(n, false)
    } else(0, d.SA)(n, e.id)
  };
  return m && T ? null : S ? (0, r.jsx)(i.Drp, {
    id: "invite-speaker",
    label: m ? E.intl.string(E.t["W6c/Vf"]) : E.intl.string(E.t.VUCWcO),
    action: I
  }) : j && m ? (0, r.jsx)(i.Drp, {
    id: "invite-speaker",
    label: E.intl.string(E.t["W6c/Vf"]),
    action: I
  }) : null
}