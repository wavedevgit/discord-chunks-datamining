/** Chunk was on 1272 **/
/** chunk id: 63107, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk79766 = require("./79766.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk715130 = require("./715130.js"),
  Chunk688766 = require("./688766.js"),
  Chunk630942 = require("./630942.js");

function u(e) {
  let {
    children: t
  } = e, n = (0, o.H)(i.I.PREMIUM_TAB_TOOLTIP), u = null != n && "premiumTabTooltip" === n.properties.properties.oneofKind ? n.properties.properties.premiumTabTooltip : null, d = (0, s.Y)(null == u ? true : u.asset);
  if (null == u) return t;
  let p = (0, r.jsxs)("div", {
    className: c.premiumTabTooltipContainer,
    children: [null != d && (0, r.jsx)("img", {
      className: c.premiumTabTooltipImage,
      src: d,
      alt: ""
    }), (0, r.jsxs)("div", {
      className: c.premiumTabTooltipContent,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-md/bold",
        color: "text-strong",
        children: u.header
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: u.body
      })]
    })]
  });
  return (0, r.jsx)(l.u, {
    __unsupportedReactNodeAsText: p,
    position: "right",
    "aria-label": u.header,
    asContainer: true,
    children: (0, r.jsx)("div", {
      children: t
    })
  })
}