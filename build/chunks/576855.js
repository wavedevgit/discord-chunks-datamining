/** Chunk was on 87294 **/
r.d(t, {
  Z: () => d
});
var n, l, i = r(255367),
  a = r(73800),
  o = r(120356),
  c = r.n(o),
  s = r(481060),
  u = r(388032),
  b = r(108921);
let f = {
  BLOCK: b.block,
  INLINE: b.inline
};
class p extends(l = a.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: r,
      type: n = f.BLOCK,
      style: l
    } = this.props;
    return (0, i.jsxs)("div", {
      className: c()(t, n),
      style: l,
      children: [(0, i.jsxs)(s.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: b.pro,
        children: [u.intl.string(u.t["8tvIiI"]), ":"]
      }), (0, i.jsx)(s.Text, {
        className: c()(b.tip, r),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}(n = "Types") in p ? Object.defineProperty(p, n, {
  value: f,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : p[n] = f;
let d = p