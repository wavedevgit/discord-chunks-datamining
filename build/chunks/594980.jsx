/** Chunk was on 22988 **/
/** chunk id: 594980, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk906732 = require("./906732.js"),
  Chunk884858 = require("./884858.js"),
  Chunk813197 = require("./813197.js"),
  Chunk434404 = require("./434404.js"),
  Chunk70086 = require("./70086.jsx"),
  Chunk949640 = require("./949640.js"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk200299 = require("./200299.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: f
  } = e, {
    analyticsLocations: b
  } = (0, a.ZP)(), x = t.features.has(m.oNc.INVITE_SPLASH), j = n && x, v = i.useCallback(e => {
    c.Z.updateGuild({
      splash: e
    })
  }, []), _ = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, u.E6)({
      guild: t,
      analyticsLocations: b,
      analyticsSection: m.jXE.GUILD_INVITE_BACKGROUND,
      analyticsObject: m.qAy.BUTTON_CTA,
      perks: (0, g.o9)()
    })
  }, [b, t]);
  return x ? <l.zx disabled={!j} color={l.Tt.BRAND} className={f}>{h.intl.string(h.t.yG2pUl)}{<o.ZP disabled={!j} onChange={v} maxFileSizeBytes={p.B} onFileSizeError={() => (0, s.Z)(p.B)} />}</l.zx> : <d.P className={f} onClick={_} />
}