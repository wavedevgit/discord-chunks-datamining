/** Chunk was on 59727 **/
/** chunk id: 842401, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430147 = require("./430147.js");
let s = e => {
  let {
    user: t
  } = e;
  return (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)(a.X6q, {
      className: o.header,
      variant: "heading-sm/semibold",
      children: l.intl.string(l.t["Rsth7+"])
    }), (0, r.jsx)("div", {
      className: o.userContainer,
      children: (0, r.jsxs)("div", {
        className: o.userInfo,
        children: [(0, r.jsx)(i.Z, {
          className: o.userIcon,
          user: t,
          size: a.EFr.SIZE_40
        }), (0, r.jsxs)("div", {
          children: [null != t.globalName && (0, r.jsx)(a.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: t.globalName
          }), (0, r.jsx)(a.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: t.username
          })]
        })]
      })
    })]
  })
}