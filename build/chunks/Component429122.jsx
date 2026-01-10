/** Chunk was on 81985 **/
/** chunk id: 429122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => C,
  dt: () => j,
  eo: () => x
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
let O = Chunk473749.memo(function(e) {
  let {
    guildChannels: t,
    guildChannelsVersion: n
  } = e, l = i.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
  return null == l ? null : (0, r.jsx)(m.Qo, {
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
  } = (0, g.ie)(n, a, t), d = c ? o ? 9 : b.QP : 0;
  if (!u || t === h.wZ) return d;
  let p = n.getNamedCategoryFromSection(t);
  return null == p ? d : (0, g.V5)({
    category: p,
    selectedChannelId: i,
    selectedVoiceChannelId: l,
    voiceStates: r
  }) ? (o ? "cozy" === s ? 42 : 34 : b.Vf) + d : d
}

function x(e, t, n) {
  if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
  let {
    hasDivider: r,
    canHaveVoiceSummary: i
  } = (0, g.ie)(t, n, e);
  return "section-footer-".concat(e).concat(r ? "-divider" : "").concat(i ? "-voice-summary" : "")
}
let C = Chunk473749.memo(function(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    guildChannelsVersion: l,
    voiceStates: m,
    guildId: b,
    selectedChannelId: j,
    selectedVoiceChannelId: x,
    optInEnabled: C
  } = e, {
    hasDivider: E,
    canHaveVoiceSummary: S
  } = i.useMemo(() => (0, g.ie)(n, C, t), [n, C, t, l]), _ = i.useMemo(() => t === h.wZ ? null : n.getCategoryFromSection(t), [n, t, l]), I = (0, d.DM)(b), {
    enableWaveformIcon: P
  } = (0, c.M)(b, "ChannelListSectionFooter"), Z = (0, o.Wu)([p.ZP], () => {
    if (null == _ || !_.isCollapsed || !S) return [];
    let e = _.getChannelRecords(),
      t = [];
    for (let n of e) {
      if (!n.isGuildVocal()) continue;
      let e = p.ZP.isChannelOrParentOptedIn(b, n.id);
      (!I || e) && t.push(n)
    }
    return t
  }, [_, S, b, I]), N = i.useMemo(() => (0, f.c4)({
    channels: Z,
    selectedChannelId: j,
    selectedVoiceChannelId: x,
    voiceStates: m
  }), [Z, j, x, m]);
  if (t === n.voiceChannelsSectionNumber) return (0, r.jsx)(O, {
    guildChannels: n,
    guildChannelsVersion: l
  });
  let T = E ? (0, r.jsx)("div", {
    className: v.sectionDivider
  }) : null;
  return S && 0 !== N.length ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: v.voiceUserSummary,
      children: (0, r.jsx)(s.ZP, {
        renderIcon: true,
        users: N,
        max: 8,
        showUserPopout: true,
        guildId: b,
        renderLeadingIcon: P ? e => (0, r.jsx)(u.Z, {
          color: "currentColor",
          className: a()(e, y.iconLive)
        }) : true
      })
    }), T]
  }) : T
})