/** Chunk was on web.js **/
/** chunk id: 171516, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => f,
  h: () => _
});
var Chunk442837 = require("./442837.js"),
  Chunk783097 = require("./783097.js"),
  Chunk728345 = require("./728345.js"),
  Chunk592745 = require("./592745.js"),
  Chunk757266 = require("./757266.js"),
  Chunk77498 = require("./77498.js"),
  Chunk283595 = require("./283595.js"),
  Chunk417363 = require("./417363.js"),
  Chunk804739 = require("./804739.js");

function f(e) {
  let {
    data: t
  } = (0, a.IX)(e), n = null != t && (0, i.ye)(t);
  return (0, r.e7)([c.Z, o.Z, u.Z, s.Z], () => !!n || null != e && (0, d.t)({
    LibraryApplicationStore: c.Z,
    LaunchableGameStore: o.Z,
    DispatchApplicationStore: u.Z,
    ConnectedAppsStore: s.Z,
    applicationId: e
  }), [e, n])
}

function _(e) {
  let {
    data: t
  } = (0, a.IX)(e), n = (0, r.e7)([l.Z], () => {
    var e;
    return null != t ? null != (e = l.Z.getOfficialGame(t)) ? e : l.Z.getGameByApplication(t) : null
  }, [t]), i = f(e), o = f(null == n ? true : n.id);
  return null != n && o ? n.id : i && null != e ? e : null
}