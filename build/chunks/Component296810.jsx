/** Chunk was on web.js **/
/** chunk id: 296810, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk34747 = require("./34747.js");

function u(e) {
  let {
    children: t,
    className: n,
    layoutClassName: i,
    profilePreview: u,
    profilePreviewTitle: d,
    nameplatePreview: f
  } = e, _ = () => null != f ? (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.Z, {
      title: null != d ? d : l.intl.string(l.t.Zb06yM),
      hideDivider: true,
      className: c.preview,
      showViewFullProfileButton: true,
      children: u
    }), null != f ? (0, r.jsx)(s.Z, {
      title: l.intl.string(l.t["7KRt6e"]),
      className: c.preview,
      hideDivider: true,
      children: f
    }) : null]
  }) : (0, r.jsx)(s.Z, {
    title: null != d ? d : l.intl.string(l.t.Zb06yM),
    hideDivider: true,
    className: c.preview,
    showViewFullProfileButton: true,
    children: u
  });
  return (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(a.hjN, {
      className: c.profileCustomizationSection,
      children: (0, r.jsxs)("div", {
        className: o()(c.baseLayout, i),
        children: [t, _()]
      })
    })
  })
}