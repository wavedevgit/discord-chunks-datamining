/** Chunk was on 17537 **/
/** chunk id: 166444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => B,
  IC: () => G,
  Pk: () => H,
  gm: () => U
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
let _ = {
  SELECTED: Chunk811094.J1,
  CONNECTED: Chunk811094.d4,
  UNREAD_IMPORTANT: Chunk811094.V2,
  UNREAD_LESS_IMPORTANT: Chunk811094.modeUnreadLessImportant,
  MUTED: Chunk811094.F4,
  LOCKED: Chunk811094.yg
};

function L(e) {
  e.preventDefault(), e.stopPropagation()
}
let k = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF;

function G(e) {
  let {
    channel: t,
    size: n = d._3J.SIZE_20
  } = e;
  return (0, l.jsx)(k, {
    src: (0, g.Y)(t),
    "aria-hidden": true,
    size: n
  })
}

function H(e) {
  let {
    channel: t,
    size: n = d._3J.SIZE_20
  } = e, r = (0, s.bG)([D.default], () => D.default.getUser(null == t ? true : t.recipients[0])), i = (0, s.bG)([T.A], () => !(null == r || null == t || t.isMultiUserDM()) && null != T.A.getTypingUsers(null == t ? true : t.id)[null == r ? true : r.id]), {
    status: a,
    isMobile: o,
    isVR: u
  } = (0, s.cf)([x.A], () => null == r || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: false,
    isVR: false
  } : {
    status: x.A.getStatus(r.id),
    isMobile: x.A.isMobileOnline(r.id),
    isVR: x.A.isVROnline(r.id)
  });
  return (0, l.jsx)(k, {
    size: n,
    src: null == r ? true : r.getAvatarURL(true, 40),
    status: a,
    isMobile: o,
    isVR: u,
    isTyping: i,
    "aria-label": null == r ? true : r.username,
    statusTooltip: true
  })
}
let U = Chunk64700.memo(function(e) {
    let {
      className: t,
      containerClassName: n,
      channel: r,
      locked: i,
      hasActiveThreads: o,
      hasUsersInVoiceChannel: u,
      withGuildIcon: d
    } = e, g = (0, s.bG)([S.A], () => S.A.getGuild(r.guild_id), [r.guild_id]), b = r.type === R.rbe.DM || r.type === R.rbe.GROUP_DM, {
      enableWaveformIcon: v
    } = (0, f.b)(r.guild_id, "ChannelItemIcon"), O = (0, s.bG)([h.A], () => h.A.getAnimationStyle(r.id), [r.id]), j = r.type === R.rbe.GUILD_VOICE, E = v && j && !i && u, A = null;
    if (d && null != g && !b) A = (0, l.jsx)(N.A, {
      size: N.q.SMALL_32,
      className: I.h5,
      iconClassName: I.Is,
      channel: r,
      guild: g,
      locked: i,
      hasActiveThreads: o
    });
    else if (E) A = (0, l.jsx)(m.A, {
      color: "currentColor",
      className: a()(I.Kk, t),
      animationStyle: O,
      locked: (0, p.A)(r)
    });
    else {
      let e = function(e, t, n) {
        switch (e.type) {
          case R.rbe.DM:
            return function() {
              return (0, l.jsx)(H, {
                channel: e
              })
            };
          case R.rbe.GROUP_DM:
            return function() {
              return (0, l.jsx)(G, {
                channel: e
              })
            };
          default:
            return (0, y.gU)(e, t, n)
        }
      }(r, g, {
        locked: i,
        hasActiveThreads: o
      });
      if (null == e) return null;
      A = (0, l.jsx)(e, {
        color: "currentColor",
        className: a()(I.Kk, t)
      })
    }
    let x = d ? null == g ? true : g.name : (0, y.Bq)(r, g, i, o),
      T = d && null != g ? "".concat(g.name, " - ").concat(x, " icon") : "".concat(x, " icon");
    return (0, l.jsx)(c.m, {
      text: x,
      delay: 500,
      children: (0, l.jsx)("div", {
        role: "img",
        "aria-label": T,
        className: a()(I.zc, n),
        children: A
      })
    })
  }),
  B = 21552 == require.j ? Chunk64700.forwardRef(function(e, t) {
    var n, i, c;
    let {
      channel: h,
      name: f,
      muted: g,
      selected: p,
      connected: m,
      unread: y,
      locked: v,
      hasActiveThreads: O,
      onClick: j,
      onMouseDown: N,
      onMouseUp: S,
      onContextMenu: x,
      connectDragPreview: T,
      className: D,
      iconClassName: P,
      subtitle: k,
      subtitleColor: G,
      channel: {
        type: H
      },
      onMouseEnter: B,
      onMouseLeave: F,
      "aria-label": V,
      children: K,
      guild: W,
      channelTypeOverride: q,
      forceInteractable: Z,
      mentionCount: Y,
      resolvedUnreadSetting: J,
      isFavoriteSuggestion: X,
      withGuildIcon: Q,
      hasActiveEvent: $ = false
    } = e, ee = J === C.e.ALL_MESSAGES || null != Y && Y > 0, et = (0, s.bG)([w.A], () => Object.values(w.A.getVoiceStatesForChannel(h.id)).length > 0, [h.id]), en = (0, o.rm)(h.id), {
      role: el
    } = en, er = function(e, t) {
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
    }(en, ["role"]), ei = r.useRef(null), ea = r.useRef(null), eo = (0, E.A)(h), es = R.BVt.CHANNEL(eo, h.id), eu = (0, b.Ay)(h), ec = h.isGuildVocal(), ed = (0, l.jsx)("div", {
      className: a()({
        [I.ow]: X
      }),
      ref: ea,
      children: (0, l.jsxs)(A.A, (i = function(e) {
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
        role: ec && !m ? "button" : "link",
        href: ec ? true : es,
        target: "_blank",
        ref: ei,
        className: I.nf,
        onClick: () => null == j ? true : j(h)
      }, er), c = c = {
        "aria-label": V,
        focusProps: {
          enabled: false
        },
        children: [(0, l.jsxs)("div", {
          className: I.Y5,
          children: [(0, l.jsx)(U, {
            className: P,
            channel: h,
            guild: W,
            hasUsersInVoiceChannel: et,
            hasActiveThreads: O,
            locked: v,
            withGuildIcon: Q
          }), (0, l.jsx)(u.A, {
            className: a()(I.UU, {
              [I.NW]: $
            }),
            "aria-hidden": true,
            children: (0, l.jsx)(z, {
              channel: h,
              name: null != f ? f : eu
            })
          }), r.Children.count(K) > 0 ? (0, l.jsx)("div", {
            onClick: L,
            className: I.Y_,
            children: K
          }) : null]
        }), null != k ? (0, l.jsx)("div", {
          className: a()(I.MA, {
            [I.lY]: Q
          }),
          children: (0, l.jsx)(d.Text, {
            color: null != G ? G : "text-muted",
            variant: "text-xs/medium",
            className: I.VA,
            children: k
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
      focusTarget: ei,
      ringTarget: ea,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, l.jsxs)("div", {
        ref: t,
        className: a()(D, null != j || null != S || null != N || Z ? I.iE : I.IA, (() => {
          if (p) return a()(M.rM, _.SELECTED);
          if (m) return a()(M.rM, _.CONNECTED);
          if (v) return _.LOCKED;
          if (g) return _.MUTED;
          if (y)
            if (ee) return _.UNREAD_IMPORTANT;
            else return _.UNREAD_LESS_IMPORTANT;
          return null
        })(), function(e) {
          switch (e) {
            case R.rbe.GUILD_STAGE_VOICE:
            case R.rbe.GUILD_VOICE:
              return I.typeVoice;
            case R.rbe.ANNOUNCEMENT_THREAD:
            case R.rbe.PUBLIC_THREAD:
            case R.rbe.PRIVATE_THREAD:
              return I.ZS;
            case R.rbe.GUILD_ANNOUNCEMENT:
            case R.rbe.GUILD_TEXT:
            case R.rbe.GUILD_STORE:
            case R.rbe.GUILD_FORUM:
            case R.rbe.GUILD_MEDIA:
            default:
              return I.typeDefault
          }
        }(null != q ? q : H)),
        onMouseUp: e => null == S ? true : S(e, h),
        onMouseDown: e => null == N ? true : N(e, h),
        onContextMenu: e => null == x ? true : x(e, h),
        onMouseEnter: B,
        onMouseLeave: F,
        children: [g || !y ? null : (0, l.jsx)("div", {
          className: a()(I.gy, ee ? I.WS : true)
        }), null != (n = null == T ? true : T(ed)) ? n : ed]
      })
    })
  }) : null;

function z(e) {
  var t, n, i;
  let {
    channel: a,
    name: o
  } = e, s = a.isPrivate() && 1 === (null != (t = a.rawRecipients) ? t : []).length, u = null == (i = a.rawRecipients) || null == (n = i[0]) ? true : n.display_name_styles, c = r.useMemo(() => s ? (0, v.mT)(u) : null, [s, u]);
  return null != c ? (0, l.jsx)(j.A, {
    userName: o,
    displayNameStyles: c,
    effectDisplayType: O.G.PLAIN,
    boldFontOpacity: .9
  }) : o
}