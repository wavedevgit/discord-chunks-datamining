/** Chunk was on 62987 **/
/** chunk id: 655018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => P
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

function P(e) {
  var t, n, l;
  let {
    channel: o,
    setIsHangStatusInputFocused: P,
    setPopoutRef: Z
  } = e, T = i.useRef(null), N = (0, u.e7)([m.Z], () => m.Z.getCustomHangStatus()), A = (0, u.e7)([m.Z], () => m.Z.getRecentStatuses()), w = (0, u.e7)([m.Z], () => m.Z.getFavoritedStatuses()), {
    defaultStatusVariant: R
  } = f.n.useExperiment({
    guildId: o.guild_id,
    location: "HangStatusPicker"
  }), M = (0, g.V)(R), D = i.useRef(null), [k, L] = i.useState(null != (n = null == N ? true : N.status) ? n : ""), [U, B] = i.useState(null != (l = null == N ? true : N.emoji) ? l : null), G = (0, u.e7)([m.Z], () => m.Z.getCurrentHangStatus()), H = w.length > 0, F = null == k || "" === k.trim(), V = (0, y.Z)(o), z = k.trim().length > 0 && k.trim() !== (null == N || null == (t = N.status) ? true : t.trim()), [W, q] = i.useState(false);
  i.useEffect(() => {
    k.trim().length > 0 && W && q(false), null == U && W && q(false)
  }, [k, U, W]), i.useEffect(() => {
    if (null != U) {
      var e;
      null == (e = T.current) || e.focus()
    }
  }, [U]), i.useEffect(() => {
    var e;
    k !== (null != (e = null == N ? true : N.status) ? e : "") && "" !== k.trim() ? P(true) : P(false)
  }, [k, null == N ? true : N.status, U, null == N ? true : N.emoji, P]), i.useEffect(() => {
    var e;
    (null == G || G === O.tN.CUSTOM) && (null == (e = T.current) || e.focus())
  }, [G]), i.useEffect(() => {
    null == Z || Z(null == D ? true : D.current)
  }, [D, Z]), i.useEffect(() => {
    (null == N ? true : N.emoji) != null && null != N.status ? (L(N.status), B(N.emoji)) : (L(""), B(null))
  }, [N]);
  let Y = i.useCallback(e => {
      e !== G && (0, h.Zx)(e, true)
    }, [G]),
    K = i.useCallback(e => {
      let {
        emoji: t,
        status: n
      } = e;
      s()(t, null == N ? true : N.emoji) && n === (null == N ? true : N.status) || (0, h._s)(e.status, e.emoji, true)
    }, [null == N ? true : N.emoji, null == N ? true : N.status]),
    X = i.useCallback(e => {
      var t;
      null == e || null == (t = e.preventDefault) || t.call(e), null != U && 0 === k.trim().length && q(true), F || K({
        status: k,
        emoji: null != U ? U : {
          id: null,
          name: "\uD83D\uDCAD",
          animated: false
        }
      })
    }, [k, U, K, F]),
    Q = i.useCallback(() => {
      let e = null,
        t = null;
      do {
        var n;
        if (0 === V.length || (t = (null == (e = (0, c.sample)(V)) ? true : e.id) != null ? {
            id: e.id,
            name: e.name,
            animated: e.animated
          } : {
            id: null,
            name: null != (n = null == e ? true : e.optionallyDiverseSequence) ? n : "",
            animated: false
          }, 1 === V.length)) break
      } while (null == e || (null == e ? true : e.name) == null || s()(U, t));
      null != t && (null == e ? true : e.name) != null && (B(t), L(e.name))
    }, [V, U]),
    J = i.useCallback(() => {
      P(false)
    }, [P]),
    $ = i.useCallback(() => {
      var e;
      k !== (null != (e = null == N ? true : N.status) ? e : "") && "" !== k.trim() ? P(true) : P(false)
    }, [P, k, null == N ? true : N.status]),
    ee = i.useCallback((e, t, n) => {
      var i;
      let l = (0, b.Z)(e),
        a = l ? M[e] : null,
        o = w.some(t => (0, b.Z)(t) && l && e === t || !(0, b.Z)(t) && !l && t.status === e.status && s()(t.emoji, e.emoji)),
        c = l ? (0, r.jsx)(C.Z, {
          size: 20,
          hangStatusActivity: {
            type: j.IIU.HANG_STATUS,
            state: e
          },
          fallbackVariant: R,
          className: S.icon
        }) : null != e.emoji && (0, r.jsx)(p.Z, {
          emoji: e.emoji,
          hideTooltip: true,
          className: S.icon
        });
      return (0, r.jsx)(x.L, {
        isSelected: l ? G === e : s()(null == N ? true : N.emoji, e.emoji) && (null == N ? true : N.status) === e.status,
        label: l ? null != (i = null == a ? true : a.title) ? i : "" : e.status,
        icon: c,
        setStatus: () => {
          l ? Y(e) : K(e)
        },
        clearStatus: () => (0, h.Sc)(false),
        isFavorited: o,
        onFavoriteClick: () => (0, h.tg)(l ? e : e.status, l ? null : e.emoji)
      }, "".concat(n, "-").concat(t))
    }, [R, K, Y, M, null == N ? true : N.emoji, null == N ? true : N.status, G, w]);
  return (0, r.jsxs)("div", {
    ref: D,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(I.menu, S.container),
    children: [(0, r.jsxs)("div", {
      role: "group",
      className: a()(I.groupLabel, S.group),
      children: [(0, r.jsxs)("form", {
        onSubmit: X,
        className: a()(I.item, S.input),
        children: [(0, r.jsx)(d.oil, {
          inputRef: T,
          value: k,
          onBlur: J,
          onFocus: $,
          onChange: e => L(e.substring(0, O.s0)),
          placeholder: E.intl.string(E.t.KPop4u),
          leading: {
            type: "emoji",
            button: (0, r.jsx)(_.A, {
              customStatusEmoji: U,
              setCustomStatusEmoji: B
            })
          },
          trailing: {
            icon: d.$2U,
            onClick: Q,
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
      }), H && (0, r.jsxs)(r.Fragment, {
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
      }), A.length > 0 && H && (0, r.jsxs)(r.Fragment, {
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
    }), (0, r.jsx)(v.d, {
      guildId: o.guild_id
    })]
  })
}