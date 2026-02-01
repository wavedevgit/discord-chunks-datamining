/** Chunk was on 42402 **/
/** chunk id: 22802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => o,
  b: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk700744 = require("./700744.js");

function a(e) {
  let {
    keybind: t,
    className: n
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map((e, t) => (0, r.jsx)("span", {
      className: i()(s.Eb, s.UT, n),
      children: e
    }, t))
  })
}

function o(e) {
  let {
    keybind: t,
    className: n
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map((e, t) => (0, r.jsx)("div", {
      className: i()(s.Eb, s.RJ, n),
      children: e
    }, "".concat(e, "-").concat(t)))
  })
}