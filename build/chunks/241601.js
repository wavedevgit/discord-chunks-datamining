/** Chunk was on web.js **/
/** chunk id: 241601, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Ql: () => c,
  R_: () => l,
  _2: () => u
}), require("./539854.js"), require("./388685.js"), require("./35282.js");
var Chunk515149 = require("./515149.js"),
  Chunk362383 = require("./362383.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk252517 = require("./252517.js");
r = require("./330711.js").Z;
let l = (0, Chunk362383.F)((e, t) => ({
  isLoading: false,
  inProgressLocale: true,
  error: true,
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
  }
}));

function c(e) {
  return l.subscribe((t, n) => {
    null != n.inProgressLocale && null == t.inProgressLocale && null == t.error && e(n.inProgressLocale)
  })
}
async function u(e) {
  let t = l.getState();
  t.setLoadingStarted(e);
  let n = [];
  a.intl.setLocale(e), n.push(), n.push((async () => {
    await (0, s.f)(), await (0, i.loadAllMessagesInLocale)(e)
  })()), null != r && (r.setLocale(e), n.push(r.loadPromise)), n.push(d(e)), n.push(f(e)), n.push(_(e)), await Promise.all(n).catch(n => t.setLoadingFailed(n, e)), t.setLoadingSucceeded(e)
}
async function d(e) {
  let t = n(602473).q[e];
  if (null == t) return;
  let r = await t().default;
  {
    let {
      registerLocale: t
    } = n(352374);
    t(e, r)
  }
}
async function f(e) {
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