/** Chunk was on 64676 **/
/** chunk id: 867087, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => N
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk356645 = require("./356645.js"),
  Chunk465842 = require("./465842.js"),
  Chunk628264 = require("./628264.js"),
  Chunk92077 = require("./92077.js"),
  Chunk953689 = require("./953689.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk568004 = require("./568004.js"),
  Chunk293066 = require("./293066.js"),
  Chunk775228 = require("./775228.js"),
  Chunk255438 = require("./255438.js"),
  Chunk980888 = require("./980888.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk25327 = require("./25327.js");

function y(t, e, s) {
  return e in t ? Object.defineProperty(t, e, {
    value: s,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = s, t
}
class E extends Chunk64700.Component {
  fetchInstallSize() {
    let {
      applicationId: t,
      branchId: e,
      buildId: s,
      manifestIds: l,
      buildSizeKB: n
    } = this.props;
    null != s && null != l && null == n && r.h.wait(() => {
      (0, o.K)(t, e, s, l)
    })
  }
  componentDidMount() {
    let {
      applicationId: t,
      branchId: e,
      buildId: s,
      manifestIds: l
    } = this.props;
    null == s || null == l ? (0, h.n)(t, e) : this.fetchInstallSize()
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
      text: S.intl.string(S.t.nL0WvC),
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
    return (0, l.jsxs)(i.EOs, {
      transitionState: s,
      size: i.rIJ.SMALL,
      "aria-label": S.intl.string(S.t.PphjtJ),
      parentComponent: "ApplicationInstallationModal",
      children: [null != r ? (0, l.jsx)("div", {
        className: b.Yi,
        style: {
          backgroundImage: "url(".concat(r, ")")
        }
      }) : null, (0, l.jsxs)(i.rQ0, {
        justify: A.A.Justify.BETWEEN,
        children: [(0, l.jsx)(A.A.Child, {
          grow: 1,
          children: (0, l.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            children: S.intl.string(S.t.PphjtJ)
          })
        }), (0, l.jsx)(A.A.Child, {
          grow: 0,
          children: (0, l.jsx)(i.s_y, {
            onClick: this.close
          })
        })]
      }), (0, l.jsxs)(i.$mQ, {
        children: [(0, l.jsxs)(A.A, {
          align: A.A.Align.CENTER,
          children: [(0, l.jsx)(I.A, {
            game: t,
            size: I.M.MEDIUM,
            className: b.Gt
          }), (0, l.jsx)("div", {
            className: b.mO,
            children: null != t && t.name
          }), null != e ? (0, l.jsx)("div", {
            className: b.hc,
            children: (0, P.Xq)(e, {
              useKibibytes: true
            })
          }) : null]
        }), (0, l.jsx)("div", {
          className: b.yF
        }), (0, l.jsx)(C.A, {
          autoFocus: true,
          className: b.gD,
          value: n,
          requiredDiskKB: e,
          onChange: this.handleChangePath
        }), (0, l.jsx)(c.A, {
          eulaId: t.eulaId,
          applicationName: t.name,
          disabled: a,
          onChange: this.handlePurchaseTermsChange,
          className: b.a_
        })]
      }), (0, l.jsx)(i.jlY, {
        children: this.renderButton()
      })]
    })
  }
  constructor(...t) {
    super(...t), y(this, "state", {
      selectedInstallationPath: this.props.defaultInstallationPath,
      hasError: false,
      isInstalling: false,
      hasAcceptedNeccessaryTerms: false
    }), y(this, "isUnmounted", false), y(this, "handleChangePath", (t, e) => {
      this.setState({
        selectedInstallationPath: t,
        hasError: e
      })
    }), y(this, "install", (t, e) => {
      let {
        application: s,
        branchId: l,
        analyticsLocation: n
      } = this.props;
      if (null == s) return null;
      (0, u.oc)({
        application: s,
        branchId: l,
        buildId: t,
        manifestIds: e,
        installationPath: this.state.selectedInstallationPath,
        analyticsLocation: n
      }), (0, g.pX)(T.BVt.APPLICATION_LIBRARY), this.close()
    }), y(this, "handleInstall", () => {
      let {
        application: t,
        buildId: e,
        manifestIds: s,
        hasPreviouslyAcceptedStoreTerms: l
      } = this.props;
      if (null != e && null != s) l || (0, d.v)(), null != t && null != t.eulaId && (0, d.C)(t.eulaId), this.install(e, s);
      else throw Error("Unexpected missing build info for non-premium product")
    }), y(this, "handlePurchaseTermsChange", t => {
      this.setState({
        hasAcceptedNeccessaryTerms: t
      })
    }), y(this, "close", () => {
      this.props.onClose()
    })
  }
}
let N = Chunk311907.Ay.connectStores([Chunk568004.A, Chunk775228.A, Chunk293066.A, Chunk587895.A], t => {
  let {
    applicationId: e,
    branchId: s
  } = t, l = m.A.getTargetBuildId(e, s);
  return {
    application: p.A.getApplication(e),
    defaultInstallationPath: f.A.defaultInstallationPath,
    buildId: l,
    manifestIds: m.A.getTargetManifests(e, s),
    buildSizeKB: null != l ? m.A.getBuildSize(l) : null,
    hasPreviouslyAcceptedStoreTerms: _.A.hasAcceptedStoreTerms
  }
})(E)