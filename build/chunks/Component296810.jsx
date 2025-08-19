/** Chunk was on 66181 **/
/** chunk id: 296810, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk34747 = require("./34747.js");

function d(e) {
  let {
    children: t,
    className: n,
    layoutClassName: r,
    profilePreview: d,
    profilePreviewTitle: u,
    nameplatePreview: m
  } = e;
  return (0, i.jsx)("div", {
    className: n,
    children: (0, i.jsx)(a.hjN, {
      className: c.profileCustomizationSection,
      children: (0, i.jsxs)("div", {
        className: s()(c.baseLayout, r),
        children: [t, null != m ? (0, i.jsxs)("div", {
          children: [(0, i.jsx)(l.Z, {
            title: null != u ? u : o.intl.string(o.t.Zb06yM),
            hideDivider: true,
            className: c.preview,
            showViewFullProfileButton: true,
            children: d
          }), null != m ? (0, i.jsx)(l.Z, {
            title: o.intl.string(o.t["7KRt6e"]),
            className: c.preview,
            hideDivider: true,
            children: m
          }) : null]
        }) : (0, i.jsx)(l.Z, {
          title: null != u ? u : o.intl.string(o.t.Zb06yM),
          hideDivider: true,
          className: c.preview,
          showViewFullProfileButton: true,
          children: d
        })]
      })
    })
  })
}