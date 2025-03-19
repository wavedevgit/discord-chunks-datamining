/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => C
}), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
  s = n(481060),
  a = n(430824),
  l = n(723047),
  o = n(727843),
  c = n(290348),
  A = n(971792),
  d = n(861345),
  u = n(331146),
  g = n(798680),
  f = n(388032),
  m = n(174032);

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

function C() {
  let {
    editStateId: e,
    guildId: t
  } = (0, o.N)(), [C, b] = c.XZ(e, t), v = (0, A.Z)(t, e), {
    setCurrentTab: x
  } = (0, g.dw)(), N = () => x(g.ue.EMOJIS), j = (0, i.e7)([a.Z], () => a.Z.getGuild(t)), E = null == j ? void 0 : j.getMaxRoleSubscriptionEmojiSlots();

  function I(e) {
    null == C ? b(new Set(e)) : b(new Set([...C, ...e]))
  }

  function O(e) {
    let t = new Set(C);
    t.delete(e), b(t)
  }
  let y = (0, l.mY)();
  return (0, r.jsxs)(s.hjN, {
    title: f.NW.string(f.t.D0qeOz),
    disabled: y,
    children: [(0, r.jsxs)(s.R94, {
      type: s.R94.Types.DESCRIPTION,
      className: m.formDescription,
      disabled: y,
      children: [f.NW.format(f.t.zuwel5, {
        premiumEmojiMaximum: E
      }), (0, r.jsx)("br", {}), f.NW.format(f.t.sEkgBg, {
        handleTransitionToManageEmoji: N
      })]
    }), (0, r.jsx)(u.E, {
      tierEmojiIds: C,
      guildId: t,
      onRemoveEmoji: function(e) {
        e.roles.filter(e => e !== (null == v ? void 0 : v.id)).length > 0 ? O(e.id) : (0, s.ZDy)(async () => {
          let {
            default: t
          } = await n.e("59128").then(n.bind(n, 28564));
          return n => (0, r.jsx)(t, h(p({}, n), {
            onConfirmDelete: () => {
              O(e.id), n.onClose()
            }
          }))
        })
      }
    }), null != C && C.size > 0 ? (0, r.jsx)(s.LZC, {
      size: 8
    }) : null, (0, r.jsx)(d.s, {
      onClick: function() {
        (0, s.ZDy)(async () => {
          let {
            EmojiAddModal: e
          } = await n.e("21112").then(n.bind(n, 301160));
          return n => (0, r.jsx)(e, h(p({}, n), {
            guildId: t,
            initialTierEmojiIds: C,
            onSubmit: I,
            transitionToManageEmoji: () => {
              N(), n.onClose()
            }
          }))
        })
      },
      disabled: y,
      children: f.NW.string(f.t.ouOOV1)
    })]
  })
}