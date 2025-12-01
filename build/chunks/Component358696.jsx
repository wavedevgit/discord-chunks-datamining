/** Chunk was on web.js **/
/** chunk id: 358696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => y,
  J: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk442550 = require("./442550.jsx"),
  Chunk264832 = require("./264832.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk255332 = require("./255332.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = {
  none: true,
  default: Chunk255332.aspectRatio,
  crunchyroll: a()(Chunk255332.aspectRatio, Chunk255332.crunchyroll)
};
var g = function(e) {
  return e.SIZE_60 = "size-60", e.SIZE_72 = "size-72", e.SIZE_100 = "size-100", e
}({});
let E = {
  "size-60": {
    imageSize: 60,
    smallImageSize: 24,
    mask: Chunk686546.QS.CONTENT_IMAGE_60
  },
  "size-72": {
    imageSize: 72,
    smallImageSize: 32,
    mask: Chunk686546.QS.CONTENT_IMAGE_72
  },
  "size-100": {
    imageSize: 100,
    smallImageSize: 32,
    mask: Chunk686546.QS.CONTENT_IMAGE_100
  }
};

function b(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return null == n ? t : (0, r.jsx)(o.P3F, {
    onClick: n,
    className: d.clickable,
    children: t
  })
}

function y(e) {
  var t, n;
  let {
    image: i,
    smallImage: f,
    aspectRatio: _,
    onClick: g,
    size: y,
    className: O
  } = e, {
    imageSize: v,
    smallImageSize: S,
    mask: I
  } = E[y];
  if (null == i) return (0, r.jsx)(l.f, {
    src: true,
    alt: u.intl.string(u.t["2B/phM"]),
    size: v,
    className: a()(d.contentImage, h[null != _ ? _ : "default"], O),
    constrain: "width"
  });
  let T = (0, r.jsx)(l.f, {
    src: i.src,
    alt: null != (n = null != (t = i.alt) ? t : i.text) ? n : u.intl.string(u.t["2B/phM"]),
    size: v,
    className: a()(d.contentImage, h[null != _ ? _ : "default"]),
    constrain: "width"
  });
  return (0, r.jsxs)("div", {
    className: a()(d.imagePosition, O),
    children: [(0, r.jsx)(o.aML, {
      "data-migration-pending": true,
      text: i.text,
      children: e => (0, r.jsx)(b, {
        onClick: g,
        children: (0, r.jsx)(c._, {
          href: i.url,
          children: null != f ? (0, r.jsx)(s.ZP, m(p({}, e), {
            className: d.imageContainer,
            mask: I,
            width: v,
            height: v,
            children: T
          })) : (0, r.jsx)("div", m(p({}, e), {
            className: d.imageContainer,
            children: T
          }))
        })
      })
    }), null != f && (0, r.jsx)(o.aML, {
      "data-migration-pending": true,
      text: f.text,
      children: e => {
        var t;
        return (0, r.jsx)(c._, {
          href: f.url,
          children: (0, r.jsx)("div", m(p({}, e), {
            className: d.smallImageContainer,
            children: (0, r.jsx)(l.f, {
              src: f.src,
              alt: null != (t = f.alt) ? t : f.text,
              size: S,
              className: d.contentImage,
              constrain: "width"
            })
          }))
        })
      }
    })]
  })
}