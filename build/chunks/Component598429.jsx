/** Chunk was on 9753 **/
/** chunk id: 598429, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./896048.js"), require("./65821.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk212245 = require("./212245.js"),
  Chunk15285 = require("./15285.js"),
  Chunk651743 = require("./651743.js"),
  Chunk134861 = require("./134861.js"),
  Chunk194871 = require("./194871.js"),
  Chunk723702 = require("./723702.js"),
  Chunk715671 = require("./715671.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk168785 = require("./168785.js");

function v(e, t, n) {
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
      v(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class E extends(r = Chunk64700.PureComponent) {
  get analyticsLocation() {
    return x(O({}, this.props.analyticsContext.location), {
      object: b.ZSU.BUTTON_CTA
    })
  }
  hasMultipleLaunchOptions() {
    let {
      dispatchState: e
    } = this.props;
    return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1
  }
  renderDisabledButton(e, t) {
    let {
      fullWidth: n,
      size: r,
      disabledVariant: l = "secondary",
      tooltipPosition: s
    } = this.props;
    return (0, i.jsxs)("div", {
      className: A.Yr,
      children: [(0, i.jsx)(a.$nd, {
        text: e,
        fullWidth: n,
        size: r,
        variant: l,
        disabled: true
      }), (0, i.jsx)(o.m, {
        text: t,
        position: s,
        children: (0, i.jsx)("div", {
          className: A.p5
        })
      })]
    })
  }
  render() {
    let {
      fullWidth: e,
      size: t,
      variant: n,
      isLaunchable: r,
      isLaunching: l,
      isRunning: s,
      hideNotLaunchable: o
    } = this.props;
    return r ? s ? this.renderDisabledButton(y.intl.string(y.t["3elwAB"])) : (0, i.jsxs)(a.e2v, {
      size: t,
      wrap: false,
      fullWidth: e,
      children: [(0, i.jsx)(a.$nd, {
        text: y.intl.string(y.t["359Pbd"]),
        variant: n,
        loading: l,
        onClick: this.handleClick
      }), this.hasMultipleLaunchOptions() ? (0, i.jsx)(a.K0, {
        icon: c.abt,
        "aria-label": y.intl.string(y.t.KTPVLL),
        variant: "secondary",
        onClick: this.handleDropdownClick
      }) : null]
    }) : o ? null : this.renderDisabledButton(y.intl.string(y.t["359Pbd"]), _.isPlatformEmbedded ? y.intl.string(y.t.NASLa3) : y.intl.string(y.t.o1bhkD))
  }
  constructor(...e) {
    super(...e), v(this, "handleDropdownClick", e => {
      e.stopPropagation();
      let {
        libraryApplication: t,
        onDropdownOpen: r,
        onDropdownClose: l
      } = this.props;
      if (null == r || r(e), null == t) throw Error("Unexpected missing libraryApplication");
      u.L3(e, async () => {
        let {
          default: e
        } = await n.e("33055").then(n.bind(n, 661991));
        return n => (0, i.jsx)(e, x(O({}, n), {
          libraryApplication: t,
          onPlay: this.handleClick
        }))
      }, {
        onClose: l
      })
    }), v(this, "handleClick", () => {
      let {
        applicationId: e,
        libraryApplication: t,
        analyticsListSort: n,
        analyticsListIndex: r
      } = this.props;
      h.playApplication(e, t, {
        analyticsParams: {
          location: this.analyticsLocation,
          list_sort: n,
          list_index: r
        }
      })
    })
  }
}

function j(e) {
  let {
    applicationId: t,
    libraryApplication: n
  } = e, r = (0, d.p)(), [l, a] = (0, s.yK)([f.A, m.A, g.A], () => [f.A.isConnected(t) || m.A.isLaunchable(t) || null != n && g.A.isLaunchable(n.id, n.branchId), m.A.launchingGames.has(t)], [t, n]), o = (0, s.bG)([p.Ay], () => new Set(p.Ay.getRunningVerifiedApplicationIds()).has(t), [t]), c = (0, s.bG)([g.A], () => null != n ? g.A.getState(n.id, n.branchId) : null, [n]);
  return (0, i.jsx)(E, x(O({}, e), {
    analyticsContext: r,
    isLaunchable: l,
    isLaunching: a,
    isRunning: o,
    dispatchState: c
  }))
}
v(E, "defaultProps", {
  fullWidth: false,
  size: "md",
  variant: "secondary",
  tooltipPosition: "top",
  hideNotLaunchable: false
})