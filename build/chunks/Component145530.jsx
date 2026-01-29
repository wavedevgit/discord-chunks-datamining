/** Chunk was on 27687 **/
/** chunk id: 145530, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => P
}), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk665260 = require("./665260.js"),
  Chunk158954 = require("./158954.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk687709 = require("./687709.js"),
  Chunk843472 = require("./843472.js"),
  Chunk47167 = require("./47167.js"),
  Chunk12351 = require("./12351.jsx"),
  Chunk386467 = require("./386467.js"),
  Chunk928658 = require("./928658.js"),
  Chunk226698 = require("./226698.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk628691 = require("./628691.js"),
  Chunk636922 = require("./636922.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js"),
  Chunk378720 = require("./378720.js");

function I(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}

function S(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), r.forEach(function(e) {
      I(t, e, n[e])
    })
  }
  return t
}
class C extends Chunk64700.PureComponent {
  render() {
    let t, e, {
        report: n,
        resolveFlag: i
      } = this.state,
      l = this.props,
      {
        channel: s,
        message: c,
        showContextMenuHint: g,
        moderatorReportData: h
      } = l,
      u = function(t, e) {
        if (null == t) return {};
        var n, r, i, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (i = 0, n = Reflect.ownKeys(t); i < n.length; i++) r = n[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (l[r] = t[r]);
          return l
        }
        if (l = function(t, e) {
            if (null == t) return {};
            var n, r, i = {},
              l = Object.getOwnPropertyNames(t);
            for (r = 0; r < l.length; r++) n = l[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
            return i
          }(t, e), Object.getOwnPropertySymbols)
          for (i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) r = n[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (l[r] = t[r]);
        return l
      }(l, ["channel", "message", "showContextMenuHint", "moderatorReportData"]),
      m = s.type === y.rbe.GUILD_ANNOUNCEMENT && (0, a.Lt)(c.flags, y.pr7.CROSSPOSTED);
    g && (t = (0, r.jsx)(p.A, {
      className: x.Vc,
      children: N.intl.format(N.t.IxY7E6, {})
    })), (0, O.AR)(c) && (e = (0, r.jsx)("div", {
      className: x.Vc,
      children: (0, r.jsx)(d.dOG, {
        label: N.intl.string(N.t.x0jzo9),
        checked: n,
        onChange: this.handleToggleReport
      })
    }));
    let E = m ? N.intl.string(N.t["2kHABX"]) : N.intl.string(N.t.AMvpS4),
      b = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: x.iU,
          children: (0, r.jsx)(v.A, {
            channel: s,
            message: c,
            disableInteraction: true
          })
        }), e, t]
      });
    if ((null == h ? true : h.moderatorReportChannelId) != null) {
      var A, I;
      let {
        isFlagResolved: t
      } = h;
      return (0, r.jsx)(f.A.Provider, {
        value: s.guild_id,
        children: (0, r.jsx)(o.Modal, (A = S({
          title: N.intl.string(N.t.MWMcg7),
          subtitle: E,
          actions: [{
            variant: "critical-primary",
            text: N.intl.string(N.t.oyYWHE),
            onClick: this.handleDelete
          }],
          actionBarInput: t ? true : (0, r.jsx)(d.Checkbox, {
            checked: i,
            label: N.intl.string(j.default["8yIKem"]),
            onChange: t => this.handleToggleResolveFlag(t)
          })
        }, u), I = I = {
          children: b
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(I)) : (function(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            n.push.apply(n, r)
          }
          return n
        })(Object(I)).forEach(function(t) {
          Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(I, t))
        }), A))
      })
    }
    return (0, r.jsx)(f.A.Provider, {
      value: s.guild_id,
      children: (0, r.jsx)(o.Modal, {
        title: m ? N.intl.string(N.t.aIz1oV) : N.intl.string(N.t.MWMcg7),
        subtitle: E,
        actions: [{
          text: N.intl.string(N.t["ETE/oC"]),
          onClick: u.onClose,
          variant: "secondary"
        }, {
          text: N.intl.string(N.t.oyYWHE),
          onClick: this.handleDeleteMana,
          variant: "critical-primary"
        }],
        onClose: u.onClose,
        transitionState: u.transitionState,
        children: b
      })
    })
  }
  constructor(...t) {
    super(...t), I(this, "state", {
      report: false,
      resolveFlag: false
    }), I(this, "handleDelete", () => {
      let {
        report: t,
        resolveFlag: e
      } = this.state, {
        channel: n,
        message: r,
        moderatorReportData: i
      } = this.props, {
        moderatorReportChannelId: l,
        isFlagResolved: s
      } = null != i ? i : {};
      t ? (0, m.V2)(r, "message_delete_alert", () => h.A.deleteMessage(n.id, r.id).then(() => {
        if (null != l) {
          var t, n;
          e && !s && E.A.resolveFlag(l), null == (t = (n = this.props).onClose) || t.call(n)
        }
      })) : h.A.deleteMessage(n.id, r.id).then(() => {
        if (null != l) {
          var t, n;
          e && !s && E.A.resolveFlag(l), null == (t = (n = this.props).onClose) || t.call(n)
        }
      })
    }), I(this, "handleDeleteMana", () => {
      var t, e;
      this.handleDelete(), null == (t = (e = this.props).onClose) || t.call(e)
    }), I(this, "handleToggleReport", t => {
      this.setState({
        report: t
      })
    }), I(this, "handleToggleResolveFlag", t => {
      this.setState({
        resolveFlag: t
      })
    })
  }
}
let P = {
  confirmPin: function(t, e) {
    let n, i = (0, u.m1)(t, A.default, b.A);
    n = t.isPrivate() ? N.intl.string(N.t.hMRngA) : N.intl.formatToPlainString(N.t["3IRluI"], {
      channelName: i
    }), (0, c.A)({
      title: N.intl.string(N.t.bKMaZX),
      subtitle: n,
      confirmText: N.intl.string(N.t.rOQ5BX),
      variant: "primary",
      onConfirm: () => {
        g.A.pinMessage(t, e.id)
      },
      cancelText: N.intl.string(N.t["ETE/oC"]),
      children: (0, r.jsx)("div", {
        className: x.iU,
        children: (0, r.jsx)(v.A, {
          channel: t,
          message: e,
          animateAvatar: false,
          disableInteraction: true
        })
      })
    })
  },
  confirmUnpin: function(t, e) {
    (0, c.A)({
      title: N.intl.string(N.t.CFF2vL),
      subtitle: N.intl.string(N.t.NjEPp7),
      confirmText: N.intl.string(N.t.lAU5jB),
      variant: "critical",
      onConfirm: () => {
        g.A.unpinMessage(t, e.id)
      },
      cancelText: N.intl.string(N.t["ETE/oC"]),
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: s()(x.iU, x.YK),
          children: (0, r.jsx)(v.A, {
            channel: t,
            message: e,
            disableInteraction: true
          })
        }), (0, r.jsx)(p.A, {
          children: N.intl.format(N.t.oCVB3Y, {})
        })]
      })
    })
  },
  confirmDelete: function(t, e) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : true;
    (0, d.qfG)(l => (0, r.jsx)(C, S({
      channel: t,
      message: e,
      showContextMenuHint: n,
      moderatorReportData: i
    }, l)))
  },
  confirmEdit: function(t, e, n) {
    (0, c.A)({
      title: N.intl.string(N.t.aIz1oV),
      subtitle: N.intl.string(N.t.grBcM8),
      confirmText: N.intl.string(N.t["cY+Oob"]),
      variant: "primary",
      onConfirm: () => {
        h.A.editMessage(t, e, n)
      },
      cancelText: N.intl.string(N.t["ETE/oC"])
    })
  }
}