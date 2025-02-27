/** Chunk was on 57951 **/
n.d(t, {
  Z: () => g
}), n(266796);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  s = n.n(o),
  c = n(481060),
  a = n(600164),
  l = n(258083),
  u = n(802138);
class p extends i.PureComponent {
  render() {
    let {
      title: e,
      description: t,
      agreement: n,
      disagreement: i,
      onAgree: o,
      onDisagree: p,
      imageClassName: g,
      agreementButtonColor: f = c.zxk.Colors.RED
    } = this.props;
    return (0, r.jsxs)(a.Z, {
      className: l.gatedContent,
      justify: a.Z.Justify.CENTER,
      align: a.Z.Align.CENTER,
      direction: a.Z.Direction.VERTICAL,
      children: [(0, r.jsx)("div", {
        className: s()(l.image, g)
      }), (0, r.jsx)("div", {
        className: s()(l.title, u.marginBottom8),
        children: e
      }), (0, r.jsx)("div", {
        className: s()(l.description, u.marginBottom20),
        children: t
      }), (0, r.jsxs)(a.Z, {
        justify: a.Z.Justify.CENTER,
        align: a.Z.Align.CENTER,
        grow: 0,
        children: [null != i ? (0, r.jsx)(c.zxk, {
          className: l.action,
          size: c.PhG.LARGE,
          color: c.Ttl.PRIMARY,
          onClick: p,
          children: i
        }) : null, null != n ? (0, r.jsx)(c.zxk, {
          className: l.action,
          color: f,
          size: c.PhG.LARGE,
          onClick: o,
          children: n
        }) : null]
      })]
    })
  }
}
let g = p