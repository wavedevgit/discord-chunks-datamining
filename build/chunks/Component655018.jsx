/** Chunk was on 32202 **/
/** chunk id: 655018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => w
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
  var t, n, l;
  let {
    channel: o,
    setIsHangStatusInputFocused: w,
    setPopoutRef: M
  } = e, R = i.useRef(null), k = (0, u.e7)([b.Z], () => b.Z.getCustomHangStatus()), L = (0, x.Z)(), D = (0, u.e7)([b.Z], () => b.Z.getFavoritedStatuses()), {
    defaultStatusVariant: U,
    allowPermanentClear: B
  } = g.n.useExperiment({
    guildId: o.guild_id,
    location: "HangStatusPicker"
  }), F = (0, y.V)(U), H = i.useRef(null), [V, G] = i.useState(null != (n = null == k ? true : k.status) ? n : ""), [z, W] = i.useState(null != (l = null == k ? true : k.emoji) ? l : null), q = (0, u.e7)([b.Z], () => b.Z.getCurrentHangStatus()), Y = D.length > 0, K = null == V || "" === V.trim(), X = (0, v.Z)(o), J = V.trim().length > 0 && V.trim() !== (null == k || null == (t = k.status) ? true : t.trim()) || null != z && !s()(z, null == k ? true : k.emoji), [Q, $] = i.useState(false), ee = (0, u.e7)([b.Z], () => b.Z.getFavoritedStatuses().length >= b.o);
  i.useEffect(() => {
    V.trim().length > 0 && Q && $(false), null == z && Q && $(false)
  }, [V, z, Q]), i.useEffect(() => {
    if (null != z) {
      var e;
      null == (e = R.current) || e.focus()
    }
  }, [z]), i.useEffect(() => {
    var e;
    V !== (null != (e = null == k ? true : k.status) ? e : "") && "" !== V.trim() ? w(true) : w(false)
  }, [V, null == k ? true : k.status, z, null == k ? true : k.emoji, w]), i.useEffect(() => {
    var e;
    (null == q || q === I.tN.CUSTOM) && (null == (e = R.current) || e.focus())
  }, [q]), i.useEffect(() => {
    null == M || M(null == H ? true : H.current)
  }, [H, M]);
  let et = i.useCallback(e => {
      e !== q && ((0, m.Zx)(e, true), null != z && W(null), "" !== V.trim() && G(""))
    }, [q, z, V]),
    en = i.useCallback((e, t) => {
      let {
        emoji: n,
        status: r
      } = e;
      s()(n, null == k ? true : k.emoji) && r === (null == k ? true : k.status) || ((0, m._s)(e.status, e.emoji, true), W(t ? null : e.emoji), G(t ? "" : e.status))
    }, [null == k ? true : k.emoji, null == k ? true : k.status]),
    er = i.useCallback(e => {
      var t;
      null == e || null == (t = e.preventDefault) || t.call(e), null != z && 0 === V.trim().length && $(true), K || en({
        status: V,
        emoji: null != z ? z : {
          id: null,
          name: "\uD83D\uDCAD",
          animated: false
        }
      }, true)
    }, [V, z, en, K]),
    ei = i.useCallback(() => {
      let e = null,
        t = null;
      do {
        var n;
        if (0 === X.length || (t = (null == (e = (0, c.sample)(X)) ? true : e.id) != null ? {
            id: e.id,
            name: e.name,
            animated: e.animated
          } : {
            id: null,
            name: null != (n = null == e ? true : e.optionallyDiverseSequence) ? n : "",
            animated: false
          }, 1 === X.length)) break
      } while (null == e || (null == e ? true : e.name) == null || s()(z, t));
      null != t && (null == e ? true : e.name) != null && (W(t), G(e.name), f.default.track(Z.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, C.Z)(o.id)))
    }, [X, z, o.id]),
    el = i.useCallback((e, t) => {
      let n = (0, _.Z)(t);
      if (!ee || e) {
        var r, i;
        (0, m.tg)(n ? t : t.status, n ? null : t.emoji), f.default.track(Z.rMx.HANG_STATUS_FAVORITE_CLICKED, (r = function(e) {
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
        }({}, (0, C.Z)(o.id)), i = i = {
          favorited: !e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
        }), r))
      }
    }, [o.id, ee]),
    ea = i.useCallback(() => {
      w(false)
    }, [w]),
    eo = i.useCallback(() => {
      var e;
      V !== (null != (e = null == k ? true : k.status) ? e : "") && "" !== V.trim() ? w(true) : w(false)
    }, [w, V, null == k ? true : k.status]),
    es = i.useCallback((e, t, n) => {
      var i;
      let l = (0, _.Z)(e),
        a = l ? F[e] : null,
        o = b.Z.isFavorited(e),
        c = l ? (0, r.jsx)(E.Z, {
          userId: h.default.getId(),
          size: 20,
          hangStatusActivity: {
            type: Z.IIU.HANG_STATUS,
            state: e
          },
          fallbackVariant: U,
          className: N.icon
        }) : null != e.emoji && (0, r.jsx)(p.Z, {
          emoji: e.emoji,
          hideTooltip: true,
          className: N.icon
        });
      return (0, r.jsx)(P.L, {
        isSelected: l ? q === e : s()(null == k ? true : k.emoji, e.emoji) && (null == k ? true : k.status) === e.status,
        label: l ? null != (i = null == a ? true : a.title) ? i : "" : e.status,
        icon: c,
        setStatus: () => {
          l ? et(e) : en(e)
        },
        clearStatus: () => (0, m.Sc)(true, B),
        isFavorited: o,
        onFavoriteClick: () => el(o, e)
      }, "".concat(n, "-").concat(t))
    }, [U, en, et, F, null == k ? true : k.emoji, null == k ? true : k.status, q, B, el]);
  return (0, r.jsxs)("div", {
    ref: H,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(A.menu, N.container),
    children: [(0, r.jsx)("div", {
      role: "group",
      className: a()(A.groupLabel, N.group),
      children: (0, r.jsxs)("form", {
        onSubmit: er,
        className: a()(A.item, N.input),
        children: [(0, r.jsx)(d.oil, {
          inputRef: R,
          value: V,
          onBlur: ea,
          onFocus: eo,
          onChange: e => G(e.substring(0, I.s0)),
          placeholder: T.intl.string(T.t.KPop4u),
          leading: {
            type: "emoji",
            button: (0, r.jsx)(j.A, {
              customStatusEmoji: z,
              setCustomStatusEmoji: W
            })
          },
          trailing: {
            icon: O.k,
            onClick: ei,
            "aria-label": T.intl.string(T.t["5UAi5+"])
          }
        }), Q && (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: N.inputHint,
          color: "text-danger",
          children: T.intl.string(T.t["s/oq0d"])
        }), J && !Q && (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: N.inputHint,
          children: T.intl.format(T.t["VjkH/v"], {
            onSave: () => er()
          })
        })]
      })
    }), (0, r.jsxs)(d.Ttm, {
      fade: true,
      role: "group",
      className: a()(A.groupLabel, N.group, N.scroller),
      children: [(0, r.jsx)(S.d, {
        guildId: o.guild_id
      }), Y && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: N.subtitle,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: T.intl.string(T.t.k8fFjo)
          }), (0, r.jsx)(d.r7p, {
            size: "xxs"
          })]
        }), D.map((e, t) => es(e, t, "favorite"))]
      }), L.length > 0 && Y && (0, r.jsxs)(r.Fragment, {
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
      }), L.map((e, t) => es(e, t, "recent"))]
    })]
  })
}