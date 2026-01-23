/** Chunk was on 41031 **/
/** chunk id: 829869, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Q: () => g
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

function I(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
let k = Chunk818348.sE.MAIN_NAVIGATION_MENU;
class g extends Chunk64700.PureComponent {
  componentDidMount() {
    this.setState({
      isAppCompatible: A.VP
    })
  }
  render() {
    let {
      className: e,
      mainContentId: t,
      skipToContentLabel: a,
      onChangeLocale: s,
      TrackClick: l,
      avoidRouter: i
    } = this.props;
    return (0, r.jsxs)("header", {
      className: n()(m.header, e),
      children: [(0, r.jsxs)("nav", {
        className: m.headerInner,
        children: [(0, r.jsxs)("div", {
          className: m.headerLogo,
          children: [(0, r.jsx)(l, {
            tag: "div",
            eventName: k,
            data: {
              linkClicked: "logo"
            },
            children: (0, r.jsx)(c.A, {
              avoidRouter: i,
              to: N.Tk.INDEX,
              from: N.sE.MAIN_NAVIGATION_MENU,
              children: (0, r.jsx)(d.z, {})
            })
          }), null != t ? (0, r.jsx)("a", {
            className: m.skipToContent,
            href: "#".concat(t),
            children: a
          }) : null]
        }), (0, r.jsx)("ul", {
          className: m.headerNav,
          children: (0, r.jsx)(_.C, {
            avoidRouter: i,
            TrackClick: l,
            styles: m
          })
        }), (0, r.jsxs)("ul", {
          className: m.headerNavRight,
          children: [this.renderSocialMediaNav(), (0, r.jsx)(u.B, {
            onChange: s
          })]
        })]
      }), null != t && (0, r.jsx)("div", {
        id: t,
        tabIndex: false
      })]
    })
  }
  constructor(...e) {
    super(...e), I(this, "state", {
      isAppCompatible: true
    }), I(this, "getAppButton", () => {
      let {
        token: e,
        TrackClick: t,
        authRedirectTo: a
      } = this.props, {
        isAppCompatible: s
      } = this.state, l = (0, o.T2)(a), n = h.A.Messages.NAVIGATION_LOGIN;
      return null != e && (l = N.Sb.ME, n = h.A.Messages.NAVIGATION_OPEN), s ? (0, r.jsx)("li", {
        className: m.listItemInactive,
        children: (0, r.jsx)(t, {
          eventName: k,
          className: m.appButton,
          data: {
            linkClicked: e ? "open" : "login",
            googleAnalytics: true
          },
          href: l,
          children: n
        })
      }, "app-button") : null
    }), I(this, "renderSocialMediaNav", () => {
      let {
        TrackClick: e
      } = this.props, t = [{
        route: (0, i.S)(N.Pq.TWITTER),
        linkClicked: "twitter",
        alt: "Discord's Twitter",
        img: p.T.ASSET_SOCIAL_TWITTER
      }, {
        route: N.w7.FACEBOOK_URL,
        linkClicked: "facebook",
        alt: "Discord's Facebook",
        img: p.T.ASSET_SOCIAL_FACEBOOK
      }, {
        route: N.w7.INSTAGRAM_URL,
        linkClicked: "instagram",
        alt: "Discord's Instagram",
        img: p.T.ASSET_SOCIAL_INSTAGRAM
      }].map(t => (0, r.jsx)("li", {
        className: n()(m.listItemInactive, m.listItemSocialMedia),
        children: (0, r.jsx)(e, {
          eventName: k,
          className: m.rightNavLink,
          data: {
            linkClicked: t.linkClicked
          },
          href: t.route,
          rel: "me",
          target: "_blank",
          children: (0, r.jsx)("img", {
            src: t.img,
            alt: t.alt
          })
        })
      }, t.route)), a = this.getAppButton();
      return null != a && t.push(a), t
    })
  }
}