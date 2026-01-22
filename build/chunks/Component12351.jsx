/** Chunk was on web.js **/
/** chunk id: 12351, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk228763 = require("./228763.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = {
  BLOCK: Chunk228763.om,
  INLINE: Chunk228763.mG
};
class p extends(r = Chunk64700.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: r = f.BLOCK,
      style: a
    } = this.props;
    return (0, i.jsxs)("div", {
      className: o()(t, r),
      style: a,
      children: [(0, i.jsxs)(l.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: u.AD,
        children: [c.intl.string(c.t["8tvIiN"]), ":"]
      }), (0, i.jsx)(l.Text, {
        className: o()(u.uN, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}
d(p, "Types", f);
let _ = p