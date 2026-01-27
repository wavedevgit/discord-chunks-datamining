/** Chunk was on 93140 **/
/** chunk id: 81400, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EC: () => N,
  j8: () => p,
  uZ: () => O
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

function O(e) {
  return (0, i.bG)([a.default, s.Ay], () => {
    if (null == e) returnfalse;
    let t = a.default.getId();
    return (0, d.TR)(s.Ay.getMember(e, t))
  }, [e])
}

function N(e) {
  return (0, i.cf)([a.default, s.Ay, E.A, c.A], () => {
    let t = {
        nick: true,
        bio: true
      },
      n = E.A.getGuildId(),
      r = null != e ? e : n,
      i = c.A.getGuild(r);
    if (null == i || null == r) return t;
    let l = a.default.getId(),
      o = s.Ay.getMember(r, l),
      u = (0, d.wR)(null == o ? true : o.flags);
    if (0 === u.size) return t;
    if (u.has(A.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
      if (null == e) {
        var _;
        t.nick = [I.intl.formatToPlainString(I.t.WBUh3O, {
          guildName: null != (_ = i.name) ? _ : ""
        })]
      } else t.nick = [I.intl.string(I.t.EPZCrM)];
    return u.has(A.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [I.intl.string(I.t.dZh1vz)]), t
  }, [e])
}

function p(e) {
  let {
    guildId: t,
    scrollPosition: a,
    analyticsLocations: s
  } = e, E = (0, i.bG)([c.A], () => c.A.getGuild(t), [t]), d = (0, i.bG)([u.A], () => null != E && u.A.can(_.xBc.CHANGE_NICKNAME, E), [E]);
  return [r.useCallback(() => {
    if (null == E) return;
    let e = _.nc_.PROFILE_CUSTOMIZATION,
      t = T.Eq.GUILD;
    d ? (0, l.V2)(E) : t = T.Eq.USER_PROFILE;
    {
      let {
        openUserSettings: r
      } = n(840065);
      r(o.X.PROFILE_PANEL, {
        section: e,
        subsection: t,
        scrollPosition: a,
        analyticsLocations: s
      })
    }
  }, [d, a, s, E]), d]
}