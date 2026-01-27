/** Chunk was on web.js **/
/** chunk id: 929283, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954921 = require("./954921.jsx"),
  Chunk278539 = require("./278539.js"),
  Chunk837921 = require("./837921.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk610003 = require("./610003.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
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

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF,
  E = e => {
    let {
      item: t,
      user: n,
      isHighlighted: i = false,
      avatarSize: u = s._3J.SIZE_152,
      avatarPlaceholderSrc: p,
      className: h
    } = e, E = (0, l.Te)(u), {
      avatarDecorationSrc: y,
      eventHandlers: b,
      avatarPlaceholderSrc: O
    } = (0, c.A)({
      user: n,
      avatarDecorationOverride: (null == t ? true : t.type) === o.R.AVATAR_DECORATION ? t : true,
      size: E,
      onlyAnimateOnHoverOrFocus: !i
    }), v = d.intl.formatToPlainString(d.t.Do2lxE, {
      a11y_text: t.label
    });
    return (0, r.jsx)(g, m(_({}, b), {
      avatarDecoration: y,
      src: i ? null == n ? true : n.getAvatarURL(true, 152, true) : null != p ? p : O,
      imageClassName: i ? f.WG : true,
      className: a()(h, f.my),
      size: u,
      "aria-label": v
    }))
  }