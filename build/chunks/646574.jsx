/** Chunk was on web.js **/
/** chunk id: 646574, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk742840 = require("./742840.js");
let E = {
    tension: 750,
    mass: 2.5,
    friction: 70
  },
  b = 20;

function y(e) {
  let {
    tooltipText: t,
    headingText: n,
    textColor: i
  } = e, o = null != n;
  return <span className={o ? true : g.tooltipContainer}>{<span className={g.tooltipContainer}>{<u.SrA size={"md"} color={"currentColor"} className={g.nitroWheel} />}{o ? <u.X6q color={null != i ? i : "text-default"} variant={"heading-sm/semibold"}>{n}</u.X6q> : null}</span>}{<u.Text variant={o ? "text-xs/normal" : "text-sm/medium"} color={null != i ? i : "text-default"}>{t}</u.Text>}</span>
}

function O(e) {
  return e ? m.intl.string(m.t["5cRA/f"]) : m.intl.string(m.t.buV4am)
}

function v(e) {
  let {
    checked: t,
    onClick: n,
    id: o = "burst-reaction-toggle-button"
  } = e, v = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), I = _.default.getCurrentUser(), T = null == I || (0, p.I5)(I) ? [c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [], [S, A] = (0, f.US)(T), [N, C] = i.useState(false), [R, P] = (0, u.q_F)(() => ({})), w = (0, s.animated)(u.Pt5);

  function D() {
    P({
      from: {
        rotate: t ? "360deg" : "0deg"
      },
      to: {
        rotate: t ? "0deg" : "360deg"
      },
      config: E
    }), null == n || n(), C(false)
  }
  i.useEffect(() => {
    let e = S === c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
    e && (A(h.L.DISMISS), setTimeout(() => C(e), 200))
  }, [S, A]);
  let L = N ? m.intl.string(m.t["Osi/u7"]) : O(t),
    x = N ? m.intl.string(m.t.ORK94u) : true;
  return <u.DY3 position={"top"} text={(0, r.jsx)(y, {
      textColor: "always-white",
      tooltipText: L,
      headingText: x
    })} color={u.ua7.Colors.BRAND} forceOpen={N} aria-label={L} tooltipClassName={g.tooltip}>{<input className={g.visuallyHidden} checked={t} onChange={D} id={o} type={"checkbox"} />}{<label htmlFor={o} className={a()(g.label, {
        [g.labelChecked]: t
      })}>{<w style={v ? true : R} size={"custom"} width={b} height={b} color={t ? "white" : "currentColor"} className={g.icon} />}{<span><u.Text className={g.visuallyHidden} variant={"text-sm/semibold"}>{m.intl.string(m.t.buV4am)}</u.Text></span>}</label>}</u.DY3>
}