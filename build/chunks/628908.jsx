/** Chunk was on 35305 **/
/** chunk id: 628908, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk816814 = require("./816814.js"),
  Chunk23645 = require("./23645.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk144114 = require("./144114.js"),
  Chunk607018 = require("./607018.jsx"),
  Chunk325067 = require("./325067.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk815660 = require("./815660.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk664460 = require("./664460.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
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
let x = e => {
  var t, n, {
      label: o,
      text: i,
      children: a
    } = e,
    s = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["label", "text", "children"]);
  return <h.Z{...t = O({
    direction: h.Z.Direction.VERTICAL
  }, s), n = n = {
    children: [(0, r.jsx)(c.vwX, {
      tag: "h2",
      children: o
    }), null != i ? (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      className: g.sectionBody,
      children: i
    }) : null, (0, r.jsx)(h.Z.Child, {
      wrap: true,
      children: a
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t} />
};
class w extends Chunk73800.PureComponent {
  renderSMSSection() {
    let {
      currentUser: e
    } = this.props, t = null != this.props.currentUser.phone, n = module.hasFlag(Chunk981631.xW$.MFA_SMS), o = module.hasFlag(Chunk981631.xW$.PARTNER) || module.hasFlag(Chunk981631.xW$.STAFF);
    return exports ? <x label={Chunk388032.intl.string(Chunk388032.t.DZQe29)} text={Chunk388032.intl.string(Chunk388032.t.fspJ4O)}>{<Chunk481060.Text variant={"text-md/normal"} className={Chunk664460.sectionBody}>{<strong className={Chunk664460.phoneNumber}>{Chunk388032.intl.format(Chunk388032.t.PXVoEB, {
            phoneNumber: module.phone
          })}</strong>}{<Chunk755721.zx look={Chunk755721.zx.Looks.LINK} color={Chunk755721.zx.Colors.LINK} size={Chunk755721.zx.Sizes.MIN} className={Chunk664460.linkButton} onClick={this.handleChangePhoneNumber}>{Chunk388032.intl.string(Chunk388032.t.Ulqq6O)}</Chunk755721.zx>}</Chunk481060.Text>}{<Chunk481060.zxk variant={"active"} size={"sm"} text={Chunk73800 ? Chunk388032.intl.string(Chunk388032.t.Sq6Q1t) : require ? Chunk388032.intl.string(Chunk388032.t.kSbHTE) : Chunk388032.intl.string(Chunk388032.t.DZQe29)} onClick={this.handleEnableSMS} disabled={require || Chunk73800} />}</x> : <x label={Chunk388032.intl.string(Chunk388032.t.DZQe29)} text={Chunk388032.intl.string(Chunk388032.t.fspJ4O)}><Chunk481060.zxk variant={"active"} size={"sm"} text={Chunk73800 ? Chunk388032.intl.string(Chunk388032.t.Sq6Q1t) : Chunk388032.intl.string(Chunk388032.t["O5qS/v"])} onClick={this.handleEnableSMS} disabled={Chunk73800} /></x>
  }
  renderBackupCodesSection(e) {
    return <x label={M.intl.string(M.t.qZZUy8)} text={e}><p.Z fileContents={this.getDownloadFileContents} contentType={"text/plain"} fileName={"discord_backup_codes.txt"} onDownload={() => d.Z.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        })}><c.zxk variant={"active"} size={"sm"} text={M.intl.string(M.t.qZZUy8)} /></p.Z></x>
  }
  renderHeader(e, t) {
    return <c.xBx separator={false}>{<h.Z.Child grow={1} shrink={1}>{<c.X6q variant={"heading-lg/semibold"} className={g.header}>{f.Z.parse(e)}</c.X6q>}{<c.Text variant={"text-xs/normal"} className={g.subHeader}>{t}</c.Text>}</h.Z.Child>}{<h.Z.Child grow={0}><c.olH onClick={this.handleCloseModal} /></h.Z.Child>}</c.xBx>
  }
  renderConfirmModal(e) {
    let {
      onClose: t
    } = this.props;
    return <c.sYh dismissable={true} header={M.intl.string(M.t.mwVXnJ)} confirmText={M.intl.string(M.t.MwSEo6)} cancelText={M.intl.string(M.t["ETE/oK"])} onCancel={() => this.setState({
        showConfirmModal: false
      })} onConfirm={() => {
        d.Z.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }), t()
      }}><c.Text variant={"text-md/normal"} color={"text-default"}>{e}</c.Text></c.sYh>
  }
  render() {
    let {
      isTotp: e
    } = this.props;
    return module ? this.renderTotp() : this.renderWebAuthn()
  }
  renderTotp() {
    let {
      transitionState: e
    } = this.props, {
      showConfirmModal: t
    } = this.state;
    return <Chunk481060.Y0X transitionState={module} className={Chunk664460.modal} parentComponent={"MFAEnableSuccess"}>{this.renderHeader(Chunk388032.intl.string(Chunk388032.t["681MPT"]), Chunk388032.intl.format(Chunk388032.t.pQioMz, {}))}{<Chunk481060.hzk className={Chunk664460.modalInner}>{this.renderSMSSection()}{<Chunk481060.$i$ className={Chunk664460.divider} />}{this.renderBackupCodesSection(Chunk388032.intl.format(Chunk388032.t.M0Dogo, {}))}</Chunk481060.hzk>}{exports && this.renderConfirmModal(Chunk388032.intl.string(Chunk388032.t.WJFPHB))}</Chunk481060.Y0X>
  }
  renderWebAuthn() {
    let {
      transitionState: e
    } = this.props, {
      showConfirmModal: t
    } = this.state;
    return <Chunk481060.Y0X transitionState={module} className={Chunk664460.modal} parentComponent={"MFAEnableSuccess"}>{this.renderHeader(Chunk388032.intl.string(Chunk388032.t.x6ielJ), Chunk388032.intl.format(Chunk388032.t.Xb5JGh, {}))}{<Chunk481060.hzk className={Chunk664460.modalInner}>{this.renderBackupCodesSection(Chunk388032.intl.format(Chunk388032.t.p59QLS, {}))}</Chunk481060.hzk>}{exports && this.renderConfirmModal(Chunk388032.intl.string(Chunk388032.t.aoNIXF))}</Chunk481060.Y0X>
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    (0, Chunk481060.h7j)(t => <S.default{...O({
      reason: _.L.MFA_PHONE_UPDATE
    }, t, e)} />, {
      modalKey: Chunk815660.M
    })
  }
  constructor(...e) {
    super(...e), C(this, "state", {
      showConfirmModal: false
    }), C(this, "handleCloseModal", () => {
      let {
        onClose: e,
        hasSeenBackupPrompt: t
      } = this.props;
      t ? null == e || e() : this.setState({
        showConfirmModal: true
      })
    }), C(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: t,
            code: n
          } = e;
          return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(t ? "(".concat(M.intl.string(M.t["ycME+/"]), ")") : "")
        }).join("\r\n"),
        t = M.intl.formatToPlainString(M.t.uYWwh4, {
          email: this.props.currentUser.email
        });
      return "".concat(t, "\r\n\r\n").concat(e)
    }), C(this, "handleChangePhoneNumber", () => {
      this.openPhoneVerificationModal()
    }), C(this, "handleEnableSMS", () => {
      let {
        currentUser: e
      } = this.props;
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: u.Z.enableSMS
      }) : u.Z.enableSMS()
    })
  }
}
let A = Chunk442837.ZP.connectStores([Chunk594174.default, Chunk325067.Z], () => {
  let e = Chunk594174.default.getCurrentUser();
  return a()(null != module, "MFAEnableSuccess: currentUser cannot be undefined"), {
    currentUser: module,
    backupCodes: Chunk325067.Z.getBackupCodes(),
    hasSeenBackupPrompt: Chunk325067.Z.hasSeenBackupPrompt
  }
})(w)