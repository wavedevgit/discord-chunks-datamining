/** Chunk was on web.js **/
/** chunk id: 226536, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Be: () => a,
  kG: () => o,
  kt: () => s,
  tp: () => l
}), require("./638769.js"), require("./747238.js");
var Chunk64700 = require("./64700.js"),
  Chunk932433 = require("./932433.js");

function a() {
  let e = n(70603).A;
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
  return n(416678)
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
  return i.includes(a[0]) ? a[0] : "zh" === a[0] && a.length > 1 && "Hant" === a[1] ? null != (r = i.find(e => "zh-TW" === e)) ? r : t : null != (n = i.find(e => e.split("-")[0] === a[0])) ? n : t
}

function l(e, t) {
  r.useSyncExternalStore(t => e.onChange(t), () => e.isLocaleLoaded(t.currentLocale))
}