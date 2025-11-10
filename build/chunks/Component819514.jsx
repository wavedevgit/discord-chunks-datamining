/** Chunk was on 79531 **/
/** chunk id: 819514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
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

function I(e, t, n) {
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
      I(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
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
class w extends Chunk647438.PureComponent {
  render() {
    let e, t, {
        report: n,
        resolveFlag: r
      } = this.state,
      l = this.props,
      {
        channel: s,
        message: c,
        showContextMenuHint: d,
        moderatorReportData: u
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
      f = s.type === Chunk981631.d4z.GUILD_ANNOUNCEMENT && (0, Chunk630388.yE)(Chunk332148.flags, Chunk981631.iLy.CROSSPOSTED);
    Chunk904245 && (e = (0, Chunk951288.jsx)(Chunk576855.Z, {
      className: Chunk625221.spacingTop,
      children: Chunk388032.intl.format(Chunk388032.t.IxY7E6, {})
    })), (0, Chunk970257.vc)(Chunk332148) && (t = (0, Chunk951288.jsx)("div", {
      className: Chunk625221.spacingTop,
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.x0jzo9),
        checked: require,
        onChange: this.handleToggleReport
      })
    }));
    let m = Chunk501517 ? Chunk388032.intl.string(Chunk388032.t["2kHABX"]) : Chunk388032.intl.string(Chunk388032.t.AMvpS4),
      b = (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk625221.message,
          children: (0, Chunk951288.jsx)(Chunk294218.Z, {
            channel: s,
            message: Chunk332148,
            disableInteraction: true
          })
        }), exports, module]
      });
    if ((null == Chunk933557 ? true : Chunk933557.moderatorReportChannelId) != null) {
      let {
        isFlagResolved: e
      } = Chunk933557;
      return (0, Chunk951288.jsx)(Chunk372900.Z.Provider, {
        value: s.guild_id,
        children: (0, Chunk951288.jsx)(Chunk793030.Modal, _(P({
          title: Chunk388032.intl.string(Chunk388032.t.MWMcg7),
          subtitle: Chunk699516,
          actions: [{
            variant: "critical-primary",
            text: Chunk388032.intl.string(Chunk388032.t.oyYWHE),
            onClick: this.handleDelete
          }],
          actionBarInput: module ? true : (0, Chunk951288.jsx)(Chunk481060.Checkbox, {
            checked: Chunk647438,
            label: Chunk388032.intl.string(Chunk43617.default["8yIKem"]),
            onChange: e => this.handleToggleResolveFlag(e)
          })
        }, Chunk726521), {
          children: Chunk594174
        }))
      })
    }
    return (0, Chunk951288.jsx)(Chunk372900.Z.Provider, {
      value: s.guild_id,
      children: (0, Chunk951288.jsx)(Chunk793030.Modal, {
        title: Chunk501517 ? Chunk388032.intl.string(Chunk388032.t.aIz1oV) : Chunk388032.intl.string(Chunk388032.t.MWMcg7),
        subtitle: Chunk699516,
        actions: [{
          text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
          onClick: Chunk726521.onClose,
          variant: "secondary"
        }, {
          text: Chunk388032.intl.string(Chunk388032.t.oyYWHE),
          onClick: this.handleDeleteMana,
          variant: "critical-primary"
        }],
        onClose: Chunk726521.onClose,
        transitionState: Chunk726521.transitionState,
        children: Chunk594174
      })
    })
  }
  constructor(...e) {
    super(...e), I(this, "state", {
      report: false,
      resolveFlag: false
    }), I(this, "handleDelete", () => {
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
      e ? (0, g.ak)(i, "message_delete_alert", () => d.Z.deleteMessage(n.id, i.id).then(() => {
        if (null != l) {
          var e, n;
          t && !s && f.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n)
        }
      })) : d.Z.deleteMessage(n.id, i.id).then(() => {
        if (null != l) {
          var e, n;
          t && !s && f.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n)
        }
      })
    }), I(this, "handleDeleteMana", () => {
      var e, t;
      this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t)
    }), I(this, "handleToggleReport", e => {
      this.setState({
        report: e
      })
    }), I(this, "handleToggleResolveFlag", e => {
      this.setState({
        resolveFlag: e
      })
    })
  }
}
let M = {
  confirmPin: function(e, t) {
    (0, o.h7j)(n => {
      let r, l = (0, u.F6)(e, b.default, m.Z);
      return r = e.isPrivate() ? O.intl.string(O.t.hMRngA) : O.intl.formatToPlainString(O.t["3IRluI"], {
        channelName: l
      }), (0, i.jsx)(h.Z.Provider, {
        value: e.guild_id,
        children: (0, i.jsx)(a.Modal, _(P({
          title: O.intl.string(O.t.bKMaZX),
          subtitle: r,
          actions: [{
            variant: "secondary",
            text: O.intl.string(O.t["ETE/oC"]),
            onClick: n.onClose
          }, {
            variant: "primary",
            text: O.intl.string(O.t.rOQ5BX),
            onClick: () => {
              c.Z.pinMessage(e, t.id), n.onClose()
            }
          }]
        }, n), {
          children: (0, i.jsx)("div", {
            className: E.message,
            children: (0, i.jsx)(v.Z, {
              channel: e,
              message: t,
              animateAvatar: false,
              disableInteraction: true
            })
          })
        }))
      })
    })
  },
  confirmUnpin: function(e, t) {
    (0, o.h7j)(n => (0, i.jsx)(h.Z.Provider, {
      value: e.guild_id,
      children: (0, i.jsxs)(a.Modal, _(P({
        title: O.intl.string(O.t.CFF2vL),
        subtitle: O.intl.string(O.t.NjEPp7),
        actions: [{
          variant: "secondary",
          text: O.intl.string(O.t["ETE/oC"]),
          onClick: n.onClose
        }, {
          variant: "critical-primary",
          text: O.intl.string(O.t.lAU5jB),
          onClick: () => {
            c.Z.unpinMessage(e, t.id), n.onClose()
          }
        }]
      }, n), {
        children: [(0, i.jsx)("div", {
          className: s()(E.message, E.spacing),
          children: (0, i.jsx)(v.Z, {
            channel: e,
            message: t,
            disableInteraction: true
          })
        }), (0, i.jsx)(p.Z, {
          children: O.intl.format(O.t.oCVB3Y, {})
        })]
      }))
    }))
  },
  confirmDelete: function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : true;
    (0, o.h7j)(l => (0, i.jsx)(w, P({
      channel: e,
      message: t,
      showContextMenuHint: n,
      moderatorReportData: r
    }, l)))
  },
  confirmEdit: function(e, t, n) {
    (0, o.h7j)(r => (0, i.jsx)(a.Modal, _(P({
      title: O.intl.string(O.t.aIz1oV),
      actions: [{
        variant: "secondary",
        text: O.intl.string(O.t["ETE/oC"]),
        onClick: r.onClose
      }, {
        variant: "primary",
        text: O.intl.string(O.t["cY+Oob"]),
        onClick: () => {
          d.Z.editMessage(e, t, n), r.onClose()
        }
      }]
    }, r), {
      children: (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        className: E.spacing,
        children: O.intl.string(O.t.grBcM8)
      })
    })))
  }
}