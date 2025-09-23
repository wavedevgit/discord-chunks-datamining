/** Chunk was on web.js **/
/** chunk id: 736752, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => J
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk816814 = require("./816814.js"),
  Chunk809206 = require("./809206.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk279837 = require("./279837.jsx"),
  Chunk952306 = require("./952306.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk690221 = require("./690221.jsx"),
  Chunk332473 = require("./332473.js"),
  Chunk303172 = require("./303172.jsx"),
  Chunk518560 = require("./518560.jsx"),
  Chunk921801 = require("./921801.js"),
  Chunk577275 = require("./577275.js"),
  Chunk484459 = require("./484459.js"),
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
  Chunk719766 = require("./719766.js"),
  Chunk10198 = require("./10198.js");

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function X(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class Q extends Chunk647438.PureComponent {
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
    if (!module.isClaimed()) {
      let e = (0, Chunk951288.jsxs)("section", {
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk719766.accountWarningBodyText,
          children: Chunk388032.intl.string(Chunk388032.t.qKs3vr)
        }), (0, Chunk951288.jsx)(Chunk755721.zx, {
          look: Chunk755721.iL.OUTLINED,
          size: Chunk755721.Ph.SMALL,
          color: Chunk755721.zx.Colors.WHITE,
          onClick: () => Chunk952306.Z.openClaimAccountModal(),
          children: Chunk388032.intl.string(Chunk388032.t["7psymp"])
        })]
      });
      return (0, Chunk951288.jsx)(Chunk481060.ToO, {
        type: Chunk481060.ToO.Types.DANGER,
        className: Chunk10198.marginBottom20,
        imageData: {
          src: require("./418558.js"),
          width: 60,
          height: 60
        },
        title: Chunk388032.intl.string(Chunk388032.t["/3qnLy"]),
        body: module
      })
    }
    if (null == module.email) return null;
    if (!module.verified) {
      let e = (0, Chunk951288.jsxs)("section", {
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk719766.accountWarningBodyText,
          children: Chunk388032.intl.string(Chunk388032.t.NAzplJ)
        }), (0, Chunk951288.jsx)(Chunk418632.Z, {
          size: Chunk755721.Ph.SMALL,
          color: Chunk755721.zx.Colors.PRIMARY
        })]
      });
      return (0, Chunk951288.jsx)(Chunk481060.ToO, {
        type: Chunk481060.ToO.Types.PRIMARY,
        className: Chunk10198.marginBottom20,
        imageData: {
          src: require("./449125.js"),
          width: 60,
          height: 60
        },
        title: Chunk388032.intl.string(Chunk388032.t.tuGzBQ),
        body: module
      })
    }
  }
  renderPomeloWarning() {
    return this.props.shouldRenderPomeloWarning ? (0, Chunk951288.jsxs)(Chunk481060.Wn, {
      className: Chunk719766.accountWarningBodyText,
      messageType: Chunk481060.QYI.WARNING,
      children: [Chunk388032.intl.format(Chunk388032.t.pdYZys, {}), " ", "", (0, Chunk951288.jsx)(Chunk690221.Z, {
        className: Chunk719766.noticeTextButton,
        onClick: () => (0, Chunk303172.Z)(Chunk801461.Kq.USER_SETTINGS),
        children: Chunk388032.intl.string(Chunk388032.t.LhlgY2)
      })]
    }) : null
  }
  renderAccountSettings() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      t = (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, Chunk951288.jsx)(Chunk2719.Z, {})]
      });
    return module ? (0, Chunk951288.jsx)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      title: Chunk388032.intl.string(Chunk388032.t["JAIM/v"]),
      children: exports
    }) : exports
  }
  renderSecuritySettings() {
    let {
      backupCodes: e,
      currentUser: t,
      theme: i
    } = this.props, a = (0, Chunk780384.wj)(Chunk647438) ? require("./555702.js") : require("./610802.js");
    return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      className: o()(Chunk719766.userSettingsSecurity, Chunk10198.marginTop40),
      title: Chunk388032.intl.string(Chunk388032.t.pKSjEh),
      tag: "h1",
      children: [exports.mfaEnabled ? (0, Chunk951288.jsx)(Chunk481060.hjN, {
        children: (0, Chunk951288.jsxs)(Chunk481060.vwX, {
          className: o()(Chunk719766.isEnabled, Chunk10198.marginBottom20),
          children: [(0, Chunk951288.jsx)("img", {
            alt: "",
            className: Chunk719766.lockIcon,
            src: require("./511391.js")
          }), Chunk388032.intl.string(Chunk388032.t.FsmBy8)]
        })
      }) : null, (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_CHANGE_PASSWORD,
        children: (0, Chunk951288.jsx)("div", {
          children: (0, Chunk951288.jsx)("div", {
            "data-button-hoisted-classname-wrapper": true,
            className: Chunk719766.changePasswordButton,
            children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              size: "sm",
              text: Chunk388032.intl.string(Chunk388032.t["FRep5+"]),
              onClick: () => (0, Chunk481060.h7j)(e => (0, r.jsx)(B.default, X(z({}, e), {
                onSuccess: e.onClose
              })))
            })
          })
        })
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
        children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
          align: Chunk600164.Z.Align.STRETCH,
          children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
            wrap: true,
            children: (0, Chunk951288.jsx)(Chunk730820.Z, {
              backupCodes: module
            })
          }), exports.mfaEnabled ? null : (0, Chunk951288.jsx)(Chunk600164.Z, {
            align: Chunk600164.Z.Align.CENTER,
            basis: "323px",
            grow: 0,
            children: (0, Chunk951288.jsx)("img", {
              src: Chunk120356,
              className: Chunk719766.userSettingsSecurityImage,
              alt: ""
            })
          })]
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
    if (Chunk647438) {
      let e = () => this.setState({
        shouldRenderOwnedTeamsModal: false
      });
      return (0, Chunk951288.jsx)(Chunk481060.sYh, {
        dismissable: true,
        header: Chunk388032.intl.string(Chunk388032.t.UNGZDA),
        confirmText: Chunk388032.intl.string(Chunk388032.t.BddRzc),
        confirmButtonColor: Chunk755721.Tt.BRAND,
        onCancel: module,
        onConfirm: module,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: Chunk388032.intl.string(Chunk388032.t.alpAUl)
        })
      })
    }
    if (module) {
      let e = () => this.setState({
        shouldRenderOwnedGuildsModal: false
      });
      return (0, Chunk951288.jsx)(Chunk481060.sYh, {
        dismissable: true,
        header: Chunk388032.intl.string(Chunk388032.t.I5UrbW),
        confirmText: Chunk388032.intl.string(Chunk388032.t.BddRzc),
        confirmButtonColor: Chunk755721.Tt.BRAND,
        onCancel: module,
        onConfirm: module,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: Chunk388032.intl.string(Chunk388032.t.UyVVam)
        })
      })
    }
    if (exports) {
      let e = () => this.setState({
        shouldRenderDeleteAccountConfirmModal: false
      });
      return (0, Chunk951288.jsx)(Chunk481060.sYh, {
        dismissable: true,
        header: Chunk388032.intl.string(Chunk388032.t["8lQ2ra"]),
        confirmText: Chunk388032.intl.string(Chunk388032.t["8lQ2ra"]),
        cancelText: Chunk388032.intl.string(Chunk388032.t["ETE/oK"]),
        onCancel: module,
        onConfirm: () => (0, Chunk809206.ss)("", true).then(module),
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: Chunk388032.intl.string(Chunk388032.t.FB4H1N)
        })
      })
    }
    if (require) {
      let e = () => this.setState({
        shouldRenderDisableAccountErrorModal: false,
        disableAccountErrorMessage: null
      });
      return (0, Chunk951288.jsx)(Chunk481060.sYh, {
        dismissable: true,
        header: Chunk388032.intl.string(Chunk388032.t.LX0nT0),
        confirmText: Chunk388032.intl.string(Chunk388032.t.BddRzc),
        confirmButtonColor: Chunk755721.Tt.BRAND,
        onCancel: module,
        onConfirm: module,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: Chunk120356
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
    return (0, Chunk951288.jsx)(Chunk888256.Z, {
      className: Chunk10198.marginTop40,
      currentUser: module,
      disabled: exports,
      handleDisableAccount: () => this.handleDisableAccount(false),
      handleDeleteAccount: () => this.handleDisableAccount(true)
    })
  }
  renderSecuritySettingsRedesign() {
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [this.renderConfirmModals(), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_PROFILE,
        children: this.renderAccountSettings(false)
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
        children: this.renderSecuritySettings()
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_REMOVAL,
        children: this.renderAccountRemovalSettings()
      })]
    })
  }
  renderUnhidden() {
    let {
      subsection: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk10298.N, {
      header: Chunk388032.intl.string(Chunk388032.t["JAIM/v"]),
      children: (0, Chunk951288.jsx)(Chunk526156.Z, {
        parentSetting: Chunk726985.s6.ACCOUNT,
        settingsSection: Chunk981631.oAB.ACCOUNT,
        panelClassName: Chunk719766.tabPanel,
        onTabChange: e => {
          w.default.track(F.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
            target_tab_name: e === Z.s6.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING"
          })
        },
        defaultTabIndex: "ACCOUNT_STANDING" === module ? 1 : true,
        tabs: [{
          title: Chunk388032.intl.string(Chunk388032.t.Am9YHh),
          component: () => this.renderSecuritySettingsRedesign(),
          setting: Chunk726985.s6.ACCOUNT_SECURITY_TAB
        }, {
          title: Chunk388032.intl.string(Chunk388032.t["Vov/9v"]),
          component: Chunk518560.Z,
          setting: Chunk726985.s6.PRIVACY_AND_SAFETY_STANDING
        }]
      })
    })
  }
  render() {
    return this.props.hide ? (0, Chunk951288.jsx)(Chunk497321.Z, {}) : this.renderUnhidden()
  }
  handleDisableAccountError(e) {
    if (e.body.code === F.evJ.INVALID_PASSWORD) throw e;
    this.setState({
      shouldRenderDisableAccountErrorModal: true,
      disableAccountErrorMessage: e.body.message
    })
  }
  handleSubmitDisableAccount(e, t) {
    return (0, p.ss)(e, t).then(F.dG4, this.handleDisableAccountError)
  }
  handleDisableAccount() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] && arguments[0],
      {
        currentUser: n,
        userTeams: i
      } = this.props,
      a = Chunk430824.Z.getGuildsArray().filter(e => e.ownerId === n.id);
    return (null != (e = null == Chunk647438 ? true : Chunk647438.filter(e => e.owner_user_id === n.id)) ? module : []).length > 0 ? void this.setState({
      shouldRenderOwnedTeamsModal: true
    }) : Chunk120356.length > 0 ? void this.setState({
      shouldRenderOwnedGuildsModal: true
    }) : void(require.isClaimed() ? (0, Chunk481060.h7j)(e => (0, r.jsx)(m.Z, X(z({}, e), {
      handleSubmit: e => this.handleSubmitDisableAccount(e, t),
      title: t ? H.intl.string(H.t["8lQ2ra"]) : H.intl.string(H.t.jf5GGR),
      actionText: t ? H.intl.string(H.t["8lQ2ra"]) : H.intl.string(H.t.jf5GGR),
      children: t ? H.intl.string(H.t.FB4H1N) : H.intl.string(H.t.gk7h39)
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
let J = () => {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return l()(null != module, "ConnectedUserAccountSettings: currentUser cannot be undefined"), module
    }),
    t = (0, Chunk442837.e7)([Chunk325067.Z], () => Chunk325067.Z.getBackupCodes()),
    n = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    i = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    a = (0, Chunk332473.b)(),
    o = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    s = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSubsection()),
    {
      teams: u,
      loading: d
    } = (0, Chunk577275.Z)({
      refreshOnDepChange: true
    });
  return (0, Chunk951288.jsx)(Q, {
    theme: Chunk647438,
    currentUser: module,
    backupCodes: exports,
    hide: require,
    shouldRenderPomeloWarning: Chunk120356,
    locale: o,
    subsection: Chunk512722,
    userTeams: Chunk780384,
    userTeamsLoading: Chunk755721
  })
}