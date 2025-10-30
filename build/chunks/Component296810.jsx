/** Chunk was on web.js **/
/** chunk id: 296810, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk993413 = require("./993413.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk117282 = require("./117282.js");

function c(e) {
  let {
    children: t,
    className: n,
    layoutClassName: i,
    profilePreview: c,
    profilePreviewTitle: u,
    nameplatePreview: d
  } = e, f = () => null != d ? (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.Z, {
      title: null != u ? u : s.intl.string(s.t.Zb06yP),
      hideDivider: true,
      className: l.preview,
      children: c
    }), null != d ? (0, r.jsx)(o.Z, {
      title: s.intl.string(s.t["7KRt6R"]),
      className: l.preview,
      hideDivider: true,
      children: d
    }) : null]
  }) : (0, r.jsx)(o.Z, {
    title: null != u ? u : s.intl.string(s.t.Zb06yP),
    hideDivider: true,
    className: l.preview,
    children: c
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