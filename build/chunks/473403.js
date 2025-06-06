/** Chunk was on 13368 **/
n.d(t, {
  ZP: () => Z,
  _W: () => L,
  ge: () => x,
  je: () => j
});
var r = n(255367),
  i = n(73800),
  o = n(120356),
  a = n.n(o);
if (12633 == n.j) var l = n(91192);
var c = n(442837),
  u = n(481060),
  s = n(43267),
  d = n(933557),
  _ = n(471445),
  f = n(111028),
  p = n(727429),
  m = n(810123),
  b = n(690221),
  g = n(430824),
  h = n(158776),
  v = n(111583),
  I = n(594174),
  y = n(998502),
  E = n(981631),
  S = n(490897),
  O = n(915887),
  C = n(768107);

function P(e) {
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

function A(e, t) {
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
let N = {
  SELECTED: C.modeSelected,
  CONNECTED: C.modeConnected,
  UNREAD_IMPORTANT: C.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: C.modeUnreadLessImportant,
  MUTED: C.modeMuted,
  LOCKED: C.modeLocked
};

function T(e) {
  e.preventDefault(), e.stopPropagation()
}
let w = y.ZP.getEnableHardwareAcceleration() ? u.Xo$ : u.qEK;

function x(e) {
  let {
    channel: t,
    size: n = u.EFr.SIZE_20
  } = e;
  return (0, r.jsx)(w, {
    src: (0, s.x)(t),
    "aria-hidden": !0,
    size: n
  })
}

function j(e) {
  let {
    channel: t,
    size: n = u.EFr.SIZE_20
  } = e, i = (0, c.e7)([I.default], () => I.default.getUser(null == t ? void 0 : t.recipients[0])), o = (0, c.e7)([v.Z], () => !(null == i || null == t || t.isMultiUserDM()) && null != v.Z.getTypingUsers(null == t ? void 0 : t.id)[null == i ? void 0 : i.id]), {
    status: a,
    isMobile: l
  } = (0, c.cj)([h.Z], () => null == i || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: !1
  } : {
    status: h.Z.getStatus(i.id),
    isMobile: h.Z.isMobileOnline(i.id)
  });
  return (0, r.jsx)(w, {
    size: n,
    src: null == i ? void 0 : i.getAvatarURL(void 0, 40),
    status: a,
    isMobile: l,
    isTyping: o,
    "aria-label": null == i ? void 0 : i.username,
    statusTooltip: !0
  })
}
let L = e => {
    let {
      className: t,
      containerClassName: n,
      channel: i,
      locked: o,
      hasActiveThreads: l,
      withGuildIcon: s
    } = e, d = (0, c.e7)([g.Z], () => g.Z.getGuild(i.guild_id), [i.guild_id]), f = i.type === E.d4z.DM || i.type === E.d4z.GROUP_DM, p = null;
    if (s && null != d && !f) p = (0, r.jsx)(m.Z, {
      size: m.E.SMALL_32,
      className: C.iconContainerWithGuildIcon,
      iconClassName: C.iconWithGuildIcon,
      channel: i,
      guild: d,
      locked: o,
      hasActiveThreads: l
    });
    else {
      let e = function(e, t, n) {
        switch (e.type) {
          case E.d4z.DM:
            return function() {
              return (0, r.jsx)(j, {
                channel: e
              })
            };
          case E.d4z.GROUP_DM:
            return function() {
              return (0, r.jsx)(x, {
                channel: e
              })
            };
          default:
            return (0, _.KS)(e, t, n)
        }
      }(i, d, {
        locked: o,
        hasActiveThreads: l
      });
      if (null == e) return null;
      p = (0, r.jsx)(e, {
        color: "currentColor",
        className: a()(C.icon, t)
      })
    }
    let b = s ? null == d ? void 0 : d.name : (0, _.bT)(i, d, o, l),
      h = s && null != d ? "".concat(d.name, " - ").concat(b, " icon") : "".concat(b, " icon");
    return (0, r.jsx)(u.ua7, {
      text: b,
      delay: 500,
      children: e => (0, r.jsx)("div", A(P({}, e), {
        role: "img",
        "aria-label": h,
        className: a()(C.iconContainer, n),
        children: p
      }))
    })
  },
  Z = 12633 == n.j ? i.forwardRef(function(e, t) {
    var n;
    let {
      channel: o,
      name: c,
      muted: s,
      selected: _,
      connected: m,
      unread: g,
      locked: h,
      hasActiveThreads: v,
      onClick: I,
      onMouseDown: y,
      onMouseUp: w,
      onContextMenu: x,
      connectDragPreview: j,
      className: Z,
      iconClassName: R,
      subtitle: k,
      subtitleColor: D,
      channel: {
        type: G
      },
      onMouseEnter: B,
      onMouseLeave: U,
      "aria-label": M,
      children: F,
      guild: W,
      channelTypeOverride: H,
      forceInteractable: V,
      mentionCount: Q,
      resolvedUnreadSetting: z,
      isFavoriteSuggestion: q,
      withGuildIcon: Y,
      hasActiveEvent: K = !1
    } = e, X = z === S.i.ALL_MESSAGES || null != Q && Q > 0, J = (0, l.JA)(o.id), {
      role: $
    } = J, ee = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(J, ["role"]), et = i.useRef(null), en = i.useRef(null), er = (0, p.Z)(o), ei = E.Z5c.CHANNEL(er, o.id), eo = (0, d.ZP)(o), ea = o.isGuildVocal(), el = (0, r.jsx)("div", {
      className: a()({
        [C.favoritesSuggestion]: q
      }),
      ref: en,
      children: (0, r.jsxs)(b.Z, A(P({
        role: ea && !m ? "button" : "link",
        href: ea ? void 0 : ei,
        target: "_blank",
        ref: et,
        className: C.link,
        onClick: () => null == I ? void 0 : I(o)
      }, ee), {
        "aria-label": M,
        focusProps: {
          enabled: !1
        },
        children: [(0, r.jsxs)("div", {
          className: C.linkTop,
          children: [(0, r.jsx)(L, {
            className: R,
            channel: o,
            guild: W,
            hasActiveThreads: v,
            locked: h,
            withGuildIcon: Y
          }), (0, r.jsx)(f.Z, {
            className: a()(C.name, {
              [C.activeEvent]: K
            }),
            "aria-hidden": !0,
            children: null == c ? eo : c
          }), i.Children.count(F) > 0 ? (0, r.jsx)("div", {
            onClick: T,
            className: C.children,
            children: F
          }) : null]
        }), null != k ? (0, r.jsx)("div", {
          className: a()(C.linkBottom, {
            [C.withGuildIcon]: Y
          }),
          children: (0, r.jsx)(u.Text, {
            color: null != D ? D : "text-muted",
            variant: "text-xs/medium",
            className: C.subtitle,
            children: k
          })
        }) : null]
      }))
    });
    return (0, r.jsx)(u.tEY, {
      focusTarget: et,
      ringTarget: en,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, r.jsxs)("div", {
        ref: t,
        className: a()(Z, null != I || null != w || null != y || V ? C.wrapper : C.notInteractive, (() => {
          if (_) return a()(O.selectedChannel, N.SELECTED);
          if (m) return a()(O.selectedChannel, N.CONNECTED);
          if (h) return N.LOCKED;
          if (s) return N.MUTED;
          if (g)
            if (X) return N.UNREAD_IMPORTANT;
            else return N.UNREAD_LESS_IMPORTANT;
          return null
        })(), function(e) {
          switch (e) {
            case E.d4z.GUILD_STAGE_VOICE:
            case E.d4z.GUILD_VOICE:
              return C.typeVoice;
            case E.d4z.ANNOUNCEMENT_THREAD:
            case E.d4z.PUBLIC_THREAD:
            case E.d4z.PRIVATE_THREAD:
              return C.typeThread;
            case E.d4z.GUILD_ANNOUNCEMENT:
            case E.d4z.GUILD_TEXT:
            case E.d4z.GUILD_STORE:
            case E.d4z.GUILD_FORUM:
            case E.d4z.GUILD_MEDIA:
            default:
              return C.typeDefault
          }
        }(null != H ? H : G)),
        onMouseUp: e => null == w ? void 0 : w(e, o),
        onMouseDown: e => null == y ? void 0 : y(e, o),
        onContextMenu: e => null == x ? void 0 : x(e, o),
        onMouseEnter: B,
        onMouseLeave: U,
        children: [s || !g ? null : (0, r.jsx)("div", {
          className: a()(C.unread, X ? C.unreadImportant : void 0)
        }), null != (n = null == j ? void 0 : j(el)) ? n : el]
      })
    })
  }) : null