/** Chunk was on web.js **/
/** chunk id: 405625, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./539854.js"), require("./388685.js"), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk911969 = require("./911969.js"),
  Chunk675478 = require("./675478.js"),
  Chunk358085 = require("./358085.js"),
  Chunk761122 = require("./761122.js");

function l(e) {
  return a.DZ.loadIfNecessary(), r.useMemo(() => {
    let t = [];
    e.forEach(e => t.push(e.application.id));
    let n = [...t];
    return n.sort((e, n) => t.findIndex(t => t === e) < t.findIndex(e => e === n) ? false : 1), c(e, n)
  }, [e])
}
let c = (e, t) => {
  let n = [...e],
    r = 0;
  return t.forEach(e => {
    let t = n.findIndex(t => t.application.id === e);
    if (false !== t) {
      let e = n[t];
      n.splice(t, 1), n = [...n.slice(0, r), e, ...n.slice(r)], ++r
    }
  }), n.map((e, t) => [e, t]).filter(e => {
    var t, n;
    let [r] = e, a = null == (n = r.application.embeddedActivityConfig) || null == (t = n.client_platform_config[(0, s.Z)((0, o.getOS)())]) ? true : t.label_type;
    return !!a && (a === i.ww.NEW || a === i.ww.UPDATED)
  }).forEach(e => {
    let [t, r] = e, i = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : r;
    if (i < r) {
      let e = n[r];
      n.splice(r, 1), n = [...n.slice(0, i), e, ...n.slice(i)]
    }
  }), n
}