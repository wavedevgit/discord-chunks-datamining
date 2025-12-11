/** Chunk was on web.js **/
/** chunk id: 393681, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => W,
  Z: () => z
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk816814 = require("./816814.js"),
  Chunk809206 = require("./809206.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk952306 = require("./952306.jsx"),
  Chunk690221 = require("./690221.jsx"),
  Chunk332473 = require("./332473.js"),
  Chunk303172 = require("./303172.jsx"),
  Chunk518560 = require("./518560.jsx"),
  Chunk921801 = require("./921801.js"),
  Chunk577275 = require("./577275.js"),
  Chunk484459 = require("./484459.js"),
  Chunk355497 = require("./355497.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk325067 = require("./325067.js"),
  Chunk246946 = require("./246946.js"),
  Chunk663389 = require("./663389.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk706454 = require("./706454.js"),
  Chunk210887 = require("./210887.js"),
  Chunk418632 = require("./418632.jsx"),
  Chunk10298 = require("./10298.jsx"),
  Chunk526156 = require("./526156.jsx"),
  Chunk730820 = require("./730820.jsx"),
  Chunk888256 = require("./888256.jsx"),
  Chunk2719 = require("./2719.jsx"),
  Chunk194530 = require("./194530.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk801461 = require("./801461.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk335094 = require("./335094.js");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var W = function(e) {
  return e.SECURITY = "SECURITY", e.STANDING = "STANDING", e
}({});
class K extends Chunk473749.PureComponent {
  componentDidMount() {
    let {
      currentUser: e
    } = this.props;
    (0, Chunk484459.Z)(module.id, module.getAvatarURL(true, 80))
  }
  componentWillUnmount() {
    Chunk816814.Z.clearBackupCodes(), (0, Chunk809206.Zy)()
  }
  renderAccountWarning() {
    let {
      currentUser: e
    } = this.props;
    return module.isClaimed() ? null == module.email ? null : module.verified ? true : (0, Chunk54381.jsxs)(Chunk481060.M14, {
      type: "warning",
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/medium",
        children: Chunk388032.intl.string(Chunk388032.t.tuGzBT)
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        className: Chunk335094.inlineNoticeText,
        children: Chunk388032.intl.string(Chunk388032.t.NAzplE)
      }), (0, Chunk54381.jsx)(Chunk418632.Z, {
        size: "sm",
        variant: "secondary"
      })]
    }) : (0, Chunk54381.jsxs)(Chunk481060.M14, {
      type: "critical",
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/medium",
        children: Chunk388032.intl.string(Chunk388032.t["/3qnL/"])
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        className: Chunk335094.inlineNoticeText,
        children: Chunk388032.intl.string(Chunk388032.t.qKs3vg)
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "secondary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t["7psymi"]),
        onClick: () => Chunk952306.Z.openClaimAccountModal()
      })]
    })
  }
  renderPomeloWarning() {
    return this.props.shouldRenderPomeloWarning ? (0, Chunk54381.jsx)(Chunk481060.M14, {
      type: "warning",
      children: (0, Chunk54381.jsxs)(Chunk481060.Text, {
        variant: "text-sm/normal",
        children: [Chunk388032.intl.format(Chunk388032.t.pdYZyg, {}), " ", "", (0, Chunk54381.jsx)(Chunk690221.Z, {
          className: Chunk335094.noticeTextButton,
          onClick: () => (0, Chunk303172.Z)(Chunk801461.Kq.USER_SETTINGS),
          children: Chunk388032.intl.string(Chunk388032.t.LhlgY9)
        })]
      })
    }) : null
  }
  renderAccountSettings() {
    return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, Chunk54381.jsx)(Chunk2719.Z, {})]
    })
  }
  renderSecuritySettings() {
    let {
      backupCodes: e,
      currentUser: t
    } = this.props;
    return (0, Chunk54381.jsxs)(Chunk481060.C3N, {
      className: Chunk335094.userSettingsSecurity,
      label: Chunk388032.intl.string(Chunk388032.t.pKSjEj),
      children: [exports.mfaEnabled ? (0, Chunk54381.jsx)(Chunk481060.Wn, {
        icon: Chunk481060.mBM,
        messageType: Chunk481060.QYI.POSITIVE,
        children: Chunk388032.intl.string(Chunk388032.t.FsmBy4)
      }) : null, (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_CHANGE_PASSWORD,
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t["FRep5/"]),
          onClick: () => (0, Chunk481060.h7j)(e => (0, r.jsx)(M.default, Y(V({}, e), {
            onSuccess: e.onClose
          })))
        })
      }), (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
        children: (0, Chunk54381.jsx)(Chunk730820.Z, {
          backupCodes: module
        })
      })]
    })
  }
  renderConfirmModals() {
    let {
      shouldRenderOwnedGuildsModal: e,
      shouldRenderDeleteAccountConfirmModal: t,
      shouldRenderDisableAccountErrorModal: n,
      shouldRenderOwnedTeamsModal: i,
      disableAccountErrorMessage: a
    } = this.state;
    if (Chunk473749) {
      let e = () => this.setState({
        shouldRenderOwnedTeamsModal: false
      });
      return (0, Chunk54381.jsx)(Chunk481060.SR, {
        dismissable: true,
        header: Chunk388032.intl.string(Chunk388032.t.UNGZDI),
        confirmText: Chunk388032.intl.string(Chunk388032.t.BddRzS),
        confirmButtonColor: Chunk755721.Tt.BRAND,
        onCancel: module,
        onConfirm: module,
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: Chunk388032.intl.string(Chunk388032.t.alpAUm)
        })
      })
    }
    if (module) {
      let e = () => this.setState({
        shouldRenderOwnedGuildsModal: false
      });
      return (0, Chunk54381.jsx)(Chunk481060.SR, {
        dismissable: true,
        header: Chunk388032.intl.string(Chunk388032.t.I5UrbV),
        confirmText: Chunk388032.intl.string(Chunk388032.t.BddRzS),
        confirmButtonColor: Chunk755721.Tt.BRAND,
        onCancel: module,
        onConfirm: module,
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: Chunk388032.intl.string(Chunk388032.t.UyVVan)
        })
      })
    }
    if (exports) {
      let e = () => this.setState({
        shouldRenderDeleteAccountConfirmModal: false
      });
      return (0, Chunk54381.jsx)(Chunk481060.SR, {
        dismissable: true,
        header: Chunk388032.intl.string(Chunk388032.t["8lQ2rR"]),
        confirmText: Chunk388032.intl.string(Chunk388032.t["8lQ2rR"]),
        cancelText: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
        onCancel: module,
        onConfirm: () => (0, Chunk809206.ss)("", true).then(module),
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: Chunk388032.intl.string(Chunk388032.t.FB4H1D)
        })
      })
    }
    if (require) {
      let e = () => this.setState({
        shouldRenderDisableAccountErrorModal: false,
        disableAccountErrorMessage: null
      });
      return (0, Chunk54381.jsx)(Chunk481060.SR, {
        dismissable: true,
        header: Chunk388032.intl.string(Chunk388032.t.LX0nT8),
        confirmText: Chunk388032.intl.string(Chunk388032.t.BddRzS),
        confirmButtonColor: Chunk755721.Tt.BRAND,
        onCancel: module,
        onConfirm: module,
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: Chunk512722
        })
      })
    }
    return null
  }
  renderAccountRemovalSettings() {
    let {
      currentUser: e,
      userTeamsLoading: t
    } = this.props;
    return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk888256.Z, {
        currentUser: module,
        disabled: exports,
        handleDisableAccount: () => this.handleDisableAccount(false),
        handleDeleteAccount: () => this.handleDisableAccount(true)
      })]
    })
  }
  renderSecuritySettingsRedesign() {
    return (0, Chunk54381.jsxs)(Chunk481060.l09, {
      children: [this.renderConfirmModals(), (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_PROFILE,
        children: this.renderAccountSettings()
      }), (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
        children: this.renderSecuritySettings()
      }), (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_REMOVAL,
        children: this.renderAccountRemovalSettings()
      })]
    })
  }
  renderUnhidden() {
    let {
      subsection: e
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk10298.N, {
      header: Chunk388032.intl.string(Chunk388032.t["JAIM/m"]),
      children: (0, Chunk54381.jsx)(Chunk526156.Z, {
        parentSetting: Chunk726985.s6.ACCOUNT,
        settingsSection: Chunk981631.oAB.ACCOUNT,
        panelClassName: Chunk335094.tabPanel,
        onTabChange: e => {
          A.default.track(U.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
            target_tab_name: e === k.s6.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING"
          })
        },
        defaultTabIndex: "ACCOUNT_STANDING" === module ? 1 : true,
        tabs: [{
          title: Chunk388032.intl.string(Chunk388032.t.Am9YHi),
          component: () => this.renderSecuritySettingsRedesign(),
          setting: Chunk726985.s6.ACCOUNT_SECURITY_TAB
        }, {
          title: Chunk388032.intl.string(Chunk388032.t["Vov/9o"]),
          component: Chunk518560.Z,
          setting: Chunk726985.s6.PRIVACY_AND_SAFETY_STANDING
        }]
      })
    })
  }
  render() {
    return this.props.hide ? (0, Chunk54381.jsx)(Chunk497321.Z, {}) : this.renderUnhidden()
  }
  handleDisableAccountError(e) {
    if (e.body.code === U.evJ.INVALID_PASSWORD) throw e;
    this.setState({
      shouldRenderDisableAccountErrorModal: true,
      disableAccountErrorMessage: e.body.message
    })
  }
  handleSubmitDisableAccount(e, t) {
    return (0, d.ss)(e, t).then(U.dG4, this.handleDisableAccountError)
  }
  handleDisableAccount() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] && arguments[0],
      {
        currentUser: n,
        userTeams: i
      } = this.props,
      a = Chunk430824.Z.getGuildsArray().filter(e => e.ownerId === n.id);
    return (null != (e = null == Chunk473749 ? true : Chunk473749.filter(e => e.owner_user_id === n.id)) ? module : []).length > 0 ? void this.setState({
      shouldRenderOwnedTeamsModal: true
    }) : Chunk512722.length > 0 ? void this.setState({
      shouldRenderOwnedGuildsModal: true
    }) : void(require.isClaimed() ? (0, Chunk481060.h7j)(e => (0, r.jsx)(O.default, Y(V({}, e), {
      handleSubmit: e => this.handleSubmitDisableAccount(e, t),
      title: t ? Z.intl.string(Z.t["8lQ2rR"]) : Z.intl.string(Z.t.jf5GGb),
      actionText: t ? Z.intl.string(Z.t["8lQ2rR"]) : Z.intl.string(Z.t.jf5GGb),
      children: t ? Z.intl.string(Z.t.FB4H1D) : Z.intl.string(Z.t.gk7h32)
    }))) : this.setState({
      shouldRenderDeleteAccountConfirmModal: true
    }))
  }
  constructor(e) {
    super(e), this.state = {
      disableAccountErrorMessage: null,
      shouldRenderOwnedGuildsModal: false,
      shouldRenderDeleteAccountConfirmModal: false,
      shouldRenderDisableAccountErrorModal: false,
      shouldRenderOwnedTeamsModal: false
    }
  }
}
let z = () => {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return o()(null != module, "ConnectedUserAccountSettings: currentUser cannot be undefined"), module
    }),
    t = (0, Chunk442837.e7)([Chunk325067.Z], () => Chunk325067.Z.getBackupCodes()),
    n = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    i = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    a = (0, Chunk332473.b)(),
    l = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    c = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSubsection()),
    {
      teams: u,
      loading: d
    } = (0, Chunk577275.Z)({
      refreshOnDepChange: true
    });
  return (0, Chunk54381.jsx)(K, {
    theme: Chunk473749,
    currentUser: module,
    backupCodes: exports,
    hide: require,
    shouldRenderPomeloWarning: Chunk512722,
    locale: Chunk755721,
    subsection: Chunk481060,
    userTeams: Chunk816814,
    userTeamsLoading: Chunk809206
  })
}