/** Chunk was on 65599 **/
/** chunk id: 643374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk817363 = require("./817363.jsx"),
  Chunk93064 = require("./93064.js");

function d(e) {
  let {
    filename: t,
    className: n,
    filters: r,
    buttonText: d,
    placeholder: u,
    onFileSelect: m
  } = e, p = l.useRef(null), h = l.useRef(null);
  return (0, a.jsx)(s.vN3, {
    ringTarget: p,
    within: true,
    children: (0, a.jsxs)(s.FON, {
      ref: p,
      className: i()(n, c.U),
      children: [(0, a.jsx)(s.JMY, {
        size: "sm"
      }), (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "" !== t ? "text-default" : "text-muted",
        lineClamp: 1,
        children: "" !== t ? t : u
      }), (0, a.jsx)(s.Button, {
        "aria-hidden": true,
        variant: "secondary",
        size: "sm",
        text: d,
        tabIndex: false
      }), (0, a.jsx)(o.A, {
        ref: h,
        onChange: e => {
          var t;
          m(null == (t = e.currentTarget.files) ? true : t[0])
        },
        multiple: false,
        filters: r
      })]
    })
  })
}