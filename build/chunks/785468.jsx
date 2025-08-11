/** Chunk was on 58023 **/
/** chunk id: 785468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk924301 = require("./924301.js"),
  Chunk518756 = require("./518756.js"),
  Chunk545165 = require("./545165.js"),
  Chunk884746 = require("./884746.js"),
  Chunk274311 = require("./274311.js"),
  Chunk230900 = require("./230900.js"),
  Chunk366815 = require("./366815.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk230384 = require("./230384.js");

function S(e) {
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
let T = e => e === E.WX.EXTERNAL,
  P = (e, t) => {
    let n = d.Z.getChannel(e);
    if (null == n) return null;
    let l = n.type === N.d4z.GUILD_STAGE_VOICE,
      i = (0, b.Q)(n, t),
      a = i ? c.gj8 : c.gjC,
      s = i ? c.ewx : c.pki;
    return <l ? s : a color={"currentColor"} size={"md"} className={I.channelOptionIcon} />
  },
  w = e => {
    let {
      guildId: t,
      channelType: n,
      channel: l,
      onSelectChannel: i,
      disabled: a,
      entityType: s
    } = e, o = n === N.d4z.GUILD_STAGE_VOICE, d = (0, b.Q)(l, s), m = (0, f.sR)(t, n);
    return <c.xJW title={o ? C.intl.string(C.t.S7GjDw) : C.intl.string(C.t["7RYWCA"])} className={I.options} disabled={a} required={true}>{<c.VcW value={null == l ? true : l.id} options={m.map(e => ({
          value: e.id,
          label: (0, u.F6)(e, h.default, g.Z, true)
        }))} onChange={e => {
          let t = m.find(t => t.id === e);
          i(null != t ? t : true)
        }} renderOptionPrefix={e => P(null == e ? true : e.value, s)} isDisabled={a} />}{!d && <c.Text color={"header-secondary"} className={I.channelPrivate} variant={"text-sm/normal"}>{C.intl.string(C.t.F3bDaW)}</c.Text>}</c.xJW>
  };

function Z(e, t, n, r) {
  return t ? {
    disabled: true,
    tooltipText: C.intl.string(C.t.yutP5e)
  } : n ? 0 === r && e !== E.WX.EXTERNAL ? {
    disabled: true,
    tooltipText: C.intl.string(C.t["DkY+cH"])
  } : {
    disabled: false,
    tooltipText: null
  } : {
    disabled: true,
    tooltipText: C.intl.string(C.t.HeF1kZ)
  }
}
let D = e => t => {
    e({
      entityMetadata: {
        location: t
      }
    })
  },
  _ = e => t => {
    var n;
    e({
      channelId: null != (n = null == t ? true : t.id) ? n : null
    })
  },
  R = (e, t) => n => {
    let {
      value: r
    } = n, l = {
      entityType: r,
      scheduledEndTime: true
    };
    if (T(r)) {
      var i;
      l.scheduledEndTime = (null != (i = a()(t.scheduledStartTime)) ? i : a()()).add(2, "hour").toISOString()
    }
    e(l)
  };

function k(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i,
    isFocusReady: a
  } = e, {
    entityType: u,
    channelId: m
  } = n, x = (0, s.e7)([d.Z], () => d.Z.getChannel(m), [m]), g = l.useRef(null);
  l.useEffect(() => {
    if (a && T(u)) {
      var e;
      null == (e = g.current) || e.focus()
    }
  }, [a, u]);
  let h = D(i),
    p = _(i),
    f = (0, y.xV)(n),
    j = (0, y.xC)(u),
    b = (0, v.xt)(n);
  return null == u || u === E.WX.NONE ? null : T(u) ? <c.xJW title={C.intl.string(C.t.yx785O)} className={I.options} required={true}><o.Is className={I.__invalid_textInput} onChange={h} placeholder={C.intl.string(C.t.mkCMiY)} maxLength={E.gG} value={null != f ? f : ""} inputRef={g} /></c.xJW> : null == j ? null : <w guildId={t} channelType={j} onSelectChannel={p} channel={x} entityType={u} disabled={b} />
}

function A(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i
  } = e, a = (0, s.e7)([m.Z], () => m.Z.getGuild(t), [t]), o = (0, p.Z)(t, true), u = (0, p.Z)(t, N.d4z.GUILD_VOICE), d = (0, p.Z)(t, N.d4z.GUILD_STAGE_VOICE), x = (0, f.sR)(t, N.d4z.GUILD_VOICE), g = (0, j.q)(a), h = null == a ? true : a.features.has(N.oNc.COMMUNITY), b = (0, v.xt)(n), y = R(i, n), O = l.useMemo(() => {
    let e = [S({
      name: C.intl.string(C.t.BVZqJi),
      value: E.WX.VOICE,
      desc: C.intl.string(C.t["EV//4e"]),
      icon: c.gj8
    }, Z(E.WX.VOICE, b, u, x.length)), S({
      name: C.intl.string(C.t.w7ipb2),
      value: E.WX.EXTERNAL,
      desc: C.intl.string(C.t.DYxrHh),
      icon: c._tJ
    }, Z(E.WX.EXTERNAL, b, o, 0))];
    return h ? [S({
      name: C.intl.string(C.t.EErMzM),
      value: E.WX.STAGE_INSTANCE,
      desc: C.intl.string(C.t.LgALpq),
      icon: c.ewx
    }, Z(E.WX.STAGE_INSTANCE, b, d, g.length)), ...e] : e
  }, [o, u, d, h, x.length, g.length, b]);
  return <c.FXm value={n.entityType} options={O} onChange={y} className={I.options} />
}

function U(e) {
  let {
    guildId: t,
    guildEvent: l,
    validationErrorMessage: i,
    onChange: a,
    isSlideReady: o = false
  } = e, {
    entityType: u
  } = l, d = (0, s.e7)([m.Z], () => m.Z.getGuild(t), [t]), g = (0, j.q)(d), h = (0, s.e7)([x.Z], () => x.Z.can(N.Plq.MANAGE_CHANNELS, d)), v = null == d ? true : d.features.has(N.oNc.COMMUNITY), p = R(a, l), f = v && !T(u) && 0 === g.length && h && null != u;
  return <div className={I.container}>{<c.X6q variant={"heading-xl/semibold"} className={I.header}>{C.intl.string(C.t["DC+Qm5"])}</c.X6q>}{<c.Text color={"header-secondary"} className={I.text} variant={"text-sm/normal"}>{C.intl.string(C.t.IwmXLC)}</c.Text>}{<A guildId={t} guildEvent={l} onChange={a} />}{<k guildId={t} guildEvent={l} isFocusReady={o} onChange={a} />}{f ? <O.Z onClick={() => {
        p({
          value: E.WX.STAGE_INSTANCE,
          name: C.intl.string(C.t.EErMzM)
        }), (0, c.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("45094"), n.e("54325")]).then(n.bind(n, 218613));
          return n => {
            var l, i;
            return (0, r.jsx)(e, (l = S({}, n), i = i = {
              channelType: N.d4z.GUILD_STAGE_VOICE,
              guildId: t
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
            }), l))
          }
        })
      }} /> : null}</div>
}