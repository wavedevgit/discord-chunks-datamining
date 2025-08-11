/** Chunk was on web.js **/
/** chunk id: 11868, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qt: () => x,
  ZP: () => U
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk287734 = require("./287734.js"),
  Chunk372769 = require("./372769.js"),
  Chunk955415 = require("./955415.js"),
  Chunk922482 = require("./922482.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk411198 = require("./411198.js"),
  Chunk15274 = require("./15274.js"),
  Chunk924301 = require("./924301.js"),
  Chunk725436 = require("./725436.js"),
  Chunk978227 = require("./978227.js"),
  Chunk236373 = require("./236373.js"),
  Chunk854698 = require("./854698.js"),
  Chunk405613 = require("./405613.js"),
  Chunk95291 = require("./95291.js"),
  Chunk742593 = require("./742593.js"),
  Chunk217804 = require("./217804.js"),
  Chunk139712 = require("./139712.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.js"),
  Chunk690606 = require("./690606.js");
let D = (e, t) => n => {
    n.stopPropagation(), d.default.selectVoiceChannel(e.channel_id, false), null == t || t(n)
  },
  L = (e, t) => n => {
    let r = h.Z.getChannel(e.channel_id);
    null != r && (n.stopPropagation(), (0, p.Cq)(r), null == t || t(n))
  },
  x = (e, t) => {
    switch (null == e ? true : e.entity_type) {
      case R.WX.STAGE_INSTANCE:
        return L(e, t);
      case R.WX.VOICE:
        return D(e, t)
    }
    return () => {}
  },
  M = (e, t) => t && [R.WX.STAGE_INSTANCE, R.WX.VOICE].includes(null == e ? true : e.entity_type),
  k = Chunk73800.memo(function(e) {
    var t;
    let {
      guild: n,
      guildScheduledEvent: o,
      channel: a,
      isMember: l
    } = e, d = (0, s.e7)([m.Z], () => {
      if (null == n) return null;
      let e = m.Z.getGuild(n.id);
      return null != e ? e : (0, g.lM)(n) ? n : (0, g.Qs)(n)
    }, [n]), p = (0, N.u)(o, a), h = i.useCallback(e => {
      l && null != o && (e.stopPropagation(), (0, u.Bk)(o))
    }, [l, o]), E = i.useCallback(e => {
      x(o)(e)
    }, [o]);
    if (null == d) return null;
    let b = null == p ? true : p.IconComponent,
      O = <r.Fragment>{null != b && <b size={"xs"} color={"currentColor"} className={w.channelIcon} />}{<c.Text className={w.channelDescription} variant={"text-xs/normal"}>{(0, y.m)(null != (t = null == p ? true : p.locationName) ? t : "", true)}</c.Text>}</r.Fragment>;
    return <div className={w.inviteDetailsContainer}>{<_.Z.Icon guild={d} onClick={h} />}{<div className={w.verticalContainer}>{<div className={w.guildChannelInfoContainer}>{<f.Z guild={d} tooltipPosition={"top"} tooltipColor={c.ua7.Colors.PRIMARY} size={16} className={w.guildBadge} />}{<c.P3F className={w.guildNameClickable} onClick={h}><c.X6q className={l ? w.guildNameLinkable : w.guildName} variant={"text-sm/medium"}>{d.name}</c.X6q></c.P3F>}</div>}{<div className={w.channelInfoContainer}>{M(o, l) ? (0, r.jsx)(c.P3F, {
            className: w.channelLocationLink,
            onClick: E,
            children: O
          }) : O}</div>}</div>}</div>
  }),
  j = Chunk73800.memo(function(e) {
    let {
      guildId: t,
      guildScheduledEventId: n,
      recurrenceId: i,
      isActive: o,
      isEnded: a,
      isMember: u,
      isExternal: d,
      onAcceptInstantInvite: f,
      onTransitionToInviteChannel: _
    } = e, p = (0, s.e7)([b.ZP], () => b.ZP.isInterestedInEventRecurrence(n, i), [n, i]), h = e => {
      e.stopPropagation(), (0, C.Z)(n, i, t)
    }, m = e => {
      e.stopPropagation(), u ? o && _() : f()
    };
    return u ? o ? <l.zx className={w.button} size={l.zx.Sizes.SMALL} onClick={e => {
        d || m(e)
      }} color={d ? l.zx.Colors.TRANSPARENT : l.zx.Colors.GREEN}>{d ? P.intl.string(P.t.GoCQxc) : P.intl.string(P.t.XpeFYm)}</l.zx> : a ? <l.zx className={w.button} size={l.zx.Sizes.SMALL} disabled={true} color={l.zx.Colors.PRIMARY} look={l.zx.Looks.OUTLINED}>{P.intl.string(P.t.Pj7Xrq)}</l.zx> : <l.zx className={w.button} innerClassName={w.innerButton} size={l.zx.Sizes.SMALL} color={l.zx.Colors.PRIMARY} look={p ? l.zx.Looks.OUTLINED : l.zx.Looks.FILLED} onClick={h}>{p ? <c.dz2 size={"xs"} color={"currentColor"} className={w.buttonIcon} /> : <c.Dkj size={"xs"} color={"currentColor"} className={w.buttonIcon} />}{P.intl.string(P.t.DlcqlZ)}</l.zx> : <l.zx className={w.button} size={l.zx.Sizes.SMALL} onClick={m} color={l.zx.Colors.GREEN}>{P.intl.string(P.t.XpeFYm)}</l.zx>
  }),
  U = Chunk73800.memo(function(e) {
    var t;
    let {
      guildScheduledEvent: n,
      guild: o,
      channel: s,
      isMember: l,
      recurrenceId: u,
      onAcceptInstantInvite: d,
      onTransitionToInviteChannel: f
    } = e, p = null != u ? u : null != n ? (0, I.DK)(n) : null, h = (null == n ? true : n.recurrence_rule) == null || null == p || (0, I.Rp)((0, v.KV)(null == n ? true : n.recurrence_rule), p), m = (0, O.Z)(n), g = i.useCallback(() => {
      l && null != n && (0, E.bO)({
        eventId: n.id,
        recurrenceId: p
      })
    }, [l, n, p]);
    if (null == n || !h) return null;
    let y = (0, b.xt)(n),
      N = (0, b.Z2)(n),
      C = n.entity_type === R.WX.EXTERNAL;
    return <_.Z className={a()({
        [w.clickable]: l
      })}><c.P3F onClick={g}>{null != n.image && <S.Z source={(0, T.Z)(n)} className={w.banner} />}{<A.ZP name={n.name} description={null != (t = n.description) ? t : true} descriptionClassName={w.eventDescription} guildId={n.guild_id} creator={m} guildEvent={n} eventPreview={n} recurrenceId={p} />}{<div className={w.footerContainer}>{<k guild={o} channel={s} guildScheduledEvent={n} isMember={l} />}{<j isActive={y} isEnded={N} isMember={l} guildId={n.guild_id} guildScheduledEventId={n.id} recurrenceId={p} onAcceptInstantInvite={d} onTransitionToInviteChannel={f} isExternal={C} />}</div>}</c.P3F></_.Z>
  })