/** Chunk was on 30202 **/
/** chunk id: 561537, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => o
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk539510 = require("./539510.js");

function o(e) {
  let {
    className: t,
    header: n,
    headerClassName: s,
    children: o
  } = e, c = r.useMemo(() => {
    let e = false;
    return r.Children.forEach(o, t => {
      null != t && (e = true)
    }), e
  }, [o]);
  return (0, i.jsxs)("div", {
    className: a()(l.wrapper, t),
    children: [(0, i.jsx)("div", {
      className: a()(l.header, s),
      children: n
    }), c && (0, i.jsx)("div", {
      className: l.content,
      children: o
    })]
  })
}