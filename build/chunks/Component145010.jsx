/** Chunk was on web.js **/
/** chunk id: 145010, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk125268 = require("./125268.js"),
  Chunk673125 = require("./673125.js"),
  Chunk984063 = require("./984063.js"),
  Chunk390322 = require("./390322.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk12168 = require("./12168.jsx"),
  Chunk304388 = require("./304388.jsx"),
  Chunk388032 = require("./388032.jsx");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    channel: t
  } = e, n = (0, o.e7)([l.Z], () => l.Z.getDrawMode()), h = (null == n ? true : n.type) === c.W.EMOJI_HOSE, g = i.useRef(null), b = (e, t) => {
    null != e ? (0, s.Bo)({
      type: c.W.EMOJI_HOSE,
      emojiName: e.name,
      emojiId: e.id
    }) : h && (0, s.Bo)(null), null == t || t()
  };
  return (0, r.jsx)(_.Z, {
    renderPopout: e => {
      let {
        closePopout: n,
        onFocus: i
      } = e;
      return (0, r.jsx)(u.Z, {
        children: (0, r.jsx)(f.Z, {
          title: p.intl.string(p.t.XYLOyM),
          channel: t,
          closePopout: n,
          onFocus: i,
          onSelectEmoji: e => b(e, n)
        })
      })
    },
    popoutTargetRef: g,
    children: e => (0, r.jsx)(d.Z, E(m({}, e), {
      buttonRef: g,
      iconComponent: a.j9u,
      isActive: h || e.isActive,
      onClick: t => {
        b(null), e.onClick(t)
      }
    }))
  })
}