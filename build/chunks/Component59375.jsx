/** Chunk was on 69079 **/
/** chunk id: 59375, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk407943 = require("./407943.js");

function s(e) {
  var t;
  let {
    attachment: n
  } = e, s = Math.round((null != (t = n.size) ? t : 0) / 1024 / 1024 * 100) / 100;
  return (0, r.jsxs)("div", {
    className: l.kL,
    children: [(0, r.jsx)(a.DF1, {
      size: "xs",
      color: "currentColor",
      className: l.Yg
    }), (0, r.jsx)(a.hKd, {
      size: 8,
      horizontal: true
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      className: l.Md,
      children: n.filename
    }), (0, r.jsx)(a.hKd, {
      size: 8,
      horizontal: true
    }), (0, r.jsx)("div", {
      className: l.Om
    }), (0, r.jsx)(a.hKd, {
      size: 8,
      horizontal: true
    }), (0, r.jsxs)(a.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: [s, "MB"]
    })]
  })
}