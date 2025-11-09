/** Chunk was on 39206 **/
/** chunk id: 473403, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  ZP: () => w,
  _W: () => U,
  ge: () => C,
  je: () => P
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
let L = {
  SELECTED: Chunk516966.modeSelected,
  CONNECTED: Chunk516966.modeConnected,
  UNREAD_IMPORTANT: Chunk516966.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: Chunk516966.modeUnreadLessImportant,
  MUTED: Chunk516966.modeMuted,
  LOCKED: Chunk516966.modeLocked
};

function S(e) {
  e.preventDefault(), e.stopPropagation()
}
let A = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function C(e) {
  let {
    channel: n,
    size: l = d.EFr.SIZE_20
  } = e;
  return (0, t.jsx)(A, {
    src: (0, f.x)(n),
    "aria-hidden": true,
    size: l
  })
}

function P(e) {
  let {
    channel: n,
    size: l = d.EFr.SIZE_20
  } = e, r = (0, o.e7)([_.default], () => _.default.getUser(null == n ? true : n.recipients[0])), i = (0, o.e7)([y.Z], () => !(null == r || null == n || n.isMultiUserDM()) && null != y.Z.getTypingUsers(null == n ? true : n.id)[null == r ? true : r.id]), {
    status: s,
    isMobile: a
  } = (0, o.cj)([g.Z], () => null == r || null == n || n.isMultiUserDM() ? {
    status: null,
    isMobile: false
  } : {
    status: g.Z.getStatus(r.id),
    isMobile: g.Z.isMobileOnline(r.id)
  });
  return (0, t.jsx)(A, {
    size: l,
    src: null == r ? true : r.getAvatarURL(true, 40),
    status: s,
    isMobile: a,
    isTyping: i,
    "aria-label": null == r ? true : r.username,
    statusTooltip: true
  })
}
let U = e => {
    let {
      className: n,
      containerClassName: l,
      channel: r,
      locked: i,
      hasActiveThreads: a,
      withGuildIcon: c
    } = e, d = (0, o.e7)([N.Z], () => N.Z.getGuild(r.guild_id), [r.guild_id]), f = r.type === T.d4z.DM || r.type === T.d4z.GROUP_DM, h = null;
    if (c && null != d && !f) h = (0, t.jsx)(b.Z, {
      size: b.E.SMALL_32,
      className: I.iconContainerWithGuildIcon,
      iconClassName: I.iconWithGuildIcon,
      channel: r,
      guild: d,
      locked: i,
      hasActiveThreads: a
    });
    else {
      let e = function(e, n, l) {
        switch (e.type) {
          case T.d4z.DM:
            return function() {
              return (0, t.jsx)(P, {
                channel: e
              })
            };
          case T.d4z.GROUP_DM:
            return function() {
              return (0, t.jsx)(C, {
                channel: e
              })
            };
          default:
            return (0, p.KS)(e, n, l)
        }
      }(r, d, {
        locked: i,
        hasActiveThreads: a
      });
      if (null == e) return null;
      h = (0, t.jsx)(e, {
        color: "currentColor",
        className: s()(I.icon, n)
      })
    }
    let m = c ? null == d ? true : d.name : (0, p.bT)(r, d, i, a),
      E = c && null != d ? "".concat(d.name, " - ").concat(m, " icon") : "".concat(m, " icon");
    return (0, t.jsx)(u.u, {
      text: m,
      delay: 500,
      children: (0, t.jsx)("div", {
        role: "img",
        "aria-label": E,
        className: s()(I.iconContainer, l),
        children: h
      })
    })
  },
  w = 12633 == require.j ? Chunk647438.forwardRef(function(e, n) {
    var l, i, o;
    let {
      channel: u,
      name: f,
      muted: p,
      selected: m,
      connected: E,
      unread: v,
      locked: b,
      hasActiveThreads: N,
      onClick: g,
      onMouseDown: y,
      onMouseUp: _,
      onContextMenu: D,
      connectDragPreview: A,
      className: C,
      iconClassName: P,
      subtitle: w,
      subtitleColor: G,
      channel: {
        type: Z
      },
      onMouseEnter: k,
      onMouseLeave: z,
      "aria-label": H,
      children: F,
      guild: K,
      channelTypeOverride: V,
      forceInteractable: W,
      mentionCount: B,
      resolvedUnreadSetting: X,
      isFavoriteSuggestion: Y,
      withGuildIcon: q,
      hasActiveEvent: J = false
    } = e, Q = X === M.i.ALL_MESSAGES || null != B && B > 0, $ = (0, a.JA)(u.id), {
      role: ee
    } = $, en = function(e, n) {
      if (null == e) return {};
      var l, t, r = function(e, n) {
        if (null == e) return {};
        var l, t, r = {},
          i = Object.keys(e);
        for (t = 0; t < i.length; t++) l = i[t], n.indexOf(l) >= 0 || (r[l] = e[l]);
        return r
      }(e, n);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (t = 0; t < i.length; t++) l = i[t], !(n.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l])
      }
      return r
    }($, ["role"]), el = r.useRef(null), et = r.useRef(null), er = (0, O.Z)(u), ei = T.Z5c.CHANNEL(er, u.id), es = (0, h.ZP)(u), ea = u.isGuildVocal(), eo = (0, t.jsx)("div", {
      className: s()({
        [I.favoritesSuggestion]: Y
      }),
      ref: et,
      children: (0, t.jsxs)(j.Z, (i = function(e) {
        for (var n = 1; n < arguments.length; n++) {
          var l = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(l);
          "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
            return Object.getOwnPropertyDescriptor(l, e).enumerable
          }))), t.forEach(function(n) {
            var t;
            t = l[n], n in e ? Object.defineProperty(e, n, {
              value: t,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[n] = t
          })
        }
        return e
      }({
        role: ea && !E ? "button" : "link",
        href: ea ? true : ei,
        target: "_blank",
        ref: el,
        className: I.link,
        onClick: () => null == g ? true : g(u)
      }, en), o = o = {
        "aria-label": H,
        focusProps: {
          enabled: false
        },
        children: [(0, t.jsxs)("div", {
          className: I.linkTop,
          children: [(0, t.jsx)(U, {
            className: P,
            channel: u,
            guild: K,
            hasActiveThreads: N,
            locked: b,
            withGuildIcon: q
          }), (0, t.jsx)(c.Z, {
            className: s()(I.name, {
              [I.activeEvent]: J
            }),
            "aria-hidden": true,
            children: (0, t.jsx)(R, {
              channel: u,
              name: null != f ? f : es
            })
          }), r.Children.count(F) > 0 ? (0, t.jsx)("div", {
            onClick: S,
            className: I.children,
            children: F
          }) : null]
        }), null != w ? (0, t.jsx)("div", {
          className: s()(I.linkBottom, {
            [I.withGuildIcon]: q
          }),
          children: (0, t.jsx)(d.Text, {
            color: null != G ? G : "text-muted",
            variant: "text-xs/medium",
            className: I.subtitle,
            children: w
          })
        }) : null]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, n) {
        var l = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          l.push.apply(l, t)
        }
        return l
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
      }), i))
    });
    return (0, t.jsx)(d.tEY, {
      focusTarget: el,
      ringTarget: et,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, t.jsxs)("div", {
        ref: n,
        className: s()(C, null != g || null != _ || null != y || W ? I.wrapper : I.notInteractive, (() => {
          if (m) return s()(x.selectedChannel, L.SELECTED);
          if (E) return s()(x.selectedChannel, L.CONNECTED);
          if (b) return L.LOCKED;
          if (p) return L.MUTED;
          if (v)
            if (Q) return L.UNREAD_IMPORTANT;
            else return L.UNREAD_LESS_IMPORTANT;
          return null
        })(), function(e) {
          switch (e) {
            case T.d4z.GUILD_STAGE_VOICE:
            case T.d4z.GUILD_VOICE:
              return I.typeVoice;
            case T.d4z.ANNOUNCEMENT_THREAD:
            case T.d4z.PUBLIC_THREAD:
            case T.d4z.PRIVATE_THREAD:
              return I.typeThread;
            case T.d4z.GUILD_ANNOUNCEMENT:
            case T.d4z.GUILD_TEXT:
            case T.d4z.GUILD_STORE:
            case T.d4z.GUILD_FORUM:
            case T.d4z.GUILD_MEDIA:
            default:
              return I.typeDefault
          }
        }(null != V ? V : Z)),
        onMouseUp: e => null == _ ? true : _(e, u),
        onMouseDown: e => null == y ? true : y(e, u),
        onContextMenu: e => null == D ? true : D(e, u),
        onMouseEnter: k,
        onMouseLeave: z,
        children: [p || !v ? null : (0, t.jsx)("div", {
          className: s()(I.unread, Q ? I.unreadImportant : true)
        }), null != (l = null == A ? true : A(eo)) ? l : eo]
      })
    })
  }) : null;

function R(e) {
  var n, l, i;
  let {
    channel: s,
    name: a
  } = e, o = s.isPrivate() && 1 === (null != (i = s.rawRecipients) ? i : []).length, c = null == (l = s.rawRecipients) || null == (n = l[0]) ? true : n.display_name_styles, u = r.useMemo(() => o ? (0, m.bN)(c) : null, [o, c]);
  return null != u ? (0, t.jsx)(v.Z, {
    userName: a,
    displayNameStyles: u,
    effectDisplayType: E.F.PLAIN,
    boldFontOpacity: .9
  }) : a
}