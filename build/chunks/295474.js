/** Chunk was on web.js **/
/** chunk id: 295474, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ux: () => g,
  gS: () => E,
  ww: () => b
}), require("./997841.js");
var Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk230711 = require("./230711.js"),
  Chunk18438 = require("./18438.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk715903 = require("./715903.js"),
  Chunk981631 = require("./981631.js"),
  Chunk372897 = require("./372897.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  return (0, i.e7)([s.default, l.ZP], () => {
    if (null == e) returnfalse;
    let t = s.default.getId();
    return (0, f.EY)(l.ZP.getMember(e, t))
  }, [e])
}

function E(e) {
  return (0, i.cj)([s.default, l.ZP, d.Z, c.Z], () => {
    let t = {
        nick: true,
        bio: true
      },
      n = d.Z.getGuildId(),
      r = null != e ? e : n,
      i = c.Z.getGuild(r);
    if (null == i || null == r) return t;
    let o = s.default.getId(),
      a = l.ZP.getMember(r, o),
      u = (0, f.Ow)(null == a ? true : a.flags);
    if (0 === u.size) return t;
    if (u.has(p.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
      if (null == e) {
        var _;
        t.nick = [m.intl.formatToPlainString(m.t.WBUh3N, {
          guildName: null != (_ = i.name) ? _ : ""
        })]
      } else t.nick = [m.intl.string(m.t.EPZCrK)];
    return u.has(p.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [m.intl.string(m.t.dZh1v7)]), t
  }, [e])
}

function b(e) {
  let {
    guildId: t,
    scrollPosition: n,
    analyticsLocation: s,
    analyticsLocations: l,
    openWithoutBackstack: d
  } = e, f = (0, i.e7)([c.Z], () => c.Z.getGuild(t), [t]), p = (0, i.e7)([u.Z], () => null != f && u.Z.can(_.Plq.CHANGE_NICKNAME, f), [f]);
  return [r.useCallback(() => {
    if (null == f) return;
    let e = _.oAB.PROFILE_CUSTOMIZATION,
      t = h.NB.GUILD;
    p ? (0, a.Fq)(f) : t = h.NB.USER_PROFILE, o.Z.open(e, t, {
      scrollPosition: n,
      analyticsLocation: s,
      analyticsLocations: l,
      openWithoutBackstack: d
    })
  }, [p, n, s, l, d, f]), p]
}