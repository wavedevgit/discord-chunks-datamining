/** Chunk was on 65414 **/
/** chunk id: 879877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk624238 = require("./624238.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk978369 = require("./978369.jsx"),
  Chunk286957 = require("./286957.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk260968 = require("./260968.js");

function y(e) {
  var t;
  let {
    tags: n,
    isCurrentUser: l,
    widgetType: c,
    applicationId: s,
    className: u,
    disableInteraction: y = false
  } = e, h = null != (t = null == n ? true : n.filter(e => null != (0, p.zK)(e))) ? t : [], O = h.length > 0, P = o.qH, I = l && !y && (0, f.M8)(c) && h.length < P, {
    trackUserProfileAction: w
  } = (0, d.KZ)(), S = (0, i.useRef)(new Map), E = (0, i.useRef)(null), T = (0, i.useRef)(null), [_, C] = (0, i.useState)(0), [N, Z] = (0, i.useState)(false), A = x(E, T, h, S, C);
  if ((0, i.useEffect)(() => (A(), window.addEventListener("resize", A), () => {
      window.removeEventListener("resize", A)
    }), [A, null == h ? true : h.join("")]), !O && !I) return null;
  let D = N ? h : h.slice(0, h.length - _);
  return (0, r.jsxs)("div", {
    className: a()(b.tagListContainer, u),
    children: [O && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("ul", {
        className: b.tagList,
        "aria-label": m.intl.string(m.t.EfjTi4),
        children: D.map(e => (0, r.jsx)(j, {
          tag: e,
          isCurrentUser: l,
          applicationId: s,
          widgetType: c,
          ref: t => {
            null != t && S.current.set(e, t)
          },
          disableInteraction: y
        }, e))
      }), _ > 0 && (0, r.jsx)(v, {
        buttonRef: E,
        isExpanded: N,
        numberOfOverflowingTags: _,
        onExpandTags: () => {
          Z(true), w({
            action: "EXPAND_GAME_TAGS"
          })
        },
        onCollapseTags: () => {
          Z(false), w({
            action: "COLLAPSE_GAME_TAGS"
          })
        },
        disableInteraction: y
      })]
    }), I && (0, r.jsx)(g.Z, {
      tags: n,
      widgetType: c,
      applicationId: s,
      ref: T
    })]
  })
}
let j = e => {
  let {
    tag: t,
    isCurrentUser: n,
    applicationId: i,
    widgetType: l,
    disableInteraction: a,
    ref: o
  } = e, {
    trackUserProfileEditAction: u
  } = (0, d.KZ)(), g = (0, p.zK)(t);
  if (null == g) return null;
  let {
    getText: y,
    icon: j
  } = g;
  return (0, r.jsxs)("li", {
    className: b.tag,
    ref: o,
    children: [(0, r.jsx)(j, {
      size: "xxs"
    }), (0, r.jsx)(s.Text, {
      variant: "text-xxs/medium",
      color: "text-subtle",
      children: y()
    }), n && !a && (0, r.jsx)(c.u, {
      text: m.intl.string(m.t.Otv9fP),
      ariaHidden: true,
      children: (0, r.jsx)(s.P3F, {
        onClick: () => {
          (0, f.RZ)(l, i, t), u({
            action: "TAG_REMOVED",
            widgetEdited: l,
            gameId: i
          })
        },
        className: b.removeButton,
        "aria-label": m.intl.formatToPlainString(m.t.GCn1ne, {
          tag: y()
        }),
        children: (0, r.jsx)(s.Dio, {
          size: "xxs",
          color: "currentColor"
        })
      })
    })]
  })
};

function h(e) {
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
  return (0, r.jsx)(u.Z, {
    direction: u.Z.Directions.LEFT,
    width: 12,
    height: 12,
    className: b.caret
  })
}

function v(e) {
  let {
    isExpanded: t,
    numberOfOverflowingTags: n,
    onExpandTags: i,
    onCollapseTags: l,
    disableInteraction: a,
    buttonRef: o
  } = e, u = t ? m.intl.string(m.t.z9VPrQ) : m.intl.string(m.t.mriLXL), d = t ? m.intl.string(m.t.z9VPrQ) : m.intl.formatToPlainString(m.t.F6iMs4, {
    count: n
  });
  return a ? (0, r.jsx)("div", {
    className: b.expandButton,
    ref: o,
    children: (0, r.jsx)(h, {
      numberOfOverflowingTags: n
    })
  }) : (0, r.jsx)(c.u, {
    text: u,
    ariaHidden: t,
    children: (0, r.jsx)(s.P3F, {
      innerRef: o,
      onClick: t ? l : i,
      "aria-label": d,
      className: t ? b.collapseButton : b.expandButton,
      children: t ? (0, r.jsx)(O, {}) : (0, r.jsx)(h, {
        numberOfOverflowingTags: n
      })
    })
  })
}
let x = (e, t, n, r, l) => (0, i.useCallback)(() => {
  var i, a, o, c;
  if (null == n) return void l(0);
  let s = null != (o = null == (i = e.current) ? true : i.getBoundingClientRect().width) ? o : 0,
    u = null != (c = null == (a = t.current) ? true : a.getBoundingClientRect().width) ? c : 0,
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
  l(n.length - f)
}, [e, t, null == n ? true : n.join(""), r, l])