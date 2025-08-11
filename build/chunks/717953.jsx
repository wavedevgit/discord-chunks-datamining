/** Chunk was on web.js **/
/** chunk id: 717953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk44315 = require("./44315.js"),
  Chunk266454 = require("./266454.js"),
  Chunk581883 = require("./581883.js"),
  Chunk583901 = require("./583901.jsx"),
  Chunk576157 = require("./576157.js"),
  Chunk231338 = require("./231338.js"),
  Chunk671147 = require("./671147.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk313572 = require("./313572.js");

function O() {
  return <svg className={Chunk313572.newRing} width={"68"} height={"68"} viewBox={"0 0 68 68"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{<circle cx={"33.875"} cy={"33.875"} r={"32.875"} stroke={"url(#paint0_linear_1368_16544)"} stroke-width={"2"} />}{<defs><linearGradient id={"paint0_linear_1368_16544"} x1={"33.875"} y1={"2"} x2={"33.875"} y2={"65.75"} gradientUnits={"userSpaceOnUse"}>{<stop stop-color={"#B473F5"} />}{<stop offset={"1"} stop-color={"#E292AA"} />}</linearGradient></defs>}</svg>
}

function v(e) {
  var t, n;
  let {
    isDisabled: o,
    onSelect: v
  } = e, I = (0, l.e7)([p.Z], () => {
    var e, t;
    return null == (t = p.Z.settings.appearance) || null == (e = t.clientThemeSettings) ? true : e.customUserThemeSettings
  }), {
    shouldShowNewBadge: T,
    markNewBadgeAsDismissed: S
  } = (0, m.w)(), A = (0, _.Nj)(c.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), N = (0, d.ZP)(), C = null != I, R = (0, u.wjy)(N) ? y.darkOverlay : y.lightOverlay, P = (null != (n = null == I || null == (t = I.colors) ? true : t.length) ? n : 0) > 1, w = i.useMemo(() => {
    if (null == I || null == I.colors || 0 === I.colors.length) return;
    let e = I.colors[0];
    if (P) {
      let {
        colors: t,
        gradientAngle: n
      } = I;
      e = "linear-gradient(".concat(n, "deg, ").concat(t.join(", "), ")")
    }
    return {
      background: "var(--background-gradient), ".concat(e)
    }
  }, [I, P]), D = (0, f.Sl)(g.Il.WHITE).hex, L = (0, f.Sl)(g.Il.RED_430).hex, x = C ? D : true, M = i.useCallback(() => {
    T && S(), null == v || v()
  }, [T, S, v]);
  return <div className={y.badgeContainer}>{<h.S4 onSelect={o ? true : M} isSelected={false} showSelectionCircle={C} name={b.intl.string(E.default.KSBBpK)} className={a()(y.container, C && R, o && y.disabled)} showBadge={false} showLockedBadge={false} style={w}>{!A && !C && <O />}{<div className={y.borderOverlay} />}{<s.V3v color={x} className={y.paletteIcon} />}</h.S4>}{T && <u.IGR className={y.newBadge} text={b.intl.string(b.t.y2b7CA)} color={L} />}</div>
}