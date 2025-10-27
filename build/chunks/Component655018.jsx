/** Chunk was on 47840 **/
/** chunk id: 655018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => B
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

function B(e) {
  var t, n, l, o;
  let {
    channel: B,
    setIsHangStatusInputFocused: H,
    setPopoutRef: F
  } = e, V = r.useRef(null), G = (0, u.e7)([_.Z], () => _.Z.getCustomHangStatus()), z = (0, E.Z)(), W = (0, u.e7)([_.Z], () => _.Z.getFavoritedStatuses()), {
    defaultStatusVariant: q,
    allowPermanentClear: Y
  } = (0, y.bN)({
    guildId: B.guild_id,
    location: "HangStatusPicker"
  }), K = (0, v.V)(q), X = r.useRef(null), [J, Q] = r.useState(null != (n = null == G ? true : G.status) ? n : ""), [$, ee] = r.useState(null != (l = null == G ? true : G.emoji) ? l : null), [et, en] = r.useState(false), ei = (0, u.e7)([_.Z], () => _.Z.getCurrentHangStatus()), er = K[ei], el = W.length > 0, ea = null == J || "" === J.trim(), eo = (0, j.Z)(B), es = J.trim().length > 0 && J.trim() !== (null == G || null == (t = G.status) ? true : t.trim()) || null != $ && !s()($, null == G ? true : G.emoji), [ec, eu] = r.useState(false), ed = (0, u.e7)([_.Z], () => _.Z.getFavoritedStatuses().length >= _.o), ep = J.length > 0 || null != $, [eh, ef] = (0, m.US)([d.z.HANG_STATUS_POPOVER_NUX]);
  r.useEffect(() => {
    b.default.track(A.rMx.HANG_STATUS_PICKER_OPENED, U(k({}, (0, x.Z)(B.id)), {
      num_favorites: W.length,
      num_recents: z.length
    }))
  }, []), r.useEffect(() => {
    J.trim().length > 0 && ec && eu(false), null == $ && ec && eu(false)
  }, [J, $, ec]), r.useEffect(() => {
    var e;
    et || J !== (null != (e = null == G ? true : G.status) ? e : "") && "" !== J.trim() ? H(true) : H(false)
  }, [J, null == G ? true : G.status, $, null == G ? true : G.emoji, H, et]), r.useEffect(() => {
    null == F || F(null == X ? true : X.current)
  }, [X, F]);
  let em = r.useCallback(e => {
      e !== ei && ((0, C.Zx)(e, true), null != $ && ee(null), "" !== J.trim() && Q(""))
    }, [ei, $, J]),
    eg = r.useCallback(() => {
      ee(null), Q(""), en(false)
    }, []),
    eb = r.useCallback(e => {
      let {
        emoji: t,
        status: n
      } = e;
      s()(t, null == G ? true : G.emoji) && n === (null == G ? true : G.status) || ((0, C._s)(e.status, e.emoji, true), ee(e.emoji), Q(e.status))
    }, [null == G ? true : G.emoji, null == G ? true : G.status]),
    eC = r.useCallback(e => {
      var t, n;
      null == e || null == (t = e.preventDefault) || t.call(e), null != $ && 0 === J.trim().length && eu(true), ea || (eb({
        status: J,
        emoji: null != $ ? $ : {
          id: null,
          name: "\uD83D\uDCAD",
          animated: false
        }
      }), null == (n = V.current) || n.blur(), en(false))
    }, [J, $, eb, ea]),
    ey = r.useCallback(() => {
      var e, t;
      let n = null,
        i = null;
      do
        if (0 === eo.length || (i = (null == (n = (0, c.sample)(eo)) ? true : n.id) != null ? {
            id: n.id,
            name: n.name,
            animated: n.animated
          } : {
            id: null,
            name: null != (t = null == n ? true : n.optionallyDiverseSequence) ? t : "",
            animated: false
          }, 1 === eo.length)) break; while (null == n || (null == n ? true : n.name) == null || s()($, i));
      null != i && (null == n ? true : n.name) != null && (ee(i), Q(n.name), en(true), null == (e = V.current) || e.focus(), b.default.track(A.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, x.Z)(B.id)))
    }, [eo, $, B.id]),
    e_ = r.useCallback((e, t) => {
      let n = (0, O.Z)(t);
      (!ed || e) && ((0, C.tg)(n ? t : t.status, n ? null : t.emoji), b.default.track(A.rMx.HANG_STATUS_FAVORITE_CLICKED, U(k({}, (0, x.Z)(B.id)), {
        favorited: !e
      })))
    }, [B.id, ed]),
    ev = r.useCallback(() => {
      H(false)
    }, [H]),
    ex = r.useCallback(() => {
      var e;
      J !== (null != (e = null == G ? true : G.status) ? e : "") && "" !== J.trim() ? H(true) : H(false)
    }, [H, J, null == G ? true : G.status]),
    eO = r.useCallback((e, t, n) => {
      var r;
      let l = (0, O.Z)(e),
        a = l ? K[e] : null,
        o = _.Z.isFavorited(e),
        s = l ? (0, i.jsx)(I.Z, {
          userId: g.default.getId(),
          size: 20,
          hangStatusActivity: {
            type: A.IIU.HANG_STATUS,
            state: e
          },
          fallbackVariant: q,
          className: R.icon
        }) : null != e.emoji && (0, i.jsx)(f.Z, {
          emoji: e.emoji,
          hideTooltip: true,
          className: R.icon
        });
      return (0, i.jsx)(T.L, {
        label: l ? null != (r = null == a ? true : a.title) ? r : "" : e.status,
        icon: s,
        setStatus: () => {
          l ? em(e) : eb(e), en(false)
        },
        isFavorited: o,
        onFavoriteClick: () => e_(o, e)
      }, "".concat(n, "-").concat(t))
    }, [q, eb, em, K, e_]),
    ej = r.useCallback(() => {
      (0, C.Sc)(true, Y), ee(null), Q(""), en(false)
    }, [Y]),
    eE = r.useCallback(e => {
      en(true), Q(e.substring(0, N.s0))
    }, []);
  return (0, i.jsxs)("div", {
    ref: X,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(L.menu, R.container),
    children: [(0, i.jsx)(p.J2, {
      title: M.intl.string(M.t.waaIiO),
      body: M.intl.string(M.t.qDoPah),
      badge: "new",
      shouldShow: eh === d.z.HANG_STATUS_POPOVER_NUX,
      graphic: {
        type: "image",
        src: D.Z
      },
      targetElementRef: X,
      onRequestClose: () => ef(w.L.DISMISS)
    }), (0, i.jsx)("div", {
      role: "group",
      className: a()(L.groupLabel, R.inputGroup),
      children: (0, i.jsxs)("form", {
        onSubmit: eC,
        className: a()(L.item, R.input),
        children: [(0, i.jsxs)("div", {
          className: R.inputRow,
          children: [(0, i.jsx)(h.oil, {
            inputRef: V,
            value: et || ep ? J : null != (o = null == er ? true : er.title) ? o : "",
            onBlur: ev,
            onFocus: ex,
            onChange: eE,
            placeholder: M.intl.string(M.t.KPop4s),
            leading: {
              type: "emoji",
              button: (0, i.jsx)(P.A, {
                customStatusEmoji: $,
                setCustomStatusEmoji: ee,
                selectedDefaultStatus: et || ep ? null : ei,
                defaultStatusVariant: q
              })
            },
            trailing: null == G && null == ei || es ? es ? {
              icon: h.d4D,
              onClick: eC,
              "aria-label": M.intl.string(M.t["R3BPH+"]),
              disabled: 0 === J.length
            } : true : {
              icon: h.XHJ,
              onClick: ej,
              "aria-label": M.intl.string(M.t.S90FuQ)
            }
          }), (0, i.jsx)(h.hU, {
            variant: "secondary",
            icon: S.k,
            onClick: ey,
            "aria-label": M.intl.string(M.t["5UAi59"])
          })]
        }), ec && (0, i.jsx)(h.Text, {
          variant: "text-xs/normal",
          className: R.inputHint,
          color: "text-danger",
          children: M.intl.string(M.t["s/oq0f"])
        })]
      })
    }), (0, i.jsxs)(h.Ttm, {
      fade: true,
      role: "group",
      className: a()(L.groupLabel, R.group, R.scroller),
      children: [(0, i.jsx)(Z.d, {
        guildId: B.guild_id,
        onSetActivityStatus: eg
      }), el && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: R.subtitle,
          children: [(0, i.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: M.intl.string(M.t.k8fFjp)
          }), (0, i.jsx)(h.r7p, {
            size: "xxs"
          })]
        }), W.map((e, t) => eO(e, t, "favorite"))]
      }), z.length > 0 && el && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          role: "separator",
          className: R.separator
        }), (0, i.jsxs)("div", {
          className: R.subtitle,
          children: [(0, i.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: M.intl.string(M.t["+9QSnj"])
          }), (0, i.jsx)(h.T39, {
            size: "xxs"
          })]
        })]
      }), z.map((e, t) => eO(e, t, "recent"))]
    })]
  })
}