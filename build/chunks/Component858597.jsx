/** Chunk was on 89650 **/
/** chunk id: 858597, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk782568 = require("./782568.js"),
  Chunk726521 = require("./726521.js"),
  Chunk485664 = require("./485664.js"),
  Chunk681678 = require("./681678.js"),
  Chunk699516 = require("./699516.js"),
  Chunk991981 = require("./991981.js"),
  Chunk367408 = require("./367408.js"),
  Chunk423932 = require("./423932.jsx"),
  Chunk473092 = require("./473092.js"),
  Chunk611446 = require("./611446.jsx"),
  Chunk993750 = require("./993750.jsx"),
  Chunk134612 = require("./134612.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk3492 = require("./3492.js");

function N(t) {
  let {
    children: e
  } = t;
  return (0, i.jsx)("div", {
    className: j.actionGroup,
    children: e
  })
}

function y(t) {
  let {
    title: e,
    subTitle: n,
    buttonText: r,
    variant: s = "secondary",
    onPress: l,
    disabled: a
  } = t;
  return (0, i.jsxs)("div", {
    className: j.actionRow,
    children: [(0, i.jsxs)("div", {
      className: j.actionButtonDetails,
      children: [(0, i.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: e
      }), (0, i.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: n
      })]
    }), (0, i.jsx)(c.zxk, {
      size: "sm",
      variant: s,
      text: r,
      onClick: l,
      disabled: a
    })]
  })
}

function f(t) {
  let {
    title: e,
    subTitle: n,
    onPress: r
  } = t;
  return (0, i.jsxs)(c.P3F, {
    className: l()(j.actionRow, j.clickableActionRow),
    onClick: r,
    children: [(0, i.jsxs)("div", {
      className: j.actionButtonDetails,
      children: [(0, i.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: e
      }), null != n ? (0, i.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: n
      }) : null]
    }), (0, i.jsx)(c.Fbu, {
      size: "md",
      color: o.Z.colors.INTERACTIVE_NORMAL
    })]
  })
}
let C = function(t) {
  let {
    otherUserId: e,
    channelId: s,
    warningId: l,
    warningType: o,
    transitionToSlide: j
  } = t, C = (0, S.o)(), L = (0, S.Q)(), R = (0, O.q)(s), v = null != (0, b.M)(s), F = (0, a.e7)([_.Z], () => _.Z.isIgnored(e), [e]), M = (0, a.e7)([_.Z], () => _.Z.isBlocked(e), [e]), Z = r.useCallback(t => {
    (0, g.qc)({
      channelId: s,
      warningId: l,
      senderId: e,
      warningType: o,
      cta: t,
      isNudgeWarning: v
    })
  }, [s, l, e, o, v]), I = r.useCallback(() => {
    (0, c.Mr3)(A.X_), Z(g.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM)
  }, [Z]), k = r.useCallback(() => {
    u.Z.unblockUser(e, {
      location: A.DL
    }), Z(g.NM.USER_SAFETY_TOOLS_UNBLOCK)
  }, [e, Z]), U = r.useCallback(() => {
    (0, c.Mr3)(A.X_), Z(g.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM)
  }, [Z]), P = r.useMemo(() => [{
    type: 0,
    title: m.intl.string(m.t.B7ZT09),
    subTitle: m.intl.string(m.t["fCfp4+"]),
    buttonText: F ? m.intl.string(m.t["9e0wLi"]) : m.intl.string(m.t.B7ZT09),
    disabled: M,
    onPress: () => {
      F ? (u.Z.unignoreUser(e, A.cH, s), Z(g.NM.USER_SAFETY_TOOLS_UNIGNORE)) : (u.Z.ignoreUser(e, A.cH, s), Z(g.NM.USER_SAFETY_TOOLS_IGNORE))
    }
  }, {
    type: 0,
    title: m.intl.string(m.t.oDxaKy),
    subTitle: m.intl.string(m.t.Lj37a2),
    buttonText: M ? m.intl.string(m.t.Hro409) : m.intl.string(m.t.oDxaKy),
    variant: "primary",
    onPress: () => {
      M ? (k(), x.Z.showUnblockSuccessToast(e, s)) : (0, c.ZDy)(async () => {
        let {
          default: t
        } = await n.e("41128").then(n.bind(n, 699783));
        return n => {
          let {
            transitionState: r,
            onClose: l
          } = n;
          return (0, i.jsx)(t, {
            transitionState: r,
            onBlock: I,
            onBlockAndReport: U,
            onCancel: () => {
              null == l || l(), Z(g.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL)
            },
            onClose: l,
            userId: e,
            channelId: s
          })
        }
      })
    }
  }, {
    type: 0,
    title: m.intl.string(m.t.X27yhI),
    subTitle: m.intl.string(m.t["0tydOT"]),
    buttonText: m.intl.string(m.t.X27yhI),
    onPress: () => {
      (0, c.Mr3)(A.X_), (0, T.wk)(R), Z(g.NM.USER_SAFETY_TOOLS_REPORT)
    }
  }], [F, M, Z, k, I, U, e, s, R]), Y = r.useMemo(() => {
    let t = {
        title: m.intl.string(m.t.ZSbbMD),
        subTitle: m.intl.string(m.t.iNcsra),
        buttonText: m.intl.string(m.t.rK4Gqq),
        onPress: () => {
          (0, d.Z)(A.EI), Z(g.NM.USER_SAFETY_TOOLS_CTL)
        }
      },
      e = {
        title: m.intl.string(m.t.ZSbbMD),
        subTitle: m.intl.string(m.t.g5uwCw),
        buttonText: m.intl.string(m.t.rK4Gqq),
        onPress: () => {
          (0, d.Z)(A.n4), Z(g.NM.USER_SAFETY_TOOLS_NO_FILTR)
        }
      },
      n = {
        title: m.intl.string(m.t.ZSbbMD),
        subTitle: m.intl.string(m.t.S9O1ZW),
        buttonText: m.intl.string(m.t.rK4Gqq),
        onPress: () => {
          (0, d.Z)(A.$l), Z(g.NM.USER_SAFETY_TOOLS_THROUGHLINE)
        }
      };
    return [{
      type: 0,
      title: m.intl.string(m.t.syuaPD),
      subTitle: m.intl.string(m.t.LLBnNj),
      buttonText: m.intl.string(m.t.rzvzyc),
      onPress: () => {
        (0, E.Z)(c.pTH), Z(g.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS)
      }
    }, {
      type: 1,
      title: m.intl.string(m.t["7LgVmp"]),
      subTitle: m.intl.string(m.t.pwoRjY),
      onPress: () => {
        j(h.O.SAFETY_TIPS), Z(g.NM.USER_SAFETY_TOOLS_SAFETY_TIPS)
      }
    }, function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), i.forEach(function(e) {
          var i;
          i = n[e], e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = i
        })
      }
      return t
    }({
      type: 0
    }, C ? t : L ? n : e)]
  }, [C, L, j, Z]), w = r.useMemo(() => [{
    type: 1,
    title: m.intl.string(m.t.otdt29),
    onPress: () => {
      j(h.O.ABOUT_SAFETY_ALERTS), Z(g.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS)
    }
  }], [j, Z]), B = t => {
    if (0 === t.type) {
      let {
        type: e,
        title: n,
        subTitle: r,
        buttonText: s,
        onPress: l,
        disabled: a,
        variant: o
      } = t;
      return (0, i.jsx)(y, {
        type: e,
        title: n,
        subTitle: r,
        buttonText: s,
        variant: o,
        onPress: l,
        disabled: a
      }, n)
    }
    if (1 === t.type) {
      let {
        type: e,
        title: n,
        subTitle: r,
        onPress: s
      } = t;
      return (0, i.jsx)(f, {
        type: e,
        title: n,
        subTitle: r,
        onPress: s
      }, n)
    }
    return null
  };
  return (0, i.jsxs)(p.Z, {
    children: [(0, i.jsx)(N, {
      children: P.map(t => B(t))
    }), (0, i.jsx)(N, {
      children: Y.map(t => B(t))
    }), (0, i.jsx)(N, {
      children: w.map(t => B(t))
    })]
  })
}