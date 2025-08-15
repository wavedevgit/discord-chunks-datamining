/** Chunk was on web.js **/
/** chunk id: 751688, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk612818 = require("./612818.js");

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

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e) {
  let {
    user: t,
    guildId: n,
    channelId: a,
    nick: d,
    className: _,
    textClassName: m,
    disablePopout: g,
    ignoreModalClicks: E,
    onClick: b,
    onContextMenu: y,
    onPopoutRequestOpen: O,
    onPopoutRequestClose: v
  } = e, I = i.useRef(null);
  return (0, r.jsx)(c.Z, {
    targetElementRef: I,
    user: t,
    guildId: n,
    channelId: a,
    position: "left",
    shouldShow: !g && true,
    onRequestOpen: O,
    onRequestClose: v,
    ignoreModalClicks: E,
    children: e => {
      var {
        onClick: i
      } = e, a = h(e, ["onClick"]);
      return (0, r.jsxs)(s.P3F, p(f({}, a), {
        innerRef: I,
        className: o()(u.userListItem, _, {
          [u.popoutDisabled]: g
        }),
        onContextMenu: y,
        onClick: e => {
          i(e), null == b || b(e)
        },
        children: [(0, r.jsx)(s.qEK, {
          src: t.getAvatarURL(n, (0, s.pxk)(s.EFr.SIZE_24)),
          className: u.avatar,
          "aria-label": t.username,
          size: s.EFr.SIZE_24
        }), (0, r.jsx)(s.Text, {
          className: o()(u.userListItemTag, m),
          variant: "text-sm/normal",
          children: (0, r.jsx)(l.Z, {
            user: t,
            nick: d,
            usernameClass: u.username,
            hideDiscriminator: true
          })
        })]
      }))
    }
  })
}