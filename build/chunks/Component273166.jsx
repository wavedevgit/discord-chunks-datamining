/** Chunk was on 5606 **/
/** chunk id: 273166, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk252052 = require("./252052.js");

function o(e) {
  let {
    className: t,
    header: n,
    headerClassName: l,
    children: o
  } = e, c = i.useMemo(() => {
    let e = false;
    return i.Children.forEach(o, t => {
      null != t && (e = true)
    }), e
  }, [o]);
  return (0, r.jsxs)("div", {
    className: s()(a.iE, t),
    children: [(0, r.jsx)("div", {
      className: s()(a.wx, l),
      children: n
    }), c && (0, r.jsx)("div", {
      className: a.Qs,
      children: o
    })]
  })
}