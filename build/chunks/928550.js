/** Chunk was on web.js **/
/** chunk id: 928550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => d,
  d: () => f
});
var Chunk311907 = require("./311907.js"),
  Chunk627363 = require("./627363.js"),
  Chunk651743 = require("./651743.js"),
  Chunk134861 = require("./134861.js"),
  Chunk760751 = require("./760751.js"),
  Chunk189081 = require("./189081.js"),
  Chunk194871 = require("./194871.js"),
  Chunk144914 = require("./144914.js");

function d(e) {
  return (0, r.bG)([l.A, a.A, c.A, o.A], () => null != e && (0, u.A)({
    LibraryApplicationStore: l.A,
    LaunchableGameStore: a.A,
    DispatchApplicationStore: c.A,
    ConnectedAppsStore: o.A,
    applicationId: e
  }), [e])
}

function f(e) {
  let {
    data: t
  } = (0, i.YY)(e), n = (0, r.bG)([s.A], () => {
    var e;
    return null != t ? null != (e = s.A.getOfficialGame(t)) ? e : s.A.getGameByApplication(t) : null
  }, [t]), a = d(e), o = d(null == n ? true : n.id);
  return null != n && o ? n.id : a && null != e ? e : null
}