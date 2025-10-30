/** Chunk was on 26503 **/
/** chunk id: 819514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk332148 = require("./332148.js"),
  Chunk904245 = require("./904245.js"),
  Chunk933557 = require("./933557.js"),
  Chunk576855 = require("./576855.jsx"),
  Chunk372900 = require("./372900.js"),
  Chunk726521 = require("./726521.js"),
  Chunk501517 = require("./501517.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk630388 = require("./630388.js"),
  Chunk970257 = require("./970257.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk68468 = require("./68468.js"),
  Chunk421846 = require("./421846.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
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
class T extends Chunk647438.PureComponent {
  render() {
    let e, t, {
        report: n,
        resolveFlag: r
      } = this.state,
      l = this.props,
      {
        channel: s,
        message: o,
        showContextMenuHint: d,
        moderatorReportData: h
      } = Chunk120356,
      g = function(e, t) {
        if (null == e) return {};
        var n, i, r = function(e, t) {
          if (null == e) return {};
          var n, i, r = {},
            l = Object.keys(e);
          for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
      }(Chunk120356, ["channel", "message", "showContextMenuHint", "moderatorReportData"]),
      m = s.type === Chunk981631.d4z.GUILD_ANNOUNCEMENT && (0, Chunk630388.yE)(Chunk755721.flags, Chunk981631.iLy.CROSSPOSTED);
    Chunk332148 && (e = (0, Chunk951288.jsx)(Chunk576855.Z, {
      className: Chunk421846.spacingTop,
      children: Chunk388032.intl.format(Chunk388032.t.IxY7E6, {})
    })), (0, Chunk970257.vc)(Chunk755721) && (t = (0, Chunk951288.jsx)("div", {
      className: Chunk421846.spacingTop,
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.x0jzo9),
        checked: require,
        onChange: this.handleToggleReport
      })
    }));
    let f = Chunk726521 ? Chunk388032.intl.string(Chunk388032.t["2kHABX"]) : Chunk388032.intl.string(Chunk388032.t.AMvpS4),
      x = (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk421846.message,
          children: (0, Chunk951288.jsx)(Chunk294218.Z, {
            channel: s,
            message: Chunk755721,
            disableInteraction: true
          })
        }), exports, module]
      });
    if ((null == Chunk904245 ? true : Chunk904245.moderatorReportChannelId) != null) {
      let {
        isFlagResolved: e
      } = Chunk904245;
      return (0, Chunk951288.jsx)(Chunk372900.Z.Provider, {
        value: s.guild_id,
        children: (0, Chunk951288.jsxs)(Chunk481060.Y0X, S(P({
          parentComponent: "DeleteModal"
        }, Chunk933557), {
          children: [(0, Chunk951288.jsx)(Chunk481060.xBx, {
            separator: false,
            children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
              direction: "vertical",
              justify: "space-between",
              children: [(0, Chunk951288.jsx)(Chunk481060.olH, {
                className: Chunk421846.closeButton,
                onClick: Chunk933557.onClose
              }), (0, Chunk951288.jsx)(Chunk481060.Heading, {
                variant: "heading-xl/bold",
                children: Chunk388032.intl.string(Chunk388032.t.MWMcg7)
              })]
            })
          }), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
            children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
              variant: "heading-md/medium",
              className: Chunk421846.spacing,
              children: Chunk501517
            }), Chunk699516]
          }), (0, Chunk951288.jsxs)(Chunk481060.mzw, {
            children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
              variant: "critical-primary",
              size: "sm",
              text: Chunk388032.intl.string(Chunk388032.t.oyYWHE),
              type: "submit",
              onClick: this.handleDelete
            }), !module && (0, Chunk951288.jsx)(Chunk481060.Checkbox, {
              checked: Chunk647438,
              label: Chunk388032.intl.string(Chunk68468.default["8yIKem"]),
              onChange: e => this.handleToggleResolveFlag(e)
            })]
          })]
        }))
      })
    }
    return (0, Chunk951288.jsx)(Chunk372900.Z.Provider, {
      value: s.guild_id,
      children: (0, Chunk951288.jsx)(Chunk793030.Modal, {
        title: Chunk726521 ? Chunk388032.intl.string(Chunk388032.t.aIz1oV) : Chunk388032.intl.string(Chunk388032.t.MWMcg7),
        subtitle: Chunk501517,
        actions: [{
          text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
          onClick: Chunk933557.onClose,
          variant: "secondary"
        }, {
          text: Chunk388032.intl.string(Chunk388032.t.oyYWHE),
          onClick: this.handleDeleteMana,
          variant: "critical-primary"
        }],
        onClose: Chunk933557.onClose,
        transitionState: Chunk933557.transitionState,
        children: Chunk699516
      })
    })
  }
  constructor(...e) {
    super(...e), M(this, "state", {
      report: false,
      resolveFlag: false
    }), M(this, "handleDelete", () => {
      let {
        report: e,
        resolveFlag: t
      } = this.state, {
        channel: n,
        message: i,
        moderatorReportData: r
      } = this.props, {
        moderatorReportChannelId: l,
        isFlagResolved: s
      } = null != r ? r : {};
      e ? (0, m.ak)(i, "message_delete_alert", () => h.Z.deleteMessage(n.id, i.id).then(() => {
        if (null != l) {
          var e, n;
          t && !s && f.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n)
        }
      })) : h.Z.deleteMessage(n.id, i.id).then(() => {
        if (null != l) {
          var e, n;
          t && !s && f.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n)
        }
      })
    }), M(this, "handleDeleteMana", () => {
      var e, t;
      this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t)
    }), M(this, "handleToggleReport", e => {
      this.setState({
        report: e
      })
    }), M(this, "handleToggleResolveFlag", e => {
      this.setState({
        resolveFlag: e
      })
    })
  }
}
let D = {
  confirmPin: function(e, t) {
    (0, c.h7j)(n => {
      let r, l = (0, g.F6)(e, j.default, x.Z);
      return r = e.isPrivate() ? E.intl.string(E.t.hMRngA) : E.intl.formatToPlainString(E.t["3IRluI"], {
        channelName: l
      }), (0, i.jsx)(p.Z.Provider, {
        value: e.guild_id,
        children: (0, i.jsxs)(c.ConfirmModal, S(P({
          header: E.intl.string(E.t.bKMaZX),
          confirmText: E.intl.string(E.t.rOQ5BX),
          cancelText: E.intl.string(E.t["ETE/oC"]),
          confirmButtonColor: o.zx.Colors.BRAND,
          onConfirm: () => d.Z.pinMessage(e, t.id)
        }, n), {
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/normal",
            className: N.spacing,
            children: r
          }), (0, i.jsx)("div", {
            className: N.message,
            children: (0, i.jsx)(b.Z, {
              channel: e,
              message: t,
              animateAvatar: false,
              disableInteraction: true
            })
          })]
        }))
      })
    })
  },
  confirmUnpin: function(e, t) {
    (0, c.h7j)(n => (0, i.jsx)(p.Z.Provider, {
      value: e.guild_id,
      children: (0, i.jsxs)(c.ConfirmModal, S(P({
        header: E.intl.string(E.t.CFF2vL),
        confirmText: E.intl.string(E.t.lAU5jB),
        cancelText: E.intl.string(E.t["ETE/oC"]),
        onConfirm: () => d.Z.unpinMessage(e, t.id)
      }, n), {
        children: [(0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          className: N.spacing,
          children: E.intl.string(E.t.NjEPp7)
        }), (0, i.jsx)("div", {
          className: s()(N.message, N.spacing),
          children: (0, i.jsx)(b.Z, {
            channel: e,
            message: t,
            disableInteraction: true
          })
        }), (0, i.jsx)(u.Z, {
          children: E.intl.format(E.t.oCVB3Y, {})
        })]
      }))
    }))
  },
  confirmDelete: function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : true;
    (0, c.h7j)(l => (0, i.jsx)(T, P({
      channel: e,
      message: t,
      showContextMenuHint: n,
      moderatorReportData: r
    }, l)))
  },
  confirmEdit: function(e, t, n) {
    (0, c.h7j)(r => (0, i.jsx)(c.ConfirmModal, S(P({
      header: E.intl.string(E.t.aIz1oV),
      confirmText: E.intl.string(E.t["cY+Oob"]),
      cancelText: E.intl.string(E.t["ETE/oC"]),
      confirmButtonColor: o.zx.Colors.BRAND,
      onConfirm: () => h.Z.editMessage(e, t, n)
    }, r), {
      children: (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        className: N.spacing,
        children: E.intl.string(E.t.grBcM8)
      })
    })))
  }
}