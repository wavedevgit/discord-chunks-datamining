/** Chunk was on web.js **/
/** chunk id: 785547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./415506.js"), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
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

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
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

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var w = function(e) {
  return e.PLAY = "play", e.NOW_PLAYING = "now_playing", e.INSTALL = "install", e.UPDATE = "update", e.PAUSED = "paused", e.LOCATE = "locate", e.UNINSTALLING = "uninstalling", e.QUEUED = "queued", e.DOWNLOADING = "downloading", e.UNSUPPORTED_OS = "unsupported_os", e.ADD_TO_LIBRARY = "add_to_library", e.PREORDER_WAIT = "preorder_wait", e
}(w || {});
let D = Object.freeze({
    [Chunk981631.apO.PLAY]: "play",
    [Chunk981631.apO.INSTALL]: "install",
    [Chunk981631.apO.UPDATE]: "update",
    [Chunk981631.apO.PAUSE]: "downloading",
    [Chunk981631.apO.MOVE_UP]: "queued",
    [Chunk981631.apO.RESUME]: "paused"
  }),
  x = () => [Chunk388032.intl.string(Chunk388032.t.r9wmKi), Chunk388032.intl.string(Chunk388032.t["6CpimZ"]), Chunk388032.intl.string(Chunk388032.t.ysbNDQ), Chunk388032.intl.string(Chunk388032.t.TLnXx8), Chunk388032.intl.string(Chunk388032.t.Qi8mnZ), Chunk388032.intl.string(Chunk388032.t.yvMu3d), Chunk388032.intl.string(Chunk388032.t.PnNUZ2), Chunk388032.intl.string(Chunk388032.t.hU2TEB), Chunk388032.intl.string(Chunk388032.t.YyY519), Chunk388032.intl.string(Chunk388032.t.PbHJb2)];

function L(e) {
  let t = O.en(e.sku);
  return null != t ? S.intl.formatToPlainString(S.t.Aqe2ZG, {
    date: t
  }) : null
}
class j extends(r = Chunk647438.Component) {
  get analyticsLocation() {
    return P(N({}, this.props.analyticsContext.location), {
      object: Chunk981631.qAy.BUTTON_CTA
    })
  }
  getText(e) {
    switch ("uninstalling" !== e && (this._uninstallStringIndex = null), e) {
      case "install":
      case "unsupported_os":
        return S.intl.string(S.t.nL0WvL);
      case "update":
        return S.intl.string(S.t.tkhwp6);
      case "paused":
        return S.intl.string(S.t["6EKrh4"]);
      case "locate":
        return S.intl.string(S.t["nIj+a2"]);
      case "uninstalling":
        let t = x();
        return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
      case "queued":
        return S.intl.string(S.t.TiJg5u);
      case "downloading":
        return S.intl.string(S.t.Tdhepa);
      case "preorder_wait":
        return S.intl.string(S.t.xiXyPT);
      case "add_to_library":
        return S.intl.string(S.t.r3fwub);
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
    let r = null != require ? D[require] : null;
    return null != r ? r : null != exports && exports.type === Chunk981631.vxO.UNINSTALLING ? "uninstalling" : (0, Chunk358085.isWeb)() ? "play" : "unsupported_os"
  }
  renderPlayButton() {
    let {
      libraryApplication: e,
      fullWidth: t,
      size: n,
      color: r,
      customDisabledColor: a,
      isPlayShiny: o,
      onDropdownOpen: s,
      onDropdownClose: l,
      analyticsListSort: c,
      analyticsListIndex: u
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk701560.Z, {
      applicationId: module.id,
      libraryApplication: module,
      fullWidth: exports,
      size: require,
      color: r,
      customDisabledColor: Chunk647438,
      isShiny: Chunk442837,
      onDropdownOpen: Chunk692547,
      onDropdownClose: Chunk755721,
      analyticsListSort: Chunk481060,
      analyticsListIndex: Chunk58642
    })
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
      className: A.disabledButtonWrapper,
      children: [(0, i.jsxs)(l.zx, {
        className: n,
        fullWidth: r,
        size: a,
        color: null != o ? o : A.disabledButtonColor,
        disabled: true,
        children: [this.getText(e), this.renderProgressBar()]
      }), (0, i.jsx)(c.ua7, {
        text: t,
        position: s,
        children: e => (0, i.jsx)("div", N({
          className: A.disabledButtonOverlay
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
      size: a,
      color: o,
      isCloudSyncing: s
    } = this.props;
    return (0, i.jsxs)(l.zx, {
      className: n,
      fullWidth: r,
      size: a,
      color: null != o ? o : l.zx.Colors.GREEN,
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
    if ("preorder_wait" === require) return this.renderDisabledButton(require, L(exports));
    if ("unsupported_os" === require) return this.renderDisabledButton(require, Chunk388032.intl.formatToPlainString(Chunk388032.t.LBm0Aw, {
      operatingSystem: Chunk388032.intl.string(Chunk388032.t["0/xHFB"])
    }));
    if ("install" === require && module) return this.renderDisabledButton(require, Chunk388032.intl.string(Chunk388032.t.QUSQIC));
    let r = this.onClickHandlers[require];
    return null == r ? this.renderDisabledButton(require) : this.renderActionButton(require, r)
  }
  constructor(...e) {
    super(...e), C(this, "_uninstallStringIndex", null), C(this, "handleAddToLibrary", async () => {
      try {
        let {
          libraryApplication: e
        } = this.props;
        await u.h(e.id, e.branchId, e.getFlags() & ~T.eHb.HIDDEN), (0, _.uL)(T.Z5c.APPLICATION_LIBRARY)
      } catch (e) {
        new f.Z("LibraryApplicationButton").error(e)
      }
    }), C(this, "handleInstall", () => {
      let {
        libraryApplication: e,
        source: t
      } = this.props;
      v.installApplication(e.id, e.branchId, t)
    }), C(this, "handleUpdate", () => {
      let {
        libraryApplication: e
      } = this.props;
      v.updateApplication(e.id, e.branchId)
    }), C(this, "onClickHandlers", {
      add_to_library: this.handleAddToLibrary,
      install: this.handleInstall,
      update: this.handleUpdate
    }), C(this, "handleClick", (e, t) => {
      let {
        onClick: n
      } = this.props;
      null == n || n(e), t(e)
    })
  }
}

function M(e) {
  let {
    libraryApplication: t
  } = e, n = (0, d.O)(), [r, a] = (0, o.Wu)([g.Z, E.Z], () => [(0, h.i)(t, g.Z, E.Z), g.Z.getState(t.id, t.branchId)], [t]), s = (0, o.e7)([m.Z], () => m.Z.isSyncing(t.id, t.branchId), [t]), l = (0, o.e7)([p.Z], () => p.Z.hasNoBuild(t.id, t.branchId), [t]);
  return (0, i.jsx)(j, P(N({}, e), {
    analyticsContext: n,
    actionState: r,
    dispatchState: a,
    isCloudSyncing: s,
    hasNoBuild: l
  }))
}
C(j, "defaultProps", {
  fullWidth: false,
  size: Chunk755721.zx.Sizes.LARGE,
  hideProgress: false,
  isPlayShiny: false,
  tooltipPosition: "top"
}), C(j, "ButtonStates", w)