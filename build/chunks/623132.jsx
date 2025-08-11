/** Chunk was on 11776 **/
/** chunk id: 623132, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk5192 = require("./5192.js"),
  Chunk971082 = require("./971082.js"),
  Chunk817053 = require("./817053.js"),
  Chunk879877 = require("./879877.js"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk436860 = require("./436860.js"),
  Chunk467514 = require("./467514.js"),
  Chunk418718 = require("./418718.js");

function j(e) {
  let {
    text: t,
    user: n,
    guildId: l,
    channelId: o
  } = e;
  return <div>{<i.PEf size={"xxs"} color={i.TVs.colors.ICON_TERTIARY} className={b.icon} />}{<i.nn4>{m.intl.format(m.t.TM0XDQ, {
        name: c.ZP.getName(l, o, n)
      })}</i.nn4>}{<i.Text variant={"text-sm/normal"} color={"text-tertiary"}>{t}</i.Text>}</div>
}

function h(e) {
  let {
    applicationId: t,
    userId: n,
    gameName: c,
    className: s,
    children: d
  } = e, u = (0, a.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: o.m1.UserProfile,
    sourceUserId: n,
    trackEntryPointImpression: true
  }), f = l.useCallback(e => {
    e.target === e.currentTarget && (null == u || u(e))
  }, [u]), p = null != c ? c : m.intl.string(m.t.GIWFlJ), g = null != u;
  return <div className={s}>{g && <i.P3F className={b.clickableCard} aria-label={m.intl.formatToPlainString(m.t["8QLQBw"], {
        gameName: p
      })} onClick={f} />}{d}</div>
}

function x(e) {
  let {
    user: t,
    guildId: n,
    channelId: l,
    game: o,
    loading: a = false,
    disableInteraction: c = false
  } = e, {
    gameName: x,
    imageSrc: y,
    applicationId: v,
    comment: O,
    tags: _
  } = o, I = (0, f.Z)(o.applicationId), P = I.length > 0, Z = () => <r.Fragment>{<d.Z imageSrc={y} gameName={x} applicationId={v} userId={t.id} disableInteraction={true} />}{<div className={b.details}>{<i.X6q variant={"text-md/normal"} color={"text-default"}>{x}</i.X6q>}{null != O && <j text={O} user={t} guildId={n} channelId={l} />}{<u.Z tags={_} />}{P && <s.Z label={m.intl.formatToPlainString(m.t.ujhJdH, {
          numFriends: I.length
        })} className={b.socialProof} users={I} guildId={n} channelId={l} />}</div>}</r.Fragment>;
  return a ? <div className={b.card}>{<div className={g.loadingCover} />}{<div className={b.details}><div className={p.placeholderText}>{<div className={p.placeholderBar} />}{<div className={p.placeholderBar} />}</div></div>}</div> : c ? <div className={b.card}>{Z()}</div> : <h applicationId={v} userId={t.id} gameName={x} className={b.card}>{Z()}</h>
}