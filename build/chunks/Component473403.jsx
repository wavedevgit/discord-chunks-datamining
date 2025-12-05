/** Chunk was on 39206 **/
/** chunk id: 473403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => k,
  _W: () => U,
  ge: () => G,
  je: () => H
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356);
if (12633 == require.j) var Chunk91192 = require("./91192.jsx");
var Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk454135 = require("./454135.js"),
  Chunk526139 = require("./526139.js"),
  Chunk43267 = require("./43267.js"),
  Chunk447003 = require("./447003.js"),
  Chunk933557 = require("./933557.js"),
  Chunk851910 = require("./851910.jsx"),
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
  Chunk979651 = require("./979651.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk55940 = require("./55940.js"),
  Chunk509612 = require("./509612.js");
let R = {
  SELECTED: Chunk509612.modeSelected,
  CONNECTED: Chunk509612.modeConnected,
  UNREAD_IMPORTANT: Chunk509612.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: Chunk509612.modeUnreadLessImportant,
  MUTED: Chunk509612.modeMuted,
  LOCKED: Chunk509612.modeLocked,
  HOISTING_NOT_CONNECTED: Chunk509612.hoistingNotConnected
};

function P(e) {
  e.preventDefault(), e.stopPropagation()
}
let Z = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function G(e) {
  let {
    channel: t,
    size: n = d.EFr.SIZE_20
  } = e;
  return (0, l.jsx)(Z, {
    src: (0, h.x)(t),
    "aria-hidden": true,
    size: n
  })
}

function H(e) {
  let {
    channel: t,
    size: n = d.EFr.SIZE_20
  } = e, i = (0, s.e7)([D.default], () => D.default.getUser(null == t ? true : t.recipients[0])), r = (0, s.e7)([x.Z], () => !(null == i || null == t || t.isMultiUserDM()) && null != x.Z.getTypingUsers(null == t ? true : t.id)[null == i ? true : i.id]), {
    status: a,
    isMobile: o
  } = (0, s.cj)([j.Z], () => null == i || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: false
  } : {
    status: j.Z.getStatus(i.id),
    isMobile: j.Z.isMobileOnline(i.id)
  });
  return (0, l.jsx)(Z, {
    size: n,
    src: null == i ? true : i.getAvatarURL(true, 40),
    status: a,
    isMobile: o,
    isTyping: r,
    "aria-label": null == i ? true : i.username,
    statusTooltip: true
  })
}
let U = Chunk473749.memo(function(e) {
    let {
      className: t,
      containerClassName: n,
      channel: i,
      locked: r,
      hasActiveThreads: o,
      hasUsersInVoiceChannel: u,
      withGuildIcon: d
    } = e, h = (0, s.e7)([I.Z], () => I.Z.getGuild(i.guild_id), [i.guild_id]), N = i.type === A.d4z.DM || i.type === A.d4z.GROUP_DM, {
      enableWaveformIcon: p
    } = f.Z.useConfig({
      guildId: i.guild_id,
      location: "ChannelItemIcon"
    }), T = (0, s.e7)([g.Z], () => g.Z.getAnimationStyle(i.id), [i.id]), O = i.type === A.d4z.GUILD_VOICE, y = p && O && !r && u, S = null;
    if (d && null != h && !N) S = (0, l.jsx)(b.Z, {
      size: b.E.SMALL_32,
      className: M.iconContainerWithGuildIcon,
      iconClassName: M.iconWithGuildIcon,
      channel: i,
      guild: h,
      locked: r,
      hasActiveThreads: o
    });
    else if (y) S = (0, l.jsx)(E.Z, {
      color: "currentColor",
      className: a()(M.icon, t),
      animationStyle: T,
      locked: (0, m.Z)(i)
    });
    else {
      let e = function(e, t, n) {
        switch (e.type) {
          case A.d4z.DM:
            return function() {
              return (0, l.jsx)(H, {
                channel: e
              })
            };
          case A.d4z.GROUP_DM:
            return function() {
              return (0, l.jsx)(G, {
                channel: e
              })
            };
          default:
            return (0, v.KS)(e, t, n)
        }
      }(i, h, {
        locked: r,
        hasActiveThreads: o
      });
      if (null == e) return null;
      S = (0, l.jsx)(e, {
        color: "currentColor",
        className: a()(M.icon, t)
      })
    }
    let j = d ? null == h ? true : h.name : (0, v.bT)(i, h, r, o),
      x = d && null != h ? "".concat(h.name, " - ").concat(j, " icon") : "".concat(j, " icon");
    return (0, l.jsx)(c.u, {
      text: j,
      delay: 500,
      children: (0, l.jsx)("div", {
        role: "img",
        "aria-label": x,
        className: a()(M.iconContainer, n),
        children: S
      })
    })
  }),
  k = 12633 == require.j ? Chunk473749.forwardRef(function(e, t) {
    var n, r, c;
    let {
      channel: g,
      name: h,
      muted: m,
      selected: E,
      connected: v,
      unread: p,
      locked: T,
      hasActiveThreads: O,
      onClick: b,
      onMouseDown: I,
      onMouseUp: j,
      onContextMenu: x,
      connectDragPreview: D,
      className: C,
      iconClassName: Z,
      subtitle: G,
      subtitleColor: H,
      channel: {
        type: k
      },
      onMouseEnter: z,
      onMouseLeave: V,
      "aria-label": W,
      children: F,
      guild: q,
      channelTypeOverride: K,
      forceInteractable: Y,
      mentionCount: X,
      resolvedUnreadSetting: J,
      isFavoriteSuggestion: Q,
      withGuildIcon: $,
      hasActiveEvent: ee = false
    } = e, et = J === w.i.ALL_MESSAGES || null != X && X > 0, {
      enableWaveformIcon: en,
      enableHighlight: el
    } = f.Z.useConfig({
      guildId: g.guild_id,
      location: "ChannelItem"
    }), ei = en || el, er = (0, s.e7)([_.Z], () => Object.values(_.Z.getVoiceStatesForChannel(g.id)).length > 0, [g.id]), ea = ei && g.isGuildVocal() && er, eo = (0, o.JA)(g.id), {
      role: es
    } = eo, eu = function(e, t) {
      if (null == e) return {};
      var n, l, i = function(e, t) {
        if (null == e) return {};
        var n, l, i = {},
          r = Object.keys(e);
        for (l = 0; l < r.length; l++) n = r[l], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(eo, ["role"]), ec = i.useRef(null), ed = i.useRef(null), eg = (0, y.Z)(g), ef = A.Z5c.CHANNEL(eg, g.id), eh = (0, N.ZP)(g), em = g.isGuildVocal(), eN = (0, l.jsx)("div", {
      className: a()({
        [M.favoritesSuggestion]: Q
      }),
      ref: ed,
      children: (0, l.jsxs)(S.Z, (r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({
        role: em && !v ? "button" : "link",
        href: em ? true : ef,
        target: "_blank",
        ref: ec,
        className: M.link,
        onClick: () => null == b ? true : b(g)
      }, eu), c = c = {
        "aria-label": W,
        focusProps: {
          enabled: false
        },
        children: [(0, l.jsxs)("div", {
          className: M.linkTop,
          children: [(0, l.jsx)(U, {
            className: Z,
            channel: g,
            guild: q,
            hasUsersInVoiceChannel: er,
            hasActiveThreads: O,
            locked: T,
            withGuildIcon: $
          }), (0, l.jsx)(u.Z, {
            className: a()(M.name, {
              [M.activeEvent]: ee
            }),
            "aria-hidden": true,
            children: (0, l.jsx)(B, {
              channel: g,
              name: null != h ? h : eh
            })
          }), i.Children.count(F) > 0 ? (0, l.jsx)("div", {
            onClick: P,
            className: M.children,
            children: F
          }) : null]
        }), null != G ? (0, l.jsx)("div", {
          className: a()(M.linkBottom, {
            [M.withGuildIcon]: $
          }),
          children: (0, l.jsx)(d.Text, {
            color: null != H ? H : "text-muted",
            variant: "text-xs/medium",
            className: M.subtitle,
            children: G
          })
        }) : null]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(c)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(c, e))
      }), r))
    });
    return (0, l.jsx)(d.tEY, {
      focusTarget: ec,
      ringTarget: ed,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, l.jsxs)("div", {
        ref: t,
        className: a()(C, null != b || null != j || null != I || Y ? M.wrapper : M.notInteractive, (() => {
          if (E) return a()(L.selectedChannel, R.SELECTED);
          if (v) return a()(L.selectedChannel, R.CONNECTED);
          if (T) return R.LOCKED;
          if (m) return R.MUTED;
          if (ei && !v && ea) return R.HOISTING_NOT_CONNECTED;
          if (p)
            if (et) return R.UNREAD_IMPORTANT;
            else return R.UNREAD_LESS_IMPORTANT;
          return null
        })(), function(e) {
          switch (e) {
            case A.d4z.GUILD_STAGE_VOICE:
            case A.d4z.GUILD_VOICE:
              return M.typeVoice;
            case A.d4z.ANNOUNCEMENT_THREAD:
            case A.d4z.PUBLIC_THREAD:
            case A.d4z.PRIVATE_THREAD:
              return M.typeThread;
            case A.d4z.GUILD_ANNOUNCEMENT:
            case A.d4z.GUILD_TEXT:
            case A.d4z.GUILD_STORE:
            case A.d4z.GUILD_FORUM:
            case A.d4z.GUILD_MEDIA:
            default:
              return M.typeDefault
          }
        }(null != K ? K : k)),
        onMouseUp: e => null == j ? true : j(e, g),
        onMouseDown: e => null == I ? true : I(e, g),
        onContextMenu: e => null == x ? true : x(e, g),
        onMouseEnter: z,
        onMouseLeave: V,
        children: [!ea && p && !m && (0, l.jsx)("div", {
          className: a()(M.unread, et ? M.unreadImportant : true)
        }), null != (n = null == D ? true : D(eN)) ? n : eN]
      })
    })
  }) : null;

function B(e) {
  var t, n, r;
  let {
    channel: a,
    name: o
  } = e, s = a.isPrivate() && 1 === (null != (r = a.rawRecipients) ? r : []).length, u = null == (n = a.rawRecipients) || null == (t = n[0]) ? true : t.display_name_styles, c = i.useMemo(() => s ? (0, p.bN)(u) : null, [s, u]);
  return null != c ? (0, l.jsx)(O.Z, {
    userName: o,
    displayNameStyles: c,
    effectDisplayType: T.F.PLAIN,
    boldFontOpacity: .9
  }) : o
}