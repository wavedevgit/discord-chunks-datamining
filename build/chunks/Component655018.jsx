/** Chunk was on 81985 **/
/** chunk id: 655018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => G
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  s = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk584973 = require("./584973.jsx"),
  Chunk243778 = require("./243778.jsx"),
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
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk876376 = require("./876376.js"),
  Chunk564546 = require("./564546.js"),
  Chunk314040 = require("./314040.js");

function L(e) {
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

function U(e, t) {
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

function G(e) {
  var t, n, l, o;
  let {
    channel: G,
    setIsHangStatusInputFocused: B,
    setIsEmojiPickerOpen: F,
    setPopoutRef: H
  } = e, V = i.useRef(null), z = (0, u.e7)([O.Z], () => O.Z.getCustomHangStatus()), W = (0, S.Z)(), K = (0, u.e7)([O.Z], () => O.Z.getFavoritedStatuses()), {
    defaultStatusVariant: Y,
    allowPermanentClear: q
  } = (0, v.bN)({
    guildId: G.guild_id,
    location: "HangStatusPicker"
  }), X = (0, j.V)(Y), Q = i.useRef(null), [J, $] = i.useState(null != (n = null == z ? true : z.status) ? n : ""), [ee, et] = i.useState(null != (l = null == z ? true : z.emoji) ? l : null), [en, er] = i.useState(false), ei = (0, u.e7)([O.Z], () => O.Z.getCurrentHangStatus()), el = X[ei], ea = K.length > 0, eo = null == J || "" === J.trim(), es = (0, E.Z)(G), ec = J.trim().length > 0 && J.trim() !== (null == z || null == (t = z.status) ? true : t.trim()) || null != ee && !s()(ee, null == z ? true : z.emoji), [eu, ed] = i.useState(false), ep = (0, u.e7)([O.Z], () => O.Z.getFavoritedStatuses().length >= O.o), ef = J.length > 0 || null != ee, [eh, eg] = (0, g.US)([d.z.HANG_STATUS_POPOVER_NUX]);
  i.useEffect(() => {
    b.default.track(A.rMx.HANG_STATUS_PICKER_OPENED, U(L({}, (0, x.Z)(G.id)), {
      num_favorites: K.length,
      num_recents: W.length
    }))
  }, []), i.useEffect(() => {
    J.trim().length > 0 && eu && ed(false), null == ee && eu && ed(false)
  }, [J, ee, eu]), i.useEffect(() => {
    var e;
    en || J !== (null != (e = null == z ? true : z.status) ? e : "") && "" !== J.trim() ? B(true) : B(false)
  }, [J, null == z ? true : z.status, ee, null == z ? true : z.emoji, B, en]), i.useEffect(() => {
    null == H || H(null == Q ? true : Q.current)
  }, [Q, H]);
  let em = i.useCallback(e => {
      e !== ei && ((0, y.Zx)(e, true), null != ee && et(null), "" !== J.trim() && $(""))
    }, [ei, ee, J]),
    eb = i.useCallback(() => {
      et(null), $(""), er(false)
    }, []),
    ey = i.useCallback(e => {
      let {
        emoji: t,
        status: n
      } = e;
      s()(t, null == z ? true : z.emoji) && n === (null == z ? true : z.status) || ((0, y._s)(e.status, e.emoji, true), et(e.emoji), $(e.status))
    }, [null == z ? true : z.emoji, null == z ? true : z.status]),
    ev = i.useCallback(e => {
      var t, n;
      null == e || null == (t = e.preventDefault) || t.call(e), null != ee && 0 === J.trim().length && ed(true), eo || (ey({
        status: J,
        emoji: null != ee ? ee : {
          id: null,
          name: "\uD83D\uDCAD",
          animated: false
        }
      }), null == (n = V.current) || n.blur(), er(false))
    }, [J, ee, ey, eo]),
    eO = i.useCallback(() => {
      var e, t;
      let n = null,
        r = null;
      do
        if (0 === es.length || (r = (null == (n = (0, c.sample)(es)) ? true : n.id) != null ? {
            id: n.id,
            name: n.name,
            animated: n.animated
          } : {
            id: null,
            name: null != (t = null == n ? true : n.optionallyDiverseSequence) ? t : "",
            animated: false
          }, 1 === es.length)) break; while (null == n || (null == n ? true : n.name) == null || s()(ee, r));
      null != r && (null == n ? true : n.name) != null && (et(r), $(n.name), er(true), null == (e = V.current) || e.focus(), b.default.track(A.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, x.Z)(G.id)))
    }, [es, ee, G.id]),
    ej = i.useCallback((e, t) => {
      let n = (0, C.Z)(t);
      (!ep || e) && ((0, y.tg)(n ? t : t.status, n ? null : t.emoji), b.default.track(A.rMx.HANG_STATUS_FAVORITE_CLICKED, U(L({}, (0, x.Z)(G.id)), {
        favorited: !e
      })))
    }, [G.id, ep]),
    ex = i.useCallback(() => {
      B(false)
    }, [B]),
    eC = i.useCallback(() => {
      B(true)
    }, [B]),
    eE = i.useCallback((e, t, n) => {
      var i;
      let l = (0, C.Z)(e),
        a = l ? X[e] : null,
        o = O.Z.isFavorited(e),
        s = l ? (0, r.jsx)(P.Z, {
          userId: m.default.getId(),
          size: 20,
          hangStatusActivity: {
            type: A.IIU.HANG_STATUS,
            state: e
          },
          fallbackVariant: Y,
          className: D.icon
        }) : null != e.emoji && (0, r.jsx)(h.Z, {
          emoji: e.emoji,
          hideTooltip: true,
          className: D.icon
        });
      return (0, r.jsx)(N.L, {
        label: l ? null != (i = null == a ? true : a.title) ? i : "" : e.status,
        icon: s,
        setStatus: () => {
          l ? em(e) : ey(e), er(false)
        },
        isFavorited: o,
        onFavoriteClick: () => ej(o, e)
      }, "".concat(n, "-").concat(t))
    }, [Y, ey, em, X, ej]),
    eS = i.useCallback(() => {
      (0, y.Sc)(true, q), et(null), $(""), er(false)
    }, [q]),
    e_ = i.useCallback(e => {
      er(true), $(e.substring(0, T.s0))
    }, []);
  return (0, r.jsxs)("div", {
    ref: Q,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(M.menu, D.container),
    children: [(0, r.jsx)(p.J2, {
      title: R.intl.string(R.t.waaIiO),
      body: R.intl.string(R.t.qDoPah),
      badge: "new",
      shouldShow: eh === d.z.HANG_STATUS_POPOVER_NUX,
      graphic: {
        type: "image",
        src: k.Z
      },
      targetElementRef: Q,
      onRequestClose: () => eg(w.L.DISMISS)
    }), (0, r.jsx)("div", {
      role: "group",
      className: a()(M.groupLabel, D.inputGroup),
      children: (0, r.jsxs)("form", {
        onSubmit: ev,
        className: a()(M.item, D.input),
        children: [(0, r.jsxs)("div", {
          className: D.inputRow,
          children: [(0, r.jsx)(f.oil, {
            inputRef: V,
            value: en || ef ? J : null != (o = null == el ? true : el.title) ? o : "",
            onBlur: ex,
            onFocus: eC,
            onChange: e_,
            placeholder: R.intl.string(R.t.KPop4s),
            leading: {
              type: "emoji",
              button: (0, r.jsx)(I.A, {
                customStatusEmoji: ee,
                setCustomStatusEmoji: et,
                selectedDefaultStatus: en || ef ? null : ei,
                defaultStatusVariant: Y,
                setIsEmojiPickerOpen: F
              })
            },
            trailing: null == z && null == ei || ec ? ec ? {
              icon: f.d4D,
              onClick: ev,
              "aria-label": R.intl.string(R.t["R3BPH+"]),
              disabled: 0 === J.length
            } : true : {
              icon: f.XHJ,
              onClick: eS,
              "aria-label": R.intl.string(R.t.S90FuQ)
            }
          }), (0, r.jsx)(f.hU, {
            variant: "secondary",
            icon: _.k,
            onClick: eO,
            "aria-label": R.intl.string(R.t["5UAi59"])
          })]
        }), eu && (0, r.jsx)(f.Text, {
          variant: "text-xs/normal",
          className: D.inputHint,
          color: "text-feedback-critical",
          children: R.intl.string(R.t["s/oq0f"])
        })]
      })
    }), (0, r.jsxs)(f.Ttm, {
      fade: true,
      role: "group",
      className: a()(M.groupLabel, D.group, D.scroller),
      children: [(0, r.jsx)(Z.d, {
        guildId: G.guild_id,
        onSetActivityStatus: eb
      }), ea && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: D.subtitle,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: R.intl.string(R.t.k8fFjp)
          }), (0, r.jsx)(f.r7p, {
            size: "xxs"
          })]
        }), K.map((e, t) => eE(e, t, "favorite"))]
      }), W.length > 0 && ea && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          role: "separator",
          className: D.separator
        }), (0, r.jsxs)("div", {
          className: D.subtitle,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: R.intl.string(R.t["+9QSnj"])
          }), (0, r.jsx)(f.T39, {
            size: "xxs"
          })]
        })]
      }), W.map((e, t) => eE(e, t, "recent"))]
    })]
  })
}