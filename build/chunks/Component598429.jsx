/** Chunk was on web.js **/
/** chunk id: 598429, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
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

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class S extends(r = Chunk64700.PureComponent) {
  get analyticsLocation() {
    return I(v({}, this.props.analyticsContext.location), {
      object: E.ZSU.BUTTON_CTA
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
      disabledVariant: a = "secondary",
      tooltipPosition: o
    } = this.props;
    return (0, i.jsxs)("div", {
      className: b.Yr,
      children: [(0, i.jsx)(s.$nd, {
        text: e,
        fullWidth: n,
        size: r,
        variant: a,
        disabled: true
      }), (0, i.jsx)(l.m, {
        text: t,
        position: o,
        children: (0, i.jsx)("div", {
          className: b.p5
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
      isLaunching: a,
      isRunning: o,
      hideNotLaunchable: l
    } = this.props;
    return r ? o ? this.renderDisabledButton(y.intl.string(y.t["3elwAB"])) : (0, i.jsxs)(s.e2v, {
      size: t,
      wrap: false,
      fullWidth: e,
      children: [(0, i.jsx)(s.$nd, {
        text: y.intl.string(y.t["359Pbd"]),
        variant: n,
        loading: a,
        onClick: this.handleClick
      }), this.hasMultipleLaunchOptions() ? (0, i.jsx)(s.K0, {
        icon: c.abt,
        "aria-label": y.intl.string(y.t.KTPVLL),
        variant: "secondary",
        onClick: this.handleDropdownClick
      }) : null]
    }) : l ? null : this.renderDisabledButton(y.intl.string(y.t["359Pbd"]), m.isPlatformEmbedded ? y.intl.string(y.t.NASLa3) : y.intl.string(y.t.o1bhkD))
  }
  constructor(...e) {
    super(...e), O(this, "handleDropdownClick", e => {
      e.stopPropagation();
      let {
        libraryApplication: t,
        onDropdownOpen: r,
        onDropdownClose: a
      } = this.props;
      if (null == r || r(e), null == t) throw Error("Unexpected missing libraryApplication");
      u.L3(e, async () => {
        let {
          default: e
        } = await n.e("33055").then(n.bind(n, 661991));
        return n => (0, i.jsx)(e, I(v({}, n), {
          libraryApplication: t,
          onPlay: this.handleClick
        }))
      }, {
        onClose: a
      })
    }), O(this, "handleClick", () => {
      let {
        applicationId: e,
        libraryApplication: t,
        analyticsListSort: n,
        analyticsListIndex: r
      } = this.props;
      g.playApplication(e, t, {
        analyticsParams: {
          location: this.analyticsLocation,
          list_sort: n,
          list_index: r
        }
      })
    })
  }
}

function T(e) {
  let {
    applicationId: t,
    libraryApplication: n
  } = e, r = (0, d.p)(), [a, s] = (0, o.yK)([_.A, p.A, h.A], () => [_.A.isConnected(t) || p.A.isLaunchable(t) || null != n && h.A.isLaunchable(n.id, n.branchId), p.A.launchingGames.has(t)], [t, n]), l = (0, o.bG)([f.Ay], () => new Set(f.Ay.getRunningVerifiedApplicationIds()).has(t), [t]), c = (0, o.bG)([h.A], () => null != n ? h.A.getState(n.id, n.branchId) : null, [n]);
  return (0, i.jsx)(S, I(v({}, e), {
    analyticsContext: r,
    isLaunchable: a,
    isLaunching: s,
    isRunning: l,
    dispatchState: c
  }))
}
O(S, "defaultProps", {
  fullWidth: false,
  size: "md",
  variant: "secondary",
  tooltipPosition: "top",
  hideNotLaunchable: false
})