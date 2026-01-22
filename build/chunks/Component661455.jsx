/** Chunk was on 43076 **/
/** chunk id: 661455, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => D,
  default: () => E,
  n: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk847767 = require("./847767.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk734337 = require("./734337.jsx"),
  Chunk855187 = require("./855187.jsx"),
  Chunk479335 = require("./479335.jsx"),
  Chunk470743 = require("./470743.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk239211 = require("./239211.jsx"),
  Chunk399476 = require("./399476.jsx"),
  Chunk301541 = require("./301541.jsx"),
  Chunk198229 = require("./198229.jsx"),
  Chunk243949 = require("./243949.jsx"),
  Chunk972432 = require("./972432.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function x(e) {
  let {
    isOwnSettings: t,
    userId: n,
    channelId: l,
    guildId: o,
    context: s
  } = e, a = (0, m.A)({
    userId: n,
    guildId: o,
    channelId: l,
    showGuildProfile: true,
    icon: (0, r.jsx)(i.nys, {
      size: "sm"
    }),
    label: y.intl.string(y.t.iXAna6)
  }), d = (0, p.A)(n, s, i.oyn), f = (0, v.A)(n), g = (0, O.A)(n), A = (0, c.A)(n), j = (0, u.A)(n), h = (0, b.A)();
  return [(0, r.jsxs)(i.rXV, {
    children: [a, d]
  }), (0, r.jsxs)(i.rXV, {
    children: [f, g, A, j, t && h]
  })]
}

function D(e, t, n) {
  let l = (0, d.u)({
      userId: e.id,
      channelId: t,
      guildId: n,
      minimal: true
    }),
    o = (0, f.A)({
      id: e.id,
      label: y.intl.string(y.t["/AXYnE"])
    }),
    s = (0, j.A)({
      user: e,
      guildId: n,
      channelId: t,
      location: "GuildVoiceUserContextMenu"
    }),
    a = (0, A.A)({
      user: e,
      guildId: n,
      channelId: t,
      location: "GuildVoiceUserContextMenu"
    }),
    c = (0, r.jsxs)(i.rXV, {
      children: [l, o]
    });
  return [(0, r.jsxs)(i.rXV, {
    children: [s, a]
  }), c]
}
let E = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    user: t,
    channel: n,
    onSelect: o,
    onInteraction: s,
    context: a
  } = e, c = n.id, u = t.isNonUserBot(), d = t.id === g.default.getId(), b = x({
    isOwnSettings: d,
    userId: t.id,
    channelId: c,
    context: a
  }), A = D(t, c), j = (0, f.A)({
    id: t.id,
    label: y.intl.string(y.t["/AXYnE"])
  });
  return (0, r.jsx)(i.W1t, {
    navId: "user-context",
    onClose: l.Z_,
    "aria-label": y.intl.string(y.t.liqwPJ),
    onSelect: o,
    onInteraction: s,
    variant: "fixed",
    children: !u && (0, r.jsxs)(r.Fragment, {
      children: [b, !d && (0, r.jsx)(i.rXV, {
        children: (0, r.jsx)(i.Drp, {
          id: "more-options",
          label: y.intl.string(y.t.PdRCRg),
          children: A
        })
      }), d && (0, r.jsx)(i.rXV, {
        children: j
      })]
    })
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.VOICE_USER])