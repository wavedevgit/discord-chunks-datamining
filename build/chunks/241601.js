/** Chunk was on web.js **/
/** chunk id: 241601, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Ql: () => u,
  R_: () => c,
  _2: () => d,
  jY: () => m
}), require("./539854.js"), require("./388685.js"), require("./35282.js");
var Chunk354012 = require("./354012.js"),
  Chunk150924 = require("./150924.js"),
  Chunk748521 = require("./748521.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk252517 = require("./252517.js");
r = require("./330711.js").Z;
let c = (0, Chunk748521.F)((e, t) => ({
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
    null != n.inProgressLocale && null == t.inProgressLocale && null == t.error && e(n.inProgressLocale)
  })
}
async function d(e) {
  let t = c.getState();
  t.setLoadingStarted(e);
  let n = [];
  s.intl.setLocale(e), n.push(), n.push((async () => {
    await (0, l.f)(), await (0, i.loadAllMessagesInLocale)(e)
  })()), null != r && (r.setLocale(e), n.push(r.loadPromise)), n.push(f(e)), n.push(p(e)), n.push(_(e)), await Promise.all(n).catch(n => t.setLoadingFailed(n, e)), t.setLoadingSucceeded(e)
}
async function f(e) {
  let t = c.getState(),
    r = n(602473).q[e];
  if (null == r) return void t.setLocaleData(a.default);
  let i = await r();
  {
    let {
      registerLocale: t
    } = n(74570);
    t(e, i)
  }
  t.setLocaleData(i)
}
async function p(e) {
  let t = n(352968).y[e];
  null != t && await t();
  let r = [],
    i = ("no" === e ? "nb" : e).split("-");
  for (; i.length > 0;) r.push(i.join("-")), i.pop();
  r.push("en-US"), n(913527).locale(r)
}

function _(e) {
  let {
    setTags: t
  } = n(960048).Z;
  return t({
    locale: e
  }), Promise.resolve()
}

function m() {
  let e = c(e => e.localeData);
  return null != e ? e : a.default
}