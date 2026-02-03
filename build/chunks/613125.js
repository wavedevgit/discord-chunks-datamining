/** Chunk was on web.js **/
/** chunk id: 613125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk430363 = require("./430363.js"),
  Chunk4149 = require("./4149.js"),
  Chunk823854 = require("./823854.js");

function c(e) {
  return null
}

function u(e) {
  var t, n;
  let {
    customStatusActivity: u,
    statusOwnerId: d,
    location: f
  } = e, p = r.useMemo(() => null == u ? null : (0, s.a)(u), [u]), _ = null == p || null == d ? null : d === p.senderId ? p.targetId : p.senderId, h = (0, i.bG)([a.default], () => null != _ ? a.default.getUser(_) : null, [_]), m = (0, i.bG)([l.A], () => null == d ? null : l.A.getProgressForUserId(d), [d]);
  if (!(0, o.Uk)(f)) return {
    presence: null,
    progress: null,
    statusTextOverride: null
  };
  let g = c({
    activity: u,
    presence: p,
    statusOwnerId: d,
    otherUserName: null != (t = null != (n = null == h ? true : h.globalName) ? n : null == h ? true : h.username) ? t : null,
    progress: m
  });
  return {
    presence: p,
    progress: m,
    statusTextOverride: g
  }
}