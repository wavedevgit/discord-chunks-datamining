/** Chunk was on 21738 **/
/** chunk id: 104440, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk59636 = require("./59636.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk742077 = require("./742077.js"),
  Chunk954571 = require("./954571.js"),
  Chunk144914 = require("./144914.js"),
  Chunk765258 = require("./765258.jsx"),
  Chunk192771 = require("./192771.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk231566 = require("./231566.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e) {
  let {
    applicationViewItems: t,
    restoreApplication: n
  } = e;
  if (0 === t.length) return null;
  let i = t.map(e => {
    let t = e.libraryApplication.getDistributor();
    return (0, r.jsxs)("div", {
      className: _.Kp,
      children: [(0, r.jsxs)(c.A, {
        direction: c.A.Direction.VERTICAL,
        className: _.Hm,
        children: [(0, r.jsx)("div", {
          className: _.SX,
          children: e.libraryApplication.getBranchedName(e.application)
        }), null != t ? (0, r.jsx)("div", {
          className: _.ME,
          children: f.gG4[t]
        }) : null]
      }), (0, r.jsx)(s.DUT, {
        className: _.P5,
        onClick: () => n(e.libraryApplication),
        children: (0, r.jsx)(s.PGe, {
          size: "md",
          color: "currentColor",
          className: _.q_
        })
      })]
    }, e.key)
  });
  return (0, r.jsxs)("div", {
    className: _.z0,
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-md/semibold",
      className: _.Z9,
      children: A.intl.string(A.t["5PJtrH"])
    }), i]
  })
}
class y extends Chunk64700.PureComponent {
  handleToggleShortcutDesktop(e) {
    u.uB.updateSetting(e)
  }
  handleToggleShortcutStartMenu(e) {
    u.Pf.updateSetting(e)
  }
  trackRestoreApplication(e, t) {
    p.default.track(f.HAw.APPLICATION_SETTINGS_UPDATED, E({
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
      className: _.rf,
      children: [(0, h.S)() ? (0, r.jsxs)(s.BJc, {
        gap: 16,
        children: [(0, r.jsx)(s.dOG, {
          label: A.intl.string(A.t["9ID+Kh"]),
          description: A.intl.string(A.t.vT61N0),
          checked: t,
          onChange: this.handleToggleShortcutDesktop
        }), (0, r.jsx)(s.cGx, {}), (0, r.jsx)(s.dOG, {
          label: A.intl.string(A.t.vNpUMz),
          description: A.intl.string(A.t.cpYp0H),
          checked: n,
          onChange: this.handleToggleShortcutStartMenu
        }), (0, r.jsx)(s.cGx, {}), (0, r.jsx)(m.A, {})]
      }) : null, (0, r.jsx)(O, {
        restoreApplication: this.handleRestoreHiddenLibraryApplication,
        applicationViewItems: e
      })]
    })
  }
  render() {
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.A, {
        currentRoute: f.BVt.APPLICATION_LIBRARY_SETTINGS
      }), (0, r.jsx)(s.ArX, {
        className: _.XG,
        children: this.renderBody()
      })]
    })
  }
  constructor(...e) {
    super(...e), b(this, "handleRestoreHiddenLibraryApplication", e => {
      let t = l.PQ(e.getFlags(), f.hM6.HIDDEN);
      o.V(e.id, e.branchId, t), this.trackRestoreApplication(e, l.Lt(t, f.hM6.HIDDEN))
    })
  }
}

function I() {
  let e = {
    installShortcutDesktop: u.uB.useSetting(),
    installShortcutStartMenu: u.Pf.useSetting(),
    hiddenLibraryApplicationViewItems: (0, a.bG)([d.A], () => d.A.hiddenLibraryApplicationViewItems)
  };
  return (0, r.jsx)(y, E({}, e))
}