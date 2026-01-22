/** Chunk was on 50796 **/
/** chunk id: 527678, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => _,
  CP: () => j,
  X$: () => v,
  _k: () => T,
  e_: () => x,
  kP: () => b
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk181658 = require("./181658.js"),
  Chunk709977 = require("./709977.js"),
  Chunk591552 = require("./591552.js"),
  Chunk713125 = require("./713125.js"),
  Chunk961973 = require("./961973.js"),
  Chunk967305 = require("./967305.js"),
  Chunk529942 = require("./529942.js"),
  Chunk209700 = require("./209700.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk403362 = require("./403362.js"),
  Chunk997509 = require("./997509.js"),
  Chunk863694 = require("./863694.js"),
  Chunk107795 = require("./107795.js"),
  Chunk400812 = require("./400812.js"),
  Chunk746080 = require("./746080.js"),
  Chunk539916 = require("./539916.js"),
  Chunk985018 = require("./985018.jsx");

function x(e) {
  l.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_STEP",
    step: e
  })
}

function _(e) {
  null != e && l.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED",
    upsellType: e
  })
}
async function j(e, t) {
  let n = a.A.getEnabled(e),
    s = Array.from(I.A.editedDefaultChannelIds).filter(e => null != g.A.getChannel(e)),
    [o] = (0, c.ui)(e, [...s]);
  if (n && t === E.SD.ONBOARDING_DEFAULT && o.length < E.Kd) return void r.A.show({
    title: A.intl.string(A.t.iLdiqY),
    body: A.intl.string(A.t.JOT74c)
  });
  try {
    await (0, p.YN)(e, {
      mode: t
    })
  } catch (n) {
    var d;
    let {
      fieldName: e,
      error: t
    } = null != (d = new i.A(n).getAnyErrorMessageAndField()) ? d : {};
    r.A.show({
      title: A.intl.string(A.t.iLdiqY),
      body: [e, t].filter(h.Vq).join(": ")
    })
  }
  l.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_SET_MODE",
    guildId: e,
    mode: t
  })
}

function T(e, t) {
  let n = O.kd.findIndex(e => e === t);
  false !== n && n !== O.kd.length - 1 && x(O.kd[n + 1])
}

function b(e, t) {
  let n = O.kd.findIndex(e => e === t);
  false !== n && 0 !== n && x(O.kd[n - 1])
}
async function v(e) {
  let t = f.A.getGuild(e);
  null != t && (N.A.close(), (0, u.Tk)(t.id, {
    type: m._.NEW_MEMBER,
    roles: {},
    optInChannels: new Set,
    optInEnabled: false,
    onboardingResponses: new Set,
    onboardingEnabled: true,
    memberOptions: {
      isPending: (0, s.Qd)(t),
      flags: 0
    }
  }), o.Ay.resetOnboardingStatus(t.id), (0, d.Jg)(t.id), await (0, d.default)({
    guildId: t.id,
    isPreview: true,
    returnChannelId: S.VV.GUILD_HOME
  }))
}