/** Chunk was on web.js **/
/** chunk id: 561537, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk539510 = require("./539510.js");

function l(e) {
  let {
    className: t,
    header: n,
    headerClassName: o,
    children: l
  } = e, c = i.useMemo(() => {
    let e = false;
    return i.Children.forEach(l, t => {
      null != t && (e = true)
    }), e
  }, [l]);
  return (0, r.jsxs)("div", {
    className: a()(s.wrapper, t),
    children: [(0, r.jsx)("div", {
      className: a()(s.header, o),
      children: n
    }), c && (0, r.jsx)("div", {
      className: s.content,
      children: l
    })]
  })
}