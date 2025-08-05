/** Chunk was on 13368 **/
n.d(t, {
  ZP: () => M,
  _W: () => D,
  ge: () => Z,
  je: () => L
});
var r = n(255367),
  i = n(73800),
  l = n(120356),
  a = n.n(l);
if (12633 == n.j) var o = n(91192);
var c = n(442837),
  u = n(481060),
  s = n(43267),
  d = n(933557),
  f = n(471445),
  _ = n(111028),
  p = n(131016),
  b = n(7284),
  h = n(727429),
  m = n(810123),
  v = n(690221),
  g = n(430824),
  y = n(158776),
  E = n(111583),
  O = n(594174),
  I = n(998502),
  S = n(981631),
  C = n(490897),
  P = n(915887),
  w = n(768107);

function A(e) {
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
let j = {
  SELECTED: w.modeSelected,
  CONNECTED: w.modeConnected,
  UNREAD_IMPORTANT: w.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: w.modeUnreadLessImportant,
  MUTED: w.modeMuted,
  LOCKED: w.modeLocked
};

function N(e) {
  e.preventDefault(), e.stopPropagation()
}
let x = I.ZP.getEnableHardwareAcceleration() ? u.Xo$ : u.qEK;

function Z(e) {
  let {
    channel: t,
    size: n = u.EFr.SIZE_20
  } = e;
  return (0, r.jsx)(x, {
    src: (0, s.x)(t),
    "aria-hidden": !0,
    size: n
  })
}

function L(e) {
  let {
    channel: t,
    size: n = u.EFr.SIZE_20
  } = e, i = (0, c.e7)([O.default], () => O.default.getUser(null == t ? void 0 : t.recipients[0])), l = (0, c.e7)([E.Z], () => !(null == i || null == t || t.isMultiUserDM()) && null != E.Z.getTypingUsers(null == t ? void 0 : t.id)[null == i ? void 0 : i.id]), {
    status: a,
    isMobile: o
  } = (0, c.cj)([y.Z], () => null == i || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: !1
  } : {
    status: y.Z.getStatus(i.id),
    isMobile: y.Z.isMobileOnline(i.id)
  });
  return (0, r.jsx)(x, {
    size: n,
    src: null == i ? void 0 : i.getAvatarURL(void 0, 40),
    status: a,
    isMobile: o,
    isTyping: l,
    "aria-label": null == i ? void 0 : i.username,
    statusTooltip: !0
  })
}
let D = e => {
    let {
      className: t,
      containerClassName: n,
      channel: i,
      locked: l,
      hasActiveThreads: o,
      withGuildIcon: s
    } = e, d = (0, c.e7)([g.Z], () => g.Z.getGuild(i.guild_id), [i.guild_id]), _ = i.type === S.d4z.DM || i.type === S.d4z.GROUP_DM, p = null;
    if (s && null != d && !_) p = (0, r.jsx)(m.Z, {
      size: m.E.SMALL_32,
      className: w.iconContainerWithGuildIcon,
      iconClassName: w.iconWithGuildIcon,
      channel: i,
      guild: d,
      locked: l,
      hasActiveThreads: o
    });
    else {
      let e = function(e, t, n) {
        switch (e.type) {
          case S.d4z.DM:
            return function() {
              return (0, r.jsx)(L, {
                channel: e
              })
            };
          case S.d4z.GROUP_DM:
            return function() {
              return (0, r.jsx)(Z, {
                channel: e
              })
            };
          default:
            return (0, f.KS)(e, t, n)
        }
      }(i, d, {
        locked: l,
        hasActiveThreads: o
      });
      if (null == e) return null;
      p = (0, r.jsx)(e, {
        color: "currentColor",
        className: a()(w.icon, t)
      })
    }
    let b = s ? null == d ? void 0 : d.name : (0, f.bT)(i, d, l, o),
      h = s && null != d ? "".concat(d.name, " - ").concat(b, " icon") : "".concat(b, " icon");
    return (0, r.jsx)(u.ua7, {
      text: b,
      delay: 500,
      children: e => (0, r.jsx)("div", T(A({}, e), {
        role: "img",
        "aria-label": h,
        className: a()(w.iconContainer, n),
        children: p
      }))
    })
  },
  M = 12633 == n.j ? i.forwardRef(function(e, t) {
    var n, l, c;
    let {
      channel: s,
      name: f,
      muted: m,
      selected: g,
      connected: y,
      unread: E,
      locked: O,
      hasActiveThreads: I,
      onClick: x,
      onMouseDown: Z,
      onMouseUp: L,
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
    } = e, et = X === C.i.ALL_MESSAGES || null != K && K > 0, en = (0, o.JA)(s.id), {
      role: er
    } = en, ei = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(en, ["role"]), el = i.useRef(null), ea = i.useRef(null), eo = (0, h.Z)(s), ec = S.Z5c.CHANNEL(eo, s.id), eu = (0, d.ZP)(s), es = null;
    s.isPrivate() && 1 === (null != (n = s.rawRecipients) ? n : []).length && (es = (0, p.bN)(null == (l = s.rawRecipients[0]) ? void 0 : l.display_name_styles));
    let ed = (0, b.j)({
        displayNameStyles: es
      }),
      ef = s.isGuildVocal(),
      e_ = (0, r.jsx)("div", {
        className: a()({
          [w.favoritesSuggestion]: J
        }),
        ref: ea,
        children: (0, r.jsxs)(v.Z, T(A({
          role: ef && !y ? "button" : "link",
          href: ef ? void 0 : ec,
          target: "_blank",
          ref: el,
          className: w.link,
          onClick: () => null == x ? void 0 : x(s)
        }, ei), {
          "aria-label": z,
          focusProps: {
            enabled: !1
          },
          children: [(0, r.jsxs)("div", {
            className: w.linkTop,
            children: [(0, r.jsx)(D, {
              className: F,
              channel: s,
              guild: q,
              hasActiveThreads: I,
              locked: O,
              withGuildIcon: $
            }), (0, r.jsx)(_.Z, {
              className: a()(w.name, ed, {
                [w.activeEvent]: ee
              }),
              "aria-hidden": !0,
              children: null == f ? eu : f
            }), i.Children.count(V) > 0 ? (0, r.jsx)("div", {
              onClick: N,
              className: w.children,
              children: V
            }) : null]
          }), null != R ? (0, r.jsx)("div", {
            className: a()(w.linkBottom, {
              [w.withGuildIcon]: $
            }),
            children: (0, r.jsx)(u.Text, {
              color: null != U ? U : "text-muted",
              variant: "text-xs/medium",
              className: w.subtitle,
              children: R
            })
          }) : null]
        }))
      });
    return (0, r.jsx)(u.tEY, {
      focusTarget: el,
      ringTarget: ea,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, r.jsxs)("div", {
        ref: t,
        className: a()(G, null != x || null != L || null != Z || H ? w.wrapper : w.notInteractive, (() => {
          if (g) return a()(P.selectedChannel, j.SELECTED);
          if (y) return a()(P.selectedChannel, j.CONNECTED);
          if (O) return j.LOCKED;
          if (m) return j.MUTED;
          if (E)
            if (et) return j.UNREAD_IMPORTANT;
            else return j.UNREAD_LESS_IMPORTANT;
          return null
        })(), function(e) {
          switch (e) {
            case S.d4z.GUILD_STAGE_VOICE:
            case S.d4z.GUILD_VOICE:
              return w.typeVoice;
            case S.d4z.ANNOUNCEMENT_THREAD:
            case S.d4z.PUBLIC_THREAD:
            case S.d4z.PRIVATE_THREAD:
              return w.typeThread;
            case S.d4z.GUILD_ANNOUNCEMENT:
            case S.d4z.GUILD_TEXT:
            case S.d4z.GUILD_STORE:
            case S.d4z.GUILD_FORUM:
            case S.d4z.GUILD_MEDIA:
            default:
              return w.typeDefault
          }
        }(null != Y ? Y : W)),
        onMouseUp: e => null == L ? void 0 : L(e, s),
        onMouseDown: e => null == Z ? void 0 : Z(e, s),
        onContextMenu: e => null == M ? void 0 : M(e, s),
        onMouseEnter: B,
        onMouseLeave: Q,
        children: [m || !E ? null : (0, r.jsx)("div", {
          className: a()(w.unread, et ? w.unreadImportant : void 0)
        }), null != (c = null == k ? void 0 : k(e_)) ? c : e_]
      })
    })
  }) : null