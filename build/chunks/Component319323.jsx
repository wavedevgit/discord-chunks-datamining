/** Chunk was on web.js **/
/** chunk id: 319323, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk283836 = require("./283836.js"),
  Chunk728345 = require("./728345.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, {
    data: i
  } = (0, s.IX)(t);
  return null == i ? null : (0, r.jsx)(f, {
    app: i,
    guildId: n
  })
}

function f(e) {
  let {
    app: t,
    guildId: s
  } = e;
  (0, a.q)(t.id);
  let c = i.useCallback(() => {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("77803"), n.e("42124")]).then(n.bind(n, 7225));
      return n => (0, r.jsx)(e, u({
        appId: t.id,
        guildId: s
      }, n))
    })
  }, [t, s]);
  return (0, r.jsx)(o.Button, {
    size: "sm",
    onClick: c,
    icon: o.QJP,
    text: l.intl.format(l.t.XDRjs5, {
      appName: t.name
    })
  })
}