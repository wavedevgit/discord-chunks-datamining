/** Chunk was on 1272 **/
/** chunk id: 993977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk58642 = require("./58642.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk490983 = require("./490983.js"),
  Chunk626135 = require("./626135.js"),
  Chunk804739 = require("./804739.js"),
  Chunk957657 = require("./957657.jsx"),
  Chunk34305 = require("./34305.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk375951 = require("./375951.js");

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

function v(e) {
  let {
    applicationViewItems: t,
    restoreApplication: n
  } = e;
  if (0 === t.length) return null;
  let i = t.map(e => {
    let t = e.libraryApplication.getDistributor();
    return (0, r.jsxs)("div", {
      className: _.hiddenLibraryApplication,
      children: [(0, r.jsxs)(c.Z, {
        direction: c.Z.Direction.VERTICAL,
        className: _.hiddenLibraryApplicationContent,
        children: [(0, r.jsx)("div", {
          className: _.applicationName,
          children: e.libraryApplication.getBranchedName(e.application)
        }), null != t ? (0, r.jsx)("div", {
          className: _.applicationSubText,
          children: m.EOG[t]
        }) : null]
      }), (0, r.jsx)(o.P3F, {
        className: _.restoreButton,
        onClick: () => n(e.libraryApplication),
        children: (0, r.jsx)(o.Dio, {
          size: "md",
          color: "currentColor",
          className: _.restoreIcon
        })
      })]
    }, e.key)
  });
  return (0, r.jsxs)("div", {
    className: _.hiddenLibraryApplications,
    children: [(0, r.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: _.hiddenLibraryApplicationsTitle,
      children: b.intl.string(b.t["5PJtrH"])
    }), i]
  })
}
class I extends Chunk473749.PureComponent {
  handleToggleShortcutDesktop(e) {
    u.Xc.updateSetting(e)
  }
  handleToggleShortcutStartMenu(e) {
    u.Pe.updateSetting(e)
  }
  trackRestoreApplication(e, t) {
    p.default.track(m.rMx.APPLICATION_SETTINGS_UPDATED, O({
      hidden_enabled: t
    }, e.getAnalyticsData()))
  }
  renderBody() {
    let {
      hiddenLibraryApplicationViewItems: e,
      installShortcutDesktop: t,
      installShortcutStartMenu: n
    } = this.props;
    return (0, r.jsxs)("div", {
      className: _.body,
      children: [(0, f.Q)() ? (0, r.jsxs)(o.Kqy, {
        gap: 16,
        children: [(0, r.jsx)(o.rsf, {
          label: b.intl.string(b.t["9ID+Kh"]),
          description: b.intl.string(b.t.vT61N0),
          checked: t,
          onChange: this.handleToggleShortcutDesktop
        }), (0, r.jsx)(o.izJ, {}), (0, r.jsx)(o.rsf, {
          label: b.intl.string(b.t.vNpUMz),
          description: b.intl.string(b.t.cpYp0H),
          checked: n,
          onChange: this.handleToggleShortcutStartMenu
        }), (0, r.jsx)(o.izJ, {}), (0, r.jsx)(h.Z, {})]
      }) : null, (0, r.jsx)(v, {
        restoreApplication: this.handleRestoreHiddenLibraryApplication,
        applicationViewItems: e
      })]
    })
  }
  render() {
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.Z, {
        currentRoute: m.Z5c.APPLICATION_LIBRARY_SETTINGS
      }), (0, r.jsx)(o.w0Z, {
        className: _.scroller,
        children: this.renderBody()
      })]
    })
  }
  constructor(...e) {
    super(...e), E(this, "handleRestoreHiddenLibraryApplication", e => {
      let t = l.x9(e.getFlags(), m.eHb.HIDDEN);
      s.h(e.id, e.branchId, t), this.trackRestoreApplication(e, l.yE(t, m.eHb.HIDDEN))
    })
  }
}

function y() {
  let e = {
    installShortcutDesktop: u.Xc.useSetting(),
    installShortcutStartMenu: u.Pe.useSetting(),
    hiddenLibraryApplicationViewItems: (0, a.e7)([d.Z], () => d.Z.hiddenLibraryApplicationViewItems)
  };
  return (0, r.jsx)(I, O({}, e))
}