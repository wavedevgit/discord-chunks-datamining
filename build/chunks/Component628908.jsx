/** Chunk was on 92229 **/
/** chunk id: 628908, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk23645 = require("./23645.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk325067 = require("./325067.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk505198 = require("./505198.js");

function x(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let j = e => {
  var t, r, {
      label: s,
      text: o,
      children: i
    } = e,
    a = function(e, t) {
      if (null == e) return {};
      var r, n, s = function(e, t) {
        if (null == e) return {};
        var r, n, s = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (s[r] = e[r]);
        return s
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
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
        x(e, t, r[t])
      })
    }
    return e
  }({
    direction: h.Z.Direction.VERTICAL
  }, a), r = r = {
    children: [(0, n.jsx)(l.vwX, {
      tag: "h2",
      children: s
    }), null != o ? (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      className: b.sectionBody,
      children: o
    }) : null, (0, n.jsx)(h.Z.Child, {
      wrap: true,
      children: i
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
class g extends Chunk647438.PureComponent {
  renderBackupCodesSection(e) {
    return (0, n.jsx)(j, {
      label: f.intl.string(f.t.qZZUy8),
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
          text: f.intl.string(f.t.qZZUy8)
        })
      })
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
          className: b.header,
          children: p.Z.parse(e)
        }), (0, n.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: b.subHeader,
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
      header: f.intl.string(f.t.mwVXnJ),
      confirmText: f.intl.string(f.t.MwSEo6),
      cancelText: f.intl.string(f.t["ETE/oK"]),
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
      className: Chunk505198.modal,
      parentComponent: "MFAEnableSuccess",
      children: [this.renderHeader(Chunk388032.intl.string(Chunk388032.t["681MPT"]), Chunk388032.intl.format(Chunk388032.t["/Nhi8f"], {})), (0, Chunk951288.jsx)(Chunk481060.hzk, {
        className: Chunk505198.modalInner,
        children: this.renderBackupCodesSection(Chunk388032.intl.format(Chunk388032.t.M0Dogo, {}))
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
      children: [this.renderHeader(Chunk388032.intl.string(Chunk388032.t.x6ielJ), Chunk388032.intl.format(Chunk388032.t["/Nhi8f"], {})), (0, Chunk951288.jsx)(Chunk481060.hzk, {
        className: Chunk505198.modalInner,
        children: this.renderBackupCodesSection(Chunk388032.intl.format(Chunk388032.t.p59QLS, {}))
      }), exports && this.renderConfirmModal(Chunk388032.intl.string(Chunk388032.t.aoNIXF))]
    })
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      showConfirmModal: false
    }), x(this, "handleCloseModal", () => {
      let {
        onClose: e,
        hasSeenBackupPrompt: t
      } = this.props;
      t ? null == e || e() : this.setState({
        showConfirmModal: true
      })
    }), x(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: t,
            code: r
          } = e;
          return "* ".concat(r.substr(0, 4), "-").concat(r.substr(4), " ").concat(t ? "(".concat(f.intl.string(f.t["ycME+/"]), ")") : "")
        }).join("\r\n"),
        t = f.intl.formatToPlainString(f.t.uYWwh4, {
          email: this.props.currentUser.email
        });
      return "".concat(t, "\r\n\r\n").concat(e)
    })
  }
}
let y = Chunk442837.ZP.connectStores([Chunk594174.default, Chunk325067.Z], () => {
  let e = Chunk594174.default.getCurrentUser();
  return i()(null != module, "MFAEnableSuccess: currentUser cannot be undefined"), {
    currentUser: module,
    backupCodes: Chunk325067.Z.getBackupCodes(),
    hasSeenBackupPrompt: Chunk325067.Z.hasSeenBackupPrompt
  }
})(g)