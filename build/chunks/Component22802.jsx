/** Chunk was on 32502 **/
/** chunk id: 22802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => o,
  b: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk700744 = require("./700744.js");

function a(e) {
  let {
    keybind: t,
    className: n
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: t.map((e, t) => (0, i.jsx)("span", {
      className: s()(r.Eb, r.UT, n),
      children: e
    }, t))
  })
}

function o(e) {
  let {
    keybind: t,
    className: n
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: t.map((e, t) => (0, i.jsx)("div", {
      className: s()(r.Eb, r.RJ, n),
      children: e
    }, "".concat(e, "-").concat(t)))
  })
}