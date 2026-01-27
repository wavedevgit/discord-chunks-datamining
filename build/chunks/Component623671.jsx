/** Chunk was on web.js **/
/** chunk id: 623671, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => g,
  w: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk263577 = require("./263577.jsx"),
  Chunk662010 = require("./662010.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk541567 = require("./541567.js");
let p = {
  none: true,
  default: Chunk541567.cH,
  crunchyroll: a()(Chunk541567.cH, Chunk541567.sl)
};
var _ = function(e) {
  return e.SIZE_60 = "size-60", e.SIZE_72 = "size-72", e.SIZE_100 = "size-100", e
}({});
let h = {
  "size-60": {
    imageSize: 60,
    smallImageSize: 24,
    mask: Chunk573435.hW.CONTENT_IMAGE_60
  },
  "size-72": {
    imageSize: 72,
    smallImageSize: 32,
    mask: Chunk573435.hW.CONTENT_IMAGE_72
  },
  "size-100": {
    imageSize: 100,
    smallImageSize: 32,
    mask: Chunk573435.hW.CONTENT_IMAGE_100
  }
};

function m(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return null == n ? t : (0, r.jsx)(s.DUT, {
    onClick: n,
    className: f.vk,
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
    size: y,
    className: b
  } = e, {
    imageSize: O,
    smallImageSize: v,
    mask: A
  } = h[y];
  if (null == s) return (0, r.jsx)(c.V, {
    src: true,
    alt: d.intl.string(d.t["2B/phM"]),
    size: O,
    className: a()(f.fO, p[null != g ? g : "default"], b),
    constrain: "width"
  });
  let I = (0, r.jsx)(c.V, {
    src: s.src,
    alt: null != (t = null != (n = s.alt) ? n : s.text) ? t : d.intl.string(d.t["2B/phM"]),
    size: O,
    className: a()(f.fO, p[null != g ? g : "default"]),
    constrain: "width"
  });
  return (0, r.jsxs)("div", {
    className: a()(f.B_, b),
    children: [(0, r.jsx)(m, {
      onClick: E,
      children: (0, r.jsx)(u.O, {
        href: s.url,
        children: null != _ ? (0, r.jsx)(o.m_, {
          text: s.text,
          asContainer: true,
          children: (0, r.jsx)(l.Ay, {
            className: f.ZS,
            mask: A,
            width: O,
            height: O,
            children: I
          })
        }) : (0, r.jsx)(o.m_, {
          text: s.text,
          children: (0, r.jsx)("div", {
            className: f.ZS,
            children: I
          })
        })
      })
    }), null != _ && (0, r.jsx)(u.O, {
      href: _.url,
      children: (0, r.jsx)(o.m_, {
        text: _.text,
        children: (0, r.jsx)("div", {
          className: f.gn,
          children: (0, r.jsx)(c.V, {
            src: _.src,
            alt: null != (i = _.alt) ? i : _.text,
            size: v,
            className: f.fO,
            constrain: "width"
          })
        })
      })
    })]
  })
}