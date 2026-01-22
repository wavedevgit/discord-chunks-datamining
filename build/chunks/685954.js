/** Chunk was on web.js **/
/** chunk id: 685954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./321073.js"), require("./896048.js"), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk155718 = require("./155718.js"),
  Chunk594061 = require("./594061.js"),
  Chunk723702 = require("./723702.js"),
  Chunk847381 = require("./847381.js");

function l(e) {
  return a.bW.loadIfNecessary(), r.useMemo(() => {
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
    let [r] = e, a = null == (n = r.application.embeddedActivityConfig) || null == (t = n.client_platform_config[(0, o.A)((0, s.getOS)())]) ? true : t.label_type;
    return !!a && (a === i.Hr.NEW || a === i.Hr.UPDATED)
  }).forEach(e => {
    let [t, r] = e, i = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : r;
    if (i < r) {
      let e = n[r];
      n.splice(r, 1), n = [...n.slice(0, i), e, ...n.slice(i)]
    }
  }), n
}