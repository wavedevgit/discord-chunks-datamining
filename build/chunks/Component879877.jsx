/** Chunk was on 29458 **/
/** chunk id: 879877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk286957 = require("./286957.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk8902 = require("./8902.js");

function u(e) {
  let {
    tags: t
  } = e, n = null == t ? true : t.filter(e => null != (0, c.z)(e)), i = (0, l.useRef)(new Map), o = (0, l.useRef)(null), [u, g] = (0, l.useState)(0), [j, y] = (0, l.useState)(false), {
    trackUserProfileAction: x
  } = (0, a.KZ)(), O = b(o, n, i, g);
  if ((0, l.useEffect)(() => (O(), window.addEventListener("resize", O), () => {
      window.removeEventListener("resize", O)
    }), [O, null == n ? true : n.join("")]), null == n || 0 === n.length) return null;
  let h = j ? n : n.slice(0, n.length - u);
  return (0, r.jsxs)("div", {
    className: d.tagListContainer,
    children: [(0, r.jsx)("ul", {
      className: d.tagList,
      "aria-label": s.intl.string(s.t.EfjTi4),
      children: h.map(e => (0, r.jsx)(f, {
        tag: e,
        ref: t => {
          null != t && i.current.set(e, t)
        }
      }, e))
    }), u > 0 && (j ? (0, r.jsx)(m, {
      onClick: () => {
        y(false), x({
          action: "COLLAPSE_GAME_TAGS"
        })
      }
    }) : (0, r.jsx)(p, {
      numHidden: u,
      onClick: () => {
        y(true), x({
          action: "EXPAND_GAME_TAGS"
        })
      },
      ref: o
    }))]
  })
}
let f = e => {
    let {
      tag: t,
      ref: n
    } = e, l = (0, c.z)(t);
    if (null == l) return null;
    let {
      getText: o,
      icon: a
    } = l;
    return (0, r.jsxs)("li", {
      className: d.tag,
      ref: n,
      children: [(0, r.jsx)(a, {
        size: "xxs"
      }), (0, r.jsx)(i.Text, {
        variant: "text-xxs/medium",
        color: "text-secondary",
        children: o()
      })]
    })
  },
  p = e => {
    let {
      numHidden: t,
      onClick: n,
      ref: l
    } = e;
    return (0, r.jsx)(i.DY3, {
      className: d.buttonContainer,
      text: s.intl.string(s.t.mriLXF),
      children: (0, r.jsx)(i.P3F, {
        onClick: n,
        className: d.expandButton,
        innerRef: l,
        "aria-label": s.intl.string(s.t.mriLXF),
        children: (0, r.jsx)(i.Text, {
          variant: "text-xxs/medium",
          color: "text-secondary",
          children: "+".concat(t)
        })
      })
    })
  },
  m = e => {
    let {
      onClick: t
    } = e;
    return (0, r.jsx)(i.DY3, {
      className: d.buttonContainer,
      text: s.intl.string(s.t.z9VPra),
      children: (0, r.jsx)(i.P3F, {
        onClick: t,
        className: d.collapseButton,
        "aria-label": s.intl.string(s.t.z9VPra),
        children: (0, r.jsx)(o.Z, {
          direction: o.Z.Directions.LEFT,
          width: 12,
          height: 12,
          className: d.caret
        })
      })
    })
  },
  b = (e, t, n, r) => (0, l.useCallback)(() => {
    var l, i;
    if (null == t) return void r(0);
    let o = null != (i = null == (l = e.current) ? true : l.getBoundingClientRect().width) ? i : 0,
      a = 0,
      c = 0,
      s = n.current;
    for (let e = 0; e < t.length; e++) {
      let n = s.get(t[e]);
      if (null != n) {
        if ((c += n.offsetWidth + 4) > 296) break;
        a++
      }
    }
    c = 0;
    for (let e = a; e < t.length; e++) {
      let n = s.get(t[e]);
      if (null != n) {
        if ((c += n.offsetWidth + 4) > 296 - o) break;
        a++
      }
    }
    r(t.length - a)
  }, [e, null == t ? true : t.join(""), n, r])