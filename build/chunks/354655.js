/** Chunk was on 63962 **/
/** chunk id: 354655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js"), require("./539854.js");
var Chunk876215 = require("./876215.js"),
  Chunk389147 = require("./389147.js"),
  Chunk60902 = require("./60902.js"),
  Chunk935302 = require("./935302.js");

function s(e) {
  let {
    entries: t
  } = e, {
    enabled: n
  } = a.C.useConfig({
    location: "useDedupeFortnite"
  }), {
    data: s
  } = (0, l.K)(i.B);
  if (null == t || !n || 0 === t.length || null == s) return t;
  let o = [],
    c = false,
    d = false;
  for (let e of t) {
    if (e.content_type === r.s.TOP_GAME || e.content_type === r.s.PLAYED_GAME || e.content_type === r.s.LAUNCHED_ACTIVITY) {
      if (e.extra.application_id === s.fortniteId) {
        if (c) continue;
        c = true
      }
      if (s.isFortniteTrial(e.extra.application_id)) {
        if (d) continue;
        d = true
      }
    }
    o.push(e)
  }
  return c || d ? o : t
}