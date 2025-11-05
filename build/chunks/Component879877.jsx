/** Chunk was on 52557 **/
/** chunk id: 879877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  } = e, x = null != (t = null == n ? true : n.filter(e => null != (0, p.zK)(e))) ? t : [], _ = x.length > 0, P = o.qH, I = a && !h && (0, g.M8)(c) && x.length < P, {
    trackUserProfileAction: w
  } = (0, d.KZ)(), S = (0, i.useRef)(new Map), E = (0, i.useRef)(null), T = (0, i.useRef)(null), [C, D] = (0, i.useState)(0), [k, N] = (0, i.useState)(false), A = j(E, T, x, S, D);
  if ((0, i.useEffect)(() => (A(), window.addEventListener("resize", A), () => {
      window.removeEventListener("resize", A)
    }), [A, null == x ? true : x.join("")]), !_ && !I) return null;
  let Z = k ? x : x.slice(0, x.length - C);
  return (0, r.jsxs)("div", {
    className: l()(b.tagListContainer, u),
    children: [_ && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("ul", {
        className: b.tagList,
        "aria-label": m.intl.string(m.t.EfjTi4),
        children: Z.map(e => (0, r.jsx)(y, {
          tag: e,
          isCurrentUser: a,
          applicationId: s,
          widgetType: c,
          ref: t => {
            null != t && S.current.set(e, t)
          },
          disableInteraction: h
        }, e))
      }), C > 0 && (k ? (0, r.jsx)(O, {
        onClick: () => {
          N(false), w({
            action: "COLLAPSE_GAME_TAGS"
          })
        }
      }) : (0, r.jsx)(v, {
        numHidden: C,
        onClick: () => {
          N(true), w({
            action: "EXPAND_GAME_TAGS"
          })
        },
        ref: E,
        disableInteraction: h
      }))]
    }), I && (0, r.jsx)(f.Z, {
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
    } = (0, d.KZ)(), f = (0, p.zK)(t);
    if (null == f) return null;
    let {
      getText: h,
      icon: y
    } = f;
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
        children: (0, r.jsx)(s.P3F, {
          onClick: () => {
            (0, g.RZ)(a, i, t), u({
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
  },
  v = e => {
    let {
      numHidden: t,
      onClick: n,
      disableInteraction: i,
      ref: a
    } = e;
    return i ? (0, r.jsx)("div", {
      className: b.expandButton,
      children: (0, r.jsx)(s.Text, {
        variant: "text-xxs/medium",
        color: "none",
        children: "+".concat(t)
      })
    }) : (0, r.jsx)(c.u, {
      asContainer: true,
      text: m.intl.string(m.t.mriLXL),
      children: (0, r.jsx)(s.P3F, {
        onClick: n,
        className: b.expandButton,
        innerRef: a,
        "aria-label": m.intl.string(m.t.mriLXL),
        children: (0, r.jsx)(s.Text, {
          variant: "text-xxs/medium",
          color: "none",
          children: "+".concat(t)
        })
      })
    })
  },
  O = e => {
    let {
      onClick: t
    } = e;
    return (0, r.jsx)(c.u, {
      asContainer: true,
      text: m.intl.string(m.t.z9VPrQ),
      children: (0, r.jsx)(s.P3F, {
        onClick: t,
        className: b.collapseButton,
        "aria-label": m.intl.string(m.t.z9VPrQ),
        children: (0, r.jsx)(u.Z, {
          direction: u.Z.Directions.LEFT,
          width: 12,
          height: 12,
          className: b.caret
        })
      })
    })
  },
  j = (e, t, n, r, a) => (0, i.useCallback)(() => {
    var i, l, o, c;
    if (null == n) return void a(0);
    let s = null != (o = null == (i = e.current) ? true : i.getBoundingClientRect().width) ? o : 0,
      u = null != (c = null == (l = t.current) ? true : l.getBoundingClientRect().width) ? c : 0,
      d = u > 0 ? 8 : 4,
      g = 0,
      f = 0,
      p = r.current;
    for (let e = 0; e < n.length; e++) {
      let t = p.get(n[e]);
      if (null != t) {
        if ((f += t.offsetWidth + 4) > 296) break;
        g++
      }
    }
    f = 0;
    for (let e = g; e < n.length; e++) {
      let t = p.get(n[e]);
      if (null != t) {
        if ((f += t.offsetWidth + 4) > 296 - s - u - d) break;
        g++
      }
    }
    a(n.length - g)
  }, [e, t, null == n ? true : n.join(""), r, a])