/** Chunk was on 27434 **/
/** chunk id: 215269, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function E(t) {
  let {
    guildEventId: n,
    recurrenceId: e,
    channel: E,
    guild: O,
    analyticsContext: j,
    isRecurrenceItem: m = false,
    onSelect: _
  } = t, P = (0, b.Z)({
    guildEventId: n,
    recurrenceId: e,
    guild: O,
    channel: E
  }), Z = (0, s.Z)({
    guildEventId: n,
    recurrenceId: e,
    guild: O,
    channel: E
  }), T = (0, d.Z)({
    guildEventId: n,
    guild: O,
    channel: E,
    recurrenceId: e,
    isRecurrenceItem: m
  }), w = (0, g.Z)(n, O, E), S = (0, v.Z)(n, O, E), N = (0, u.Z)(n, O.id, e), x = (0, f.Z)(n), D = (0, a.Z)({
    id: n,
    label: y.intl.string(y.t.WZwPOz)
  }), A = (0, a.Z)({
    id: e,
    label: y.intl.string(y.t.NZRGQk)
  }), I = (0, c.Z)(n, O.id, E, e), C = (0, p.Z)({
    guildEventId: n,
    guildId: O.id,
    recurrenceId: e
  });
  return (0, l.jsx)(o.Z, {
    context: j,
    object: h.qAy.CONTEXT_MENU,
    children: (0, l.jsxs)(i.v2r, {
      navId: "user-context",
      onClose: r.Zy,
      "aria-label": y.intl.string(y.t.liqwPD),
      onSelect: _,
      children: [(0, l.jsxs)(i.kSQ, {
        children: [I, !m && S, T, !m && w, Z, P, N, m && C]
      }), !m && (0, l.jsx)(i.kSQ, {
        children: x
      }), (0, l.jsxs)(i.kSQ, {
        children: [D, A]
      })]
    })
  })
}