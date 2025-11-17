/** Chunk was on web.js **/
/** chunk id: 463421, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _,
  _: () => f
}), require("./388685.js"), require("./997841.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk630388 = require("./630388.js"),
  Chunk981631 = require("./981631.js");
let u = new Set([Chunk981631.M7m.XBOX, Chunk981631.M7m.PS4, Chunk981631.M7m.PS5]);

function d(e) {
  return e.filter(e => {
    var t, n;
    return null != e.application_id && e.type === c.IIU.PLAYING && !(0, l.yE)(null != (t = e.flags) ? t : 0, c.xjy.EMBEDDED) && !u.has(null != (n = e.platform) ? n : "")
  })
}

function f(e, t) {
  return d(a.default.getId() === e ? s.Z.getActivities() : o.Z.getActivities(e, t))
}

function _(e, t) {
  let n = (0, i.e7)([s.Z, o.Z, a.default], () => a.default.getId() === e ? s.Z.getActivities() : o.Z.getActivities(e, t));
  return r.useMemo(() => d(n), [n])
}