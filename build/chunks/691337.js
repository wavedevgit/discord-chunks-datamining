/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => p
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(481060),
  l = n(600164),
  c = n(259580),
  u = n(415806);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class f extends i.PureComponent {
  handleClick(e) {
    let {
      onBreadcrumbClick: t
    } = this.props;
    null != t && t(e)
  }
  render() {
    let {
      breadcrumbs: e,
      className: t
    } = this.props, n = e.map(this.renderBreadcrumb);
    return (0, r.jsx)(l.Z, {
      justify: l.Z.Justify.START,
      className: a()(u.breadcrumbs, t),
      children: n
    })
  }
  constructor(...e) {
    super(...e), d(this, "renderBreadcrumb", (e, t) => {
      let {
        activeId: n,
        onBreadcrumbClick: i,
        breadcrumbs: o,
        renderCustomBreadcrumb: l,
        separatorClassName: d
      } = this.props, f = e.id === n, p = () => this.handleClick(e), _ = t === o.length - 1, h = null != l ? l(e, f) : (0, r.jsx)("span", {
        className: a()(u.breadcrumb, {
          [u.activeBreadcrumb]: f,
          [u.interactiveBreadcrumb]: null != i
        }),
        children: e.label
      });
      return (0, r.jsxs)("div", {
        className: a()(u.breadcrumbWrapper, {
          [u.breadcrumbFinalWrapper]: _
        }),
        children: [null != i ? (0, r.jsx)(s.P3F, {
          tag: "span",
          onClick: p,
          className: u.breadcrumbClickWrapper,
          children: h
        }) : h, _ ? null : (0, r.jsx)(c.Z, {
          className: a()(u.breadcrumbArrow, d),
          direction: c.Z.Directions.RIGHT
        })]
      }, e.id)
    })
  }
}
let p = f