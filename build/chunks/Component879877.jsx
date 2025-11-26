/** Chunk was on 44097 **/
/** chunk id: 879877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk624238 = require("./624238.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk978369 = require("./978369.jsx"),
  Chunk286957 = require("./286957.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk44258 = require("./44258.js");

function h(e) {
  var t;
  let {
    tags: n,
    isCurrentUser: a,
    widgetType: c,
    applicationId: s,
    className: u,
    disableInteraction: h = false
  } = e, v = null != (t = null == n ? true : n.filter(e => null != (0, p.zK)(e))) ? t : [], O = v.length > 0, _ = o.qH, P = a && !h && (0, f.M8)(c) && v.length < _, {
    trackUserProfileAction: I
  } = (0, d.KZ)(), w = (0, i.useRef)(new Map), S = (0, i.useRef)(null), E = (0, i.useRef)(null), [T, C] = (0, i.useState)(0), [D, k] = (0, i.useState)(false), N = x(S, E, v, w, C);
  if ((0, i.useEffect)(() => (N(), window.addEventListener("resize", N), () => {
      window.removeEventListener("resize", N)
    }), [N, null == v ? true : v.join("")]), !O && !P) return null;
  let A = D ? v : v.slice(0, v.length - T);
  return (0, r.jsxs)("div", {
    className: l()(b.tagListContainer, u),
    children: [O && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("ul", {
        className: b.tagList,
        "aria-label": m.intl.string(m.t.EfjTi4),
        children: A.map(e => (0, r.jsx)(y, {
          tag: e,
          isCurrentUser: a,
          applicationId: s,
          widgetType: c,
          ref: t => {
            null != t && w.current.set(e, t)
          },
          disableInteraction: h
        }, e))
      }), T > 0 && (0, r.jsx)(j, {
        buttonRef: S,
        isExpanded: D,
        numberOfOverflowingTags: T,
        onExpandTags: () => {
          k(true), I({
            action: "EXPAND_GAME_TAGS"
          })
        },
        onCollapseTags: () => {
          k(false), I({
            action: "COLLAPSE_GAME_TAGS"
          })
        },
        disableInteraction: h
      })]
    }), P && (0, r.jsx)(g.Z, {
      tags: n,
      widgetType: c,
      applicationId: s,
      ref: E
    })]
  })
}
let y = e => {
  let {
    tag: t,
    isCurrentUser: n,
    applicationId: i,
    widgetType: a,
    disableInteraction: l,
    ref: o
  } = e, {
    trackUserProfileEditAction: u
  } = (0, d.KZ)(), g = (0, p.zK)(t);
  if (null == g) return null;
  let {
    getText: h,
    icon: y
  } = g;
  return (0, r.jsxs)("li", {
    className: b.tag,
    ref: o,
    children: [(0, r.jsx)(y, {
      size: "xxs"
    }), (0, r.jsx)(s.Text, {
      variant: "text-xxs/medium",
      color: "text-secondary",
      children: h()
    }), n && !l && (0, r.jsx)(c.u, {
      text: m.intl.string(m.t.Otv9fP),
      ariaHidden: true,
      children: (0, r.jsx)(s.P3F, {
        onClick: () => {
          (0, f.RZ)(a, i, t), u({
            action: "TAG_REMOVED",
            widgetEdited: a,
            gameId: i
          })
        },
        className: b.removeButton,
        "aria-label": m.intl.formatToPlainString(m.t.GCn1ne, {
          tag: h()
        }),
        children: (0, r.jsx)(s.Dio, {
          size: "xxs",
          color: "currentColor"
        })
      })
    })]
  })
};

function v(e) {
  let {
    numberOfOverflowingTags: t
  } = e;
  return (0, r.jsx)(s.Text, {
    variant: "text-xxs/medium",
    color: "none",
    children: "+".concat(t)
  })
}

function O() {
  return (0, Chunk54381.jsx)(Chunk259580.Z, {
    direction: Chunk259580.Z.Directions.LEFT,
    width: 12,
    height: 12,
    className: Chunk44258.caret
  })
}

function j(e) {
  let {
    isExpanded: t,
    numberOfOverflowingTags: n,
    onExpandTags: i,
    onCollapseTags: a,
    disableInteraction: l,
    buttonRef: o
  } = e, u = t ? m.intl.string(m.t.z9VPrQ) : m.intl.string(m.t.mriLXL), d = t ? m.intl.string(m.t.z9VPrQ) : m.intl.formatToPlainString(m.t.F6iMs4, {
    count: n
  });
  return l ? (0, r.jsx)("div", {
    className: b.expandButton,
    ref: o,
    children: (0, r.jsx)(v, {
      numberOfOverflowingTags: n
    })
  }) : (0, r.jsx)(c.u, {
    text: u,
    ariaHidden: t,
    children: (0, r.jsx)(s.P3F, {
      innerRef: o,
      onClick: t ? a : i,
      "aria-label": d,
      className: t ? b.collapseButton : b.expandButton,
      children: t ? (0, r.jsx)(O, {}) : (0, r.jsx)(v, {
        numberOfOverflowingTags: n
      })
    })
  })
}
let x = (e, t, n, r, a) => (0, i.useCallback)(() => {
  var i, l, o, c;
  if (null == n) return void a(0);
  let s = null != (o = null == (i = e.current) ? true : i.getBoundingClientRect().width) ? o : 0,
    u = null != (c = null == (l = t.current) ? true : l.getBoundingClientRect().width) ? c : 0,
    d = u > 0 ? 8 : 4,
    f = 0,
    g = 0,
    p = r.current;
  for (let e = 0; e < n.length; e++) {
    let t = p.get(n[e]);
    if (null != t) {
      if ((g += t.offsetWidth + 4) > 296) break;
      f++
    }
  }
  g = 0;
  for (let e = f; e < n.length; e++) {
    let t = p.get(n[e]);
    if (null != t) {
      if ((g += t.offsetWidth + 4) > 296 - s - u - d) break;
      f++
    }
  }
  a(n.length - f)
}, [e, t, null == n ? true : n.join(""), r, a])