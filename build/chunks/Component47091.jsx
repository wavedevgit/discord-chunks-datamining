/** Chunk was on web.js **/
/** chunk id: 47091, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk320582 = require("./320582.js"),
  Chunk298213 = require("./298213.js"),
  Chunk51144 = require("./51144.js"),
  Chunk749302 = require("./749302.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    user: t
  } = e, d = (0, o.ML)(t.id), _ = l.ZP.useName(t), h = i.useCallback(e => {
    let {
      id: i,
      name: o
    } = e;
    (0, a.ZDy)(async () => {
      let {
        ConfirmModal: e
      } = await Promise.resolve().then(n.bind(n, 481060));
      return n => (0, r.jsx)(e, p(f({
        header: u.intl.formatToPlainString(u.t["GOFk9+"], {
          name: _
        }),
        confirmText: u.intl.string(u.t["cY+Oob"]),
        cancelText: u.intl.string(u.t["ETE/oC"]),
        onConfirm: () => s.Z.removeFriend({
          userId: t.id,
          applicationId: i,
          location: "Context Menu"
        })
      }, n), {
        children: (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          children: u.intl.format(u.t.dsU5bl, {
            name: _,
            gameName: o
          })
        })
      }))
    })
  }, [_, t]);
  return (0, c.Z)({
    user: t,
    gameRelationships: d,
    menuItemId: "remove-game-friend",
    label: u.intl.string(u.t.RLcE6x),
    onClick: h,
    color: "danger"
  })
}