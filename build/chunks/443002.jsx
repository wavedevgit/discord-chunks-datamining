/** Chunk was on web.js **/
/** chunk id: 443002, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk425493 = require("./425493.jsx"),
  Chunk211266 = require("./211266.js"),
  Chunk906732 = require("./906732.js"),
  Chunk174604 = require("./174604.jsx"),
  Chunk302175 = require("./302175.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk724884 = require("./724884.js"),
  Chunk355045 = require("./355045.jsx"),
  Chunk290799 = require("./290799.jsx"),
  Chunk394769 = require("./394769.jsx"),
  Chunk555932 = require("./555932.js"),
  Chunk808189 = require("./808189.js"),
  Chunk362948 = require("./362948.jsx"),
  Chunk383881 = require("./383881.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk871146 = require("./871146.js");
let T = function(e) {
  let {
    analyticsLocation: t,
    guild: n,
    onClose: T
  } = e, [S, A] = i.useState(true), N = i.useRef(false), C = (0, l.Z)(() => Date.now()), {
    analyticsLocations: R
  } = (0, c.ZP)(), P = i.useRef(null), w = i.useRef(null), D = i.useRef(null), L = i.useCallback(() => {
    null != D.current && null != w.current && w.current.scrollTo({
      to: D.current.offsetTop,
      animate: true
    })
  }, []), x = i.useCallback(() => {
    null == T || T(), f.default.track(O.rMx.MODAL_DISMISSED, {
      type: O.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: R,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id,
      duration_open_ms: Date.now() - C
    })
  }, [T, t, R, C, n.id]), M = i.useCallback(e => {
    e && !N.current && (f.default.track(O.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
      type: O.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: R,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    }), N.current = true)
  }, [t, R, n.id]);
  return i.useEffect(() => {
    f.default.track(O.rMx.OPEN_MODAL, {
      type: O.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: R,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    })
  }, [n.id, t, R]), i.useEffect(() => {
    function e(e) {
      "Escape" === e.key && x()
    }
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e)
    }
  }, [x]), <r.Fragment>{null != T && <div className={I.closeIconWrapper}><s.Z className={I.closeIcon} closeAction={x} keybind={"ESC"} variant={s.Z.Variants.BOLD} /></div>}{<a.yWw ref={w} className={I.scroller}>{<div className={I.header}>{<div className={I.headerContentWrapper}>{<u.Z guild={e.guild} themeResponsive={false} onButtonClick={L} />}{<a.X6q className={I.heading} color={"always-white"} variant={"display-lg"}>{v.intl.string(v.t.N4sqzM)}</a.X6q>}{<p.Z guild={n} closeLayer={x} onCtaVisibilityChange={A} />}{<g.Z guild={n} />}{<E.Z guild={n} />}</div>}{<y.O />}</div>}{<div className={I.middleBodyContentWrapper}><d.Z ref={D} guild={e.guild} onClose={x} /></div>}{<div className={I.lowerBody}>{<div className={I.lowerBodyContentWrapper}>{<b.Z className={I.tierComparisonTable} guild={n} />}{<_.Z />}{<h.Z />}</div>}{<y.A />}{<div className={I.lowerBodyBackgroundImage} />}</div>}{<o.$ innerRef={P} onChange={M}><div ref={P} className={I.persistentCtaSpacer} /></o.$>}</a.yWw>}{<m.Z guild={n} isVisible={!S} closeLayer={x} />}</r.Fragment>
}