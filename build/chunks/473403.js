/** Chunk was on 13368 **/
n.d(t, {
  ZP: () => D,
  _W: () => L,
  ge: () => T,
  je: () => N
});
var r = n(255367),
  o = n(73800),
  i = n(120356),
  a = n.n(i);
if (12633 == n.j) var l = n(91192);
var c = n(442837),
  u = n(481060),
  s = n(43267),
  d = n(933557),
  f = n(471445),
  _ = n(111028),
  p = n(727429),
  b = n(810123),
  m = n(690221),
  v = n(430824),
  g = n(158776),
  h = n(111583),
  y = n(594174),
  E = n(998502),
  O = n(981631),
  I = n(490897),
  C = n(915887),
  S = n(768107);

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

function w(e, t) {
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
let A = {
  SELECTED: S.modeSelected,
  CONNECTED: S.modeConnected,
  UNREAD_IMPORTANT: S.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: S.modeUnreadLessImportant,
  MUTED: S.modeMuted,
  LOCKED: S.modeLocked
};

function x(e) {
  e.preventDefault(), e.stopPropagation()
}
let j = E.ZP.getEnableHardwareAcceleration() ? u.Xo$ : u.qEK;

function T(e) {
  let {
    channel: t,
    size: n = u.EFr.SIZE_20
  } = e;
  return (0, r.jsx)(j, {
    src: (0, s.x)(t),
    "aria-hidden": !0,
    size: n
  })
}

function N(e) {
  let {
    channel: t,
    size: n = u.EFr.SIZE_20
  } = e, o = (0, c.e7)([y.default], () => y.default.getUser(null == t ? void 0 : t.recipients[0])), i = (0, c.e7)([h.Z], () => !(null == o || null == t || t.isMultiUserDM()) && null != h.Z.getTypingUsers(null == t ? void 0 : t.id)[null == o ? void 0 : o.id]), {
    status: a,
    isMobile: l
  } = (0, c.cj)([g.Z], () => null == o || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: !1
  } : {
    status: g.Z.getStatus(o.id),
    isMobile: g.Z.isMobileOnline(o.id)
  });
  return (0, r.jsx)(j, {
    size: n,
    src: null == o ? void 0 : o.getAvatarURL(void 0, 40),
    status: a,
    isMobile: l,
    isTyping: i,
    "aria-label": null == o ? void 0 : o.username,
    statusTooltip: !0
  })
}
let L = e => {
    let {
      className: t,
      containerClassName: n,
      channel: o,
      locked: i,
      hasActiveThreads: l,
      withGuildIcon: s
    } = e, d = (0, c.e7)([v.Z], () => v.Z.getGuild(o.guild_id), [o.guild_id]), _ = o.type === O.d4z.DM || o.type === O.d4z.GROUP_DM, p = null;
    if (s && null != d && !_) p = (0, r.jsx)(b.Z, {
      size: b.E.SMALL_32,
      className: S.iconContainerWithGuildIcon,
      iconClassName: S.iconWithGuildIcon,
      channel: o,
      guild: d,
      locked: i,
      hasActiveThreads: l
    });
    else {
      let e = function(e, t, n) {
        switch (e.type) {
          case O.d4z.DM:
            return function() {
              return (0, r.jsx)(N, {
                channel: e
              })
            };
          case O.d4z.GROUP_DM:
            return function() {
              return (0, r.jsx)(T, {
                channel: e
              })
            };
          default:
            return (0, f.KS)(e, t, n)
        }
      }(o, d, {
        locked: i,
        hasActiveThreads: l
      });
      if (null == e) return null;
      p = (0, r.jsx)(e, {
        color: "currentColor",
        className: a()(S.icon, t)
      })
    }
    let m = s ? null == d ? void 0 : d.name : (0, f.bT)(o, d, i, l),
      g = s && null != d ? "".concat(d.name, " - ").concat(m, " icon") : "".concat(m, " icon");
    return (0, r.jsx)(u.ua7, {
      text: m,
      delay: 500,
      children: e => (0, r.jsx)("div", w(P({}, e), {
        role: "img",
        "aria-label": g,
        className: a()(S.iconContainer, n),
        children: p
      }))
    })
  },
  D = 12633 == n.j ? o.forwardRef(function(e, t) {
    var n;
    let {
      channel: i,
      name: c,
      muted: s,
      selected: f,
      connected: b,
      unread: v,
      locked: g,
      hasActiveThreads: h,
      onClick: y,
      onMouseDown: E,
      onMouseUp: j,
      onContextMenu: T,
      connectDragPreview: N,
      className: D,
      iconClassName: Z,
      subtitle: M,
      subtitleColor: k,
      channel: {
        type: G
      },
      onMouseEnter: F,
      onMouseLeave: B,
      "aria-label": R,
      children: U,
      guild: W,
      channelTypeOverride: Q,
      forceInteractable: z,
      mentionCount: V,
      resolvedUnreadSetting: q,
      isFavoriteSuggestion: Y,
      withGuildIcon: H,
      hasActiveEvent: K = !1
    } = e, X = q === I.i.ALL_MESSAGES || null != V && V > 0, J = (0, l.JA)(i.id), {
      role: $
    } = J, ee = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(J, ["role"]), et = o.useRef(null), en = o.useRef(null), er = (0, p.Z)(i), eo = O.Z5c.CHANNEL(er, i.id), ei = (0, d.ZP)(i), ea = i.isGuildVocal(), el = (0, r.jsx)("div", {
      className: a()({
        [S.favoritesSuggestion]: Y
      }),
      ref: en,
      children: (0, r.jsxs)(m.Z, w(P({
        role: ea && !b ? "button" : "link",
        href: ea ? void 0 : eo,
        target: "_blank",
        ref: et,
        className: S.link,
        onClick: () => null == y ? void 0 : y(i)
      }, ee), {
        "aria-label": R,
        focusProps: {
          enabled: !1
        },
        children: [(0, r.jsxs)("div", {
          className: S.linkTop,
          children: [(0, r.jsx)(L, {
            className: Z,
            channel: i,
            guild: W,
            hasActiveThreads: h,
            locked: g,
            withGuildIcon: H
          }), (0, r.jsx)(_.Z, {
            className: a()(S.name, {
              [S.activeEvent]: K
            }),
            "aria-hidden": !0,
            children: null == c ? ei : c
          }), o.Children.count(U) > 0 ? (0, r.jsx)("div", {
            onClick: x,
            className: S.children,
            children: U
          }) : null]
        }), null != M ? (0, r.jsx)("div", {
          className: a()(S.linkBottom, {
            [S.withGuildIcon]: H
          }),
          children: (0, r.jsx)(u.Text, {
            color: null != k ? k : "text-muted",
            variant: "text-xs/medium",
            className: S.subtitle,
            children: M
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
        className: a()(D, null != y || null != j || null != E || z ? S.wrapper : S.notInteractive, (() => {
          if (f) return a()(C.selectedChannel, A.SELECTED);
          if (b) return a()(C.selectedChannel, A.CONNECTED);
          if (g) return A.LOCKED;
          if (s) return A.MUTED;
          if (v)
            if (X) return A.UNREAD_IMPORTANT;
            else return A.UNREAD_LESS_IMPORTANT;
          return null
        })(), function(e) {
          switch (e) {
            case O.d4z.GUILD_STAGE_VOICE:
            case O.d4z.GUILD_VOICE:
              return S.typeVoice;
            case O.d4z.ANNOUNCEMENT_THREAD:
            case O.d4z.PUBLIC_THREAD:
            case O.d4z.PRIVATE_THREAD:
              return S.typeThread;
            case O.d4z.GUILD_ANNOUNCEMENT:
            case O.d4z.GUILD_TEXT:
            case O.d4z.GUILD_STORE:
            case O.d4z.GUILD_FORUM:
            case O.d4z.GUILD_MEDIA:
            default:
              return S.typeDefault
          }
        }(null != Q ? Q : G)),
        onMouseUp: e => null == j ? void 0 : j(e, i),
        onMouseDown: e => null == E ? void 0 : E(e, i),
        onContextMenu: e => null == T ? void 0 : T(e, i),
        onMouseEnter: F,
        onMouseLeave: B,
        children: [s || !v ? null : (0, r.jsx)("div", {
          className: a()(S.unread, X ? S.unreadImportant : void 0)
        }), null != (n = null == N ? void 0 : N(el)) ? n : el]
      })
    })
  }) : null