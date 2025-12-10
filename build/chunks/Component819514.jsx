/** Chunk was on 79531 **/
/** chunk id: 819514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./997841.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
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
class w extends Chunk473749.PureComponent {
  render() {
    let e, t, {
        report: n,
        resolveFlag: r
      } = this.state,
      l = this.props,
      {
        channel: s,
        message: c,
        showContextMenuHint: u,
        moderatorReportData: p
      } = Chunk120356,
      h = function(e, t) {
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
      m = s.type === Chunk981631.d4z.GUILD_ANNOUNCEMENT && (0, Chunk95015.yE)(Chunk248514.flags, Chunk981631.iLy.CROSSPOSTED);
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
    let b = Chunk726521 ? Chunk388032.intl.string(Chunk388032.t["2kHABX"]) : Chunk388032.intl.string(Chunk388032.t.AMvpS4),
      j = (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk625221.message,
          children: (0, Chunk54381.jsx)(Chunk294218.Z, {
            channel: s,
            message: Chunk248514,
            disableInteraction: true
          })
        }), exports, module]
      });
    if ((null == Chunk904245 ? true : Chunk904245.moderatorReportChannelId) != null) {
      var x, P;
      let {
        isFlagResolved: e
      } = Chunk904245;
      return (0, Chunk54381.jsx)(Chunk372900.Z.Provider, {
        value: s.guild_id,
        children: (0, Chunk54381.jsx)(Chunk793030.Modal, (x = _({
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
        }, Chunk933557), P = P = {
          children: Chunk699516
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(Chunk594174, Object.getOwnPropertyDescriptors(P)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(P)).forEach(function(e) {
          Object.defineProperty(x, e, Object.getOwnPropertyDescriptor(P, e))
        }), Chunk594174))
      })
    }
    return (0, Chunk54381.jsx)(Chunk372900.Z.Provider, {
      value: s.guild_id,
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
      e ? (0, m.ak)(i, "message_delete_alert", () => p.Z.deleteMessage(n.id, i.id).then(() => {
        if (null != l) {
          var e, n;
          t && !s && b.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n)
        }
      })) : p.Z.deleteMessage(n.id, i.id).then(() => {
        if (null != l) {
          var e, n;
          t && !s && b.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n)
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
let S = {
  confirmPin: function(e, t) {
    let n, r = (0, h.F6)(e, x.default, j.Z);
    n = e.isPrivate() ? E.intl.string(E.t.hMRngA) : E.intl.formatToPlainString(E.t["3IRluI"], {
      channelName: r
    }), (0, c.Z)({
      title: E.intl.string(E.t.bKMaZX),
      subtitle: n,
      confirmText: E.intl.string(E.t.rOQ5BX),
      variant: "primary",
      onConfirm: () => {
        u.Z.pinMessage(e, t.id)
      },
      cancelText: E.intl.string(E.t["ETE/oC"]),
      children: (0, i.jsx)("div", {
        className: I.message,
        children: (0, i.jsx)(v.Z, {
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
      title: E.intl.string(E.t.CFF2vL),
      subtitle: E.intl.string(E.t.NjEPp7),
      confirmText: E.intl.string(E.t.lAU5jB),
      variant: "critical",
      onConfirm: () => {
        u.Z.unpinMessage(e, t.id)
      },
      cancelText: E.intl.string(E.t["ETE/oC"]),
      children: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: s()(I.message, I.spacing),
          children: (0, i.jsx)(v.Z, {
            channel: e,
            message: t,
            disableInteraction: true
          })
        }), (0, i.jsx)(g.Z, {
          children: E.intl.format(E.t.oCVB3Y, {})
        })]
      })
    })
  },
  confirmDelete: function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : true;
    (0, d.h7j)(l => (0, i.jsx)(w, _({
      channel: e,
      message: t,
      showContextMenuHint: n,
      moderatorReportData: r
    }, l)))
  },
  confirmEdit: function(e, t, n) {
    (0, c.Z)({
      title: E.intl.string(E.t.aIz1oV),
      subtitle: E.intl.string(E.t.grBcM8),
      confirmText: E.intl.string(E.t["cY+Oob"]),
      variant: "primary",
      onConfirm: () => {
        p.Z.editMessage(e, t, n)
      },
      cancelText: E.intl.string(E.t["ETE/oC"])
    })
  }
}