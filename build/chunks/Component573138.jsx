/** Chunk was on 20941 **/
/** chunk id: 573138, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk854987 = require("./854987.js"),
  Chunk398225 = require("./398225.jsx"),
  Chunk256024 = require("./256024.js");

function d(e) {
  let {
    children: t,
    noPadding: n = false,
    centered: a = true,
    verticalFlow: d = false,
    className: m
  } = e, f = l.useContext(o.P), p = (0, s.rdh)(f.primaryColor).hex(), h = (0, c.HL)();
  return (0, r.jsx)(c.gy.Provider, {
    value: h,
    children: (0, r.jsx)("div", {
      className: i()(u.kL, {
        [u.pK]: !n,
        [u.g7]: a,
        [u.W5]: d
      }, m),
      style: {
        color: p
      },
      children: t
    })
  })
}