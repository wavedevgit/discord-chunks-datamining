/** Chunk was on web.js **/
/** chunk id: 171516, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => d,
  h: () => f
});
var Chunk442837 = require("./442837.js"),
  Chunk728345 = require("./728345.js"),
  Chunk592745 = require("./592745.js"),
  Chunk757266 = require("./757266.js"),
  Chunk77498 = require("./77498.js"),
  Chunk283595 = require("./283595.js"),
  Chunk417363 = require("./417363.js"),
  Chunk804739 = require("./804739.js");

function d(e) {
  return (0, r.e7)([l.Z, a.Z, c.Z, o.Z], () => null != e && (0, u.t)({
    LibraryApplicationStore: l.Z,
    LaunchableGameStore: a.Z,
    DispatchApplicationStore: c.Z,
    ConnectedAppsStore: o.Z,
    applicationId: e
  }), [e])
}

function f(e) {
  let {
    data: t
  } = (0, i.IX)(e), n = (0, r.e7)([s.Z], () => {
    var e;
    return null != t ? null != (e = s.Z.getOfficialGame(t)) ? e : s.Z.getGameByApplication(t) : null
  }, [t]), a = d(e), o = d(null == n ? true : n.id);
  return null != n && o ? n.id : a && null != e ? e : null
}