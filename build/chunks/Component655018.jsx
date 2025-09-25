/** Chunk was on 88806 **/
/** chunk id: 655018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => A
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

function A(e) {
  var t, n, l;
  let {
    channel: o,
    setIsHangStatusInputFocused: A,
    setPopoutRef: w
  } = e, M = i.useRef(null), R = (0, u.e7)([b.Z], () => b.Z.getCustomHangStatus()), k = (0, u.e7)([b.Z], () => b.Z.getRecentStatuses()), L = (0, u.e7)([b.Z], () => b.Z.getFavoritedStatuses()), {
    defaultStatusVariant: D,
    allowPermanentClear: U
  } = g.n.useExperiment({
    guildId: o.guild_id,
    location: "HangStatusPicker"
  }), B = (0, y.V)(D), V = i.useRef(null), [H, F] = i.useState(null != (n = null == R ? true : R.status) ? n : ""), [G, z] = i.useState(null != (l = null == R ? true : R.emoji) ? l : null), W = (0, u.e7)([b.Z], () => b.Z.getCurrentHangStatus()), q = L.length > 0, Y = null == H || "" === H.trim(), K = (0, v.Z)(o), X = H.trim().length > 0 && H.trim() !== (null == R || null == (t = R.status) ? true : t.trim()) || null != G && !s()(G, null == R ? true : R.emoji), [J, Q] = i.useState(false);
  i.useEffect(() => {
    H.trim().length > 0 && J && Q(false), null == G && J && Q(false)
  }, [H, G, J]), i.useEffect(() => {
    if (null != G) {
      var e;
      null == (e = M.current) || e.focus()
    }
  }, [G]), i.useEffect(() => {
    var e;
    H !== (null != (e = null == R ? true : R.status) ? e : "") && "" !== H.trim() ? A(true) : A(false)
  }, [H, null == R ? true : R.status, G, null == R ? true : R.emoji, A]), i.useEffect(() => {
    var e;
    (null == W || W === P.tN.CUSTOM) && (null == (e = M.current) || e.focus())
  }, [W]), i.useEffect(() => {
    null == w || w(null == V ? true : V.current)
  }, [V, w]);
  let $ = i.useCallback(e => {
      e !== W && ((0, m.Zx)(e, true), null != G && z(null), "" !== H.trim() && F(""))
    }, [W, G, H]),
    ee = i.useCallback((e, t) => {
      let {
        emoji: n,
        status: r
      } = e;
      s()(n, null == R ? true : R.emoji) && r === (null == R ? true : R.status) || ((0, m._s)(e.status, e.emoji, true), z(t ? null : e.emoji), F(t ? "" : e.status))
    }, [null == R ? true : R.emoji, null == R ? true : R.status]),
    et = i.useCallback(e => {
      var t;
      null == e || null == (t = e.preventDefault) || t.call(e), null != G && 0 === H.trim().length && Q(true), Y || ee({
        status: H,
        emoji: null != G ? G : {
          id: null,
          name: "\uD83D\uDCAD",
          animated: false
        }
      }, true)
    }, [H, G, ee, Y]),
    en = i.useCallback(() => {
      let e = null,
        t = null;
      do {
        var n;
        if (0 === K.length || (t = (null == (e = (0, c.sample)(K)) ? true : e.id) != null ? {
            id: e.id,
            name: e.name,
            animated: e.animated
          } : {
            id: null,
            name: null != (n = null == e ? true : e.optionallyDiverseSequence) ? n : "",
            animated: false
          }, 1 === K.length)) break
      } while (null == e || (null == e ? true : e.name) == null || s()(G, t));
      null != t && (null == e ? true : e.name) != null && (z(t), F(e.name), f.default.track(I.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, C.Z)(o.id)))
    }, [K, G, o.id]),
    er = i.useCallback(() => {
      A(false)
    }, [A]),
    ei = i.useCallback(() => {
      var e;
      H !== (null != (e = null == R ? true : R.status) ? e : "") && "" !== H.trim() ? A(true) : A(false)
    }, [A, H, null == R ? true : R.status]),
    el = i.useCallback((e, t, n) => {
      var i;
      let l = (0, _.Z)(e),
        a = l ? B[e] : null,
        o = L.some(t => (0, _.Z)(t) && l && e === t || !(0, _.Z)(t) && !l && t.status === e.status && s()(t.emoji, e.emoji)),
        c = l ? (0, r.jsx)(j.Z, {
          userId: h.default.getId(),
          size: 20,
          hangStatusActivity: {
            type: I.IIU.HANG_STATUS,
            state: e
          },
          fallbackVariant: D,
          className: T.icon
        }) : null != e.emoji && (0, r.jsx)(p.Z, {
          emoji: e.emoji,
          hideTooltip: true,
          className: T.icon
        });
      return (0, r.jsx)(S.L, {
        isSelected: l ? W === e : s()(null == R ? true : R.emoji, e.emoji) && (null == R ? true : R.status) === e.status,
        label: l ? null != (i = null == a ? true : a.title) ? i : "" : e.status,
        icon: c,
        setStatus: () => {
          l ? $(e) : ee(e)
        },
        clearStatus: () => (0, m.Sc)(true, U),
        isFavorited: o,
        onFavoriteClick: () => (0, m.tg)(l ? e : e.status, l ? null : e.emoji)
      }, "".concat(n, "-").concat(t))
    }, [D, ee, $, B, null == R ? true : R.emoji, null == R ? true : R.status, W, L, U]);
  return (0, r.jsxs)("div", {
    ref: V,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(N.menu, T.container),
    children: [(0, r.jsx)("div", {
      role: "group",
      className: a()(N.groupLabel, T.group),
      children: (0, r.jsxs)("form", {
        onSubmit: et,
        className: a()(N.item, T.input),
        children: [(0, r.jsx)(d.oil, {
          inputRef: M,
          value: H,
          onBlur: er,
          onFocus: ei,
          onChange: e => F(e.substring(0, P.s0)),
          placeholder: Z.intl.string(Z.t.KPop4u),
          leading: {
            type: "emoji",
            button: (0, r.jsx)(O.A, {
              customStatusEmoji: G,
              setCustomStatusEmoji: z
            })
          },
          trailing: {
            icon: x.k,
            onClick: en,
            "aria-label": Z.intl.string(Z.t["5UAi5+"])
          }
        }), J && (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: T.inputHint,
          color: "text-danger",
          children: Z.intl.string(Z.t["s/oq0d"])
        }), X && !J && (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: T.inputHint,
          children: Z.intl.format(Z.t["VjkH/v"], {
            onSave: () => et()
          })
        })]
      })
    }), (0, r.jsxs)(d.Ttm, {
      fade: true,
      role: "group",
      className: a()(N.groupLabel, T.group, T.scroller),
      children: [(0, r.jsx)(E.d, {
        guildId: o.guild_id
      }), q && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: T.subtitle,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: Z.intl.string(Z.t.k8fFjo)
          }), (0, r.jsx)(d.r7p, {
            size: "xxs"
          })]
        }), L.map((e, t) => el(e, t, "favorite"))]
      }), k.length > 0 && q && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          role: "separator",
          className: T.separator
        }), (0, r.jsxs)("div", {
          className: T.subtitle,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: Z.intl.string(Z.t["+9QSnp"])
          }), (0, r.jsx)(d.T39, {
            size: "xxs"
          })]
        })]
      }), k.map((e, t) => el(e, t, "recent"))]
    })]
  })
}