/** Chunk was on web.js **/
/** chunk id: 463421, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p,
  _: () => f
}), require("./388685.js"), require("./997841.js");
var Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk981631 = require("./981631.js");
let u = new Set([Chunk981631.M7m.XBOX, Chunk981631.M7m.PS4, Chunk981631.M7m.PS5]);

function d(e) {
  return e.filter(e => {
    var t, n;
    return null != e.application_id && e.type === c.IIU.PLAYING && !(0, i.yE)(null != (t = e.flags) ? t : 0, c.xjy.EMBEDDED) && !u.has(null != (n = e.platform) ? n : "")
  })
}

function f(e, t) {
  return d(o.default.getId() === e ? l.Z.getActivities() : s.Z.getActivities(e, t))
}

function p(e, t) {
  let n = (0, a.e7)([l.Z, s.Z, o.default], () => o.default.getId() === e ? l.Z.getActivities() : s.Z.getActivities(e, t));
  return r.useMemo(() => d(n), [n])
}