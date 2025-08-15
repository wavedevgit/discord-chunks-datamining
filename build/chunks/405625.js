/** Chunk was on 35755 **/
/** chunk id: 405625, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./539854.js"), require("./388685.js"), require("./642613.js");
var Chunk647438 = require("./647438.js"),
  Chunk911969 = require("./911969.js"),
  Chunk675478 = require("./675478.js"),
  Chunk358085 = require("./358085.js"),
  Chunk761122 = require("./761122.js");

function s(e) {
  return r.DZ.loadIfNecessary(), l.useMemo(() => {
    let t = [];
    e.forEach(e => t.push(e.application.id));
    let n = [...t];
    return n.sort((e, n) => t.findIndex(t => t === e) < t.findIndex(e => e === n) ? false : 1), c(e, n)
  }, [e])
}
let c = (e, t) => {
  let n = [...e],
    l = 0;
  return t.forEach(e => {
    let t = n.findIndex(t => t.application.id === e);
    if (false !== t) {
      let e = n[t];
      n.splice(t, 1), n = [...n.slice(0, l), e, ...n.slice(l)], ++l
    }
  }), n.map((e, t) => [e, t]).filter(e => {
    var t, n;
    let [l] = e, r = null == (n = l.application.embeddedActivityConfig) || null == (t = n.client_platform_config[(0, o.Z)((0, a.getOS)())]) ? true : t.label_type;
    return !!r && (r === i.ww.NEW || r === i.ww.UPDATED)
  }).forEach(e => {
    let [t, l] = e, i = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : l;
    if (i < l) {
      let e = n[l];
      n.splice(l, 1), n = [...n.slice(0, i), e, ...n.slice(i)]
    }
  }), n
}