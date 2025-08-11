/** Chunk was on web.js **/
/** chunk id: 340797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk946273 = require("./946273.js"),
  Chunk441110 = require("./441110.js"),
  Chunk388032 = require("./388032.js"),
  Chunk374701 = require("./374701.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  let {
    guild: t,
    message: n
  } = e, u = i.useRef(null);
  return (0, a.vV)(t.id, n.author.id) ? <o.yRy targetElementRef={u} animation={o.yRy.Animation.TRANSLATE} align={"center"} autoInvert={true} nudgeAlignIntoViewport={true} position={"right"} renderPopout={e => {
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(s.Z, {
        guild: t,
        message: n,
        onClose: i
      })
    }}>{e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(o.P3F, {
        onClick: t,
        tag: "span",
        innerRef: u,
        children: (0, r.jsx)(o.ua7, {
          text: l.intl.string(l.t["v/OYd3"]),
          children: e => (0, r.jsx)("div", _(d({
            className: c.newMemberBadge
          }, e), {
            children: (0, r.jsx)(o.hg2, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20
            })
          }))
        })
      })
    }}</o.yRy> : null
}