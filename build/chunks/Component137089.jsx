/** Chunk was on 97492 **/
/** chunk id: 137089, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => v,
  fz: () => O,
  tt: () => j
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk104171 = require("./104171.jsx"),
  Chunk186369 = require("./186369.js"),
  Chunk970812 = require("./970812.jsx"),
  Chunk395504 = require("./395504.js"),
  Chunk543465 = require("./543465.js"),
  Chunk147036 = require("./147036.js"),
  Chunk32603 = require("./32603.js"),
  Chunk85808 = require("./85808.js"),
  Chunk823142 = require("./823142.jsx");
require("./83766.js");
var Chunk728444 = require("./728444.js"),
  Chunk495401 = require("./495401.js");
let y = Chunk64700.memo(function(e) {
  let {
    guildChannels: t,
    guildChannelsVersion: n
  } = e, i = l.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
  return null == i ? null : (0, r.jsx)(g.AV, {
    category: i
  })
});

function O(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    voiceStates: r,
    selectedChannelId: l,
    selectedVoiceChannelId: i,
    optInEnabled: a,
    visualRefreshEnabled: s,
    density: o
  } = e;
  if (t === n.voiceChannelsSectionNumber) return 44;
  let {
    hasDivider: c,
    canHaveVoiceSummary: u
  } = (0, b.B3)(n, a, t), d = c ? s ? 9 : 12 : 0;
  if (!u || t === h.PU) return d;
  let f = n.getNamedCategoryFromSection(t);
  return null == f ? d : (0, b.Bo)({
    category: f,
    selectedChannelId: l,
    selectedVoiceChannelId: i,
    voiceStates: r
  }) ? (s && "cozy" === o ? 42 : 34) + d : d
}

function j(e, t, n) {
  if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
  let {
    hasDivider: r,
    canHaveVoiceSummary: l
  } = (0, b.B3)(t, n, e);
  return "section-footer-".concat(e).concat(r ? "-divider" : "").concat(l ? "-voice-summary" : "")
}
let v = Chunk64700.memo(function(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    guildChannelsVersion: i,
    voiceStates: g,
    guildId: O,
    selectedChannelId: j,
    selectedVoiceChannelId: v,
    optInEnabled: x
  } = e, {
    hasDivider: E,
    canHaveVoiceSummary: _
  } = l.useMemo(() => (0, b.B3)(n, x, t), [n, x, t, i]), C = l.useMemo(() => t === h.PU ? null : n.getCategoryFromSection(t), [n, t, i]), S = (0, d.jN)(O), {
    enableWaveformIcon: I
  } = (0, c.b)(O, "ChannelListSectionFooter"), N = (0, s.yK)([f.Ay], () => {
    if (null == C || !C.isCollapsed || !_) return [];
    let e = C.getChannelRecords(),
      t = [];
    for (let n of e) {
      if (!n.isGuildVocal()) continue;
      let e = f.Ay.isChannelOrParentOptedIn(O, n.id);
      (!S || e) && t.push(n)
    }
    return t
  }, [C, _, O, S]), T = l.useMemo(() => (0, p.fK)({
    channels: N,
    selectedChannelId: j,
    selectedVoiceChannelId: v,
    voiceStates: g
  }), [N, j, v, g]);
  if (t === n.voiceChannelsSectionNumber) return (0, r.jsx)(y, {
    guildChannels: n,
    guildChannelsVersion: i
  });
  let P = E ? (0, r.jsx)("div", {
    className: A.ts
  }) : null;
  return _ && 0 !== T.length ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: A.qz,
      children: (0, r.jsx)(o.Ay, {
        renderIcon: true,
        users: T,
        max: 8,
        showUserPopout: true,
        guildId: O,
        renderLeadingIcon: I ? e => (0, r.jsx)(u.A, {
          color: "currentColor",
          className: a()(e, m.Gj)
        }) : true
      })
    }), P]
  }) : P
})