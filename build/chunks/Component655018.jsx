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
  var t, n, l;
  let {
    channel: o,
    setIsHangStatusInputFocused: R,
    setPopoutRef: k
  } = e, L = i.useRef(null), D = (0, u.e7)([b.Z], () => b.Z.getCustomHangStatus()), U = (0, x.Z)(), B = (0, u.e7)([b.Z], () => b.Z.getFavoritedStatuses()), {
    defaultStatusVariant: F,
    allowPermanentClear: H
  } = g.n.useExperiment({
    guildId: o.guild_id,
    location: "HangStatusPicker"
  }), V = (0, y.V)(F), G = i.useRef(null), [z, W] = i.useState(null != (n = null == D ? true : D.status) ? n : ""), [q, Y] = i.useState(null != (l = null == D ? true : D.emoji) ? l : null), K = (0, u.e7)([b.Z], () => b.Z.getCurrentHangStatus()), X = B.length > 0, J = null == z || "" === z.trim(), Q = (0, v.Z)(o), $ = z.trim().length > 0 && z.trim() !== (null == D || null == (t = D.status) ? true : t.trim()) || null != q && !s()(q, null == D ? true : D.emoji), [ee, et] = i.useState(false), en = (0, u.e7)([b.Z], () => b.Z.getFavoritedStatuses().length >= b.o);
  i.useEffect(() => {
    f.default.track(Z.rMx.HANG_STATUS_PICKER_OPENED, M(w({}, (0, C.Z)(o.id)), {
      num_favorites: B.length,
      num_recents: U.length
    }))
  }, []), i.useEffect(() => {
    z.trim().length > 0 && ee && et(false), null == q && ee && et(false)
  }, [z, q, ee]), i.useEffect(() => {
    if (null != q) {
      var e;
      null == (e = L.current) || e.focus()
    }
  }, [q]), i.useEffect(() => {
    var e;
    z !== (null != (e = null == D ? true : D.status) ? e : "") && "" !== z.trim() ? R(true) : R(false)
  }, [z, null == D ? true : D.status, q, null == D ? true : D.emoji, R]), i.useEffect(() => {
    var e;
    (null == K || K === I.tN.CUSTOM) && (null == (e = L.current) || e.focus())
  }, [K]), i.useEffect(() => {
    null == k || k(null == G ? true : G.current)
  }, [G, k]);
  let er = i.useCallback(e => {
      e !== K && ((0, m.Zx)(e, true), null != q && Y(null), "" !== z.trim() && W(""))
    }, [K, q, z]),
    ei = i.useCallback((e, t) => {
      let {
        emoji: n,
        status: r
      } = e;
      s()(n, null == D ? true : D.emoji) && r === (null == D ? true : D.status) || ((0, m._s)(e.status, e.emoji, true), Y(t ? null : e.emoji), W(t ? "" : e.status))
    }, [null == D ? true : D.emoji, null == D ? true : D.status]),
    el = i.useCallback(e => {
      var t;
      null == e || null == (t = e.preventDefault) || t.call(e), null != q && 0 === z.trim().length && et(true), J || ei({
        status: z,
        emoji: null != q ? q : {
          id: null,
          name: "\uD83D\uDCAD",
          animated: false
        }
      }, true)
    }, [z, q, ei, J]),
    ea = i.useCallback(() => {
      let e = null,
        t = null;
      do {
        var n;
        if (0 === Q.length || (t = (null == (e = (0, c.sample)(Q)) ? true : e.id) != null ? {
            id: e.id,
            name: e.name,
            animated: e.animated
          } : {
            id: null,
            name: null != (n = null == e ? true : e.optionallyDiverseSequence) ? n : "",
            animated: false
          }, 1 === Q.length)) break
      } while (null == e || (null == e ? true : e.name) == null || s()(q, t));
      null != t && (null == e ? true : e.name) != null && (Y(t), W(e.name), f.default.track(Z.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, C.Z)(o.id)))
    }, [Q, q, o.id]),
    eo = i.useCallback((e, t) => {
      let n = (0, _.Z)(t);
      (!en || e) && ((0, m.tg)(n ? t : t.status, n ? null : t.emoji), f.default.track(Z.rMx.HANG_STATUS_FAVORITE_CLICKED, M(w({}, (0, C.Z)(o.id)), {
        favorited: !e
      })))
    }, [o.id, en]),
    es = i.useCallback(() => {
      R(false)
    }, [R]),
    ec = i.useCallback(() => {
      var e;
      z !== (null != (e = null == D ? true : D.status) ? e : "") && "" !== z.trim() ? R(true) : R(false)
    }, [R, z, null == D ? true : D.status]),
    eu = i.useCallback((e, t, n) => {
      var i;
      let l = (0, _.Z)(e),
        a = l ? V[e] : null,
        o = b.Z.isFavorited(e),
        c = l ? (0, r.jsx)(E.Z, {
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
        isSelected: l ? K === e : s()(null == D ? true : D.emoji, e.emoji) && (null == D ? true : D.status) === e.status,
        label: l ? null != (i = null == a ? true : a.title) ? i : "" : e.status,
        icon: c,
        setStatus: () => {
          l ? er(e) : ei(e)
        },
        clearStatus: () => (0, m.Sc)(true, H),
        isFavorited: o,
        onFavoriteClick: () => eo(o, e)
      }, "".concat(n, "-").concat(t))
    }, [F, ei, er, V, null == D ? true : D.emoji, null == D ? true : D.status, K, H, eo]);
  return (0, r.jsxs)("div", {
    ref: G,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(A.menu, N.container),
    children: [(0, r.jsx)("div", {
      role: "group",
      className: a()(A.groupLabel, N.group),
      children: (0, r.jsxs)("form", {
        onSubmit: el,
        className: a()(A.item, N.input),
        children: [(0, r.jsx)(d.oil, {
          inputRef: L,
          value: z,
          onBlur: es,
          onFocus: ec,
          onChange: e => W(e.substring(0, I.s0)),
          placeholder: T.intl.string(T.t.KPop4u),
          leading: {
            type: "emoji",
            button: (0, r.jsx)(j.A, {
              customStatusEmoji: q,
              setCustomStatusEmoji: Y
            })
          },
          trailing: {
            icon: O.k,
            onClick: ea,
            "aria-label": T.intl.string(T.t["5UAi5+"])
          }
        }), ee && (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: N.inputHint,
          color: "text-danger",
          children: T.intl.string(T.t["s/oq0d"])
        }), $ && !ee && (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: N.inputHint,
          children: T.intl.format(T.t["VjkH/v"], {
            onSave: () => el()
          })
        })]
      })
    }), (0, r.jsxs)(d.Ttm, {
      fade: true,
      role: "group",
      className: a()(A.groupLabel, N.group, N.scroller),
      children: [(0, r.jsx)(S.d, {
        guildId: o.guild_id
      }), X && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: N.subtitle,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: T.intl.string(T.t.k8fFjo)
          }), (0, r.jsx)(d.r7p, {
            size: "xxs"
          })]
        }), B.map((e, t) => eu(e, t, "favorite"))]
      }), U.length > 0 && X && (0, r.jsxs)(r.Fragment, {
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
      }), U.map((e, t) => eu(e, t, "recent"))]
    })]
  })
}