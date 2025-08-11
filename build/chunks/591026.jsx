/** Chunk was on 22988 **/
/** chunk id: 591026, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk467319 = require("./467319.js"),
  Chunk456677 = require("./456677.jsx"),
  Chunk55889 = require("./55889.jsx"),
  Chunk300453 = require("./300453.jsx"),
  Chunk620436 = require("./620436.js"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk694705 = require("./694705.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  var t, n;
  let {
    rule: f,
    onChangeRule: b
  } = e, [x, j] = i.useState(null == (t = f.triggerMetadata) ? true : t.mentionTotalLimit), v = (0, a.a)(f.guildId, false);
  return <div className={g.cardContentsContainer}>{<c.Z step={1} header={m.intl.string(m.t.IGfuTU)}>{<div className={g.mentionLimitContainer}>{<div className={g.mentionLimitIconContainer}><l.lOy size={"md"} color={"currentColor"} className={g.mentionLimitIcon} /></div>}{<div className={g.mentionLimitTextContainer}>{<l.X6q variant={"heading-sm/semibold"}>{m.intl.string(m.t["s/26oa"])}</l.X6q>}{<l.Text color={"interactive-normal"} variant={"text-xs/medium"} className={g.descriptionHint}>{m.intl.string(m.t["8uW4/P"])}</l.Text>}</div>}{<div className={g.stepperContainer}><l.FiK value={x} onChange={e => {
              j(e), b(h(p({}, f), {
                triggerMetadata: h(p({}, f.triggerMetadata), {
                  mentionTotalLimit: e
                })
              }))
            }} minValue={u.Vg} maxValue={u.Lg} className={g.stepper} /></div>}</div>}{v ? <div className={g.mentionLimitContainer}>{<div className={g.mentionLimitIconContainer}><l.S4f size={"md"} color={"currentColor"} className={g.mentionLimitIcon} /></div>}{<div className={g.mentionLimitTextContainer}>{<l.X6q variant={"heading-sm/semibold"}>{m.intl.string(m.t.XnuC9v)}</l.X6q>}{<l.Text color={"interactive-normal"} variant={"text-xs/medium"} className={g.descriptionHint}>{m.intl.string(m.t.EDBe5u)}</l.Text>}</div>}{<div><l.XZJ type={l.XZJ.Types.INVERTED} value={null == (n = f.triggerMetadata) ? true : n.mentionRaidProtectionEnabled} onChange={(e, t) => {
              b(h(p({}, f), {
                triggerMetadata: h(p({}, f.triggerMetadata), {
                  mentionRaidProtectionEnabled: t
                })
              }))
            }} className={g.__invalid_actionCheckbox} /></div>}</div> : null}</c.Z>}{<d.Z type={d.Z.Type.ARROW_DOWN} />}{<c.Z step={2} header={m.intl.string(m.t["18TOiY"])}><s.Z rule={f} onChangeRule={b} /></c.Z>}{<d.Z type={d.Z.Type.CROSS} />}{<c.Z step={3} header={m.intl.string(m.t.eq3gjo)}><o.Z rule={f} onChangeRule={b} /></c.Z>}</div>
}