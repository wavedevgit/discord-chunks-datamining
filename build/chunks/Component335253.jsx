/** Chunk was on 14075 **/
/** chunk id: 335253, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk847767 = require("./847767.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk235052 = require("./235052.jsx"),
  Chunk222311 = require("./222311.jsx"),
  Chunk237749 = require("./237749.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk661455 = require("./661455.jsx"),
  Chunk291247 = require("./291247.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let O = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    user: t,
    channel: n,
    guildId: o,
    onSelect: a,
    onInteraction: u,
    context: E
  } = e, O = n.id, j = t.isNonUserBot(), p = t.id === _.default.getId(), v = (0, s.A)(t), y = (0, A.A)(t, o, O), S = (0, f.n)({
    isOwnSettings: p,
    userId: t.id,
    channelId: O,
    guildId: o,
    context: E
  }), [h, C] = (0, f.O)(t, O, o), I = (0, b.A)(t, o, O), x = (0, c.A)({
    id: t.id,
    label: g.intl.string(g.t["/AXYnE"])
  }), T = (0, d.A)(t.id, n);
  return (0, r.jsx)(i.W1t, {
    navId: "user-context",
    onClose: l.Z_,
    "aria-label": g.intl.string(g.t.liqwPJ),
    onSelect: a,
    onInteraction: u,
    variant: "fixed",
    children: !j && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(i.rXV, {
        children: [v, y]
      }), T, S, !p && (0, r.jsx)(i.rXV, {
        children: (0, r.jsxs)(i.Drp, {
          id: "more-options",
          label: g.intl.string(g.t.PdRCRg),
          children: [h, (0, r.jsx)(i.rXV, {
            children: I
          }), C]
        })
      }), p && (0, r.jsx)(i.rXV, {
        children: x
      })]
    })
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.VOICE_USER])