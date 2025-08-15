/** Chunk was on 87626 **/
/** chunk id: 548668, original params: e,t,a (module,exports,require) **/
let n;
require.d(exports, {
  $: () => f
});
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk622535 = require("./622535.js"),
  Chunk213919 = require("./213919.js"),
  Chunk982905 = require("./982905.js"),
  Chunk794010 = require("./794010.jsx"),
  Chunk66037 = require("./66037.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk436620 = require("./436620.js"),
  Chunk330711 = require("./330711.js"),
  Chunk10416 = require("./10416.js");

function k(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
let g = "Footer Navigation",
  A = {
    BLURPLE: "Blurple",
    PRIMARY: "Primary"
  },
  O = e => {
    let {
      colorVariant: t,
      animate: a
    } = e;
    return (0, s.jsx)("svg", {
      className: (0, u.l)(I, "footerBackground", t),
      preserveAspectRatio: "none",
      width: "1920",
      height: "100%",
      viewBox: "0 0 1920 330",
      version: "1.1",
      children: (0, s.jsx)("path", {
        className: (0, u.l)(I, "footerBackground", a ? "Play" : "Paused"),
        fill: "#1a1c1e",
        fillOpacity: "0.3",
        d: "M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z"
      })
    })
  };
class f extends(r = Chunk647438.PureComponent) {
  componentDidMount() {
    this.setState({
      token: (0, Chunk213919.getToken)(),
      isAppCompatible: Chunk436620.KO
    })
  }
  renderAppButton(e) {
    if ("STATIC_RENDERER" === this.props.platform) return null;
    let {
      downloadLink: t,
      isMobile: a,
      mobileDownloadText: r,
      platform: l,
      variant: i,
      authRedirectTo: o
    } = this.props, {
      isAppCompatible: c
    } = this.state;
    if (a) return (0, s.jsx)(n, {
      eventName: "Download App",
      data: {
        Platform: l,
        PTB: false,
        Released: true,
        "Referring Location": "Footer"
      },
      alt: "Download Discord",
      target: "_blank",
      className: (0, u.l)(I, "button", i),
      href: t,
      children: r
    });
    if (!c) return (0, s.jsx)(n, {
      eventName: "Download App",
      data: {
        Platform: l,
        PTB: false,
        Released: true,
        "Referring Location": "Footer"
      },
      alt: "Download Discord",
      className: (0, u.l)(I, "button", i),
      href: m.am.DOWNLOAD,
      children: h.Z.Messages.NAVIGATION_DOWNLOAD
    });
    let d = null != o ? m.$w.REGISTER_WITH_REDIRECT(o) : m.$w.REGISTER,
      _ = h.Z.Messages.COMMON_SIGN_UP_NOW;
    return e && (d = m.$w.ME, _ = h.Z.Messages.COMMON_OPEN_DISCORD), (0, s.jsx)(n, {
      eventName: g,
      className: (0, u.l)(I, "button", this.props.variant),
      data: {
        linkClicked: e ? "open" : "login",
        googleAnalytics: true
      },
      href: d,
      children: _
    })
  }
  render() {
    let {
      variant: e,
      style: t,
      className: r,
      avoidRouter: l,
      showWave: i
    } = this.props, {
      animateBackground: d,
      token: _
    } = this.state, p = [{
      title: Chunk330711.Z.Messages.NAVIGATION_PRODUCT,
      routes: [{
        link: Chunk231338.am.DOWNLOAD,
        title: Chunk330711.Z.Messages.NAVIGATION_DOWNLOAD,
        tracking: "download"
      }, {
        link: Chunk231338.am.BRANDING,
        title: Chunk330711.Z.Messages.NAVIGATION_BRANDING,
        tracking: "branding"
      }, {
        link: Chunk231338.am.NITRO,
        title: Chunk330711.Z.Messages.NAVIGATION_NITRO,
        tracking: "nitro",
        external: true
      }]
    }, {
      title: Chunk330711.Z.Messages.NAVIGATION_DEVELOPERS,
      routes: [{
        link: Chunk231338.am.RICH_PRESENCE,
        title: Chunk330711.Z.Messages.NAVIGATION_RICH_PRESENCE,
        tracking: "rich_presence"
      }, {
        link: Chunk231338.am.VERIFICATION,
        title: Chunk330711.Z.Messages.NAVIGATION_VERIFICATION,
        tracking: "verification",
        external: true
      }, {
        link: Chunk231338.yX.DEV_PORTAL_APPLICATIONS,
        title: Chunk330711.Z.Messages.NAVIGATION_APPLICATIONS,
        tracking: "developers",
        external: true
      }, {
        link: Chunk231338.yX.DEV_PORTAL_DOCUMENTATION,
        title: Chunk330711.Z.Messages.NAVIGATION_DOCUMENTATION,
        tracking: "documentation",
        external: true
      }]
    }, {
      title: Chunk330711.Z.Messages.NAVIGATION_RESOURCES,
      routes: [{
        link: Chunk231338.yX.HELP_AND_SUPPORT,
        title: Chunk330711.Z.Messages.NAVIGATION_HELP_AND_SUPPORT,
        tracking: "helpandsupport",
        external: true
      }, {
        link: Chunk231338.am.GUIDELINES,
        title: Chunk330711.Z.Messages.NAVIGATION_GUIDELINES,
        tracking: "guidelines",
        external: true
      }, {
        link: Chunk231338.yX.FEEDBACK,
        title: Chunk330711.Z.Messages.NAVIGATION_FEEDBACK,
        tracking: "feedback",
        external: true
      }, {
        link: Chunk231338.am.TERMS,
        title: Chunk330711.Z.Messages.NAVIGATION_TERMS,
        tracking: "terms",
        external: true
      }, {
        link: Chunk231338.am.PRIVACY,
        title: Chunk330711.Z.Messages.NAVIGATION_PRIVACY,
        tracking: "privacy",
        external: true
      }, {
        link: Chunk231338.am.SECURITY,
        title: Chunk330711.Z.Messages.NAVIGATION_SECURITY,
        tracking: "security"
      }, {
        link: Chunk231338.yX.STATUS,
        title: Chunk330711.Z.Messages.NAVIGATION_STATUS,
        tracking: "status",
        external: true
      }, {
        link: Chunk231338.am.SAFETY_LANDING,
        title: Chunk330711.Z.Messages.NAVIGATION_SAFETY_CENTER,
        tracking: "safetycenter",
        external: true
      }]
    }, {
      title: Chunk330711.Z.Messages.NAVIGATION_COMPANY,
      routes: [{
        link: Chunk231338.am.COMPANY,
        title: Chunk330711.Z.Messages.NAVIGATION_ABOUT,
        tracking: "about"
      }, {
        link: Chunk231338.am.BLOG,
        title: Chunk330711.Z.Messages.NAVIGATION_BLOG,
        tracking: "blog",
        external: true
      }, {
        link: Chunk231338.am.JOBS,
        title: Chunk330711.Z.Messages.NAVIGATION_JOBS,
        tracking: "join",
        external: true
      }]
    }, {
      title: Chunk330711.Z.Messages.NAVIGATION_MORE,
      routes: [{
        link: Chunk231338.am.PARTNERS,
        title: Chunk330711.Z.Messages.NAVIGATION_PARTNERS,
        tracking: "partners",
        external: true
      }, {
        link: Chunk231338.am.HYPESQUAD,
        title: Chunk330711.Z.Messages.NAVIGATION_HYPESQUAD,
        tracking: "hypesquad",
        external: true
      }, {
        link: Chunk231338.yX.PRESS_INQUIRIES,
        title: Chunk330711.Z.Messages.NAVIGATION_PRESS_INQUIRIES,
        tracking: "pressinquiries",
        external: true
      }, {
        link: Chunk231338.am.OPEN_SOURCE,
        title: Chunk330711.Z.Messages.NAVIGATION_OPEN_SOURCE,
        tracking: "open_source"
      }]
    }].map(e => {
      let t = e.routes.map((e, t) => e.external ? (0, s.jsx)(n, {
        className: I.route,
        eventName: g,
        data: {
          linkClicked: e.tracking
        },
        href: e.link,
        children: e.title
      }, e.link || t) : (0, s.jsx)(N.Z, {
        avoidRouter: l,
        to: e.link,
        from: "footer_navigation",
        className: I.route,
        children: (0, s.jsx)(n, {
          tag: "span",
          eventName: g,
          data: {
            linkClicked: e.tracking
          },
          children: e.title
        })
      }, e.link));
      return (0, s.jsxs)("div", {
        className: I.navigationSection,
        children: [(0, s.jsx)("h3", {
          className: I.navigationHeader,
          children: e.title
        }), t]
      }, e.title)
    });
    return (0, Chunk951288.jsx)(Chunk622535.$, {
      innerRef: this.ref,
      onChange: this.handleVisibility,
      children: (0, Chunk951288.jsxs)("footer", {
        ref: this.ref,
        className: o()((0, Chunk982905.l)(Chunk10416, "footer", module), r),
        style: exports,
        children: [Chunk120356 ? (0, Chunk951288.jsx)(O, {
          colorVariant: module,
          animate: Chunk213919
        }) : null, (0, Chunk951288.jsxs)("div", {
          className: Chunk10416.footerContent,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk10416.navigation,
            children: [(0, Chunk951288.jsx)("div", {
              className: Chunk10416.logoWrap,
              children: (0, Chunk951288.jsx)(n, {
                className: Chunk10416.logo,
                href: Chunk231338.am.INDEX,
                eventName: g,
                data: {
                  linkClicked: "logo"
                },
                children: (0, Chunk951288.jsx)("img", {
                  alt: Chunk330711.Z.Messages.NAVIGATION_HOME,
                  src: require("./131529.js")
                })
              })
            }), Chunk436620]
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk10416.separator
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk10416.joinDiscord,
            children: [(0, Chunk951288.jsxs)("div", {
              className: Chunk10416.stats,
              children: [(0, Chunk951288.jsx)("h2", {
                className: Chunk10416.readyToJoin,
                children: Chunk330711.Z.Messages.FOOTER_READY_TO_TRY_DISCORD
              }), (0, Chunk951288.jsx)("h3", {
                className: Chunk10416.joinOtherPlayers,
                children: Chunk330711.Z.Messages.FOOTER_JOIN_OVER_PLAYERS_TODAY.format({
                  num: Chunk231338.vS
                })
              })]
            }), this.renderAppButton(Chunk794010)]
          })]
        })]
      })
    })
  }
  constructor(e) {
    super(e), k(this, "state", {
      animateBackground: false,
      isMobile: null,
      token: null,
      isAppCompatible: true
    }), k(this, "ref", l.createRef()), k(this, "handleVisibility", e => {
      this.setState({
        animateBackground: e
      })
    }), null != e.locale && h.Z.setLocale(e.locale), n = t => (0, s.jsx)(_.Z, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable
        }))), n.forEach(function(t) {
          k(e, t, a[t])
        })
      }
      return e
    }({
      track: e.track,
      trackOutboundLink: e.trackOutboundLink
    }, t))
  }
}
k(f, "Variants", A), k(f, "defaultProps", {
  variant: A.PRIMARY,
  showWave: true
})