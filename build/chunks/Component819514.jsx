/** Chunk was on 67000 **/
/** chunk id: 819514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./997841.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk95015 = require("./95015.js"),
  Chunk793030 = require("./793030.js"),
  Chunk248514 = require("./248514.jsx"),
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
  Chunk970257 = require("./970257.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk792389 = require("./792389.js"),
  Chunk552593 = require("./552593.js");

function _(e, t, n) {
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
      _(e, t, n[t])
    })
  }
  return e
}
class P extends Chunk473749.PureComponent {
  render() {
    let e, t, {
        report: n,
        resolveFlag: i
      } = this.state,
      l = this.props,
      {
        channel: a,
        message: c,
        showContextMenuHint: d,
        moderatorReportData: f
      } = l,
      h = function(e, t) {
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
      }(l, ["channel", "message", "showContextMenuHint", "moderatorReportData"]),
      b = a.type === C.d4z.GUILD_ANNOUNCEMENT && (0, o.yE)(c.flags, C.iLy.CROSSPOSTED);
    d && (e = (0, r.jsx)(p.Z, {
      className: S.spacingTop,
      children: x.intl.format(x.t.IxY7E6, {})
    })), (0, v.vc)(c) && (t = (0, r.jsx)("div", {
      className: S.spacingTop,
      children: (0, r.jsx)(u.rsf, {
        label: x.intl.string(x.t.x0jzo9),
        checked: n,
        onChange: this.handleToggleReport
      })
    }));
    let m = b ? x.intl.string(x.t["2kHABX"]) : x.intl.string(x.t.AMvpS4),
      y = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: S.message,
          children: (0, r.jsx)(j.Z, {
            channel: a,
            message: c,
            disableInteraction: true
          })
        }), t, e]
      });
    if ((null == f ? true : f.moderatorReportChannelId) != null) {
      var O, _;
      let {
        isFlagResolved: e
      } = f;
      return (0, r.jsx)(g.Z.Provider, {
        value: a.guild_id,
        children: (0, r.jsx)(s.Modal, (O = I({
          title: x.intl.string(x.t.MWMcg7),
          subtitle: m,
          actions: [{
            variant: "critical-primary",
            text: x.intl.string(x.t.oyYWHE),
            onClick: this.handleDelete
          }],
          actionBarInput: e ? true : (0, r.jsx)(u.Checkbox, {
            checked: i,
            label: x.intl.string(E.default["8yIKem"]),
            onChange: e => this.handleToggleResolveFlag(e)
          })
        }, h), _ = _ = {
          children: y
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(_)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(_)).forEach(function(e) {
          Object.defineProperty(O, e, Object.getOwnPropertyDescriptor(_, e))
        }), O))
      })
    }
    return (0, r.jsx)(g.Z.Provider, {
      value: a.guild_id,
      children: (0, r.jsx)(s.Modal, {
        title: b ? x.intl.string(x.t.aIz1oV) : x.intl.string(x.t.MWMcg7),
        subtitle: m,
        actions: [{
          text: x.intl.string(x.t["ETE/oC"]),
          onClick: h.onClose,
          variant: "secondary"
        }, {
          text: x.intl.string(x.t.oyYWHE),
          onClick: this.handleDeleteMana,
          variant: "critical-primary"
        }],
        onClose: h.onClose,
        transitionState: h.transitionState,
        children: y
      })
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      report: false,
      resolveFlag: false
    }), _(this, "handleDelete", () => {
      let {
        report: e,
        resolveFlag: t
      } = this.state, {
        channel: n,
        message: r,
        moderatorReportData: i
      } = this.props, {
        moderatorReportChannelId: l,
        isFlagResolved: a
      } = null != i ? i : {};
      e ? (0, b.ak)(r, "message_delete_alert", () => f.Z.deleteMessage(n.id, r.id).then(() => {
        if (null != l) {
          var e, n;
          t && !a && m.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n)
        }
      })) : f.Z.deleteMessage(n.id, r.id).then(() => {
        if (null != l) {
          var e, n;
          t && !a && m.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n)
        }
      })
    }), _(this, "handleDeleteMana", () => {
      var e, t;
      this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t)
    }), _(this, "handleToggleReport", e => {
      this.setState({
        report: e
      })
    }), _(this, "handleToggleResolveFlag", e => {
      this.setState({
        resolveFlag: e
      })
    })
  }
}
let N = {
  confirmPin: function(e, t) {
    let n, i = (0, h.F6)(e, O.default, y.Z);
    n = e.isPrivate() ? x.intl.string(x.t.hMRngA) : x.intl.formatToPlainString(x.t["3IRluI"], {
      channelName: i
    }), (0, c.Z)({
      title: x.intl.string(x.t.bKMaZX),
      subtitle: n,
      confirmText: x.intl.string(x.t.rOQ5BX),
      variant: "primary",
      onConfirm: () => {
        d.Z.pinMessage(e, t.id)
      },
      cancelText: x.intl.string(x.t["ETE/oC"]),
      children: (0, r.jsx)("div", {
        className: S.message,
        children: (0, r.jsx)(j.Z, {
          channel: e,
          message: t,
          animateAvatar: false,
          disableInteraction: true
        })
      })
    })
  },
  confirmUnpin: function(e, t) {
    (0, c.Z)({
      title: x.intl.string(x.t.CFF2vL),
      subtitle: x.intl.string(x.t.NjEPp7),
      confirmText: x.intl.string(x.t.lAU5jB),
      variant: "critical",
      onConfirm: () => {
        d.Z.unpinMessage(e, t.id)
      },
      cancelText: x.intl.string(x.t["ETE/oC"]),
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: a()(S.message, S.spacing),
          children: (0, r.jsx)(j.Z, {
            channel: e,
            message: t,
            disableInteraction: true
          })
        }), (0, r.jsx)(p.Z, {
          children: x.intl.format(x.t.oCVB3Y, {})
        })]
      })
    })
  },
  confirmDelete: function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : true;
    (0, u.h7j)(l => (0, r.jsx)(P, I({
      channel: e,
      message: t,
      showContextMenuHint: n,
      moderatorReportData: i
    }, l)))
  },
  confirmEdit: function(e, t, n) {
    (0, c.Z)({
      title: x.intl.string(x.t.aIz1oV),
      subtitle: x.intl.string(x.t.grBcM8),
      confirmText: x.intl.string(x.t["cY+Oob"]),
      variant: "primary",
      onConfirm: () => {
        f.Z.editMessage(e, t, n)
      },
      cancelText: x.intl.string(x.t["ETE/oC"])
    })
  }
}