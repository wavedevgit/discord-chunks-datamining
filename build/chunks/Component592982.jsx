/** Chunk was on 78528 **/
/** chunk id: 592982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk587895 = require("./587895.js"),
  Chunk690953 = require("./690953.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk516311 = require("./516311.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk313961 = require("./313961.js"),
  Chunk457246 = require("./457246.jsx"),
  Chunk973937 = require("./973937.jsx"),
  Chunk854182 = require("./854182.jsx"),
  Chunk734337 = require("./734337.jsx"),
  Chunk834857 = require("./834857.jsx"),
  Chunk451556 = require("./451556.jsx"),
  Chunk74329 = require("./74329.jsx"),
  Chunk956747 = require("./956747.jsx"),
  Chunk470743 = require("./470743.jsx"),
  Chunk806931 = require("./806931.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk220636 = require("./220636.js");

function E(e) {
  let {
    onClose: t,
    onSelect: n,
    channel: E,
    remoteMode: C,
    onInteraction: S
  } = e, I = (0, o.Us)(), {
    id: N,
    type: T
  } = E, P = (0, l.bG)([u.A], () => u.A.getGuild(E.guild_id), [E.guild_id]), w = (0, l.bG)([d.A], () => d.A.getSelectedParticipant(N)), R = (null == w ? true : w.type) === O.lp.STREAM ? w.stream : null, D = (0, l.bG)([s.A], () => (null == w ? true : w.type) === O.lp.ACTIVITY ? s.A.getApplication(w.applicationId) : true), M = (0, f.A)(N), L = (0, y.A)(N), k = (0, m.A)(E, P, null == R ? true : R.ownerId, null == D ? true : D.id), G = (0, h.A)(N), U = (0, _.A)(), B = (0, c.RQ)(N), V = (0, c.dA)(N), F = (0, A.A)(R, I), H = (0, b.A)(D, N), K = (0, g.A)(), W = (0, a.A)(E), z = (0, p.f)(N);
  return (0, r.jsxs)(i.W1t, {
    "data-menu-needs-review": true,
    className: x.MK,
    onClose: t,
    onSelect: n,
    onInteraction: S,
    navId: "more-settings-context",
    "aria-label": v.intl.string(v.t.FTLzdR),
    children: [(0, r.jsx)(i.rXV, {
      children: T !== j.rbe.GUILD_STAGE_VOICE ? k : null
    }), (0, r.jsxs)(i.rXV, {
      children: [T === j.rbe.GUILD_STAGE_VOICE ? B : null, T === j.rbe.GUILD_STAGE_VOICE ? V : null, C || T === j.rbe.GUILD_STAGE_VOICE ? null : G, K, T !== j.rbe.GUILD_STAGE_VOICE ? M : null, T === j.rbe.GUILD_STAGE_VOICE || T === j.rbe.GUILD_VOICE ? L : null]
    }), (0, r.jsx)(i.rXV, {
      children: W
    }), (0, r.jsxs)(i.rXV, {
      children: [U, !E.isManaged() && E.isPrivate() ? z : null]
    }), (0, r.jsxs)(i.rXV, {
      children: [null != R ? F : null, null != D ? H : null]
    })]
  })
}