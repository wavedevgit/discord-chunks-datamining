/** Chunk was on 36073 **/
/** chunk id: 879877, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function O(e) {
  var t;
  let {
    tags: r,
    isCurrentUser: a,
    widgetType: c,
    applicationId: s,
    className: u,
    disableInteraction: O = false
  } = e, h = null != (t = null == r ? true : r.filter(e => null != (0, p.zK)(e))) ? t : [], _ = h.length > 0, w = l.qH, P = a && !O && (0, f.M8)(c) && h.length < w, {
    trackUserProfileAction: I
  } = (0, d.KZ)(), S = (0, i.useRef)(new Map), E = (0, i.useRef)(null), T = (0, i.useRef)(null), [D, k] = (0, i.useState)(0), [N, C] = (0, i.useState)(false), Z = v(E, T, h, S, k);
  if ((0, i.useEffect)(() => (Z(), window.addEventListener("resize", Z), () => {
      window.removeEventListener("resize", Z)
    }), [Z, null == h ? true : h.join("")]), !_ && !P) return null;
  let A = N ? h : h.slice(0, h.length - D);
  return (0, n.jsxs)("div", {
    className: o()(m.tagListContainer, u),
    children: [_ && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("ul", {
        className: m.tagList,
        "aria-label": b.intl.string(b.t.EfjTi4),
        children: A.map(e => (0, n.jsx)(y, {
          tag: e,
          isCurrentUser: a,
          applicationId: s,
          widgetType: c,
          ref: t => {
            null != t && S.current.set(e, t)
          },
          disableInteraction: O
        }, e))
      }), D > 0 && (N ? (0, n.jsx)(x, {
        onClick: () => {
          C(false), I({
            action: "COLLAPSE_GAME_TAGS"
          })
        }
      }) : (0, n.jsx)(j, {
        numHidden: D,
        onClick: () => {
          C(true), I({
            action: "EXPAND_GAME_TAGS"
          })
        },
        ref: E,
        disableInteraction: O
      }))]
    }), P && (0, n.jsx)(g.Z, {
      tags: r,
      widgetType: c,
      applicationId: s,
      ref: T
    })]
  })
}
let y = e => {
    let {
      tag: t,
      isCurrentUser: r,
      applicationId: i,
      widgetType: a,
      disableInteraction: o,
      ref: l
    } = e, {
      trackUserProfileEditAction: u
    } = (0, d.KZ)(), g = (0, p.zK)(t);
    if (null == g) return null;
    let {
      getText: O,
      icon: y
    } = g;
    return (0, n.jsxs)("li", {
      className: m.tag,
      ref: l,
      children: [(0, n.jsx)(y, {
        size: "xxs"
      }), (0, n.jsx)(s.Text, {
        variant: "text-xxs/medium",
        color: "text-secondary",
        children: O()
      }), r && !o && (0, n.jsx)(c.u, {
        text: b.intl.string(b.t.Otv9fH),
        children: (0, n.jsx)(s.P3F, {
          onClick: () => {
            (0, f.RZ)(a, i, t), u({
              action: "TAG_REMOVED",
              widgetEdited: a,
              gameId: i
            })
          },
          className: m.removeButton,
          "aria-label": b.intl.formatToPlainString(b.t.GCn1nZ, {
            tag: O()
          }),
          children: (0, n.jsx)(s.Dio, {
            size: "xxs",
            color: "currentColor"
          })
        })
      })]
    })
  },
  j = e => {
    let {
      numHidden: t,
      onClick: r,
      disableInteraction: i,
      ref: a
    } = e;
    return i ? (0, n.jsx)("div", {
      className: m.expandButton,
      children: (0, n.jsx)(s.Text, {
        variant: "text-xxs/medium",
        color: "none",
        children: "+".concat(t)
      })
    }) : (0, n.jsx)(c.u, {
      asContainer: true,
      text: b.intl.string(b.t.mriLXF),
      children: (0, n.jsx)(s.P3F, {
        onClick: r,
        className: m.expandButton,
        innerRef: a,
        "aria-label": b.intl.string(b.t.mriLXF),
        children: (0, n.jsx)(s.Text, {
          variant: "text-xxs/medium",
          color: "none",
          children: "+".concat(t)
        })
      })
    })
  },
  x = e => {
    let {
      onClick: t
    } = e;
    return (0, n.jsx)(c.u, {
      asContainer: true,
      text: b.intl.string(b.t.z9VPra),
      children: (0, n.jsx)(s.P3F, {
        onClick: t,
        className: m.collapseButton,
        "aria-label": b.intl.string(b.t.z9VPra),
        children: (0, n.jsx)(u.Z, {
          direction: u.Z.Directions.LEFT,
          width: 12,
          height: 12,
          className: m.caret
        })
      })
    })
  },
  v = (e, t, r, n, a) => (0, i.useCallback)(() => {
    var i, o, l, c;
    if (null == r) return void a(0);
    let s = null != (l = null == (i = e.current) ? true : i.getBoundingClientRect().width) ? l : 0,
      u = null != (c = null == (o = t.current) ? true : o.getBoundingClientRect().width) ? c : 0,
      d = u > 0 ? 8 : 4,
      f = 0,
      g = 0,
      p = n.current;
    for (let e = 0; e < r.length; e++) {
      let t = p.get(r[e]);
      if (null != t) {
        if ((g += t.offsetWidth + 4) > 296) break;
        f++
      }
    }
    g = 0;
    for (let e = f; e < r.length; e++) {
      let t = p.get(r[e]);
      if (null != t) {
        if ((g += t.offsetWidth + 4) > 296 - s - u - d) break;
        f++
      }
    }
    a(r.length - f)
  }, [e, t, null == r ? true : r.join(""), n, a])