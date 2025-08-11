/** Chunk was on 75708 **/
/** chunk id: 730820, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk778764 = require("./778764.js"),
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
  Chunk951839 = require("./951839.js"),
  Chunk20493 = require("./20493.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k(e) {
  let {
    code: {
      code: t,
      consumed: n
    }
  } = e, s = "".concat(t.substr(0, 4), "-").concat(t.substr(4)), a = r.useRef(null), l = r.useCallback(e => {
    if ("c" === e.key && e.metaKey && O.wS) {
      var t;
      e.preventDefault(), e.stopPropagation(), (0, O.JG)(s), null == a || null == (t = a.current) || t.focus()
    }
  }, [s]);
  return <li className={R.marginBottom20}><c.P3F innerRef={a} className={P.backupCode} onKeyDown={l}><c.XZJ displayOnly={true} readOnly={true} className={P.codeCheckbox} value={n}><span className={P.code}>{s}</span></c.XZJ></c.P3F></li>
}
class L extends Chunk73800.PureComponent {
  maskPhoneNumber(e) {
    return null == e ? "" : "".concat("*".repeat(e.length - 4)).concat(e.slice(false))
  }
  renderMFASMS() {
    let e, t, {
        revealed: n
      } = this.state,
      {
        currentUser: r,
        togglingSMS: s,
        hasTOTPEnabled: a
      } = this.props,
      l = null != Chunk73800.phone,
      o = Chunk73800.hasFlag(Chunk981631.xW$.MFA_SMS);
    if (a) {
      if (Chunk442837 || Chunk755721) {
        let e = require ? Chunk73800.phone : this.maskPhoneNumber(Chunk73800.phone);
        t = <Chunk481060.R94 type={Chunk481060.R94.Types.DESCRIPTION} className={Chunk20493.marginBottom8}>{Chunk388032.intl.format(Chunk388032.t.PXVoEB, {
            phoneNumber: module
          })}{<Chunk481060.eee onClick={this.togglePhoneNumberVisibility} className={Chunk951839.phoneRevealer}>{require ? Chunk388032.intl.string(Chunk388032.t.FfltIC) : Chunk388032.intl.string(Chunk388032.t.llArAg)}</Chunk481060.eee>}</Chunk481060.R94>
      }
      if (Chunk755721) e = <Chunk600164.Z className={Chunk442837 ? "" : Chunk20493.marginTop8}><Chunk481060.zxk variant={"critical-secondary"} size={"sm"} text={Chunk388032.intl.string(Chunk388032.t.KLWnio)} loading={Chunk512722} onClick={this.handleDisableSMS} /></Chunk600164.Z>;
      else {
        let t = (0, Chunk714565.c)(Chunk73800);
        e = <Chunk481060.hE2 size={"sm"} className={Chunk442837 ? "" : Chunk20493.marginTop8}>{<Chunk481060.zxk variant={"primary"} size={"sm"} text={null != exports ? exports : Chunk388032.intl.string(Chunk388032.t.DZQe29)} onClick={this.handleEnableSMS} loading={Chunk512722} disabled={null != exports} />}{Chunk442837 ? <Chunk481060.zxk variant={"secondary"} size={"sm"} text={Chunk388032.intl.string(Chunk388032.t.Ulqq6O)} onClick={this.handleChangePhoneNumber} /> : null}</Chunk481060.hE2>
      }
      return <Chunk921801.F setting={Chunk726985.s6.ACCOUNT_SMS_BACKUP}><Chunk481060.hjN className={Chunk20493.marginTop40} title={Chunk388032.intl.string(Chunk388032.t.uHAJ5u)}>{<Chunk481060.R94 type={Chunk481060.R94.Types.DESCRIPTION}>{Chunk388032.intl.string(Chunk388032.t.fspJ4O)}</Chunk481060.R94>}{exports}{module}</Chunk481060.hjN></Chunk921801.F>
    }
  }
  renderEnabled() {
    let e, {
        backupCodes: t
      } = this.props,
      n = <Chunk921801.F setting={Chunk726985.s6.ACCOUNT_VIEW_BACKUP_CODES}><Chunk481060.zxk variant={"primary"} size={"sm"} text={Chunk388032.intl.string(Chunk388032.t.xZEzbm)} onClick={this.sendMFABackupCodesVerificationKeyEmail} /></Chunk921801.F>;
    if (exports.length > 0) {
      n = <Chunk23645.Z fileContents={this.getDownloadFileContents} contentType={"text/plain"} fileName={"discord_backup_codes.txt"}><Chunk481060.zxk variant={"primary"} size={"sm"} text={Chunk388032.intl.string(Chunk388032.t.qZZUy8)} /></Chunk23645.Z>;
      let r = e => e.map(e => <k code={e} />);
      e = <Chunk481060.hjN title={Chunk388032.intl.string(Chunk388032.t.GfqHPj)}>{<Chunk481060.R94 type={Chunk481060.R94.Types.DESCRIPTION} className={Chunk20493.marginBottom20}>{Chunk388032.intl.format(Chunk388032.t.OhmvYm, {})}</Chunk481060.R94>}{<Chunk600164.Z>{<Chunk600164.Z.Child><ul className={Chunk951839.checkboxGroup}>{Chunk73800(exports.slice(0, exports.length / 2))}</ul></Chunk600164.Z.Child>}{<Chunk600164.Z.Child><ul className={Chunk951839.checkboxGroup}>{Chunk73800(exports.slice(exports.length / 2))}</ul></Chunk600164.Z.Child>}</Chunk600164.Z>}{<div><Chunk755721.zx onClick={this.generateBackupCodes} look={Chunk755721.iL.LINK} size={Chunk755721.Ph.MIN}>{Chunk388032.intl.string(Chunk388032.t.RIThUl)}</Chunk755721.zx></div>}{<Chunk481060.$i$ className={Chunk20493.marginTop20} />}</Chunk481060.hjN>
    }
    return <Chunk481060.hjN>{<Chunk481060.vwX>{Chunk388032.intl.string(Chunk388032.t.EPVq09)}</Chunk481060.vwX>}{<Chunk481060.R94 type={Chunk481060.R94.Types.DESCRIPTION} className={Chunk20493.marginBottom20}>{Chunk388032.intl.string(Chunk388032.t.bQwxiY)}</Chunk481060.R94>}{<Chunk481060.hE2 size={"sm"} className={Chunk20493.marginBottom20}>{require}{<Chunk921801.F setting={Chunk726985.s6.ACCOUNT_REMOVE_2FA}><Chunk481060.zxk variant={"critical-secondary"} size={"sm"} text={Chunk388032.intl.string(Chunk388032.t["D+aE7u"])} onClick={this.handleDisableMFA} /></Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.ACCOUNT_ENABLE_2FA}><Chunk481060.zxk variant={"primary"} size={"sm"} text={Chunk388032.intl.string(Chunk388032.t.cDgKtb)} onClick={Chunk202858.ZP.enableMFA} /></Chunk921801.F>}</Chunk481060.hE2>}{module}{this.renderMFASMS()}{<Chunk921801.F setting={Chunk726985.s6.ACCOUNT_SECURITY_KEYS}><Chunk778764.Z /></Chunk921801.F>}</Chunk481060.hjN>
  }
  renderDisabled() {
    return <Chunk481060.hjN title={Chunk388032.intl.string(Chunk388032.t.EPVq09)}>{<Chunk481060.R94 type={Chunk481060.R94.Types.DESCRIPTION} className={Chunk20493.marginBottom20}>{Chunk388032.intl.string(Chunk388032.t["8aDa1t"])}</Chunk481060.R94>}{<Chunk481060.xJW><Chunk481060.zxk variant={"primary"} size={"sm"} text={Chunk388032.intl.string(Chunk388032.t.cDgKtb)} onClick={Chunk202858.ZP.enableMFA} /></Chunk481060.xJW>}{<Chunk778764.Z />}</Chunk481060.hjN>
  }
  render() {
    let {
      currentUser: e
    } = this.props;
    return Chunk287880.uZ ? module.verified ? module.mfaEnabled ? this.renderEnabled() : this.renderDisabled() : <Chunk481060.hjN title={Chunk388032.intl.string(Chunk388032.t.EPVq09)}><Chunk481060.R94 type={Chunk481060.R94.Types.DESCRIPTION}>{Chunk388032.intl.string(Chunk388032.t.uggF7u)}</Chunk481060.R94></Chunk481060.hjN> : <Chunk481060.hjN title={Chunk388032.intl.string(Chunk388032.t.EPVq09)}><Chunk481060.R94 type={Chunk481060.R94.Types.DESCRIPTION}>{Chunk388032.intl.string(Chunk388032.t.PhHhsr)}</Chunk481060.R94></Chunk481060.hjN>
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    (0, Chunk481060.h7j)(t => <x.default{...Z({
      reason: f.L.USER_SETTINGS_UPDATE
    }, t, e)} />, {
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
        title: A.intl.string(A.t["D+aE7u"]),
        body: A.intl.string(A.t.EA4ZEh),
        cancelText: A.intl.string(A.t["ETE/oK"]),
        onConfirm: () => d.Z.disable()
      })
    }), D(this, "generateBackupCodes", async () => {
      let e = E.Z.getVerificationKey();
      await d.Z.confirmViewBackupCodes(e, true)
    }), D(this, "sendMFABackupCodesVerificationKeyEmail", () => {
      (0, c.h7j)(e => <g.Z{...w(Z({}, e), {
        handleSubmit: e => d.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
          this.viewBackupCodes(e)
        }),
        title: A.intl.string(A.t.PsQmzc),
        actionText: A.intl.string(A.t.ajkYcH)
      })} />)
    }), D(this, "viewBackupCodes", e => {
      (0, c.h7j)(t => <p.Z{...w(Z({}, t), {
        handleSubmit: e => d.Z.confirmViewBackupCodes(e, false).then(() => t.onClose()),
        maxLength: 8,
        title: A.intl.string(A.t.mGppp6),
        label: A.intl.string(A.t.TjGb4e),
        forceNoPlaceholder: true,
        retryPrompt: A.intl.string(A.t.PZgmxs),
        retrySuccessMessage: A.intl.string(A.t.j4qu8v),
        onRetry: () => d.Z.sendMFABackupCodesVerificationKeyEmail(e),
        actionText: A.intl.string(A.t.piW6YW),
        helpMessage: A.intl.string(A.t["37S9yc"])
      })} />)
    }), D(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: t,
            code: n
          } = e;
          return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(t ? "(used)" : "")
        }).join("\r\n"),
        t = A.intl.formatToPlainString(A.t.uYWwh4, {
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
        onAddedPhone: d.Z.enableSMS
      }) : d.Z.enableSMS()
    }), D(this, "handleDisableSMS", () => {
      (0, c.h7j)(e => <g.Z{...w(Z({}, e), {
        handleSubmit: d.Z.disableSMS,
        title: A.intl.string(A.t.KLWnio),
        children: A.intl.string(A.t["W0/Dub"])
      })} />)
    })
  }
}

function M(e) {
  let t = (0, l.e7)([C.default], () => C.default.getCurrentUser());
  a()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
  let n = (0, l.cj)([E.Z, j.default], () => ({
    togglingSMS: E.Z.togglingSMS,
    hasTOTPEnabled: j.default.hasTOTPEnabled()
  }));
  return <L{...Z({
    currentUser: t
  }, n, e)} />
}