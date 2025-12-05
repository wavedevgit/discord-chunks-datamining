/** Chunk was on web.js **/
/** chunk id: 296810, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk993413 = require("./993413.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk34747 = require("./34747.js");

function c(e) {
  let {
    children: t,
    className: n,
    layoutClassName: i,
    profilePreview: c,
    profilePreviewTitle: u,
    nameplatePreview: d
  } = e, f = () => null != d ? (0, r.jsxs)("div", {
    className: l.previewsContainer,
    children: [(0, r.jsx)(o.Z, {
      title: null != u ? u : s.intl.string(s.t.Zb06yP),
      hideDivider: true,
      className: l.previewItem,
      children: c
    }), (0, r.jsx)(o.Z, {
      title: s.intl.string(s.t["7KRt6R"]),
      className: l.previewItem,
      hideDivider: true,
      children: d
    })]
  }) : (0, r.jsx)("div", {
    className: l.previewsContainer,
    children: (0, r.jsx)(o.Z, {
      title: null != u ? u : s.intl.string(s.t.Zb06yP),
      hideDivider: true,
      className: l.previewItem,
      children: c
    })
  });
  return (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)("div", {
      className: l.profileCustomizationSection,
      children: (0, r.jsxs)("div", {
        className: a()(l.baseLayout, i),
        children: [t, f()]
      })
    })
  })
}