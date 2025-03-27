/** Chunk was on 87791 **/
n.d(t, {
  Af: () => u,
  GO: () => c,
  Gh: () => m,
  Pq: () => p,
  Q2: () => f,
  Qh: () => d,
  Vr: () => a,
  _v: () => _,
  hx: () => s,
  r: () => h
}), n(704215), n(605236);
var r = n(314897);
n(271383);
var i = n(626135),
  o = n(308083),
  l = n(981631);

function a(e) {
  let {
    guildId: t,
    source: n,
    location: o,
    messageId: a,
    tagUserId: s
  } = e, c = r.default.getId();
  i.default.track(l.rMx.CLAN_APPLY_TO_JOIN_VIEWED, {
    guild_id: t,
    source: n,
    location: o,
    viewing_user_id: c,
    tag_owner_user_id: s,
    message_id: a
  })
}

function s(e) {
  let {
    guildId: t,
    userId: n,
    source: r
  } = e;
  i.default.track(l.rMx.CLAN_ADOPT_IDENTITY, {
    guild_id: t,
    user_id: n,
    source: r
  })
}

function c(e, t) {
  i.default.track(l.rMx.CLAN_SETTINGS_VIEWED, {
    guild_id: e,
    page: t
  })
}

function u(e) {
  i.default.track(l.rMx.CLAN_SETTINGS_SAVED, {
    guild_id: e
  })
}

function d(e) {
  switch (e) {
    case o.Wy.GAMES:
      return "games";
    case o.Wy.PLAYSTYLE:
      return "playstyle";
    case o.Wy.UTILITY_TRAITS:
      return "utility_traits";
    case o.Wy.INTERESTS:
      return "interests";
    case o.Wy.DESCRIPTION:
      return "description";
    case o.Wy.CUSTOMIZE_TAG_BADGE:
      return "tag";
    case o.Wy.CUSTOMIZE_BANNER:
      return "banner";
    case o.Wy.MEMBER_APPLICATION:
      return "member_application";
    default:
      return e
  }
}

function p(e) {
  i.default.track(l.rMx.MEMBER_VERIFICATION_APPLICATION_VIEWED, {
    guild_id: e
  })
}

function f(e) {
  let {
    guildId: t,
    source: n,
    tab: r
  } = e;
  i.default.track(l.rMx.CLAN_APPLICATION_NAVIGATION, {
    guild_id: t,
    source: n,
    tab: r
  })
}

function h(e) {
  let {
    guildId: t,
    position: n
  } = e;
  i.default.track(l.rMx.GUILD_APPLICATION_INTENDS_TO_JOIN, {
    guild_id: t,
    position: n
  })
}

function m(e) {
  let {
    feature: t,
    guildId: n,
    position: r
  } = e;
  i.default.track(l.rMx.DISCOVERY_GUILD_CARD_INTERACTION, {
    guild_id: n,
    feature: t,
    position: r
  })
}

function _(e) {
  let {
    guildId: t,
    position: n
  } = e;
  i.default.track(l.rMx.GUILD_APPLICATION_ABANDONED, {
    guild_id: t,
    position: n
  })
}
n(921944)