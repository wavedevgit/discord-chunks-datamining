/** Chunk was on 51164 **/
r.d(t, {
  Z: () => d
});
var n, l, a = r(255367),
  i = r(73800),
  c = r(120356),
  o = r.n(c),
  s = r(481060),
  u = r(388032),
  b = r(108921);
let f = {
  BLOCK: b.block,
  INLINE: b.inline
};
class p extends(l = i.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: r,
      type: n = f.BLOCK,
      style: l
    } = this.props;
    return (0, a.jsxs)("div", {
      className: o()(t, n),
      style: l,
      children: [(0, a.jsxs)(s.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: b.pro,
        children: [u.intl.string(u.t["8tvIiI"]), ":"]
      }), (0, a.jsx)(s.Text, {
        className: o()(b.tip, r),
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