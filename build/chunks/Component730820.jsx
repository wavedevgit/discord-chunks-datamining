/** Chunk was on web.js **/
/** chunk id: 730820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk816814 = require("./816814.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk23645 = require("./23645.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk183620 = require("./183620.jsx"),
  Chunk144114 = require("./144114.js"),
  Chunk921801 = require("./921801.js"),
  Chunk355497 = require("./355497.jsx"),
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

function L(e, t, n) {
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
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  let {
    code: {
      code: t,
      consumed: n
    }
  } = e, a = "".concat(t.substr(0, 4), "-").concat(t.substr(4)), o = i.useRef(null), s = i.useCallback(e => {
    if ("c" === e.key && e.metaKey && I.wS) {
      var t;
      e.preventDefault(), e.stopPropagation(), (0, I.JG)(a), null == o || null == (t = o.current) || t.focus()
    }
  }, [a]);
  return (0, r.jsx)("li", {
    className: w.marginBottom20,
    children: (0, r.jsx)(c.P3F, {
      innerRef: o,
      className: D.backupCode,
      onKeyDown: s,
      children: (0, r.jsx)(l.$q, {
        displayOnly: true,
        readOnly: true,
        className: D.codeCheckbox,
        value: n,
        children: (0, r.jsx)("span", {
          className: D.code,
          children: a
        })
      })
    })
  })
}
class U extends Chunk473749.PureComponent {
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
      s = null != Chunk473749.phone,
      l = Chunk473749.hasFlag(Chunk981631.xW$.MFA_SMS);
    if (o) {
      if (Chunk442837 || Chunk755721) {
        let e = require ? Chunk473749.phone : this.maskPhoneNumber(Chunk473749.phone);
        t = (0, Chunk54381.jsxs)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: [Chunk388032.intl.format(Chunk388032.t.PXVoEO, {
            phoneNumber: module
          }), (0, Chunk54381.jsx)(Chunk481060.Anchor, {
            onClick: this.togglePhoneNumberVisibility,
            className: Chunk343396.phoneRevealer,
            children: require ? Chunk388032.intl.string(Chunk388032.t.FfltIN) : Chunk388032.intl.string(Chunk388032.t.llArAg)
          })]
        })
      }
      if (Chunk755721) e = (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "critical-secondary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t.KLWnit),
        loading: Chunk512722,
        onClick: this.handleDisableSMS
      });
      else {
        let t = (0, Chunk714565.c)(Chunk473749);
        e = (0, Chunk54381.jsxs)(Chunk481060.ButtonGroup, {
          size: "sm",
          children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "primary",
            size: "sm",
            text: null != exports ? exports : Chunk388032.intl.string(Chunk388032.t.DZQe23),
            onClick: this.handleEnableSMS,
            loading: Chunk512722,
            disabled: null != exports
          }), Chunk442837 ? (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "secondary",
            size: "sm",
            text: Chunk388032.intl.string(Chunk388032.t.Ulqq6K),
            onClick: this.handleChangePhoneNumber
          }) : null]
        })
      }
      return (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_SMS_BACKUP,
        children: (0, Chunk54381.jsxs)(Chunk481060.gNt, {
          label: Chunk388032.intl.string(Chunk388032.t.uHAJ5v),
          description: Chunk388032.intl.string(Chunk388032.t.fspJ4H),
          children: [exports, module]
        })
      })
    }
  }
  renderEnabled() {
    let e, {
        backupCodes: t
      } = this.props,
      n = (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_VIEW_BACKUP_CODES,
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t.xZEzbu),
          onClick: this.sendMFABackupCodesVerificationKeyEmail
        })
      });
    if (exports.length > 0) {
      n = (0, Chunk54381.jsx)(Chunk23645.Z, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t.qZZUy6)
        })
      });
      let i = e => e.map(e => (0, r.jsx)(j, {
        code: e
      }, e.code));
      e = (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        children: [(0, Chunk54381.jsxs)(Chunk481060.gNt, {
          label: Chunk388032.intl.string(Chunk388032.t.GfqHPn),
          description: Chunk388032.intl.format(Chunk388032.t.OhmvYt, {}),
          children: [(0, Chunk54381.jsxs)(Chunk600164.Z, {
            children: [(0, Chunk54381.jsx)(Chunk600164.Z.Child, {
              children: (0, Chunk54381.jsx)("ul", {
                className: Chunk343396.checkboxGroup,
                children: Chunk473749(exports.slice(0, exports.length / 2))
              })
            }), (0, Chunk54381.jsx)(Chunk600164.Z.Child, {
              children: (0, Chunk54381.jsx)("ul", {
                className: Chunk343396.checkboxGroup,
                children: Chunk473749(exports.slice(exports.length / 2))
              })
            })]
          }), (0, Chunk54381.jsx)(Chunk481060.Avr, {
            textVariant: "text-sm/medium",
            onClick: this.generateBackupCodes,
            text: Chunk388032.intl.string(Chunk388032.t.RIThUu)
          })]
        }), (0, Chunk54381.jsx)(Chunk481060.izJ, {})]
      })
    }
    return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t.EPVq00),
        description: Chunk388032.intl.string(Chunk388032.t.bQwxib),
        children: (0, Chunk54381.jsxs)(Chunk481060.ButtonGroup, {
          size: "sm",
          children: [require, (0, Chunk54381.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.ACCOUNT_REMOVE_2FA,
            children: (0, Chunk54381.jsx)(Chunk481060.Button, {
              variant: "critical-secondary",
              size: "sm",
              text: Chunk388032.intl.string(Chunk388032.t["D+aE7g"]),
              onClick: this.handleDisableMFA
            })
          }), (0, Chunk54381.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.ACCOUNT_ENABLE_2FA,
            children: (0, Chunk54381.jsx)(Chunk481060.Button, {
              variant: "primary",
              size: "sm",
              text: Chunk388032.intl.string(Chunk388032.t.cDgKte),
              onClick: Chunk202858.ZP.enableMFA
            })
          })]
        })
      }), module, this.renderMFASMS(), (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_SECURITY_KEYS,
        children: (0, Chunk54381.jsx)(Chunk778764.Z, {})
      })]
    })
  }
  renderDisabled() {
    return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t.EPVq00),
        description: Chunk388032.intl.string(Chunk388032.t["8aDa1t"]),
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t.cDgKte),
          onClick: Chunk202858.ZP.enableMFA
        })
      }), (0, Chunk54381.jsx)(Chunk778764.Z, {})]
    })
  }
  render() {
    let {
      currentUser: e
    } = this.props;
    return Chunk287880.uZ ? module.verified ? module.mfaEnabled ? this.renderEnabled() : this.renderDisabled() : (0, Chunk54381.jsx)(Chunk481060.gNt, {
      label: Chunk388032.intl.string(Chunk388032.t.EPVq00),
      children: (0, Chunk54381.jsx)(Chunk481060.Wn, {
        messageType: Chunk481060.QYI.WARNING,
        children: Chunk388032.intl.string(Chunk388032.t.uggF7o)
      })
    }) : (0, Chunk54381.jsx)(Chunk481060.gNt, {
      label: Chunk388032.intl.string(Chunk388032.t.EPVq00),
      children: (0, Chunk54381.jsx)(Chunk481060.Wn, {
        messageType: Chunk481060.QYI.INFO,
        children: Chunk388032.intl.string(Chunk388032.t.PhHhsj)
      })
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    (0, Chunk481060.h7j)(t => (0, r.jsx)(E.default, x({
      reason: h.L.USER_SETTINGS_UPDATE
    }, t, e)), {
      modalKey: Chunk815660.M
    })
  }
  constructor(...e) {
    super(...e), L(this, "state", {
      revealed: false,
      password: ""
    }), L(this, "togglePhoneNumberVisibility", e => {
      e.preventDefault(), this.setState({
        revealed: !this.state.revealed
      })
    }), L(this, "handleDisableMFA", () => {
      d.Z.show({
        title: P.intl.string(P.t["D+aE7g"]),
        body: P.intl.string(P.t.EA4ZEk),
        cancelText: P.intl.string(P.t["ETE/oC"]),
        onConfirm: () => u.Z.disable()
      })
    }), L(this, "generateBackupCodes", async () => {
      let e = O.Z.getVerificationKey();
      await u.Z.confirmViewBackupCodes(e, true)
    }), L(this, "sendMFABackupCodesVerificationKeyEmail", () => {
      (0, c.h7j)(e => (0, r.jsx)(g.Z, k(x({}, e), {
        handleSubmit: e => u.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
          this.viewBackupCodes(e)
        }),
        title: P.intl.string(P.t.PsQmzU),
        actionText: P.intl.string(P.t.ajkYcF)
      })))
    }), L(this, "viewBackupCodes", e => {
      (0, c.h7j)(t => (0, r.jsx)(p.Z, k(x({}, t), {
        handleSubmit: e => u.Z.confirmViewBackupCodes(e, false).then(() => t.onClose()),
        maxLength: 8,
        title: P.intl.string(P.t["mGppp/"]),
        label: P.intl.string(P.t.TjGb4Q),
        forceNoPlaceholder: true,
        retryPrompt: P.intl.string(P.t.PZgmxv),
        retrySuccessMessage: P.intl.string(P.t.j4qu8n),
        onRetry: () => u.Z.sendMFABackupCodesVerificationKeyEmail(e),
        actionText: P.intl.string(P.t.piW6YS),
        helpMessage: P.intl.string(P.t["37S9yU"])
      })), {
        stackingBehavior: "stack"
      })
    }), L(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: t,
            code: n
          } = e;
          return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(t ? "(used)" : "")
        }).join("\r\n"),
        t = P.intl.formatToPlainString(P.t["uYWwh/"], {
          email: this.props.currentUser.email
        });
      return "".concat(t, "\r\n\r\n").concat(e)
    }), L(this, "handleChangePhoneNumber", () => {
      this.openPhoneVerificationModal()
    }), L(this, "handleEnableSMS", () => {
      let {
        currentUser: e
      } = this.props;
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: u.Z.enableSMS
      }) : u.Z.enableSMS()
    }), L(this, "handleDisableSMS", () => {
      (0, c.h7j)(e => (0, r.jsx)(g.Z, k(x({}, e), {
        handleSubmit: u.Z.disableSMS,
        title: P.intl.string(P.t.KLWnit),
        children: P.intl.string(P.t["W0/Duf"])
      })))
    })
  }
}

function G(e) {
  let t = (0, s.e7)([v.default], () => v.default.getCurrentUser());
  o()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
  let n = (0, s.cj)([O.Z, y.default], () => ({
    togglingSMS: O.Z.togglingSMS,
    hasTOTPEnabled: y.default.hasTOTPEnabled()
  }));
  return (0, r.jsx)(U, x({
    currentUser: t
  }, n, e))
}