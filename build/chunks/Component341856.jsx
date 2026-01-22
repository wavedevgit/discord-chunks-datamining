/** Chunk was on 41031 **/
/** chunk id: 341856, original params: e,t,a (module,exports,require) **/
let s;
require.d(exports, {
  w: () => g
});
var l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk230109 = require("./230109.js"),
  Chunk247775 = require("./247775.js"),
  Chunk489569 = require("./489569.js"),
  Chunk409291 = require("./409291.jsx"),
  Chunk137540 = require("./137540.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk396574 = require("./396574.js"),
  Chunk855522 = require("./855522.js"),
  Chunk621647 = require("./621647.js");

function k(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
let I = "Footer Navigation",
  O = {
    BLURPLE: "Blurple",
    PRIMARY: "Primary"
  },
  m = e => {
    let {
      colorVariant: t,
      animate: a
    } = e;
    return (0, r.jsx)("svg", {
      className: (0, u.t)(f, "footerBackground", t),
      preserveAspectRatio: "none",
      width: "1920",
      height: "100%",
      viewBox: "0 0 1920 330",
      version: "1.1",
      children: (0, r.jsx)("path", {
        className: (0, u.t)(f, "footerBackground", a ? "Play" : "Paused"),
        fill: "#1a1c1e",
        fillOpacity: "0.3",
        d: "M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z"
      })
    })
  };
class g extends(l = Chunk64700.PureComponent) {
  componentDidMount() {
    this.setState({
      token: (0, d.getToken)(),
      isAppCompatible: h.VP
    })
  }
  renderAppButton(e) {
    if ("STATIC_RENDERER" === this.props.platform) return null;
    let {
      downloadLink: t,
      isMobile: a,
      mobileDownloadText: l,
      platform: n,
      variant: i,
      authRedirectTo: o
    } = this.props, {
      isAppCompatible: c
    } = this.state;
    if (a) return (0, r.jsx)(s, {
      eventName: "Download App",
      data: {
        Platform: n,
        PTB: false,
        Released: true,
        "Referring Location": "Footer"
      },
      alt: "Download Discord",
      target: "_blank",
      className: (0, u.t)(f, "button", i),
      href: t,
      children: l
    });
    if (!c) return (0, r.jsx)(s, {
      eventName: "Download App",
      data: {
        Platform: n,
        PTB: false,
        Released: true,
        "Referring Location": "Footer"
      },
      alt: "Download Discord",
      className: (0, u.t)(f, "button", i),
      href: p.Tk.DOWNLOAD,
      children: b.A.Messages.NAVIGATION_DOWNLOAD
    });
    let d = null != o ? p.Sb.REGISTER_WITH_REDIRECT(o) : p.Sb.REGISTER,
      N = b.A.Messages.COMMON_SIGN_UP_NOW;
    return e && (d = p.Sb.ME, N = b.A.Messages.COMMON_OPEN_DISCORD), (0, r.jsx)(s, {
      eventName: I,
      className: (0, u.t)(f, "button", this.props.variant),
      data: {
        linkClicked: e ? "open" : "login",
        googleAnalytics: true
      },
      href: d,
      children: N
    })
  }
  render() {
    let {
      variant: e,
      style: t,
      className: l,
      avoidRouter: n,
      showWave: i
    } = this.props, {
      animateBackground: d,
      token: N
    } = this.state, h = [{
      title: b.A.Messages.NAVIGATION_PRODUCT,
      routes: [{
        link: p.Tk.DOWNLOAD,
        title: b.A.Messages.NAVIGATION_DOWNLOAD,
        tracking: "download"
      }, {
        link: p.Tk.BRANDING,
        title: b.A.Messages.NAVIGATION_BRANDING,
        tracking: "branding"
      }, {
        link: p.Tk.NITRO,
        title: b.A.Messages.NAVIGATION_NITRO,
        tracking: "nitro",
        external: true
      }]
    }, {
      title: b.A.Messages.NAVIGATION_DEVELOPERS,
      routes: [{
        link: p.Tk.RICH_PRESENCE,
        title: b.A.Messages.NAVIGATION_RICH_PRESENCE,
        tracking: "rich_presence"
      }, {
        link: p.Tk.VERIFICATION,
        title: b.A.Messages.NAVIGATION_VERIFICATION,
        tracking: "verification",
        external: true
      }, {
        link: p.qF.DEV_PORTAL_APPLICATIONS,
        title: b.A.Messages.NAVIGATION_APPLICATIONS,
        tracking: "developers",
        external: true
      }, {
        link: p.qF.DEV_PORTAL_DOCUMENTATION,
        title: b.A.Messages.NAVIGATION_DOCUMENTATION,
        tracking: "documentation",
        external: true
      }]
    }, {
      title: b.A.Messages.NAVIGATION_RESOURCES,
      routes: [{
        link: p.qF.HELP_AND_SUPPORT,
        title: b.A.Messages.NAVIGATION_HELP_AND_SUPPORT,
        tracking: "helpandsupport",
        external: true
      }, {
        link: p.Tk.GUIDELINES,
        title: b.A.Messages.NAVIGATION_GUIDELINES,
        tracking: "guidelines",
        external: true
      }, {
        link: p.qF.FEEDBACK,
        title: b.A.Messages.NAVIGATION_FEEDBACK,
        tracking: "feedback",
        external: true
      }, {
        link: p.Tk.TERMS,
        title: b.A.Messages.NAVIGATION_TERMS,
        tracking: "terms",
        external: true
      }, {
        link: p.Tk.PRIVACY,
        title: b.A.Messages.NAVIGATION_PRIVACY,
        tracking: "privacy",
        external: true
      }, {
        link: p.Tk.SECURITY,
        title: b.A.Messages.NAVIGATION_SECURITY,
        tracking: "security"
      }, {
        link: p.qF.STATUS,
        title: b.A.Messages.NAVIGATION_STATUS,
        tracking: "status",
        external: true
      }, {
        link: p.Tk.SAFETY_LANDING,
        title: b.A.Messages.NAVIGATION_SAFETY_CENTER,
        tracking: "safetycenter",
        external: true
      }]
    }, {
      title: b.A.Messages.NAVIGATION_COMPANY,
      routes: [{
        link: p.Tk.COMPANY,
        title: b.A.Messages.NAVIGATION_ABOUT,
        tracking: "about"
      }, {
        link: p.Tk.BLOG,
        title: b.A.Messages.NAVIGATION_BLOG,
        tracking: "blog",
        external: true
      }, {
        link: p.Tk.JOBS,
        title: b.A.Messages.NAVIGATION_JOBS,
        tracking: "join",
        external: true
      }]
    }, {
      title: b.A.Messages.NAVIGATION_MORE,
      routes: [{
        link: p.Tk.PARTNERS,
        title: b.A.Messages.NAVIGATION_PARTNERS,
        tracking: "partners",
        external: true
      }, {
        link: p.Tk.HYPESQUAD,
        title: b.A.Messages.NAVIGATION_HYPESQUAD,
        tracking: "hypesquad",
        external: true
      }, {
        link: p.qF.PRESS_INQUIRIES,
        title: b.A.Messages.NAVIGATION_PRESS_INQUIRIES,
        tracking: "pressinquiries",
        external: true
      }, {
        link: p.Tk.OPEN_SOURCE,
        title: b.A.Messages.NAVIGATION_OPEN_SOURCE,
        tracking: "open_source"
      }]
    }].map(e => {
      let t = e.routes.map((e, t) => e.external ? (0, r.jsx)(s, {
        className: f.route,
        eventName: I,
        data: {
          linkClicked: e.tracking
        },
        href: e.link,
        children: e.title
      }, e.link || t) : (0, r.jsx)(A.A, {
        avoidRouter: n,
        to: e.link,
        from: "footer_navigation",
        className: f.route,
        children: (0, r.jsx)(s, {
          tag: "span",
          eventName: I,
          data: {
            linkClicked: e.tracking
          },
          children: e.title
        })
      }, e.link));
      return (0, r.jsxs)("div", {
        className: f.navigationSection,
        children: [(0, r.jsx)("h3", {
          className: f.navigationHeader,
          children: e.title
        }), t]
      }, e.title)
    });
    return (0, r.jsx)(c.L, {
      innerRef: this.ref,
      onChange: this.handleVisibility,
      children: (0, r.jsxs)("footer", {
        ref: this.ref,
        className: o()((0, u.t)(f, "footer", e), l),
        style: t,
        children: [i ? (0, r.jsx)(m, {
          colorVariant: e,
          animate: d
        }) : null, (0, r.jsxs)("div", {
          className: f.footerContent,
          children: [(0, r.jsxs)("div", {
            className: f.navigation,
            children: [(0, r.jsx)("div", {
              className: f.logoWrap,
              children: (0, r.jsx)(s, {
                className: f.logo,
                href: p.Tk.INDEX,
                eventName: I,
                data: {
                  linkClicked: "logo"
                },
                children: (0, r.jsx)("img", {
                  alt: b.A.Messages.NAVIGATION_HOME,
                  src: a(611411)
                })
              })
            }), h]
          }), (0, r.jsx)("div", {
            className: f.separator
          }), (0, r.jsxs)("div", {
            className: f.joinDiscord,
            children: [(0, r.jsxs)("div", {
              className: f.stats,
              children: [(0, r.jsx)("h2", {
                className: f.readyToJoin,
                children: b.A.Messages.FOOTER_READY_TO_TRY_DISCORD
              }), (0, r.jsx)("h3", {
                className: f.joinOtherPlayers,
                children: b.A.Messages.FOOTER_JOIN_OVER_PLAYERS_TODAY.format({
                  num: p.sh
                })
              })]
            }), this.renderAppButton(N)]
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
    }), k(this, "ref", n.createRef()), k(this, "handleVisibility", e => {
      this.setState({
        animateBackground: e
      })
    }), null != e.locale && b.A.setLocale(e.locale), s = t => (0, r.jsx)(N.A, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
          s = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable
        }))), s.forEach(function(t) {
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
k(g, "Variants", O), k(g, "defaultProps", {
  variant: O.PRIMARY,
  showWave: true
})