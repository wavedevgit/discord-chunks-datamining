/** Chunk was on 5665 **/
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
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk584973 = require("./584973.jsx"),
  Chunk339085 = require("./339085.js"),
  Chunk906605 = require("./906605.js"),
  Chunk106301 = require("./106301.js"),
  Chunk833858 = require("./833858.js"),
  Chunk866071 = require("./866071.js"),
  Chunk17030 = require("./17030.jsx"),
  Chunk505905 = require("./505905.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk787267 = require("./787267.js"),
  Chunk334405 = require("./334405.js");

function E(e) {
  let {
    label: t,
    icon: n,
    isSelected: l = false,
    setStatus: o,
    clearStatus: s
  } = e, [c, u] = i.useState(false), h = c && l, f = h ? x.intl.string(x.t.S90Fub) : t, m = i.useCallback(() => {
    h ? s() : o()
  }, [h, s, o]);
  return (0, r.jsxs)(p.P3F, {
    onClick: m,
    onMouseEnter: () => {
      u(true)
    },
    onMouseLeave: () => {
      u(false)
    },
    className: a()(j.item, j.labelContainer, O.item, {
      [O.isSelected]: l
    }),
    children: [n, (0, r.jsx)(p.Text, {
      color: h ? "text-danger" : "text-secondary",
      variant: "text-md/medium",
      className: O.itemText,
      children: f
    }), l && (0, r.jsx)(p.k$p, {
      className: O.closeIcon,
      color: h ? d.Z.colors.TEXT_DANGER : true
    })]
  })
}

function S(e) {
  var t, n;
  let {
    channel: l,
    setPopoutRef: o
  } = e, d = i.useRef(null), S = (0, u.e7)([g.Z], () => g.Z.getCustomHangStatus()), I = i.useRef(g.Z.getRecentCustomStatuses()), P = (0, b.V)(), Z = i.useRef(null), [T, N] = i.useState(null != (t = null == S ? true : S.status) ? t : ""), [A, w] = i.useState(null != (n = null == S ? true : S.emoji) ? n : null), R = (0, u.e7)([g.Z], () => g.Z.getCurrentHangStatus()), M = (0, u.e7)([f.ZP], () => f.ZP.emojiFrecencyWithoutFetchingLatest.frequently), D = i.useMemo(() => M.filter(e => (0, y.K)(e, l)), [M, l]);
  i.useEffect(() => {
    var e;
    (null == R || R === v.tN.CUSTOM) && (null == (e = d.current) || e.focus())
  }, [R]), i.useEffect(() => {
    null == o || o(null == Z ? true : Z.current)
  }, [Z, o]), i.useEffect(() => {
    (null == S ? true : S.emoji) != null && null != S.status ? (N(S.status), w(S.emoji)) : (N(""), w(null))
  }, [S]);
  let L = i.useCallback(e => {
      e !== R && (0, m.Zx)(e, true)
    }, [R]),
    k = i.useCallback(e => {
      let {
        emoji: t,
        status: n
      } = e;
      s()(t, null == S ? true : S.emoji) && n === (null == S ? true : S.status) || (0, m._s)(e.status, e.emoji, true)
    }, [null == S ? true : S.emoji, null == S ? true : S.status]),
    U = i.useCallback(e => {
      e.preventDefault(), null != T && null != A && "" !== T.trim() && k({
        status: T,
        emoji: A
      })
    }, [T, A, k]),
    B = i.useCallback(() => {
      let e = null,
        t = null;
      do {
        var n;
        if (0 === D.length || (t = (null == (e = (0, c.sample)(D)) ? true : e.id) != null ? {
            id: e.id,
            name: e.name,
            animated: e.animated
          } : {
            id: null,
            name: null != (n = null == e ? true : e.optionallyDiverseSequence) ? n : "",
            animated: false
          }, 1 === D.length)) break
      } while (null == e || (null == e ? true : e.name) == null || s()(null == S ? true : S.emoji, t));
      null != t && (null == e ? true : e.name) != null && k({
        status: e.name,
        emoji: t
      })
    }, [D, k, null == S ? true : S.emoji]);
  return (0, r.jsxs)("div", {
    ref: Z,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(j.menu, O.container),
    children: [(0, r.jsxs)("div", {
      role: "group",
      className: a()(j.groupLabel, O.group),
      children: [(0, r.jsx)("form", {
        onSubmit: U,
        className: a()(j.item, j.labelContainer),
        children: (0, r.jsx)(p.oil, {
          inputRef: d,
          value: T,
          onChange: e => N(e.substring(0, C.s)),
          placeholder: x.intl.string(x.t.KPop4u),
          leading: {
            type: "emoji",
            button: (0, r.jsx)(_.A, {
              customStatusEmoji: A,
              setCustomStatusEmoji: w
            })
          },
          trailing: {
            icon: p.hh5,
            onClick: B,
            "aria-label": x.intl.string(x.t["5UAi5+"])
          }
        })
      }), Object.entries(P).map(e => {
        let [t, n] = e;
        return (0, r.jsx)(E, {
          isSelected: R === t,
          label: n.title,
          icon: (0, r.jsx)("img", {
            src: n.icon,
            alt: ""
          }),
          setStatus: () => L(t),
          clearStatus: () => (0, m.Sc)(false)
        }, n.title)
      })]
    }), I.current.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        role: "separator",
        className: O.separator
      }), (0, r.jsx)("div", {
        role: "group",
        className: a()(j.groupLabel, O.group),
        children: I.current.map((e, t) => (0, r.jsx)(E, {
          isSelected: s()(null == S ? true : S.emoji, e.emoji) && (null == S ? true : S.status) === e.status,
          label: e.status,
          icon: null != e.emoji && (0, r.jsx)(h.Z, {
            emoji: e.emoji,
            hideTooltip: true,
            className: O.icon
          }),
          setStatus: () => k(e),
          clearStatus: () => (0, m.Sc)(false)
        }, t))
      })]
    })]
  })
}