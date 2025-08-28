/** Chunk was on 68197 **/
/** chunk id: 655018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => S
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
  Chunk106301 = require("./106301.js"),
  Chunk833858 = require("./833858.js"),
  Chunk866071 = require("./866071.js"),
  Chunk17030 = require("./17030.jsx"),
  Chunk295536 = require("./295536.jsx"),
  Chunk748855 = require("./748855.jsx"),
  Chunk505905 = require("./505905.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk787267 = require("./787267.js"),
  Chunk334405 = require("./334405.js");

function S(e) {
  var t, n;
  let {
    channel: l,
    setPopoutRef: o
  } = e, S = i.useRef(null), I = (0, u.e7)([m.Z], () => m.Z.getCustomHangStatus()), P = i.useRef(m.Z.getRecentCustomStatuses()), Z = (0, g.V)(), T = i.useRef(null), [N, A] = i.useState(null != (t = null == I ? true : I.status) ? t : ""), [w, R] = i.useState(null != (n = null == I ? true : I.emoji) ? n : null), M = (0, u.e7)([m.Z], () => m.Z.getCurrentHangStatus()), D = (0, u.e7)([h.ZP], () => h.ZP.emojiFrecencyWithoutFetchingLatest.frequently), L = i.useMemo(() => D.filter(e => (0, b.K)(e, l)), [D, l]);
  i.useEffect(() => {
    var e;
    (null == M || M === x.tN.CUSTOM) && (null == (e = S.current) || e.focus())
  }, [M]), i.useEffect(() => {
    null == o || o(null == T ? true : T.current)
  }, [T, o]), i.useEffect(() => {
    (null == I ? true : I.emoji) != null && null != I.status ? (A(I.status), R(I.emoji)) : (A(""), R(null))
  }, [I]);
  let k = i.useCallback(e => {
      e !== M && (0, f.Zx)(e, true)
    }, [M]),
    U = i.useCallback(e => {
      let {
        emoji: t,
        status: n
      } = e;
      s()(t, null == I ? true : I.emoji) && n === (null == I ? true : I.status) || (0, f._s)(e.status, e.emoji, true)
    }, [null == I ? true : I.emoji, null == I ? true : I.status]),
    B = i.useCallback(e => {
      e.preventDefault(), null != N && null != w && "" !== N.trim() && U({
        status: N,
        emoji: w
      })
    }, [N, w, U]),
    G = i.useCallback(() => {
      let e = null,
        t = null;
      do {
        var n;
        if (0 === L.length || (t = (null == (e = (0, c.sample)(L)) ? true : e.id) != null ? {
            id: e.id,
            name: e.name,
            animated: e.animated
          } : {
            id: null,
            name: null != (n = null == e ? true : e.optionallyDiverseSequence) ? n : "",
            animated: false
          }, 1 === L.length)) break
      } while (null == e || (null == e ? true : e.name) == null || s()(null == I ? true : I.emoji, t));
      null != t && (null == e ? true : e.name) != null && U({
        status: e.name,
        emoji: t
      })
    }, [L, U, null == I ? true : I.emoji]);
  return (0, r.jsxs)("div", {
    ref: T,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(E.menu, j.container),
    children: [(0, r.jsxs)("div", {
      role: "group",
      className: a()(E.groupLabel, j.group),
      children: [(0, r.jsx)("form", {
        onSubmit: B,
        className: E.item,
        children: (0, r.jsx)(d.oil, {
          inputRef: S,
          value: N,
          onChange: e => A(e.substring(0, v.s)),
          placeholder: O.intl.string(O.t.KPop4u),
          leading: {
            type: "emoji",
            button: (0, r.jsx)(y.A, {
              customStatusEmoji: w,
              setCustomStatusEmoji: R
            })
          },
          trailing: {
            icon: d.$2U,
            onClick: G,
            "aria-label": O.intl.string(O.t["5UAi5+"])
          }
        })
      }), Object.entries(Z).map(e => {
        let [t, n] = e;
        return (0, r.jsx)(C.L, {
          isSelected: M === t,
          label: n.title,
          icon: (0, r.jsx)("img", {
            src: n.icon,
            alt: ""
          }),
          setStatus: () => k(t),
          clearStatus: () => (0, f.Sc)(false)
        }, n.title)
      })]
    }), P.current.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        role: "separator",
        className: j.separator
      }), (0, r.jsx)("div", {
        role: "group",
        className: a()(E.groupLabel, j.group),
        children: P.current.map((e, t) => (0, r.jsx)(C.L, {
          isSelected: s()(null == I ? true : I.emoji, e.emoji) && (null == I ? true : I.status) === e.status,
          label: e.status,
          icon: null != e.emoji && (0, r.jsx)(p.Z, {
            emoji: e.emoji,
            hideTooltip: true,
            className: j.icon
          }),
          setStatus: () => U(e),
          clearStatus: () => (0, f.Sc)(false)
        }, t))
      })]
    }), (0, r.jsx)(_.d, {
      guildId: l.guild_id
    })]
  })
}