/** Chunk was on web.js **/
/** chunk id: 273166, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk252052 = require("./252052.js");

function l(e) {
  let {
    className: t,
    header: n,
    headerClassName: a,
    children: l
  } = e, c = i.useMemo(() => {
    let e = false;
    return i.Children.forEach(l, t => {
      null != t && (e = true)
    }), e
  }, [l]);
  return (0, r.jsxs)("div", {
    className: s()(o.iE, t),
    children: [(0, r.jsx)("div", {
      className: s()(o.wx, a),
      children: n
    }), c && (0, r.jsx)("div", {
      className: o.Qs,
      children: l
    })]
  })
}