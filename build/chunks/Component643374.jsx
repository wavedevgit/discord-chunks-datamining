/** Chunk was on 40556 **/
/** chunk id: 643374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk817363 = require("./817363.jsx"),
  Chunk93064 = require("./93064.js");

function c(e) {
  let {
    filename: t,
    className: n,
    filters: a,
    buttonText: c,
    placeholder: d,
    onFileSelect: f
  } = e, m = i.useRef(null), g = i.useRef(null);
  return (0, l.jsx)(s.vN3, {
    ringTarget: m,
    within: true,
    children: (0, l.jsxs)(s.FON, {
      ref: m,
      className: r()(n, o.U),
      children: [(0, l.jsx)(s.JMY, {
        size: "sm"
      }), (0, l.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "" !== t ? "text-default" : "text-muted",
        lineClamp: 1,
        children: "" !== t ? t : d
      }), (0, l.jsx)(s.Button, {
        "aria-hidden": true,
        variant: "secondary",
        size: "sm",
        text: c,
        tabIndex: false
      }), (0, l.jsx)(u.A, {
        ref: g,
        onChange: e => {
          var t;
          f(null == (t = e.currentTarget.files) ? true : t[0])
        },
        multiple: false,
        filters: a
      })]
    })
  })
}