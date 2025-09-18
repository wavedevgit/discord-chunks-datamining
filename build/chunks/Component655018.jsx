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
  var t, n;
  let {
    channel: l,
    setIsHangStatusInputFocused: o,
    setPopoutRef: P
  } = e, Z = i.useRef(null), T = (0, u.e7)([m.Z], () => m.Z.getCustomHangStatus()), N = (0, u.e7)([m.Z], () => m.Z.getRecentStatuses()), A = (0, u.e7)([m.Z], () => m.Z.getFavoritedStatuses()), {
    defaultStatusVariant: w
  } = f.n.useExperiment({
    guildId: l.guild_id,
    location: "HangStatusPicker"
  }), R = (0, g.V)(w), M = i.useRef(null), [D, k] = i.useState(null != (t = null == T ? true : T.status) ? t : ""), [L, U] = i.useState(null != (n = null == T ? true : T.emoji) ? n : null), B = (0, u.e7)([m.Z], () => m.Z.getCurrentHangStatus()), G = A.length > 0, H = null == D || "" === D.trim(), F = (0, y.Z)(l);
  i.useEffect(() => {
    if (null != L) {
      var e;
      null == (e = Z.current) || e.focus()
    }
  }, [L]), i.useEffect(() => {
    var e;
    D !== (null != (e = null == T ? true : T.status) ? e : "") && "" !== D.trim() ? o(true) : o(false)
  }, [D, null == T ? true : T.status, L, null == T ? true : T.emoji, o]), i.useEffect(() => {
    var e;
    (null == B || B === O.tN.CUSTOM) && (null == (e = Z.current) || e.focus())
  }, [B]), i.useEffect(() => {
    null == P || P(null == M ? true : M.current)
  }, [M, P]), i.useEffect(() => {
    (null == T ? true : T.emoji) != null && null != T.status ? (k(T.status), U(T.emoji)) : (k(""), U(null))
  }, [T]);
  let V = i.useCallback(e => {
      e !== B && (0, h.Zx)(e, true)
    }, [B]),
    z = i.useCallback(e => {
      let {
        emoji: t,
        status: n
      } = e;
      s()(t, null == T ? true : T.emoji) && n === (null == T ? true : T.status) || (0, h._s)(e.status, e.emoji, true)
    }, [null == T ? true : T.emoji, null == T ? true : T.status]),
    W = i.useCallback(e => {
      var t;
      null == (t = e.preventDefault) || t.call(e), H || z({
        status: D,
        emoji: null != L ? L : {
          id: null,
          name: "\uD83D\uDCAD",
          animated: false
        }
      })
    }, [D, L, z, H]),
    q = i.useCallback(() => {
      let e = null,
        t = null;
      do {
        var n;
        if (0 === F.length || (t = (null == (e = (0, c.sample)(F)) ? true : e.id) != null ? {
            id: e.id,
            name: e.name,
            animated: e.animated
          } : {
            id: null,
            name: null != (n = null == e ? true : e.optionallyDiverseSequence) ? n : "",
            animated: false
          }, 1 === F.length)) break
      } while (null == e || (null == e ? true : e.name) == null || s()(L, t));
      null != t && (null == e ? true : e.name) != null && (U(t), k(e.name))
    }, [F, L]),
    Y = i.useCallback(() => {
      o(false)
    }, [o]),
    K = i.useCallback(() => {
      var e;
      D !== (null != (e = null == T ? true : T.status) ? e : "") && "" !== D.trim() ? o(true) : o(false)
    }, [o, D, null == T ? true : T.status]),
    X = i.useCallback((e, t, n) => {
      var i;
      let l = (0, b.Z)(e),
        a = l ? R[e] : null,
        o = A.some(t => (0, b.Z)(t) && l && e === t || !(0, b.Z)(t) && !l && t.status === e.status && s()(t.emoji, e.emoji)),
        c = l ? (0, r.jsx)(C.Z, {
          size: 20,
          hangStatusActivity: {
            type: j.IIU.HANG_STATUS,
            state: e
          },
          fallbackVariant: w,
          className: S.icon
        }) : null != e.emoji && (0, r.jsx)(p.Z, {
          emoji: e.emoji,
          hideTooltip: true,
          className: S.icon
        });
      return (0, r.jsx)(x.L, {
        isSelected: l ? B === e : s()(null == T ? true : T.emoji, e.emoji) && (null == T ? true : T.status) === e.status,
        label: l ? null != (i = null == a ? true : a.title) ? i : "" : e.status,
        icon: c,
        setStatus: () => {
          l ? V(e) : z(e)
        },
        clearStatus: () => (0, h.Sc)(false),
        isFavorited: o,
        onFavoriteClick: () => (0, h.tg)(l ? e : e.status, l ? null : e.emoji)
      }, "".concat(n, "-").concat(t))
    }, [w, z, V, R, null == T ? true : T.emoji, null == T ? true : T.status, B, A]);
  return (0, r.jsxs)("div", {
    ref: M,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(I.menu, S.container),
    children: [(0, r.jsxs)("div", {
      role: "group",
      className: a()(I.groupLabel, S.group),
      children: [(0, r.jsxs)("form", {
        onSubmit: W,
        className: a()(I.item, S.input),
        children: [(0, r.jsx)(d.oil, {
          inputRef: Z,
          value: D,
          onBlur: Y,
          onFocus: K,
          onChange: e => k(e.substring(0, O.s0)),
          placeholder: E.intl.string(E.t.KPop4u),
          leading: {
            type: "emoji",
            button: (0, r.jsx)(_.A, {
              customStatusEmoji: L,
              setCustomStatusEmoji: U
            })
          },
          trailing: {
            icon: d.$2U,
            onClick: q,
            "aria-label": E.intl.string(E.t["5UAi5+"])
          }
        }), D.trim().length > 0 && (0, r.jsx)(d.hU, {
          onClick: W,
          disabled: H,
          icon: d.dz2,
          "aria-label": E.intl.string(E.t.UDg0qK)
        })]
      }), G && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: S.subtitle,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: E.intl.string(E.t.k8fFjo)
          }), (0, r.jsx)(d.r7p, {
            size: "xxs"
          })]
        }), A.map((e, t) => X(e, t, "favorite"))]
      }), N.length > 0 && G && (0, r.jsxs)(r.Fragment, {
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
      }), N.map((e, t) => X(e, t, "recent"))]
    }), (0, r.jsx)(v.d, {
      guildId: l.guild_id
    })]
  })
}