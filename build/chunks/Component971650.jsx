/** Chunk was on 48290 **/
/** chunk id: 971650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk23645 = require("./23645.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk365007 = require("./365007.js"),
  Chunk15980 = require("./15980.js"),
  Chunk325067 = require("./325067.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk468412 = require("./468412.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let O = e => {
  var t, n, {
      label: s,
      text: i,
      children: o
    } = e,
    a = function(e, t) {
      if (null == e) return {};
      var n, r, s = function(e, t) {
        if (null == e) return {};
        var n, r, s = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
        return s
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
      }
      return s
    }(e, ["label", "text", "children"]);
  return (0, r.jsxs)(h.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        y(e, t, n[t])
      })
    }
    return e
  }({
    direction: h.Z.Direction.VERTICAL
  }, a), n = n = {
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-md/semibold",
      children: s
    }), null != i ? (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      className: j.sectionBody,
      children: i
    }) : null, (0, r.jsx)(h.Z.Child, {
      wrap: true,
      children: o
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
class P extends Chunk647438.PureComponent {
  renderBackupCodesSection(e) {
    return (0, r.jsx)(O, {
      label: g.intl.string(g.t.qZZUy6),
      text: e,
      children: (0, r.jsx)(d.Z, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        onDownload: () => c.Z.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }),
        children: (0, r.jsx)(l.Button, {
          variant: "active",
          size: "sm",
          text: g.intl.string(g.t.qZZUy6)
        })
      })
    })
  }
  renderPasskeyCTASection() {
    return Chunk15980.Z.hasCredentials ? null : (0, Chunk951288.jsxs)(O, {
      label: Chunk388032.intl.string(Chunk388032.t.xMDCHa),
      text: Chunk388032.intl.string(Chunk388032.t.okgGTu),
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        className: Chunk468412.sectionBody,
        children: Chunk388032.intl.format(Chunk388032.t.OeGXVv, {
          learnMoreLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SETTING_UP_TWO_FACTOR)
        })
      }), (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "active",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t.NIFmCJ),
        onClick: this.handleAddPasskey
      })]
    })
  }
  renderHeader(e, t) {
    return (0, r.jsxs)(l.xBx, {
      separator: false,
      children: [(0, r.jsxs)(h.Z.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-lg/semibold",
          className: j.header,
          children: u.Z.parse(e)
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: j.subHeader,
          children: t
        })]
      }), (0, r.jsx)(h.Z.Child, {
        grow: 0,
        children: (0, r.jsx)(l.olH, {
          onClick: this.handleCloseModal
        })
      })]
    })
  }
  renderConfirmModal(e) {
    let {
      onClose: t
    } = this.props;
    return (0, r.jsx)(l.sYh, {
      dismissable: true,
      header: g.intl.string(g.t.mwVXnI),
      confirmText: g.intl.string(g.t.MwSEoz),
      cancelText: g.intl.string(g.t["ETE/oC"]),
      onCancel: () => this.setState({
        showConfirmModal: false
      }),
      onConfirm: () => {
        c.Z.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }), t()
      },
      children: (0, r.jsx)(l.Text, {
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
      className: Chunk468412.modal,
      parentComponent: "MFAEnableSuccess",
      children: [this.renderHeader(Chunk388032.intl.string(Chunk388032.t["681MPV"]), Chunk388032.intl.format(Chunk388032.t["/Nhi8R"], {})), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
        className: Chunk468412.modalInner,
        children: [this.renderPasskeyCTASection(), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk468412.divider
        }), this.renderBackupCodesSection(Chunk388032.intl.format(Chunk388032.t.M0Dogh, {}))]
      }), exports && this.renderConfirmModal(Chunk388032.intl.string(Chunk388032.t.WJFPHJ))]
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
      className: Chunk468412.modal,
      parentComponent: "MFAEnableSuccess",
      children: [this.renderHeader(Chunk388032.intl.string(Chunk388032.t.x6ielD), Chunk388032.intl.format(Chunk388032.t["/Nhi8R"], {})), (0, Chunk951288.jsx)(Chunk481060.hzk, {
        className: Chunk468412.modalInner,
        children: this.renderBackupCodesSection(Chunk388032.intl.format(Chunk388032.t.p59QLQ, {}))
      }), exports && this.renderConfirmModal(Chunk388032.intl.string(Chunk388032.t.aoNIXB))]
    })
  }
  constructor(...e) {
    super(...e), y(this, "state", {
      showConfirmModal: false
    }), y(this, "handleCloseModal", () => {
      let {
        onClose: e,
        hasSeenBackupPrompt: t
      } = this.props;
      t ? e() : this.setState({
        showConfirmModal: true
      })
    }), y(this, "handleAddPasskey", () => {
      this.props.onClose(), p.ef()
    }), y(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: t,
            code: n
          } = e;
          return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(t ? "(".concat(g.intl.string(g.t["ycME+9"]), ")") : "")
        }).join("\r\n"),
        t = g.intl.formatToPlainString(g.t["uYWwh/"], {
          email: this.props.currentUser.email
        });
      return "".concat(t, "\r\n\r\n").concat(e)
    })
  }
}
let k = Chunk442837.ZP.connectStores([Chunk594174.default, Chunk325067.Z], () => {
  let e = Chunk594174.default.getCurrentUser();
  return o()(null != module, "MFAEnableSuccess: currentUser cannot be undefined"), {
    currentUser: module,
    backupCodes: Chunk325067.Z.getBackupCodes(),
    hasSeenBackupPrompt: Chunk325067.Z.hasSeenBackupPrompt
  }
})(P)