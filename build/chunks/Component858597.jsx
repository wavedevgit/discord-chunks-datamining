/** Chunk was on 89650 **/
/** chunk id: 858597, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk407383 = require("./407383.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk284198 = require("./284198.js");

function C(t) {
  let {
    children: e
  } = t;
  return (0, i.jsx)("div", {
    className: j.actionGroup,
    children: e
  })
}

function L(t) {
  let {
    title: e,
    subTitle: n,
    buttonText: s,
    variant: r = "secondary",
    onPress: l,
    disabled: a
  } = t;
  return (0, i.jsxs)("div", {
    className: j.actionRow,
    children: [(0, i.jsxs)("div", {
      className: j.actionButtonDetails,
      children: [(0, i.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: e
      }), (0, i.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: n
      })]
    }), (0, i.jsx)(c.Button, {
      size: "sm",
      variant: r,
      text: s,
      onClick: l,
      disabled: a
    })]
  })
}

function R(t) {
  let {
    title: e,
    subTitle: n,
    onPress: s
  } = t;
  return (0, i.jsxs)(c.P3F, {
    className: l()(j.actionRow, j.clickableActionRow),
    onClick: s,
    children: [(0, i.jsxs)("div", {
      className: j.actionButtonDetails,
      children: [(0, i.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: e
      }), null != n ? (0, i.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: n
      }) : null]
    }), (0, i.jsx)(c.Fbu, {
      size: "md",
      color: o.Z.colors.INTERACTIVE_TEXT_DEFAULT
    })]
  })
}
let f = function(t) {
  let {
    otherUserId: e,
    channelId: r,
    warningId: l,
    warningType: o,
    transitionToSlide: j
  } = t, f = (0, S.o)(), v = (0, S.Q)(), y = (0, E.q)(r), F = null != (0, g.M)(r), I = (0, a.e7)([_.Z], () => _.Z.isIgnored(e), [e]), M = (0, a.e7)([_.Z], () => _.Z.isBlocked(e), [e]), Z = s.useCallback(t => {
    (0, O.qc)({
      channelId: r,
      warningId: l,
      senderId: e,
      warningType: o,
      cta: t,
      isNudgeWarning: F
    })
  }, [r, l, e, o, F]), U = s.useCallback(() => {
    (0, c.Mr3)(N.X_), Z(O.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM)
  }, [Z]), Y = s.useCallback(() => {
    T.Z.unblockUser(e, {
      location: N.DL
    }), Z(O.NM.USER_SAFETY_TOOLS_UNBLOCK)
  }, [e, Z]), k = s.useCallback(() => {
    (0, c.Mr3)(N.X_), Z(O.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM)
  }, [Z]), P = s.useMemo(() => [{
    type: 0,
    title: p.intl.string(p.t.B7ZT06),
    subTitle: p.intl.string(p.t.fCfp49),
    buttonText: I ? p.intl.string(p.t["9e0wLn"]) : p.intl.string(p.t.B7ZT06),
    disabled: M,
    onPress: () => {
      I ? (T.Z.unignoreUser(e, N.cH, r), Z(O.NM.USER_SAFETY_TOOLS_UNIGNORE)) : (T.Z.ignoreUser(e, N.cH, r), Z(O.NM.USER_SAFETY_TOOLS_IGNORE))
    }
  }, {
    type: 0,
    title: p.intl.string(p.t.oDxaKy),
    subTitle: p.intl.string(p.t.Lj37az),
    buttonText: M ? p.intl.string(p.t.Hro40y) : p.intl.string(p.t.oDxaKy),
    variant: "primary",
    onPress: () => {
      M ? (Y(), x.Z.showUnblockSuccessToast(e, r)) : (0, c.ZDy)(async () => {
        let {
          default: t
        } = await n.e("41128").then(n.bind(n, 699783));
        return n => {
          let {
            transitionState: s,
            onClose: l
          } = n;
          return (0, i.jsx)(t, {
            transitionState: s,
            onBlock: U,
            onBlockAndReport: k,
            onCancel: () => {
              null == l || l(), Z(O.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL)
            },
            onClose: l,
            userId: e,
            channelId: r
          })
        }
      })
    }
  }, {
    type: 0,
    title: p.intl.string(p.t.X27yhD),
    subTitle: p.intl.string(p.t["0tydOa"]),
    buttonText: p.intl.string(p.t.X27yhD),
    onPress: () => {
      (0, c.Mr3)(N.X_), (0, u.wk)(y), Z(O.NM.USER_SAFETY_TOOLS_REPORT)
    }
  }], [I, M, Z, Y, U, k, e, r, y]), B = s.useMemo(() => {
    let t = {
        title: p.intl.string(p.t.ZSbbMJ),
        subTitle: p.intl.string(p.t.iNcsrW),
        buttonText: p.intl.string(p.t.rK4Gqv),
        onPress: () => {
          (0, d.Z)(N.EI), Z(O.NM.USER_SAFETY_TOOLS_CTL)
        }
      },
      e = {
        title: p.intl.string(p.t.ZSbbMJ),
        subTitle: p.intl.string(p.t.g5uwC5),
        buttonText: p.intl.string(p.t.rK4Gqv),
        onPress: () => {
          (0, d.Z)(N.n4), Z(O.NM.USER_SAFETY_TOOLS_NO_FILTR)
        }
      },
      n = {
        title: p.intl.string(p.t.ZSbbMJ),
        subTitle: p.intl.string(p.t.S9O1ZZ),
        buttonText: p.intl.string(p.t.rK4Gqv),
        onPress: () => {
          (0, d.Z)(N.$l), Z(O.NM.USER_SAFETY_TOOLS_THROUGHLINE)
        }
      };
    return [{
      type: 0,
      title: p.intl.string(p.t.syuaPI),
      subTitle: p.intl.string(p.t.LLBnNk),
      buttonText: p.intl.string(p.t.rzvzyZ),
      onPress: () => {
        (0, A.Z)({
          source: m.I.KEYBIND,
          onClose: c.pTH
        }), Z(O.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS)
      }
    }, {
      type: 1,
      title: p.intl.string(p.t["7LgVmt"]),
      subTitle: p.intl.string(p.t.pwoRjc),
      onPress: () => {
        j(h.O.SAFETY_TIPS), Z(O.NM.USER_SAFETY_TOOLS_SAFETY_TIPS)
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
    }, f ? t : v ? n : e)]
  }, [f, v, j, Z]), w = s.useMemo(() => [{
    type: 1,
    title: p.intl.string(p.t.otdt24),
    onPress: () => {
      j(h.O.ABOUT_SAFETY_ALERTS), Z(O.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS)
    }
  }], [j, Z]), D = t => {
    if (0 === t.type) {
      let {
        type: e,
        title: n,
        subTitle: s,
        buttonText: r,
        onPress: l,
        disabled: a,
        variant: o
      } = t;
      return (0, i.jsx)(L, {
        type: e,
        title: n,
        subTitle: s,
        buttonText: r,
        variant: o,
        onPress: l,
        disabled: a
      }, n)
    }
    if (1 === t.type) {
      let {
        type: e,
        title: n,
        subTitle: s,
        onPress: r
      } = t;
      return (0, i.jsx)(R, {
        type: e,
        title: n,
        subTitle: s,
        onPress: r
      }, n)
    }
    return null
  };
  return (0, i.jsxs)(b.Z, {
    children: [(0, i.jsx)(C, {
      children: P.map(t => D(t))
    }), (0, i.jsx)(C, {
      children: B.map(t => D(t))
    }), (0, i.jsx)(C, {
      children: w.map(t => D(t))
    })]
  })
}