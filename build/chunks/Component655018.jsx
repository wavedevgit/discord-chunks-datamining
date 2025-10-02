/** Chunk was on 49613 **/
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
  Chunk34101 = require("./34101.js"),
  Chunk515527 = require("./515527.js"),
  Chunk977007 = require("./977007.js");

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

function B(e) {
  var t, n, l, o;
  let {
    channel: B,
    setIsHangStatusInputFocused: H,
    setPopoutRef: V
  } = e, F = i.useRef(null), G = (0, u.e7)([_.Z], () => _.Z.getCustomHangStatus()), z = (0, E.Z)(), W = (0, u.e7)([_.Z], () => _.Z.getFavoritedStatuses()), {
    defaultStatusVariant: q,
    allowPermanentClear: Y
  } = (0, C.bN)({
    guildId: B.guild_id,
    location: "HangStatusPicker"
  }), K = (0, v.V)(q), X = i.useRef(null), J = i.useRef(null), [Q, $] = i.useState(null != (n = null == G ? true : G.status) ? n : ""), [ee, et] = i.useState(null != (l = null == G ? true : G.emoji) ? l : null), [en, er] = i.useState(false), ei = (0, u.e7)([_.Z], () => _.Z.getCurrentHangStatus()), el = K[ei], ea = W.length > 0, eo = null == Q || "" === Q.trim(), es = (0, j.Z)(B), ec = Q.trim().length > 0 && Q.trim() !== (null == G || null == (t = G.status) ? true : t.trim()) || null != ee && !s()(ee, null == G ? true : G.emoji), [eu, ed] = i.useState(false), ep = (0, u.e7)([_.Z], () => _.Z.getFavoritedStatuses().length >= _.o), eh = Q.length > 0 || null != ee, [ef, em] = (0, m.US)([d.z.HANG_STATUS_POPOVER_NUX]);
  i.useEffect(() => {
    b.default.track(A.rMx.HANG_STATUS_PICKER_OPENED, U(L({}, (0, x.Z)(B.id)), {
      num_favorites: W.length,
      num_recents: z.length
    }))
  }, []), i.useEffect(() => {
    Q.trim().length > 0 && eu && ed(false), null == ee && eu && ed(false)
  }, [Q, ee, eu]), i.useEffect(() => {
    var e;
    Q !== (null != (e = null == G ? true : G.status) ? e : "") && "" !== Q.trim() ? H(true) : H(false)
  }, [Q, null == G ? true : G.status, ee, null == G ? true : G.emoji, H]), i.useEffect(() => {
    null == V || V(null == X ? true : X.current)
  }, [X, V]);
  let eg = i.useCallback(e => {
      e !== ei && ((0, y.Zx)(e, true), null != ee && et(null), "" !== Q.trim() && $(""))
    }, [ei, ee, Q]),
    eb = i.useCallback(e => {
      let {
        emoji: t,
        status: n
      } = e;
      s()(t, null == G ? true : G.emoji) && n === (null == G ? true : G.status) || ((0, y._s)(e.status, e.emoji, true), et(e.emoji), $(e.status))
    }, [null == G ? true : G.emoji, null == G ? true : G.status]),
    ey = i.useCallback(e => {
      var t, n;
      null == e || null == (t = e.preventDefault) || t.call(e), null != ee && 0 === Q.trim().length && ed(true), eo || (eb({
        status: Q,
        emoji: null != ee ? ee : {
          id: null,
          name: "\uD83D\uDCAD",
          animated: false
        }
      }), null == (n = F.current) || n.blur(), er(false))
    }, [Q, ee, eb, eo]),
    eC = i.useCallback(() => {
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
      null != r && (null == n ? true : n.name) != null && (et(r), $(n.name), er(true), null == (e = F.current) || e.focus(), b.default.track(A.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, x.Z)(B.id)))
    }, [es, ee, B.id]),
    e_ = i.useCallback((e, t) => {
      let n = (0, O.Z)(t);
      (!ep || e) && ((0, y.tg)(n ? t : t.status, n ? null : t.emoji), b.default.track(A.rMx.HANG_STATUS_FAVORITE_CLICKED, U(L({}, (0, x.Z)(B.id)), {
        favorited: !e
      })))
    }, [B.id, ep]),
    ev = i.useCallback(() => {
      H(false)
    }, [H]),
    ex = i.useCallback(() => {
      var e;
      Q !== (null != (e = null == G ? true : G.status) ? e : "") && "" !== Q.trim() ? H(true) : H(false)
    }, [H, Q, null == G ? true : G.status]),
    eO = i.useCallback((e, t, n) => {
      var i;
      let l = (0, O.Z)(e),
        a = l ? K[e] : null,
        o = _.Z.isFavorited(e),
        s = l ? (0, r.jsx)(I.Z, {
          userId: g.default.getId(),
          size: 20,
          hangStatusActivity: {
            type: A.IIU.HANG_STATUS,
            state: e
          },
          fallbackVariant: q,
          className: R.icon
        }) : null != e.emoji && (0, r.jsx)(f.Z, {
          emoji: e.emoji,
          hideTooltip: true,
          className: R.icon
        });
      return (0, r.jsx)(N.L, {
        label: l ? null != (i = null == a ? true : a.title) ? i : "" : e.status,
        icon: s,
        setStatus: () => {
          l ? eg(e) : eb(e), er(false)
        },
        isFavorited: o,
        onFavoriteClick: () => e_(o, e)
      }, "".concat(n, "-").concat(t))
    }, [q, eb, eg, K, e_]),
    ej = i.useCallback(() => {
      (0, y.Sc)(true, Y), et(null), $(""), er(false)
    }, [Y]),
    eE = i.useCallback(e => {
      er(true), $(e.substring(0, T.s0))
    }, []);
  return (0, r.jsxs)("div", {
    ref: X,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(k.menu, R.container),
    children: [(0, r.jsx)(p.J2, {
      title: M.intl.string(M.t.waaIiI),
      body: M.intl.string(M.t.qDoPam),
      badge: "new",
      shouldShow: ef === d.z.HANG_STATUS_POPOVER_NUX,
      graphic: {
        type: "image",
        src: D.Z
      },
      targetElementRef: J,
      onRequestClose: () => em(w.L.DISMISS)
    }), (0, r.jsx)("div", {
      role: "group",
      className: a()(k.groupLabel, R.inputGroup),
      ref: J,
      children: (0, r.jsxs)("form", {
        onSubmit: ey,
        className: a()(k.item, R.input),
        children: [(0, r.jsxs)("div", {
          className: R.inputRow,
          children: [(0, r.jsx)(h.oil, {
            inputRef: F,
            value: en || eh ? Q : null != (o = null == el ? true : el.title) ? o : "",
            onBlur: ev,
            onFocus: ex,
            onChange: eE,
            placeholder: M.intl.string(M.t.KPop4u),
            leading: {
              type: "emoji",
              button: (0, r.jsx)(P.A, {
                customStatusEmoji: ee,
                setCustomStatusEmoji: et,
                selectedDefaultStatus: en || eh ? null : ei,
                defaultStatusVariant: q
              })
            },
            trailing: null == G && null == ei || ec ? ec ? {
              icon: h.d4D,
              onClick: ey,
              "aria-label": M.intl.string(M.t.R3BPHx)
            } : true : {
              icon: h.XHJ,
              onClick: ej,
              "aria-label": M.intl.string(M.t.S90Fub)
            }
          }), (0, r.jsx)(h.hU, {
            variant: "secondary",
            icon: S.k,
            onClick: eC,
            "aria-label": M.intl.string(M.t["5UAi5+"])
          })]
        }), eu && (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          className: R.inputHint,
          color: "text-danger",
          children: M.intl.string(M.t["s/oq0d"])
        })]
      })
    }), (0, r.jsxs)(h.Ttm, {
      fade: true,
      role: "group",
      className: a()(k.groupLabel, R.group, R.scroller),
      children: [(0, r.jsx)(Z.d, {
        guildId: B.guild_id
      }), ea && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: R.subtitle,
          children: [(0, r.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: M.intl.string(M.t.k8fFjo)
          }), (0, r.jsx)(h.r7p, {
            size: "xxs"
          })]
        }), W.map((e, t) => eO(e, t, "favorite"))]
      }), z.length > 0 && ea && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          role: "separator",
          className: R.separator
        }), (0, r.jsxs)("div", {
          className: R.subtitle,
          children: [(0, r.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: M.intl.string(M.t["+9QSnp"])
          }), (0, r.jsx)(h.T39, {
            size: "xxs"
          })]
        })]
      }), z.map((e, t) => eO(e, t, "recent"))]
    })]
  })
}