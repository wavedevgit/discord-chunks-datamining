/** Chunk was on 87626 **/
a.d(t, {
  h: () => N
});
var n, s, r, l = a(200651),
  i = a(192379),
  o = a(476400),
  c = a.n(o),
  d = a(948789),
  u = a(982905),
  _ = a(66037),
  p = a(231338),
  m = a(28577);
let h = p.j_.MAIN_NAVIGATION_MENU;
class N extends(r = i.PureComponent) {
  render() {
    let e = (0, d.fQ)(this.context.router),
      {
        isOpen: t,
        dropdownLinks: a,
        TrackClick: n,
        avoidRouter: s,
        id: r,
        "aria-label": i
      } = this.props,
      o = a.map((t, a) => t.divider ? (0, l.jsx)("hr", {
        className: m.divider
      }, "divider-".concat(a)) : t.external ? (0, l.jsx)("li", {
        className: m.moreListItemInactive,
        children: (0, l.jsx)(n, {
          className: m.moreListLink,
          eventName: h,
          data: {
            linkClicked: t.linkClicked
          },
          href: t.route,
          rel: "me",
          children: (0, l.jsx)("span", {
            className: m.moreListLinkCopy,
            children: t.title
          })
        })
      }, t.route) : (0, l.jsx)("li", {
        className: (0, u.l)(m, "moreListItem", e(t.route) ? "Active" : "Inactive"),
        children: (0, l.jsx)(_.Z, {
          avoidRouter: s,
          className: m.moreListLink,
          to: t.route,
          from: p.j_.MAIN_NAVIGATION_MENU,
          role: "menuitem",
          children: (0, l.jsx)(n, {
            tag: "span",
            className: m.moreListLinkCopy,
            eventName: h,
            data: {
              linkClicked: t.linkClicked
            },
            children: t.title
          })
        })
      }, t.route));
    return (0, l.jsx)("ul", {
      id: r,
      className: (0, u.l)(m, "moreList", t ? "Open" : "Closed"),
      "aria-label": i,
      children: o
    })
  }
}
n = "contextTypes", s = {
  router: c().object.isRequired
}, n in N ? Object.defineProperty(N, n, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : N[n] = s