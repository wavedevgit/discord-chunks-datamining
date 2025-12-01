/** Chunk was on web.js **/
/** chunk id: 105862, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk63063 = require("./63063.js"),
  Chunk827498 = require("./827498.js"),
  Chunk888617 = require("./888617.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk431048 = require("./431048.js");

function _(e) {
  let {
    padding: t = false
  } = e, n = i.useCallback(() => {
    (0, o.Z)(s.Z.getAppsSupportURL(u.BhN.APPS_LEARN_MORE))
  }, []), {
    trackSectionImpressionRef: _
  } = (0, c.Z)({
    sectionName: l.L3.NEW_TO_APPS,
    numItems: 1,
    numVisibleItems: 1
  });
  return (0, r.jsx)("div", {
    className: t ? f.containerPadding : true,
    children: (0, r.jsxs)("div", {
      ref: e => {
        _.current = e
      },
      className: f.container,
      children: [(0, r.jsxs)("div", {
        className: f.body,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-lg/bold",
          color: "header-primary",
          children: d.intl.string(d.t["kw8/Ec"])
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: d.intl.string(d.t.GZoV1O)
        })]
      }), (0, r.jsx)(a.Button, {
        variant: "primary",
        text: d.intl.string(d.t.Ye51oT),
        "aria-label": d.intl.formatToPlainString(d.t.xx5Sug, {
          sectionTitle: d.intl.string(d.t["kw8/Ec"]),
          sectionBody: d.intl.string(d.t.GZoV1O)
        }),
        onClick: n
      })]
    })
  })
}