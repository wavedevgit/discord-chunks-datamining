/** Chunk was on 74543 **/
/** chunk id: 643611, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk556012 = require("./556012.js"),
  Chunk388032 = require("./388032.jsx");
let p = t => {
  let {
    guildId: n,
    channel: e,
    onSelectChannel: i
  } = t, a = (0, r.Wu)([o.ZP], () => o.ZP.getChannels(n)[o.sH].filter(t => {
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
  return (0, l.jsx)(s.xJW, {
    required: true,
    children: (0, l.jsx)(s.VcW, {
      value: null == e ? true : e.id,
      options: a.map(t => ({
        value: t.id,
        label: (0, u.F6)(t, h.default, c.Z, true)
      })),
      onChange: t => {
        let n = a.find(n => n.id === t);
        i(null != n ? n : true)
      },
      placeholder: g.intl.string(g.t["N+T69/"])
    })
  })
};

function v(t) {
  let {
    action: n,
    triggerType: e,
    guildId: u,
    isEdit: o,
    onEditChannel: c,
    onClose: h,
    transitionState: v
  } = t, [C, m] = i.useState(n.metadata.channelId), [f, j] = i.useState(null), k = (0, r.e7)([d.Z], () => d.Z.getChannel(C), [C]), Z = (0, x.c)(n.type, n, e);
  if (null == Z) return null;
  let {
    headerText: b
  } = Z;
  return (0, l.jsx)(a.Modal, {
    onClose: h,
    transitionState: v,
    title: b,
    subtitle: g.intl.string(g.t["z/ZF2t"]),
    actions: [{
      text: g.intl.string(g.t["ETE/oK"]),
      onClick: () => {
        h()
      },
      variant: "secondary"
    }, {
      text: o ? g.intl.string(g.t.bt75u7) : g.intl.string(g.t.R3BPHx),
      onClick: () => {
        if (null == C) return void j(g.intl.string(g.t.lM1NLi));
        c(C)
      }
    }],
    children: (0, l.jsxs)(s.Kqy, {
      gap: 8,
      direction: "vertical",
      children: [(0, l.jsx)(p, {
        guildId: u,
        channel: k,
        onSelectChannel: t => {
          null != t && m(t.id)
        }
      }), null != f ? (0, l.jsx)(s.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        children: f
      }) : (0, l.jsx)(s.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: g.intl.string(g.t["ric+5u"])
      })]
    })
  })
}