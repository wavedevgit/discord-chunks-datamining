/** Chunk was on web.js **/
/** chunk id: 11057, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Av: () => d,
  I: () => u,
  QO: () => h,
  hs: () => c
}), require("./321073.js"), require("./896048.js"), require("./747238.js");
var Chunk932433 = require("./932433.js"),
  Chunk113309 = require("./113309.js"),
  Chunk265690 = require("./265690.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk815680 = require("./815680.js");
r = require("./855522.js").A;
let c = (0, Chunk265690.h)((e, t) => ({
  isLoading: false,
  inProgressLocale: true,
  error: true,
  localeData: a.default,
  setLoadingStarted: t => e({
    isLoading: true,
    inProgressLocale: t
  }),
  setLoadingSucceeded: n => {
    let {
      inProgressLocale: r
    } = t();
    r === n && e({
      isLoading: false,
      inProgressLocale: true,
      error: true
    })
  },
  setLoadingFailed: (n, r) => {
    let {
      inProgressLocale: i
    } = t();
    i === r && e({
      isLoading: false,
      inProgressLocale: true,
      error: n
    })
  },
  setLocaleData: t => {
    e({
      localeData: t
    })
  }
}));

function u(e) {
  return c.subscribe((t, n) => {
    null == n.inProgressLocale || null != t.inProgressLocale || null == t.error && e(n.inProgressLocale)
  })
}
async function d(e) {
  let t = c.getState();
  t.setLoadingStarted(e);
  let n = [];
  o.intl.setLocale(e), n.push(), n.push((async () => {
    await (0, l.O)(), await (0, i.loadAllMessagesInLocale)(e)
  })()), null != r && (r.setLocale(e), n.push(r.loadPromise)), n.push(f(e)), n.push(p(e)), n.push(_(e)), await Promise.all(n).catch(n => t.setLoadingFailed(n, e)), t.setLoadingSucceeded(e)
}
async function f(e) {
  let t = c.getState(),
    r = n(873382).v[e];
  if (null == r) return void t.setLocaleData(a.default);
  let i = await r();
  {
    let {
      registerLocale: t
    } = n(77967);
    t(e, i)
  }
  t.setLocaleData(i)
}
async function p(e) {
  let t = n(608998).W[e];
  null != t && await t();
  let r = [],
    i = ("no" === e ? "nb" : e).split("-");
  for (; i.length > 0;) r.push(i.join("-")), i.pop();
  r.push("en-US"), n(989349).locale(r)
}

function _(e) {
  let {
    setTags: t
  } = n(728458).A;
  return t({
    locale: e
  }), Promise.resolve()
}

function h() {
  let e = c(e => e.localeData);
  return null != e ? e : a.default
}