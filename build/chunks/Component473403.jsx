/** Chunk was on 13368 **/
/** chunk id: 473403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => B,
  _W: () => A,
  ge: () => N,
  je: () => k
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356);
if (12633 == require.j) var Chunk91192 = require("./91192.jsx");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk131016 = require("./131016.js"),
  Chunk7284 = require("./7284.js"),
  Chunk727429 = require("./727429.js"),
  Chunk810123 = require("./810123.jsx"),
  Chunk690221 = require("./690221.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk158776 = require("./158776.js"),
  Chunk111583 = require("./111583.js"),
  Chunk594174 = require("./594174.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk55940 = require("./55940.js"),
  Chunk509612 = require("./509612.js");

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function P(e, t) {
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
let D = {
  SELECTED: Chunk509612.modeSelected,
  CONNECTED: Chunk509612.modeConnected,
  UNREAD_IMPORTANT: Chunk509612.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: Chunk509612.modeUnreadLessImportant,
  MUTED: Chunk509612.modeMuted,
  LOCKED: Chunk509612.modeLocked
};

function L(e) {
  e.preventDefault(), e.stopPropagation()
}
let j = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function N(e) {
  let {
    channel: t,
    size: n = u.EFr.SIZE_20
  } = e;
  return (0, r.jsx)(j, {
    src: (0, d.x)(t),
    "aria-hidden": true,
    size: n
  })
}

function k(e) {
  let {
    channel: t,
    size: n = u.EFr.SIZE_20
  } = e, a = (0, c.e7)([C.default], () => C.default.getUser(null == t ? true : t.recipients[0])), o = (0, c.e7)([y.Z], () => !(null == a || null == t || t.isMultiUserDM()) && null != y.Z.getTypingUsers(null == t ? true : t.id)[null == a ? true : a.id]), {
    status: i,
    isMobile: l
  } = (0, c.cj)([I.Z], () => null == a || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: false
  } : {
    status: I.Z.getStatus(a.id),
    isMobile: I.Z.isMobileOnline(a.id)
  });
  return (0, r.jsx)(j, {
    size: n,
    src: null == a ? true : a.getAvatarURL(true, 40),
    status: i,
    isMobile: l,
    isTyping: o,
    "aria-label": null == a ? true : a.username,
    statusTooltip: true
  })
}
let A = e => {
    let {
      className: t,
      containerClassName: n,
      channel: a,
      locked: o,
      hasActiveThreads: l,
      withGuildIcon: d
    } = e, s = (0, c.e7)([g.Z], () => g.Z.getGuild(a.guild_id), [a.guild_id]), f = a.type === E.d4z.DM || a.type === E.d4z.GROUP_DM, p = null;
    if (d && null != s && !f) p = (0, r.jsx)(v.Z, {
      size: v.E.SMALL_32,
      className: O.iconContainerWithGuildIcon,
      iconClassName: O.iconWithGuildIcon,
      channel: a,
      guild: s,
      locked: o,
      hasActiveThreads: l
    });
    else {
      let e = function(e, t, n) {
        switch (e.type) {
          case E.d4z.DM:
            return function() {
              return (0, r.jsx)(k, {
                channel: e
              })
            };
          case E.d4z.GROUP_DM:
            return function() {
              return (0, r.jsx)(N, {
                channel: e
              })
            };
          default:
            return (0, _.KS)(e, t, n)
        }
      }(a, s, {
        locked: o,
        hasActiveThreads: l
      });
      if (null == e) return null;
      p = (0, r.jsx)(e, {
        color: "currentColor",
        className: i()(O.icon, t)
      })
    }
    let h = d ? null == s ? true : s.name : (0, _.bT)(a, s, o, l),
      m = d && null != s ? "".concat(s.name, " - ").concat(h, " icon") : "".concat(h, " icon");
    return (0, r.jsx)(u.ua7, {
      text: h,
      delay: 500,
      children: e => (0, r.jsx)("div", P(T({}, e), {
        role: "img",
        "aria-label": m,
        className: i()(O.iconContainer, n),
        children: p
      }))
    })
  },
  B = 12633 == require.j ? Chunk647438.forwardRef(function(e, t) {
    var n, o, c;
    let {
      channel: d,
      name: _,
      muted: v,
      selected: g,
      connected: I,
      unread: y,
      locked: C,
      hasActiveThreads: w,
      onClick: j,
      onMouseDown: N,
      onMouseUp: k,
      onContextMenu: B,
      connectDragPreview: M,
      className: Z,
      iconClassName: W,
      subtitle: R,
      subtitleColor: U,
      channel: {
        type: G
      },
      onMouseEnter: F,
      onMouseLeave: z,
      "aria-label": q,
      children: Q,
      guild: H,
      channelTypeOverride: V,
      forceInteractable: K,
      mentionCount: X,
      resolvedUnreadSetting: Y,
      isFavoriteSuggestion: J,
      withGuildIcon: $,
      hasActiveEvent: ee = false
    } = e, et = Y === S.i.ALL_MESSAGES || null != X && X > 0, en = (0, l.JA)(d.id), {
      role: er
    } = en, ea = function(e, t) {
      if (null == e) return {};
      var n, r, a = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
    }(en, ["role"]), eo = a.useRef(null), ei = a.useRef(null), el = (0, m.Z)(d), ec = E.Z5c.CHANNEL(el, d.id), eu = (0, s.ZP)(d), ed = null;
    d.isPrivate() && 1 === (null != (n = d.rawRecipients) ? n : []).length && (ed = (0, p.bN)(null == (o = d.rawRecipients[0]) ? true : o.display_name_styles));
    let es = (0, h.j)({
        displayNameStyles: ed
      }),
      e_ = d.isGuildVocal(),
      ef = (0, r.jsx)("div", {
        className: i()({
          [O.favoritesSuggestion]: J
        }),
        ref: ei,
        children: (0, r.jsxs)(b.Z, P(T({
          role: e_ && !I ? "button" : "link",
          href: e_ ? true : ec,
          target: "_blank",
          ref: eo,
          className: O.link,
          onClick: () => null == j ? true : j(d)
        }, ea), {
          "aria-label": q,
          focusProps: {
            enabled: false
          },
          children: [(0, r.jsxs)("div", {
            className: O.linkTop,
            children: [(0, r.jsx)(A, {
              className: W,
              channel: d,
              guild: H,
              hasActiveThreads: w,
              locked: C,
              withGuildIcon: $
            }), (0, r.jsx)(f.Z, {
              className: i()(O.name, es, {
                [O.activeEvent]: ee
              }),
              "aria-hidden": true,
              children: null == _ ? eu : _
            }), a.Children.count(Q) > 0 ? (0, r.jsx)("div", {
              onClick: L,
              className: O.children,
              children: Q
            }) : null]
          }), null != R ? (0, r.jsx)("div", {
            className: i()(O.linkBottom, {
              [O.withGuildIcon]: $
            }),
            children: (0, r.jsx)(u.Text, {
              color: null != U ? U : "text-muted",
              variant: "text-xs/medium",
              className: O.subtitle,
              children: R
            })
          }) : null]
        }))
      });
    return (0, r.jsx)(u.tEY, {
      focusTarget: eo,
      ringTarget: ei,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, r.jsxs)("div", {
        ref: t,
        className: i()(Z, null != j || null != k || null != N || K ? O.wrapper : O.notInteractive, (() => {
          if (g) return i()(x.selectedChannel, D.SELECTED);
          if (I) return i()(x.selectedChannel, D.CONNECTED);
          if (C) return D.LOCKED;
          if (v) return D.MUTED;
          if (y)
            if (et) return D.UNREAD_IMPORTANT;
            else return D.UNREAD_LESS_IMPORTANT;
          return null
        })(), function(e) {
          switch (e) {
            case E.d4z.GUILD_STAGE_VOICE:
            case E.d4z.GUILD_VOICE:
              return O.typeVoice;
            case E.d4z.ANNOUNCEMENT_THREAD:
            case E.d4z.PUBLIC_THREAD:
            case E.d4z.PRIVATE_THREAD:
              return O.typeThread;
            case E.d4z.GUILD_ANNOUNCEMENT:
            case E.d4z.GUILD_TEXT:
            case E.d4z.GUILD_STORE:
            case E.d4z.GUILD_FORUM:
            case E.d4z.GUILD_MEDIA:
            default:
              return O.typeDefault
          }
        }(null != V ? V : G)),
        onMouseUp: e => null == k ? true : k(e, d),
        onMouseDown: e => null == N ? true : N(e, d),
        onContextMenu: e => null == B ? true : B(e, d),
        onMouseEnter: F,
        onMouseLeave: z,
        children: [v || !y ? null : (0, r.jsx)("div", {
          className: i()(O.unread, et ? O.unreadImportant : true)
        }), null != (c = null == M ? true : M(ef)) ? c : ef]
      })
    })
  }) : null