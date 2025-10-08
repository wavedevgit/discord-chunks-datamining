/** Chunk was on 92229 **/
/** chunk id: 628908, original params: e,t,r (module,exports,require) **/
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
  Chunk255063 = require("./255063.js");

function y(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let O = e => {
  var t, r, {
      label: s,
      text: i,
      children: o
    } = e,
    a = function(e, t) {
      if (null == e) return {};
      var r, n, s = function(e, t) {
        if (null == e) return {};
        var r, n, s = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (s[r] = e[r]);
        return s
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
      }
      return s
    }(e, ["label", "text", "children"]);
  return (0, n.jsxs)(h.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        y(e, t, r[t])
      })
    }
    return e
  }({
    direction: h.Z.Direction.VERTICAL
  }, a), r = r = {
    children: [(0, n.jsx)(l.vwX, {
      tag: "h2",
      children: s
    }), null != i ? (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      className: g.sectionBody,
      children: i
    }) : null, (0, n.jsx)(h.Z.Child, {
      wrap: true,
      children: o
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
};
class P extends Chunk647438.PureComponent {
  renderBackupCodesSection(e) {
    return (0, n.jsx)(O, {
      label: C.intl.string(C.t.qZZUy8),
      text: e,
      children: (0, n.jsx)(d.Z, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        onDownload: () => c.Z.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }),
        children: (0, n.jsx)(l.zxk, {
          variant: "active",
          size: "sm",
          text: C.intl.string(C.t.qZZUy8)
        })
      })
    })
  }
  renderPasskeyCTASection() {
    return Chunk15980.Z.hasCredentials ? null : (0, Chunk951288.jsxs)(O, {
      label: Chunk388032.intl.string(Chunk388032.t.xMDCHR),
      text: Chunk388032.intl.string(Chunk388032.t.okgGTk),
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        className: Chunk255063.sectionBody,
        children: Chunk388032.intl.format(Chunk388032.t.OeGXVl, {
          learnMoreLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SETTING_UP_TWO_FACTOR)
        })
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "active",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t.NIFmCA),
        onClick: this.handleAddPasskey
      })]
    })
  }
  renderHeader(e, t) {
    return (0, n.jsxs)(l.xBx, {
      separator: false,
      children: [(0, n.jsxs)(h.Z.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, n.jsx)(l.X6q, {
          variant: "heading-lg/semibold",
          className: g.header,
          children: p.Z.parse(e)
        }), (0, n.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: g.subHeader,
          children: t
        })]
      }), (0, n.jsx)(h.Z.Child, {
        grow: 0,
        children: (0, n.jsx)(l.olH, {
          onClick: this.handleCloseModal
        })
      })]
    })
  }
  renderConfirmModal(e) {
    let {
      onClose: t
    } = this.props;
    return (0, n.jsx)(l.sYh, {
      dismissable: true,
      header: C.intl.string(C.t.mwVXnJ),
      confirmText: C.intl.string(C.t.MwSEo6),
      cancelText: C.intl.string(C.t["ETE/oK"]),
      onCancel: () => this.setState({
        showConfirmModal: false
      }),
      onConfirm: () => {
        c.Z.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }), t()
      },
      children: (0, n.jsx)(l.Text, {
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
      className: Chunk255063.modal,
      parentComponent: "MFAEnableSuccess",
      children: [this.renderHeader(Chunk388032.intl.string(Chunk388032.t["681MPT"]), Chunk388032.intl.format(Chunk388032.t["/Nhi8f"], {})), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
        className: Chunk255063.modalInner,
        children: [this.renderPasskeyCTASection(), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk255063.divider
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
      className: Chunk255063.modal,
      parentComponent: "MFAEnableSuccess",
      children: [this.renderHeader(Chunk388032.intl.string(Chunk388032.t.x6ielJ), Chunk388032.intl.format(Chunk388032.t["/Nhi8f"], {})), (0, Chunk951288.jsx)(Chunk481060.hzk, {
        className: Chunk255063.modalInner,
        children: this.renderBackupCodesSection(Chunk388032.intl.format(Chunk388032.t.p59QLS, {}))
      }), exports && this.renderConfirmModal(Chunk388032.intl.string(Chunk388032.t.aoNIXF))]
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
      this.props.onClose(), u.ef()
    }), y(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: t,
            code: r
          } = e;
          return "* ".concat(r.substr(0, 4), "-").concat(r.substr(4), " ").concat(t ? "(".concat(C.intl.string(C.t["ycME+/"]), ")") : "")
        }).join("\r\n"),
        t = C.intl.formatToPlainString(C.t.uYWwh4, {
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