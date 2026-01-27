/** Chunk was on 28429 **/
/** chunk id: 549404, original params: t,e,n (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk189213 = require("./189213.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk900686 = require("./900686.js"),
  Chunk917136 = require("./917136.js"),
  Chunk976910 = require("./976910.js"),
  Chunk670492 = require("./670492.js"),
  Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk624102 = require("./624102.js");

function S(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
let v = t => {
  var e, n;
  let {
    label: o,
    text: i,
    children: a
  } = t, s = function(t, e) {
    if (null == t) return {};
    var n, r, o, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, n = Reflect.ownKeys(t); o < n.length; o++) r = n[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]);
      return i
    }
    if (i = function(t, e) {
        if (null == t) return {};
        var n, r, o = {},
          i = Object.getOwnPropertyNames(t);
        for (r = 0; r < i.length; r++) n = i[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
        return o
      }(t, e), Object.getOwnPropertySymbols)
      for (o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) r = n[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]);
    return i
  }(t, ["label", "text", "children"]);
  return (0, r.jsxs)("div", (e = function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable
      }))), r.forEach(function(e) {
        S(t, e, n[e])
      })
    }
    return t
  }({
    className: w.jx
  }, s), n = n = {
    children: [(0, r.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      children: o
    }), null != i ? (0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      className: w.gt,
      children: i
    }) : null, (0, r.jsx)("div", {
      children: a
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
class E extends Chunk64700.PureComponent {
  renderBackupCodesSection(t) {
    return (0, r.jsx)(v, {
      label: O.intl.string(O.t.qZZUy6),
      text: t,
      children: (0, r.jsx)(f.A, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        onDownload: () => d.h.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }),
        children: (0, r.jsx)(u.Button, {
          variant: "active",
          size: "sm",
          text: O.intl.string(O.t.qZZUy6)
        })
      })
    })
  }
  renderPasskeyCTASection() {
    return h.A.hasCredentials ? null : (0, r.jsxs)(v, {
      label: O.intl.string(O.t.xMDCHa),
      text: O.intl.string(O.t.okgGTu),
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        className: w.gt,
        children: O.intl.format(O.t.OeGXVv, {
          learnMoreLink: g.A.getArticleURL(m.MVz.SETTING_UP_TWO_FACTOR)
        })
      }), (0, r.jsx)(u.Button, {
        variant: "active",
        size: "sm",
        text: O.intl.string(O.t.NIFmCJ),
        onClick: this.handleAddPasskey
      })]
    })
  }
  render() {
    let {
      isTotp: t
    } = this.props;
    return t ? this.renderTotp() : this.renderWebAuthn()
  }
  renderTotp() {
    let {
      transitionState: t
    } = this.props;
    return (0, r.jsxs)(s.Modal, {
      onClose: () => this.handleCloseModal(O.intl.string(O.t.WJFPHJ)),
      transitionState: t,
      title: O.intl.string(O.t.Awk3Gw),
      subtitle: O.intl.format(O.t["/Nhi8R"], {}),
      actions: [],
      children: [this.renderPasskeyCTASection(), (0, r.jsx)(u.cGx, {
        className: w.yF
      }), this.renderBackupCodesSection(O.intl.format(O.t.M0Dogh, {}))]
    })
  }
  renderWebAuthn() {
    let {
      transitionState: t
    } = this.props;
    return (0, r.jsx)(s.Modal, {
      onClose: () => this.handleCloseModal(O.intl.string(O.t.aoNIXB)),
      transitionState: t,
      title: O.intl.string(O.t["7wPZln"]),
      subtitle: O.intl.format(O.t["/Nhi8R"], {}),
      actions: [],
      children: this.renderBackupCodesSection(O.intl.format(O.t.p59QLQ, {}))
    })
  }
  constructor(...t) {
    super(...t), S(this, "handleCloseModal", async t => {
      let {
        onClose: e,
        hasSeenBackupPrompt: n
      } = this.props;
      n ? await e() : await (0, c.A)({
        title: O.intl.string(O.t.mwVXnI),
        confirmText: O.intl.string(O.t.MwSEoz),
        cancelText: O.intl.string(O.t["ETE/oC"]),
        onConfirm: () => {
          d.h.dispatch({
            type: "MFA_SEEN_BACKUP_CODE_PROMPT"
          }), e()
        },
        children: t
      })
    }), S(this, "handleAddPasskey", () => {
      this.props.onClose(), p.Mn()
    }), S(this, "getDownloadFileContents", () => {
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
let C = Chunk311907.Ay.connectStores([Chunk287809.default, Chunk670492.A], () => {
  let t = b.default.getCurrentUser();
  return a()(null != t, "MFAEnableSuccess: currentUser cannot be undefined"), {
    currentUser: t,
    backupCodes: y.A.getBackupCodes(),
    hasSeenBackupPrompt: y.A.hasSeenBackupPrompt
  }
})(E)