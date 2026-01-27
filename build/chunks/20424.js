/** Chunk was on web.js **/
/** chunk id: 20424, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d,
  c: () => f
}), require("./864466.js"), require("./443073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk633075 = require("./633075.js"),
  Chunk289173 = require("./289173.js"),
  Chunk950191 = require("./950191.js"),
  Chunk403362 = require("./403362.js"),
  Chunk916023 = require("./916023.js"),
  Chunk501838 = require("./501838.js"),
  Chunk188275 = require("./188275.js");

function d(e) {
  let {
    displayProfile: t,
    location: n
  } = e, o = (0, l.kt)({
    location: n
  }), d = r.useMemo(() => (null == t ? true : t.userId) != null ? [t.userId] : [], [t]), f = (0, c.gT)({
    gameIds: u.sQ,
    userIds: d
  }), p = (0, c.K6)({
    gameIds: u.sQ,
    userIds: d
  }), _ = (0, c.l1)({
    userIds: d,
    guildIdsWithGameStores: u.tC
  }), h = r.useMemo(() => {
    if ((null == t ? true : t.widgets) == null) returnfalse;
    let e = new Set(null == t ? true : t.widgets.map(e => e instanceof a.Yy ? e.games.map(e => e.applicationId) : e instanceof i.R ? e.applicationId : true).filter(s.Vq).flat());
    for (let t of u.sQ)
      if (e.has(t)) returntrue;
    returnfalse
  }, [null == t ? true : t.widgets]);
  return (null == t ? true : t.application) == null && o && (f || p || _ || h)
}

function f(e) {
  let {
    userId: t,
    location: n
  } = e;
  return d({
    displayProfile: (0, o.Ay)(t),
    location: n
  })
}