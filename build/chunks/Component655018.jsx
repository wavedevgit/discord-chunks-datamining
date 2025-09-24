/** Chunk was on 88806 **/
/** chunk id: 655018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => N
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

function N(e) {
  var t, n, l;
  let {
    channel: o,
    setIsHangStatusInputFocused: N,
    setPopoutRef: A
  } = e, w = i.useRef(null), M = (0, u.e7)([g.Z], () => g.Z.getCustomHangStatus()), R = (0, u.e7)([g.Z], () => g.Z.getRecentStatuses()), k = (0, u.e7)([g.Z], () => g.Z.getFavoritedStatuses()), {
    defaultStatusVariant: L,
    allowPermanentClear: D
  } = m.n.useExperiment({
    guildId: o.guild_id,
    location: "HangStatusPicker"
  }), U = (0, b.V)(L), B = i.useRef(null), [H, V] = i.useState(null != (n = null == M ? true : M.status) ? n : ""), [F, G] = i.useState(null != (l = null == M ? true : M.emoji) ? l : null), z = (0, u.e7)([g.Z], () => g.Z.getCurrentHangStatus()), W = k.length > 0, q = null == H || "" === H.trim(), Y = (0, _.Z)(o), K = H.trim().length > 0 && H.trim() !== (null == M || null == (t = M.status) ? true : t.trim()) || null != F && !s()(F, null == M ? true : M.emoji), [X, J] = i.useState(false);
  i.useEffect(() => {
    H.trim().length > 0 && X && J(false), null == F && X && J(false)
  }, [H, F, X]), i.useEffect(() => {
    if (null != F) {
      var e;
      null == (e = w.current) || e.focus()
    }
  }, [F]), i.useEffect(() => {
    var e;
    H !== (null != (e = null == M ? true : M.status) ? e : "") && "" !== H.trim() ? N(true) : N(false)
  }, [H, null == M ? true : M.status, F, null == M ? true : M.emoji, N]), i.useEffect(() => {
    var e;
    (null == z || z === S.tN.CUSTOM) && (null == (e = w.current) || e.focus())
  }, [z]), i.useEffect(() => {
    null == A || A(null == B ? true : B.current)
  }, [B, A]);
  let Q = i.useCallback(e => {
      e !== z && ((0, f.Zx)(e, true), null != F && G(null), "" !== H.trim() && V(""))
    }, [z, F, H]),
    $ = i.useCallback((e, t) => {
      let {
        emoji: n,
        status: r
      } = e;
      s()(n, null == M ? true : M.emoji) && r === (null == M ? true : M.status) || ((0, f._s)(e.status, e.emoji, true), G(t ? null : e.emoji), V(t ? "" : e.status))
    }, [null == M ? true : M.emoji, null == M ? true : M.status]),
    ee = i.useCallback(e => {
      var t;
      null == e || null == (t = e.preventDefault) || t.call(e), null != F && 0 === H.trim().length && J(true), q || $({
        status: H,
        emoji: null != F ? F : {
          id: null,
          name: "\uD83D\uDCAD",
          animated: false
        }
      }, true)
    }, [H, F, $, q]),
    et = i.useCallback(() => {
      let e = null,
        t = null;
      do {
        var n;
        if (0 === Y.length || (t = (null == (e = (0, c.sample)(Y)) ? true : e.id) != null ? {
            id: e.id,
            name: e.name,
            animated: e.animated
          } : {
            id: null,
            name: null != (n = null == e ? true : e.optionallyDiverseSequence) ? n : "",
            animated: false
          }, 1 === Y.length)) break
      } while (null == e || (null == e ? true : e.name) == null || s()(F, t));
      null != t && (null == e ? true : e.name) != null && (G(t), V(e.name), h.default.track(P.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, y.Z)(o.id)))
    }, [Y, F, o.id]),
    en = i.useCallback(() => {
      N(false)
    }, [N]),
    er = i.useCallback(() => {
      var e;
      H !== (null != (e = null == M ? true : M.status) ? e : "") && "" !== H.trim() ? N(true) : N(false)
    }, [N, H, null == M ? true : M.status]),
    ei = i.useCallback((e, t, n) => {
      var i;
      let l = (0, C.Z)(e),
        a = l ? U[e] : null,
        o = k.some(t => (0, C.Z)(t) && l && e === t || !(0, C.Z)(t) && !l && t.status === e.status && s()(t.emoji, e.emoji)),
        c = l ? (0, r.jsx)(O.Z, {
          size: 20,
          hangStatusActivity: {
            type: P.IIU.HANG_STATUS,
            state: e
          },
          fallbackVariant: L,
          className: Z.icon
        }) : null != e.emoji && (0, r.jsx)(p.Z, {
          emoji: e.emoji,
          hideTooltip: true,
          className: Z.icon
        });
      return (0, r.jsx)(E.L, {
        isSelected: l ? z === e : s()(null == M ? true : M.emoji, e.emoji) && (null == M ? true : M.status) === e.status,
        label: l ? null != (i = null == a ? true : a.title) ? i : "" : e.status,
        icon: c,
        setStatus: () => {
          l ? Q(e) : $(e)
        },
        clearStatus: () => (0, f.Sc)(true, D),
        isFavorited: o,
        onFavoriteClick: () => (0, f.tg)(l ? e : e.status, l ? null : e.emoji)
      }, "".concat(n, "-").concat(t))
    }, [L, $, Q, U, null == M ? true : M.emoji, null == M ? true : M.status, z, k, D]);
  return (0, r.jsxs)("div", {
    ref: B,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(T.menu, Z.container),
    children: [(0, r.jsx)("div", {
      role: "group",
      className: a()(T.groupLabel, Z.group),
      children: (0, r.jsxs)("form", {
        onSubmit: ee,
        className: a()(T.item, Z.input),
        children: [(0, r.jsx)(d.oil, {
          inputRef: w,
          value: H,
          onBlur: en,
          onFocus: er,
          onChange: e => V(e.substring(0, S.s0)),
          placeholder: I.intl.string(I.t.KPop4u),
          leading: {
            type: "emoji",
            button: (0, r.jsx)(x.A, {
              customStatusEmoji: F,
              setCustomStatusEmoji: G
            })
          },
          trailing: {
            icon: v.k,
            onClick: et,
            "aria-label": I.intl.string(I.t["5UAi5+"])
          }
        }), X && (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: Z.inputHint,
          color: "text-danger",
          children: I.intl.string(I.t["s/oq0d"])
        }), K && !X && (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: Z.inputHint,
          children: I.intl.format(I.t["VjkH/v"], {
            onSave: () => ee()
          })
        })]
      })
    }), (0, r.jsxs)(d.Ttm, {
      fade: true,
      role: "group",
      className: a()(T.groupLabel, Z.group, Z.scroller),
      children: [(0, r.jsx)(j.d, {
        guildId: o.guild_id
      }), W && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: Z.subtitle,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: I.intl.string(I.t.k8fFjo)
          }), (0, r.jsx)(d.r7p, {
            size: "xxs"
          })]
        }), k.map((e, t) => ei(e, t, "favorite"))]
      }), R.length > 0 && W && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          role: "separator",
          className: Z.separator
        }), (0, r.jsxs)("div", {
          className: Z.subtitle,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: I.intl.string(I.t["+9QSnp"])
          }), (0, r.jsx)(d.T39, {
            size: "xxs"
          })]
        })]
      }), R.map((e, t) => ei(e, t, "recent"))]
    })]
  })
}