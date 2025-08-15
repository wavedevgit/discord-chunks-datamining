/** Chunk was on 47817 **/
/** chunk id: 357823, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk882188 = require("./882188.jsx"),
  Chunk819403 = require("./819403.jsx"),
  Chunk286694 = require("./286694.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk238296 = require("./238296.jsx"),
  Chunk933409 = require("./933409.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let h = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: t,
    channel: n,
    guildId: u,
    onSelect: o,
    onInteraction: a,
    context: b
  } = e, h = n.id, p = t.isNonUserBot(), v = t.id === f.default.getId(), A = (0, s.Z)(t), y = (0, _.Z)(t, u, h), S = (0, E.Y)({
    isOwnSettings: v,
    userId: t.id,
    channelId: h,
    guildId: u,
    context: b
  }), [T, m] = (0, E.E)(t, h, u), I = (0, g.Z)(t, u, h), P = (0, c.Z)({
    id: t.id,
    label: O.intl.string(O.t["/AXYnJ"])
  }), M = (0, d.Z)(t.id, n);
  return (0, r.jsx)(l.v2r, {
    navId: "user-context",
    onClose: i.Zy,
    "aria-label": O.intl.string(O.t.liqwPD),
    onSelect: o,
    onInteraction: a,
    variant: "fixed",
    children: !p && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(l.kSQ, {
        children: [A, y]
      }), M, S, !v && (0, r.jsx)(l.kSQ, {
        children: (0, r.jsxs)(l.sNh, {
          id: "more-options",
          label: O.intl.string(O.t.PdRCRk),
          children: [T, (0, r.jsx)(l.kSQ, {
            children: I
          }), m]
        })
      }), v && (0, r.jsx)(l.kSQ, {
        children: P
      })]
    })
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.VOICE_USER])