/** Chunk was on 67000 **/
/** chunk id: 429122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => x,
  dt: () => j,
  eo: () => C
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk526139 = require("./526139.js"),
  Chunk851910 = require("./851910.jsx"),
  Chunk398758 = require("./398758.js"),
  Chunk9156 = require("./9156.js"),
  Chunk934415 = require("./934415.js"),
  Chunk540126 = require("./540126.js"),
  Chunk700026 = require("./700026.js"),
  Chunk301342 = require("./301342.jsx"),
  Chunk327530 = require("./327530.js"),
  Chunk642915 = require("./642915.js"),
  Chunk135445 = require("./135445.js");
let v = Chunk473749.memo(function(e) {
  let {
    guildChannels: t,
    guildChannelsVersion: n
  } = e, l = i.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
  return null == l ? null : (0, r.jsx)(b.Qo, {
    category: l
  })
});

function j(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    voiceStates: r,
    selectedChannelId: i,
    selectedVoiceChannelId: l,
    optInEnabled: a,
    visualRefreshEnabled: o,
    density: s
  } = e;
  if (t === n.voiceChannelsSectionNumber) return 44;
  let {
    hasDivider: c,
    canHaveVoiceSummary: u
  } = (0, g.ie)(n, a, t), d = c ? o ? 9 : m.QP : 0;
  if (!u || t === p.wZ) return d;
  let f = n.getNamedCategoryFromSection(t);
  return null == f ? d : (0, g.V5)({
    category: f,
    selectedChannelId: i,
    selectedVoiceChannelId: l,
    voiceStates: r
  }) ? (o ? "cozy" === s ? 42 : 34 : m.Vf) + d : d
}

function C(e, t, n) {
  if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
  let {
    hasDivider: r,
    canHaveVoiceSummary: i
  } = (0, g.ie)(t, n, e);
  return "section-footer-".concat(e).concat(r ? "-divider" : "").concat(i ? "-voice-summary" : "")
}
let x = Chunk473749.memo(function(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    guildChannelsVersion: l,
    voiceStates: b,
    guildId: m,
    selectedChannelId: j,
    selectedVoiceChannelId: C,
    optInEnabled: x
  } = e, {
    hasDivider: E,
    canHaveVoiceSummary: S
  } = i.useMemo(() => (0, g.ie)(n, x, t), [n, x, t, l]), I = i.useMemo(() => t === p.wZ ? null : n.getCategoryFromSection(t), [n, t, l]), _ = (0, d.DM)(m), {
    enableWaveformIcon: P
  } = (0, c.M)(m, "ChannelListSectionFooter"), N = (0, o.Wu)([f.ZP], () => {
    if (null == I || !I.isCollapsed || !S) return [];
    let e = I.getChannelRecords(),
      t = [];
    for (let n of e) {
      if (!n.isGuildVocal()) continue;
      let e = f.ZP.isChannelOrParentOptedIn(m, n.id);
      (!_ || e) && t.push(n)
    }
    return t
  }, [I, S, m, _]), Z = i.useMemo(() => (0, h.c4)({
    channels: N,
    selectedChannelId: j,
    selectedVoiceChannelId: C,
    voiceStates: b
  }), [N, j, C, b]);
  if (t === n.voiceChannelsSectionNumber) return (0, r.jsx)(v, {
    guildChannels: n,
    guildChannelsVersion: l
  });
  let w = E ? (0, r.jsx)("div", {
    className: O.sectionDivider
  }) : null;
  return S && 0 !== Z.length ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: O.voiceUserSummary,
      children: (0, r.jsx)(s.ZP, {
        renderIcon: true,
        users: Z,
        max: 8,
        showUserPopout: true,
        guildId: m,
        renderLeadingIcon: P ? e => (0, r.jsx)(u.Z, {
          color: "currentColor",
          className: a()(e, y.iconLive)
        }) : true
      })
    }), w]
  }) : w
})