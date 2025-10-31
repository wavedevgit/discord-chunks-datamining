/** Chunk was on 83546 **/
/** chunk id: 819514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk43617 = require("./43617.js"),
  Chunk625221 = require("./625221.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class N extends Chunk647438.PureComponent {
  render() {
    let e, t, {
        report: n,
        resolveFlag: i
      } = this.state,
      l = this.props,
      {
        channel: o,
        message: s,
        showContextMenuHint: u,
        moderatorReportData: d
      } = Chunk120356,
      p = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(Chunk120356, ["channel", "message", "showContextMenuHint", "moderatorReportData"]),
      g = o.type === Chunk981631.d4z.GUILD_ANNOUNCEMENT && (0, Chunk630388.yE)(Chunk755721.flags, Chunk981631.iLy.CROSSPOSTED);
    Chunk332148 && (e = (0, Chunk951288.jsx)(Chunk576855.Z, {
      className: Chunk625221.spacingTop,
      children: Chunk388032.intl.format(Chunk388032.t.IxY7E6, {})
    })), (0, Chunk970257.vc)(Chunk755721) && (t = (0, Chunk951288.jsx)("div", {
      className: Chunk625221.spacingTop,
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.x0jzo9),
        checked: require,
        onChange: this.handleToggleReport
      })
    }));
    let m = Chunk726521 ? Chunk388032.intl.string(Chunk388032.t["2kHABX"]) : Chunk388032.intl.string(Chunk388032.t.AMvpS4),
      b = (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk625221.message,
          children: (0, Chunk951288.jsx)(Chunk294218.Z, {
            channel: o,
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
        value: o.guild_id,
        children: (0, Chunk951288.jsxs)(Chunk481060.Y0X, P(I({
          parentComponent: "DeleteModal"
        }, Chunk933557), {
          children: [(0, Chunk951288.jsx)(Chunk481060.xBx, {
            separator: false,
            children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
              direction: "vertical",
              justify: "space-between",
              children: [(0, Chunk951288.jsx)(Chunk481060.olH, {
                className: Chunk625221.closeButton,
                onClick: Chunk933557.onClose
              }), (0, Chunk951288.jsx)(Chunk481060.Heading, {
                variant: "heading-xl/bold",
                children: Chunk388032.intl.string(Chunk388032.t.MWMcg7)
              })]
            })
          }), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
            children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
              variant: "heading-md/medium",
              className: Chunk625221.spacing,
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
              label: Chunk388032.intl.string(Chunk43617.default["8yIKem"]),
              onChange: e => this.handleToggleResolveFlag(e)
            })]
          })]
        }))
      })
    }
    return (0, Chunk951288.jsx)(Chunk372900.Z.Provider, {
      value: o.guild_id,
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
    super(...e), S(this, "state", {
      report: false,
      resolveFlag: false
    }), S(this, "handleDelete", () => {
      let {
        report: e,
        resolveFlag: t
      } = this.state, {
        channel: n,
        message: r,
        moderatorReportData: i
      } = this.props, {
        moderatorReportChannelId: l,
        isFlagResolved: o
      } = null != i ? i : {};
      e ? (0, g.ak)(r, "message_delete_alert", () => d.Z.deleteMessage(n.id, r.id).then(() => {
        if (null != l) {
          var e, n;
          t && !o && m.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n)
        }
      })) : d.Z.deleteMessage(n.id, r.id).then(() => {
        if (null != l) {
          var e, n;
          t && !o && m.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n)
        }
      })
    }), S(this, "handleDeleteMana", () => {
      var e, t;
      this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t)
    }), S(this, "handleToggleReport", e => {
      this.setState({
        report: e
      })
    }), S(this, "handleToggleResolveFlag", e => {
      this.setState({
        resolveFlag: e
      })
    })
  }
}
let Z = {
  confirmPin: function(e, t) {
    (0, c.h7j)(n => {
      let i, l = (0, p.F6)(e, _.default, b.Z);
      return i = e.isPrivate() ? C.intl.string(C.t.hMRngA) : C.intl.formatToPlainString(C.t["3IRluI"], {
        channelName: l
      }), (0, r.jsx)(h.Z.Provider, {
        value: e.guild_id,
        children: (0, r.jsxs)(c.ConfirmModal, P(I({
          header: C.intl.string(C.t.bKMaZX),
          confirmText: C.intl.string(C.t.rOQ5BX),
          cancelText: C.intl.string(C.t["ETE/oC"]),
          confirmButtonColor: s.zx.Colors.BRAND,
          onConfirm: () => u.Z.pinMessage(e, t.id)
        }, n), {
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            className: x.spacing,
            children: i
          }), (0, r.jsx)("div", {
            className: x.message,
            children: (0, r.jsx)(v.Z, {
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
    (0, c.h7j)(n => (0, r.jsx)(h.Z.Provider, {
      value: e.guild_id,
      children: (0, r.jsxs)(c.ConfirmModal, P(I({
        header: C.intl.string(C.t.CFF2vL),
        confirmText: C.intl.string(C.t.lAU5jB),
        cancelText: C.intl.string(C.t["ETE/oC"]),
        onConfirm: () => u.Z.unpinMessage(e, t.id)
      }, n), {
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          className: x.spacing,
          children: C.intl.string(C.t.NjEPp7)
        }), (0, r.jsx)("div", {
          className: o()(x.message, x.spacing),
          children: (0, r.jsx)(v.Z, {
            channel: e,
            message: t,
            disableInteraction: true
          })
        }), (0, r.jsx)(f.Z, {
          children: C.intl.format(C.t.oCVB3Y, {})
        })]
      }))
    }))
  },
  confirmDelete: function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : true;
    (0, c.h7j)(l => (0, r.jsx)(N, I({
      channel: e,
      message: t,
      showContextMenuHint: n,
      moderatorReportData: i
    }, l)))
  },
  confirmEdit: function(e, t, n) {
    (0, c.h7j)(i => (0, r.jsx)(c.ConfirmModal, P(I({
      header: C.intl.string(C.t.aIz1oV),
      confirmText: C.intl.string(C.t["cY+Oob"]),
      cancelText: C.intl.string(C.t["ETE/oC"]),
      confirmButtonColor: s.zx.Colors.BRAND,
      onConfirm: () => d.Z.editMessage(e, t, n)
    }, i), {
      children: (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        className: x.spacing,
        children: C.intl.string(C.t.grBcM8)
      })
    })))
  }
}