/** Chunk was on 1272 **/
/** chunk id: 993977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk58642 = require("./58642.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk490983 = require("./490983.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk804739 = require("./804739.js"),
  Chunk957657 = require("./957657.jsx"),
  Chunk34305 = require("./34305.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk77839 = require("./77839.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e) {
  let {
    applicationViewItems: t,
    restoreApplication: n
  } = e;
  if (0 === t.length) return null;
  let i = t.map(e => {
    let t = e.libraryApplication.getDistributor();
    return (0, r.jsxs)("div", {
      className: b.hiddenLibraryApplication,
      children: [(0, r.jsxs)(o.Z, {
        direction: o.Z.Direction.VERTICAL,
        className: b.hiddenLibraryApplicationContent,
        children: [(0, r.jsx)("div", {
          className: b.applicationName,
          children: e.libraryApplication.getBranchedName(e.application)
        }), null != t ? (0, r.jsx)("div", {
          className: b.applicationSubText,
          children: m.EOG[t]
        }) : null]
      }), (0, r.jsx)(a.P3F, {
        className: b.restoreButton,
        onClick: () => n(e.libraryApplication),
        children: (0, r.jsx)(a.Dio, {
          size: "md",
          color: "currentColor",
          className: b.restoreIcon
        })
      })]
    }, e.key)
  });
  return (0, r.jsxs)("div", {
    className: b.hiddenLibraryApplications,
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-md/semibold",
      className: b.hiddenLibraryApplicationsTitle,
      children: _.intl.string(_.t["5PJtrH"])
    }), i]
  })
}
class v extends Chunk473749.PureComponent {
  handleToggleShortcutDesktop(e) {
    c.Xc.updateSetting(e)
  }
  handleToggleShortcutStartMenu(e) {
    c.Pe.updateSetting(e)
  }
  trackRestoreApplication(e, t) {
    d.default.track(m.rMx.APPLICATION_SETTINGS_UPDATED, O({
      hidden_enabled: t
    }, e.getAnalyticsData()))
  }
  renderBody() {
    let {
      hiddenLibraryApplicationViewItems: e,
      installShortcutDesktop: t,
      installShortcutStartMenu: n
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk77839.body,
      children: [(0, Chunk804739.Q)() ? (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t["9ID+Kh"]),
          description: Chunk388032.intl.string(Chunk388032.t.vT61N0),
          checked: exports,
          onChange: this.handleToggleShortcutDesktop
        }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.vNpUMz),
          description: Chunk388032.intl.string(Chunk388032.t.cpYp0H),
          checked: require,
          onChange: this.handleToggleShortcutStartMenu
        }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk34305.Z, {})]
      }) : null, (0, Chunk54381.jsx)(y, {
        restoreApplication: this.handleRestoreHiddenLibraryApplication,
        applicationViewItems: module
      })]
    })
  }
  render() {
    return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk957657.Z, {
        currentRoute: Chunk981631.Z5c.APPLICATION_LIBRARY_SETTINGS
      }), (0, Chunk54381.jsx)(Chunk481060.w0Z, {
        className: Chunk77839.scroller,
        children: this.renderBody()
      })]
    })
  }
  constructor(...e) {
    super(...e), E(this, "handleRestoreHiddenLibraryApplication", e => {
      let t = p.x9(e.getFlags(), m.eHb.HIDDEN);
      s.h(e.id, e.branchId, t), this.trackRestoreApplication(e, p.yE(t, m.eHb.HIDDEN))
    })
  }
}

function I() {
  let e = {
    installShortcutDesktop: Chunk695346.Xc.useSetting(),
    installShortcutStartMenu: Chunk695346.Pe.useSetting(),
    hiddenLibraryApplicationViewItems: (0, Chunk442837.e7)([Chunk490983.Z], () => Chunk490983.Z.hiddenLibraryApplicationViewItems)
  };
  return (0, Chunk54381.jsx)(v, O({}, module))
}