/** Chunk was on web.js **/
/** chunk id: 296810, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk77752 = require("./77752.js");

function c(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.Heading, {
      variant: "text-md/medium",
      className: l.previewTitle,
      children: t
    }), n]
  })
}

function u(e) {
  let {
    children: t,
    className: n,
    layoutClassName: i,
    profilePreview: o,
    profilePreviewTitle: u,
    nameplatePreview: d
  } = e, f = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c, {
      title: null != u ? u : s.intl.string(s.t.Zb06yP),
      children: o
    }), null != d ? (0, r.jsx)(c, {
      title: s.intl.string(s.t["7KRt6R"]),
      children: d
    }) : null]
  });
  return (0, r.jsx)("div", {
    className: a()(l.profileCustomizationSection, n),
    children: (0, r.jsxs)("div", {
      className: a()(l.baseLayout, i),
      children: [(0, r.jsx)("div", {
        className: l.previewsContainer,
        children: f()
      }), (0, r.jsx)("div", {
        className: l.formContent,
        children: t
      })]
    })
  })
}