/** Chunk was on 74739 **/
n.d(t, {
  Z: () => O
});
var r, i, l = n(255367),
  o = n(73800),
  a = n(120356),
  c = n.n(a),
  s = n(481060),
  u = n(388032),
  E = n(108921);
let d = {
  BLOCK: E.block,
  INLINE: E.inline
};
class _ extends(i = o.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: r = d.BLOCK,
      style: i
    } = this.props;
    return (0, l.jsxs)("div", {
      className: c()(t, r),
      style: i,
      children: [(0, l.jsxs)(s.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: E.pro,
        children: [u.intl.string(u.t["8tvIiI"]), ":"]
      }), (0, l.jsx)(s.Text, {
        className: c()(E.tip, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}(r = "Types") in _ ? Object.defineProperty(_, r, {
  value: d,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : _[r] = d;
let O = _