/** Chunk was on 50874 **/
r.d(t, {
  Z: () => f
});
var n, i, a = r(255367),
  s = r(73800),
  l = r(120356),
  c = r.n(l),
  o = r(481060),
  u = r(388032),
  d = r(108921);
let _ = {
  BLOCK: d.block,
  INLINE: d.inline
};
class h extends(i = s.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: r,
      type: n = _.BLOCK,
      style: i
    } = this.props;
    return (0, a.jsxs)("div", {
      className: c()(t, n),
      style: i,
      children: [(0, a.jsxs)(o.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: d.pro,
        children: [u.intl.string(u.t["8tvIiI"]), ":"]
      }), (0, a.jsx)(o.Text, {
        className: c()(d.tip, r),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}(n = "Types") in h ? Object.defineProperty(h, n, {
  value: _,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : h[n] = _;
let f = h