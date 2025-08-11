/** Chunk was on 99133 **/
/** chunk id: 473403, original params: A,t,e (module,exports,require) **/
require.d(exports, {
  ZP: () => X,
  _W: () => L,
  ge: () => y,
  je: () => x
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356);
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
  Chunk915887 = require("./915887.js"),
  Chunk768107 = require("./768107.js");

function u(A) {
  for (var t = 1; t < arguments.length; t++) {
    var e = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(e);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter(function(A) {
      return Object.getOwnPropertyDescriptor(e, A).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = e[t], t in A ? Object.defineProperty(A, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : A[t] = r
    })
  }
  return A
}

function I(A, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : (function(A, t) {
    var e = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(A);
      e.push.apply(e, r)
    }
    return e
  })(Object(t)).forEach(function(e) {
    Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(t, e))
  }), A
}
let j = {
  SELECTED: Chunk768107.modeSelected,
  CONNECTED: Chunk768107.modeConnected,
  UNREAD_IMPORTANT: Chunk768107.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: Chunk768107.modeUnreadLessImportant,
  MUTED: Chunk768107.modeMuted,
  LOCKED: Chunk768107.modeLocked
};

function Z(A) {
  A.preventDefault(), A.stopPropagation()
}
let O = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function y(A) {
  let {
    channel: t,
    size: e = h.EFr.SIZE_20
  } = A;
  return (0, r.jsx)(O, {
    src: (0, l.x)(t),
    "aria-hidden": true,
    size: e
  })
}

function x(A) {
  let {
    channel: t,
    size: e = h.EFr.SIZE_20
  } = A, g = (0, B.e7)([d.default], () => d.default.getUser(null == t ? true : t.recipients[0])), v = (0, B.e7)([M.Z], () => !(null == g || null == t || t.isMultiUserDM()) && null != M.Z.getTypingUsers(null == t ? true : t.id)[null == g ? true : g.id]), {
    status: n,
    isMobile: f
  } = (0, B.cj)([D.Z], () => null == g || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: false
  } : {
    status: D.Z.getStatus(g.id),
    isMobile: D.Z.isMobileOnline(g.id)
  });
  return (0, r.jsx)(O, {
    size: e,
    src: null == g ? true : g.getAvatarURL(true, 40),
    status: n,
    isMobile: f,
    isTyping: v,
    "aria-label": null == g ? true : g.username,
    statusTooltip: true
  })
}
let L = A => {
    let {
      className: t,
      containerClassName: e,
      channel: g,
      locked: v,
      hasActiveThreads: f,
      withGuildIcon: l
    } = A, i = (0, B.e7)([c.Z], () => c.Z.getGuild(g.guild_id), [g.guild_id]), C = g.type === b.d4z.DM || g.type === b.d4z.GROUP_DM, a = null;
    if (l && null != i && !C) a = (0, r.jsx)(Q.Z, {
      size: Q.E.SMALL_32,
      className: P.iconContainerWithGuildIcon,
      iconClassName: P.iconWithGuildIcon,
      channel: g,
      guild: i,
      locked: v,
      hasActiveThreads: f
    });
    else {
      let A = function(A, t, e) {
        switch (A.type) {
          case b.d4z.DM:
            return function() {
              return (0, r.jsx)(x, {
                channel: A
              })
            };
          case b.d4z.GROUP_DM:
            return function() {
              return (0, r.jsx)(y, {
                channel: A
              })
            };
          default:
            return (0, o.KS)(A, t, e)
        }
      }(g, i, {
        locked: v,
        hasActiveThreads: f
      });
      if (null == A) return null;
      a = (0, r.jsx)(A, {
        color: "currentColor",
        className: n()(P.icon, t)
      })
    }
    let w = l ? null == i ? true : i.name : (0, o.bT)(g, i, v, f),
      s = l && null != i ? "".concat(i.name, " - ").concat(w, " icon") : "".concat(w, " icon");
    return (0, r.jsx)(h.ua7, {
      text: w,
      delay: 500,
      children: A => (0, r.jsx)("div", I(u({}, A), {
        role: "img",
        "aria-label": s,
        className: n()(P.iconContainer, e),
        children: a
      }))
    })
  },
  X = 12633 == require.j ? Chunk73800.forwardRef(function(A, t) {
    var e, v, B;
    let {
      channel: l,
      name: o,
      muted: Q,
      selected: c,
      connected: D,
      unread: M,
      locked: d,
      hasActiveThreads: p,
      onClick: O,
      onMouseDown: y,
      onMouseUp: x,
      onContextMenu: X,
      connectDragPreview: m,
      className: G,
      iconClassName: T,
      subtitle: F,
      subtitleColor: k,
      channel: {
        type: Y
      },
      onMouseEnter: N,
      onMouseLeave: K,
      "aria-label": z,
      children: J,
      guild: W,
      channelTypeOverride: S,
      forceInteractable: U,
      mentionCount: R,
      resolvedUnreadSetting: q,
      isFavoriteSuggestion: _,
      withGuildIcon: $,
      hasActiveEvent: AA = false
    } = A, At = q === V.i.ALL_MESSAGES || null != R && R > 0, Ae = (0, f.JA)(l.id), {
      role: Ar
    } = Ae, Ag = function(A, t) {
      if (null == A) return {};
      var e, r, g = function(A, t) {
        if (null == A) return {};
        var e, r, g = {},
          v = Object.keys(A);
        for (r = 0; r < v.length; r++) e = v[r], t.indexOf(e) >= 0 || (g[e] = A[e]);
        return g
      }(A, t);
      if (Object.getOwnPropertySymbols) {
        var v = Object.getOwnPropertySymbols(A);
        for (r = 0; r < v.length; r++) e = v[r], !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(A, e) && (g[e] = A[e])
      }
      return g
    }(Ae, ["role"]), Av = g.useRef(null), An = g.useRef(null), Af = (0, s.Z)(l), AB = b.Z5c.CHANNEL(Af, l.id), Ah = (0, i.ZP)(l), Al = null;
    l.isPrivate() && 1 === (null != (e = l.rawRecipients) ? e : []).length && (Al = (0, a.bN)(null == (v = l.rawRecipients[0]) ? true : v.display_name_styles));
    let Ai = (0, w.j)({
        displayNameStyles: Al
      }),
      Ao = l.isGuildVocal(),
      AC = (0, r.jsx)("div", {
        className: n()({
          [P.favoritesSuggestion]: _
        }),
        ref: An,
        children: (0, r.jsxs)(H.Z, I(u({
          role: Ao && !D ? "button" : "link",
          href: Ao ? true : AB,
          target: "_blank",
          ref: Av,
          className: P.link,
          onClick: () => null == O ? true : O(l)
        }, Ag), {
          "aria-label": z,
          focusProps: {
            enabled: false
          },
          children: [(0, r.jsxs)("div", {
            className: P.linkTop,
            children: [(0, r.jsx)(L, {
              className: T,
              channel: l,
              guild: W,
              hasActiveThreads: p,
              locked: d,
              withGuildIcon: $
            }), (0, r.jsx)(C.Z, {
              className: n()(P.name, Ai, {
                [P.activeEvent]: AA
              }),
              "aria-hidden": true,
              children: null == o ? Ah : o
            }), g.Children.count(J) > 0 ? (0, r.jsx)("div", {
              onClick: Z,
              className: P.children,
              children: J
            }) : null]
          }), null != F ? (0, r.jsx)("div", {
            className: n()(P.linkBottom, {
              [P.withGuildIcon]: $
            }),
            children: (0, r.jsx)(h.Text, {
              color: null != k ? k : "text-muted",
              variant: "text-xs/medium",
              className: P.subtitle,
              children: F
            })
          }) : null]
        }))
      });
    return (0, r.jsx)(h.tEY, {
      focusTarget: Av,
      ringTarget: An,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, r.jsxs)("div", {
        ref: t,
        className: n()(G, null != O || null != x || null != y || U ? P.wrapper : P.notInteractive, (() => {
          if (c) return n()(E.selectedChannel, j.SELECTED);
          if (D) return n()(E.selectedChannel, j.CONNECTED);
          if (d) return j.LOCKED;
          if (Q) return j.MUTED;
          if (M)
            if (At) return j.UNREAD_IMPORTANT;
            else return j.UNREAD_LESS_IMPORTANT;
          return null
        })(), function(A) {
          switch (A) {
            case b.d4z.GUILD_STAGE_VOICE:
            case b.d4z.GUILD_VOICE:
              return P.typeVoice;
            case b.d4z.ANNOUNCEMENT_THREAD:
            case b.d4z.PUBLIC_THREAD:
            case b.d4z.PRIVATE_THREAD:
              return P.typeThread;
            case b.d4z.GUILD_ANNOUNCEMENT:
            case b.d4z.GUILD_TEXT:
            case b.d4z.GUILD_STORE:
            case b.d4z.GUILD_FORUM:
            case b.d4z.GUILD_MEDIA:
            default:
              return P.typeDefault
          }
        }(null != S ? S : Y)),
        onMouseUp: A => null == x ? true : x(A, l),
        onMouseDown: A => null == y ? true : y(A, l),
        onContextMenu: A => null == X ? true : X(A, l),
        onMouseEnter: N,
        onMouseLeave: K,
        children: [Q || !M ? null : (0, r.jsx)("div", {
          className: n()(P.unread, At ? P.unreadImportant : true)
        }), null != (B = null == m ? true : m(AC)) ? B : AC]
      })
    })
  }) : null