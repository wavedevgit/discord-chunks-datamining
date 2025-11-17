/** Chunk was on 80125 **/
/** chunk id: 238296, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => S,
  Y: () => x,
  default: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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

function x(e) {
  let {
    isOwnSettings: t,
    userId: n,
    channelId: l,
    guildId: o,
    context: c
  } = e, s = (0, O.Z)({
    userId: n,
    guildId: o,
    channelId: l,
    showGuildProfile: true,
    icon: (0, i.jsx)(r.tBG, {
      size: "sm"
    }),
    label: h.intl.string(h.t.iXAna6)
  }), d = (0, p.Z)(n, c, r.kBi), b = (0, Z.Z)(n), g = (0, v.Z)(n), j = (0, a.Z)(n), m = (0, u.Z)(n), y = (0, f.Z)();
  return [(0, i.jsxs)(r.kSQ, {
    children: [s, d]
  }), (0, i.jsxs)(r.kSQ, {
    children: [b, g, j, m, t && y]
  })]
}

function S(e, t, n) {
  let l = (0, d.B)({
      userId: e.id,
      channelId: t,
      guildId: n,
      minimal: true
    }),
    o = (0, b.Z)({
      id: e.id,
      label: h.intl.string(h.t["/AXYnE"])
    }),
    c = (0, m.Z)({
      user: e,
      guildId: n,
      channelId: t,
      location: "GuildVoiceUserContextMenu"
    }),
    s = (0, j.Z)({
      user: e,
      guildId: n,
      channelId: t,
      location: "GuildVoiceUserContextMenu"
    }),
    a = (0, i.jsxs)(r.kSQ, {
      children: [l, o]
    });
  return [(0, i.jsxs)(r.kSQ, {
    children: [c, s]
  }), a]
}
let E = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: t,
    channel: n,
    onSelect: o,
    onInteraction: c,
    context: s
  } = e, a = n.id, u = t.isNonUserBot(), d = t.id === g.default.getId(), f = x({
    isOwnSettings: d,
    userId: t.id,
    channelId: a,
    context: s
  }), j = S(t, a), m = (0, b.Z)({
    id: t.id,
    label: h.intl.string(h.t["/AXYnE"])
  });
  return (0, i.jsx)(r.v2r, {
    navId: "user-context",
    onClose: l.Zy,
    "aria-label": h.intl.string(h.t.liqwPJ),
    onSelect: o,
    onInteraction: c,
    variant: "fixed",
    children: !u && (0, i.jsxs)(i.Fragment, {
      children: [f, !d && (0, i.jsx)(r.kSQ, {
        children: (0, i.jsx)(r.sNh, {
          id: "more-options",
          label: h.intl.string(h.t.PdRCRg),
          children: j
        })
      }), d && (0, i.jsx)(r.kSQ, {
        children: m
      })]
    })
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.VOICE_USER])