/** Chunk was on 74724 **/
/** chunk id: 81400, original params: t,l,n (module,exports,require) **/
require.d(exports, {
  EC: () => I,
  j8: () => O,
  uZ: () => N
}), require("./938796.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk159001 = require("./159001.js"),
  Chunk780964 = require("./780964.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk967198 = require("./967198.js"),
  Chunk229527 = require("./229527.js"),
  Chunk652215 = require("./652215.js"),
  Chunk340837 = require("./340837.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx");

function N(t) {
  return (0, e.bG)([A.default, a.Ay], () => {
    if (null == t) returnfalse;
    let l = A.default.getId();
    return (0, s.TR)(a.Ay.getMember(t, l))
  }, [t])
}

function I(t) {
  return (0, e.cf)([A.default, a.Ay, f.A, d.A], () => {
    let l = {
        nick: true,
        bio: true
      },
      n = f.A.getGuildId(),
      i = null != t ? t : n,
      e = d.A.getGuild(i);
    if (null == e || null == i) return l;
    let u = A.default.getId(),
      r = a.Ay.getMember(i, u),
      o = (0, s.wR)(null == r ? true : r.flags);
    if (0 === o.size) return l;
    if (o.has(_.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
      if (null == t) {
        var E;
        l.nick = [c.intl.formatToPlainString(c.t.WBUh3O, {
          guildName: null != (E = e.name) ? E : ""
        })]
      } else l.nick = [c.intl.string(c.t.EPZCrM)];
    return o.has(_.D.AUTOMOD_QUARANTINED_BIO) && (l.bio = [c.intl.string(c.t.dZh1vz)]), l
  }, [t])
}

function O(t) {
  let {
    guildId: l,
    scrollPosition: A,
    analyticsLocations: a
  } = t, f = (0, e.bG)([d.A], () => d.A.getGuild(l), [l]), s = (0, e.bG)([o.A], () => null != f && o.A.can(E.xBc.CHANGE_NICKNAME, f), [f]);
  return [i.useCallback(() => {
    if (null == f) return;
    let t = E.nc_.PROFILE_CUSTOMIZATION,
      l = g.Eq.GUILD;
    s ? (0, u.V2)(f) : l = g.Eq.USER_PROFILE;
    {
      let {
        openUserSettings: i
      } = n(840065);
      i(r.X.PROFILE_PANEL, {
        section: t,
        subsection: l,
        scrollPosition: A,
        analyticsLocations: a
      })
    }
  }, [s, A, a, f]), s]
}