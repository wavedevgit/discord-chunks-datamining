/** Chunk was on web.js **/
/** chunk id: 701560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./415506.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
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
  Chunk387219 = require("./387219.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class C extends(r = Chunk473749.PureComponent) {
  get analyticsLocation() {
    return A(T({}, this.props.analyticsContext.location), {
      object: Chunk981631.qAy.BUTTON_CTA
    })
  }
  renderDropdown() {
    let {
      dispatchState: e
    } = this.props;
    return null != module && null != module.launchOptions && Object.keys(module.launchOptions).length > 1 ? (0, Chunk54381.jsxs)(Chunk481060.P3F, {
      "aria-label": Chunk388032.intl.string(Chunk388032.t.KTPVLL),
      className: Chunk387219.dropdownArrowHitbox,
      onClick: this.handleDropdownClick,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk387219.arrowSeparator
      }), (0, Chunk54381.jsx)(Chunk481060.CJ0, {
        size: "md",
        color: "currentColor",
        className: Chunk387219.dropdownArrow
      })]
    }) : null
  }
  renderDisabledButton(e, t) {
    let {
      className: n,
      fullWidth: r,
      size: a,
      customDisabledColor: o,
      tooltipPosition: s
    } = this.props;
    return (0, i.jsxs)("div", {
      className: v.disabledButtonWrapper,
      children: [(0, i.jsx)(u.zx, {
        className: n,
        fullWidth: r,
        size: a,
        color: null != o ? o : v.disabledButtonColor,
        disabled: true,
        children: e
      }), (0, i.jsx)(c.u, {
        text: t,
        position: s,
        children: (0, i.jsx)("div", {
          className: v.disabledButtonOverlay
        })
      })]
    })
  }
  render() {
    let {
      className: e,
      fullWidth: t,
      size: n,
      color: r,
      isLaunchable: a,
      isLaunching: o,
      isRunning: l,
      isShiny: c,
      hideNotLaunchable: f
    } = this.props;
    if (!Chunk473749) return Chunk239091 ? null : this.renderDisabledButton(Chunk388032.intl.string(Chunk388032.t["359Pbd"]), Chunk358085.isPlatformEmbedded ? Chunk388032.intl.string(Chunk388032.t.NASLa3) : Chunk388032.intl.string(Chunk388032.t.o1bhkD));
    if (Chunk442837) return this.renderDisabledButton(Chunk388032.intl.string(Chunk388032.t["3elwAB"]));
    let _ = Chunk28664 ? Chunk481060.gtL : Chunk755721.zx;
    return (0, Chunk54381.jsxs)(Chunk2052, {
      className: s()(Chunk387219.playButton, module),
      innerClassName: Chunk387219.playButtonContents,
      fullWidth: exports,
      size: require,
      color: null != r ? r : Chunk755721.zx.Colors.GREEN,
      submitting: Chunk120356,
      onClick: this.handleClick,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk387219.buttonText,
        children: Chunk388032.intl.string(Chunk388032.t["359Pbd"])
      }), this.renderDropdown()]
    })
  }
  constructor(...e) {
    super(...e), I(this, "handleDropdownClick", e => {
      e.stopPropagation();
      let {
        libraryApplication: t,
        onDropdownOpen: r,
        onDropdownClose: a
      } = this.props;
      if (null == r || r(e), null == t) throw Error("Unexpected missing libraryApplication");
      f.jW(e, async () => {
        let {
          default: e
        } = await n.e("53195").then(n.bind(n, 918306));
        return n => (0, i.jsx)(e, A(T({}, n), {
          libraryApplication: t,
          onPlay: this.handleClick
        }))
      }, {
        onClose: a
      })
    }), I(this, "handleClick", () => {
      let {
        applicationId: e,
        libraryApplication: t,
        analyticsListSort: n,
        analyticsListIndex: r
      } = this.props;
      b.playApplication(e, t, {
        analyticsParams: {
          location: this.analyticsLocation,
          list_sort: n,
          list_index: r
        }
      })
    })
  }
}

function N(e) {
  let {
    applicationId: t,
    libraryApplication: n
  } = e, r = (0, _.O)(), [a, o] = (0, l.Wu)([m.Z, h.Z, g.Z], () => [m.Z.isConnected(t) || h.Z.isLaunchable(t) || null != n && g.Z.isLaunchable(n.id, n.branchId), h.Z.launchingGames.has(t)], [t, n]), s = (0, l.e7)([p.ZP], () => new Set(p.ZP.getRunningVerifiedApplicationIds()).has(t), [t]), c = (0, l.e7)([g.Z], () => null != n ? g.Z.getState(n.id, n.branchId) : null, [n]);
  return (0, i.jsx)(C, A(T({}, e), {
    analyticsContext: r,
    isLaunchable: a,
    isLaunching: o,
    isRunning: s,
    dispatchState: c
  }))
}
I(C, "defaultProps", {
  fullWidth: false,
  size: Chunk755721.zx.Sizes.LARGE,
  tooltipPosition: "top",
  isShiny: false,
  hideNotLaunchable: false
})