/** Chunk was on web.js **/
/** chunk id: 382807, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk123791 = require("./123791.js"),
  Chunk627363 = require("./627363.js"),
  Chunk985018 = require("./985018.jsx");

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
  } = (0, o.YY)(t);
  return null == i ? null : (0, r.jsx)(f, {
    app: i,
    guildId: n
  })
}

function f(e) {
  let {
    app: t,
    guildId: o
  } = e;
  (0, s.C)(t.id);
  let c = i.useCallback(() => {
    (0, a.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("33563"), n.e("80212")]).then(n.bind(n, 719847));
      return n => (0, r.jsx)(e, u({
        appId: t.id,
        guildId: o
      }, n))
    })
  }, [t, o]);
  return (0, r.jsx)(a.Button, {
    size: "sm",
    onClick: c,
    icon: a.Uzv,
    text: l.intl.format(l.t.XDRjs5, {
      appName: t.name
    })
  })
}