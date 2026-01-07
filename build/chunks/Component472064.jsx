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
    null != s && null != l && null == n && r.Z.wait(() => {
      (0, o.q)(t, e, s, l)
    })
  }
  componentDidMount() {
    let {
      applicationId: t,
      branchId: e,
      buildId: s,
      manifestIds: l
    } = this.props;
    null == s || null == l ? (0, h.l)(t, e) : this.fetchInstallSize()
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
    return (0, l.jsx)(i.Button, {
      variant: "active",
      text: _.intl.string(_.t.nL0WvC),
      disabled: e || null == t || !s,
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
    } = this.state, r = null != t && t.getSplashURL(440);
    return (0, l.jsxs)(i.Y0X, {
      transitionState: s,
      size: i.CgR.SMALL,
      "aria-label": _.intl.string(_.t.PphjtJ),
      parentComponent: "ApplicationInstallationModal",
      children: [null != r ? (0, l.jsx)("div", {
        className: b.splash,
        style: {
          backgroundImage: "url(".concat(r, ")")
        }
      }) : null, (0, l.jsxs)(i.xBx, {
        justify: I.Z.Justify.BETWEEN,
        children: [(0, l.jsx)(I.Z.Child, {
          grow: 1,
          children: (0, l.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            children: _.intl.string(_.t.PphjtJ)
          })
        }), (0, l.jsx)(I.Z.Child, {
          grow: 0,
          children: (0, l.jsx)(i.olH, {
            onClick: this.close
          })
        })]
      }), (0, l.jsxs)(i.hzk, {
        children: [(0, l.jsxs)(I.Z, {
          align: I.Z.Align.CENTER,
          children: [(0, l.jsx)(f.Z, {
            game: t,
            size: f.A.MEDIUM,
            className: b.gameIcon
          }), (0, l.jsx)("div", {
            className: b.gameName,
            children: null != t && t.name
          }), null != e ? (0, l.jsx)("div", {
            className: b.installSize,
            children: (0, T.BU)(e, {
              useKibibytes: true
            })
          }) : null]
        }), (0, l.jsx)("div", {
          className: b.divider
        }), (0, l.jsx)(C.Z, {
          autoFocus: true,
          className: b.selector,
          value: n,
          requiredDiskKB: e,
          onChange: this.handleChangePath
        }), (0, l.jsx)(c.Z, {
          eulaId: t.eulaId,
          applicationName: t.name,
          disabled: a,
          onChange: this.handlePurchaseTermsChange,
          className: b.terms
        })]
      }), (0, l.jsx)(i.mzw, {
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