/** Chunk was on 13368 **/
n.d(t, {
  ZP: () => D,
  _W: () => L,
  ge: () => x,
  je: () => N
});
var r = n(255367),
  o = n(73800),
  a = n(120356),
  i = n.n(a);
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
  O = n(998502),
  E = n(981631),
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

function j(e) {
  e.preventDefault(), e.stopPropagation()
}
let T = O.ZP.getEnableHardwareAcceleration() ? u.Xo$ : u.qEK;

function x(e) {
  let {
    channel: t,
    size: n = u.EFr.SIZE_20
  } = e;
  return (0, r.jsx)(T, {
    src: (0, s.x)(t),
    "aria-hidden": !0,
    size: n
  })
}

function N(e) {
  let {
    channel: t,
    size: n = u.EFr.SIZE_20
  } = e, o = (0, c.e7)([y.default], () => y.default.getUser(null == t ? void 0 : t.recipients[0])), a = (0, c.e7)([h.Z], () => !(null == o || null == t || t.isMultiUserDM()) && null != h.Z.getTypingUsers(null == t ? void 0 : t.id)[null == o ? void 0 : o.id]), {
    status: i,
    isMobile: l
  } = (0, c.cj)([g.Z], () => null == o || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: !1
  } : {
    status: g.Z.getStatus(o.id),
    isMobile: g.Z.isMobileOnline(o.id)
  });
  return (0, r.jsx)(T, {
    size: n,
    src: null == o ? void 0 : o.getAvatarURL(void 0, 40),
    status: i,
    isMobile: l,
    isTyping: a,
    "aria-label": null == o ? void 0 : o.username,
    statusTooltip: !0
  })
}
let L = e => {
    let {
      className: t,
      containerClassName: n,
      channel: o,
      locked: a,
      hasActiveThreads: l,
      withGuildIcon: s
    } = e, d = (0, c.e7)([v.Z], () => v.Z.getGuild(o.guild_id), [o.guild_id]), _ = o.type === E.d4z.DM || o.type === E.d4z.GROUP_DM, p = null;
    if (s && null != d && !_) p = (0, r.jsx)(b.Z, {
      size: b.E.SMALL_32,
      className: S.iconContainerWithGuildIcon,
      iconClassName: S.iconWithGuildIcon,
      channel: o,
      guild: d,
      locked: a,
      hasActiveThreads: l
    });
    else {
      let e = function(e, t, n) {
        switch (e.type) {
          case E.d4z.DM:
            return function() {
              return (0, r.jsx)(N, {
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
            return (0, f.KS)(e, t, n)
        }
      }(o, d, {
        locked: a,
        hasActiveThreads: l
      });
      if (null == e) return null;
      p = (0, r.jsx)(e, {
        color: "currentColor",
        className: i()(S.icon, t)
      })
    }
    let m = s ? null == d ? void 0 : d.name : (0, f.bT)(o, d, a, l),
      g = s && null != d ? "".concat(d.name, " - ").concat(m, " icon") : "".concat(m, " icon");
    return (0, r.jsx)(u.ua7, {
      text: m,
      delay: 500,
      children: e => (0, r.jsx)("div", w(P({}, e), {
        role: "img",
        "aria-label": g,
        className: i()(S.iconContainer, n),
        children: p
      }))
    })
  },
  D = 12633 == n.j ? o.forwardRef(function(e, t) {
    var n;
    let {
      channel: a,
      name: c,
      muted: s,
      selected: f,
      connected: b,
      unread: v,
      locked: g,
      hasActiveThreads: h,
      onClick: y,
      onMouseDown: O,
      onMouseUp: T,
      onContextMenu: x,
      connectDragPreview: N,
      className: D,
      iconClassName: Z,
      subtitle: k,
      subtitleColor: M,
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
    } = e, X = q === I.i.ALL_MESSAGES || null != V && V > 0, J = (0, l.JA)(a.id), {
      role: $
    } = J, ee = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(J, ["role"]), et = o.useRef(null), en = o.useRef(null), er = (0, p.Z)(a), eo = E.Z5c.CHANNEL(er, a.id), ea = (0, d.ZP)(a), ei = a.isGuildVocal(), el = (0, r.jsx)("div", {
      className: i()({
        [S.favoritesSuggestion]: Y
      }),
      ref: en,
      children: (0, r.jsxs)(m.Z, w(P({
        role: ei && !b ? "button" : "link",
        href: ei ? void 0 : eo,
        target: "_blank",
        ref: et,
        className: S.link,
        onClick: () => null == y ? void 0 : y(a)
      }, ee), {
        "aria-label": R,
        focusProps: {
          enabled: !1
        },
        children: [(0, r.jsxs)("div", {
          className: S.linkTop,
          children: [(0, r.jsx)(L, {
            className: Z,
            channel: a,
            guild: W,
            hasActiveThreads: h,
            locked: g,
            withGuildIcon: H
          }), (0, r.jsx)(_.Z, {
            className: i()(S.name, {
              [S.activeEvent]: K
            }),
            "aria-hidden": !0,
            children: null == c ? ea : c
          }), o.Children.count(U) > 0 ? (0, r.jsx)("div", {
            onClick: j,
            className: S.children,
            children: U
          }) : null]
        }), null != k ? (0, r.jsx)("div", {
          className: i()(S.linkBottom, {
            [S.withGuildIcon]: H
          }),
          children: (0, r.jsx)(u.Text, {
            color: null != M ? M : "text-muted",
            variant: "text-xs/medium",
            className: S.subtitle,
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
        className: i()(D, null != y || null != T || null != O || z ? S.wrapper : S.notInteractive, (() => {
          if (f) return i()(C.selectedChannel, A.SELECTED);
          if (b) return i()(C.selectedChannel, A.CONNECTED);
          if (g) return A.LOCKED;
          if (s) return A.MUTED;
          if (v)
            if (X) return A.UNREAD_IMPORTANT;
            else return A.UNREAD_LESS_IMPORTANT;
          return null
        })(), function(e) {
          switch (e) {
            case E.d4z.GUILD_STAGE_VOICE:
            case E.d4z.GUILD_VOICE:
              return S.typeVoice;
            case E.d4z.ANNOUNCEMENT_THREAD:
            case E.d4z.PUBLIC_THREAD:
            case E.d4z.PRIVATE_THREAD:
              return S.typeThread;
            case E.d4z.GUILD_ANNOUNCEMENT:
            case E.d4z.GUILD_TEXT:
            case E.d4z.GUILD_STORE:
            case E.d4z.GUILD_FORUM:
            case E.d4z.GUILD_MEDIA:
            default:
              return S.typeDefault
          }
        }(null != Q ? Q : G)),
        onMouseUp: e => null == T ? void 0 : T(e, a),
        onMouseDown: e => null == O ? void 0 : O(e, a),
        onContextMenu: e => null == x ? void 0 : x(e, a),
        onMouseEnter: F,
        onMouseLeave: B,
        children: [s || !v ? null : (0, r.jsx)("div", {
          className: i()(S.unread, X ? S.unreadImportant : void 0)
        }), null != (n = null == N ? void 0 : N(el)) ? n : el]
      })
    })
  }) : null