/** Chunk was on web.js **/
/** chunk id: 105862, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk782568 = require("./782568.js"),
  Chunk63063 = require("./63063.js"),
  Chunk827498 = require("./827498.js"),
  Chunk888617 = require("./888617.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk431048 = require("./431048.js"),
  Chunk983008 = require("./983008.js"),
  Chunk478408 = require("./478408.js");

function g(e) {
  let {
    showImage: t = true,
    padding: n = false
  } = e, g = (0, s.ZP)(), E = (0, a.ap)(g) ? m : h, b = i.useCallback(() => {
    (0, l.Z)(c.Z.getAppsSupportURL(f.BhN.APPS_LEARN_MORE))
  }, []), {
    trackSectionImpressionRef: y
  } = (0, d.Z)({
    sectionName: u.L3.NEW_TO_APPS,
    numItems: 1,
    numVisibleItems: 1
  });
  return (0, r.jsx)("div", {
    className: n ? p.containerPadding : true,
    children: (0, r.jsxs)("div", {
      ref: e => {
        y.current = e
      },
      className: p.container,
      children: [t && (0, r.jsx)("img", {
        className: p.image,
        src: E,
        alt: "",
        "aria-hidden": true
      }), (0, r.jsxs)("div", {
        className: p.body,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-lg/bold",
          color: "header-primary",
          children: _.intl.string(_.t["kw8/Ec"])
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: _.intl.string(_.t.GZoV1O)
        })]
      }), (0, r.jsx)(o.Button, {
        variant: "primary",
        text: _.intl.string(_.t.Ye51oT),
        "aria-label": _.intl.formatToPlainString(_.t.xx5Sug, {
          sectionTitle: _.intl.string(_.t["kw8/Ec"]),
          sectionBody: _.intl.string(_.t.GZoV1O)
        }),
        onClick: b
      })]
    })
  })
}