/** Chunk was on web.js **/
/** chunk id: 798505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk926571 = require("./926571.js"),
  Chunk670455 = require("./670455.js"),
  Chunk985018 = require("./985018.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t, n) {
  var r;
  let {
    rating: o,
    problem: l,
    feedback: c
  } = n;
  (0, a.A)({
    problem: null != (r = null == l ? true : l.value) ? r : null,
    summary: e,
    feedback: c,
    guildId: t.guild_id,
    channelId: t.id,
    location: "Summary divider",
    rating: o
  }), (0, i.showToast)((0, i.createToast)(s.intl.string(s.t["d9+vQ8"]), i.ToastType.SUCCESS))
}

function p(e) {
  let {
    summary: t,
    channel: a,
    rating: s
  } = e;
  null != t && (s === o.P0.BAD ? (0, i.mMO)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("16833"), n.e("26484"), n.e("3489")]).then(n.bind(n, 225315));
    return n => (0, r.jsx)(e, d(c({}, n), {
      onSubmit: e => f(t, a, e),
      startRating: s
    }))
  }) : f(t, a, {
    rating: s,
    problem: null,
    feedback: "",
    dontShowAgain: false
  }))
}