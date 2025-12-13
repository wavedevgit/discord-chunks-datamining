/** Chunk was on 226 **/
/** chunk id: 472064, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk57513 = require("./57513.js"),
  Chunk689241 = require("./689241.js"),
  Chunk447273 = require("./447273.js"),
  Chunk51025 = require("./51025.js"),
  Chunk672971 = require("./672971.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk173747 = require("./173747.js"),
  Chunk850840 = require("./850840.js"),
  Chunk391690 = require("./391690.js"),
  Chunk424218 = require("./424218.js"),
  Chunk94692 = require("./94692.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk467721 = require("./467721.js");

function S(t, e, s) {
  return e in t ? Object.defineProperty(t, e, {
    value: s,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = s, t
}
class N extends Chunk473749.Component {
  fetchInstallSize() {
    let {
      applicationId: t,
      branchId: e,
      buildId: s,
      manifestIds: l,
      buildSizeKB: n
    } = this.props;
    null != require && null != Chunk54381 && null == Chunk473749 && Chunk570140.Z.wait(() => {
      (0, Chunk689241.q)(module, exports, require, Chunk54381)
    })
  }
  componentDidMount() {
    let {
      applicationId: t,
      branchId: e,
      buildId: s,
      manifestIds: l
    } = this.props;
    null == require || null == Chunk54381 ? (0, Chunk57513.l)(module, exports) : this.fetchInstallSize()
  }
  componentDidUpdate(t) {
    (this.props.buildId !== t.buildId || this.props.manifestIds !== t.manifestIds) && this.fetchInstallSize()
  }
  componentWillUnmount() {
    this.isUnmounted = true
  }
  renderButton() {
    let {
      buildId: t
    } = this.props, {
      hasError: e,
      hasAcceptedNeccessaryTerms: s
    } = this.state;
    return (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: "active",
      text: Chunk388032.intl.string(Chunk388032.t.nL0WvC),
      disabled: exports || null == module || !require,
      onClick: this.handleInstall
    })
  }
  render() {
    let {
      application: t,
      buildSizeKB: e,
      transitionState: s
    } = this.props, {
      selectedInstallationPath: n,
      isInstalling: a
    } = this.state, r = null != module && module.getSplashURL(440);
    return (0, Chunk54381.jsxs)(Chunk481060.Y0X, {
      transitionState: require,
      size: Chunk481060.CgR.SMALL,
      "aria-label": Chunk388032.intl.string(Chunk388032.t.PphjtJ),
      parentComponent: "ApplicationInstallationModal",
      children: [null != Chunk570140 ? (0, Chunk54381.jsx)("div", {
        className: Chunk467721.splash,
        style: {
          backgroundImage: "url(".concat(Chunk570140, ")")
        }
      }) : null, (0, Chunk54381.jsxs)(Chunk481060.xBx, {
        justify: Chunk600164.Z.Justify.BETWEEN,
        children: [(0, Chunk54381.jsx)(Chunk600164.Z.Child, {
          grow: 1,
          children: (0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-lg/semibold",
            children: Chunk388032.intl.string(Chunk388032.t.PphjtJ)
          })
        }), (0, Chunk54381.jsx)(Chunk600164.Z.Child, {
          grow: 0,
          children: (0, Chunk54381.jsx)(Chunk481060.olH, {
            onClick: this.close
          })
        })]
      }), (0, Chunk54381.jsxs)(Chunk481060.hzk, {
        children: [(0, Chunk54381.jsxs)(Chunk600164.Z, {
          align: Chunk600164.Z.Align.CENTER,
          children: [(0, Chunk54381.jsx)(Chunk925329.Z, {
            game: module,
            size: Chunk925329.A.MEDIUM,
            className: Chunk467721.gameIcon
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk467721.gameName,
            children: null != module && module.name
          }), null != exports ? (0, Chunk54381.jsx)("div", {
            className: Chunk467721.installSize,
            children: (0, Chunk424218.BU)(exports, {
              useKibibytes: true
            })
          }) : null]
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk467721.divider
        }), (0, Chunk54381.jsx)(Chunk94692.Z, {
          autoFocus: true,
          className: Chunk467721.selector,
          value: Chunk473749,
          requiredDiskKB: exports,
          onChange: this.handleChangePath
        }), (0, Chunk54381.jsx)(Chunk672971.Z, {
          eulaId: module.eulaId,
          applicationName: module.name,
          disabled: Chunk442837,
          onChange: this.handlePurchaseTermsChange,
          className: Chunk467721.terms
        })]
      }), (0, Chunk54381.jsx)(Chunk481060.mzw, {
        children: this.renderButton()
      })]
    })
  }
  constructor(...t) {
    super(...t), S(this, "state", {
      selectedInstallationPath: this.props.defaultInstallationPath,
      hasError: false,
      isInstalling: false,
      hasAcceptedNeccessaryTerms: false
    }), S(this, "isUnmounted", false), S(this, "handleChangePath", (t, e) => {
      this.setState({
        selectedInstallationPath: t,
        hasError: e
      })
    }), S(this, "install", (t, e) => {
      let {
        application: s,
        branchId: l,
        analyticsLocation: n
      } = this.props;
      if (null == s) return null;
      (0, u.LO)({
        application: s,
        branchId: l,
        buildId: t,
        manifestIds: e,
        installationPath: this.state.selectedInstallationPath,
        analyticsLocation: n
      }), (0, m.uL)(Z.Z5c.APPLICATION_LIBRARY), this.close()
    }), S(this, "handleInstall", () => {
      let {
        application: t,
        buildId: e,
        manifestIds: s,
        hasPreviouslyAcceptedStoreTerms: l
      } = this.props;
      if (null != e && null != s) l || (0, d.B)(), null != t && null != t.eulaId && (0, d.D)(t.eulaId), this.install(e, s);
      else throw Error("Unexpected missing build info for non-premium product")
    }), S(this, "handlePurchaseTermsChange", t => {
      this.setState({
        hasAcceptedNeccessaryTerms: t
      })
    }), S(this, "close", () => {
      this.props.onClose()
    })
  }
}
let E = Chunk442837.ZP.connectStores([Chunk173747.Z, Chunk391690.Z, Chunk850840.Z, Chunk812206.Z], t => {
  let {
    applicationId: e,
    branchId: s
  } = t, l = g.Z.getTargetBuildId(e, s);
  return {
    application: p.Z.getApplication(e),
    defaultInstallationPath: A.Z.defaultInstallationPath,
    buildId: l,
    manifestIds: g.Z.getTargetManifests(e, s),
    buildSizeKB: null != l ? g.Z.getBuildSize(l) : null,
    hasPreviouslyAcceptedStoreTerms: P.Z.hasAcceptedStoreTerms
  }
})(N)