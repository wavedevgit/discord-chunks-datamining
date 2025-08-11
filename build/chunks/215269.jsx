/** Chunk was on 27434 **/
/** chunk id: 215269, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => y
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk410575 = require("./410575.js"),
  Chunk299206 = require("./299206.js"),
  Chunk70877 = require("./70877.jsx"),
  Chunk572427 = require("./572427.js"),
  Chunk231259 = require("./231259.js"),
  Chunk159233 = require("./159233.jsx"),
  Chunk924952 = require("./924952.js"),
  Chunk99528 = require("./99528.jsx"),
  Chunk830394 = require("./830394.js"),
  Chunk473545 = require("./473545.js"),
  Chunk124422 = require("./124422.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

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
  return <o.Z context={m} object={j.qAy.CONTEXT_MENU}><i.v2r navId={"user-context"} onClose={r.Zy} aria-label={h.intl.string(h.t.liqwPD)} onSelect={P}>{<i.kSQ>{k}{!O && D}{E}{!O && S}{x}{w}{N}{O && C}</i.kSQ>}{!O && <i.kSQ>{T}</i.kSQ>}{<i.kSQ>{_}{R}</i.kSQ>}</i.v2r></o.Z>
}