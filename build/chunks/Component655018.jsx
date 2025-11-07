/** Chunk was on 86642 **/
/** chunk id: 655018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => F
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk787267 = require("./787267.js"),
  Chunk334405 = require("./334405.js"),
  Chunk977007 = require("./977007.js");

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e) {
  var t, n, l, o;
  let {
    channel: F,
    setIsHangStatusInputFocused: V,
    setIsEmojiPickerOpen: B,
    setPopoutRef: H
  } = e, G = r.useRef(null), W = (0, u.e7)([_.Z], () => _.Z.getCustomHangStatus()), z = (0, j.Z)(), q = (0, u.e7)([_.Z], () => _.Z.getFavoritedStatuses()), {
    defaultStatusVariant: Y,
    allowPermanentClear: K
  } = (0, C.bN)({
    guildId: F.guild_id,
    location: "HangStatusPicker"
  }), X = (0, v.V)(Y), J = r.useRef(null), [Q, $] = r.useState(null != (n = null == W ? true : W.status) ? n : ""), [ee, et] = r.useState(null != (l = null == W ? true : W.emoji) ? l : null), [en, ei] = r.useState(false), er = (0, u.e7)([_.Z], () => _.Z.getCurrentHangStatus()), el = X[er], ea = q.length > 0, eo = null == Q || "" === Q.trim(), es = (0, E.Z)(F), ec = Q.trim().length > 0 && Q.trim() !== (null == W || null == (t = W.status) ? true : t.trim()) || null != ee && !s()(ee, null == W ? true : W.emoji), [eu, ed] = r.useState(false), ep = (0, u.e7)([_.Z], () => _.Z.getFavoritedStatuses().length >= _.o), ef = Q.length > 0 || null != ee, [eh, em] = (0, m.US)([d.z.HANG_STATUS_POPOVER_NUX]);
  r.useEffect(() => {
    b.default.track(A.rMx.HANG_STATUS_PICKER_OPENED, U(k({}, (0, x.Z)(F.id)), {
      num_favorites: q.length,
      num_recents: z.length
    }))
  }, []), r.useEffect(() => {
    Q.trim().length > 0 && eu && ed(false), null == ee && eu && ed(false)
  }, [Q, ee, eu]), r.useEffect(() => {
    var e;
    en || Q !== (null != (e = null == W ? true : W.status) ? e : "") && "" !== Q.trim() ? V(true) : V(false)
  }, [Q, null == W ? true : W.status, ee, null == W ? true : W.emoji, V, en]), r.useEffect(() => {
    null == H || H(null == J ? true : J.current)
  }, [J, H]);
  let eg = r.useCallback(e => {
      e !== er && ((0, y.Zx)(e, true), null != ee && et(null), "" !== Q.trim() && $(""))
    }, [er, ee, Q]),
    eb = r.useCallback(() => {
      et(null), $(""), ei(false)
    }, []),
    ey = r.useCallback(e => {
      let {
        emoji: t,
        status: n
      } = e;
      s()(t, null == W ? true : W.emoji) && n === (null == W ? true : W.status) || ((0, y._s)(e.status, e.emoji, true), et(e.emoji), $(e.status))
    }, [null == W ? true : W.emoji, null == W ? true : W.status]),
    eC = r.useCallback(e => {
      var t, n;
      null == e || null == (t = e.preventDefault) || t.call(e), null != ee && 0 === Q.trim().length && ed(true), eo || (ey({
        status: Q,
        emoji: null != ee ? ee : {
          id: null,
          name: "\uD83D\uDCAD",
          animated: false
        }
      }), null == (n = G.current) || n.blur(), ei(false))
    }, [Q, ee, ey, eo]),
    e_ = r.useCallback(() => {
      var e, t;
      let n = null,
        i = null;
      do
        if (0 === es.length || (i = (null == (n = (0, c.sample)(es)) ? true : n.id) != null ? {
            id: n.id,
            name: n.name,
            animated: n.animated
          } : {
            id: null,
            name: null != (t = null == n ? true : n.optionallyDiverseSequence) ? t : "",
            animated: false
          }, 1 === es.length)) break; while (null == n || (null == n ? true : n.name) == null || s()(ee, i));
      null != i && (null == n ? true : n.name) != null && (et(i), $(n.name), ei(true), null == (e = G.current) || e.focus(), b.default.track(A.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, x.Z)(F.id)))
    }, [es, ee, F.id]),
    ev = r.useCallback((e, t) => {
      let n = (0, O.Z)(t);
      (!ep || e) && ((0, y.tg)(n ? t : t.status, n ? null : t.emoji), b.default.track(A.rMx.HANG_STATUS_FAVORITE_CLICKED, U(k({}, (0, x.Z)(F.id)), {
        favorited: !e
      })))
    }, [F.id, ep]),
    ex = r.useCallback(() => {
      V(false)
    }, [V]),
    eO = r.useCallback(() => {
      V(true)
    }, [V]),
    eE = r.useCallback((e, t, n) => {
      var r;
      let l = (0, O.Z)(e),
        a = l ? X[e] : null,
        o = _.Z.isFavorited(e),
        s = l ? (0, i.jsx)(I.Z, {
          userId: g.default.getId(),
          size: 20,
          hangStatusActivity: {
            type: A.IIU.HANG_STATUS,
            state: e
          },
          fallbackVariant: Y,
          className: R.icon
        }) : null != e.emoji && (0, i.jsx)(h.Z, {
          emoji: e.emoji,
          hideTooltip: true,
          className: R.icon
        });
      return (0, i.jsx)(T.L, {
        label: l ? null != (r = null == a ? true : a.title) ? r : "" : e.status,
        icon: s,
        setStatus: () => {
          l ? eg(e) : ey(e), ei(false)
        },
        isFavorited: o,
        onFavoriteClick: () => ev(o, e)
      }, "".concat(n, "-").concat(t))
    }, [Y, ey, eg, X, ev]),
    ej = r.useCallback(() => {
      (0, y.Sc)(true, K), et(null), $(""), ei(false)
    }, [K]),
    eS = r.useCallback(e => {
      ei(true), $(e.substring(0, N.s0))
    }, []);
  return (0, i.jsxs)("div", {
    ref: J,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(D.menu, R.container),
    children: [(0, i.jsx)(p.J2, {
      title: M.intl.string(M.t.waaIiO),
      body: M.intl.string(M.t.qDoPah),
      badge: "new",
      shouldShow: eh === d.z.HANG_STATUS_POPOVER_NUX,
      graphic: {
        type: "image",
        src: L.Z
      },
      targetElementRef: J,
      onRequestClose: () => em(w.L.DISMISS)
    }), (0, i.jsx)("div", {
      role: "group",
      className: a()(D.groupLabel, R.inputGroup),
      children: (0, i.jsxs)("form", {
        onSubmit: eC,
        className: a()(D.item, R.input),
        children: [(0, i.jsxs)("div", {
          className: R.inputRow,
          children: [(0, i.jsx)(f.oil, {
            inputRef: G,
            value: en || ef ? Q : null != (o = null == el ? true : el.title) ? o : "",
            onBlur: ex,
            onFocus: eO,
            onChange: eS,
            placeholder: M.intl.string(M.t.KPop4s),
            leading: {
              type: "emoji",
              button: (0, i.jsx)(P.A, {
                customStatusEmoji: ee,
                setCustomStatusEmoji: et,
                selectedDefaultStatus: en || ef ? null : er,
                defaultStatusVariant: Y,
                setIsEmojiPickerOpen: B
              })
            },
            trailing: null == W && null == er || ec ? ec ? {
              icon: f.d4D,
              onClick: eC,
              "aria-label": M.intl.string(M.t["R3BPH+"]),
              disabled: 0 === Q.length
            } : true : {
              icon: f.XHJ,
              onClick: ej,
              "aria-label": M.intl.string(M.t.S90FuQ)
            }
          }), (0, i.jsx)(f.hU, {
            variant: "secondary",
            icon: S.k,
            onClick: e_,
            "aria-label": M.intl.string(M.t["5UAi59"])
          })]
        }), eu && (0, i.jsx)(f.Text, {
          variant: "text-xs/normal",
          className: R.inputHint,
          color: "text-danger",
          children: M.intl.string(M.t["s/oq0f"])
        })]
      })
    }), (0, i.jsxs)(f.Ttm, {
      fade: true,
      role: "group",
      className: a()(D.groupLabel, R.group, R.scroller),
      children: [(0, i.jsx)(Z.d, {
        guildId: F.guild_id,
        onSetActivityStatus: eb
      }), ea && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: R.subtitle,
          children: [(0, i.jsx)(f.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: M.intl.string(M.t.k8fFjp)
          }), (0, i.jsx)(f.r7p, {
            size: "xxs"
          })]
        }), q.map((e, t) => eE(e, t, "favorite"))]
      }), z.length > 0 && ea && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          role: "separator",
          className: R.separator
        }), (0, i.jsxs)("div", {
          className: R.subtitle,
          children: [(0, i.jsx)(f.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: M.intl.string(M.t["+9QSnj"])
          }), (0, i.jsx)(f.T39, {
            size: "xxs"
          })]
        })]
      }), z.map((e, t) => eE(e, t, "recent"))]
    })]
  })
}