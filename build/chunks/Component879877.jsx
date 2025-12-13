/** Chunk was on 85032 **/
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
  Chunk260968 = require("./260968.js");

function h(e) {
  var t;
  let {
    tags: n,
    isCurrentUser: a,
    widgetType: c,
    applicationId: s,
    className: u,
    disableInteraction: h = false
  } = e, v = null != (t = null == n ? true : n.filter(e => null != (0, p.zK)(e))) ? t : [], O = v.length > 0, P = o.qH, I = a && !h && (0, f.M8)(c) && v.length < P, {
    trackUserProfileAction: w
  } = (0, d.KZ)(), S = (0, i.useRef)(new Map), E = (0, i.useRef)(null), T = (0, i.useRef)(null), [_, C] = (0, i.useState)(0), [D, k] = (0, i.useState)(false), N = x(E, T, v, S, C);
  if ((0, i.useEffect)(() => (N(), window.addEventListener("resize", N), () => {
      window.removeEventListener("resize", N)
    }), [N, null == v ? true : v.join("")]), !O && !I) return null;
  let A = D ? v : v.slice(0, v.length - _);
  return (0, r.jsxs)("div", {
    className: l()(m.tagListContainer, u),
    children: [O && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("ul", {
        className: m.tagList,
        "aria-label": b.intl.string(b.t.EfjTi4),
        children: A.map(e => (0, r.jsx)(y, {
          tag: e,
          isCurrentUser: a,
          applicationId: s,
          widgetType: c,
          ref: t => {
            null != t && S.current.set(e, t)
          },
          disableInteraction: h
        }, e))
      }), _ > 0 && (0, r.jsx)(j, {
        buttonRef: E,
        isExpanded: D,
        numberOfOverflowingTags: _,
        onExpandTags: () => {
          k(true), w({
            action: "EXPAND_GAME_TAGS"
          })
        },
        onCollapseTags: () => {
          k(false), w({
            action: "COLLAPSE_GAME_TAGS"
          })
        },
        disableInteraction: h
      })]
    }), I && (0, r.jsx)(g.Z, {
      tags: n,
      widgetType: c,
      applicationId: s,
      ref: T
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
    className: m.tag,
    ref: o,
    children: [(0, r.jsx)(y, {
      size: "xxs"
    }), (0, r.jsx)(s.Text, {
      variant: "text-xxs/medium",
      color: "text-subtle",
      children: h()
    }), n && !l && (0, r.jsx)(c.u, {
      text: b.intl.string(b.t.Otv9fP),
      ariaHidden: true,
      children: (0, r.jsx)(s.P3F, {
        onClick: () => {
          (0, f.RZ)(a, i, t), u({
            action: "TAG_REMOVED",
            widgetEdited: a,
            gameId: i
          })
        },
        className: m.removeButton,
        "aria-label": b.intl.formatToPlainString(b.t.GCn1ne, {
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
    className: Chunk260968.caret
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
  } = e, u = t ? b.intl.string(b.t.z9VPrQ) : b.intl.string(b.t.mriLXL), d = t ? b.intl.string(b.t.z9VPrQ) : b.intl.formatToPlainString(b.t.F6iMs4, {
    count: n
  });
  return l ? (0, r.jsx)("div", {
    className: m.expandButton,
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
      className: t ? m.collapseButton : m.expandButton,
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