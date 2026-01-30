/** Chunk was on 1113 **/
/** chunk id: 137089, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => j,
  fz: () => O,
  tt: () => _
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
  return null == i ? null : (0, r.jsx)(m.AV, {
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
    optInEnabled: s,
    visualRefreshEnabled: a,
    density: o
  } = e;
  if (t === n.voiceChannelsSectionNumber) return 44;
  let {
    hasDivider: c,
    canHaveVoiceSummary: u
  } = (0, f.B3)(n, s, t), d = c ? a ? 9 : 12 : 0;
  if (!u || t === g.PU) return d;
  let h = n.getNamedCategoryFromSection(t);
  return null == h ? d : (0, f.Bo)({
    category: h,
    selectedChannelId: l,
    selectedVoiceChannelId: i,
    voiceStates: r
  }) ? (a && "cozy" === o ? 42 : 34) + d : d
}

function _(e, t, n) {
  if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
  let {
    hasDivider: r,
    canHaveVoiceSummary: l
  } = (0, f.B3)(t, n, e);
  return "section-footer-".concat(e).concat(r ? "-divider" : "").concat(l ? "-voice-summary" : "")
}
let j = Chunk64700.memo(function(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    guildChannelsVersion: i,
    voiceStates: m,
    guildId: O,
    selectedChannelId: _,
    selectedVoiceChannelId: j,
    optInEnabled: x
  } = e, {
    hasDivider: v,
    canHaveVoiceSummary: E
  } = l.useMemo(() => (0, f.B3)(n, x, t), [n, x, t, i]), C = l.useMemo(() => t === g.PU ? null : n.getCategoryFromSection(t), [n, t, i]), S = (0, d.jN)(O), {
    enableWaveformIcon: I
  } = (0, c.b)(O, "ChannelListSectionFooter"), N = (0, a.yK)([h.Ay], () => {
    if (null == C || !C.isCollapsed || !E) return [];
    let e = C.getChannelRecords(),
      t = [];
    for (let n of e) {
      if (!n.isGuildVocal()) continue;
      let e = h.Ay.isChannelOrParentOptedIn(O, n.id);
      (!S || e) && t.push(n)
    }
    return t
  }, [C, E, O, S]), T = l.useMemo(() => (0, p.fK)({
    channels: N,
    selectedChannelId: _,
    selectedVoiceChannelId: j,
    voiceStates: m
  }), [N, _, j, m]);
  if (t === n.voiceChannelsSectionNumber) return (0, r.jsx)(y, {
    guildChannels: n,
    guildChannelsVersion: i
  });
  let P = v ? (0, r.jsx)("div", {
    className: A.ts
  }) : null;
  return E && 0 !== T.length ? (0, r.jsxs)(r.Fragment, {
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
          className: s()(e, b.Gj)
        }) : true
      })
    }), P]
  }) : P
})