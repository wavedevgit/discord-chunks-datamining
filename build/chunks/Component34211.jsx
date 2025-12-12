/** Chunk was on 87626 **/
/** chunk id: 34211, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  o: () => m
}), require("./388685.js");
var n, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk948789 = require("./948789.js"),
  Chunk66037 = require("./66037.jsx"),
  Chunk248108 = require("./248108.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk330711 = require("./330711.js");

function u(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
let N = Chunk231338.j_.MAIN_NAVIGATION_MENU;
class m extends(n = Chunk473749.PureComponent) {
  render() {
    let e, t = (0, Chunk948789.fQ)(this.context.router),
      {
        isMobile: a,
        isVisible: n,
        styles: s,
        TrackClick: u,
        avoidRouter: m
      } = this.props,
      {
        sectionShown: f
      } = this.state;
    return (e = null != Chunk330711.Z ? Chunk330711.Z.getLocale().toLowerCase() : "", [{
      route: Chunk231338.am.DOWNLOAD,
      linkClicked: "download",
      title: Chunk330711.Z.Messages.NAVIGATION_DOWNLOAD
    }, {
      route: Chunk231338.am.NITRO,
      linkClicked: "nitro",
      title: Chunk330711.Z.Messages.NAVIGATION_NITRO,
      external: true
    }, {
      route: Chunk231338.am.JOBS,
      linkClicked: "jobs",
      title: Chunk330711.Z.Messages.NAVIGATION_JOBS,
      external: true
    }, {
      title: Chunk330711.Z.Messages.NAVIGATION_DEVELOPERS,
      links: [{
        route: Chunk231338.am.RICH_PRESENCE,
        linkClicked: "rich_presence",
        title: Chunk330711.Z.Messages.NAVIGATION_RICH_PRESENCE
      }, {
        route: Chunk231338.am.VERIFICATION,
        linkClicked: "verification",
        title: Chunk330711.Z.Messages.NAVIGATION_VERIFICATION,
        external: true
      }, {
        route: Chunk231338.yX.DEV_PORTAL,
        linkClicked: "developers",
        title: Chunk330711.Z.Messages.NAVIGATION_DEVELOPER_PORTAL,
        external: true
      }, {
        route: Chunk231338.yX.DEV_PORTAL_DOCUMENTATION,
        linkClicked: "documentation",
        title: Chunk330711.Z.Messages.NAVIGATION_DOCUMENTATION,
        external: true
      }]
    }, {
      title: Chunk330711.Z.Messages.NAVIGATION_COMMUNITY,
      links: [{
        route: Chunk231338.am.OPEN_SOURCE,
        linkClicked: "open_source",
        title: Chunk330711.Z.Messages.NAVIGATION_OPEN_SOURCE
      }, {
        route: Chunk231338.am.PARTNERS,
        linkClicked: "partners",
        title: Chunk330711.Z.Messages.NAVIGATION_PARTNERS,
        external: true
      }, {
        route: Chunk231338.am.HYPESQUAD,
        linkClicked: "hypesquad",
        title: Chunk330711.Z.Messages.NAVIGATION_HYPESQUAD,
        external: true
      }, {
        route: Chunk231338.am.GUIDELINES,
        linkClicked: "guidelines",
        title: Chunk330711.Z.Messages.NAVIGATION_GUIDELINES,
        external: true
      }]
    }, {
      title: Chunk330711.Z.Messages.NAVIGATION_SUPPORT,
      links: [{
        route: "//support.discord.com/hc/".concat(module),
        linkClicked: "helpandsupport",
        title: Chunk330711.Z.Messages.NAVIGATION_HELP_AND_SUPPORT,
        external: true
      }, {
        route: Chunk231338.yX.STATUS,
        linkClicked: "status",
        title: Chunk330711.Z.Messages.NAVIGATION_STATUS,
        external: true
      }, {
        route: Chunk231338.am.SAFETY_LANDING,
        linkClicked: "safetycenter",
        title: Chunk330711.Z.Messages.NAVIGATION_SAFETY_CENTER,
        external: true
      }]
    }]).map(e => null != e.links ? (0, r.jsx)(o.Z, {
      title: e.title,
      links: e.links,
      isOpen: f === e.title,
      isMobile: a,
      avoidRouter: m,
      TrackClick: u,
      onClose: this.closeSubNav,
      onOpen: this.openSubNav
    }, e.title) : e.external && null != e.route ? (0, r.jsx)("li", {
      className: s.listItemInactive,
      role: "none",
      children: (0, r.jsx)(u, {
        className: s.mainNavLink,
        eventName: N,
        data: e.linkClicked ? {
          linkClicked: e.linkClicked
        } : {},
        href: e.route,
        rel: "me",
        children: e.title
      })
    }, "external_link_".concat(e.route)) : null != e.route ? (0, r.jsx)("li", {
      className: t(e.route) ? s.listItemActive : s.listItemInactive,
      role: "none",
      children: (0, r.jsx)(i.Z, {
        avoidRouter: m,
        to: e.route,
        from: c.j_.MAIN_NAVIGATION_MENU,
        tabIndex: n ? 0 : false,
        role: "menuitem",
        children: (0, r.jsx)(u, {
          tag: "span",
          className: s.mainNavLink,
          eventName: N,
          data: {
            linkClicked: e.linkClicked
          },
          children: e.title
        })
      })
    }, "link_".concat(e.route)) : [])
  }
  constructor(...e) {
    super(...e), u(this, "state", {
      sectionShown: null
    }), u(this, "closeSubNav", () => {
      let {
        sectionShown: e
      } = this.state;
      null !== e && this.setState({
        sectionShown: null
      })
    }), u(this, "openSubNav", e => {
      let {
        sectionShown: t
      } = this.state;
      t !== e && this.setState({
        sectionShown: e
      })
    })
  }
}
u(m, "defaultProps", {
  isMobile: false,
  isVisible: true
})