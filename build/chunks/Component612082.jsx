/** Chunk was on 20941 **/
/** chunk id: 612082, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk183766 = require("./183766.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854987 = require("./854987.js"),
  Chunk181380 = require("./181380.js"),
  Chunk420156 = require("./420156.js");

function f(e) {
  let {
    onClick: t,
    children: n,
    className: a,
    contentClassName: f,
    active: p = false,
    muteSound: h = false,
    disabled: b = false
  } = e, g = l.useContext(u.P), x = (0, c.rdh)(g.primaryColor).hex(), y = (0, c.rdh)(g.secondaryColor).hex(), v = (0, d.V)(s.A), j = l.useCallback(() => {
    b || (h || v(), null == t || t())
  }, [t, h, v, b]);
  return (0, r.jsx)(o.DUT, {
    className: i()(a, m.In, {
      [m.vu]: p,
      [m.r9]: b
    }),
    style: {
      backgroundColor: x
    },
    onClick: j,
    children: (0, r.jsx)("div", {
      className: i()(f, m.LG),
      style: {
        borderColor: y
      },
      children: n
    })
  })
}