/** Chunk was on 34779 **/
/** chunk id: 903672, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk235820 = require("./235820.js"),
  Chunk494404 = require("./494404.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk81643 = require("./81643.js"),
  Chunk622822 = require("./622822.js"),
  Chunk198620 = require("./198620.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk216789 = require("./216789.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk731290 = require("./731290.js"),
  Chunk944486 = require("./944486.js"),
  Chunk455199 = require("./455199.js"),
  Chunk655354 = require("./655354.jsx"),
  Chunk999671 = require("./999671.js"),
  Chunk324081 = require("./324081.jsx"),
  Chunk240126 = require("./240126.jsx"),
  Chunk791914 = require("./791914.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk384323 = require("./384323.js");
let T = {
  offset: {
    left: 4,
    right: false
  }
};

function A(e, t, n) {
  let r = t ? j.ZP.guildFilter : null,
    i = t ? j.ZP.roleFilter : null,
    l = t ? j.ZP.everyoneFilter : null,
    o = null;
  null != e && null != r && (o = r === N.NgX.ALL_SERVERS ? null : e.getGuildId()), u.Z.fetchRecentMentions({
    before: n,
    limit: N.DJj,
    guildId: o,
    roles: i,
    everyone: l
  })
}

function R(e) {
  let {
    setTab: t,
    onJump: n,
    badgeState: l,
    closePopout: c
  } = e, f = (0, s.e7)([y.Z, v.Z], () => y.Z.getChannel(v.Z.getChannelId())), {
    messages: g,
    hasMore: b,
    loading: _,
    guildFilter: C,
    roleFilter: E,
    everyoneFilter: x
  } = (0, s.cj)([j.ZP], () => ({
    messages: j.ZP.getMentions(),
    hasMore: j.ZP.hasMore,
    loading: j.ZP.loading,
    guildFilter: j.ZP.guildFilter,
    roleFilter: j.ZP.roleFilter,
    everyoneFilter: j.ZP.everyoneFilter
  })), I = (0, O.Us)({
    location: "RecentMentions"
  }), T = (0, p.Z)(C), R = (0, p.Z)(E), L = (0, p.Z)(x);
  i.useEffect(() => {
    if (!j.ZP.hasLoadedEver) return void A(f, true);
    (null != T && C !== T || null != R && E !== R || null != L && x !== L) && A(f, true)
  }, [T, C, R, E, L, x, f, true]), (0, h.ZP)(() => {
    (null == g ? true : g.some(m.k5)) && (u.Z.clearMentions(), A(f, true))
  }), i.useEffect(() => () => {
    u.Z.truncateMentions(N.DJj)
  }, []);
  let k = i.useCallback(() => <P.Z tab={a.X.MENTIONS} setTab={t} badgeState={l} closePopout={c}><S.Z /></P.Z>, [true, t, l, c]);
  return <d.ZP className={o()(Z.recentMentionsPopout, {
      [Z.widerInbox]: I
    })} scrollerClassName={Z.scroller} onFetch={() => null} onJump={n} onCloseMessage={function(e) {
      u.Z.deleteRecentMention(e.id)
    }} channel={f} messages={g} loading={_} hasMore={b} analyticsName={"Recent Mentions"} loadMore={function() {
      A(f, true, null != g && g.length > 0 ? g[g.length - 1].id : null)
    }} canCloseAllMessages={true} renderHeader={k} renderEmptyState={M} renderMessage={D} aria-label={w.intl.string(w.t.jbV6MD)} listName={"recents"} />
}

function D(e, t) {
  return [<L message={e} gotoMessage={t} dismissible={true} />]
}

function L(e) {
  let {
    message: t,
    gotoMessage: n,
    dismissible: i
  } = e;
  if (null == t) return null;
  let l = y.Z.getChannel(t.channel_id);
  if (null == l || (0, g.aC)(l) && (0, f.sf)()) return null;
  let o = C.Z.didAgree(l.getGuildId()),
    s = !!(0, g.aC)(l) && !o;
  return <div className={Z.container}>{<x.Z channel={l} gotoChannel={n}>{null != i ? (0, r.jsx)(c.M0o, {
        className: Z.closeButton,
        tooltip: w.intl.string(w.t.cpT0Cg),
        color: c.YX$.TERTIARY,
        icon: (0, r.jsx)(c.Dio, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: () => u.Z.deleteRecentMention(t.id)
      }) : null}</x.Z>}{<div className={Z.messageContainer}>{<E.Z className={Z.jumpMessageButton} onJump={n} />}{<b.Z message={t} channel={l} className={Z.message} hideAccessories={s} compact={_.jU.getSetting()} animateAvatar={false} focusProps={T} trackAnnouncementViews={true} />}</div>}</div>
}

function M() {
  return <Chunk240126.Z Icon={Chunk481060.lOy} header={Chunk388032.intl.string(Chunk388032.t["bgDz7+"])} tip={Chunk388032.intl.string(Chunk388032.t.NS15vr)} />
}