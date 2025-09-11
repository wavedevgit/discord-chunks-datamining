/** Chunk was on 62987 **/
/** chunk id: 655018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => Z
}), require("./388685.js"), require("./539854.js"), require("./781311.js"), require("./472816.js"), require("./794429.js");
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
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js"),
  Chunk906605 = require("./906605.js"),
  Chunk574176 = require("./574176.js"),
  Chunk106301 = require("./106301.js"),
  Chunk833858 = require("./833858.js"),
  Chunk866071 = require("./866071.js"),
  Chunk17030 = require("./17030.jsx"),
  Chunk223135 = require("./223135.jsx"),
  Chunk295536 = require("./295536.jsx"),
  Chunk748855 = require("./748855.jsx"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk787267 = require("./787267.js"),
  Chunk334405 = require("./334405.js");

function Z(e) {
  var t, n;
  let {
    channel: l,
    setIsHangStatusInputFocused: o,
    setPopoutRef: Z
  } = e, T = i.useRef(null), N = (0, u.e7)([b.Z], () => b.Z.getCustomHangStatus()), A = i.useRef(b.Z.getRecentCustomStatuses()), {
    defaultStatusVariant: w
  } = g.n.useExperiment({
    guildId: l.guild_id,
    location: "HangStatusPicker"
  }), R = (0, y.V)(w), M = i.useRef(null), [D, L] = i.useState(null != (t = null == N ? true : N.status) ? t : ""), [k, U] = i.useState(null != (n = null == N ? true : N.emoji) ? n : null), B = (0, u.e7)([b.Z], () => b.Z.getCurrentHangStatus()), G = (0, u.e7)([h.ZP], () => h.ZP.getGuilds()), H = i.useRef([]);
  i.useEffect(() => {
    f.ZP.forEach(e => H.current.push(e))
  }, []);
  let F = null == D || null == k || "" === D.trim(),
    V = i.useMemo(() => [...Object.values(G).map(e => e.emojis.filter(e => (0, _.K)(e, l))).flat(), ...H.current], [G, l]);
  i.useEffect(() => {
    if (null != k) {
      var e;
      null == (e = T.current) || e.focus()
    }
  }, [k]), i.useEffect(() => {
    var e;
    D !== (null != (e = null == N ? true : N.status) ? e : "") && "" !== D.trim() ? o(true) : o(false)
  }, [D, null == N ? true : N.status, k, null == N ? true : N.emoji, o]), i.useEffect(() => {
    var e;
    (null == B || B === j.tN.CUSTOM) && (null == (e = T.current) || e.focus())
  }, [B]), i.useEffect(() => {
    null == Z || Z(null == M ? true : M.current)
  }, [M, Z]), i.useEffect(() => {
    (null == N ? true : N.emoji) != null && null != N.status ? (L(N.status), U(N.emoji)) : (L(""), U(null))
  }, [N]);
  let z = i.useCallback(e => {
      e !== B && (0, m.Zx)(e, true)
    }, [B]),
    W = i.useCallback(e => {
      let {
        emoji: t,
        status: n
      } = e;
      s()(t, null == N ? true : N.emoji) && n === (null == N ? true : N.status) || (0, m._s)(e.status, e.emoji, true)
    }, [null == N ? true : N.emoji, null == N ? true : N.status]),
    q = i.useCallback(e => {
      var t;
      null == (t = e.preventDefault) || t.call(e), F || W({
        status: D,
        emoji: k
      })
    }, [D, k, W, F]),
    Y = i.useCallback(() => {
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
      } while (null == e || (null == e ? true : e.name) == null || s()(null == N ? true : N.emoji, t));
      null != t && (null == e ? true : e.name) != null && (U(t), L(e.name))
    }, [V, null == N ? true : N.emoji]),
    K = i.useCallback(() => {
      o(false)
    }, [o]),
    X = i.useCallback(() => {
      var e;
      D !== (null != (e = null == N ? true : N.status) ? e : "") && "" !== D.trim() ? o(true) : o(false)
    }, [o, D, null == N ? true : N.status]);
  return (0, r.jsxs)("div", {
    ref: M,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(P.menu, I.container),
    children: [(0, r.jsxs)("div", {
      role: "group",
      className: a()(P.groupLabel, I.group),
      children: [(0, r.jsxs)("form", {
        onSubmit: q,
        className: a()(P.item, I.input),
        children: [(0, r.jsx)(d.oil, {
          inputRef: T,
          value: D,
          onBlur: K,
          onFocus: X,
          onChange: e => L(e.substring(0, j.s0)),
          placeholder: S.intl.string(S.t.KPop4u),
          leading: {
            type: "emoji",
            button: (0, r.jsx)(C.A, {
              customStatusEmoji: k,
              setCustomStatusEmoji: U
            })
          },
          trailing: {
            icon: d.$2U,
            onClick: Y,
            "aria-label": S.intl.string(S.t["5UAi5+"])
          }
        }), D.trim().length > 0 && (0, r.jsx)(d.hU, {
          onClick: q,
          disabled: F,
          icon: d.dz2,
          "aria-label": S.intl.string(S.t.UDg0qK)
        })]
      }), Object.entries(R).map(e => {
        let [t, n] = e, i = {
          type: E.IIU.HANG_STATUS,
          state: t
        };
        return (0, r.jsx)(O.L, {
          isSelected: B === t,
          label: n.title,
          icon: (0, r.jsx)(v.Z, {
            size: 20,
            hangStatusActivity: i,
            fallbackVariant: w,
            className: I.icon
          }),
          setStatus: () => z(t),
          clearStatus: () => (0, m.Sc)(false)
        }, n.title)
      })]
    }), A.current.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        role: "separator",
        className: I.separator
      }), (0, r.jsx)("div", {
        role: "group",
        className: a()(P.groupLabel, I.group),
        children: A.current.map((e, t) => (0, r.jsx)(O.L, {
          isSelected: s()(null == N ? true : N.emoji, e.emoji) && (null == N ? true : N.status) === e.status,
          label: e.status,
          icon: null != e.emoji && (0, r.jsx)(p.Z, {
            emoji: e.emoji,
            hideTooltip: true,
            className: I.icon
          }),
          setStatus: () => W(e),
          clearStatus: () => (0, m.Sc)(false)
        }, t))
      })]
    }), (0, r.jsx)(x.d, {
      guildId: l.guild_id
    })]
  })
}