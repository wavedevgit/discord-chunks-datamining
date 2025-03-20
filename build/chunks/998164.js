/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => b
});
var r = n(200651),
  i = n(192379),
  s = n(399606),
  a = n(481060),
  l = n(710344),
  o = n(734893),
  A = n(8426),
  c = n(969632),
  d = n(430677),
  u = n(388032),
  g = n(668813);

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = [];

function h() {
  return (0, r.jsx)("div", {
    className: g.actionItemContainer,
    children: (0, r.jsxs)("div", {
      className: g.actionItem,
      children: [(0, r.jsx)("div", {
        className: g.actionItemEmojiWrapper,
        children: (0, r.jsx)(a.snC, {
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 22
        })
      }), (0, r.jsx)("div", {
        className: g.actionItemText,
        children: (0, r.jsx)(a.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: u.NW.string(u.t["K/i3iY"])
        })
      })]
    })
  })
}

function C(e) {
  let {
    guildId: t,
    onAddAction: s
  } = e, l = i.useCallback(() => {
    if (null != t) return (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14653").then(n.bind(n, 380716));
      return n => (0, r.jsx)(e, m(f({}, n), {
        guildId: t,
        onSave: s
      }))
    })
  }, [t, s]);
  return (0, r.jsxs)(a.P3F, {
    className: g.addActionItem,
    onClick: l,
    children: [(0, r.jsx)(a.oFk, {
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "none",
      children: u.NW.string(u.t.qce3EB)
    })]
  })
}
let b = function(e) {
  let {
    guildId: t
  } = e, n = (0, s.Wu)([c.Z], () => {
    var e;
    return null !== (e = c.Z.getSettings().newMemberActions) && void 0 !== e ? e : p
  }), a = i.useCallback((e, n) => {
    (0, A.vR)(e);
    let r = c.Z.getSettings();
    if (null == r) return;
    let {
      channelId: i
    } = e;
    (0, A.oo)(t, r, !0).then(() => {
      null != n && (0, A.ad)(t, i, n, !0)
    })
  }, [t]), u = i.useCallback((e, r, i, s) => {
    var a;
    let l = null === (a = n[e]) || void 0 === a ? void 0 : a.channelId;
    if (null == l) return;
    let o = c.Z.getSettings();
    null != o && ((0, A.el)(l, r), (0, A.oo)(t, o, !0).then(() => {
      (0, A.ad)(t, l, i, s)
    }))
  }, [n, t]), b = i.useCallback(e => {
    var t;
    let r = null === (t = n[e]) || void 0 === t ? void 0 : t.channelId;
    null != r && (0, A.Hr)(r)
  }, [n]), v = n.map(e => m(f({}, e), {
    id: e.channelId
  })), x = i.useCallback(e => {
    (0, A.hS)(e);
    let n = c.Z.getSettings();
    null != n && (0, A.oo)(t, n, !0)
  }, [t]), {
    handleDragStart: N,
    handleDragReset: j,
    handleDragComplete: E
  } = (0, l.Z)(v, x);
  return (0, r.jsxs)("div", {
    className: g.section,
    children: [n.map((e, n) => (0, r.jsx)(d.Z, {
      guildId: t,
      action: e,
      actionIndex: n,
      onChange: u,
      onDelete: b,
      onDragStart: N,
      onDragReset: j,
      onDragComplete: E
    }, e.channelId)), (0, r.jsx)(h, {}), n.length < o.O9 && (0, r.jsx)(C, {
      guildId: t,
      onAddAction: a
    })]
  })
}