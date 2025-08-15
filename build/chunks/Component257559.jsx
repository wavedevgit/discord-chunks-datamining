/** Chunk was on 93077 **/
/** chunk id: 257559, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./997841.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk332148 = require("./332148.js"),
  Chunk904245 = require("./904245.js"),
  Chunk933557 = require("./933557.js"),
  Chunk576855 = require("./576855.jsx"),
  Chunk724723 = require("./724723.js"),
  Chunk372900 = require("./372900.js"),
  Chunk726521 = require("./726521.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk501517 = require("./501517.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk630388 = require("./630388.js"),
  Chunk970257 = require("./970257.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764295 = require("./764295.js"),
  Chunk477425 = require("./477425.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
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
class D extends Chunk73800.PureComponent {
  render() {
    let e, t, n = Chunk724723.Z.getCurrentConfig({
        location: "DeleteModal"
      }).enabled,
      {
        report: r,
        resolveFlag: l
      } = this.state,
      s = this.props,
      {
        channel: o,
        message: d,
        showContextMenuHint: h,
        moderatorReportData: g
      } = s,
      f = function(e, t) {
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
      }(s, ["channel", "message", "showContextMenuHint", "moderatorReportData"]),
      j = Chunk755721.type === Chunk981631.d4z.GUILD_ANNOUNCEMENT && (0, Chunk630388.yE)(Chunk332148.flags, Chunk981631.iLy.CROSSPOSTED);
    Chunk904245 && (e = (0, Chunk255367.jsx)(Chunk576855.Z, {
      className: Chunk477425.spacingTop,
      children: Chunk388032.intl.format(Chunk388032.t.IxY7Ex, {})
    })), (0, Chunk970257.vc)(Chunk332148) && (t = (0, Chunk255367.jsx)(Chunk481060.j7V, {
      value: Chunk73800,
      onChange: this.handleToggleReport,
      hideBorder: true,
      className: Chunk477425.spacingTop,
      children: Chunk388032.intl.string(Chunk388032.t.x0jzo6)
    }));
    let v = Chunk501517 ? Chunk388032.intl.string(Chunk388032.t["2kHABQ"]) : Chunk388032.intl.string(Chunk388032.t.AMvpS0),
      y = (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)("div", {
          className: Chunk477425.message,
          children: (0, Chunk255367.jsx)(Chunk294218.Z, {
            channel: Chunk755721,
            message: Chunk332148,
            disableInteraction: true
          })
        }), exports, module]
      }),
      P = (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-md/medium",
          className: Chunk477425.spacing,
          children: Chunk699516
        }), Chunk594174]
      });
    if ((null == Chunk933557 ? true : Chunk933557.moderatorReportChannelId) != null) {
      let {
        isFlagResolved: e
      } = Chunk933557;
      return (0, Chunk255367.jsx)(Chunk372900.Z.Provider, {
        value: Chunk755721.guild_id,
        children: (0, Chunk255367.jsxs)(Chunk481060.Y0X, T(S({
          parentComponent: "DeleteModal"
        }, Chunk726521), {
          children: [(0, Chunk255367.jsx)(Chunk481060.xBx, {
            separator: false,
            children: (0, Chunk255367.jsxs)(Chunk481060.Kqy, {
              direction: "vertical",
              justify: "space-between",
              children: [(0, Chunk255367.jsx)(Chunk481060.olH, {
                className: Chunk477425.closeButton,
                onClick: Chunk726521.onClose
              }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
                variant: "heading-xl/bold",
                children: Chunk388032.intl.string(Chunk388032.t.MWMcg4)
              })]
            })
          }), (0, Chunk255367.jsx)(Chunk481060.hzk, {
            children: P
          }), (0, Chunk255367.jsxs)(Chunk481060.mzw, {
            children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
              variant: "critical-primary",
              size: "sm",
              text: Chunk388032.intl.string(Chunk388032.t.oyYWHB),
              type: "submit",
              onClick: this.handleDelete
            }), !module && (0, Chunk255367.jsx)(Chunk481060.XZJ, {
              value: Chunk120356,
              onChange: (e, t) => this.handleToggleResolveFlag(t),
              children: Chunk388032.intl.string(Chunk764295.default["8yIKen"])
            })]
          })]
        }))
      })
    }
    return (0, Chunk255367.jsx)(Chunk372900.Z.Provider, {
      value: Chunk755721.guild_id,
      children: require ? (0, Chunk255367.jsx)(Chunk82659.Modal, {
        title: Chunk501517 ? Chunk388032.intl.string(Chunk388032.t.aIz1oa) : Chunk388032.intl.string(Chunk388032.t.MWMcg4),
        subtitle: Chunk699516,
        actions: [{
          text: Chunk388032.intl.string(Chunk388032.t["ETE/oK"]),
          onClick: Chunk726521.onClose,
          variant: "secondary"
        }, {
          text: Chunk388032.intl.string(Chunk388032.t.oyYWHB),
          onClick: this.handleDeleteMana,
          variant: "critical-primary"
        }],
        onClose: Chunk726521.onClose,
        transitionState: Chunk726521.transitionState,
        children: Chunk594174
      }) : (0, Chunk255367.jsx)(Chunk481060.ConfirmModal, T(S({
        header: Chunk501517 ? Chunk388032.intl.string(Chunk388032.t.aIz1oa) : Chunk388032.intl.string(Chunk388032.t.MWMcg4),
        confirmText: Chunk388032.intl.string(Chunk388032.t.oyYWHB),
        cancelText: Chunk388032.intl.string(Chunk388032.t["ETE/oK"]),
        onConfirm: this.handleDelete
      }, Chunk726521), {
        children: P
      }))
    })
  }
  constructor(...e) {
    super(...e), P(this, "state", {
      report: false,
      resolveFlag: false
    }), P(this, "handleDelete", () => {
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
      e ? (0, f.ak)(i, "message_delete_alert", () => h.Z.deleteMessage(n.id, i.id).then(() => {
        if (null != l) {
          var e, n;
          t && !s && j.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n)
        }
      })) : h.Z.deleteMessage(n.id, i.id).then(() => {
        if (null != l) {
          var e, n;
          t && !s && j.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n)
        }
      })
    }), P(this, "handleDeleteMana", () => {
      var e, t;
      this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t)
    }), P(this, "handleToggleReport", e => {
      this.setState({
        report: e
      })
    }), P(this, "handleToggleResolveFlag", e => {
      this.setState({
        resolveFlag: e
      })
    })
  }
}
let I = {
  confirmPin: function(e, t) {
    (0, c.h7j)(n => {
      let r, l = (0, g.F6)(e, y.default, v.Z);
      return r = e.isPrivate() ? C.intl.string(C.t.hMRngI) : C.intl.formatToPlainString(C.t["3IRluL"], {
        channelName: l
      }), (0, i.jsx)(p.Z.Provider, {
        value: e.guild_id,
        children: (0, i.jsxs)(c.ConfirmModal, T(S({
          header: C.intl.string(C.t.bKMaZW),
          confirmText: C.intl.string(C.t.rOQ5BQ),
          cancelText: C.intl.string(C.t["ETE/oK"]),
          confirmButtonColor: o.zx.Colors.BRAND,
          onConfirm: () => d.Z.pinMessage(e, t.id)
        }, n), {
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/normal",
            className: N.spacing,
            children: r
          }), (0, i.jsx)("div", {
            className: N.message,
            children: (0, i.jsx)(x.Z, {
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
      children: (0, i.jsxs)(c.ConfirmModal, T(S({
        header: C.intl.string(C.t.CFF2vL),
        confirmText: C.intl.string(C.t.lAU5jI),
        cancelText: C.intl.string(C.t["ETE/oK"]),
        onConfirm: () => d.Z.unpinMessage(e, t.id)
      }, n), {
        children: [(0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          className: N.spacing,
          children: C.intl.string(C.t.NjEPp6)
        }), (0, i.jsx)("div", {
          className: s()(N.message, N.spacing),
          children: (0, i.jsx)(x.Z, {
            channel: e,
            message: t,
            disableInteraction: true
          })
        }), (0, i.jsx)(u.Z, {
          children: C.intl.format(C.t.oCVB3d, {})
        })]
      }))
    }))
  },
  confirmDelete: function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : true;
    (0, c.h7j)(l => (0, i.jsx)(D, S({
      channel: e,
      message: t,
      showContextMenuHint: n,
      moderatorReportData: r
    }, l)))
  },
  confirmEdit: function(e, t, n) {
    (0, c.h7j)(r => (0, i.jsx)(c.ConfirmModal, T(S({
      header: C.intl.string(C.t.aIz1oa),
      confirmText: C.intl.string(C.t["cY+Ooa"]),
      cancelText: C.intl.string(C.t["ETE/oK"]),
      confirmButtonColor: o.zx.Colors.BRAND,
      onConfirm: () => h.Z.editMessage(e, t, n)
    }, r), {
      children: (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        className: N.spacing,
        children: C.intl.string(C.t.grBcMz)
      })
    })))
  }
}