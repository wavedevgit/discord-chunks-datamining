/** Chunk was on 32202 **/
/** chunk id: 655018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => R
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  s = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk584973 = require("./584973.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk906605 = require("./906605.js"),
  Chunk574176 = require("./574176.js"),
  Chunk106301 = require("./106301.js"),
  Chunk833858 = require("./833858.js"),
  Chunk699263 = require("./699263.js"),
  Chunk54332 = require("./54332.js"),
  Chunk298905 = require("./298905.js"),
  Chunk671746 = require("./671746.js"),
  Chunk778169 = require("./778169.jsx"),
  Chunk17030 = require("./17030.jsx"),
  Chunk223135 = require("./223135.jsx"),
  Chunk295536 = require("./295536.jsx"),
  Chunk748855 = require("./748855.jsx"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk787267 = require("./787267.js"),
  Chunk334405 = require("./334405.js");

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

function M(e, t) {
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

function R(e) {
  var t, n, l, o;
  let {
    channel: R,
    setIsHangStatusInputFocused: k,
    setPopoutRef: L
  } = e, D = i.useRef(null), U = (0, u.e7)([b.Z], () => b.Z.getCustomHangStatus()), B = (0, x.Z)(), H = (0, u.e7)([b.Z], () => b.Z.getFavoritedStatuses()), {
    defaultStatusVariant: F,
    allowPermanentClear: V
  } = (0, g.bN)({
    guildId: R.guild_id,
    location: "HangStatusPicker"
  }), G = (0, y.V)(F), z = i.useRef(null), [W, q] = i.useState(null != (n = null == U ? true : U.status) ? n : ""), [Y, K] = i.useState(null != (l = null == U ? true : U.emoji) ? l : null), [X, J] = i.useState(false), Q = (0, u.e7)([b.Z], () => b.Z.getCurrentHangStatus()), $ = G[Q], ee = H.length > 0, et = null == W || "" === W.trim(), en = (0, v.Z)(R), er = W.trim().length > 0 && W.trim() !== (null == U || null == (t = U.status) ? true : t.trim()) || null != Y && !s()(Y, null == U ? true : U.emoji), [ei, el] = i.useState(false), ea = (0, u.e7)([b.Z], () => b.Z.getFavoritedStatuses().length >= b.o), eo = W.length > 0 || null != Y;
  i.useEffect(() => {
    f.default.track(Z.rMx.HANG_STATUS_PICKER_OPENED, M(w({}, (0, C.Z)(R.id)), {
      num_favorites: H.length,
      num_recents: B.length
    }))
  }, []), i.useEffect(() => {
    W.trim().length > 0 && ei && el(false), null == Y && ei && el(false)
  }, [W, Y, ei]), i.useEffect(() => {
    var e;
    W !== (null != (e = null == U ? true : U.status) ? e : "") && "" !== W.trim() ? k(true) : k(false)
  }, [W, null == U ? true : U.status, Y, null == U ? true : U.emoji, k]), i.useEffect(() => {
    null == L || L(null == z ? true : z.current)
  }, [z, L]);
  let es = i.useCallback(e => {
      e !== Q && ((0, m.Zx)(e, true), null != Y && K(null), "" !== W.trim() && q(""))
    }, [Q, Y, W]),
    ec = i.useCallback(e => {
      let {
        emoji: t,
        status: n
      } = e;
      s()(t, null == U ? true : U.emoji) && n === (null == U ? true : U.status) || ((0, m._s)(e.status, e.emoji, true), K(e.emoji), q(e.status))
    }, [null == U ? true : U.emoji, null == U ? true : U.status]),
    eu = i.useCallback(e => {
      var t, n;
      null == e || null == (t = e.preventDefault) || t.call(e), null != Y && 0 === W.trim().length && el(true), et || (ec({
        status: W,
        emoji: null != Y ? Y : {
          id: null,
          name: "\uD83D\uDCAD",
          animated: false
        }
      }), null == (n = D.current) || n.blur(), J(false))
    }, [W, Y, ec, et]),
    ed = i.useCallback(() => {
      var e, t;
      let n = null,
        r = null;
      do
        if (0 === en.length || (r = (null == (n = (0, c.sample)(en)) ? true : n.id) != null ? {
            id: n.id,
            name: n.name,
            animated: n.animated
          } : {
            id: null,
            name: null != (t = null == n ? true : n.optionallyDiverseSequence) ? t : "",
            animated: false
          }, 1 === en.length)) break; while (null == n || (null == n ? true : n.name) == null || s()(Y, r));
      null != r && (null == n ? true : n.name) != null && (K(r), q(n.name), J(true), null == (e = D.current) || e.focus(), f.default.track(Z.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, C.Z)(R.id)))
    }, [en, Y, R.id]),
    ep = i.useCallback((e, t) => {
      let n = (0, _.Z)(t);
      (!ea || e) && ((0, m.tg)(n ? t : t.status, n ? null : t.emoji), f.default.track(Z.rMx.HANG_STATUS_FAVORITE_CLICKED, M(w({}, (0, C.Z)(R.id)), {
        favorited: !e
      })))
    }, [R.id, ea]),
    eh = i.useCallback(() => {
      k(false)
    }, [k]),
    ef = i.useCallback(() => {
      var e;
      W !== (null != (e = null == U ? true : U.status) ? e : "") && "" !== W.trim() ? k(true) : k(false)
    }, [k, W, null == U ? true : U.status]),
    em = i.useCallback((e, t, n) => {
      var i;
      let l = (0, _.Z)(e),
        a = l ? G[e] : null,
        o = b.Z.isFavorited(e),
        s = l ? (0, r.jsx)(E.Z, {
          userId: h.default.getId(),
          size: 20,
          hangStatusActivity: {
            type: Z.IIU.HANG_STATUS,
            state: e
          },
          fallbackVariant: F,
          className: N.icon
        }) : null != e.emoji && (0, r.jsx)(p.Z, {
          emoji: e.emoji,
          hideTooltip: true,
          className: N.icon
        });
      return (0, r.jsx)(P.L, {
        label: l ? null != (i = null == a ? true : a.title) ? i : "" : e.status,
        icon: s,
        setStatus: () => {
          l ? es(e) : ec(e), J(false)
        },
        isFavorited: o,
        onFavoriteClick: () => ep(o, e)
      }, "".concat(n, "-").concat(t))
    }, [F, ec, es, G, ep]),
    eg = i.useCallback(() => {
      (0, m.Sc)(true, V), K(null), q(""), J(false)
    }, [V]),
    eb = i.useCallback(e => {
      J(true), q(e.substring(0, I.s0))
    }, []);
  return (0, r.jsxs)("div", {
    ref: z,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(A.menu, N.container),
    children: [(0, r.jsx)("div", {
      role: "group",
      className: a()(A.groupLabel, N.inputGroup),
      children: (0, r.jsxs)("form", {
        onSubmit: eu,
        className: a()(A.item, N.input),
        children: [(0, r.jsxs)("div", {
          className: N.inputRow,
          children: [(0, r.jsx)(d.oil, {
            inputRef: D,
            value: X || eo ? W : null != (o = null == $ ? true : $.title) ? o : "",
            onBlur: eh,
            onFocus: ef,
            onChange: eb,
            placeholder: T.intl.string(T.t.KPop4u),
            leading: {
              type: "emoji",
              button: (0, r.jsx)(j.A, {
                customStatusEmoji: Y,
                setCustomStatusEmoji: K,
                selectedDefaultStatus: X || eo ? null : Q,
                defaultStatusVariant: F
              })
            },
            trailing: null == U && null == Q || er ? er ? {
              icon: d.d4D,
              onClick: eu,
              "aria-label": T.intl.string(T.t.R3BPHx)
            } : true : {
              icon: d.XHJ,
              onClick: eg,
              "aria-label": T.intl.string(T.t.S90Fub)
            }
          }), (0, r.jsx)(d.hU, {
            variant: "secondary",
            icon: O.k,
            onClick: ed,
            "aria-label": T.intl.string(T.t["5UAi5+"])
          })]
        }), ei && (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: N.inputHint,
          color: "text-danger",
          children: T.intl.string(T.t["s/oq0d"])
        })]
      })
    }), (0, r.jsxs)(d.Ttm, {
      fade: true,
      role: "group",
      className: a()(A.groupLabel, N.group, N.scroller),
      children: [(0, r.jsx)(S.d, {
        guildId: R.guild_id
      }), ee && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: N.subtitle,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: T.intl.string(T.t.k8fFjo)
          }), (0, r.jsx)(d.r7p, {
            size: "xxs"
          })]
        }), H.map((e, t) => em(e, t, "favorite"))]
      }), B.length > 0 && ee && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          role: "separator",
          className: N.separator
        }), (0, r.jsxs)("div", {
          className: N.subtitle,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: T.intl.string(T.t["+9QSnp"])
          }), (0, r.jsx)(d.T39, {
            size: "xxs"
          })]
        })]
      }), B.map((e, t) => em(e, t, "recent"))]
    })]
  })
}