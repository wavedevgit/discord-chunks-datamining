/** Chunk was on 60989 **/
/** chunk id: 166444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => B,
  IC: () => H,
  Pk: () => U,
  gm: () => k
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698);
if (21552 == require.j) var Chunk837381 = require("./837381.jsx");
var Chunk311907 = require("./311907.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk25639 = require("./25639.js"),
  Chunk186369 = require("./186369.js"),
  Chunk571694 = require("./571694.js"),
  Chunk148719 = require("./148719.js"),
  Chunk47167 = require("./47167.js"),
  Chunk970812 = require("./970812.jsx"),
  Chunk713654 = require("./713654.js"),
  Chunk945096 = require("./945096.js"),
  Chunk922301 = require("./922301.js"),
  Chunk750112 = require("./750112.jsx"),
  Chunk584682 = require("./584682.js"),
  Chunk255266 = require("./255266.jsx"),
  Chunk95035 = require("./95035.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk290863 = require("./290863.js"),
  Chunk741961 = require("./741961.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js"),
  Chunk728444 = require("./728444.js"),
  Chunk811094 = require("./811094.js");
let R = {
  SELECTED: Chunk811094.J1,
  CONNECTED: Chunk811094.d4,
  UNREAD_IMPORTANT: Chunk811094.V2,
  UNREAD_LESS_IMPORTANT: Chunk811094.modeUnreadLessImportant,
  MUTED: Chunk811094.F4,
  LOCKED: Chunk811094.yg,
  HOISTING_NOT_CONNECTED: Chunk811094.oh
};

function G(e) {
  e.preventDefault(), e.stopPropagation()
}
let P = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF;

function H(e) {
  let {
    channel: t,
    size: n = d._3J.SIZE_20
  } = e;
  return (0, l.jsx)(P, {
    src: (0, h.Y)(t),
    "aria-hidden": true,
    size: n
  })
}

function U(e) {
  let {
    channel: t,
    size: n = d._3J.SIZE_20
  } = e, r = (0, o.bG)([I.default], () => I.default.getUser(null == t ? true : t.recipients[0])), i = (0, o.bG)([x.A], () => !(null == r || null == t || t.isMultiUserDM()) && null != x.A.getTypingUsers(null == t ? true : t.id)[null == r ? true : r.id]), {
    status: a,
    isMobile: s
  } = (0, o.cf)([j.A], () => null == r || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: false
  } : {
    status: j.A.getStatus(r.id),
    isMobile: j.A.isMobileOnline(r.id)
  });
  return (0, l.jsx)(P, {
    size: n,
    src: null == r ? true : r.getAvatarURL(true, 40),
    status: a,
    isMobile: s,
    isTyping: i,
    "aria-label": null == r ? true : r.username,
    statusTooltip: true
  })
}
let k = Chunk64700.memo(function(e) {
    let {
      className: t,
      containerClassName: n,
      channel: r,
      locked: i,
      hasActiveThreads: s,
      hasUsersInVoiceChannel: u,
      withGuildIcon: d
    } = e, h = (0, o.bG)([S.A], () => S.A.getGuild(r.guild_id), [r.guild_id]), b = r.type === w.rbe.DM || r.type === w.rbe.GROUP_DM, {
      enableWaveformIcon: A
    } = (0, g.b)(r.guild_id, "ChannelItemIcon"), E = (0, o.bG)([f.A], () => f.A.getAnimationStyle(r.id), [r.id]), p = r.type === w.rbe.GUILD_VOICE, O = A && p && !i && u, v = null;
    if (d && null != h && !b) v = (0, l.jsx)(T.A, {
      size: T.q.SMALL_32,
      className: L.h5,
      iconClassName: L.Is,
      channel: r,
      guild: h,
      locked: i,
      hasActiveThreads: s
    });
    else if (O) v = (0, l.jsx)(y.A, {
      color: "currentColor",
      className: a()(L.Kk, t),
      animationStyle: E,
      locked: (0, m.A)(r)
    });
    else {
      let e = function(e, t, n) {
        switch (e.type) {
          case w.rbe.DM:
            return function() {
              return (0, l.jsx)(U, {
                channel: e
              })
            };
          case w.rbe.GROUP_DM:
            return function() {
              return (0, l.jsx)(H, {
                channel: e
              })
            };
          default:
            return (0, N.gU)(e, t, n)
        }
      }(r, h, {
        locked: i,
        hasActiveThreads: s
      });
      if (null == e) return null;
      v = (0, l.jsx)(e, {
        color: "currentColor",
        className: a()(L.Kk, t)
      })
    }
    let j = d ? null == h ? true : h.name : (0, N.Bq)(r, h, i, s),
      x = d && null != h ? "".concat(h.name, " - ").concat(j, " icon") : "".concat(j, " icon");
    return (0, l.jsx)(c.m, {
      text: j,
      delay: 500,
      children: (0, l.jsx)("div", {
        role: "img",
        "aria-label": x,
        className: a()(L.zc, n),
        children: v
      })
    })
  }),
  B = 21552 == require.j ? Chunk64700.forwardRef(function(e, t) {
    var n, i, c;
    let {
      channel: f,
      name: h,
      muted: m,
      selected: y,
      connected: N,
      unread: A,
      locked: E,
      hasActiveThreads: p,
      onClick: T,
      onMouseDown: S,
      onMouseUp: j,
      onContextMenu: x,
      connectDragPreview: I,
      className: _,
      iconClassName: P,
      subtitle: H,
      subtitleColor: U,
      channel: {
        type: B
      },
      onMouseEnter: V,
      onMouseLeave: q,
      "aria-label": K,
      children: W,
      guild: z,
      channelTypeOverride: Y,
      forceInteractable: Z,
      mentionCount: J,
      resolvedUnreadSetting: Q,
      isFavoriteSuggestion: X,
      withGuildIcon: $,
      hasActiveEvent: ee = false
    } = e, et = Q === C.e.ALL_MESSAGES || null != J && J > 0, {
      enableWaveformIcon: en,
      enableHighlight: el
    } = (0, g.b)(f.guild_id, "ChannelItem"), er = en || el, ei = (0, o.bG)([D.A], () => Object.values(D.A.getVoiceStatesForChannel(f.id)).length > 0, [f.id]), ea = er && f.isGuildVocal() && ei, es = el && f.isGuildVocal() && ei, eo = (0, s.rm)(f.id), {
      role: eu
    } = eo, ec = function(e, t) {
      if (null == e) return {};
      var n, l, r, i = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
        return i
      }
      if (i = function(e, t) {
          if (null == e) return {};
          var n, l, r = {},
            i = Object.getOwnPropertyNames(e);
          for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
          return r
        }(e, t), Object.getOwnPropertySymbols)
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
      return i
    }(eo, ["role"]), ed = r.useRef(null), ef = r.useRef(null), eg = (0, O.A)(f), eh = w.BVt.CHANNEL(eg, f.id), em = (0, b.Ay)(f), eb = f.isGuildVocal(), ey = (0, l.jsx)("div", {
      className: a()({
        [L.ow]: X
      }),
      ref: ef,
      children: (0, l.jsxs)(v.A, (i = function(e) {
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
        role: eb && !N ? "button" : "link",
        href: eb ? true : eh,
        target: "_blank",
        ref: ed,
        className: L.nf,
        onClick: () => null == T ? true : T(f)
      }, ec), c = c = {
        "aria-label": K,
        focusProps: {
          enabled: false
        },
        children: [(0, l.jsxs)("div", {
          className: L.Y5,
          children: [(0, l.jsx)(k, {
            className: P,
            channel: f,
            guild: z,
            hasUsersInVoiceChannel: ei,
            hasActiveThreads: p,
            locked: E,
            withGuildIcon: $
          }), (0, l.jsx)(u.A, {
            className: a()(L.UU, {
              [L.NW]: ee
            }),
            "aria-hidden": true,
            children: (0, l.jsx)(F, {
              channel: f,
              name: null != h ? h : em
            })
          }), r.Children.count(W) > 0 ? (0, l.jsx)("div", {
            onClick: G,
            className: L.Y_,
            children: W
          }) : null]
        }), null != H ? (0, l.jsx)("div", {
          className: a()(L.MA, {
            [L.lY]: $
          }),
          children: (0, l.jsx)(d.Text, {
            color: null != U ? U : "text-muted",
            variant: "text-xs/medium",
            className: L.VA,
            children: H
          })
        }) : null]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(c)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(c, e))
      }), i))
    });
    return (0, l.jsx)(d.vN3, {
      focusTarget: ed,
      ringTarget: ef,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, l.jsxs)("div", {
        ref: t,
        className: a()(_, null != T || null != j || null != S || Z ? L.iE : L.IA, (() => {
          if (y) return a()(M.rM, R.SELECTED);
          if (N) return a()(M.rM, R.CONNECTED);
          if (E) return R.LOCKED;
          if (m) return R.MUTED;
          if (er && !N && ea) return R.HOISTING_NOT_CONNECTED;
          if (A)
            if (et) return R.UNREAD_IMPORTANT;
            else return R.UNREAD_LESS_IMPORTANT;
          return null
        })(), function(e) {
          switch (e) {
            case w.rbe.GUILD_STAGE_VOICE:
            case w.rbe.GUILD_VOICE:
              return L.typeVoice;
            case w.rbe.ANNOUNCEMENT_THREAD:
            case w.rbe.PUBLIC_THREAD:
            case w.rbe.PRIVATE_THREAD:
              return L.ZS;
            case w.rbe.GUILD_ANNOUNCEMENT:
            case w.rbe.GUILD_TEXT:
            case w.rbe.GUILD_STORE:
            case w.rbe.GUILD_FORUM:
            case w.rbe.GUILD_MEDIA:
            default:
              return L.typeDefault
          }
        }(null != Y ? Y : B)),
        onMouseUp: e => null == j ? true : j(e, f),
        onMouseDown: e => null == S ? true : S(e, f),
        onContextMenu: e => null == x ? true : x(e, f),
        onMouseEnter: V,
        onMouseLeave: q,
        children: [!es && A && !m && (0, l.jsx)("div", {
          className: a()(L.gy, et ? L.WS : true)
        }), null != (n = null == I ? true : I(ey)) ? n : ey]
      })
    })
  }) : null;

function F(e) {
  var t, n, i;
  let {
    channel: a,
    name: s
  } = e, o = a.isPrivate() && 1 === (null != (t = a.rawRecipients) ? t : []).length, u = null == (i = a.rawRecipients) || null == (n = i[0]) ? true : n.display_name_styles, c = r.useMemo(() => o ? (0, A.mT)(u) : null, [o, u]);
  return null != c ? (0, l.jsx)(p.A, {
    userName: s,
    displayNameStyles: c,
    effectDisplayType: E.G.PLAIN,
    boldFontOpacity: .9
  }) : s
}