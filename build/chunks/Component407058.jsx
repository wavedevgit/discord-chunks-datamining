/** Chunk was on 46717 **/
/** chunk id: 407058, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk49229 = require("./49229.js"),
  Chunk975807 = require("./975807.js"),
  Chunk928658 = require("./928658.js"),
  Chunk426190 = require("./426190.js"),
  Chunk662502 = require("./662502.js"),
  Chunk994500 = require("./994500.js"),
  Chunk192311 = require("./192311.js"),
  Chunk278941 = require("./278941.js"),
  Chunk674272 = require("./674272.jsx"),
  Chunk665909 = require("./665909.js"),
  Chunk788099 = require("./788099.jsx"),
  Chunk403403 = require("./403403.jsx"),
  Chunk327337 = require("./327337.js"),
  Chunk431804 = require("./431804.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk691428 = require("./691428.js");

function p(t) {
  let {
    children: e
  } = t;
  return (0, s.jsx)("div", {
    className: L.mH,
    children: e
  })
}

function N(t) {
  let {
    title: e,
    subTitle: n,
    buttonText: i,
    variant: l = "secondary",
    onPress: r,
    disabled: a
  } = t;
  return (0, s.jsxs)("div", {
    className: L.$l,
    children: [(0, s.jsxs)("div", {
      className: L.zk,
      children: [(0, s.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: e
      }), (0, s.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: n
      })]
    }), (0, s.jsx)(c.Button, {
      size: "sm",
      variant: l,
      text: i,
      onClick: r,
      disabled: a
    })]
  })
}

function R(t) {
  let {
    title: e,
    subTitle: n,
    onPress: i
  } = t;
  return (0, s.jsxs)(c.DUT, {
    className: r()(L.$l, L.lx),
    onClick: i,
    children: [(0, s.jsxs)("div", {
      className: L.zk,
      children: [(0, s.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: e
      }), null != n ? (0, s.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: n
      }) : null]
    }), (0, s.jsx)(c._BQ, {
      size: "md",
      color: o.A.colors.INTERACTIVE_TEXT_DEFAULT
    })]
  })
}
let y = function(t) {
  let {
    otherUserId: e,
    channelId: l,
    warningId: r,
    warningType: o,
    transitionToSlide: L
  } = t, y = (0, u.N)(), v = (0, u.z)(), I = (0, x.W)(l), f = null != (0, E.e)(l), U = (0, a.bG)([_.A], () => _.A.isIgnored(e), [e]), F = (0, a.bG)([_.A], () => _.A.isBlocked(e), [e]), Y = i.useCallback(t => {
    (0, m._$)({
      channelId: l,
      warningId: r,
      senderId: e,
      warningType: o,
      cta: t,
      isNudgeWarning: f
    })
  }, [l, r, e, o, f]), k = i.useCallback(() => {
    (0, c.OoC)(h.V), Y(m.Wm.USER_SAFETY_TOOLS_BLOCK_CONFIRM)
  }, [Y]), P = i.useCallback(() => {
    T.A.unblockUser(e, {
      location: h.Ht
    }), Y(m.Wm.USER_SAFETY_TOOLS_UNBLOCK)
  }, [e, Y]), W = i.useCallback(() => {
    (0, c.OoC)(h.V), Y(m.Wm.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM)
  }, [Y]), B = i.useMemo(() => [{
    type: 0,
    title: C.intl.string(C.t.B7ZT06),
    subTitle: C.intl.string(C.t.fCfp49),
    buttonText: U ? C.intl.string(C.t["9e0wLn"]) : C.intl.string(C.t.B7ZT06),
    disabled: F,
    onPress: () => {
      U ? (T.A.unignoreUser(e, h.cb, l), Y(m.Wm.USER_SAFETY_TOOLS_UNIGNORE)) : (T.A.ignoreUser(e, h.cb, l), Y(m.Wm.USER_SAFETY_TOOLS_IGNORE))
    }
  }, {
    type: 0,
    title: C.intl.string(C.t.oDxaKy),
    subTitle: C.intl.string(C.t.Lj37az),
    buttonText: F ? C.intl.string(C.t.Hro40y) : C.intl.string(C.t.oDxaKy),
    variant: "primary",
    onPress: () => {
      F ? (P(), A.A.showUnblockSuccessToast(e, l)) : (0, c.mMO)(async () => {
        let {
          default: t
        } = await n.e("62557").then(n.bind(n, 371185));
        return n => {
          let {
            transitionState: i,
            onClose: r
          } = n;
          return (0, s.jsx)(t, {
            transitionState: i,
            onBlock: k,
            onBlockAndReport: W,
            onCancel: () => {
              null == r || r(), Y(m.Wm.USER_SAFETY_TOOLS_BLOCK_CANCEL)
            },
            onClose: r,
            userId: e,
            channelId: l
          })
        }
      })
    }
  }, {
    type: 0,
    title: C.intl.string(C.t.X27yhD),
    subTitle: C.intl.string(C.t["0tydOa"]),
    buttonText: C.intl.string(C.t.X27yhD),
    onPress: () => {
      (0, c.OoC)(h.V), (0, S.jJ)(I), Y(m.Wm.USER_SAFETY_TOOLS_REPORT)
    }
  }], [U, F, Y, P, k, W, e, l, I]), M = i.useMemo(() => {
    let t = {
        title: C.intl.string(C.t.ZSbbMJ),
        subTitle: C.intl.string(C.t.iNcsrW),
        buttonText: C.intl.string(C.t.rK4Gqv),
        onPress: () => {
          (0, d.A)(h.x7), Y(m.Wm.USER_SAFETY_TOOLS_CTL)
        }
      },
      e = {
        title: C.intl.string(C.t.ZSbbMJ),
        subTitle: C.intl.string(C.t.g5uwC5),
        buttonText: C.intl.string(C.t.rK4Gqv),
        onPress: () => {
          (0, d.A)(h.jR), Y(m.Wm.USER_SAFETY_TOOLS_NO_FILTR)
        }
      },
      n = {
        title: C.intl.string(C.t.ZSbbMJ),
        subTitle: C.intl.string(C.t.S9O1ZZ),
        buttonText: C.intl.string(C.t.rK4Gqv),
        onPress: () => {
          (0, d.A)(h.CL), Y(m.Wm.USER_SAFETY_TOOLS_THROUGHLINE)
        }
      };
    return [{
      type: 0,
      title: C.intl.string(C.t.syuaPI),
      subTitle: C.intl.string(C.t.LLBnNk),
      buttonText: C.intl.string(C.t.rzvzyZ),
      onPress: () => {
        (0, O.A)({
          source: j.y.KEYBIND,
          onClose: c.s7G
        }), Y(m.Wm.USER_SAFETY_TOOLS_VIBING_WUMPUS)
      }
    }, {
      type: 1,
      title: C.intl.string(C.t["7LgVmt"]),
      subTitle: C.intl.string(C.t.pwoRjc),
      onPress: () => {
        L(g.W.SAFETY_TIPS), Y(m.Wm.USER_SAFETY_TOOLS_SAFETY_TIPS)
      }
    }, function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          s = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), s.forEach(function(e) {
          var s;
          s = n[e], e in t ? Object.defineProperty(t, e, {
            value: s,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = s
        })
      }
      return t
    }({
      type: 0
    }, y ? t : v ? n : e)]
  }, [y, v, L, Y]), D = i.useMemo(() => [{
    type: 1,
    title: C.intl.string(C.t.otdt24),
    onPress: () => {
      L(g.W.ABOUT_SAFETY_ALERTS), Y(m.Wm.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS)
    }
  }], [L, Y]), w = t => {
    if (0 === t.type) {
      let {
        type: e,
        title: n,
        subTitle: i,
        buttonText: l,
        onPress: r,
        disabled: a,
        variant: o
      } = t;
      return (0, s.jsx)(N, {
        type: e,
        title: n,
        subTitle: i,
        buttonText: l,
        variant: o,
        onPress: r,
        disabled: a
      }, n)
    }
    if (1 === t.type) {
      let {
        type: e,
        title: n,
        subTitle: i,
        onPress: l
      } = t;
      return (0, s.jsx)(R, {
        type: e,
        title: n,
        subTitle: i,
        onPress: l
      }, n)
    }
    return null
  };
  return (0, s.jsxs)(b.A, {
    children: [(0, s.jsx)(p, {
      children: B.map(t => w(t))
    }), (0, s.jsx)(p, {
      children: M.map(t => w(t))
    }), (0, s.jsx)(p, {
      children: D.map(t => w(t))
    })]
  })
}