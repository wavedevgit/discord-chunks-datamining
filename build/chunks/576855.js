/** Chunk was on 41629 **/
"use strict";
n.d(t, {
  Z: () => g
});
var s, i, r = n(255367),
  c = n(73800),
  a = n(120356),
  o = n.n(a),
  u = n(481060),
  l = n(388032),
  p = n(108921);
let f = {
  BLOCK: p.block,
  INLINE: p.inline
};
class d extends(i = c.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: s = f.BLOCK,
      style: i
    } = this.props;
    return (0, r.jsxs)("div", {
      className: o()(t, s),
      style: i,
      children: [(0, r.jsxs)(u.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: p.pro,
        children: [l.intl.string(l.t["8tvIiI"]), ":"]
      }), (0, r.jsx)(u.Text, {
        className: o()(p.tip, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}(s = "Types") in d ? Object.defineProperty(d, s, {
  value: f,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[s] = f;
let g = d