/** Chunk was on 7869 **/
/** chunk id: 406406, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk247191 = require("./247191.jsx"),
  Chunk971961 = require("./971961.jsx"),
  Chunk753333 = require("./753333.jsx"),
  Chunk544255 = require("./544255.jsx"),
  Chunk28314 = require("./28314.jsx"),
  Chunk24661 = require("./24661.jsx"),
  Chunk288357 = require("./288357.jsx"),
  Chunk587018 = require("./587018.jsx"),
  Chunk675623 = require("./675623.jsx"),
  Chunk174966 = require("./174966.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function O(t) {
  let {
    guildEventId: e,
    recurrenceId: n,
    channel: O,
    guild: h,
    analyticsContext: _,
    isRecurrenceItem: m = false,
    onSelect: T,
    target: j
  } = t, S = (0, A.A)({
    guildEventId: e,
    recurrenceId: n,
    guild: h,
    channel: O
  }), w = (0, d.A)({
    guildEventId: e,
    recurrenceId: n,
    guild: h,
    channel: O
  }), D = (0, g.A)({
    guildEventId: e,
    guild: h,
    channel: O,
    recurrenceId: n,
    isRecurrenceItem: m
  }), N = (0, E.A)(e, h, O), P = (0, p.A)(e, h, O), G = (0, s.A)(e, h.id, n), I = (0, c.A)(e, j), C = (0, f.A)(e), x = (0, o.A)({
    id: e,
    label: v.intl.string(v.t.WZwPO4)
  }), R = (0, o.A)({
    id: n,
    label: v.intl.string(v.t.NZRGQo)
  }), L = (0, a.A)(e, h.id, O, n), U = (0, y.A)({
    guildEventId: e,
    guildId: h.id,
    recurrenceId: n
  });
  return (0, l.jsx)(u.A, {
    context: _,
    object: b.ZSU.CONTEXT_MENU,
    children: (0, l.jsxs)(r.W1t, {
      "data-menu-migrated-auto": true,
      navId: "user-context",
      onClose: i.Z_,
      "aria-label": v.intl.string(v.t.liqwPJ),
      onSelect: T,
      children: [(0, l.jsxs)(r.rXV, {
        children: [L, !m && P, D, !m && N, w, S, G, m && U]
      }), !m && (0, l.jsx)(r.rXV, {
        children: C
      }), null != I && (0, l.jsx)(r.rXV, {
        children: I
      }), (0, l.jsxs)(r.rXV, {
        children: [x, R]
      })]
    })
  })
}