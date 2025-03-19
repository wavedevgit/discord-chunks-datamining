/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => x
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(399606),
  o = n(481060),
  c = n(471445),
  A = n(603211),
  d = n(307707),
  u = n(734893),
  g = n(216701),
  f = n(592125),
  m = n(430824),
  p = n(768581),
  h = n(388032),
  C = n(668813);

function b(e) {
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

function v(e, t) {
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
let x = function(e) {
  var t, s, x, N, j;
  let {
    guildId: E,
    action: I,
    actionIndex: O,
    onChange: y,
    onDelete: w,
    onDragStart: P,
    onDragComplete: B,
    onDragReset: D
  } = e, T = (0, l.e7)([f.Z], () => f.Z.getChannel(I.channelId)), S = (0, l.e7)([m.Z], () => m.Z.getGuild(E)), {
    customEmoji: L,
    unicodeEmoji: R
  } = (0, d.Z)(null === (t = I.emoji) || void 0 === t ? void 0 : t.id, null === (s = I.emoji) || void 0 === s ? void 0 : s.name), Q = null == I.emoji || null != L || null != R, Z = p.ZP.getNewMemberActionIconURL({
    channelId: I.channelId,
    icon: I.icon
  }), W = null;
  null != T && (0, u.kb)(T) ? Q || (W = h.NW.string(h.t.wAkIZW)) : W = h.NW.string(h.t.CbTEKC);
  let {
    drag: k,
    dragSourcePosition: M,
    drop: _,
    setIsDraggable: G
  } = (0, A.Z)({
    type: "NEW_MEMBER_ACTION",
    index: O,
    optionId: I.channelId,
    onDragStart: P,
    onDragComplete: B,
    onDragReset: D
  }), F = i.useCallback(() => {
    if (null != E) return (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14653").then(n.bind(n, 380716));
      return t => (0, r.jsx)(e, v(b({}, t), {
        guildId: E,
        action: I,
        onSave: (e, t, n) => y(O, e, t, n),
        onDelete: () => w(O)
      }))
    })
  }, [E, I, O, y, w]);
  if (null == T || null == S) return null;
  let U = null !== (j = (0, c.KS)(T)) && void 0 !== j ? j : o.VL1;
  return (0, r.jsxs)("div", {
    className: C.actionItemContainer,
    children: [(0, r.jsxs)("div", {
      className: a()(C.actionItem, {
        [C.dropIndicatorBefore]: null != M && O < M,
        [C.dropIndicatorAfter]: null != M && O > M,
        [C.actionItemError]: null != W
      }),
      ref: e => k(_(e)),
      children: [(0, r.jsx)("div", {
        className: C.dragContainer,
        onMouseEnter: () => G(!0),
        onMouseLeave: () => G(!1),
        children: (0, r.jsx)(o.Vni, {
          size: "xs",
          color: "currentColor",
          className: C.dragIcon
        })
      }), null != Z ? (0, r.jsx)("div", {
        className: C.iconWrapper,
        children: (0, r.jsx)("img", {
          src: Z,
          className: C.icon,
          width: 48,
          height: 48,
          alt: "",
          "aria-hidden": !0
        })
      }) : (0, r.jsx)("div", {
        className: C.actionItemEmojiWrapper,
        children: (0, r.jsx)(g.Z, {
          emojiId: null === (x = I.emoji) || void 0 === x ? void 0 : x.id,
          emojiName: null === (N = I.emoji) || void 0 === N ? void 0 : N.name,
          size: g.R.MEDIUM,
          defaultComponent: (0, r.jsx)(U, {})
        })
      }), (0, r.jsxs)("div", {
        className: C.actionItemText,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: I.title
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: h.NW.format(h.t.Ngk8Nj, {
            channelName: T.name
          })
        })]
      }), (0, r.jsx)(o.ua7, {
        text: h.NW.string(h.t.bt75u7),
        children: e => (0, r.jsxs)(o.zxk, v(b({}, e), {
          className: C.actionItemEditButton,
          innerClassName: C.actionItemEditButtonInner,
          size: o.zxk.Sizes.MIN,
          onClick: F,
          children: [(0, r.jsx)(o.vdY, {
            size: "md",
            color: "currentColor"
          }), (0, r.jsx)(o.nn4, {
            children: h.NW.string(h.t.bt75u7)
          })]
        }))
      })]
    }), null != W && (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: W
    })]
  })
}