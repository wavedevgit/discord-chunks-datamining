/** Chunk was on 48290 **/
/** chunk id: 971650, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk775086 = require("./775086.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk23645 = require("./23645.js"),
  Chunk365007 = require("./365007.js"),
  Chunk15980 = require("./15980.js"),
  Chunk325067 = require("./325067.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk671146 = require("./671146.js");

function C(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
let x = t => {
  var e, n, {
      label: i,
      text: o,
      children: s
    } = t,
    l = function(t, e) {
      if (null == t) return {};
      var n, r, i = function(t, e) {
        if (null == t) return {};
        var n, r, i = {},
          o = Object.keys(t);
        for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (r = 0; r < o.length; r++) n = o[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
      }
      return i
    }(t, ["label", "text", "children"]);
  return (0, r.jsxs)("div", (e = function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable
      }))), r.forEach(function(e) {
        C(t, e, n[e])
      })
    }
    return t
  }({
    className: j.modalSection
  }, l), n = n = {
    children: [(0, r.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      children: i
    }), null != o ? (0, r.jsx)(d.Text, {
      variant: "text-md/normal",
      className: j.sectionBody,
      children: o
    }) : null, (0, r.jsx)("div", {
      children: s
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e))
};
class P extends Chunk473749.PureComponent {
  renderBackupCodesSection(t) {
    return (0, r.jsx)(x, {
      label: O.intl.string(O.t.qZZUy6),
      text: t,
      children: (0, r.jsx)(p.Z, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        onDownload: () => u.Z.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }),
        children: (0, r.jsx)(d.Button, {
          variant: "active",
          size: "sm",
          text: O.intl.string(O.t.qZZUy6)
        })
      })
    })
  }
  renderPasskeyCTASection() {
    return Chunk15980.Z.hasCredentials ? null : (0, Chunk54381.jsxs)(x, {
      label: Chunk388032.intl.string(Chunk388032.t.xMDCHa),
      text: Chunk388032.intl.string(Chunk388032.t.okgGTu),
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        className: Chunk671146.sectionBody,
        children: Chunk388032.intl.format(Chunk388032.t.OeGXVv, {
          learnMoreLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SETTING_UP_TWO_FACTOR)
        })
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "active",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t.NIFmCJ),
        onClick: this.handleAddPasskey
      })]
    })
  }
  render() {
    let {
      isTotp: t
    } = this.props;
    return module ? this.renderTotp() : this.renderWebAuthn()
  }
  renderTotp() {
    let {
      transitionState: t
    } = this.props;
    return (0, Chunk54381.jsxs)(Chunk775086.Modal, {
      onClose: () => this.handleCloseModal(Chunk388032.intl.string(Chunk388032.t.WJFPHJ)),
      transitionState: module,
      title: Chunk388032.intl.string(Chunk388032.t.Awk3Gw),
      subtitle: Chunk388032.intl.format(Chunk388032.t["/Nhi8R"], {}),
      actions: [],
      children: [this.renderPasskeyCTASection(), (0, Chunk54381.jsx)(Chunk481060.izJ, {
        className: Chunk671146.divider
      }), this.renderBackupCodesSection(Chunk388032.intl.format(Chunk388032.t.M0Dogh, {}))]
    })
  }
  renderWebAuthn() {
    let {
      transitionState: t
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk775086.Modal, {
      onClose: () => this.handleCloseModal(Chunk388032.intl.string(Chunk388032.t.aoNIXB)),
      transitionState: module,
      title: Chunk388032.intl.string(Chunk388032.t["7wPZln"]),
      subtitle: Chunk388032.intl.format(Chunk388032.t["/Nhi8R"], {}),
      actions: [],
      children: this.renderBackupCodesSection(Chunk388032.intl.format(Chunk388032.t.p59QLQ, {}))
    })
  }
  constructor(...t) {
    super(...t), C(this, "handleCloseModal", async t => {
      let {
        onClose: e,
        hasSeenBackupPrompt: n
      } = this.props;
      n ? await e() : await (0, c.Z)({
        title: O.intl.string(O.t.mwVXnI),
        confirmText: O.intl.string(O.t.MwSEoz),
        cancelText: O.intl.string(O.t["ETE/oC"]),
        onConfirm: () => {
          u.Z.dispatch({
            type: "MFA_SEEN_BACKUP_CODE_PROMPT"
          }), e()
        },
        children: t
      })
    }), C(this, "handleAddPasskey", () => {
      this.props.onClose(), h.ef()
    }), C(this, "getDownloadFileContents", () => {
      let t = this.props.backupCodes.map(t => {
          let {
            consumed: e,
            code: n
          } = t;
          return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(e ? "(".concat(O.intl.string(O.t["ycME+9"]), ")") : "")
        }).join("\r\n"),
        e = O.intl.formatToPlainString(O.t["uYWwh/"], {
          email: this.props.currentUser.email
        });
      return "".concat(e, "\r\n\r\n").concat(t)
    })
  }
}
let S = Chunk442837.ZP.connectStores([Chunk594174.default, Chunk325067.Z], () => {
  let t = Chunk594174.default.getCurrentUser();
  return s()(null != module, "MFAEnableSuccess: currentUser cannot be undefined"), {
    currentUser: module,
    backupCodes: Chunk325067.Z.getBackupCodes(),
    hasSeenBackupPrompt: Chunk325067.Z.hasSeenBackupPrompt
  }
})(P)