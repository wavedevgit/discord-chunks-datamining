/** Chunk was on 82411 **/
/** chunk id: 628908, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => F
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk505198 = require("./505198.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}
let C = e => {
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
  return (0, r.jsxs)(h.Z, (t = N({
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
  }), t))
};
class A extends Chunk647438.PureComponent {
  renderSMSSection() {
    let {
      currentUser: e
    } = this.props, t = null != this.props.currentUser.phone, n = module.hasFlag(Chunk981631.xW$.MFA_SMS), o = module.hasFlag(Chunk981631.xW$.PARTNER) || module.hasFlag(Chunk981631.xW$.STAFF);
    return exports ? (0, Chunk951288.jsxs)(C, {
      label: Chunk388032.intl.string(Chunk388032.t.DZQe29),
      text: Chunk388032.intl.string(Chunk388032.t.fspJ4O),
      children: [(0, Chunk951288.jsxs)(Chunk481060.Text, {
        variant: "text-md/normal",
        className: Chunk505198.sectionBody,
        children: [(0, Chunk951288.jsx)("strong", {
          className: Chunk505198.phoneNumber,
          children: Chunk388032.intl.format(Chunk388032.t.PXVoEB, {
            phoneNumber: module.phone
          })
        }), (0, Chunk951288.jsx)(Chunk755721.zx, {
          look: Chunk755721.zx.Looks.LINK,
          color: Chunk755721.zx.Colors.LINK,
          size: Chunk755721.zx.Sizes.MIN,
          className: Chunk505198.linkButton,
          onClick: this.handleChangePhoneNumber,
          children: Chunk388032.intl.string(Chunk388032.t.Ulqq6O)
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "active",
        size: "sm",
        text: Chunk647438 ? Chunk388032.intl.string(Chunk388032.t.Sq6Q1t) : require ? Chunk388032.intl.string(Chunk388032.t.kSbHTE) : Chunk388032.intl.string(Chunk388032.t.DZQe29),
        onClick: this.handleEnableSMS,
        disabled: require || Chunk647438
      })]
    }) : (0, Chunk951288.jsx)(C, {
      label: Chunk388032.intl.string(Chunk388032.t.DZQe29),
      text: Chunk388032.intl.string(Chunk388032.t.fspJ4O),
      children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "active",
        size: "sm",
        text: Chunk647438 ? Chunk388032.intl.string(Chunk388032.t.Sq6Q1t) : Chunk388032.intl.string(Chunk388032.t["O5qS/v"]),
        onClick: this.handleEnableSMS,
        disabled: Chunk647438
      })
    })
  }
  renderBackupCodesSection(e) {
    return (0, r.jsx)(C, {
      label: O.intl.string(O.t.qZZUy8),
      text: e,
      children: (0, r.jsx)(p.Z, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        onDownload: () => d.Z.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }),
        children: (0, r.jsx)(c.zxk, {
          variant: "active",
          size: "sm",
          text: O.intl.string(O.t.qZZUy8)
        })
      })
    })
  }
  renderHeader(e, t) {
    return (0, r.jsxs)(c.xBx, {
      separator: false,
      children: [(0, r.jsxs)(h.Z.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-lg/semibold",
          className: g.header,
          children: _.Z.parse(e)
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          className: g.subHeader,
          children: t
        })]
      }), (0, r.jsx)(h.Z.Child, {
        grow: 0,
        children: (0, r.jsx)(c.olH, {
          onClick: this.handleCloseModal
        })
      })]
    })
  }
  renderConfirmModal(e) {
    let {
      onClose: t
    } = this.props;
    return (0, r.jsx)(c.sYh, {
      dismissable: true,
      header: O.intl.string(O.t.mwVXnJ),
      confirmText: O.intl.string(O.t.MwSEo6),
      cancelText: O.intl.string(O.t["ETE/oK"]),
      onCancel: () => this.setState({
        showConfirmModal: false
      }),
      onConfirm: () => {
        d.Z.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }), t()
      },
      children: (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: e
      })
    })
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
    return (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
      transitionState: module,
      className: Chunk505198.modal,
      parentComponent: "MFAEnableSuccess",
      children: [this.renderHeader(Chunk388032.intl.string(Chunk388032.t["681MPT"]), Chunk388032.intl.format(Chunk388032.t.pQioMz, {})), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
        className: Chunk505198.modalInner,
        children: [this.renderSMSSection(), (0, Chunk951288.jsx)(Chunk481060.$i$, {
          className: Chunk505198.divider
        }), this.renderBackupCodesSection(Chunk388032.intl.format(Chunk388032.t.M0Dogo, {}))]
      }), exports && this.renderConfirmModal(Chunk388032.intl.string(Chunk388032.t.WJFPHB))]
    })
  }
  renderWebAuthn() {
    let {
      transitionState: e
    } = this.props, {
      showConfirmModal: t
    } = this.state;
    return (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
      transitionState: module,
      className: Chunk505198.modal,
      parentComponent: "MFAEnableSuccess",
      children: [this.renderHeader(Chunk388032.intl.string(Chunk388032.t.x6ielJ), Chunk388032.intl.format(Chunk388032.t.Xb5JGh, {})), (0, Chunk951288.jsx)(Chunk481060.hzk, {
        className: Chunk505198.modalInner,
        children: this.renderBackupCodesSection(Chunk388032.intl.format(Chunk388032.t.p59QLS, {}))
      }), exports && this.renderConfirmModal(Chunk388032.intl.string(Chunk388032.t.aoNIXF))]
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    (0, Chunk481060.h7j)(t => (0, r.jsx)(E.default, N({
      reason: f.L.MFA_PHONE_UPDATE
    }, t, e)), {
      modalKey: Chunk815660.M
    })
  }
  constructor(...e) {
    super(...e), M(this, "state", {
      showConfirmModal: false
    }), M(this, "handleCloseModal", () => {
      let {
        onClose: e,
        hasSeenBackupPrompt: t
      } = this.props;
      t ? null == e || e() : this.setState({
        showConfirmModal: true
      })
    }), M(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: t,
            code: n
          } = e;
          return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(t ? "(".concat(O.intl.string(O.t["ycME+/"]), ")") : "")
        }).join("\r\n"),
        t = O.intl.formatToPlainString(O.t.uYWwh4, {
          email: this.props.currentUser.email
        });
      return "".concat(t, "\r\n\r\n").concat(e)
    }), M(this, "handleChangePhoneNumber", () => {
      this.openPhoneVerificationModal()
    }), M(this, "handleEnableSMS", () => {
      let {
        currentUser: e
      } = this.props;
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: u.Z.enableSMS
      }) : u.Z.enableSMS()
    })
  }
}
let F = Chunk442837.ZP.connectStores([Chunk594174.default, Chunk325067.Z], () => {
  let e = Chunk594174.default.getCurrentUser();
  return a()(null != module, "MFAEnableSuccess: currentUser cannot be undefined"), {
    currentUser: module,
    backupCodes: Chunk325067.Z.getBackupCodes(),
    hasSeenBackupPrompt: Chunk325067.Z.hasSeenBackupPrompt
  }
})(A)