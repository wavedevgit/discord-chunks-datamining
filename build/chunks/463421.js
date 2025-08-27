/** Chunk was on web.js **/
/** chunk id: 463421, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d,
  _: () => u
}), require("./997841.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk630388 = require("./630388.js"),
  Chunk981631 = require("./981631.js");

function u(e, t) {
  return (a.default.getId() === e ? s.Z.getActivities() : o.Z.getActivities(e, t)).filter(e => {
    var t;
    return null != e.application_id && e.type === c.IIU.PLAYING && !(0, l.yE)(null != (t = e.flags) ? t : 0, c.xjy.EMBEDDED)
  })
}

function d(e, t) {
  let n = (0, i.e7)([s.Z, o.Z, a.default], () => a.default.getId() === e ? s.Z.getActivities() : o.Z.getActivities(e, t));
  return r.useMemo(() => n.filter(e => {
    var t;
    return null != e.application_id && e.type === c.IIU.PLAYING && !(0, l.yE)(null != (t = e.flags) ? t : 0, c.xjy.EMBEDDED)
  }), [n])
}