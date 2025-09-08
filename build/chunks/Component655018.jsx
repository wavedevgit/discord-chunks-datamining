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
    setPopoutRef: o
  } = e, P = i.useRef(null), Z = (0, u.e7)([g.Z], () => g.Z.getCustomHangStatus()), T = i.useRef(g.Z.getRecentCustomStatuses()), {
    defaultStatusVariant: N
  } = m.n.useExperiment({
    guildId: l.guild_id,
    location: "HangStatusPicker"
  }), A = (0, b.V)(N), w = i.useRef(null), [R, M] = i.useState(null != (t = null == Z ? true : Z.status) ? t : ""), [D, L] = i.useState(null != (n = null == Z ? true : Z.emoji) ? n : null), k = (0, u.e7)([g.Z], () => g.Z.getCurrentHangStatus()), U = (0, u.e7)([h.ZP], () => h.ZP.emojiFrecencyWithoutFetchingLatest.frequently), B = null == R || null == D || "" === R.trim(), G = i.useMemo(() => U.filter(e => (0, y.K)(e, l)), [U, l]);
  i.useEffect(() => {
    if (null != D) {
      var e;
      null == (e = P.current) || e.focus()
    }
  }, [D]), i.useEffect(() => {
    var e;
    (null == k || k === O.tN.CUSTOM) && (null == (e = P.current) || e.focus())
  }, [k]), i.useEffect(() => {
    null == o || o(null == w ? true : w.current)
  }, [w, o]), i.useEffect(() => {
    (null == Z ? true : Z.emoji) != null && null != Z.status ? (M(Z.status), L(Z.emoji)) : (M(""), L(null))
  }, [Z]);
  let H = i.useCallback(e => {
      e !== k && (0, f.Zx)(e, true)
    }, [k]),
    F = i.useCallback(e => {
      let {
        emoji: t,
        status: n
      } = e;
      s()(t, null == Z ? true : Z.emoji) && n === (null == Z ? true : Z.status) || (0, f._s)(e.status, e.emoji, true)
    }, [null == Z ? true : Z.emoji, null == Z ? true : Z.status]),
    V = i.useCallback(e => {
      var t;
      null == (t = e.preventDefault) || t.call(e), B || F({
        status: R,
        emoji: D
      })
    }, [R, D, F, B]),
    z = i.useCallback(() => {
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
      } while (null == e || (null == e ? true : e.name) == null || s()(null == Z ? true : Z.emoji, t));
      null != t && (null == e ? true : e.name) != null && (L(t), M(e.name))
    }, [G, null == Z ? true : Z.emoji]);
  return (0, r.jsxs)("div", {
    ref: w,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(I.menu, S.container),
    children: [(0, r.jsxs)("div", {
      role: "group",
      className: a()(I.groupLabel, S.group),
      children: [(0, r.jsxs)("form", {
        onSubmit: V,
        className: a()(I.item, S.input),
        children: [(0, r.jsx)(d.oil, {
          inputRef: P,
          value: R,
          onChange: e => M(e.substring(0, O.s0)),
          placeholder: E.intl.string(E.t.KPop4u),
          leading: {
            type: "emoji",
            button: (0, r.jsx)(_.A, {
              customStatusEmoji: D,
              setCustomStatusEmoji: L
            })
          },
          trailing: {
            icon: d.$2U,
            onClick: z,
            "aria-label": E.intl.string(E.t["5UAi5+"])
          }
        }), R.trim().length > 0 && (0, r.jsx)(d.hU, {
          onClick: V,
          disabled: B,
          icon: d.dz2,
          "aria-label": E.intl.string(E.t.UDg0qK)
        })]
      }), Object.entries(A).map(e => {
        let [t, n] = e, i = {
          type: j.IIU.HANG_STATUS,
          state: t
        };
        return (0, r.jsx)(x.L, {
          isSelected: k === t,
          label: n.title,
          icon: (0, r.jsx)(C.Z, {
            size: 24,
            hangStatusActivity: i,
            fallbackVariant: N
          }),
          setStatus: () => H(t),
          clearStatus: () => (0, f.Sc)(false)
        }, n.title)
      })]
    }), T.current.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        role: "separator",
        className: S.separator
      }), (0, r.jsx)("div", {
        role: "group",
        className: a()(I.groupLabel, S.group),
        children: T.current.map((e, t) => (0, r.jsx)(x.L, {
          isSelected: s()(null == Z ? true : Z.emoji, e.emoji) && (null == Z ? true : Z.status) === e.status,
          label: e.status,
          icon: null != e.emoji && (0, r.jsx)(p.Z, {
            emoji: e.emoji,
            hideTooltip: true,
            className: S.icon
          }),
          setStatus: () => F(e),
          clearStatus: () => (0, f.Sc)(false)
        }, t))
      })]
    }), (0, r.jsx)(v.d, {
      guildId: l.guild_id
    })]
  })
}