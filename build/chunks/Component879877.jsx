/** Chunk was on 76708 **/
/** chunk id: 879877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk978369 = require("./978369.jsx"),
  Chunk286957 = require("./286957.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk44258 = require("./44258.js");

function f(e) {
  let {
    tags: t,
    isCurrentUser: n,
    widgetType: i,
    applicationId: o
  } = e, f = null == t ? true : t.filter(e => null != (0, s.zK)(e)), j = (0, l.useRef)(new Map), y = (0, l.useRef)(null), [O, x] = (0, l.useState)(0), [h, v] = (0, l.useState)(false), {
    trackUserProfileAction: _
  } = (0, a.KZ)(), I = b(y, f, j, x);
  if ((0, l.useEffect)(() => (I(), window.addEventListener("resize", I), () => {
      window.removeEventListener("resize", I)
    }), [I, null == f ? true : f.join("")]), null == f || 0 === f.length) return null;
  let P = h ? f : f.slice(0, f.length - O);
  return (0, r.jsxs)("div", {
    className: u.tagListContainer,
    children: [(0, r.jsx)("ul", {
      className: u.tagList,
      "aria-label": d.intl.string(d.t.EfjTi4),
      children: P.map(e => (0, r.jsx)(p, {
        tag: e,
        ref: t => {
          null != t && j.current.set(e, t)
        }
      }, e))
    }), O > 0 && (h ? (0, r.jsx)(g, {
      onClick: () => {
        v(false), _({
          action: "COLLAPSE_GAME_TAGS"
        })
      }
    }) : (0, r.jsx)(m, {
      numHidden: O,
      onClick: () => {
        v(true), _({
          action: "EXPAND_GAME_TAGS"
        })
      },
      ref: y
    })), n && (0, r.jsx)(c.Z, {
      tags: t,
      widgetType: i,
      applicationId: o
    })]
  })
}
let p = e => {
    let {
      tag: t,
      ref: n
    } = e, l = (0, s.zK)(t);
    if (null == l) return null;
    let {
      getText: o,
      icon: a
    } = l;
    return (0, r.jsxs)("li", {
      className: u.tag,
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
  m = e => {
    let {
      numHidden: t,
      onClick: n,
      ref: l
    } = e;
    return (0, r.jsx)(i.DY3, {
      className: u.buttonContainer,
      text: d.intl.string(d.t.mriLXF),
      children: (0, r.jsx)(i.P3F, {
        onClick: n,
        className: u.expandButton,
        innerRef: l,
        "aria-label": d.intl.string(d.t.mriLXF),
        children: (0, r.jsx)(i.Text, {
          variant: "text-xxs/medium",
          color: "text-secondary",
          children: "+".concat(t)
        })
      })
    })
  },
  g = e => {
    let {
      onClick: t
    } = e;
    return (0, r.jsx)(i.DY3, {
      className: u.buttonContainer,
      text: d.intl.string(d.t.z9VPra),
      children: (0, r.jsx)(i.P3F, {
        onClick: t,
        className: u.collapseButton,
        "aria-label": d.intl.string(d.t.z9VPra),
        children: (0, r.jsx)(o.Z, {
          direction: o.Z.Directions.LEFT,
          width: 12,
          height: 12,
          className: u.caret
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