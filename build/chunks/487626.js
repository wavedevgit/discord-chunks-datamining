/** Chunk was on web.js **/
/** chunk id: 487626, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => c,
  w: () => l
}), require("./896048.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk403362 = require("./403362.js");

function l(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    a = i()(s.A.getMutableGuildChannelsForGuild(e)).values().groupBy("parent_id").value(),
    l = i()(n).map(e => e.isCategory() ? e.id : e.parent_id).filter(o.Vq).uniq().map(e => s.A.getChannel(e)).filter(o.Vq).sortBy("position").value(),
    c = new Set(l.map(e => e.id)),
    u = n.filter(e => !e.isCategory() && (null == e.parent_id || !c.has(e.parent_id)));
  for (let e of (u = i().sortBy(u, e => e.isGuildVocal() ? e.position + 1e4 : e.position), l)) {
    r || u.push(e);
    let s = t.has(e.id) ? a[e.id] : n.filter(t => t.parent_id === e.id);
    s = i().sortBy(null != s ? s : [], e => e.isGuildVocal() ? e.position + 1e4 : e.position), u.push(...s)
  }
  return u
}

function c(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return (0, a.yK)([s.A], () => {
    let r = Array.from(t).map(e => s.A.getChannel(e)).filter(o.Vq);
    return l(e, t, r, n)
  })
}