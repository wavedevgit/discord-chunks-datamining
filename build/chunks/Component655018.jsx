/** Chunk was on 21616 **/
/** chunk id: 655018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => I
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
  Chunk906605 = require("./906605.js"),
  Chunk574176 = require("./574176.js"),
  Chunk106301 = require("./106301.js"),
  Chunk833858 = require("./833858.js"),
  Chunk54332 = require("./54332.js"),
  Chunk298905 = require("./298905.js"),
  Chunk17030 = require("./17030.jsx"),
  Chunk223135 = require("./223135.jsx"),
  Chunk295536 = require("./295536.jsx"),
  Chunk748855 = require("./748855.jsx"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk787267 = require("./787267.js"),
  Chunk334405 = require("./334405.js");

function I(e) {
  var t, n, l;
  let {
    channel: o,
    setIsHangStatusInputFocused: I,
    setPopoutRef: Z
  } = e, T = i.useRef(null), N = (0, u.e7)([m.Z], () => m.Z.getCustomHangStatus()), A = (0, u.e7)([m.Z], () => m.Z.getRecentStatuses()), w = (0, u.e7)([m.Z], () => m.Z.getFavoritedStatuses()), {
    defaultStatusVariant: M
  } = f.n.useExperiment({
    guildId: o.guild_id,
    location: "HangStatusPicker"
  }), R = (0, g.V)(M), k = i.useRef(null), [L, D] = i.useState(null != (n = null == N ? true : N.status) ? n : ""), [U, B] = i.useState(null != (l = null == N ? true : N.emoji) ? l : null), F = (0, u.e7)([m.Z], () => m.Z.getCurrentHangStatus()), V = w.length > 0, H = null == L || "" === L.trim(), G = (0, y.Z)(o), z = L.trim().length > 0 && L.trim() !== (null == N || null == (t = N.status) ? true : t.trim()) || null != U && !s()(U, null == N ? true : N.emoji), [W, q] = i.useState(false);
  i.useEffect(() => {
    L.trim().length > 0 && W && q(false), null == U && W && q(false)
  }, [L, U, W]), i.useEffect(() => {
    if (null != U) {
      var e;
      null == (e = T.current) || e.focus()
    }
  }, [U]), i.useEffect(() => {
    var e;
    L !== (null != (e = null == N ? true : N.status) ? e : "") && "" !== L.trim() ? I(true) : I(false)
  }, [L, null == N ? true : N.status, U, null == N ? true : N.emoji, I]), i.useEffect(() => {
    var e;
    (null == F || F === O.tN.CUSTOM) && (null == (e = T.current) || e.focus())
  }, [F]), i.useEffect(() => {
    null == Z || Z(null == k ? true : k.current)
  }, [k, Z]);
  let Y = i.useCallback(e => {
      e !== F && ((0, h.Zx)(e, true), null != U && B(null), "" !== L.trim() && D(""))
    }, [F, U, L]),
    K = i.useCallback((e, t) => {
      let {
        emoji: n,
        status: r
      } = e;
      s()(n, null == N ? true : N.emoji) && r === (null == N ? true : N.status) || ((0, h._s)(e.status, e.emoji, true), B(t ? null : e.emoji), D(t ? "" : e.status))
    }, [null == N ? true : N.emoji, null == N ? true : N.status]),
    X = i.useCallback(e => {
      var t;
      null == e || null == (t = e.preventDefault) || t.call(e), null != U && 0 === L.trim().length && q(true), H || K({
        status: L,
        emoji: null != U ? U : {
          id: null,
          name: "\uD83D\uDCAD",
          animated: false
        }
      }, true)
    }, [L, U, K, H]),
    J = i.useCallback(() => {
      let e = null,
        t = null;
      do {
        var n;
        if (0 === G.length || (t = (null == (e = (0, c.sample)(G)) ? true : e.id) != null ? {
            id: e.id,
            name: e.name,
            animated: e.animated
          } : {
            id: null,
            name: null != (n = null == e ? true : e.optionallyDiverseSequence) ? n : "",
            animated: false
          }, 1 === G.length)) break
      } while (null == e || (null == e ? true : e.name) == null || s()(U, t));
      null != t && (null == e ? true : e.name) != null && (B(t), D(e.name))
    }, [G, U]),
    Q = i.useCallback(() => {
      I(false)
    }, [I]),
    $ = i.useCallback(() => {
      var e;
      L !== (null != (e = null == N ? true : N.status) ? e : "") && "" !== L.trim() ? I(true) : I(false)
    }, [I, L, null == N ? true : N.status]),
    ee = i.useCallback((e, t, n) => {
      var i;
      let l = (0, b.Z)(e),
        a = l ? R[e] : null,
        o = w.some(t => (0, b.Z)(t) && l && e === t || !(0, b.Z)(t) && !l && t.status === e.status && s()(t.emoji, e.emoji)),
        c = l ? (0, r.jsx)(_.Z, {
          size: 20,
          hangStatusActivity: {
            type: j.IIU.HANG_STATUS,
            state: e
          },
          fallbackVariant: M,
          className: S.icon
        }) : null != e.emoji && (0, r.jsx)(p.Z, {
          emoji: e.emoji,
          hideTooltip: true,
          className: S.icon
        });
      return (0, r.jsx)(x.L, {
        isSelected: l ? F === e : s()(null == N ? true : N.emoji, e.emoji) && (null == N ? true : N.status) === e.status,
        label: l ? null != (i = null == a ? true : a.title) ? i : "" : e.status,
        icon: c,
        setStatus: () => {
          l ? Y(e) : K(e)
        },
        clearStatus: () => (0, h.Sc)(true),
        isFavorited: o,
        onFavoriteClick: () => (0, h.tg)(l ? e : e.status, l ? null : e.emoji)
      }, "".concat(n, "-").concat(t))
    }, [M, K, Y, R, null == N ? true : N.emoji, null == N ? true : N.status, F, w]);
  return (0, r.jsxs)("div", {
    ref: k,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(P.menu, S.container),
    children: [(0, r.jsx)("div", {
      role: "group",
      className: a()(P.groupLabel, S.group),
      children: (0, r.jsxs)("form", {
        onSubmit: X,
        className: a()(P.item, S.input),
        children: [(0, r.jsx)(d.oil, {
          inputRef: T,
          value: L,
          onBlur: Q,
          onFocus: $,
          onChange: e => D(e.substring(0, O.s0)),
          placeholder: E.intl.string(E.t.KPop4u),
          leading: {
            type: "emoji",
            button: (0, r.jsx)(C.A, {
              customStatusEmoji: U,
              setCustomStatusEmoji: B
            })
          },
          trailing: {
            icon: d.$2U,
            onClick: J,
            "aria-label": E.intl.string(E.t["5UAi5+"])
          }
        }), W && (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: S.inputHint,
          color: "text-danger",
          children: E.intl.string(E.t["s/oq0d"])
        }), z && (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: S.inputHint,
          children: E.intl.format(E.t["VjkH/v"], {
            onSave: () => X()
          })
        })]
      })
    }), (0, r.jsxs)(d.Ttm, {
      fade: true,
      role: "group",
      className: a()(P.groupLabel, S.group, S.scroller),
      children: [(0, r.jsx)(v.d, {
        guildId: o.guild_id
      }), V && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: S.subtitle,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: E.intl.string(E.t.k8fFjo)
          }), (0, r.jsx)(d.r7p, {
            size: "xxs"
          })]
        }), w.map((e, t) => ee(e, t, "favorite"))]
      }), A.length > 0 && V && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          role: "separator",
          className: S.separator
        }), (0, r.jsxs)("div", {
          className: S.subtitle,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: E.intl.string(E.t["+9QSnp"])
          }), (0, r.jsx)(d.T39, {
            size: "xxs"
          })]
        })]
      }), A.map((e, t) => ee(e, t, "recent"))]
    })]
  })
}