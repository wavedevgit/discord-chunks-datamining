/** Chunk was on web.js **/
/** chunk id: 52738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk545442 = require("./545442.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk658122 = require("./658122.js");

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

function p(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function g(e, t, n) {
  let {
    emojiId: r,
    src: i,
    animated: a = false
  } = e;
  return null != r ? c.Ay.getEmojiURL({
    id: r,
    animated: a && (!n || t),
    size: 18
  }) : i
}

function E(e) {
  let {
    accessory: t,
    isFocused: n
  } = e, {
    reducedMotion: a
  } = i.useContext(o.CZY);
  switch (t.type) {
    case "icon": {
      let {
        type: e,
        icon: n,
        color: i = "currentColor",
        className: a
      } = t, o = h(t, ["type", "icon", "color", "className"]);
      return (0, r.jsx)("div", {
        className: u.iconContainerLeft,
        children: (0, r.jsx)(n, _(f({
          "aria-hidden": true,
          color: i
        }, o), {
          className: s()(u.icon, a)
        }))
      })
    }
    case "emoji": {
      let e = g(t, n, a.enabled);
      return (0, r.jsx)("div", {
        className: u.iconContainerLeft,
        children: (0, r.jsx)("img", {
          "aria-hidden": true,
          alt: "",
          src: e,
          className: u.icon
        })
      })
    }
    case "image":
      return (0, r.jsx)("img", {
        "aria-hidden": true,
        alt: "",
        src: t.src,
        className: u.imageAccessory
      });
    case "avatar":
      return (0, r.jsx)("img", {
        "aria-hidden": true,
        alt: "",
        src: t.src,
        className: u.avatarAccessory
      });
    case "roleDot": {
      let {
        variant: e,
        color: n,
        colors: i
      } = t;
      return (0, r.jsx)("div", {
        className: u.roleDotAccessory,
        children: "dot" === e ? (0, r.jsx)(l.W, {
          color: n,
          colors: i,
          background: false,
          tooltip: false
        }) : (0, r.jsx)(l.R, {
          color: n,
          colors: null != i ? i : null
        })
      })
    }
  }
}