/** Chunk was on web.js **/
/** chunk id: 584057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => f
});
var Chunk442837 = require("./442837.js"),
  Chunk620662 = require("./620662.js"),
  Chunk841784 = require("./841784.js"),
  Chunk592745 = require("./592745.js"),
  Chunk757266 = require("./757266.js"),
  Chunk283595 = require("./283595.js"),
  Chunk417363 = require("./417363.js"),
  Chunk804739 = require("./804739.js"),
  Chunk981631 = require("./981631.js");

function f(e, t) {
  var n;
  let f = null != (n = null == t ? true : t.applicationId) ? n : null == e ? true : e.application_id,
    _ = null != t || (0, o.Z)(e),
    p = (0, r.e7)([l.Z, a.Z, c.Z, s.Z], () => _ || null != f && (0, u.t)({
      LibraryApplicationStore: l.Z,
      LaunchableGameStore: a.Z,
      DispatchApplicationStore: c.Z,
      ConnectedAppsStore: s.Z,
      applicationId: f
    }), [f, _]),
    h = (0, i.Z)(e, d.xjy.JOIN) || _;
  return !(_ && null == t && (null == e || !(0, i.Z)(e, d.xjy.CONTEXTLESS))) && null != f && h && p
}