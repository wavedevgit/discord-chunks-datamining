/** Chunk was on web.js **/
/** chunk id: 167080, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk335854 = require("./335854.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = e => {
  var {
    href: t,
    className: n,
    iconClassName: u,
    rel: f,
    target: h,
    mimeType: m,
    fileName: g,
    focusProps: E,
    onClick: b
  } = e, y = p(e, ["href", "className", "iconClassName", "rel", "target", "mimeType", "fileName", "focusProps", "onClick"]);
  let O = i.useMemo(() => a.X.getDefaultLinkInterceptor(t), [t]),
    v = i.useCallback(e => {
      s.default.track(l.rMx.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
        attachment_type: null == m ? true : m[0],
        attachment_subtype: null == m ? true : m[1]
      }), null == b || b(), null == O || O(e)
    }, [O, m, b]);
  return null != g ? (0, r.jsx)(o.Anchor, _(d({
    href: t,
    onClick: v,
    target: h,
    rel: f,
    className: n,
    "aria-label": c.intl.string(c.t["1WjMbC"]),
    focusProps: E
  }, y), {
    children: g
  })) : (0, r.jsx)(o.Anchor, _(d({
    href: t,
    onClick: v,
    target: h,
    rel: f,
    className: n,
    "aria-label": c.intl.string(c.t["1WjMbC"]),
    focusProps: E
  }, y), {
    children: (0, r.jsx)(o._8t, {
      size: "md",
      color: "currentColor",
      className: u
    })
  }))
}