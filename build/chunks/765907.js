/** Chunk was on web.js **/
/** chunk id: 765907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => f,
  Z: () => d
}), require("./472816.js"), require("./794429.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk931847 = require("./931847.js"),
  Chunk836197 = require("./836197.js"),
  Chunk687158 = require("./687158.js"),
  Chunk823379 = require("./823379.js"),
  Chunk699955 = require("./699955.js"),
  Chunk812797 = require("./812797.js"),
  Chunk582113 = require("./582113.js");

function d(e) {
  let {
    displayProfile: t,
    location: n
  } = e, o = (0, l.cZ)({
    location: n
  }), d = r.useMemo(() => (null == t ? true : t.userId) != null ? [t.userId] : [], [t]), f = (0, c.VO)({
    gameIds: u.RI,
    userIds: d
  }), p = (0, c.zc)({
    gameIds: u.RI,
    userIds: d
  }), _ = (0, c.MM)({
    userIds: d,
    guildIdsWithGameStores: u.$Y
  }), m = r.useMemo(() => {
    if ((null == t ? true : t.widgets) == null) returnfalse;
    let e = new Set(null == t ? true : t.widgets.map(e => e instanceof a.zy ? e.games.map(e => e.applicationId) : e instanceof i.q ? e.applicationId : true).filter(s.lm).flat());
    for (let t of u.RI)
      if (e.has(t)) returntrue;
    returnfalse
  }, [null == t ? true : t.widgets]);
  return (null == t ? true : t.application) == null && o && (f || p || _ || m)
}

function f(e) {
  let {
    userId: t,
    location: n
  } = e;
  return d({
    displayProfile: (0, o.ZP)(t),
    location: n
  })
}