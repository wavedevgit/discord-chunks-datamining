/** Chunk was on web.js **/
/** chunk id: 701560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./415506.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk2052 = require("./2052.js"),
  Chunk594190 = require("./594190.js"),
  Chunk592745 = require("./592745.js"),
  Chunk757266 = require("./757266.js"),
  Chunk417363 = require("./417363.js"),
  Chunk358085 = require("./358085.js"),
  Chunk346329 = require("./346329.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk484698 = require("./484698.js");

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

function S(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class T extends(r = Chunk473749.PureComponent) {
  get analyticsLocation() {
    return I(v({}, this.props.analyticsContext.location), {
      object: E.qAy.BUTTON_CTA
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
      tooltipPosition: s
    } = this.props;
    return (0, i.jsxs)("div", {
      className: y.disabledButtonWrapper,
      children: [(0, i.jsx)(o.zxk, {
        text: e,
        fullWidth: n,
        size: r,
        variant: a,
        disabled: true
      }), (0, i.jsx)(l.u, {
        text: t,
        position: s,
        children: (0, i.jsx)("div", {
          className: y.disabledButtonOverlay
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
      isRunning: s,
      hideNotLaunchable: l
    } = this.props;
    return r ? s ? this.renderDisabledButton(b.intl.string(b.t["3elwAB"])) : (0, i.jsxs)(o.hE2, {
      size: t,
      wrap: false,
      fullWidth: e,
      children: [(0, i.jsx)(o.zxk, {
        text: b.intl.string(b.t["359Pbd"]),
        variant: n,
        loading: a,
        onClick: this.handleClick
      }), this.hasMultipleLaunchOptions() ? (0, i.jsx)(o.hU, {
        icon: c.CJ0,
        "aria-label": b.intl.string(b.t.KTPVLL),
        variant: "secondary",
        onClick: this.handleDropdownClick
      }) : null]
    }) : l ? null : this.renderDisabledButton(b.intl.string(b.t["359Pbd"]), m.isPlatformEmbedded ? b.intl.string(b.t.NASLa3) : b.intl.string(b.t.o1bhkD))
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
      u.jW(e, async () => {
        let {
          default: e
        } = await n.e("53195").then(n.bind(n, 918306));
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

function C(e) {
  let {
    applicationId: t,
    libraryApplication: n
  } = e, r = (0, d.O)(), [a, o] = (0, s.Wu)([_.Z, p.Z, h.Z], () => [_.Z.isConnected(t) || p.Z.isLaunchable(t) || null != n && h.Z.isLaunchable(n.id, n.branchId), p.Z.launchingGames.has(t)], [t, n]), l = (0, s.e7)([f.ZP], () => new Set(f.ZP.getRunningVerifiedApplicationIds()).has(t), [t]), c = (0, s.e7)([h.Z], () => null != n ? h.Z.getState(n.id, n.branchId) : null, [n]);
  return (0, i.jsx)(T, I(v({}, e), {
    analyticsContext: r,
    isLaunchable: a,
    isLaunching: o,
    isRunning: l,
    dispatchState: c
  }))
}
O(T, "defaultProps", {
  fullWidth: false,
  size: "md",
  variant: "secondary",
  tooltipPosition: "top",
  hideNotLaunchable: false
})