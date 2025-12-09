/** Chunk was on 470 **/
/** chunk id: 215269, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk70877 = require("./70877.jsx"),
  Chunk572427 = require("./572427.jsx"),
  Chunk231259 = require("./231259.jsx"),
  Chunk159233 = require("./159233.jsx"),
  Chunk924952 = require("./924952.jsx"),
  Chunk99528 = require("./99528.jsx"),
  Chunk830394 = require("./830394.jsx"),
  Chunk473545 = require("./473545.jsx"),
  Chunk124422 = require("./124422.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function O(t) {
  let {
    guildEventId: e,
    recurrenceId: n,
    channel: O,
    guild: P,
    analyticsContext: Z,
    isRecurrenceItem: h = false,
    onSelect: j
  } = t, m = (0, b.Z)({
    guildEventId: e,
    recurrenceId: n,
    guild: P,
    channel: O
  }), N = (0, s.Z)({
    guildEventId: e,
    recurrenceId: n,
    guild: P,
    channel: O
  }), w = (0, d.Z)({
    guildEventId: e,
    guild: P,
    channel: O,
    recurrenceId: n,
    isRecurrenceItem: h
  }), _ = (0, g.Z)(e, P, O), D = (0, v.Z)(e, P, O), S = (0, a.Z)(e, P.id, n), x = (0, f.Z)(e), T = (0, u.Z)({
    id: e,
    label: y.intl.string(y.t.WZwPO4)
  }), I = (0, u.Z)({
    id: n,
    label: y.intl.string(y.t.NZRGQo)
  }), C = (0, c.Z)(e, P.id, O, n), G = (0, p.Z)({
    guildEventId: e,
    guildId: P.id,
    recurrenceId: n
  });
  return (0, l.jsx)(o.Z, {
    context: Z,
    object: E.qAy.CONTEXT_MENU,
    children: (0, l.jsxs)(r.v2r, {
      navId: "user-context",
      onClose: i.Zy,
      "aria-label": y.intl.string(y.t.liqwPJ),
      onSelect: j,
      children: [(0, l.jsxs)(r.kSQ, {
        children: [C, !h && D, w, !h && _, N, m, S, h && G]
      }), !h && (0, l.jsx)(r.kSQ, {
        children: x
      }), (0, l.jsxs)(r.kSQ, {
        children: [T, I]
      })]
    })
  })
}