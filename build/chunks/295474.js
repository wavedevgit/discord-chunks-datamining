/** Chunk was on 40390 **/
/** chunk id: 295474, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Ux: () => I,
  gS: () => x,
  ww: () => A
}), require("./997841.js");
var Chunk73800 = require("./73800.js"),
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

function I(t) {
  return (0, r.e7)([s.default, d.ZP], () => {
    if (null == t) returnfalse;
    let n = s.default.getId();
    return (0, _.EY)(d.ZP.getMember(t, n))
  }, [t])
}

function x(t) {
  return (0, r.cj)([s.default, d.ZP, c.Z, o.Z], () => {
    let n = {
        nick: true,
        bio: true
      },
      e = c.Z.getGuildId(),
      i = null != t ? t : e,
      r = o.Z.getGuild(i);
    if (null == r || null == i) return n;
    let l = s.default.getId(),
      a = d.ZP.getMember(i, l),
      u = (0, _.Ow)(null == a ? true : a.flags);
    if (0 === u.size) return n;
    if (u.has(g.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
      if (null == t) {
        var h;
        n.nick = [N.intl.formatToPlainString(N.t.WBUh3N, {
          guildName: null != (h = r.name) ? h : ""
        })]
      } else n.nick = [N.intl.string(N.t.EPZCrK)];
    return u.has(g.q.AUTOMOD_QUARANTINED_BIO) && (n.bio = [N.intl.string(N.t.dZh1v7)]), n
  }, [t])
}

function A(t) {
  let {
    guildId: n,
    scrollPosition: e,
    analyticsLocation: s,
    analyticsLocations: d,
    openWithoutBackstack: c
  } = t, _ = (0, r.e7)([o.Z], () => o.Z.getGuild(n), [n]), g = (0, r.e7)([u.Z], () => null != _ && u.Z.can(h.Plq.CHANGE_NICKNAME, _), [_]);
  return [i.useCallback(() => {
    if (null == _) return;
    let t = h.oAB.PROFILE_CUSTOMIZATION,
      n = f.NB.GUILD;
    g ? (0, a.Fq)(_) : n = f.NB.USER_PROFILE, l.Z.open(t, n, {
      scrollPosition: e,
      analyticsLocation: s,
      analyticsLocations: d,
      openWithoutBackstack: c
    })
  }, [g, e, s, d, c, _]), g]
}