/** Chunk was on 84722 **/
/** chunk id: 460838, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Q: () => Z,
  Z: () => L
}), require("./953529.js");
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447003 = require("./447003.js"),
  Chunk471445 = require("./471445.js"),
  Chunk565138 = require("./565138.js"),
  Chunk357156 = require("./357156.js"),
  Chunk496675 = require("./496675.js"),
  Chunk725436 = require("./725436.js"),
  Chunk274311 = require("./274311.js"),
  Chunk854698 = require("./854698.js"),
  Chunk285784 = require("./285784.jsx"),
  Chunk95291 = require("./95291.jsx"),
  Chunk742593 = require("./742593.js"),
  Chunk810561 = require("./810561.js"),
  Chunk187443 = require("./187443.js"),
  Chunk131154 = require("./131154.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk565585 = require("./565585.js");

function O(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = i
    })
  }
  return e
}

function S(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t.push.apply(t, i)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}
var Z = ((i = {})[i.BANNER = 0] = "BANNER", i[i.THUMBNAIL = 1] = "THUMBNAIL", i);

function T(e) {
  let {
    channel: n,
    onClick: t
  } = e, {
    canManageAllEvents: i
  } = (0, v.XJ)(n), a = (0, c.e7)([m.Z], () => !n.isGuildVocal() || m.Z.can(E.Plq.CONNECT, n), [n]), h = r.useMemo(() => (0, u.Z)(n), [n]), x = (0, d.KS)(n);
  return <o.ua7 text={w.intl.string(w.t.nHjY9P)} shouldShow={!a && null != t}>{e => (0, l.jsxs)(o.P3F, S(O({}, e), {
      className: s()(I.inline, I.channelContainer, {
        [I.channelContainerEnabled]: a && null != t,
        [I.channelContainerDisabled]: !a && null != t
      }),
      onClick: t,
      children: [(0, l.jsx)(o.ua7, {
        text: w.intl.string(w.t["48WXaW"]),
        shouldShow: i && h && a && null != t,
        children: e => null != x ? (0, l.jsx)(x, S(O({}, e), {
          color: "currentColor",
          size: "custom",
          width: 20,
          height: 20,
          className: I.icon
        })) : null
      }), (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: I.channelLocation,
        children: n.name
      })]
    }))}</o.ua7>
}

function _(e) {
  let {
    guild: n,
    channel: t,
    onJoinClick: i,
    handleLocationClick: r,
    location: a,
    isExternal: c,
    isHub: u
  } = e;
  return u ? null == n ? <div /> : <div className={I.inline}>{<h.Z className={I.guildIcon} size={h.Z.Sizes.MINI} active={true} guild={n} />}{<o.Text variant={"text-sm/normal"} color={"header-secondary"}>{null == n ? true : n.name}</o.Text>}</div> : null != t ? <T channel={t} onClick={i} /> : <o.P3F className={I.inline} onClick={r}>{<o._tJ size={"custom"} color={"currentColor"} height={20} width={20} className={s()(I.channelContainer, I.icon)} />}{<o.Text className={c ? I.externalLocation : I.channelLocation} variant={"text-sm/normal"}>{(0, x.m)(a, true)}</o.Text>}</o.P3F>
}

function G(e) {
  var {
    isHub: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, i, l = function(e, n) {
      if (null == e) return {};
      var t, i, l = {},
        r = Object.keys(e);
      for (i = 0; i < r.length; i++) t = r[i], n.indexOf(t) >= 0 || (l[t] = e[t]);
      return l
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (i = 0; i < r.length; i++) t = r[i], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t])
    }
    return l
  }(e, ["isHub"]);
  return n ? <A{...O({}, t)} /> : <P{...O({}, t)} />
}

function P(e) {
  let {
    channel: n,
    entityType: t,
    isJoined: i,
    isActive: r,
    isUserLurking: a,
    rsvped: s,
    canInvite: c,
    onContextMenu: u,
    onJoinClick: d,
    onRsvpClick: h,
    onStartClick: v,
    onInviteClick: m,
    onEndClick: x,
    onJoinGuildClick: j
  } = e, C = (0, g.Q)(n, t), f = (0, p.Zs)({
    entityType: t,
    isJoined: i,
    isActive: r,
    isUserLurking: a,
    rsvped: s,
    canInvite: c,
    isChannelPublic: C,
    onJoinClick: d,
    onRsvpClick: h,
    onStartClick: v,
    onInviteClick: m,
    onEndClick: x,
    onJoinGuildClick: j
  });
  return <o.hE2 fullWidth={false} size={"sm"}>{null != u ? <p.b5 onClick={u} /> : null}{null == f ? true : f.map((e, n) => <o.zxk{...O({}, e)} />)}</o.hE2>
}

function A(e) {
  let {
    channel: n,
    entityType: t,
    guild: i,
    isActive: r,
    isUserLurking: a,
    isMember: s,
    rsvped: c,
    canInvite: u,
    onRsvpClick: d,
    onJoinGuildClick: h,
    onGoToGuildClick: v,
    onInviteClick: m
  } = e, x = (0, g.Q)(n, t), j = (0, N.u)({
    isActive: r,
    isUserLurking: a,
    isMember: s,
    rsvped: c,
    canInvite: u,
    isChannelPublic: x,
    guildName: null == i ? true : i.name,
    onRsvpClick: d,
    onJoinGuildClick: h,
    onGoToGuildClick: v,
    onInviteClick: m
  });
  return <o.hE2 fullWidth={false} size={"sm"}>{null == j ? true : j.map((e, n) => (0, l.jsx)(o.zxk, O({}, e), n))}</o.hE2>
}

function L(e) {
  let {
    className: n,
    guild: t,
    channel: i,
    creator: r,
    name: a,
    entityType: c,
    description: u,
    imageLocation: d = 0,
    imageSource: h,
    isActive: v,
    isUserLurking: m,
    isJoined: x = false,
    isMember: g = false,
    isHub: p = false,
    speakers: N,
    speakerCount: E,
    rsvped: w,
    canInvite: O,
    location: S,
    truncate: Z,
    onContextMenu: T,
    onJoinClick: P,
    onJoinGuildClick: A,
    onGoToGuildClick: L,
    onRsvpClick: X,
    onStartClick: R,
    onInviteClick: W,
    onEndClick: M,
    onClick: J,
    isNew: z,
    guildEvent: H,
    eventPreview: U,
    recurrenceRule: V,
    recurrenceId: D
  } = e, q = c === b.WX.EXTERNAL, B = q ? e => e.stopPropagation() : true, K = [];
  if (null != V && null != event) {
    let e = (0, j.Ho)(V);
    K = (0, j.PJ)(4, e, new Date(H.scheduled_start_time))
  }
  let Q = K.length > 0;
  return <o.kL8 aria-label={a} onClick={() => null == J ? true : J(D)} onContextMenu={T} className={s()(I.card, {
      [I.joined]: x,
      [I.lurking]: m
    }, n)}>{<div className={s()(I.padding, {
        [I.isRecurring]: Q
      })}>{0 === d && <C.Z source={h} />}{<f.ZP creator={r} name={a} description={u} imageSource={1 === d ? h : null} truncate={Z} guildId={null == t ? true : t.id} isHub={p} isNew={z} guildEvent={H} eventPreview={U} recurrenceId={D} />}{v && null != t && null != N && E > 0 && <k.Z guild={t} speakers={N} speakerCount={E} className={I.spacing} />}{<hr className={I.divider} />}{<div className={s()(I.inline, I.footer)}>{<_ guild={t} channel={i} onJoinClick={P} handleLocationClick={B} location={S} isExternal={q} isHub={p} />}{<div><G isHub={p} channel={i} entityType={c} guild={t} isActive={v} isJoined={x} isUserLurking={m} isMember={g} rsvped={w} canInvite={O} onContextMenu={T} onRsvpClick={X} onJoinGuildClick={A} onGoToGuildClick={L} onInviteClick={W} onJoinClick={P} onStartClick={R} onEndClick={M} /></div>}</div>}{Q && <hr className={I.divider} />}</div>}{Q && <y.Z guildId={null == t ? true : t.id} recurrenceRule={V} guildEventId={H.id} onRecurrenceClick={J} />}</o.kL8>
}