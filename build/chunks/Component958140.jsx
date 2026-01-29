/** Chunk was on 1113 **/
/** chunk id: 958140, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => U
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk812729 = require("./812729.js"),
  o = require.n(Chunk812729),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk51183 = require("./51183.jsx"),
  Chunk379848 = require("./379848.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk954571 = require("./954571.js"),
  Chunk69555 = require("./69555.js"),
  Chunk140547 = require("./140547.js"),
  Chunk242919 = require("./242919.js"),
  Chunk886019 = require("./886019.js"),
  Chunk806246 = require("./806246.js"),
  Chunk60821 = require("./60821.js"),
  Chunk391786 = require("./391786.js"),
  Chunk50122 = require("./50122.js"),
  Chunk132970 = require("./132970.jsx"),
  Chunk129104 = require("./129104.jsx"),
  Chunk559405 = require("./559405.jsx"),
  Chunk272997 = require("./272997.jsx"),
  Chunk266069 = require("./266069.jsx");
require("./708455.js");
var Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk680930 = require("./680930.js"),
  Chunk658122 = require("./658122.js"),
  Chunk266915 = require("./266915.js");

function k(e) {
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

function G(e, t) {
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

function U(e) {
  var t, n, i, a;
  let {
    channel: U,
    setIsHangStatusInputFocused: V,
    setIsEmojiPickerOpen: B,
    setPopoutRef: H
  } = e, F = l.useRef(null), K = (0, u.bG)([O.A], () => O.A.getCustomHangStatus()), Y = (0, E.A)(), W = (0, u.bG)([O.A], () => O.A.getFavoritedStatuses()), {
    defaultStatusVariant: z,
    allowPermanentClear: q
  } = (0, y.$j)({
    guildId: U.guild_id,
    location: "HangStatusPicker"
  }), X = (0, _.hy)(z), J = l.useRef(null), [Q, Z] = l.useState(null != (t = null == K ? true : K.status) ? t : ""), [$, ee] = l.useState(null != (n = null == K ? true : K.emoji) ? n : null), [et, en] = l.useState(false), er = (0, u.bG)([O.A], () => O.A.getCurrentHangStatus()), el = X[er], ei = W.length > 0, es = null == Q || "" === Q.trim(), ea = (0, v.A)(U), eo = Q.trim().length > 0 && Q.trim() !== (null == K || null == (a = K.status) ? true : a.trim()) || null != $ && !o()($, null == K ? true : K.emoji), [ec, eu] = l.useState(false), ed = (0, u.bG)([O.A], () => O.A.getFavoritedStatuses().length >= O.x), eh = Q.length > 0 || null != $, [ep, eg] = (0, f.kn)([d.M.HANG_STATUS_POPOVER_NUX]);
  l.useEffect(() => {
    b.default.track(P.HAw.HANG_STATUS_PICKER_OPENED, G(k({}, (0, x.A)(U.id)), {
      num_favorites: W.length,
      num_recents: Y.length
    }))
  }, []), l.useEffect(() => {
    Q.trim().length > 0 && ec && eu(false), null == $ && ec && eu(false)
  }, [Q, $, ec]), l.useEffect(() => {
    var e;
    et || Q !== (null != (e = null == K ? true : K.status) ? e : "") && "" !== Q.trim() ? V(true) : V(false)
  }, [Q, null == K ? true : K.status, $, null == K ? true : K.emoji, V, et]), l.useEffect(() => {
    null == H || H(null == J ? true : J.current)
  }, [J, H]);
  let ef = l.useCallback(e => {
      e !== er && ((0, A.Iq)(e, true), null != $ && ee(null), "" !== Q.trim() && Z(""))
    }, [er, $, Q]),
    em = l.useCallback(() => {
      ee(null), Z(""), en(false)
    }, []),
    eb = l.useCallback(e => {
      let {
        emoji: t,
        status: n
      } = e;
      o()(t, null == K ? true : K.emoji) && n === (null == K ? true : K.status) || ((0, A.hS)(e.status, e.emoji, true), ee(e.emoji), Z(e.status))
    }, [null == K ? true : K.emoji, null == K ? true : K.status]),
    eA = l.useCallback(e => {
      var t, n;
      null == e || null == (t = e.preventDefault) || t.call(e), null != $ && 0 === Q.trim().length && eu(true), es || (eb({
        status: Q,
        emoji: null != $ ? $ : {
          id: null,
          name: "\uD83D\uDCAD",
          animated: false
        }
      }), null == (n = F.current) || n.blur(), en(false))
    }, [Q, $, eb, es]),
    ey = l.useCallback(() => {
      var e, t;
      let n = null,
        r = null;
      do
        if (0 === ea.length || (r = (null == (n = (0, c.sample)(ea)) ? true : n.id) != null ? {
            id: n.id,
            name: n.name,
            animated: n.animated
          } : {
            id: null,
            name: null != (t = null == n ? true : n.optionallyDiverseSequence) ? t : "",
            animated: false
          }, 1 === ea.length)) break; while (null == n || (null == n ? true : n.name) == null || o()($, r));
      null != r && (null == n ? true : n.name) != null && (ee(r), Z(n.name), en(true), null == (e = F.current) || e.focus(), b.default.track(P.HAw.HANG_STATUS_RANDOMIZER_CLICKED, (0, x.A)(U.id)))
    }, [ea, $, U.id]),
    eO = l.useCallback((e, t) => {
      let n = (0, j.A)(t);
      (!ed || e) && ((0, A.My)(n ? t : t.status, n ? null : t.emoji), b.default.track(P.HAw.HANG_STATUS_FAVORITE_CLICKED, G(k({}, (0, x.A)(U.id)), {
        favorited: !e
      })))
    }, [U.id, ed]),
    e_ = l.useCallback(() => {
      V(false)
    }, [V]),
    ex = l.useCallback(() => {
      V(true)
    }, [V]),
    ej = l.useCallback((e, t, n) => {
      var l;
      let i = (0, j.A)(e),
        s = i ? X[e] : null,
        a = O.A.isFavorited(e),
        o = i ? (0, r.jsx)(I.A, {
          userId: m.default.getId(),
          size: 20,
          hangStatusActivity: {
            type: P.$pd.HANG_STATUS,
            state: e
          },
          fallbackVariant: z,
          className: D.Kk
        }) : null != e.emoji && (0, r.jsx)(g.A, {
          emoji: e.emoji,
          hideTooltip: true,
          className: D.Kk
        });
      return (0, r.jsx)(T.u, {
        label: i ? null != (l = null == s ? true : s.title) ? l : "" : e.status,
        icon: o,
        setStatus: () => {
          i ? ef(e) : eb(e), en(false)
        },
        isFavorited: a,
        onFavoriteClick: () => eO(a, e)
      }, "".concat(n, "-").concat(t))
    }, [z, eb, ef, X, eO]),
    ev = l.useCallback(() => {
      (0, A.eK)(true, q), ee(null), Z(""), en(false)
    }, [q]),
    eE = l.useCallback(e => {
      en(true), Z(e.substring(0, 60))
    }, []);
  return (0, r.jsxs)("div", {
    ref: J,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: s()(L.menu, D.kL),
    children: [(0, r.jsx)(h.AM, {
      title: R.intl.string(R.t.waaIiO),
      body: R.intl.string(R.t.qDoPah),
      badge: "new",
      shouldShow: ep === d.M.HANG_STATUS_POPOVER_NUX,
      graphic: {
        type: "image",
        src: M.A
      },
      targetElementRef: J,
      onRequestClose: () => eg(w.i.DISMISS)
    }), (0, r.jsx)("div", {
      role: "group",
      className: s()(L.groupLabel, D.wO),
      children: (0, r.jsxs)("form", {
        onSubmit: eA,
        className: s()(L.item, D.hF),
        children: [(0, r.jsxs)("div", {
          className: D.bd,
          children: [(0, r.jsx)(p.ksK, {
            inputRef: F,
            value: et || eh ? Q : null != (i = null == el ? true : el.title) ? i : "",
            onBlur: e_,
            onFocus: ex,
            onChange: eE,
            placeholder: R.intl.string(R.t.KPop4s),
            leading: {
              type: "emoji",
              button: (0, r.jsx)(S.R, {
                customStatusEmoji: $,
                setCustomStatusEmoji: ee,
                selectedDefaultStatus: et || eh ? null : er,
                defaultStatusVariant: z,
                setIsEmojiPickerOpen: B
              })
            },
            trailing: null == K && null == er || eo ? eo ? {
              icon: p.KS6,
              onClick: eA,
              "aria-label": R.intl.string(R.t["R3BPH+"]),
              disabled: 0 === Q.length
            } : true : {
              icon: p.ucK,
              onClick: ev,
              "aria-label": R.intl.string(R.t.S90FuQ)
            }
          }), (0, r.jsx)(p.K0, {
            variant: "secondary",
            icon: C.j,
            onClick: ey,
            "aria-label": R.intl.string(R.t["5UAi59"])
          })]
        }), ec && (0, r.jsx)(p.Text, {
          variant: "text-xs/normal",
          className: D.iX,
          color: "text-feedback-critical",
          children: R.intl.string(R.t["s/oq0f"])
        })]
      })
    }), (0, r.jsxs)(p.HOs, {
      fade: true,
      role: "group",
      className: s()(L.groupLabel, D.Os, D.XG),
      children: [(0, r.jsx)(N.k, {
        guildId: U.guild_id,
        onSetActivityStatus: em
      }), ei && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: D.VA,
          children: [(0, r.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: R.intl.string(R.t.k8fFjp)
          }), (0, r.jsx)(p.Gg5, {
            size: "xxs"
          })]
        }), W.map((e, t) => ej(e, t, "favorite"))]
      }), Y.length > 0 && ei && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          role: "separator",
          className: D.me
        }), (0, r.jsxs)("div", {
          className: D.VA,
          children: [(0, r.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: R.intl.string(R.t["+9QSnj"])
          }), (0, r.jsx)(p.O4, {
            size: "xxs"
          })]
        })]
      }), Y.map((e, t) => ej(e, t, "recent"))]
    })]
  })
}