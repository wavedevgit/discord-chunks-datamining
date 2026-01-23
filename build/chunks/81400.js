/** Chunk was on web.js **/
/** chunk id: 81400, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EC: () => E,
  j8: () => y,
  uZ: () => g
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

function g(e) {
  return (0, i.bG)([o.default, l.Ay], () => {
    if (null == e) returnfalse;
    let t = o.default.getId();
    return (0, f.TR)(l.Ay.getMember(e, t))
  }, [e])
}

function E(e) {
  return (0, i.cf)([o.default, l.Ay, d.A, c.A], () => {
    let t = {
        nick: true,
        bio: true
      },
      n = d.A.getGuildId(),
      r = null != e ? e : n,
      i = c.A.getGuild(r);
    if (null == i || null == r) return t;
    let a = o.default.getId(),
      s = l.Ay.getMember(r, a),
      u = (0, f.wR)(null == s ? true : s.flags);
    if (0 === u.size) return t;
    if (u.has(_.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
      if (null == e) {
        var p;
        t.nick = [m.intl.formatToPlainString(m.t.WBUh3O, {
          guildName: null != (p = i.name) ? p : ""
        })]
      } else t.nick = [m.intl.string(m.t.EPZCrM)];
    return u.has(_.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [m.intl.string(m.t.dZh1vz)]), t
  }, [e])
}

function y(e) {
  let {
    guildId: t,
    scrollPosition: o,
    analyticsLocations: l
  } = e, d = (0, i.bG)([c.A], () => c.A.getGuild(t), [t]), f = (0, i.bG)([u.A], () => null != d && u.A.can(p.xBc.CHANGE_NICKNAME, d), [d]);
  return [r.useCallback(() => {
    if (null == d) return;
    let e = p.nc_.PROFILE_CUSTOMIZATION,
      t = h.Eq.GUILD;
    f ? (0, a.V2)(d) : t = h.Eq.USER_PROFILE;
    {
      let {
        openUserSettings: r
      } = n(840065);
      r(s.X.PROFILE_PANEL, {
        section: e,
        subsection: t,
        scrollPosition: o,
        analyticsLocations: l
      })
    }
  }, [f, o, l, d]), f]
}