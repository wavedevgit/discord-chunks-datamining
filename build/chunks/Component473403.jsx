/** Chunk was on 39206 **/
/** chunk id: 473403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => k,
  _W: () => U,
  ge: () => Z,
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
  Chunk642915 = require("./642915.js"),
  Chunk323453 = require("./323453.js");
let R = {
  SELECTED: Chunk323453.modeSelected,
  CONNECTED: Chunk323453.modeConnected,
  UNREAD_IMPORTANT: Chunk323453.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: Chunk323453.modeUnreadLessImportant,
  MUTED: Chunk323453.modeMuted,
  LOCKED: Chunk323453.modeLocked,
  HOISTING_NOT_CONNECTED: Chunk323453.hoistingNotConnected
};

function P(e) {
  e.preventDefault(), e.stopPropagation()
}
let G = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function Z(e) {
  let {
    channel: t,
    size: n = d.EFr.SIZE_20
  } = e;
  return (0, l.jsx)(G, {
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
  } = (0, s.cj)([I.Z], () => null == i || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: false
  } : {
    status: I.Z.getStatus(i.id),
    isMobile: I.Z.isMobileOnline(i.id)
  });
  return (0, l.jsx)(G, {
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
    } = e, h = (0, s.e7)([j.Z], () => j.Z.getGuild(i.guild_id), [i.guild_id]), N = i.type === A.d4z.DM || i.type === A.d4z.GROUP_DM, {
      enableWaveformIcon: v
    } = (0, f.M)(i.guild_id, "ChannelItemIcon"), T = (0, s.e7)([g.Z], () => g.Z.getAnimationStyle(i.id), [i.id]), O = i.type === A.d4z.GUILD_VOICE, y = v && O && !r && u, b = null;
    if (d && null != h && !N) b = (0, l.jsx)(S.Z, {
      size: S.E.SMALL_32,
      className: L.iconContainerWithGuildIcon,
      iconClassName: L.iconWithGuildIcon,
      channel: i,
      guild: h,
      locked: r,
      hasActiveThreads: o
    });
    else if (y) b = (0, l.jsx)(E.Z, {
      color: "currentColor",
      className: a()(L.icon, t),
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
              return (0, l.jsx)(Z, {
                channel: e
              })
            };
          default:
            return (0, p.KS)(e, t, n)
        }
      }(i, h, {
        locked: r,
        hasActiveThreads: o
      });
      if (null == e) return null;
      b = (0, l.jsx)(e, {
        color: "currentColor",
        className: a()(L.icon, t)
      })
    }
    let I = d ? null == h ? true : h.name : (0, p.bT)(i, h, r, o),
      x = d && null != h ? "".concat(h.name, " - ").concat(I, " icon") : "".concat(I, " icon");
    return (0, l.jsx)(c.u, {
      text: I,
      delay: 500,
      children: (0, l.jsx)("div", {
        role: "img",
        "aria-label": x,
        className: a()(L.iconContainer, n),
        children: b
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
      connected: p,
      unread: v,
      locked: T,
      hasActiveThreads: O,
      onClick: S,
      onMouseDown: j,
      onMouseUp: I,
      onContextMenu: x,
      connectDragPreview: D,
      className: C,
      iconClassName: G,
      subtitle: Z,
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
    } = (0, f.M)(g.guild_id, "ChannelItem"), ei = en || el, er = (0, s.e7)([_.Z], () => Object.values(_.Z.getVoiceStatesForChannel(g.id)).length > 0, [g.id]), ea = ei && g.isGuildVocal() && er, eo = (0, o.JA)(g.id), {
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
        [L.favoritesSuggestion]: Q
      }),
      ref: ed,
      children: (0, l.jsxs)(b.Z, (r = function(e) {
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
        role: em && !p ? "button" : "link",
        href: em ? true : ef,
        target: "_blank",
        ref: ec,
        className: L.link,
        onClick: () => null == S ? true : S(g)
      }, eu), c = c = {
        "aria-label": W,
        focusProps: {
          enabled: false
        },
        children: [(0, l.jsxs)("div", {
          className: L.linkTop,
          children: [(0, l.jsx)(U, {
            className: G,
            channel: g,
            guild: q,
            hasUsersInVoiceChannel: er,
            hasActiveThreads: O,
            locked: T,
            withGuildIcon: $
          }), (0, l.jsx)(u.Z, {
            className: a()(L.name, {
              [L.activeEvent]: ee
            }),
            "aria-hidden": true,
            children: (0, l.jsx)(B, {
              channel: g,
              name: null != h ? h : eh
            })
          }), i.Children.count(F) > 0 ? (0, l.jsx)("div", {
            onClick: P,
            className: L.children,
            children: F
          }) : null]
        }), null != Z ? (0, l.jsx)("div", {
          className: a()(L.linkBottom, {
            [L.withGuildIcon]: $
          }),
          children: (0, l.jsx)(d.Text, {
            color: null != H ? H : "text-muted",
            variant: "text-xs/medium",
            className: L.subtitle,
            children: Z
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
        className: a()(C, null != S || null != I || null != j || Y ? L.wrapper : L.notInteractive, (() => {
          if (E) return a()(M.selectedChannel, R.SELECTED);
          if (p) return a()(M.selectedChannel, R.CONNECTED);
          if (T) return R.LOCKED;
          if (m) return R.MUTED;
          if (ei && !p && ea) return R.HOISTING_NOT_CONNECTED;
          if (v)
            if (et) return R.UNREAD_IMPORTANT;
            else return R.UNREAD_LESS_IMPORTANT;
          return null
        })(), function(e) {
          switch (e) {
            case A.d4z.GUILD_STAGE_VOICE:
            case A.d4z.GUILD_VOICE:
              return L.typeVoice;
            case A.d4z.ANNOUNCEMENT_THREAD:
            case A.d4z.PUBLIC_THREAD:
            case A.d4z.PRIVATE_THREAD:
              return L.typeThread;
            case A.d4z.GUILD_ANNOUNCEMENT:
            case A.d4z.GUILD_TEXT:
            case A.d4z.GUILD_STORE:
            case A.d4z.GUILD_FORUM:
            case A.d4z.GUILD_MEDIA:
            default:
              return L.typeDefault
          }
        }(null != K ? K : k)),
        onMouseUp: e => null == I ? true : I(e, g),
        onMouseDown: e => null == j ? true : j(e, g),
        onContextMenu: e => null == x ? true : x(e, g),
        onMouseEnter: z,
        onMouseLeave: V,
        children: [!el && v && !m && (0, l.jsx)("div", {
          className: a()(L.unread, et ? L.unreadImportant : true)
        }), null != (n = null == D ? true : D(eN)) ? n : eN]
      })
    })
  }) : null;

function B(e) {
  var t, n, r;
  let {
    channel: a,
    name: o
  } = e, s = a.isPrivate() && 1 === (null != (r = a.rawRecipients) ? r : []).length, u = null == (n = a.rawRecipients) || null == (t = n[0]) ? true : t.display_name_styles, c = i.useMemo(() => s ? (0, v.bN)(u) : null, [s, u]);
  return null != c ? (0, l.jsx)(O.Z, {
    userName: o,
    displayNameStyles: c,
    effectDisplayType: T.F.PLAIN,
    boldFontOpacity: .9
  }) : o
}