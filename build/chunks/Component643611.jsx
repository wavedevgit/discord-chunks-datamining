/** Chunk was on 74543 **/
/** chunk id: 643611, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk556012 = require("./556012.js"),
  Chunk388032 = require("./388032.jsx");
let N = t => {
  let {
    guildId: n,
    channel: e,
    onSelectChannel: r
  } = t, i = (0, a.Wu)([d.ZP], () => d.ZP.getChannels(n)[d.sH].filter(t => {
    let {
      channel: n
    } = t;
    return !n.isGuildVocal() && !n.isThread() && !n.isForumLikeChannel()
  }).map(t => {
    let {
      channel: n
    } = t;
    return n
  }), [n]);
  return (0, l.jsx)(u.VcW, {
    required: true,
    value: null == e ? true : e.id,
    options: i.map(t => ({
      value: t.id,
      label: (0, s.F6)(t, o.default, j.Z, true)
    })),
    onChange: t => {
      let n = i.find(n => n.id === t);
      r(null != n ? n : true)
    },
    placeholder: E.intl.string(E.t["N+T69/"])
  })
};

function _(t) {
  let {
    action: n,
    triggerType: e,
    guildId: s,
    isEdit: d,
    onEditChannel: j,
    onClose: o,
    transitionState: _
  } = t, [S, C] = r.useState(n.metadata.channelId), [h, I] = r.useState(null), L = (0, a.e7)([c.Z], () => c.Z.getChannel(S), [S]), g = (0, A.c)(n.type, n, e);
  if (null == g) return null;
  let {
    headerText: T
  } = g;
  return (0, l.jsx)(i.Modal, {
    onClose: o,
    transitionState: _,
    title: T,
    subtitle: E.intl.string(E.t["z/ZF2t"]),
    actions: [{
      text: E.intl.string(E.t["ETE/oK"]),
      onClick: () => {
        o()
      },
      variant: "secondary"
    }, {
      text: d ? E.intl.string(E.t.bt75u7) : E.intl.string(E.t.R3BPHx),
      onClick: () => {
        if (null == S) return void I(E.intl.string(E.t.lM1NLi));
        j(S)
      }
    }],
    children: (0, l.jsxs)(u.Kqy, {
      gap: 8,
      direction: "vertical",
      children: [(0, l.jsx)(N, {
        guildId: s,
        channel: L,
        onSelectChannel: t => {
          null != t && C(t.id)
        }
      }), null != h ? (0, l.jsx)(u.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        children: h
      }) : (0, l.jsx)(u.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: E.intl.string(E.t["ric+5u"])
      })]
    })
  })
}