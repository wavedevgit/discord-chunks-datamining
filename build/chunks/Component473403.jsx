/** Chunk was on 78079 **/
/** chunk id: 473403, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  ZP: () => x,
  _W: () => L,
  ge: () => T,
  je: () => y
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

function Q(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
      return Object.getOwnPropertyDescriptor(t, A).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = t[e], e in A ? Object.defineProperty(A, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : A[e] = n
    })
  }
  return A
}

function P(A, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : (function(A, e) {
    var t = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(A);
      t.push.apply(t, n)
    }
    return t
  })(Object(e)).forEach(function(t) {
    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
  }), A
}
let j = {
  SELECTED: Chunk509612.modeSelected,
  CONNECTED: Chunk509612.modeConnected,
  UNREAD_IMPORTANT: Chunk509612.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: Chunk509612.modeUnreadLessImportant,
  MUTED: Chunk509612.modeMuted,
  LOCKED: Chunk509612.modeLocked
};

function V(A) {
  A.preventDefault(), A.stopPropagation()
}
let m = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function T(A) {
  let {
    channel: e,
    size: t = o.EFr.SIZE_20
  } = A;
  return (0, n.jsx)(m, {
    src: (0, g.x)(e),
    "aria-hidden": true,
    size: t
  })
}

function y(A) {
  let {
    channel: e,
    size: t = o.EFr.SIZE_20
  } = A, r = (0, s.e7)([M.default], () => M.default.getUser(null == e ? true : e.recipients[0])), l = (0, s.e7)([D.Z], () => !(null == r || null == e || e.isMultiUserDM()) && null != D.Z.getTypingUsers(null == e ? true : e.id)[null == r ? true : r.id]), {
    status: i,
    isMobile: a
  } = (0, s.cj)([w.Z], () => null == r || null == e || e.isMultiUserDM() ? {
    status: null,
    isMobile: false
  } : {
    status: w.Z.getStatus(r.id),
    isMobile: w.Z.isMobileOnline(r.id)
  });
  return (0, n.jsx)(m, {
    size: t,
    src: null == r ? true : r.getAvatarURL(true, 40),
    status: i,
    isMobile: a,
    isTyping: l,
    "aria-label": null == r ? true : r.username,
    statusTooltip: true
  })
}
let L = A => {
    let {
      className: e,
      containerClassName: t,
      channel: r,
      locked: l,
      hasActiveThreads: a,
      withGuildIcon: g
    } = A, c = (0, s.e7)([B.Z], () => B.Z.getGuild(r.guild_id), [r.guild_id]), v = r.type === I.d4z.DM || r.type === I.d4z.GROUP_DM, u = null;
    if (g && null != c && !v) u = (0, n.jsx)(E.Z, {
      size: E.E.SMALL_32,
      className: O.iconContainerWithGuildIcon,
      iconClassName: O.iconWithGuildIcon,
      channel: r,
      guild: c,
      locked: l,
      hasActiveThreads: a
    });
    else {
      let A = function(A, e, t) {
        switch (A.type) {
          case I.d4z.DM:
            return function() {
              return (0, n.jsx)(y, {
                channel: A
              })
            };
          case I.d4z.GROUP_DM:
            return function() {
              return (0, n.jsx)(T, {
                channel: A
              })
            };
          default:
            return (0, f.KS)(A, e, t)
        }
      }(r, c, {
        locked: l,
        hasActiveThreads: a
      });
      if (null == A) return null;
      u = (0, n.jsx)(A, {
        color: "currentColor",
        className: i()(O.icon, e)
      })
    }
    let h = g ? null == c ? true : c.name : (0, f.bT)(r, c, l, a),
      d = g && null != c ? "".concat(c.name, " - ").concat(h, " icon") : "".concat(h, " icon");
    return (0, n.jsx)(o.ua7, {
      text: h,
      delay: 500,
      children: A => (0, n.jsx)("div", P(Q({}, A), {
        role: "img",
        "aria-label": d,
        className: i()(O.iconContainer, t),
        children: u
      }))
    })
  },
  x = 12633 == require.j ? Chunk647438.forwardRef(function(A, e) {
    var t, l, s;
    let {
      channel: g,
      name: f,
      muted: E,
      selected: B,
      connected: w,
      unread: D,
      locked: M,
      hasActiveThreads: p,
      onClick: m,
      onMouseDown: T,
      onMouseUp: y,
      onContextMenu: x,
      connectDragPreview: N,
      className: Z,
      iconClassName: S,
      subtitle: R,
      subtitleColor: G,
      channel: {
        type: U
      },
      onMouseEnter: F,
      onMouseLeave: k,
      "aria-label": X,
      children: z,
      guild: K,
      channelTypeOverride: Y,
      forceInteractable: W,
      mentionCount: J,
      resolvedUnreadSetting: q,
      isFavoriteSuggestion: _,
      withGuildIcon: $,
      hasActiveEvent: AA = false
    } = A, Ae = q === H.i.ALL_MESSAGES || null != J && J > 0, At = (0, a.JA)(g.id), {
      role: An
    } = At, Ar = function(A, e) {
      if (null == A) return {};
      var t, n, r = function(A, e) {
        if (null == A) return {};
        var t, n, r = {},
          l = Object.keys(A);
        for (n = 0; n < l.length; n++) t = l[n], e.indexOf(t) >= 0 || (r[t] = A[t]);
        return r
      }(A, e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(A);
        for (n = 0; n < l.length; n++) t = l[n], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t])
      }
      return r
    }(At, ["role"]), Al = r.useRef(null), Ai = r.useRef(null), Aa = (0, d.Z)(g), As = I.Z5c.CHANNEL(Aa, g.id), Ao = (0, c.ZP)(g), Ag = null;
    g.isPrivate() && 1 === (null != (t = g.rawRecipients) ? t : []).length && (Ag = (0, u.bN)(null == (l = g.rawRecipients[0]) ? true : l.display_name_styles));
    let Ac = (0, h.j)({
        displayNameStyles: Ag
      }),
      Af = g.isGuildVocal(),
      Av = (0, n.jsx)("div", {
        className: i()({
          [O.favoritesSuggestion]: _
        }),
        ref: Ai,
        children: (0, n.jsxs)(C.Z, P(Q({
          role: Af && !w ? "button" : "link",
          href: Af ? true : As,
          target: "_blank",
          ref: Al,
          className: O.link,
          onClick: () => null == m ? true : m(g)
        }, Ar), {
          "aria-label": X,
          focusProps: {
            enabled: false
          },
          children: [(0, n.jsxs)("div", {
            className: O.linkTop,
            children: [(0, n.jsx)(L, {
              className: S,
              channel: g,
              guild: K,
              hasActiveThreads: p,
              locked: M,
              withGuildIcon: $
            }), (0, n.jsx)(v.Z, {
              className: i()(O.name, Ac, {
                [O.activeEvent]: AA
              }),
              "aria-hidden": true,
              children: null == f ? Ao : f
            }), r.Children.count(z) > 0 ? (0, n.jsx)("div", {
              onClick: V,
              className: O.children,
              children: z
            }) : null]
          }), null != R ? (0, n.jsx)("div", {
            className: i()(O.linkBottom, {
              [O.withGuildIcon]: $
            }),
            children: (0, n.jsx)(o.Text, {
              color: null != G ? G : "text-muted",
              variant: "text-xs/medium",
              className: O.subtitle,
              children: R
            })
          }) : null]
        }))
      });
    return (0, n.jsx)(o.tEY, {
      focusTarget: Al,
      ringTarget: Ai,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, n.jsxs)("div", {
        ref: e,
        className: i()(Z, null != m || null != y || null != T || W ? O.wrapper : O.notInteractive, (() => {
          if (B) return i()(b.selectedChannel, j.SELECTED);
          if (w) return i()(b.selectedChannel, j.CONNECTED);
          if (M) return j.LOCKED;
          if (E) return j.MUTED;
          if (D)
            if (Ae) return j.UNREAD_IMPORTANT;
            else return j.UNREAD_LESS_IMPORTANT;
          return null
        })(), function(A) {
          switch (A) {
            case I.d4z.GUILD_STAGE_VOICE:
            case I.d4z.GUILD_VOICE:
              return O.typeVoice;
            case I.d4z.ANNOUNCEMENT_THREAD:
            case I.d4z.PUBLIC_THREAD:
            case I.d4z.PRIVATE_THREAD:
              return O.typeThread;
            case I.d4z.GUILD_ANNOUNCEMENT:
            case I.d4z.GUILD_TEXT:
            case I.d4z.GUILD_STORE:
            case I.d4z.GUILD_FORUM:
            case I.d4z.GUILD_MEDIA:
            default:
              return O.typeDefault
          }
        }(null != Y ? Y : U)),
        onMouseUp: A => null == y ? true : y(A, g),
        onMouseDown: A => null == T ? true : T(A, g),
        onContextMenu: A => null == x ? true : x(A, g),
        onMouseEnter: F,
        onMouseLeave: k,
        children: [E || !D ? null : (0, n.jsx)("div", {
          className: i()(O.unread, Ae ? O.unreadImportant : true)
        }), null != (s = null == N ? true : N(Av)) ? s : Av]
      })
    })
  }) : null