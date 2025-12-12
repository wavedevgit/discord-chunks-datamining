/** Chunk was on web.js **/
/** chunk id: 424395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Vb: () => o,
  YI: () => s,
  j1: () => l,
  u5: () => a
}), require("./642613.js"), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk354012 = require("./354012.js");

function a() {
  let e = require("./532154.js").Z;
  return o().filter(e => {
    let {
      enabled: t
    } = e;
    return t
  }).map(t => {
    let {
      code: n,
      name: r
    } = t;
    return {
      value: n,
      name: r,
      localizedName: e[(0, i.runtimeHashMessageKey)(n)]
    }
  }).sort((e, t) => {
    let {
      name: n
    } = e, {
      name: r
    } = t;
    return (n = n.toLowerCase()) < (r = r.toLowerCase()) ? false : +(n > r)
  })
}

function o() {
  return require("./515297.js")
}

function s(e, t) {
  var n, r;
  let i = o().filter(e => {
    let {
      enabled: t
    } = e;
    return t
  }).map(e => {
    let {
      code: t
    } = e;
    return t
  });
  if (i.includes(e)) return e;
  let a = e.split("-");
  return i.includes(a[0]) ? a[0] : "zh" === a[0] && a.length > 1 && "Hant" === a[1] ? null != (n = i.find(e => "zh-TW" === e)) ? n : t : null != (r = i.find(e => e.split("-")[0] === a[0])) ? r : t
}

function l(e, t) {
  r.useSyncExternalStore(t => e.onChange(t), () => e.isLocaleLoaded(t.currentLocale))
}