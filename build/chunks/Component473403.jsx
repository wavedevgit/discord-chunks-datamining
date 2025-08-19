/** Chunk was on 13368 **/
/** chunk id: 473403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => k,
  _W: () => D,
  ge: () => Z,
  je: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356);
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
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function j(e, t) {
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
let T = {
  SELECTED: Chunk509612.modeSelected,
  CONNECTED: Chunk509612.modeConnected,
  UNREAD_IMPORTANT: Chunk509612.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: Chunk509612.modeUnreadLessImportant,
  MUTED: Chunk509612.modeMuted,
  LOCKED: Chunk509612.modeLocked
};

function N(e) {
  e.preventDefault(), e.stopPropagation()
}
let L = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function Z(e) {
  let {
    channel: t,
    size: n = u.EFr.SIZE_20
  } = e;
  return (0, r.jsx)(L, {
    src: (0, s.x)(t),
    "aria-hidden": true,
    size: n
  })
}

function x(e) {
  let {
    channel: t,
    size: n = u.EFr.SIZE_20
  } = e, i = (0, c.e7)([O.default], () => O.default.getUser(null == t ? true : t.recipients[0])), o = (0, c.e7)([I.Z], () => !(null == i || null == t || t.isMultiUserDM()) && null != I.Z.getTypingUsers(null == t ? true : t.id)[null == i ? true : i.id]), {
    status: l,
    isMobile: a
  } = (0, c.cj)([y.Z], () => null == i || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: false
  } : {
    status: y.Z.getStatus(i.id),
    isMobile: y.Z.isMobileOnline(i.id)
  });
  return (0, r.jsx)(L, {
    size: n,
    src: null == i ? true : i.getAvatarURL(true, 40),
    status: l,
    isMobile: a,
    isTyping: o,
    "aria-label": null == i ? true : i.username,
    statusTooltip: true
  })
}
let D = e => {
    let {
      className: t,
      containerClassName: n,
      channel: i,
      locked: o,
      hasActiveThreads: a,
      withGuildIcon: s
    } = e, d = (0, c.e7)([g.Z], () => g.Z.getGuild(i.guild_id), [i.guild_id]), _ = i.type === S.d4z.DM || i.type === S.d4z.GROUP_DM, p = null;
    if (s && null != d && !_) p = (0, r.jsx)(v.Z, {
      size: v.E.SMALL_32,
      className: A.iconContainerWithGuildIcon,
      iconClassName: A.iconWithGuildIcon,
      channel: i,
      guild: d,
      locked: o,
      hasActiveThreads: a
    });
    else {
      let e = function(e, t, n) {
        switch (e.type) {
          case S.d4z.DM:
            return function() {
              return (0, r.jsx)(x, {
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
        locked: o,
        hasActiveThreads: a
      });
      if (null == e) return null;
      p = (0, r.jsx)(e, {
        color: "currentColor",
        className: l()(A.icon, t)
      })
    }
    let b = s ? null == d ? true : d.name : (0, f.bT)(i, d, o, a),
      h = s && null != d ? "".concat(d.name, " - ").concat(b, " icon") : "".concat(b, " icon");
    return (0, r.jsx)(u.ua7, {
      text: b,
      delay: 500,
      children: e => (0, r.jsx)("div", j(w({}, e), {
        role: "img",
        "aria-label": h,
        className: l()(A.iconContainer, n),
        children: p
      }))
    })
  },
  k = 12633 == require.j ? Chunk647438.forwardRef(function(e, t) {
    var n, o, c;
    let {
      channel: s,
      name: f,
      muted: v,
      selected: g,
      connected: y,
      unread: I,
      locked: O,
      hasActiveThreads: E,
      onClick: L,
      onMouseDown: Z,
      onMouseUp: x,
      onContextMenu: k,
      connectDragPreview: G,
      className: M,
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
      hasActiveEvent: ee = false
    } = e, et = X === C.i.ALL_MESSAGES || null != K && K > 0, en = (0, a.JA)(s.id), {
      role: er
    } = en, ei = function(e, t) {
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
    }(en, ["role"]), eo = i.useRef(null), el = i.useRef(null), ea = (0, h.Z)(s), ec = S.Z5c.CHANNEL(ea, s.id), eu = (0, d.ZP)(s), es = null;
    s.isPrivate() && 1 === (null != (n = s.rawRecipients) ? n : []).length && (es = (0, p.bN)(null == (o = s.rawRecipients[0]) ? true : o.display_name_styles));
    let ed = (0, b.j)({
        displayNameStyles: es
      }),
      ef = s.isGuildVocal(),
      e_ = (0, r.jsx)("div", {
        className: l()({
          [A.favoritesSuggestion]: J
        }),
        ref: el,
        children: (0, r.jsxs)(m.Z, j(w({
          role: ef && !y ? "button" : "link",
          href: ef ? true : ec,
          target: "_blank",
          ref: eo,
          className: A.link,
          onClick: () => null == L ? true : L(s)
        }, ei), {
          "aria-label": z,
          focusProps: {
            enabled: false
          },
          children: [(0, r.jsxs)("div", {
            className: A.linkTop,
            children: [(0, r.jsx)(D, {
              className: F,
              channel: s,
              guild: q,
              hasActiveThreads: E,
              locked: O,
              withGuildIcon: $
            }), (0, r.jsx)(_.Z, {
              className: l()(A.name, ed, {
                [A.activeEvent]: ee
              }),
              "aria-hidden": true,
              children: null == f ? eu : f
            }), i.Children.count(V) > 0 ? (0, r.jsx)("div", {
              onClick: N,
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
      focusTarget: eo,
      ringTarget: el,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, r.jsxs)("div", {
        ref: t,
        className: l()(M, null != L || null != x || null != Z || H ? A.wrapper : A.notInteractive, (() => {
          if (g) return l()(P.selectedChannel, T.SELECTED);
          if (y) return l()(P.selectedChannel, T.CONNECTED);
          if (O) return T.LOCKED;
          if (v) return T.MUTED;
          if (I)
            if (et) return T.UNREAD_IMPORTANT;
            else return T.UNREAD_LESS_IMPORTANT;
          return null
        })(), function(e) {
          switch (e) {
            case S.d4z.GUILD_STAGE_VOICE:
            case S.d4z.GUILD_VOICE:
              return A.typeVoice;
            case S.d4z.ANNOUNCEMENT_THREAD:
            case S.d4z.PUBLIC_THREAD:
            case S.d4z.PRIVATE_THREAD:
              return A.typeThread;
            case S.d4z.GUILD_ANNOUNCEMENT:
            case S.d4z.GUILD_TEXT:
            case S.d4z.GUILD_STORE:
            case S.d4z.GUILD_FORUM:
            case S.d4z.GUILD_MEDIA:
            default:
              return A.typeDefault
          }
        }(null != Y ? Y : W)),
        onMouseUp: e => null == x ? true : x(e, s),
        onMouseDown: e => null == Z ? true : Z(e, s),
        onContextMenu: e => null == k ? true : k(e, s),
        onMouseEnter: B,
        onMouseLeave: Q,
        children: [v || !I ? null : (0, r.jsx)("div", {
          className: l()(A.unread, et ? A.unreadImportant : true)
        }), null != (c = null == G ? true : G(e_)) ? c : e_]
      })
    })
  }) : null