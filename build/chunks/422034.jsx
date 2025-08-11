/** Chunk was on web.js **/
/** chunk id: 422034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => g,
  Z: () => m
}), require("./583741.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk357355 = require("./357355.js"),
  Chunk182294 = require("./182294.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk556921 = require("./556921.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e) {
  let {
    smallerText: t,
    className: n,
    textColor: o,
    isApplicationHome: c,
    enablePremiumBrandRefresh: p
  } = e, h = (0, s.e7)([u.Z], () => u.Z.affinities.slice(0, 3).reverse()), m = h.map((e, t) => <g affinity={e} applyMask={t !== h.length - 1} size={p ? d.EF.SIZE_24 : d.EF.SIZE_32} />), E = e => null != e.globalName ? e.globalName : e.username, b = i.useMemo(() => 3 === h.length ? f.intl.formatToPlainString(f.t.c7ETJC, {
    username: E(h[2])
  }) : 2 === h.length ? f.intl.formatToPlainString(f.t.st8Rh4, {
    username: E(h[1]),
    otherUsername: E(h[0])
  }) : 1 === h.length ? f.intl.formatToPlainString(f.t.dpjXPD, {
    username: E(h[0])
  }) : "", [h]);
  if (0 === h.length) return null;

  function y() {
    return p ? <l.Text variant={"text-sm/medium"} color={o}>{b}</l.Text> : t || c ? <l.Text variant={c ? "text-sm/normal" : "text-lg/medium"} color={o}>{b}</l.Text> : <l.X6q variant={"heading-xl/medium"} color={o}>{b}</l.X6q>
  }
  return <div className={a()(p ? _.premiumBrandRefreshContainer : _.container, n, {
      [_.v2Container]: !p && c
    })}>{<div className={_.iconContainer}>{m}</div>}{<div className={_.textContainer}><y /></div>}</div>
}

function g(e) {
  let {
    affinity: t,
    applyMask: n,
    size: i
  } = e, {
    avatarSrc: o,
    eventHandlers: s
  } = (0, c.Z)({
    userId: null == t ? true : t.id,
    size: i,
    animateOnHover: true
  });
  return <l.qEK{...h({
    className: a()(_.icon, {
      [_.mask]: n
    }),
    src: o,
    "aria-label": t.username,
    size: i
  }, s)} />
}