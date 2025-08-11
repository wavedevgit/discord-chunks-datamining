/** Chunk was on 22988 **/
/** chunk id: 67734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk906732 = require("./906732.js"),
  Chunk70086 = require("./70086.js"),
  Chunk949640 = require("./949640.js"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk486324 = require("./486324.js"),
  Chunk200299 = require("./200299.js"),
  Chunk388032 = require("./388032.js");

function p(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: p
  } = e, {
    analyticsLocations: h
  } = (0, a.ZP)(), f = t.features.has(c.oNc.BANNER), b = i.useCallback(e => {
    let {
      imageUri: n,
      file: r
    } = e;
    (0, o.f4)(t, h, n, r)
  }, [h, t]), x = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, o.E6)({
      guild: t,
      analyticsLocations: h,
      analyticsSection: c.jXE.GUILD_BANNER,
      analyticsObject: c.qAy.BUTTON_CTA,
      perks: (0, d.XO)()
    })
  }, [h, t]);
  return f ? <l.zx disabled={!(f && n)} color={l.zx.Colors.BRAND} className={p} onClick={() => (0, o.mw)({
      uploadType: u.pC.GUILD_BANNER,
      maxFileSizeBytes: m.B,
      onComplete: b,
      analyticsLocation: {
        page: c.ZY5.GUILD_SETTINGS,
        section: c.jXE.GUILD_BANNER
      },
      analyticsLocations: h
    })}>{g.intl.string(g.t.yG2pUl)}</l.zx> : <s.P className={p} onClick={x} />
}