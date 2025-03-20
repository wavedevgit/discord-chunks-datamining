/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => C
}), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(603211),
  A = n(734893),
  c = n(592125),
  d = n(768581),
  u = n(8426),
  g = n(969632),
  f = n(388032),
  m = n(668813);

function p(e) {
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

function h(e, t) {
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
let C = function(e) {
  let {
    guildId: t,
    resourceChannel: s,
    index: C,
    onDragComplete: b,
    onDragStart: v,
    onDragReset: x
  } = e, {
    title: N,
    channelId: j,
    description: E
  } = s, I = c.Z.getChannel(j), O = null;
  null != I && (0, A.k3)(I) || (O = f.NW.string(f.t.kTdL8f));
  let y = null == E || 0 === E.length,
    w = d.ZP.getResourceChannelIconURL({
      channelId: s.channelId,
      icon: s.icon
    }),
    {
      drag: P,
      dragSourcePosition: B,
      drop: D,
      setIsDraggable: T
    } = (0, o.Z)({
      type: "RESOURCE_CHANNEL",
      optionId: s.channelId,
      index: C,
      onDragStart: v,
      onDragComplete: b,
      onDragReset: x
    }),
    S = i.useCallback(e => {
      (0, u.XG)(s.channelId, e)
    }, [s.channelId]),
    L = i.useCallback((e, n) => {
      let r = g.Z.getSettings();
      null != r && ((0, u.XG)(s.channelId, e), (0, u.oo)(t, r).then(() => {
        (0, u.mM)(t, e.channelId, n)
      }))
    }, [t, s]),
    R = i.useCallback(() => (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("84725").then(n.bind(n, 462499));
      return n => (0, r.jsx)(e, h(p({}, n), {
        guildId: t,
        resourceChannel: s,
        onSave: S,
        onDelete: () => (0, u.Hz)(s.channelId),
        onIconUpload: L
      }))
    }), [t, s, S, L]);
  return null == I ? null : (0, r.jsxs)("div", {
    className: m.resourceChannelContainer,
    children: [(0, r.jsxs)("div", {
      className: a()(m.resourceChannel, {
        [m.dropIndicatorBefore]: null != B && C < B,
        [m.dropIndicatorAfter]: null != B && C > B,
        [m.resourceChannelError]: null != O
      }),
      ref: e => P(D(e)),
      children: [(0, r.jsx)("div", {
        className: m.dragContainer,
        onMouseEnter: () => T(!0),
        onMouseLeave: () => T(!1),
        children: (0, r.jsx)(l.Vni, {
          size: "xs",
          color: "currentColor",
          className: m.dragIcon
        })
      }), null != w && (0, r.jsx)("div", {
        className: m.iconWrapper,
        children: (0, r.jsx)("img", {
          src: w,
          className: m.icon,
          width: 32,
          height: 32,
          alt: "",
          "aria-hidden": !0
        })
      }), (0, r.jsxs)("div", {
        className: m.resourceChannelContent,
        children: [(0, r.jsx)(l.Text, {
          className: m.resourceChannelTitle,
          variant: "text-md/semibold",
          color: "header-primary",
          children: N
        }), !y && (0, r.jsx)(l.Text, {
          className: m.resourceChannelDescription,
          variant: "text-xs/medium",
          color: "text-muted",
          lineClamp: 1,
          children: E
        })]
      }), (0, r.jsx)(l.ua7, {
        text: f.NW.string(f.t.bt75u7),
        children: e => (0, r.jsxs)(l.zxk, h(p({}, e), {
          className: m.resourceChannelEditButton,
          innerClassName: m.resourceChannelEditButtonInner,
          size: l.zxk.Sizes.MIN,
          onClick: R,
          children: [(0, r.jsx)(l.vdY, {
            size: "md",
            color: "currentColor"
          }), (0, r.jsx)(l.nn4, {
            children: f.NW.string(f.t.bt75u7)
          })]
        }))
      })]
    }), null != O && (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: O
    })]
  })
}