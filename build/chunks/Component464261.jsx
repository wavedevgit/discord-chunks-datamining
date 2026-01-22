/** Chunk was on 41031 **/
/** chunk id: 464261, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  C: () => A
}), require("./896048.js");
var s, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk877227 = require("./877227.js"),
  Chunk137540 = require("./137540.jsx"),
  Chunk112895 = require("./112895.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk855522 = require("./855522.js");

function u(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
let N = Chunk818348.sE.MAIN_NAVIGATION_MENU;
class A extends(s = Chunk64700.PureComponent) {
  render() {
    let e, t = (0, n.dI)(this.context.router),
      {
        isMobile: a,
        isVisible: s,
        styles: r,
        TrackClick: u,
        avoidRouter: A
      } = this.props,
      {
        sectionShown: p
      } = this.state;
    return (e = null != d.A ? d.A.getLocale().toLowerCase() : "", [{
      route: c.Tk.DOWNLOAD,
      linkClicked: "download",
      title: d.A.Messages.NAVIGATION_DOWNLOAD
    }, {
      route: c.Tk.NITRO,
      linkClicked: "nitro",
      title: d.A.Messages.NAVIGATION_NITRO,
      external: true
    }, {
      route: c.Tk.JOBS,
      linkClicked: "jobs",
      title: d.A.Messages.NAVIGATION_JOBS,
      external: true
    }, {
      title: d.A.Messages.NAVIGATION_DEVELOPERS,
      links: [{
        route: c.Tk.RICH_PRESENCE,
        linkClicked: "rich_presence",
        title: d.A.Messages.NAVIGATION_RICH_PRESENCE
      }, {
        route: c.Tk.VERIFICATION,
        linkClicked: "verification",
        title: d.A.Messages.NAVIGATION_VERIFICATION,
        external: true
      }, {
        route: c.qF.DEV_PORTAL,
        linkClicked: "developers",
        title: d.A.Messages.NAVIGATION_DEVELOPER_PORTAL,
        external: true
      }, {
        route: c.qF.DEV_PORTAL_DOCUMENTATION,
        linkClicked: "documentation",
        title: d.A.Messages.NAVIGATION_DOCUMENTATION,
        external: true
      }]
    }, {
      title: d.A.Messages.NAVIGATION_COMMUNITY,
      links: [{
        route: c.Tk.OPEN_SOURCE,
        linkClicked: "open_source",
        title: d.A.Messages.NAVIGATION_OPEN_SOURCE
      }, {
        route: c.Tk.PARTNERS,
        linkClicked: "partners",
        title: d.A.Messages.NAVIGATION_PARTNERS,
        external: true
      }, {
        route: c.Tk.HYPESQUAD,
        linkClicked: "hypesquad",
        title: d.A.Messages.NAVIGATION_HYPESQUAD,
        external: true
      }, {
        route: c.Tk.GUIDELINES,
        linkClicked: "guidelines",
        title: d.A.Messages.NAVIGATION_GUIDELINES,
        external: true
      }]
    }, {
      title: d.A.Messages.NAVIGATION_SUPPORT,
      links: [{
        route: "//support.discord.com/hc/".concat(e),
        linkClicked: "helpandsupport",
        title: d.A.Messages.NAVIGATION_HELP_AND_SUPPORT,
        external: true
      }, {
        route: c.qF.STATUS,
        linkClicked: "status",
        title: d.A.Messages.NAVIGATION_STATUS,
        external: true
      }, {
        route: c.Tk.SAFETY_LANDING,
        linkClicked: "safetycenter",
        title: d.A.Messages.NAVIGATION_SAFETY_CENTER,
        external: true
      }]
    }]).map(e => null != e.links ? (0, l.jsx)(o.A, {
      title: e.title,
      links: e.links,
      isOpen: p === e.title,
      isMobile: a,
      avoidRouter: A,
      TrackClick: u,
      onClose: this.closeSubNav,
      onOpen: this.openSubNav
    }, e.title) : e.external && null != e.route ? (0, l.jsx)("li", {
      className: r.listItemInactive,
      role: "none",
      children: (0, l.jsx)(u, {
        className: r.mainNavLink,
        eventName: N,
        data: e.linkClicked ? {
          linkClicked: e.linkClicked
        } : {},
        href: e.route,
        rel: "me",
        children: e.title
      })
    }, "external_link_".concat(e.route)) : null != e.route ? (0, l.jsx)("li", {
      className: t(e.route) ? r.listItemActive : r.listItemInactive,
      role: "none",
      children: (0, l.jsx)(i.A, {
        avoidRouter: A,
        to: e.route,
        from: c.sE.MAIN_NAVIGATION_MENU,
        tabIndex: s ? 0 : false,
        role: "menuitem",
        children: (0, l.jsx)(u, {
          tag: "span",
          className: r.mainNavLink,
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
u(A, "defaultProps", {
  isMobile: false,
  isVisible: true
})