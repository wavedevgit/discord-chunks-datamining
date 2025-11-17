/** Chunk was on web.js **/
/** chunk id: 397035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk473749 = require("./473749.js"),
  Chunk835473 = require("./835473.js"),
  Chunk81063 = require("./81063.js"),
  Chunk591759 = require("./591759.js"),
  Chunk561308 = require("./561308.js"),
  Chunk206583 = require("./206583.js"),
  Chunk701488 = require("./701488.js"),
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
  let t, {
      entry: n,
      baseEntryData: d
    } = e,
    _ = (0, i.q)(n.extra.application_id),
    h = null == _ ? true : _.getIconURL(128),
    m = (0, a.xF)(n.extra.application_id, n.extra.media_assets_large_image, [c.Si.LARGE, c.Si.LARGE]),
    g = n.extra.media_title,
    E = n.extra.media_subtitle,
    b = (0, s.Jg)(n) ? u.t["LH+Z3y"] : u.t.YuKgml,
    y = {
      type: l.kG.CRUNCHYROLL
    },
    O = r.useMemo(() => {
      if (null == n.extra.url) return;
      let e = o.Z.safeParseWithQuery(n.extra.url);
      if (null != e && null != e.protocol && null != e.hostname) return e
    }, [n.extra.url]);
  return null != O && (t = {
    href: o.Z.format(O),
    ariaDescription: u.intl.formatToPlainString(u.t.aFFQ3g, {
      title: g
    })
  }), p(f({}, d), {
    thumbnailUrl: null != m ? m : h,
    title: g,
    titleClickable: t,
    thumbnailClickable: t,
    subtitle: E,
    userDescription: b,
    providerIconProps: y
  })
}