/** Chunk was on 93239 **/
r.d(t, {
  Z: () => h
});
var n, i, s = r(255367),
  a = r(73800),
  c = r(120356),
  l = r.n(c),
  o = r(481060),
  u = r(388032),
  d = r(108921);
let _ = {
  BLOCK: d.block,
  INLINE: d.inline
};
class p extends(i = a.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: r,
      type: n = _.BLOCK,
      style: i
    } = this.props;
    return (0, s.jsxs)("div", {
      className: l()(t, n),
      style: i,
      children: [(0, s.jsxs)(o.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: d.pro,
        children: [u.intl.string(u.t["8tvIiI"]), ":"]
      }), (0, s.jsx)(o.Text, {
        className: l()(d.tip, r),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}(n = "Types") in p ? Object.defineProperty(p, n, {
  value: _,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : p[n] = _;
let h = p