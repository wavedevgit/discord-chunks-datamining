/** Chunk was on 5665 **/
/** chunk id: 655018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => O
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  s = require.n(Chunk348327),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk584973 = require("./584973.jsx"),
  Chunk906605 = require("./906605.js"),
  Chunk106301 = require("./106301.js"),
  Chunk833858 = require("./833858.js"),
  Chunk17030 = require("./17030.jsx"),
  Chunk505905 = require("./505905.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk787267 = require("./787267.js"),
  Chunk334405 = require("./334405.js");

function x(e) {
  let {
    label: t,
    icon: n,
    isSelected: l = false,
    setStatus: o,
    clearStatus: s
  } = e, [c, p] = i.useState(false), h = c && l, f = h ? _.intl.string(_.t.S90Fub) : t, m = i.useCallback(() => {
    h ? s() : o()
  }, [h, s, o]);
  return (0, r.jsxs)(d.P3F, {
    onClick: m,
    onMouseEnter: () => {
      p(true)
    },
    onMouseLeave: () => {
      p(false)
    },
    className: a()(v.item, v.labelContainer, C.item, {
      [C.isSelected]: l
    }),
    children: [n, (0, r.jsx)(d.Text, {
      color: h ? "text-danger" : "text-secondary",
      variant: "text-md/medium",
      className: C.itemText,
      children: f
    }), l && (0, r.jsx)(d.k$p, {
      className: C.closeIcon,
      color: h ? u.Z.colors.TEXT_DANGER : true
    })]
  })
}

function O(e) {
  var t, n;
  let {
    setPopoutRef: l
  } = e, o = i.useRef(null), u = (0, c.e7)([f.Z], () => f.Z.getCustomHangStatus()), O = i.useRef(f.Z.getRecentCustomStatuses()), j = (0, m.V)(), E = i.useRef(null), [S, I] = i.useState(null != (t = null == u ? true : u.status) ? t : ""), [P, Z] = i.useState(null != (n = null == u ? true : u.emoji) ? n : null), T = (0, c.e7)([f.Z], () => f.Z.getCurrentHangStatus());
  i.useEffect(() => {
    var e;
    (null == T || T === y.tN.CUSTOM) && (null == (e = o.current) || e.focus())
  }, [T]), i.useEffect(() => {
    null == l || l(null == E ? true : E.current)
  }, [E, l]), i.useEffect(() => {
    (null == u ? true : u.emoji) != null && null != u.status ? (I(u.status), Z(u.emoji)) : (I(""), Z(null))
  }, [u]);
  let N = i.useCallback(e => {
      e !== T && (0, h.Zx)(e, true)
    }, [T]),
    A = i.useCallback(e => {
      let {
        emoji: t,
        status: n
      } = e;
      s()(t, null == u ? true : u.emoji) && n === (null == u ? true : u.status) || (0, h._s)(e.status, e.emoji, true)
    }, [null == u ? true : u.emoji, null == u ? true : u.status]),
    w = i.useCallback(e => {
      e.preventDefault(), null != S && null != P && "" !== S.trim() && A({
        status: S,
        emoji: P
      })
    }, [S, P, A]);
  return (0, r.jsxs)("div", {
    ref: E,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(v.menu, C.container),
    children: [(0, r.jsxs)("div", {
      role: "group",
      className: a()(v.groupLabel, C.group),
      children: [(0, r.jsx)("form", {
        onSubmit: w,
        className: a()(v.item, v.labelContainer),
        children: (0, r.jsx)(d.oil, {
          inputRef: o,
          value: S,
          onChange: e => I(e.substring(0, b.s)),
          placeholder: _.intl.string(_.t.KPop4u),
          leading: {
            type: "emoji",
            button: (0, r.jsx)(g.A, {
              customStatusEmoji: P,
              setCustomStatusEmoji: Z
            })
          }
        })
      }), Object.entries(j).map(e => {
        let [t, n] = e;
        return (0, r.jsx)(x, {
          isSelected: T === t,
          label: n.title,
          icon: (0, r.jsx)("img", {
            src: n.icon,
            alt: ""
          }),
          setStatus: () => N(t),
          clearStatus: () => (0, h.Sc)(false)
        }, n.title)
      })]
    }), O.current.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        role: "separator",
        className: C.separator
      }), (0, r.jsx)("div", {
        role: "group",
        className: a()(v.groupLabel, C.group),
        children: O.current.map((e, t) => (0, r.jsx)(x, {
          isSelected: s()(null == u ? true : u.emoji, e.emoji) && (null == u ? true : u.status) === e.status,
          label: e.status,
          icon: null != e.emoji && (0, r.jsx)(p.Z, {
            emoji: e.emoji,
            hideTooltip: true,
            className: C.icon
          }),
          setStatus: () => A(e),
          clearStatus: () => (0, h.Sc)(false)
        }, t))
      })]
    })]
  })
}