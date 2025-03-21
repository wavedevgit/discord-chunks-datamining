/** Chunk was on 98977 **/
n.d(e, {
  Z: () => E
});
var r, s, i = n(200651),
  l = n(192379),
  a = n(120356),
  u = n.n(a),
  o = n(481060),
  c = n(388032),
  d = n(741715);
let A = {
  BLOCK: d.block,
  INLINE: d.inline
};
class _ extends(s = l.PureComponent) {
  render() {
    let {
      children: t,
      className: e,
      textClassName: n,
      type: r = A.BLOCK,
      style: s
    } = this.props;
    return (0, i.jsxs)("div", {
      className: u()(e, r),
      style: s,
      children: [(0, i.jsxs)(o.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-positive",
        className: d.pro,
        children: [c.NW.string(c.t["8tvIiI"]), ":"]
      }), (0, i.jsx)(o.Text, {
        className: u()(d.tip, n),
        variant: "text-sm/normal",
        children: t
      })]
    })
  }
}(r = "Types") in _ ? Object.defineProperty(_, r, {
  value: A,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : _[r] = A;
let E = _