/** Chunk was on 87626 **/
/** chunk id: 653371, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  a: () => A
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk771950 = require("./771950.js"),
  Chunk860911 = require("./860911.js"),
  Chunk66037 = require("./66037.jsx"),
  Chunk787907 = require("./787907.jsx"),
  Chunk643103 = require("./643103.jsx"),
  Chunk34211 = require("./34211.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk436620 = require("./436620.js"),
  Chunk431138 = require("./431138.js"),
  Chunk330711 = require("./330711.js"),
  Chunk234517 = require("./234517.js");

function k(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
let g = Chunk231338.j_.MAIN_NAVIGATION_MENU;
class A extends Chunk647438.PureComponent {
  componentDidMount() {
    this.setState({
      isAppCompatible: Chunk436620.KO
    })
  }
  render() {
    let {
      className: e,
      mainContentId: t,
      skipToContentLabel: a,
      onChangeLocale: r,
      TrackClick: s,
      avoidRouter: i
    } = this.props;
    return (0, Chunk951288.jsxs)("header", {
      className: l()(Chunk234517.header, module),
      children: [(0, Chunk951288.jsxs)("nav", {
        className: Chunk234517.headerInner,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk234517.headerLogo,
          children: [(0, Chunk951288.jsx)(Chunk120356, {
            tag: "div",
            eventName: g,
            data: {
              linkClicked: "logo"
            },
            children: (0, Chunk951288.jsx)(Chunk66037.Z, {
              avoidRouter: Chunk771950,
              to: Chunk231338.am.INDEX,
              from: Chunk231338.j_.MAIN_NAVIGATION_MENU,
              children: (0, Chunk951288.jsx)(Chunk787907.O, {})
            })
          }), null != exports ? (0, Chunk951288.jsx)("a", {
            className: Chunk234517.skipToContent,
            href: "#".concat(exports),
            children: require
          }) : null]
        }), (0, Chunk951288.jsx)("ul", {
          className: Chunk234517.headerNav,
          children: (0, Chunk951288.jsx)(Chunk34211.o, {
            avoidRouter: Chunk771950,
            TrackClick: Chunk120356,
            styles: Chunk234517
          })
        }), (0, Chunk951288.jsxs)("ul", {
          className: Chunk234517.headerNavRight,
          children: [this.renderSocialMediaNav(), (0, Chunk951288.jsx)(Chunk643103.p, {
            onChange: Chunk647438
          })]
        })]
      }), null != exports && (0, Chunk951288.jsx)("div", {
        id: exports,
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
        isAppCompatible: r
      } = this.state, s = (0, o.Ui)(a), l = h.Z.Messages.NAVIGATION_LOGIN;
      return null != e && (s = N.$w.ME, l = h.Z.Messages.NAVIGATION_OPEN), r ? (0, n.jsx)("li", {
        className: I.listItemInactive,
        children: (0, n.jsx)(t, {
          eventName: g,
          className: I.appButton,
          data: {
            linkClicked: e ? "open" : "login",
            googleAnalytics: true
          },
          href: s,
          children: l
        })
      }, "app-button") : null
    }), k(this, "renderSocialMediaNav", () => {
      let {
        TrackClick: e
      } = this.props, t = [{
        route: (0, i.L)(N.RK.TWITTER),
        linkClicked: "twitter",
        alt: "Discord's Twitter",
        img: p.r.ASSET_SOCIAL_TWITTER
      }, {
        route: N.fK.FACEBOOK_URL,
        linkClicked: "facebook",
        alt: "Discord's Facebook",
        img: p.r.ASSET_SOCIAL_FACEBOOK
      }, {
        route: N.fK.INSTAGRAM_URL,
        linkClicked: "instagram",
        alt: "Discord's Instagram",
        img: p.r.ASSET_SOCIAL_INSTAGRAM
      }].map(t => (0, n.jsx)("li", {
        className: l()(I.listItemInactive, I.listItemSocialMedia),
        children: (0, n.jsx)(e, {
          eventName: g,
          className: I.rightNavLink,
          data: {
            linkClicked: t.linkClicked
          },
          href: t.route,
          rel: "me",
          target: "_blank",
          children: (0, n.jsx)("img", {
            src: t.img,
            alt: t.alt
          })
        })
      }, t.route)), a = this.getAppButton();
      return null != a && t.push(a), t
    })
  }
}