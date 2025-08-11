/** Chunk was on web.js **/
/** chunk id: 257559, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./997841.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk130883 = require("./130883.js"),
  Chunk739788 = require("./739788.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = D(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function L(e, t) {
  (0, c.h7j)(n => {
    let i, o = (0, f.F6)(e, y.default, b.Z);
    return i = e.isPrivate() ? T.intl.string(T.t.hMRngI) : T.intl.formatToPlainString(T.t["3IRluL"], {
      channelName: o
    }), (0, r.jsx)(h.Z.Provider, {
      value: e.guild_id,
      children: (0, r.jsxs)(c.ConfirmModal, P(C({
        header: T.intl.string(T.t.bKMaZW),
        confirmText: T.intl.string(T.t.rOQ5BQ),
        cancelText: T.intl.string(T.t["ETE/oK"]),
        confirmButtonColor: l.zx.Colors.BRAND,
        onConfirm: () => u.Z.pinMessage(e, t.id)
      }, n), {
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          className: A.spacing,
          children: i
        }), (0, r.jsx)("div", {
          className: A.message,
          children: (0, r.jsx)(g.Z, {
            channel: e,
            message: t,
            animateAvatar: false,
            disableInteraction: true
          })
        })]
      }))
    })
  })
}

function x(e, t) {
  (0, c.h7j)(n => (0, r.jsx)(h.Z.Provider, {
    value: e.guild_id,
    children: (0, r.jsxs)(c.ConfirmModal, P(C({
      header: T.intl.string(T.t.CFF2vL),
      confirmText: T.intl.string(T.t.lAU5jI),
      cancelText: T.intl.string(T.t["ETE/oK"]),
      onConfirm: () => u.Z.unpinMessage(e, t.id)
    }, n), {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        className: A.spacing,
        children: T.intl.string(T.t.NjEPp6)
      }), (0, r.jsx)("div", {
        className: a()(A.message, A.spacing),
        children: (0, r.jsx)(g.Z, {
          channel: e,
          message: t,
          disableInteraction: true
        })
      }), (0, r.jsx)(_.Z, {
        children: T.intl.format(T.t.oCVB3d, {})
      })]
    }))
  }))
}
class M extends Chunk73800.PureComponent {
  render() {
    let e, t, n = Chunk724723.Z.getCurrentConfig({
        location: "DeleteModal"
      }).enabled,
      {
        report: i,
        resolveFlag: o
      } = this.state,
      a = this.props,
      {
        channel: l,
        message: u,
        showContextMenuHint: d,
        moderatorReportData: f
      } = a,
      m = w(a, ["channel", "message", "showContextMenuHint", "moderatorReportData"]),
      E = Chunk755721.type === Chunk981631.d4z.GUILD_ANNOUNCEMENT && (0, Chunk630388.yE)(Chunk332148.flags, Chunk981631.iLy.CROSSPOSTED);
    Chunk904245 && (e = (0, Chunk255367.jsx)(Chunk576855.Z, {
      className: Chunk739788.spacingTop,
      children: Chunk388032.intl.format(Chunk388032.t.IxY7Ex, {})
    })), (0, Chunk970257.vc)(Chunk332148) && (t = (0, Chunk255367.jsx)(Chunk481060.j7V, {
      value: Chunk73800,
      onChange: this.handleToggleReport,
      hideBorder: true,
      className: Chunk739788.spacingTop,
      children: Chunk388032.intl.string(Chunk388032.t.x0jzo6)
    }));
    let b = Chunk501517 ? Chunk388032.intl.string(Chunk388032.t["2kHABQ"]) : Chunk388032.intl.string(Chunk388032.t.AMvpS0),
      y = (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)("div", {
          className: Chunk739788.message,
          children: (0, Chunk255367.jsx)(Chunk294218.Z, {
            channel: Chunk755721,
            message: Chunk332148,
            disableInteraction: true
          })
        }), exports, module]
      }),
      N = (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-md/medium",
          className: Chunk739788.spacing,
          children: Chunk699516
        }), Chunk594174]
      });
    if ((null == Chunk933557 ? true : Chunk933557.moderatorReportChannelId) != null) {
      let {
        isFlagResolved: e
      } = Chunk933557;
      return (0, Chunk255367.jsx)(Chunk372900.Z.Provider, {
        value: Chunk755721.guild_id,
        children: (0, Chunk255367.jsxs)(Chunk481060.Y0X, P(C({
          parentComponent: "DeleteModal"
        }, Chunk726521), {
          children: [(0, Chunk255367.jsx)(Chunk481060.xBx, {
            separator: false,
            children: (0, Chunk255367.jsxs)(Chunk481060.Kqy, {
              direction: "vertical",
              justify: "space-between",
              children: [(0, Chunk255367.jsx)(Chunk481060.olH, {
                className: Chunk739788.closeButton,
                onClick: Chunk726521.onClose
              }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
                variant: "heading-xl/bold",
                children: Chunk388032.intl.string(Chunk388032.t.MWMcg4)
              })]
            })
          }), (0, Chunk255367.jsx)(Chunk481060.hzk, {
            children: N
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
              children: Chunk388032.intl.string(Chunk130883.default["8yIKen"])
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
      }) : (0, Chunk255367.jsx)(Chunk481060.ConfirmModal, P(C({
        header: Chunk501517 ? Chunk388032.intl.string(Chunk388032.t.aIz1oa) : Chunk388032.intl.string(Chunk388032.t.MWMcg4),
        confirmText: Chunk388032.intl.string(Chunk388032.t.oyYWHB),
        cancelText: Chunk388032.intl.string(Chunk388032.t["ETE/oK"]),
        onConfirm: this.handleDelete
      }, Chunk726521), {
        children: N
      }))
    })
  }
  constructor(...e) {
    super(...e), N(this, "state", {
      report: false,
      resolveFlag: false
    }), N(this, "handleDelete", () => {
      let {
        report: e,
        resolveFlag: t
      } = this.state, {
        channel: n,
        message: r,
        moderatorReportData: i
      } = this.props, {
        moderatorReportChannelId: o,
        isFlagResolved: a
      } = null != i ? i : {};
      e ? (0, m.ak)(r, "message_delete_alert", () => d.Z.deleteMessage(n.id, r.id).then(() => {
        if (null != o) {
          var e, n;
          t && !a && E.Z.resolveFlag(o), null == (e = (n = this.props).onClose) || e.call(n)
        }
      })) : d.Z.deleteMessage(n.id, r.id).then(() => {
        if (null != o) {
          var e, n;
          t && !a && E.Z.resolveFlag(o), null == (e = (n = this.props).onClose) || e.call(n)
        }
      })
    }), N(this, "handleDeleteMana", () => {
      var e, t;
      this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t)
    }), N(this, "handleToggleReport", e => {
      this.setState({
        report: e
      })
    }), N(this, "handleToggleResolveFlag", e => {
      this.setState({
        resolveFlag: e
      })
    })
  }
}
let k = {
  confirmPin: L,
  confirmUnpin: x,
  confirmDelete: function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : true;
    (0, c.h7j)(o => (0, r.jsx)(M, C({
      channel: e,
      message: t,
      showContextMenuHint: n,
      moderatorReportData: i
    }, o)))
  },
  confirmEdit: function(e, t, n) {
    (0, c.h7j)(i => (0, r.jsx)(c.ConfirmModal, P(C({
      header: T.intl.string(T.t.aIz1oa),
      confirmText: T.intl.string(T.t["cY+Ooa"]),
      cancelText: T.intl.string(T.t["ETE/oK"]),
      confirmButtonColor: l.zx.Colors.BRAND,
      onConfirm: () => d.Z.editMessage(e, t, n)
    }, i), {
      children: (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        className: A.spacing,
        children: T.intl.string(T.t.grBcMz)
      })
    })))
  }
}