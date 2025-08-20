/** Chunk was on 27434 **/
/** chunk id: 215269, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function y(t) {
  let {
    guildEventId: n,
    recurrenceId: e,
    channel: y,
    guild: Z,
    analyticsContext: m,
    isRecurrenceItem: O = false,
    onSelect: P
  } = t, w = (0, b.Z)({
    guildEventId: n,
    recurrenceId: e,
    guild: Z,
    channel: y
  }), x = (0, u.Z)({
    guildEventId: n,
    recurrenceId: e,
    guild: Z,
    channel: y
  }), E = (0, d.Z)({
    guildEventId: n,
    guild: Z,
    channel: y,
    recurrenceId: e,
    isRecurrenceItem: O
  }), S = (0, g.Z)(n, Z, y), D = (0, p.Z)(n, Z, y), N = (0, s.Z)(n, Z.id, e), T = (0, v.Z)(n), _ = (0, a.Z)({
    id: n,
    label: h.intl.string(h.t.WZwPOz)
  }), R = (0, a.Z)({
    id: e,
    label: h.intl.string(h.t.NZRGQk)
  }), k = (0, c.Z)(n, Z.id, y, e), C = (0, f.Z)({
    guildEventId: n,
    guildId: Z.id,
    recurrenceId: e
  });
  return (0, l.jsx)(o.Z, {
    context: m,
    object: j.qAy.CONTEXT_MENU,
    children: (0, l.jsxs)(i.v2r, {
      navId: "user-context",
      onClose: r.Zy,
      "aria-label": h.intl.string(h.t.liqwPD),
      onSelect: P,
      children: [(0, l.jsxs)(i.kSQ, {
        children: [k, !O && D, E, !O && S, x, w, N, O && C]
      }), !O && (0, l.jsx)(i.kSQ, {
        children: T
      }), (0, l.jsxs)(i.kSQ, {
        children: [_, R]
      })]
    })
  })
}