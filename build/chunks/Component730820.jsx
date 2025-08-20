/** Chunk was on web.js **/
/** chunk id: 730820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk816814 = require("./816814.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk23645 = require("./23645.js"),
  Chunk712364 = require("./712364.jsx"),
  Chunk279837 = require("./279837.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk144114 = require("./144114.js"),
  Chunk921801 = require("./921801.js"),
  Chunk607018 = require("./607018.jsx"),
  Chunk778764 = require("./778764.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk325067 = require("./325067.js"),
  Chunk594174 = require("./594174.js"),
  Chunk572004 = require("./572004.js"),
  Chunk287880 = require("./287880.js"),
  Chunk714565 = require("./714565.js"),
  Chunk202858 = require("./202858.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk815660 = require("./815660.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk343396 = require("./343396.js"),
  Chunk197571 = require("./197571.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  let {
    code: {
      code: t,
      consumed: n
    }
  } = e, a = "".concat(t.substr(0, 4), "-").concat(t.substr(4)), o = i.useRef(null), s = i.useCallback(e => {
    if ("c" === e.key && e.metaKey && v.wS) {
      var t;
      e.preventDefault(), e.stopPropagation(), (0, v.JG)(a), null == o || null == (t = o.current) || t.focus()
    }
  }, [a]);
  return (0, r.jsx)("li", {
    className: w.marginBottom20,
    children: (0, r.jsx)(l.P3F, {
      innerRef: o,
      className: P.backupCode,
      onKeyDown: s,
      children: (0, r.jsx)(l.XZJ, {
        displayOnly: true,
        readOnly: true,
        className: P.codeCheckbox,
        value: n,
        children: (0, r.jsx)("span", {
          className: P.code,
          children: a
        })
      })
    })
  })
}
class k extends Chunk647438.PureComponent {
  maskPhoneNumber(e) {
    return null == e ? "" : "".concat("*".repeat(e.length - 4)).concat(e.slice(false))
  }
  renderMFASMS() {
    let e, t, {
        revealed: n
      } = this.state,
      {
        currentUser: i,
        togglingSMS: a,
        hasTOTPEnabled: o
      } = this.props,
      s = null != Chunk647438.phone,
      c = Chunk647438.hasFlag(Chunk981631.xW$.MFA_SMS);
    if (o) {
      if (Chunk442837 || Chunk816814) {
        let e = require ? Chunk647438.phone : this.maskPhoneNumber(Chunk647438.phone);
        t = (0, Chunk951288.jsxs)(Chunk481060.R94, {
          type: Chunk481060.R94.Types.DESCRIPTION,
          className: Chunk197571.marginBottom8,
          children: [Chunk388032.intl.format(Chunk388032.t.PXVoEB, {
            phoneNumber: module
          }), (0, Chunk951288.jsx)(Chunk481060.eee, {
            onClick: this.togglePhoneNumberVisibility,
            className: Chunk343396.phoneRevealer,
            children: require ? Chunk388032.intl.string(Chunk388032.t.FfltIC) : Chunk388032.intl.string(Chunk388032.t.llArAg)
          })]
        })
      }
      if (Chunk816814) e = (0, Chunk951288.jsx)(Chunk600164.Z, {
        className: Chunk442837 ? "" : Chunk197571.marginTop8,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "critical-secondary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t.KLWnio),
          loading: Chunk512722,
          onClick: this.handleDisableSMS
        })
      });
      else {
        let t = (0, Chunk714565.c)(Chunk647438);
        e = (0, Chunk951288.jsxs)(Chunk481060.hE2, {
          size: "sm",
          className: Chunk442837 ? "" : Chunk197571.marginTop8,
          children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            size: "sm",
            text: null != exports ? exports : Chunk388032.intl.string(Chunk388032.t.DZQe29),
            onClick: this.handleEnableSMS,
            loading: Chunk512722,
            disabled: null != exports
          }), Chunk442837 ? (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "secondary",
            size: "sm",
            text: Chunk388032.intl.string(Chunk388032.t.Ulqq6O),
            onClick: this.handleChangePhoneNumber
          }) : null]
        })
      }
      return (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_SMS_BACKUP,
        children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
          className: Chunk197571.marginTop40,
          title: Chunk388032.intl.string(Chunk388032.t.uHAJ5u),
          children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.R94.Types.DESCRIPTION,
            children: Chunk388032.intl.string(Chunk388032.t.fspJ4O)
          }), exports, module]
        })
      })
    }
  }
  renderEnabled() {
    let e, {
        backupCodes: t
      } = this.props,
      n = (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_VIEW_BACKUP_CODES,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t.xZEzbm),
          onClick: this.sendMFABackupCodesVerificationKeyEmail
        })
      });
    if (exports.length > 0) {
      n = (0, Chunk951288.jsx)(Chunk23645.Z, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t.qZZUy8)
        })
      });
      let i = e => e.map(e => (0, r.jsx)(M, {
        code: e
      }, e.code));
      e = (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        title: Chunk388032.intl.string(Chunk388032.t.GfqHPj),
        children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
          type: Chunk481060.R94.Types.DESCRIPTION,
          className: Chunk197571.marginBottom20,
          children: Chunk388032.intl.format(Chunk388032.t.OhmvYm, {})
        }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
          children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
            children: (0, Chunk951288.jsx)("ul", {
              className: Chunk343396.checkboxGroup,
              children: Chunk647438(exports.slice(0, exports.length / 2))
            })
          }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
            children: (0, Chunk951288.jsx)("ul", {
              className: Chunk343396.checkboxGroup,
              children: Chunk647438(exports.slice(exports.length / 2))
            })
          })]
        }), (0, Chunk951288.jsx)("div", {
          children: (0, Chunk951288.jsx)(Chunk481060.Avr, {
            textVariant: "text-sm/medium",
            onClick: this.generateBackupCodes,
            text: Chunk388032.intl.string(Chunk388032.t.RIThUl)
          })
        }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
          className: Chunk197571.marginTop20
        })]
      })
    }
    return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        children: Chunk388032.intl.string(Chunk388032.t.EPVq09)
      }), (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        className: Chunk197571.marginBottom20,
        children: Chunk388032.intl.string(Chunk388032.t.bQwxiY)
      }), (0, Chunk951288.jsxs)(Chunk481060.hE2, {
        size: "sm",
        className: Chunk197571.marginBottom20,
        children: [require, (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_REMOVE_2FA,
          children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "critical-secondary",
            size: "sm",
            text: Chunk388032.intl.string(Chunk388032.t["D+aE7u"]),
            onClick: this.handleDisableMFA
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_ENABLE_2FA,
          children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            size: "sm",
            text: Chunk388032.intl.string(Chunk388032.t.cDgKtb),
            onClick: Chunk202858.ZP.enableMFA
          })
        })]
      }), module, this.renderMFASMS(), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_SECURITY_KEYS,
        children: (0, Chunk951288.jsx)(Chunk778764.Z, {})
      })]
    })
  }
  renderDisabled() {
    return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: Chunk388032.intl.string(Chunk388032.t.EPVq09),
      children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        className: Chunk197571.marginBottom20,
        children: Chunk388032.intl.string(Chunk388032.t["8aDa1t"])
      }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t.cDgKtb),
          onClick: Chunk202858.ZP.enableMFA
        })
      }), (0, Chunk951288.jsx)(Chunk778764.Z, {})]
    })
  }
  render() {
    let {
      currentUser: e
    } = this.props;
    return Chunk287880.uZ ? module.verified ? module.mfaEnabled ? this.renderEnabled() : this.renderDisabled() : (0, Chunk951288.jsx)(Chunk481060.hjN, {
      title: Chunk388032.intl.string(Chunk388032.t.EPVq09),
      children: (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        children: Chunk388032.intl.string(Chunk388032.t.uggF7u)
      })
    }) : (0, Chunk951288.jsx)(Chunk481060.hjN, {
      title: Chunk388032.intl.string(Chunk388032.t.EPVq09),
      children: (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        children: Chunk388032.intl.string(Chunk388032.t.PhHhsr)
      })
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    (0, Chunk481060.h7j)(t => (0, r.jsx)(g.default, x({
      reason: h.L.USER_SETTINGS_UPDATE
    }, t, e)), {
      modalKey: Chunk815660.M
    })
  }
  constructor(...e) {
    super(...e), D(this, "state", {
      revealed: false,
      password: ""
    }), D(this, "togglePhoneNumberVisibility", e => {
      e.preventDefault(), this.setState({
        revealed: !this.state.revealed
      })
    }), D(this, "handleDisableMFA", () => {
      u.Z.show({
        title: R.intl.string(R.t["D+aE7u"]),
        body: R.intl.string(R.t.EA4ZEh),
        cancelText: R.intl.string(R.t["ETE/oK"]),
        onConfirm: () => c.Z.disable()
      })
    }), D(this, "generateBackupCodes", async () => {
      let e = y.Z.getVerificationKey();
      await c.Z.confirmViewBackupCodes(e, true)
    }), D(this, "sendMFABackupCodesVerificationKeyEmail", () => {
      (0, l.h7j)(e => (0, r.jsx)(_.Z, j(x({}, e), {
        handleSubmit: e => c.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
          this.viewBackupCodes(e)
        }),
        title: R.intl.string(R.t.PsQmzc),
        actionText: R.intl.string(R.t.ajkYcH)
      })))
    }), D(this, "viewBackupCodes", e => {
      (0, l.h7j)(t => (0, r.jsx)(f.Z, j(x({}, t), {
        handleSubmit: e => c.Z.confirmViewBackupCodes(e, false).then(() => t.onClose()),
        maxLength: 8,
        title: R.intl.string(R.t.mGppp6),
        label: R.intl.string(R.t.TjGb4e),
        forceNoPlaceholder: true,
        retryPrompt: R.intl.string(R.t.PZgmxs),
        retrySuccessMessage: R.intl.string(R.t.j4qu8v),
        onRetry: () => c.Z.sendMFABackupCodesVerificationKeyEmail(e),
        actionText: R.intl.string(R.t.piW6YW),
        helpMessage: R.intl.string(R.t["37S9yc"])
      })))
    }), D(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: t,
            code: n
          } = e;
          return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(t ? "(used)" : "")
        }).join("\r\n"),
        t = R.intl.formatToPlainString(R.t.uYWwh4, {
          email: this.props.currentUser.email
        });
      return "".concat(t, "\r\n\r\n").concat(e)
    }), D(this, "handleChangePhoneNumber", () => {
      this.openPhoneVerificationModal()
    }), D(this, "handleEnableSMS", () => {
      let {
        currentUser: e
      } = this.props;
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: c.Z.enableSMS
      }) : c.Z.enableSMS()
    }), D(this, "handleDisableSMS", () => {
      (0, l.h7j)(e => (0, r.jsx)(_.Z, j(x({}, e), {
        handleSubmit: c.Z.disableSMS,
        title: R.intl.string(R.t.KLWnio),
        children: R.intl.string(R.t["W0/Dub"])
      })))
    })
  }
}

function U(e) {
  let t = (0, s.e7)([O.default], () => O.default.getCurrentUser());
  o()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
  let n = (0, s.cj)([y.Z, b.default], () => ({
    togglingSMS: y.Z.togglingSMS,
    hasTOTPEnabled: b.default.hasTOTPEnabled()
  }));
  return (0, r.jsx)(k, x({
    currentUser: t
  }, n, e))
}