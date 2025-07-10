/** Chunk was on 32670 **/
t.d(n, {
  Z: () => _
});
var i, l, s = t(255367),
  r = t(73800),
  c = t(120356),
  a = t.n(c),
  o = t(481060),
  d = t(388032),
  p = t(108921);
let u = {
  BLOCK: p.block,
  INLINE: p.inline
};
class h extends(l = r.PureComponent) {
  render() {
    let {
      children: e,
      className: n,
      textClassName: t,
      type: i = u.BLOCK,
      style: l
    } = this.props;
    return (0, s.jsxs)("div", {
      className: a()(n, i),
      style: l,
      children: [(0, s.jsxs)(o.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: p.pro,
        children: [d.intl.string(d.t["8tvIiI"]), ":"]
      }), (0, s.jsx)(o.Text, {
        className: a()(p.tip, t),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}(i = "Types") in h ? Object.defineProperty(h, i, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : h[i] = u;
let _ = h