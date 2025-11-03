/** Chunk was on 58227 **/
/** chunk id: 983135, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $K: () => T,
  IG: () => v,
  Nb: () => _,
  Ts: () => j,
  Wy: () => b,
  di: () => D
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk479531 = require("./479531.js"),
  Chunk983736 = require("./983736.js"),
  Chunk45966 = require("./45966.js"),
  Chunk819553 = require("./819553.js"),
  Chunk637853 = require("./637853.js"),
  Chunk17181 = require("./17181.js"),
  Chunk962086 = require("./962086.js"),
  Chunk225675 = require("./225675.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk823379 = require("./823379.js"),
  Chunk434404 = require("./434404.js"),
  Chunk889369 = require("./889369.js"),
  Chunk570961 = require("./570961.js"),
  Chunk84658 = require("./84658.js"),
  Chunk176505 = require("./176505.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx");

function T(e) {
  l.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_STEP",
    step: e
  })
}

function _(e) {
  null != e && l.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED",
    upsellType: e
  })
}
async function j(e, t) {
  let n = s.Z.getEnabled(e),
    a = Array.from(I.Z.editedDefaultChannelIds).filter(e => null != g.Z.getChannel(e)),
    [o, d] = (0, c.d9)(e, [...a]);
  if (n && t === S.Un.ONBOARDING_DEFAULT && (d.length < S.md || o.length < S.X)) return void r.Z.show({
    title: x.intl.string(x.t.iLdiqY),
    body: x.intl.string(x.t.JOT74c)
  });
  try {
    await (0, p.n_)(e, {
      mode: t
    })
  } catch (n) {
    var u;
    let {
      fieldName: e,
      error: t
    } = null != (u = new i.Z(n).getAnyErrorMessageAndField()) ? u : {};
    r.Z.show({
      title: x.intl.string(x.t.iLdiqY),
      body: [e, t].filter(f.lm).join(": ")
    })
  }
  l.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_SET_MODE",
    guildId: e,
    mode: t
  })
}

function v(e, t) {
  let n = O.xh.findIndex(e => e === t);
  false !== n && n !== O.xh.length - 1 && T(O.xh[n + 1])
}

function b(e, t) {
  let n = O.xh.findIndex(e => e === t);
  false !== n && 0 !== n && T(O.xh[n - 1])
}
async function D(e) {
  let t = h.Z.getGuild(e);
  null != t && (N.Z.close(), (0, u.iD)(t.id, {
    type: m.z.NEW_MEMBER,
    roles: {},
    optInChannels: new Set,
    optInEnabled: false,
    onboardingResponses: new Set,
    onboardingEnabled: true,
    memberOptions: {
      isPending: (0, a.Dc)(t),
      flags: 0
    }
  }), o.ZP.resetOnboardingStatus(t.id), (0, d.EI)(t.id), await (0, d.default)({
    guildId: t.id,
    isPreview: true,
    returnChannelId: E.oC.GUILD_HOME
  }))
}