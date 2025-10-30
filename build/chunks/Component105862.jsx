/** Chunk was on 35755 **/
/** chunk id: 105862, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk782568 = require("./782568.js"),
  Chunk63063 = require("./63063.js"),
  Chunk827498 = require("./827498.js"),
  Chunk888617 = require("./888617.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk456353 = require("./456353.js"),
  Chunk983008 = require("./983008.js"),
  Chunk478408 = require("./478408.js");

function y(e) {
  let {
    showImage: t = true,
    padding: n = false
  } = e, y = (0, o.ZP)(), g = (0, r.ap)(y) ? v : h, x = l.useCallback(() => {
    (0, s.Z)(c.Z.getAppsSupportURL(p.BhN.APPS_LEARN_MORE))
  }, []), {
    trackSectionImpressionRef: b
  } = (0, d.Z)({
    sectionName: u.L3.NEW_TO_APPS,
    numItems: 1,
    numVisibleItems: 1
  });
  return (0, i.jsx)("div", {
    className: n ? f.containerPadding : true,
    children: (0, i.jsxs)("div", {
      ref: e => {
        b.current = e
      },
      className: f.container,
      children: [t && (0, i.jsx)("img", {
        className: f.image,
        src: g,
        alt: "",
        "aria-hidden": true
      }), (0, i.jsxs)("div", {
        className: f.body,
        children: [(0, i.jsx)(a.Heading, {
          variant: "heading-lg/bold",
          color: "header-primary",
          children: m.intl.string(m.t["kw8/Ec"])
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: m.intl.string(m.t.GZoV1O)
        })]
      }), (0, i.jsx)(a.Button, {
        variant: "primary",
        text: m.intl.string(m.t.Ye51oT),
        "aria-label": m.intl.formatToPlainString(m.t.xx5Sug, {
          sectionTitle: m.intl.string(m.t["kw8/Ec"]),
          sectionBody: m.intl.string(m.t.GZoV1O)
        }),
        onClick: x
      })]
    })
  })
}