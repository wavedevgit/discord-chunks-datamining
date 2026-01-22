/** Chunk was on 41031 **/
/** chunk id: 829869, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Q: () => O
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  n = require.n(Chunk503698),
  Chunk595768 = require("./595768.js"),
  Chunk323125 = require("./323125.js"),
  Chunk137540 = require("./137540.jsx"),
  Chunk518579 = require("./518579.jsx"),
  Chunk709808 = require("./709808.jsx"),
  Chunk464261 = require("./464261.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk396574 = require("./396574.js"),
  Chunk563853 = require("./563853.js"),
  Chunk855522 = require("./855522.js"),
  Chunk33221 = require("./33221.js");

function k(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
let I = Chunk818348.sE.MAIN_NAVIGATION_MENU;
class O extends Chunk64700.PureComponent {
  componentDidMount() {
    this.setState({
      isAppCompatible: p.VP
    })
  }
  render() {
    let {
      className: e,
      mainContentId: t,
      skipToContentLabel: a,
      onChangeLocale: l,
      TrackClick: r,
      avoidRouter: i
    } = this.props;
    return (0, s.jsxs)("header", {
      className: n()(f.header, e),
      children: [(0, s.jsxs)("nav", {
        className: f.headerInner,
        children: [(0, s.jsxs)("div", {
          className: f.headerLogo,
          children: [(0, s.jsx)(r, {
            tag: "div",
            eventName: I,
            data: {
              linkClicked: "logo"
            },
            children: (0, s.jsx)(c.A, {
              avoidRouter: i,
              to: A.Tk.INDEX,
              from: A.sE.MAIN_NAVIGATION_MENU,
              children: (0, s.jsx)(d.z, {})
            })
          }), null != t ? (0, s.jsx)("a", {
            className: f.skipToContent,
            href: "#".concat(t),
            children: a
          }) : null]
        }), (0, s.jsx)("ul", {
          className: f.headerNav,
          children: (0, s.jsx)(N.C, {
            avoidRouter: i,
            TrackClick: r,
            styles: f
          })
        }), (0, s.jsxs)("ul", {
          className: f.headerNavRight,
          children: [this.renderSocialMediaNav(), (0, s.jsx)(u.B, {
            onChange: l
          })]
        })]
      }), null != t && (0, s.jsx)("div", {
        id: t,
        tabIndex: false
      })]
    })
  }
  constructor(...e) {
    super(...e), k(this, "state", {
      isAppCompatible: true
    }), k(this, "getAppButton", () => {
      let {
        token: e,
        TrackClick: t,
        authRedirectTo: a
      } = this.props, {
        isAppCompatible: l
      } = this.state, r = (0, o.T2)(a), n = b.A.Messages.NAVIGATION_LOGIN;
      return null != e && (r = A.Sb.ME, n = b.A.Messages.NAVIGATION_OPEN), l ? (0, s.jsx)("li", {
        className: f.listItemInactive,
        children: (0, s.jsx)(t, {
          eventName: I,
          className: f.appButton,
          data: {
            linkClicked: e ? "open" : "login",
            googleAnalytics: true
          },
          href: r,
          children: n
        })
      }, "app-button") : null
    }), k(this, "renderSocialMediaNav", () => {
      let {
        TrackClick: e
      } = this.props, t = [{
        route: (0, i.S)(A.Pq.TWITTER),
        linkClicked: "twitter",
        alt: "Discord's Twitter",
        img: h.T.ASSET_SOCIAL_TWITTER
      }, {
        route: A.w7.FACEBOOK_URL,
        linkClicked: "facebook",
        alt: "Discord's Facebook",
        img: h.T.ASSET_SOCIAL_FACEBOOK
      }, {
        route: A.w7.INSTAGRAM_URL,
        linkClicked: "instagram",
        alt: "Discord's Instagram",
        img: h.T.ASSET_SOCIAL_INSTAGRAM
      }].map(t => (0, s.jsx)("li", {
        className: n()(f.listItemInactive, f.listItemSocialMedia),
        children: (0, s.jsx)(e, {
          eventName: I,
          className: f.rightNavLink,
          data: {
            linkClicked: t.linkClicked
          },
          href: t.route,
          rel: "me",
          target: "_blank",
          children: (0, s.jsx)("img", {
            src: t.img,
            alt: t.alt
          })
        })
      }, t.route)), a = this.getAppButton();
      return null != a && t.push(a), t
    })
  }
}