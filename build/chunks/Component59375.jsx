/** Chunk was on 69079 **/
/** chunk id: 59375, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk407943 = require("./407943.js");

function i(e) {
  var t;
  let {
    attachment: n
  } = e, i = Math.round((null != (t = n.size) ? t : 0) / 1024 / 1024 * 100) / 100;
  return (0, r.jsxs)("div", {
    className: a.kL,
    children: [(0, r.jsx)(l.DF1, {
      size: "xs",
      color: "currentColor",
      className: a.Yg
    }), (0, r.jsx)(l.hKd, {
      size: 8,
      horizontal: true
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      className: a.Md,
      children: n.filename
    }), (0, r.jsx)(l.hKd, {
      size: 8,
      horizontal: true
    }), (0, r.jsx)("div", {
      className: a.Om
    }), (0, r.jsx)(l.hKd, {
      size: 8,
      horizontal: true
    }), (0, r.jsxs)(l.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: [i, "MB"]
    })]
  })
}