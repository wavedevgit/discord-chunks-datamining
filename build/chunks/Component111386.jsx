/** Chunk was on web.js **/
/** chunk id: 111386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk801015 = require("./801015.js"),
  Chunk442937 = require("./442937.js");

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
let h = () => (0, Chunk255367.jsxs)("div", {
    className: Chunk801015.coachtipInner,
    children: [(0, Chunk255367.jsx)("img", {
      src: Chunk442937,
      alt: Chunk388032.intl.string(Chunk388032.t["9wkT19"]),
      className: Chunk801015.coachtipAsset
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk801015.coachtipTextContainer,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: Chunk388032.intl.string(Chunk388032.t.V5y3qa)
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.eSDHDg)
      })]
    })]
  }),
  m = e => {
    let {
      children: t
    } = e, [n] = (0, s.US)([o.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]), [l, u] = i.useState(false);
    return (i.useEffect(() => {
      setTimeout(() => {
        u(true)
      }, 300)
    }), n !== o.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP) ? t : (0, r.jsx)(a.ua7, {
      text: (0, r.jsx)(h, {}),
      tooltipClassName: c.coachtip,
      tooltipContentClassName: c.coachtipContent,
      position: "left",
      allowOverflow: true,
      forceOpen: l,
      shouldShow: l,
      hideOnClick: false,
      "aria-label": "test",
      children: e => (0, r.jsx)("div", p(f({}, e), {
        children: t
      }))
    })
  }