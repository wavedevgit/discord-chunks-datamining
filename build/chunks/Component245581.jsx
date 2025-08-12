/** Chunk was on 94904 **/
/** chunk id: 245581, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk408811 = require("./408811.js");

function l(e) {
  let {
    transitionState: t,
    title: r,
    subtitle: l,
    children: a
  } = e, s = (0, c.Dt)();
  return (0, n.jsxs)(o.Y0X, {
    "data-migration-pending": true,
    transitionState: t,
    "aria-labelledby": s,
    parentComponent: "SecureFramesVerificationModal",
    children: [(0, n.jsx)("div", {
      className: i.shieldIconContainer,
      children: (0, n.jsx)("div", {
        className: i.shieldIcon,
        children: (0, n.jsx)(o.tQf, {
          size: "custom",
          width: 55,
          height: 55,
          color: o.TVs.colors.HEADER_SECONDARY
        })
      })
    }), (0, n.jsxs)(o.hzk, {
      className: i.content,
      children: [(0, n.jsx)(o.X6q, {
        className: i.title,
        variant: "heading-lg/bold",
        color: "header-primary",
        children: r
      }), (0, n.jsx)(o.Text, {
        className: i.subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: l
      }), a]
    })]
  })
}