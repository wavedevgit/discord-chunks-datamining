/** Chunk was on 80125 **/
/** chunk id: 238296, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => E,
  Y: () => S,
  default: () => P
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk167675 = require("./167675.jsx"),
  Chunk737013 = require("./737013.jsx"),
  Chunk607783 = require("./607783.jsx"),
  Chunk589049 = require("./589049.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk389052 = require("./389052.jsx"),
  Chunk158508 = require("./158508.jsx"),
  Chunk88966 = require("./88966.jsx"),
  Chunk991307 = require("./991307.jsx"),
  Chunk37258 = require("./37258.jsx"),
  Chunk700994 = require("./700994.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function S(e) {
  let {
    isOwnSettings: t,
    userId: n,
    channelId: o,
    guildId: l,
    context: c
  } = e, a = (0, v.Z)({
    userId: n,
    guildId: l,
    channelId: o,
    showGuildProfile: true,
    icon: (0, r.jsx)(i.tBG, {
      size: "sm"
    }),
    label: h.intl.string(h.t.iXAna2)
  }), d = (0, j.Z)(n, c, i.kBi), b = (0, m.Z)(n), g = (0, y.Z)(n), O = (0, u.Z)(n), p = (0, s.Z)(n), Z = (0, f.Z)();
  return [(0, r.jsxs)(i.kSQ, {
    children: [a, d]
  }), (0, r.jsxs)(i.kSQ, {
    children: [b, g, O, p, t && Z]
  })]
}

function E(e, t, n) {
  let o = (0, d.B)({
      userId: e.id,
      channelId: t,
      guildId: n,
      minimal: true
    }),
    l = (0, b.Z)({
      id: e.id,
      label: h.intl.string(h.t["/AXYnJ"])
    }),
    c = (0, p.Z)({
      user: e,
      guildId: n,
      channelId: t,
      location: "GuildVoiceUserContextMenu"
    }),
    a = (0, O.Z)({
      user: e,
      guildId: n,
      channelId: t,
      location: "GuildVoiceUserContextMenu"
    }),
    u = (0, r.jsxs)(i.kSQ, {
      children: [o, l]
    });
  return [(0, r.jsxs)(i.kSQ, {
    children: [c, a]
  }), u]
}
let P = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: t,
    channel: n,
    onSelect: l,
    onInteraction: c,
    context: a
  } = e, u = n.id, s = t.isNonUserBot(), d = t.id === g.default.getId(), f = S({
    isOwnSettings: d,
    userId: t.id,
    channelId: u,
    context: a
  }), O = E(t, u), p = (0, b.Z)({
    id: t.id,
    label: h.intl.string(h.t["/AXYnJ"])
  });
  return (0, r.jsx)(i.v2r, {
    navId: "user-context",
    onClose: o.Zy,
    "aria-label": h.intl.string(h.t.liqwPD),
    onSelect: l,
    onInteraction: c,
    variant: "fixed",
    children: !s && (0, r.jsxs)(r.Fragment, {
      children: [f, !d && (0, r.jsx)(i.kSQ, {
        children: (0, r.jsx)(i.sNh, {
          id: "more-options",
          label: h.intl.string(h.t.PdRCRk),
          children: O
        })
      }), d && (0, r.jsx)(i.kSQ, {
        children: p
      })]
    })
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.VOICE_USER])