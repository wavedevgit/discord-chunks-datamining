/** Chunk was on 38985 **/
/** chunk id: 62697, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk486974 = require("./486974.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk848161 = require("./848161.js"),
  Chunk438536 = require("./438536.js");

function u(e) {
  let {
    onNavigate: t,
    backPanel: n = a.g.INFO
  } = e;
  return (0, l.jsxs)("div", {
    className: o.wx,
    children: [(0, l.jsx)("div", {
      className: o.qd,
      children: (0, l.jsxs)(r.DUT, {
        className: s.Gv,
        onClick: () => null == t ? true : t(n),
        children: [(0, l.jsx)(r.rJJ, {
          size: "custom",
          width: 20,
          height: 20
        }), (0, l.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          children: i.intl.string(i.t["13/7kX"])
        })]
      })
    }), (0, l.jsx)(r.e7I, {
      shortcut: "esc",
      keyClassName: s.Wb,
      className: s.ti
    })]
  })
}