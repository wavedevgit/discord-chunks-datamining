/** Chunk was on 7556 **/
/** chunk id: 357823, original params: i,e,n (module,exports,require) **/
require.d(exports, {
  default: () => x
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
let x = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(i) {
  let {
    user: e,
    channel: n,
    guildId: d,
    onSelect: s,
    onInteraction: a,
    context: v
  } = i, x = n.id, C = e.isNonUserBot(), k = e.id === g.default.getId(), p = (0, c.Z)(e), b = (0, Z.Z)(e, d, x), j = (0, h.Y)({
    isOwnSettings: k,
    userId: e.id,
    channelId: x,
    guildId: d,
    context: v
  }), [E, S] = (0, h.E)(e, x, d), I = (0, f.Z)(e, d, x), P = (0, u.Z)({
    id: e.id,
    label: _.intl.string(_.t["/AXYnJ"])
  }), N = (0, o.Z)(e.id, n);
  return (0, t.jsx)(l.v2r, {
    navId: "user-context",
    onClose: r.Zy,
    "aria-label": _.intl.string(_.t.liqwPD),
    onSelect: s,
    onInteraction: a,
    variant: "fixed",
    children: !C && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsxs)(l.kSQ, {
        children: [p, b]
      }), N, j, !k && (0, t.jsx)(l.kSQ, {
        children: (0, t.jsxs)(l.sNh, {
          id: "more-options",
          label: _.intl.string(_.t.PdRCRk),
          children: [E, (0, t.jsx)(l.kSQ, {
            children: I
          }), S]
        })
      }), k && (0, t.jsx)(l.kSQ, {
        children: P
      })]
    })
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.VOICE_USER])