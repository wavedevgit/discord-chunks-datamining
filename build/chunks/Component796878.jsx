/** Chunk was on 21738 **/
/** chunk id: 796878, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk877624 = require("./877624.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk549996 = require("./549996.js"),
  Chunk807098 = require("./807098.js"),
  Chunk542780 = require("./542780.js");

function u(e) {
  let {
    children: t
  } = e, n = (0, s.c)(i.C.PREMIUM_TAB_TOOLTIP), u = null != n && "premiumTabTooltip" === n.properties.properties.oneofKind ? n.properties.properties.premiumTabTooltip : null, d = (0, o.T)(null == u ? true : u.asset);
  if (null == u) return t;
  let p = (0, r.jsxs)("div", {
    className: c.$e,
    children: [null != d && (0, r.jsx)("img", {
      className: c.NC,
      src: d,
      alt: ""
    }), (0, r.jsxs)("div", {
      className: c.Vm,
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
  return (0, r.jsx)(l.m, {
    __unsupportedReactNodeAsText: p,
    position: "right",
    "aria-label": u.header,
    asContainer: true,
    children: (0, r.jsx)("div", {
      children: t
    })
  })
}