/** Chunk was on 13368 **/
n.d(t, {
  ZP: () => M,
  _W: () => Z,
  ge: () => L,
  je: () => D
});
var r = n(255367),
  i = n(73800),
  a = n(120356),
  l = n.n(a);
if (12633 == n.j) var o = n(91192);
var c = n(442837),
  u = n(481060),
  s = n(43267),
  d = n(933557),
  f = n(471445),
  _ = n(111028),
  p = n(131016),
  b = n(7284),
  m = n(727429),
  v = n(810123),
  g = n(690221),
  h = n(430824),
  y = n(158776),
  E = n(111583),
  I = n(594174),
  O = n(998502),
  C = n(981631),
  S = n(490897),
  P = n(915887),
  A = n(768107);

function w(e) {
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

function T(e, t) {
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
  SELECTED: A.modeSelected,
  CONNECTED: A.modeConnected,
  UNREAD_IMPORTANT: A.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: A.modeUnreadLessImportant,
  MUTED: A.modeMuted,
  LOCKED: A.modeLocked
};

function x(e) {
  e.preventDefault(), e.stopPropagation()
}
let j = O.ZP.getEnableHardwareAcceleration() ? u.Xo$ : u.qEK;

function L(e) {
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

function D(e) {
  let {
    channel: t,
    size: n = u.EFr.SIZE_20
  } = e, i = (0, c.e7)([I.default], () => I.default.getUser(null == t ? void 0 : t.recipients[0])), a = (0, c.e7)([E.Z], () => !(null == i || null == t || t.isMultiUserDM()) && null != E.Z.getTypingUsers(null == t ? void 0 : t.id)[null == i ? void 0 : i.id]), {
    status: l,
    isMobile: o
  } = (0, c.cj)([y.Z], () => null == i || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: !1
  } : {
    status: y.Z.getStatus(i.id),
    isMobile: y.Z.isMobileOnline(i.id)
  });
  return (0, r.jsx)(j, {
    size: n,
    src: null == i ? void 0 : i.getAvatarURL(void 0, 40),
    status: l,
    isMobile: o,
    isTyping: a,
    "aria-label": null == i ? void 0 : i.username,
    statusTooltip: !0
  })
}
let Z = e => {
    let {
      className: t,
      containerClassName: n,
      channel: i,
      locked: a,
      hasActiveThreads: o,
      withGuildIcon: s
    } = e, d = (0, c.e7)([h.Z], () => h.Z.getGuild(i.guild_id), [i.guild_id]), _ = i.type === C.d4z.DM || i.type === C.d4z.GROUP_DM, p = null;
    if (s && null != d && !_) p = (0, r.jsx)(v.Z, {
      size: v.E.SMALL_32,
      className: A.iconContainerWithGuildIcon,
      iconClassName: A.iconWithGuildIcon,
      channel: i,
      guild: d,
      locked: a,
      hasActiveThreads: o
    });
    else {
      let e = function(e, t, n) {
        switch (e.type) {
          case C.d4z.DM:
            return function() {
              return (0, r.jsx)(D, {
                channel: e
              })
            };
          case C.d4z.GROUP_DM:
            return function() {
              return (0, r.jsx)(L, {
                channel: e
              })
            };
          default:
            return (0, f.KS)(e, t, n)
        }
      }(i, d, {
        locked: a,
        hasActiveThreads: o
      });
      if (null == e) return null;
      p = (0, r.jsx)(e, {
        color: "currentColor",
        className: l()(A.icon, t)
      })
    }
    let b = s ? null == d ? void 0 : d.name : (0, f.bT)(i, d, a, o),
      m = s && null != d ? "".concat(d.name, " - ").concat(b, " icon") : "".concat(b, " icon");
    return (0, r.jsx)(u.ua7, {
      text: b,
      delay: 500,
      children: e => (0, r.jsx)("div", T(w({}, e), {
        role: "img",
        "aria-label": m,
        className: l()(A.iconContainer, n),
        children: p
      }))
    })
  },
  M = 12633 == n.j ? i.forwardRef(function(e, t) {
    var n, a, c;
    let {
      channel: s,
      name: f,
      muted: v,
      selected: h,
      connected: y,
      unread: E,
      locked: I,
      hasActiveThreads: O,
      onClick: j,
      onMouseDown: L,
      onMouseUp: D,
      onContextMenu: M,
      connectDragPreview: k,
      className: G,
      iconClassName: F,
      subtitle: R,
      subtitleColor: U,
      channel: {
        type: W
      },
      onMouseEnter: B,
      onMouseLeave: Q,
      "aria-label": z,
      children: V,
      guild: q,
      channelTypeOverride: Y,
      forceInteractable: H,
      mentionCount: K,
      resolvedUnreadSetting: X,
      isFavoriteSuggestion: J,
      withGuildIcon: $,
      hasActiveEvent: ee = !1
    } = e, et = X === S.i.ALL_MESSAGES || null != K && K > 0, en = (0, o.JA)(s.id), {
      role: er
    } = en, ei = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(en, ["role"]), ea = i.useRef(null), el = i.useRef(null), eo = (0, m.Z)(s), ec = C.Z5c.CHANNEL(eo, s.id), eu = (0, d.ZP)(s), es = null;
    s.isPrivate() && 1 === (null != (n = s.rawRecipients) ? n : []).length && (es = (0, p.bN)(null == (a = s.rawRecipients[0]) ? void 0 : a.display_name_styles));
    let ed = (0, b.j)({
        displayNameStyles: es
      }),
      ef = s.isGuildVocal(),
      e_ = (0, r.jsx)("div", {
        className: l()({
          [A.favoritesSuggestion]: J
        }),
        ref: el,
        children: (0, r.jsxs)(g.Z, T(w({
          role: ef && !y ? "button" : "link",
          href: ef ? void 0 : ec,
          target: "_blank",
          ref: ea,
          className: A.link,
          onClick: () => null == j ? void 0 : j(s)
        }, ei), {
          "aria-label": z,
          focusProps: {
            enabled: !1
          },
          children: [(0, r.jsxs)("div", {
            className: A.linkTop,
            children: [(0, r.jsx)(Z, {
              className: F,
              channel: s,
              guild: q,
              hasActiveThreads: O,
              locked: I,
              withGuildIcon: $
            }), (0, r.jsx)(_.Z, {
              className: l()(A.name, ed, {
                [A.activeEvent]: ee
              }),
              "aria-hidden": !0,
              children: null == f ? eu : f
            }), i.Children.count(V) > 0 ? (0, r.jsx)("div", {
              onClick: x,
              className: A.children,
              children: V
            }) : null]
          }), null != R ? (0, r.jsx)("div", {
            className: l()(A.linkBottom, {
              [A.withGuildIcon]: $
            }),
            children: (0, r.jsx)(u.Text, {
              color: null != U ? U : "text-muted",
              variant: "text-xs/medium",
              className: A.subtitle,
              children: R
            })
          }) : null]
        }))
      });
    return (0, r.jsx)(u.tEY, {
      focusTarget: ea,
      ringTarget: el,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, r.jsxs)("div", {
        ref: t,
        className: l()(G, null != j || null != D || null != L || H ? A.wrapper : A.notInteractive, (() => {
          if (h) return l()(P.selectedChannel, N.SELECTED);
          if (y) return l()(P.selectedChannel, N.CONNECTED);
          if (I) return N.LOCKED;
          if (v) return N.MUTED;
          if (E)
            if (et) return N.UNREAD_IMPORTANT;
            else return N.UNREAD_LESS_IMPORTANT;
          return null
        })(), function(e) {
          switch (e) {
            case C.d4z.GUILD_STAGE_VOICE:
            case C.d4z.GUILD_VOICE:
              return A.typeVoice;
            case C.d4z.ANNOUNCEMENT_THREAD:
            case C.d4z.PUBLIC_THREAD:
            case C.d4z.PRIVATE_THREAD:
              return A.typeThread;
            case C.d4z.GUILD_ANNOUNCEMENT:
            case C.d4z.GUILD_TEXT:
            case C.d4z.GUILD_STORE:
            case C.d4z.GUILD_FORUM:
            case C.d4z.GUILD_MEDIA:
            default:
              return A.typeDefault
          }
        }(null != Y ? Y : W)),
        onMouseUp: e => null == D ? void 0 : D(e, s),
        onMouseDown: e => null == L ? void 0 : L(e, s),
        onContextMenu: e => null == M ? void 0 : M(e, s),
        onMouseEnter: B,
        onMouseLeave: Q,
        children: [v || !E ? null : (0, r.jsx)("div", {
          className: l()(A.unread, et ? A.unreadImportant : void 0)
        }), null != (c = null == k ? void 0 : k(e_)) ? c : e_]
      })
    })
  }) : null