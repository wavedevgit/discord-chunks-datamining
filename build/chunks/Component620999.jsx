/** Chunk was on 92917 **/
/** chunk id: 620999, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => c,
  t: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk610084 = require("./610084.js");

function o() {
  let [e] = i.useState(() => Math.floor(1600 * Math.random()) / 1e3);
  return (0, r.jsx)("div", {
    className: a()(s.Vl, s.Yf),
    style: {
      animationDelay: "".concat(e, "s")
    }
  })
}

function c() {
  let [e] = i.useState(() => Math.floor(60 * Math.random()) + 20);
  return (0, r.jsx)("div", {
    className: s.RC,
    style: {
      width: "".concat(e, "%")
    }
  })
}