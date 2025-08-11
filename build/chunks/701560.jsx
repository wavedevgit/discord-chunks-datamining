/** Chunk was on web.js **/
/** chunk id: 701560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./415506.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  Chunk637214 = require("./637214.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
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

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class A extends(r = Chunk73800.PureComponent) {
  get analyticsLocation() {
    return S(I({}, this.props.analyticsContext.location), {
      object: Chunk981631.qAy.BUTTON_CTA
    })
  }
  renderDropdown() {
    let {
      dispatchState: e
    } = this.props;
    return null != module && null != module.launchOptions && Object.keys(module.launchOptions).length > 1 ? <Chunk481060.P3F aria-label={Chunk388032.intl.string(Chunk388032.t.KTPVLC)} className={Chunk637214.dropdownArrowHitbox} onClick={this.handleDropdownClick}>{<div className={Chunk637214.arrowSeparator} />}{<Chunk481060.CJ0 size={"md"} color={"currentColor"} className={Chunk637214.dropdownArrow} />}</Chunk481060.P3F> : null
  }
  renderDisabledButton(e, t) {
    let {
      className: n,
      fullWidth: r,
      size: o,
      customDisabledColor: a,
      tooltipPosition: s
    } = this.props;
    return <div className={O.disabledButtonWrapper}>{<c.zx className={n} fullWidth={r} size={o} color={null != a ? a : O.disabledButtonColor} disabled={true}>{e}</c.zx>}{<u.ua7 text={t} position={s}>{e => (0, i.jsx)("div", I({
          className: O.disabledButtonOverlay
        }, e))}</u.ua7>}</div>
  }
  render() {
    let {
      className: e,
      fullWidth: t,
      size: n,
      color: r,
      isLaunchable: o,
      isLaunching: a,
      isRunning: l,
      isShiny: d,
      hideNotLaunchable: f
    } = this.props;
    if (!Chunk73800) return Chunk2052 ? null : this.renderDisabledButton(Chunk388032.intl.string(Chunk388032.t["359PbW"]), Chunk358085.isPlatformEmbedded ? Chunk388032.intl.string(Chunk388032.t.NASLa2) : Chunk388032.intl.string(Chunk388032.t.o1bhkJ));
    if (Chunk442837) return this.renderDisabledButton(Chunk388032.intl.string(Chunk388032.t["3elwAA"]));
    let _ = Chunk239091 ? Chunk481060.gtL : Chunk755721.zx;
    return <Chunk594190 className={s()(Chunk637214.playButton, module)} innerClassName={Chunk637214.playButtonContents} fullWidth={exports} size={require} color={null != r ? r : Chunk755721.zx.Colors.GREEN} submitting={Chunk120356} onClick={this.handleClick}>{<div className={Chunk637214.buttonText}>{Chunk388032.intl.string(Chunk388032.t["359PbW"])}</div>}{this.renderDropdown()}</Chunk594190>
  }
  constructor(...e) {
    super(...e), v(this, "handleDropdownClick", e => {
      e.stopPropagation();
      let {
        libraryApplication: t,
        onDropdownOpen: r,
        onDropdownClose: o
      } = this.props;
      if (null == r || r(e), null == t) throw Error("Unexpected missing libraryApplication");
      d.jW(e, async () => {
        let {
          default: e
        } = await n.e("53195").then(n.bind(n, 918306));
        return n => <e{...S(I({}, n), {
          libraryApplication: t,
          onPlay: this.handleClick
        })} />
      }, {
        onClose: o
      })
    }), v(this, "handleClick", () => {
      let {
        applicationId: e,
        libraryApplication: t,
        analyticsListSort: n,
        analyticsListIndex: r
      } = this.props;
      E.playApplication(e, t, {
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
  } = e, r = (0, f.O)(), [o, a] = (0, l.Wu)([h.Z, p.Z, m.Z], () => [h.Z.isConnected(t) || p.Z.isLaunchable(t) || null != n && m.Z.isLaunchable(n.id, n.branchId), p.Z.launchingGames.has(t)], [t, n]), s = (0, l.e7)([_.ZP], () => new Set(_.ZP.getRunningVerifiedApplicationIds()).has(t), [t]), c = (0, l.e7)([m.Z], () => null != n ? m.Z.getState(n.id, n.branchId) : null, [n]);
  return <A{...S(I({}, e), {
    analyticsContext: r,
    isLaunchable: o,
    isLaunching: a,
    isRunning: s,
    dispatchState: c
  })} />
}
v(A, "defaultProps", {
  fullWidth: false,
  size: Chunk755721.zx.Sizes.LARGE,
  tooltipPosition: "top",
  isShiny: false,
  hideNotLaunchable: false
})