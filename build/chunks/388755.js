/** Chunk was on 87626 **/
a.d(t, {
  D: () => g
}), a(47120);
var n = a(200651),
  s = a(192379),
  r = a(557533),
  l = a.n(r),
  i = a(39383),
  o = a.n(i),
  c = a(608863),
  d = a(66037),
  u = a(643103),
  _ = a(34211),
  p = a(231338),
  m = a(431138),
  h = a(222483);

function N(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let I = p.j_.MAIN_NAVIGATION_MENU;
class g extends s.PureComponent {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown)
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown)
  }
  render() {
    let {
      className: e,
      TrackClick: t,
      onChangeLocale: a,
      avoidRouter: s,
      openNavAriaLabel: r,
      hideNavAriaLabel: i
    } = this.props, {
      menuOpen: o
    } = this.state;
    return (0, n.jsx)("header", {
      className: l()(h.header, e),
      children: (0, n.jsxs)("nav", {
        className: h.headerInner,
        children: [(0, n.jsx)(t, {
          tag: "div",
          eventName: I,
          className: h.headerLogo,
          data: {
            linkClicked: "logo"
          },
          children: (0, n.jsx)(d.Z, {
            avoidRouter: s,
            className: h.logoWrapper,
            to: p.am.INDEX,
            from: p.j_.MAIN_NAVIGATION_MENU,
            children: (0, n.jsx)("img", {
              className: h.logo,
              src: m.r.ASSET_LOGO_DISCORD_SVG,
              alt: "Discord",
              itemProp: "logo"
            })
          })
        }), (0, n.jsx)(t, {
          tag: "div",
          className: h.hamburgerButton,
          eventName: I,
          data: {
            linkClicked: "mobile-menu"
          },
          children: (0, n.jsx)(c.r, {
            open: o,
            "aria-haspopup": "true",
            "aria-label": o ? i : r,
            "aria-expanded": o,
            "aria-controls": this._mainNavId,
            onClick: this.toggleMenu
          })
        }), (0, n.jsxs)("ul", {
          className: o ? h.headerNavOpen : h.headerNav,
          children: [(0, n.jsx)(_.o, {
            avoidRouter: s,
            TrackClick: t,
            styles: h,
            isMobile: !0,
            isVisible: o
          }), (0, n.jsx)(u.p, {
            onChange: a
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), N(this, "_mainNavId", o()("mainNav")), N(this, "state", {
      menuOpen: !1
    }), N(this, "toggleMenu", () => {
      this.setState({
        menuOpen: !this.state.menuOpen
      })
    }), N(this, "handleKeyDown", e => {
      let {
        menuOpen: t
      } = this.state;
      ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), t && this.toggleMenu())
    })
  }
}