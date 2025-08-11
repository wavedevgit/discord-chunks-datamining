/** Chunk was on 87626 **/
/** chunk id: 34211, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  o: () => m
}), require("./388685.js");
var n, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let _ = Chunk231338.j_.MAIN_NAVIGATION_MENU,
  N = e => [{
    route: c.am.DOWNLOAD,
    linkClicked: "download",
    title: d.Z.Messages.NAVIGATION_DOWNLOAD
  }, {
    route: c.am.NITRO,
    linkClicked: "nitro",
    title: d.Z.Messages.NAVIGATION_NITRO,
    external: true
  }, {
    route: c.am.JOBS,
    linkClicked: "jobs",
    title: d.Z.Messages.NAVIGATION_JOBS,
    external: true
  }, {
    title: d.Z.Messages.NAVIGATION_DEVELOPERS,
    links: [{
      route: c.am.RICH_PRESENCE,
      linkClicked: "rich_presence",
      title: d.Z.Messages.NAVIGATION_RICH_PRESENCE
    }, {
      route: c.am.VERIFICATION,
      linkClicked: "verification",
      title: d.Z.Messages.NAVIGATION_VERIFICATION,
      external: true
    }, {
      route: c.yX.DEV_PORTAL,
      linkClicked: "developers",
      title: d.Z.Messages.NAVIGATION_DEVELOPER_PORTAL,
      external: true
    }, {
      route: c.yX.DEV_PORTAL_DOCUMENTATION,
      linkClicked: "documentation",
      title: d.Z.Messages.NAVIGATION_DOCUMENTATION,
      external: true
    }]
  }, {
    title: d.Z.Messages.NAVIGATION_COMMUNITY,
    links: [{
      route: c.am.OPEN_SOURCE,
      linkClicked: "open_source",
      title: d.Z.Messages.NAVIGATION_OPEN_SOURCE
    }, {
      route: c.am.PARTNERS,
      linkClicked: "partners",
      title: d.Z.Messages.NAVIGATION_PARTNERS,
      external: true
    }, {
      route: c.am.HYPESQUAD,
      linkClicked: "hypesquad",
      title: d.Z.Messages.NAVIGATION_HYPESQUAD,
      external: true
    }, {
      route: c.am.GUIDELINES,
      linkClicked: "guidelines",
      title: d.Z.Messages.NAVIGATION_GUIDELINES,
      external: true
    }]
  }, {
    title: d.Z.Messages.NAVIGATION_SUPPORT,
    links: [{
      route: "//support.discord.com/hc/".concat(e),
      linkClicked: "helpandsupport",
      title: d.Z.Messages.NAVIGATION_HELP_AND_SUPPORT,
      external: true
    }, {
      route: c.yX.STATUS,
      linkClicked: "status",
      title: d.Z.Messages.NAVIGATION_STATUS,
      external: true
    }, {
      route: c.am.SAFETY_LANDING,
      linkClicked: "safetycenter",
      title: d.Z.Messages.NAVIGATION_SAFETY_CENTER,
      external: true
    }]
  }];
class m extends(n = Chunk73800.PureComponent) {
  render() {
    let e = (0, Chunk948789.fQ)(this.context.router),
      {
        isMobile: t,
        isVisible: a,
        styles: n,
        TrackClick: s,
        avoidRouter: u
      } = this.props,
      {
        sectionShown: m
      } = this.state;
    return N(null != Chunk330711.Z ? Chunk330711.Z.getLocale().toLowerCase() : "").map(l => null != l.links ? (0, r.jsx)(o.Z, {
      title: l.title,
      links: l.links,
      isOpen: m === l.title,
      isMobile: t,
      avoidRouter: u,
      TrackClick: s,
      onClose: this.closeSubNav,
      onOpen: this.openSubNav
    }, l.title) : l.external && null != l.route ? (0, r.jsx)("li", {
      className: n.listItemInactive,
      role: "none",
      children: (0, r.jsx)(s, {
        className: n.mainNavLink,
        eventName: _,
        data: l.linkClicked ? {
          linkClicked: l.linkClicked
        } : {},
        href: l.route,
        rel: "me",
        children: l.title
      })
    }, "external_link_".concat(l.route)) : null != l.route ? (0, r.jsx)("li", {
      className: e(l.route) ? n.listItemActive : n.listItemInactive,
      role: "none",
      children: (0, r.jsx)(i.Z, {
        avoidRouter: u,
        to: l.route,
        from: c.j_.MAIN_NAVIGATION_MENU,
        tabIndex: a ? 0 : false,
        role: "menuitem",
        children: (0, r.jsx)(s, {
          tag: "span",
          className: n.mainNavLink,
          eventName: _,
          data: {
            linkClicked: l.linkClicked
          },
          children: l.title
        })
      })
    }, "link_".concat(l.route)) : [])
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