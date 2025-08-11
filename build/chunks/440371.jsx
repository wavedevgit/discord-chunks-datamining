/** Chunk was on 82758 **/
/** chunk id: 440371, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk854698 = require("./854698.js"),
  Chunk401876 = require("./401876.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk622601 = require("./622601.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function m(e) {
  let {
    className: t,
    onScheduleChange: r,
    onRecurrenceChange: l,
    onTimeChange: m,
    timeSelected: h = true,
    schedule: b,
    recurrenceRule: g,
    showEndDate: p = false,
    requireEndDate: v = false,
    disableStartDateTime: f = false
  } = e;
  if (null == b) return null;
  let y = null,
    O = b.startDate,
    P = s()(),
    k = s()().add(a.G3, "days"),
    N = s()().add(a.Ib, "days");
  null != g && (k.add(a.hn, "years"), N.add(a.hn, "years"));
  let w = e => {
    r(j(x({}, b), {
      endDate: e
    }))
  };
  return p && (y = null != b.endDate || v ? <n.Fragment>{<div className={u.doubleInput}>{<c.xJW title={d.intl.string(d.t.CTLgZG)} required={v}><c.Wrb value={b.endDate} onSelect={w} minDate={b.startDate} maxDate={N} /></c.xJW>}{<c.xJW title={d.intl.string(d.t.j2RuXF)} required={v}><c.MGJ value={b.endDate} onChange={w} /></c.xJW>}</div>}{v ? null : <i.zx onClick={() => {
        w(true)
      }} look={i.zx.Looks.BLANK} size={i.zx.Sizes.MIN}><div className={u.link}>{<c.k$p size={"custom"} color={"currentColor"} width={17} height={17} className={u.removeIcon} />}{<c.Text variant={"text-sm/normal"}>{d.intl.string(d.t.petdfn)}</c.Text>}</div></i.zx>}</n.Fragment> : <i.zx look={i.zx.Looks.BLANK} size={i.zx.Sizes.MIN} onClick={() => {
      w(s()(b.startDate).add(1, "hour"))
    }}><div className={u.link}>{<c.oFk size={"custom"} color={"currentColor"} width={20} height={20} className={u.addIcon} />}{<c.Text variant={"text-sm/normal"}>{d.intl.string(d.t.ncdPcn)}</c.Text>}</div></i.zx>), <div className={t}>{<div className={u.doubleInput}>{<c.xJW title={d.intl.string(d.t.kKOIwM)} required={true}><c.Wrb value={b.startDate} onSelect={e => {
            r(j(x({}, b), {
              startDate: e
            }))
          }} minDate={P} maxDate={k} disabled={f} /></c.xJW>}{<c.xJW title={d.intl.string(d.t["6dGmCA"])} required={true}><c.MGJ value={b.startDate} onChange={e => {
            e.isValid() && (null == m || m(true), r(j(x({}, b), {
              startDate: e
            })))
          }} hideValue={!h} disabled={f} /></c.xJW>}</div>}{y}{null != O && null != l && <o.Z onRecurrenceChange={l} startDate={O} recurrenceRule={g} />}</div>
}