/** Chunk was on web.js **/
/** chunk id: 785547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./415506.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
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

function N(e, t, n) {
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
      N(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var D = function(e) {
  return e.PLAY = "play", e.NOW_PLAYING = "now_playing", e.INSTALL = "install", e.UPDATE = "update", e.PAUSED = "paused", e.LOCATE = "locate", e.UNINSTALLING = "uninstalling", e.QUEUED = "queued", e.DOWNLOADING = "downloading", e.UNSUPPORTED_OS = "unsupported_os", e.ADD_TO_LIBRARY = "add_to_library", e.PREORDER_WAIT = "preorder_wait", e
}(D || {});
let x = Object.freeze({
    [Chunk981631.apO.PLAY]: "play",
    [Chunk981631.apO.INSTALL]: "install",
    [Chunk981631.apO.UPDATE]: "update",
    [Chunk981631.apO.PAUSE]: "downloading",
    [Chunk981631.apO.MOVE_UP]: "queued",
    [Chunk981631.apO.RESUME]: "paused"
  }),
  L = () => [Chunk388032.intl.string(Chunk388032.t.r9wmKn), Chunk388032.intl.string(Chunk388032.t["6CpimS"]), Chunk388032.intl.string(Chunk388032.t.ysbNDc), Chunk388032.intl.string(Chunk388032.t["TLnXx/"]), Chunk388032.intl.string(Chunk388032.t.Qi8mne), Chunk388032.intl.string(Chunk388032.t.yvMu3S), Chunk388032.intl.string(Chunk388032.t["PnNUZ/"]), Chunk388032.intl.string(Chunk388032.t.hU2TEJ), Chunk388032.intl.string(Chunk388032.t["YyY51/"]), Chunk388032.intl.string(Chunk388032.t.PbHJb3)];

function j(e) {
  let t = v.en(e.sku);
  return null != t ? C.intl.formatToPlainString(C.t.Aqe2ZC, {
    date: t
  }) : null
}
class M extends(r = Chunk473749.Component) {
  get analyticsLocation() {
    return w(P({}, this.props.analyticsContext.location), {
      object: Chunk981631.qAy.BUTTON_CTA
    })
  }
  getText(e) {
    switch ("uninstalling" !== e && (this._uninstallStringIndex = null), e) {
      case "install":
      case "unsupported_os":
        return C.intl.string(C.t.nL0WvC);
      case "update":
        return C.intl.string(C.t.tkhwp9);
      case "paused":
        return C.intl.string(C.t["6EKrh4"]);
      case "locate":
        return C.intl.string(C.t["nIj+a0"]);
      case "uninstalling":
        let t = L();
        return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
      case "queued":
        return C.intl.string(C.t.TiJg5l);
      case "downloading":
        return C.intl.string(C.t.Tdhepf);
      case "preorder_wait":
        return C.intl.string(C.t.xiXyPc);
      case "add_to_library":
        return C.intl.string(C.t.r3fwuQ);
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
    let r = null != require ? x[require] : null;
    return null != r ? r : null != exports && exports.type === Chunk981631.vxO.UNINSTALLING ? "uninstalling" : (0, Chunk358085.isWeb)() ? "play" : "unsupported_os"
  }
  renderPlayButton() {
    let {
      libraryApplication: e,
      fullWidth: t,
      size: n,
      color: r,
      customDisabledColor: o,
      isPlayShiny: a,
      onDropdownOpen: s,
      onDropdownClose: l,
      analyticsListSort: c,
      analyticsListIndex: u
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk701560.Z, {
      applicationId: module.id,
      libraryApplication: module,
      fullWidth: exports,
      size: require,
      color: r,
      customDisabledColor: Chunk473749,
      isShiny: Chunk442837,
      onDropdownOpen: Chunk692547,
      onDropdownClose: Chunk28664,
      analyticsListSort: Chunk755721,
      analyticsListIndex: Chunk481060
    })
  }
  renderDisabledButton(e, t) {
    let {
      className: n,
      fullWidth: r,
      size: o,
      customDisabledColor: a,
      tooltipPosition: s
    } = this.props;
    return (0, i.jsxs)("div", {
      className: A.disabledButtonWrapper,
      children: [(0, i.jsxs)(c.zx, {
        className: n,
        fullWidth: r,
        size: o,
        color: null != a ? a : A.disabledButtonColor,
        disabled: true,
        children: [this.getText(e), this.renderProgressBar()]
      }), (0, i.jsx)(l.u, {
        text: t,
        position: s,
        children: (0, i.jsx)("div", {
          className: A.disabledButtonOverlay
        })
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
    return (0, Chunk54381.jsx)(Chunk481060.Exd, {
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
      size: o,
      color: a,
      isCloudSyncing: s
    } = this.props;
    return (0, i.jsxs)(c.zx, {
      className: n,
      fullWidth: r,
      size: o,
      color: null != a ? a : c.zx.Colors.GREEN,
      submitting: "uninstalling" === e || s,
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
    if ("preorder_wait" === require) return this.renderDisabledButton(require, j(exports));
    if ("unsupported_os" === require) return this.renderDisabledButton(require, Chunk388032.intl.formatToPlainString(Chunk388032.t.LBm0A4, {
      operatingSystem: Chunk388032.intl.string(Chunk388032.t["0/xHFO"])
    }));
    if ("install" === require && module) return this.renderDisabledButton(require, Chunk388032.intl.string(Chunk388032.t.QUSQIA));
    let r = this.onClickHandlers[require];
    return null == r ? this.renderDisabledButton(require) : this.renderActionButton(require, r)
  }
  constructor(...e) {
    super(...e), N(this, "_uninstallStringIndex", null), N(this, "handleAddToLibrary", async () => {
      try {
        let {
          libraryApplication: e
        } = this.props;
        await d.h(e.id, e.branchId, e.getFlags() & ~T.eHb.HIDDEN), (0, _.uL)(T.Z5c.APPLICATION_LIBRARY)
      } catch (e) {
        new p.Z("LibraryApplicationButton").error(e)
      }
    }), N(this, "handleInstall", () => {
      let {
        libraryApplication: e,
        source: t
      } = this.props;
      S.installApplication(e.id, e.branchId, t)
    }), N(this, "handleUpdate", () => {
      let {
        libraryApplication: e
      } = this.props;
      S.updateApplication(e.id, e.branchId)
    }), N(this, "onClickHandlers", {
      add_to_library: this.handleAddToLibrary,
      install: this.handleInstall,
      update: this.handleUpdate
    }), N(this, "handleClick", (e, t) => {
      let {
        onClick: n
      } = this.props;
      null == n || n(e), t(e)
    })
  }
}

function k(e) {
  let {
    libraryApplication: t
  } = e, n = (0, f.O)(), [r, o] = (0, a.Wu)([E.Z, b.Z], () => [(0, h.i)(t, E.Z, b.Z), E.Z.getState(t.id, t.branchId)], [t]), s = (0, a.e7)([g.Z], () => g.Z.isSyncing(t.id, t.branchId), [t]), l = (0, a.e7)([m.Z], () => m.Z.hasNoBuild(t.id, t.branchId), [t]);
  return (0, i.jsx)(M, w(P({}, e), {
    analyticsContext: n,
    actionState: r,
    dispatchState: o,
    isCloudSyncing: s,
    hasNoBuild: l
  }))
}
N(M, "defaultProps", {
  fullWidth: false,
  size: Chunk755721.zx.Sizes.LARGE,
  hideProgress: false,
  isPlayShiny: false,
  tooltipPosition: "top"
}), N(M, "ButtonStates", D)