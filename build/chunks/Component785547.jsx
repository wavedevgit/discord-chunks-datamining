/** Chunk was on web.js **/
/** chunk id: 785547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./415506.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk48208 = require("./48208.js");

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

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
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
  L = () => [C.intl.string(C.t.r9wmKn), C.intl.string(C.t["6CpimS"]), C.intl.string(C.t.ysbNDc), C.intl.string(C.t["TLnXx/"]), C.intl.string(C.t.Qi8mne), C.intl.string(C.t.yvMu3S), C.intl.string(C.t["PnNUZ/"]), C.intl.string(C.t.hU2TEJ), C.intl.string(C.t["YyY51/"]), C.intl.string(C.t.PbHJb3)];

function j(e) {
  let t = v.en(e.sku);
  return null != t ? C.intl.formatToPlainString(C.t.Aqe2ZC, {
    date: t
  }) : null
}
class M extends(r = Chunk473749.Component) {
  get analyticsLocation() {
    return R(P({}, this.props.analyticsContext.location), {
      object: T.qAy.BUTTON_CTA
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
    if (e.isHidden()) return "add_to_library";
    if (e.isPreorder()) return "preorder_wait";
    let r = null != n ? x[n] : null;
    return null != r ? r : null != t && t.type === T.vxO.UNINSTALLING ? "uninstalling" : (0, O.isWeb)() ? "play" : "unsupported_os"
  }
  renderPlayButton() {
    let {
      libraryApplication: e,
      fullWidth: t,
      size: n,
      playButtonVariant: r = "secondary",
      disabledVariant: a,
      onDropdownOpen: o,
      onDropdownClose: s,
      analyticsListSort: l,
      analyticsListIndex: c
    } = this.props;
    return (0, i.jsx)(I.Z, {
      applicationId: e.id,
      libraryApplication: e,
      fullWidth: t,
      size: n,
      variant: r,
      disabledVariant: a,
      onDropdownOpen: o,
      onDropdownClose: s,
      analyticsListSort: l,
      analyticsListIndex: c
    })
  }
  renderDisabledButton(e, t) {
    let {
      fullWidth: n,
      size: r,
      disabledVariant: a = "secondary",
      tooltipPosition: s
    } = this.props, l = this.renderProgressBar();
    return (0, i.jsxs)("div", {
      className: null != l ? A.buttonWithProgress : true,
      children: [(0, i.jsxs)("div", {
        className: A.disabledButtonWrapper,
        children: [(0, i.jsx)(o.zxk, {
          text: this.getText(e),
          fullWidth: n,
          size: r,
          variant: a,
          disabled: true
        }), (0, i.jsx)(c.u, {
          text: t,
          position: s,
          children: (0, i.jsx)("div", {
            className: A.disabledButtonOverlay
          })
        })]
      }), l]
    })
  }
  renderProgressBar() {
    let {
      hideProgress: e,
      dispatchState: t
    } = this.props;
    if (e) return null;
    let n = y.KJ(t);
    if (null == n) return null;
    let r = n.type === T.vxO.UNINSTALLING ? u.Exd.INDETERMINATE : y.xI(Number(n.progress), Number(n.total));
    return (0, i.jsx)(u.Exd, {
      percent: r,
      size: u.Exd.Sizes.XSMALL,
      foregroundColor: n.paused ? l.Z.unsafe_rawColors.PRIMARY_500.css : l.Z.unsafe_rawColors.GREEN_360.css,
      backgroundColor: l.Z.unsafe_rawColors.TRANSPARENT.css,
      className: A.progress
    })
  }
  renderActionButton(e, t) {
    let {
      fullWidth: n,
      size: r,
      actionButtonVariant: a = "primary",
      isCloudSyncing: s
    } = this.props, l = this.renderProgressBar();
    return (0, i.jsxs)("div", {
      className: null != l ? A.buttonWithProgress : true,
      children: [(0, i.jsx)(o.zxk, {
        text: this.getText(e),
        fullWidth: n,
        size: r,
        variant: a,
        loading: "uninstalling" === e || s,
        onClick: e => this.handleClick(e, t)
      }), l]
    })
  }
  render() {
    let {
      hasNoBuild: e,
      libraryApplication: t
    } = this.props, n = this.getButtonState();
    if ("play" === n) return this.renderPlayButton();
    if ("preorder_wait" === n) return this.renderDisabledButton(n, j(t));
    if ("unsupported_os" === n) return this.renderDisabledButton(n, C.intl.formatToPlainString(C.t.LBm0A4, {
      operatingSystem: C.intl.string(C.t["0/xHFO"])
    }));
    if ("install" === n && e) return this.renderDisabledButton(n, C.intl.string(C.t.QUSQIA));
    let r = this.onClickHandlers[n];
    return null == r ? this.renderDisabledButton(n) : this.renderActionButton(n, r)
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
  } = e, n = (0, f.O)(), [r, a] = (0, s.Wu)([E.Z, b.Z], () => [(0, m.i)(t, E.Z, b.Z), E.Z.getState(t.id, t.branchId)], [t]), o = (0, s.e7)([g.Z], () => g.Z.isSyncing(t.id, t.branchId), [t]), l = (0, s.e7)([h.Z], () => h.Z.hasNoBuild(t.id, t.branchId), [t]);
  return (0, i.jsx)(M, R(P({}, e), {
    analyticsContext: n,
    actionState: r,
    dispatchState: a,
    isCloudSyncing: o,
    hasNoBuild: l
  }))
}
N(M, "defaultProps", {
  fullWidth: false,
  size: "md",
  hideProgress: false,
  tooltipPosition: "top"
}), N(M, "ButtonStates", D)