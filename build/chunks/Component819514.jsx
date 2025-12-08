/** Chunk was on 81500 **/
/** chunk id: 819514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./997841.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk864309 = require("./864309.js"),
  Chunk625221 = require("./625221.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
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
class w extends Chunk473749.PureComponent {
  render() {
    let e, t, {
        report: n,
        resolveFlag: i
      } = this.state,
      a = this.props,
      {
        channel: o,
        message: c,
        showContextMenuHint: u,
        moderatorReportData: p
      } = Chunk120356,
      f = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(Chunk120356, ["channel", "message", "showContextMenuHint", "moderatorReportData"]),
      m = o.type === Chunk981631.d4z.GUILD_ANNOUNCEMENT && (0, Chunk95015.yE)(Chunk248514.flags, Chunk981631.iLy.CROSSPOSTED);
    Chunk332148 && (e = (0, Chunk54381.jsx)(Chunk576855.Z, {
      className: Chunk625221.spacingTop,
      children: Chunk388032.intl.format(Chunk388032.t.IxY7E6, {})
    })), (0, Chunk970257.vc)(Chunk248514) && (t = (0, Chunk54381.jsx)("div", {
      className: Chunk625221.spacingTop,
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.x0jzo9),
        checked: require,
        onChange: this.handleToggleReport
      })
    }));
    let g = Chunk726521 ? Chunk388032.intl.string(Chunk388032.t["2kHABX"]) : Chunk388032.intl.string(Chunk388032.t.AMvpS4),
      _ = (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk625221.message,
          children: (0, Chunk54381.jsx)(Chunk294218.Z, {
            channel: o,
            message: Chunk248514,
            disableInteraction: true
          })
        }), exports, module]
      });
    if ((null == Chunk904245 ? true : Chunk904245.moderatorReportChannelId) != null) {
      var j, S;
      let {
        isFlagResolved: e
      } = Chunk904245;
      return (0, Chunk54381.jsx)(Chunk372900.Z.Provider, {
        value: o.guild_id,
        children: (0, Chunk54381.jsx)(Chunk793030.Modal, (j = Z({
          title: Chunk388032.intl.string(Chunk388032.t.MWMcg7),
          subtitle: Chunk501517,
          actions: [{
            variant: "critical-primary",
            text: Chunk388032.intl.string(Chunk388032.t.oyYWHE),
            onClick: this.handleDelete
          }],
          actionBarInput: module ? true : (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
            checked: Chunk473749,
            label: Chunk388032.intl.string(Chunk864309.default["8yIKem"]),
            onChange: e => this.handleToggleResolveFlag(e)
          })
        }, Chunk933557), S = S = {
          children: Chunk699516
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(Chunk594174, Object.getOwnPropertyDescriptors(S)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(S)).forEach(function(e) {
          Object.defineProperty(j, e, Object.getOwnPropertyDescriptor(S, e))
        }), Chunk594174))
      })
    }
    return (0, Chunk54381.jsx)(Chunk372900.Z.Provider, {
      value: o.guild_id,
      children: (0, Chunk54381.jsx)(Chunk793030.Modal, {
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
        moderatorReportChannelId: a,
        isFlagResolved: o
      } = null != i ? i : {};
      e ? (0, m.ak)(r, "message_delete_alert", () => p.Z.deleteMessage(n.id, r.id).then(() => {
        if (null != a) {
          var e, n;
          t && !o && g.Z.resolveFlag(a), null == (e = (n = this.props).onClose) || e.call(n)
        }
      })) : p.Z.deleteMessage(n.id, r.id).then(() => {
        if (null != a) {
          var e, n;
          t && !o && g.Z.resolveFlag(a), null == (e = (n = this.props).onClose) || e.call(n)
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
let k = {
  confirmPin: function(e, t) {
    let n, i = (0, f.F6)(e, j.default, _.Z);
    n = e.isPrivate() ? O.intl.string(O.t.hMRngA) : O.intl.formatToPlainString(O.t["3IRluI"], {
      channelName: i
    }), (0, c.Z)({
      title: O.intl.string(O.t.bKMaZX),
      subtitle: n,
      confirmText: O.intl.string(O.t.rOQ5BX),
      variant: "primary",
      onConfirm: () => {
        u.Z.pinMessage(e, t.id)
      },
      cancelText: O.intl.string(O.t["ETE/oC"]),
      children: (0, r.jsx)("div", {
        className: C.message,
        children: (0, r.jsx)(y.Z, {
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
      title: O.intl.string(O.t.CFF2vL),
      subtitle: O.intl.string(O.t.NjEPp7),
      confirmText: O.intl.string(O.t.lAU5jB),
      variant: "critical",
      onConfirm: () => {
        u.Z.unpinMessage(e, t.id)
      },
      cancelText: O.intl.string(O.t["ETE/oC"]),
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: o()(C.message, C.spacing),
          children: (0, r.jsx)(y.Z, {
            channel: e,
            message: t,
            disableInteraction: true
          })
        }), (0, r.jsx)(b.Z, {
          children: O.intl.format(O.t.oCVB3Y, {})
        })]
      })
    })
  },
  confirmDelete: function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : true;
    (0, d.h7j)(a => (0, r.jsx)(w, Z({
      channel: e,
      message: t,
      showContextMenuHint: n,
      moderatorReportData: i
    }, a)))
  },
  confirmEdit: function(e, t, n) {
    (0, c.Z)({
      title: O.intl.string(O.t.aIz1oV),
      subtitle: O.intl.string(O.t.grBcM8),
      confirmText: O.intl.string(O.t["cY+Oob"]),
      variant: "primary",
      onConfirm: () => {
        p.Z.editMessage(e, t, n)
      },
      cancelText: O.intl.string(O.t["ETE/oC"])
    })
  }
}