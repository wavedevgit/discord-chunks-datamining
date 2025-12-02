/** Chunk was on web.js **/
/** chunk id: 358696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => g,
  J: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk442550 = require("./442550.jsx"),
  Chunk264832 = require("./264832.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk255332 = require("./255332.js");
let p = {
  none: true,
  default: Chunk255332.aspectRatio,
  crunchyroll: a()(Chunk255332.aspectRatio, Chunk255332.crunchyroll)
};
var _ = function(e) {
  return e.SIZE_60 = "size-60", e.SIZE_72 = "size-72", e.SIZE_100 = "size-100", e
}({});
let m = {
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

function h(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return null == n ? t : (0, r.jsx)(s.P3F, {
    onClick: n,
    className: f.clickable,
    children: t
  })
}

function g(e) {
  var t, n, i;
  let {
    image: s,
    smallImage: _,
    aspectRatio: g,
    onClick: E,
    size: b,
    className: y
  } = e, {
    imageSize: O,
    smallImageSize: v,
    mask: S
  } = m[b];
  if (null == s) return (0, r.jsx)(c.f, {
    src: true,
    alt: d.intl.string(d.t["2B/phM"]),
    size: O,
    className: a()(f.contentImage, p[null != g ? g : "default"], y),
    constrain: "width"
  });
  let I = (0, r.jsx)(c.f, {
    src: s.src,
    alt: null != (n = null != (t = s.alt) ? t : s.text) ? n : d.intl.string(d.t["2B/phM"]),
    size: O,
    className: a()(f.contentImage, p[null != g ? g : "default"]),
    constrain: "width"
  });
  return (0, r.jsxs)("div", {
    className: a()(f.imagePosition, y),
    children: [(0, r.jsx)(o.u, {
      text: s.text,
      asContainer: true,
      children: (0, r.jsx)(h, {
        onClick: E,
        children: (0, r.jsx)(u._, {
          href: s.url,
          children: null != _ ? (0, r.jsx)(l.ZP, {
            className: f.imageContainer,
            mask: S,
            width: O,
            height: O,
            children: I
          }) : (0, r.jsx)("div", {
            className: f.imageContainer,
            children: I
          })
        })
      })
    }), null != _ && (0, r.jsx)(o.u, {
      text: _.text,
      asContainer: true,
      children: (0, r.jsx)(u._, {
        href: _.url,
        children: (0, r.jsx)("div", {
          className: f.smallImageContainer,
          children: (0, r.jsx)(c.f, {
            src: _.src,
            alt: null != (i = _.alt) ? i : _.text,
            size: v,
            className: f.contentImage,
            constrain: "width"
          })
        })
      })
    })]
  })
}