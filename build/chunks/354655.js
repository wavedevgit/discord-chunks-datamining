/** Chunk was on 91053 **/
/** chunk id: 354655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./539854.js");
var Chunk876215 = require("./876215.js"),
  Chunk935302 = require("./935302.js");

function l(e) {
  let {
    entries: t
  } = e, {
    enabled: n
  } = i.C.useConfig({
    location: "useDedupeFortnite"
  });
  if (null == t || !n || 0 === t.length) return t;
  let l = [],
    a = false,
    s = false;
  for (let e of t) {
    if (e.content_type === r.s.TOP_GAME || e.content_type === r.s.PLAYED_GAME || e.content_type === r.s.LAUNCHED_ACTIVITY) {
      if ("1402418703554842694" === e.extra.application_id) {
        if (a) continue;
        a = true
      }
      if ("1389986893399199907" === e.extra.application_id) {
        if (s) continue;
        s = true
      }
    }
    l.push(e)
  }
  return a || s ? l : t
}