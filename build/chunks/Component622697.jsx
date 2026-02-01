/** Chunk was on 90228 **/
/** chunk id: 622697, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk653523 = require("./653523.jsx"),
  Chunk270704 = require("./270704.js"),
  Chunk652215 = require("./652215.js"),
  Chunk566305 = require("./566305.js");

function d(e) {
  let {
    selected: t,
    onSelect: n
  } = e, d = (0, r.Ay)();
  return (0, a.jsxs)("div", {
    className: c.N,
    children: [(0, a.jsx)(l.Text, {
      variant: "text-sm/semibold",
      children: "Preselected Gradient"
    }), (0, a.jsx)("div", {
      className: c.Z,
      children: s.Z6.map(e => {
        let l = d !== o.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
          r = t === e.name;
        return (0, a.jsx)(i.S4, {
          onSelect: () => n(e),
          style: {
            background: l
          },
          name: e.name,
          isSelected: r
        }, e.name)
      })
    })]
  })
}