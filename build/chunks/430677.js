/** Chunk was on 3205 **/
"use strict";
n.d(t, {
  Z: () => v
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(399606),
  o = n(481060),
  c = n(471445),
  d = n(603211),
  u = n(307707),
  m = n(734893),
  g = n(216701),
  p = n(592125),
  h = n(430824),
  f = n(768581),
  b = n(388032),
  x = n(668813);

function j(e) {
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

function N(e, t) {
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
let v = function(e) {
  var t, s, v, _, O;
  let {
    guildId: y,
    action: C,
    actionIndex: I,
    onChange: E,
    onDelete: S,
    onDragStart: T,
    onDragComplete: P,
    onDragReset: w
  } = e, R = (0, l.e7)([p.Z], () => p.Z.getChannel(C.channelId)), Z = (0, l.e7)([h.Z], () => h.Z.getGuild(y)), {
    customEmoji: D,
    unicodeEmoji: k
  } = (0, u.Z)(null === (t = C.emoji) || void 0 === t ? void 0 : t.id, null === (s = C.emoji) || void 0 === s ? void 0 : s.name), A = null == C.emoji || null != D || null != k, W = f.ZP.getNewMemberActionIconURL({
    channelId: C.channelId,
    icon: C.icon
  }), L = null;
  null != R && (0, m.kb)(R) ? A || (L = b.NW.string(b.t.wAkIZW)) : L = b.NW.string(b.t.CbTEKC);
  let {
    drag: M,
    dragSourcePosition: G,
    drop: U,
    setIsDraggable: B
  } = (0, d.Z)({
    type: "NEW_MEMBER_ACTION",
    index: I,
    optionId: C.channelId,
    onDragStart: T,
    onDragComplete: P,
    onDragReset: w
  }), F = i.useCallback(() => {
    if (null != y) return (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14653").then(n.bind(n, 380716));
      return t => (0, r.jsx)(e, N(j({}, t), {
        guildId: y,
        action: C,
        onSave: (e, t, n) => E(I, e, t, n),
        onDelete: () => S(I)
      }))
    })
  }, [y, C, I, E, S]);
  if (null == R || null == Z) return null;
  let z = null !== (O = (0, c.KS)(R)) && void 0 !== O ? O : o.VL1;
  return (0, r.jsxs)("div", {
    className: x.actionItemContainer,
    children: [(0, r.jsxs)("div", {
      className: a()(x.actionItem, {
        [x.dropIndicatorBefore]: null != G && I < G,
        [x.dropIndicatorAfter]: null != G && I > G,
        [x.actionItemError]: null != L
      }),
      ref: e => M(U(e)),
      children: [(0, r.jsx)("div", {
        className: x.dragContainer,
        onMouseEnter: () => B(!0),
        onMouseLeave: () => B(!1),
        children: (0, r.jsx)(o.Vni, {
          size: "xs",
          color: "currentColor",
          className: x.dragIcon
        })
      }), null != W ? (0, r.jsx)("div", {
        className: x.iconWrapper,
        children: (0, r.jsx)("img", {
          src: W,
          className: x.icon,
          width: 48,
          height: 48,
          alt: "",
          "aria-hidden": !0
        })
      }) : (0, r.jsx)("div", {
        className: x.actionItemEmojiWrapper,
        children: (0, r.jsx)(g.Z, {
          emojiId: null === (v = C.emoji) || void 0 === v ? void 0 : v.id,
          emojiName: null === (_ = C.emoji) || void 0 === _ ? void 0 : _.name,
          size: g.R.MEDIUM,
          defaultComponent: (0, r.jsx)(z, {})
        })
      }), (0, r.jsxs)("div", {
        className: x.actionItemText,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: C.title
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: b.NW.format(b.t.Ngk8Nj, {
            channelName: R.name
          })
        })]
      }), (0, r.jsx)(o.ua7, {
        text: b.NW.string(b.t.bt75u7),
        children: e => (0, r.jsxs)(o.zxk, N(j({}, e), {
          className: x.actionItemEditButton,
          innerClassName: x.actionItemEditButtonInner,
          size: o.zxk.Sizes.MIN,
          onClick: F,
          children: [(0, r.jsx)(o.vdY, {
            size: "md",
            color: "currentColor"
          }), (0, r.jsx)(o.nn4, {
            children: b.NW.string(b.t.bt75u7)
          })]
        }))
      })]
    }), null != L && (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: L
    })]
  })
}