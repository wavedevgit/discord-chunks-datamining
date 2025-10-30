/** Chunk was on 67807 **/
/** chunk id: 473403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => C,
  _W: () => Z,
  ge: () => I,
  je: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356);
if (12633 == require.j) var Chunk91192 = require("./91192.jsx");
var Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk131016 = require("./131016.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
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
  Chunk33082 = require("./33082.js"),
  Chunk516966 = require("./516966.js");
let M = {
  SELECTED: Chunk516966.modeSelected,
  CONNECTED: Chunk516966.modeConnected,
  UNREAD_IMPORTANT: Chunk516966.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: Chunk516966.modeUnreadLessImportant,
  MUTED: Chunk516966.modeMuted,
  LOCKED: Chunk516966.modeLocked
};

function T(e) {
  e.preventDefault(), e.stopPropagation()
}
let A = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function I(e) {
  let {
    channel: t,
    size: n = d.EFr.SIZE_20
  } = e;
  return (0, r.jsx)(A, {
    src: (0, p.x)(t),
    "aria-hidden": true,
    size: n
  })
}

function _(e) {
  let {
    channel: t,
    size: n = d.EFr.SIZE_20
  } = e, l = (0, o.e7)([E.default], () => E.default.getUser(null == t ? true : t.recipients[0])), i = (0, o.e7)([x.Z], () => !(null == l || null == t || t.isMultiUserDM()) && null != x.Z.getTypingUsers(null == t ? true : t.id)[null == l ? true : l.id]), {
    status: s,
    isMobile: a
  } = (0, o.cj)([y.Z], () => null == l || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: false
  } : {
    status: y.Z.getStatus(l.id),
    isMobile: y.Z.isMobileOnline(l.id)
  });
  return (0, r.jsx)(A, {
    size: n,
    src: null == l ? true : l.getAvatarURL(true, 40),
    status: s,
    isMobile: a,
    isTyping: i,
    "aria-label": null == l ? true : l.username,
    statusTooltip: true
  })
}
let Z = e => {
    let {
      className: t,
      containerClassName: n,
      channel: l,
      locked: i,
      hasActiveThreads: a,
      withGuildIcon: c
    } = e, d = (0, o.e7)([D.Z], () => D.Z.getGuild(l.guild_id), [l.guild_id]), p = l.type === w.d4z.DM || l.type === w.d4z.GROUP_DM, h = null;
    if (c && null != d && !p) h = (0, r.jsx)(O.Z, {
      size: O.E.SMALL_32,
      className: S.iconContainerWithGuildIcon,
      iconClassName: S.iconWithGuildIcon,
      channel: l,
      guild: d,
      locked: i,
      hasActiveThreads: a
    });
    else {
      let e = function(e, t, n) {
        switch (e.type) {
          case w.d4z.DM:
            return function() {
              return (0, r.jsx)(_, {
                channel: e
              })
            };
          case w.d4z.GROUP_DM:
            return function() {
              return (0, r.jsx)(I, {
                channel: e
              })
            };
          default:
            return (0, f.KS)(e, t, n)
        }
      }(l, d, {
        locked: i,
        hasActiveThreads: a
      });
      if (null == e) return null;
      h = (0, r.jsx)(e, {
        color: "currentColor",
        className: s()(S.icon, t)
      })
    }
    let g = c ? null == d ? true : d.name : (0, f.bT)(l, d, i, a),
      v = c && null != d ? "".concat(d.name, " - ").concat(g, " icon") : "".concat(g, " icon");
    return (0, r.jsx)(u.u, {
      text: g,
      delay: 500,
      children: (0, r.jsx)("div", {
        role: "img",
        "aria-label": v,
        className: s()(S.iconContainer, n),
        children: h
      })
    })
  },
  C = 12633 == require.j ? Chunk647438.forwardRef(function(e, t) {
    var n, i, o;
    let {
      channel: u,
      name: p,
      muted: f,
      selected: g,
      connected: v,
      unread: m,
      locked: O,
      hasActiveThreads: D,
      onClick: y,
      onMouseDown: x,
      onMouseUp: E,
      onContextMenu: N,
      connectDragPreview: A,
      className: I,
      iconClassName: _,
      subtitle: C,
      subtitleColor: R,
      channel: {
        type: k
      },
      onMouseEnter: z,
      onMouseLeave: G,
      "aria-label": W,
      children: F,
      guild: H,
      channelTypeOverride: K,
      forceInteractable: V,
      mentionCount: B,
      resolvedUnreadSetting: q,
      isFavoriteSuggestion: J,
      withGuildIcon: Y,
      hasActiveEvent: Q = false
    } = e, X = q === P.i.ALL_MESSAGES || null != B && B > 0, $ = (0, a.JA)(u.id), {
      role: ee
    } = $, et = function(e, t) {
      if (null == e) return {};
      var n, r, l = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }($, ["role"]), en = l.useRef(null), er = l.useRef(null), el = (0, b.Z)(u), ei = w.Z5c.CHANNEL(el, u.id), es = (0, h.ZP)(u), ea = u.isGuildVocal(), eo = (0, r.jsx)("div", {
      className: s()({
        [S.favoritesSuggestion]: J
      }),
      ref: er,
      children: (0, r.jsxs)(j.Z, (i = function(e) {
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
      }({
        role: ea && !v ? "button" : "link",
        href: ea ? true : ei,
        target: "_blank",
        ref: en,
        className: S.link,
        onClick: () => null == y ? true : y(u)
      }, et), o = o = {
        "aria-label": W,
        focusProps: {
          enabled: false
        },
        children: [(0, r.jsxs)("div", {
          className: S.linkTop,
          children: [(0, r.jsx)(Z, {
            className: _,
            channel: u,
            guild: H,
            hasActiveThreads: D,
            locked: O,
            withGuildIcon: Y
          }), (0, r.jsx)(c.Z, {
            className: s()(S.name, {
              [S.activeEvent]: Q
            }),
            "aria-hidden": true,
            children: (0, r.jsx)(U, {
              channel: u,
              name: null != p ? p : es
            })
          }), l.Children.count(F) > 0 ? (0, r.jsx)("div", {
            onClick: T,
            className: S.children,
            children: F
          }) : null]
        }), null != C ? (0, r.jsx)("div", {
          className: s()(S.linkBottom, {
            [S.withGuildIcon]: Y
          }),
          children: (0, r.jsx)(d.Text, {
            color: null != R ? R : "text-muted",
            variant: "text-xs/medium",
            className: S.subtitle,
            children: C
          })
        }) : null]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
      }), i))
    });
    return (0, r.jsx)(d.tEY, {
      focusTarget: en,
      ringTarget: er,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, r.jsxs)("div", {
        ref: t,
        className: s()(I, null != y || null != E || null != x || V ? S.wrapper : S.notInteractive, (() => {
          if (g) return s()(L.selectedChannel, M.SELECTED);
          if (v) return s()(L.selectedChannel, M.CONNECTED);
          if (O) return M.LOCKED;
          if (f) return M.MUTED;
          if (m)
            if (X) return M.UNREAD_IMPORTANT;
            else return M.UNREAD_LESS_IMPORTANT;
          return null
        })(), function(e) {
          switch (e) {
            case w.d4z.GUILD_STAGE_VOICE:
            case w.d4z.GUILD_VOICE:
              return S.typeVoice;
            case w.d4z.ANNOUNCEMENT_THREAD:
            case w.d4z.PUBLIC_THREAD:
            case w.d4z.PRIVATE_THREAD:
              return S.typeThread;
            case w.d4z.GUILD_ANNOUNCEMENT:
            case w.d4z.GUILD_TEXT:
            case w.d4z.GUILD_STORE:
            case w.d4z.GUILD_FORUM:
            case w.d4z.GUILD_MEDIA:
            default:
              return S.typeDefault
          }
        }(null != K ? K : k)),
        onMouseUp: e => null == E ? true : E(e, u),
        onMouseDown: e => null == x ? true : x(e, u),
        onContextMenu: e => null == N ? true : N(e, u),
        onMouseEnter: z,
        onMouseLeave: G,
        children: [f || !m ? null : (0, r.jsx)("div", {
          className: s()(S.unread, X ? S.unreadImportant : true)
        }), null != (n = null == A ? true : A(eo)) ? n : eo]
      })
    })
  }) : null;

function U(e) {
  var t, n, i;
  let {
    channel: s,
    name: a
  } = e, o = s.isPrivate() && 1 === (null != (i = s.rawRecipients) ? i : []).length, c = null == (n = s.rawRecipients) || null == (t = n[0]) ? true : t.display_name_styles, u = l.useMemo(() => o ? (0, g.bN)(c) : null, [o, c]);
  return null != u ? (0, r.jsx)(m.Z, {
    userName: a,
    displayNameStyles: u,
    effectDisplayType: v.F.PLAIN,
    boldFontOpacity: .9
  }) : a
}