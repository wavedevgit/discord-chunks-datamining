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
  Chunk339085 = require("./339085.js"),
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

function P(e) {
  var t, n;
  let {
    channel: l,
    onEditStatus: o,
    setPopoutRef: P
  } = e, Z = i.useRef(null), T = (0, u.e7)([g.Z], () => g.Z.getCustomHangStatus()), N = i.useRef(g.Z.getRecentCustomStatuses()), {
    defaultStatusVariant: A
  } = m.n.useExperiment({
    guildId: l.guild_id,
    location: "HangStatusPicker"
  }), w = (0, b.V)(A), R = i.useRef(null), [M, D] = i.useState(null != (t = null == T ? true : T.status) ? t : ""), [L, k] = i.useState(null != (n = null == T ? true : T.emoji) ? n : null), U = (0, u.e7)([g.Z], () => g.Z.getCurrentHangStatus()), B = (0, u.e7)([h.ZP], () => h.ZP.emojiFrecencyWithoutFetchingLatest.frequently), G = null == M || null == L || "" === M.trim(), H = i.useMemo(() => B.filter(e => (0, y.K)(e, l)), [B, l]);
  i.useEffect(() => {
    if (null != L) {
      var e;
      null == (e = Z.current) || e.focus()
    }
  }, [L]), i.useEffect(() => {
    var e;
    M === (null != (e = null == T ? true : T.status) ? e : "") && s()(L, null == T ? true : T.emoji) ? o(false) : o(true)
  }, [M, null == T ? true : T.status, L, null == T ? true : T.emoji, o]), i.useEffect(() => {
    var e;
    (null == U || U === O.tN.CUSTOM) && (null == (e = Z.current) || e.focus())
  }, [U]), i.useEffect(() => {
    null == P || P(null == R ? true : R.current)
  }, [R, P]), i.useEffect(() => {
    (null == T ? true : T.emoji) != null && null != T.status ? (D(T.status), k(T.emoji)) : (D(""), k(null))
  }, [T]);
  let F = i.useCallback(e => {
      e !== U && (0, f.Zx)(e, true)
    }, [U]),
    V = i.useCallback(e => {
      let {
        emoji: t,
        status: n
      } = e;
      s()(t, null == T ? true : T.emoji) && n === (null == T ? true : T.status) || (0, f._s)(e.status, e.emoji, true)
    }, [null == T ? true : T.emoji, null == T ? true : T.status]),
    z = i.useCallback(e => {
      var t;
      null == (t = e.preventDefault) || t.call(e), G || V({
        status: M,
        emoji: L
      })
    }, [M, L, V, G]),
    W = i.useCallback(() => {
      let e = null,
        t = null;
      do {
        var n;
        if (0 === H.length || (t = (null == (e = (0, c.sample)(H)) ? true : e.id) != null ? {
            id: e.id,
            name: e.name,
            animated: e.animated
          } : {
            id: null,
            name: null != (n = null == e ? true : e.optionallyDiverseSequence) ? n : "",
            animated: false
          }, 1 === H.length)) break
      } while (null == e || (null == e ? true : e.name) == null || s()(null == T ? true : T.emoji, t));
      null != t && (null == e ? true : e.name) != null && (k(t), D(e.name))
    }, [H, null == T ? true : T.emoji]);
  return (0, r.jsxs)("div", {
    ref: R,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(I.menu, S.container),
    children: [(0, r.jsxs)("div", {
      role: "group",
      className: a()(I.groupLabel, S.group),
      children: [(0, r.jsxs)("form", {
        onSubmit: z,
        className: a()(I.item, S.input),
        children: [(0, r.jsx)(d.oil, {
          inputRef: Z,
          value: M,
          onChange: e => D(e.substring(0, O.s0)),
          placeholder: E.intl.string(E.t.KPop4u),
          leading: {
            type: "emoji",
            button: (0, r.jsx)(_.A, {
              customStatusEmoji: L,
              setCustomStatusEmoji: k
            })
          },
          trailing: {
            icon: d.$2U,
            onClick: W,
            "aria-label": E.intl.string(E.t["5UAi5+"])
          }
        }), M.trim().length > 0 && (0, r.jsx)(d.hU, {
          onClick: z,
          disabled: G,
          icon: d.dz2,
          "aria-label": E.intl.string(E.t.UDg0qK)
        })]
      }), Object.entries(w).map(e => {
        let [t, n] = e, i = {
          type: j.IIU.HANG_STATUS,
          state: t
        };
        return (0, r.jsx)(x.L, {
          isSelected: U === t,
          label: n.title,
          icon: (0, r.jsx)(C.Z, {
            size: 24,
            hangStatusActivity: i,
            fallbackVariant: A
          }),
          setStatus: () => F(t),
          clearStatus: () => (0, f.Sc)(false)
        }, n.title)
      })]
    }), N.current.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        role: "separator",
        className: S.separator
      }), (0, r.jsx)("div", {
        role: "group",
        className: a()(I.groupLabel, S.group),
        children: N.current.map((e, t) => (0, r.jsx)(x.L, {
          isSelected: s()(null == T ? true : T.emoji, e.emoji) && (null == T ? true : T.status) === e.status,
          label: e.status,
          icon: null != e.emoji && (0, r.jsx)(p.Z, {
            emoji: e.emoji,
            hideTooltip: true,
            className: S.icon
          }),
          setStatus: () => V(e),
          clearStatus: () => (0, f.Sc)(false)
        }, t))
      })]
    }), (0, r.jsx)(v.d, {
      guildId: l.guild_id
    })]
  })
}