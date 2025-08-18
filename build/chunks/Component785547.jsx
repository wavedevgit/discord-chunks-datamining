/** Chunk was on 91173 **/
/** chunk id: 785547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./415506.js"), require("./388685.js");
var r, i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk58642 = require("./58642.js"),
  Chunk2052 = require("./2052.js"),
  Chunk710845 = require("./710845.js"),
  Chunk703656 = require("./703656.js"),
  Chunk173747 = require("./173747.js"),
  Chunk7956 = require("./7956.js"),
  Chunk293245 = require("./293245.js"),
  Chunk417363 = require("./417363.js"),
  Chunk941128 = require("./941128.js"),
  Chunk780570 = require("./780570.js"),
  Chunk358085 = require("./358085.js"),
  Chunk814225 = require("./814225.js"),
  Chunk346329 = require("./346329.js"),
  Chunk701560 = require("./701560.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk767248 = require("./767248.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
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
var A = ((i = A || {}).PLAY = "play", i.NOW_PLAYING = "now_playing", i.INSTALL = "install", i.UPDATE = "update", i.PAUSED = "paused", i.LOCATE = "locate", i.UNINSTALLING = "uninstalling", i.QUEUED = "queued", i.DOWNLOADING = "downloading", i.UNSUPPORTED_OS = "unsupported_os", i.ADD_TO_LIBRARY = "add_to_library", i.PREORDER_WAIT = "preorder_wait", i);
let w = Object.freeze({
  [Chunk981631.apO.PLAY]: "play",
  [Chunk981631.apO.INSTALL]: "install",
  [Chunk981631.apO.UPDATE]: "update",
  [Chunk981631.apO.PAUSE]: "downloading",
  [Chunk981631.apO.MOVE_UP]: "queued",
  [Chunk981631.apO.RESUME]: "paused"
});
class Z extends(r = Chunk647438.Component) {
  get analyticsLocation() {
    return N(P({}, this.props.analyticsContext.location), {
      object: Chunk981631.qAy.BUTTON_CTA
    })
  }
  getText(e) {
    switch ("uninstalling" !== e && (this._uninstallStringIndex = null), e) {
      case "install":
      case "unsupported_os":
        return I.intl.string(I.t.nL0WvL);
      case "update":
        return I.intl.string(I.t.tkhwp6);
      case "paused":
        return I.intl.string(I.t["6EKrh4"]);
      case "locate":
        return I.intl.string(I.t["nIj+a2"]);
      case "uninstalling":
        let t = [I.intl.string(I.t.r9wmKi), I.intl.string(I.t["6CpimZ"]), I.intl.string(I.t.ysbNDQ), I.intl.string(I.t.TLnXx8), I.intl.string(I.t.Qi8mnZ), I.intl.string(I.t.yvMu3d), I.intl.string(I.t.PnNUZ2), I.intl.string(I.t.hU2TEB), I.intl.string(I.t.YyY519), I.intl.string(I.t.PbHJb2)];
        return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
      case "queued":
        return I.intl.string(I.t.TiJg5u);
      case "downloading":
        return I.intl.string(I.t.Tdhepa);
      case "preorder_wait":
        return I.intl.string(I.t.xiXyPT);
      case "add_to_library":
        return I.intl.string(I.t.r3fwub);
      default:
        throw Error("Unexpected button state")
    }
  }
  getButtonState() {
    let {
      libraryApplication: e,
      dispatchState: t,
      actionState: n
    } = this.props;
    if (module.isHidden()) return "add_to_library";
    if (module.isPreorder()) return "preorder_wait";
    let r = null != require ? w[require] : null;
    return null != r ? r : null != exports && exports.type === Chunk981631.vxO.UNINSTALLING ? "uninstalling" : (0, Chunk358085.isWeb)() ? "play" : "unsupported_os"
  }
  renderPlayButton() {
    let {
      libraryApplication: e,
      fullWidth: t,
      size: n,
      color: r,
      customDisabledColor: i,
      isPlayShiny: o,
      onDropdownOpen: a,
      onDropdownClose: s,
      analyticsListSort: c,
      analyticsListIndex: u
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk701560.Z, {
      applicationId: module.id,
      libraryApplication: module,
      fullWidth: exports,
      size: require,
      color: r,
      customDisabledColor: i,
      isShiny: Chunk647438,
      onDropdownOpen: Chunk442837,
      onDropdownClose: Chunk692547,
      analyticsListSort: Chunk755721,
      analyticsListIndex: Chunk481060
    })
  }
  renderDisabledButton(e, t) {
    let {
      className: n,
      fullWidth: r,
      size: i,
      customDisabledColor: o,
      tooltipPosition: a
    } = this.props;
    return (0, l.jsxs)("div", {
      className: S.disabledButtonWrapper,
      children: [(0, l.jsxs)(c.zx, {
        className: n,
        fullWidth: r,
        size: i,
        color: null != o ? o : S.disabledButtonColor,
        disabled: true,
        children: [this.getText(e), this.renderProgressBar()]
      }), (0, l.jsx)(u.ua7, {
        text: t,
        position: a,
        children: e => (0, l.jsx)("div", P({
          className: S.disabledButtonOverlay
        }, e))
      })]
    })
  }
  renderProgressBar() {
    let {
      hideProgress: e,
      dispatchState: t
    } = this.props;
    if (module) return null;
    let n = Chunk780570.KJ(exports);
    if (null == require) return null;
    let r = require.type === Chunk981631.vxO.UNINSTALLING ? Chunk481060.Exd.INDETERMINATE : Chunk780570.xI(Number(require.progress), Number(require.total));
    return (0, Chunk951288.jsx)(Chunk481060.Exd, {
      percent: r,
      size: Chunk481060.Exd.Sizes.XSMALL,
      foregroundColor: require.paused ? Chunk692547.Z.unsafe_rawColors.PRIMARY_500.css : Chunk692547.Z.unsafe_rawColors.GREEN_360.css,
      backgroundColor: Chunk692547.Z.unsafe_rawColors.TRANSPARENT.css,
      className: Chunk767248.progress
    })
  }
  renderActionButton(e, t) {
    let {
      className: n,
      fullWidth: r,
      size: i,
      color: o,
      isCloudSyncing: a
    } = this.props;
    return (0, l.jsxs)(c.zx, {
      className: n,
      fullWidth: r,
      size: i,
      color: null != o ? o : c.zx.Colors.GREEN,
      submitting: "uninstalling" === e || a,
      onClick: e => this.handleClick(e, t),
      children: [this.getText(e), this.renderProgressBar()]
    })
  }
  render() {
    let {
      hasNoBuild: e,
      libraryApplication: t
    } = this.props, n = this.getButtonState();
    if ("play" === require) return this.renderPlayButton();
    if ("preorder_wait" === require) return this.renderDisabledButton(require, function(e) {
      let t = v.en(e.sku);
      return null != t ? I.intl.formatToPlainString(I.t.Aqe2ZG, {
        date: t
      }) : null
    }(exports));
    if ("unsupported_os" === require) return this.renderDisabledButton(require, Chunk388032.intl.formatToPlainString(Chunk388032.t.LBm0Aw, {
      operatingSystem: Chunk388032.intl.string(Chunk388032.t["0/xHFB"])
    }));
    if ("install" === require && module) return this.renderDisabledButton(require, Chunk388032.intl.string(Chunk388032.t.QUSQIC));
    let r = this.onClickHandlers[require];
    return null == r ? this.renderDisabledButton(require) : this.renderActionButton(require, r)
  }
  constructor(...e) {
    super(...e), T(this, "_uninstallStringIndex", null), T(this, "handleAddToLibrary", async () => {
      try {
        let {
          libraryApplication: e
        } = this.props;
        await d.h(e.id, e.branchId, e.getFlags() & ~j.eHb.HIDDEN), (0, f.uL)(j.Z5c.APPLICATION_LIBRARY)
      } catch (e) {
        new m.Z("LibraryApplicationButton").error(e)
      }
    }), T(this, "handleInstall", () => {
      let {
        libraryApplication: e,
        source: t
      } = this.props;
      y.installApplication(e.id, e.branchId, t)
    }), T(this, "handleUpdate", () => {
      let {
        libraryApplication: e
      } = this.props;
      y.updateApplication(e.id, e.branchId)
    }), T(this, "onClickHandlers", {
      add_to_library: this.handleAddToLibrary,
      install: this.handleInstall,
      update: this.handleUpdate
    }), T(this, "handleClick", (e, t) => {
      let {
        onClick: n
      } = this.props;
      null == n || n(e), t(e)
    })
  }
}

function R(e) {
  let {
    libraryApplication: t
  } = e, n = (0, p.O)(), [r, i] = (0, a.Wu)([b.Z, E.Z], () => [(0, _.i)(t, b.Z, E.Z), b.Z.getState(t.id, t.branchId)], [t]), o = (0, a.e7)([h.Z], () => h.Z.isSyncing(t.id, t.branchId), [t]), s = (0, a.e7)([g.Z], () => g.Z.hasNoBuild(t.id, t.branchId), [t]);
  return (0, l.jsx)(Z, N(P({}, e), {
    analyticsContext: n,
    actionState: r,
    dispatchState: i,
    isCloudSyncing: o,
    hasNoBuild: s
  }))
}
T(Z, "defaultProps", {
  fullWidth: false,
  size: Chunk755721.zx.Sizes.LARGE,
  hideProgress: false,
  isPlayShiny: false,
  tooltipPosition: "top"
}), T(Z, "ButtonStates", A)