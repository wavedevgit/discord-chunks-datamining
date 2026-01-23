/** Chunk was on web.js **/
/** chunk id: 764647, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BN: () => g,
  ER: () => E,
  Ej: () => y,
  RK: () => l,
  UU: () => c,
  cY: () => m,
  jD: () => f,
  rD: () => a
});
var Chunk56027 = require("./56027.js");

function i(e, t, n) {
  let i, {
      reference: a,
      floating: s
    } = e,
    o = (0, r.TV)(t),
    l = (0, r.Dz)(t),
    c = (0, r.sq)(l),
    u = (0, r.C0)(t),
    d = "y" === o,
    f = a.x + a.width / 2 - s.width / 2,
    p = a.y + a.height / 2 - s.height / 2,
    _ = a[c] / 2 - s[c] / 2;
  switch (u) {
    case "top":
      i = {
        x: f,
        y: a.y - s.height
      };
      break;
    case "bottom":
      i = {
        x: f,
        y: a.y + a.height
      };
      break;
    case "right":
      i = {
        x: a.x + a.width,
        y: p
      };
      break;
    case "left":
      i = {
        x: a.x - s.width,
        y: p
      };
      break;
    default:
      i = {
        x: a.x,
        y: a.y
      }
  }
  switch ((0, r.Sg)(t)) {
    case "start":
      i[l] -= _ * (n && d ? false : 1);
      break;
    case "end":
      i[l] += _ * (n && d ? false : 1)
  }
  return i
}
let a = async (e, t, n) => {
  let {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: s = [],
    platform: o
  } = n, l = s.filter(Boolean), c = await (null == o.isRTL ? true : o.isRTL(t)), u = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: d,
    y: f
  } = i(u, r, c), p = r, _ = {}, h = 0;
  for (let n = 0; n < l.length; n++) {
    let {
      name: s,
      fn: m
    } = l[n], {
      x: g,
      y: E,
      data: y,
      reset: b
    } = await m({
      x: d,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: a,
      middlewareData: _,
      rects: u,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = null != g ? g : d, f = null != E ? E : f, _ = {
      ..._,
      [s]: {
        ..._[s],
        ...y
      }
    }, b && h <= 50 && (h++, "object" == typeof b && (b.placement && (p = b.placement), b.rects && (u = true === b.rects ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : b.rects), {
      x: d,
      y: f
    } = i(u, p, c)), n = false)
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: a,
    middlewareData: _
  }
};
async function s(e, t) {
  var n;
  true === t && (t = {});
  let {
    x: i,
    y: a,
    platform: s,
    rects: o,
    elements: l,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: p = false,
    padding: _ = 0
  } = (0, r._3)(t, e), h = (0, r.nI)(_), m = "floating" === f ? "reference" : "floating", g = l[p ? m : f], E = (0, r.B1)(await s.getClippingRect({
    element: null == (n = await (null == s.isElement ? true : s.isElement(g))) || n ? g : g.contextElement || await (null == s.getDocumentElement ? true : s.getDocumentElement(l.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: c
  })), y = "floating" === f ? {
    x: i,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, b = await (null == s.getOffsetParent ? true : s.getOffsetParent(l.floating)), O = await (null == s.isElement ? true : s.isElement(b)) && await (null == s.getScale ? true : s.getScale(b)) || {
    x: 1,
    y: 1
  }, v = (0, r.B1)(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: y,
    offsetParent: b,
    strategy: c
  }) : y);
  return {
    top: (E.top - v.top + h.top) / O.y,
    bottom: (v.bottom - E.bottom + h.bottom) / O.y,
    left: (E.left - v.left + h.left) / O.x,
    right: (v.right - E.right + h.right) / O.x
  }
}

function o(e, t, n) {
  return (e ? [...n.filter(t => (0, r.Sg)(t) === e), ...n.filter(t => (0, r.Sg)(t) !== e)] : n.filter(e => (0, r.C0)(e) === e)).filter(n => !e || (0, r.Sg)(n) === e || !!t && (0, r.aD)(n) !== n)
}
let l = function(e) {
    return true === e && (e = {}), {
      name: "autoPlacement",
      options: e,
      async fn(t) {
        var n, i, a;
        let {
          rects: l,
          middlewareData: c,
          placement: u,
          platform: d,
          elements: f
        } = t, {
          crossAxis: p = false,
          alignment: _,
          allowedPlacements: h = r.DD,
          autoAlignment: m = true,
          ...g
        } = (0, r._3)(e, t), E = true !== _ || h === r.DD ? o(_ || null, m, h) : h, y = await s(t, g), b = (null == (n = c.autoPlacement) ? true : n.index) || 0, O = E[b];
        if (null == O) return {};
        let v = (0, r.w7)(O, l, await (null == d.isRTL ? true : d.isRTL(f.floating)));
        if (u !== O) return {
          reset: {
            placement: E[0]
          }
        };
        let A = [y[(0, r.C0)(O)], y[v[0]], y[v[1]]],
          I = [...(null == (i = c.autoPlacement) ? true : i.overflows) || [], {
            placement: O,
            overflows: A
          }],
          S = E[b + 1];
        if (S) return {
          data: {
            index: b + 1,
            overflows: I
          },
          reset: {
            placement: S
          }
        };
        let T = I.map(e => {
            let t = (0, r.Sg)(e.placement);
            return [e.placement, t && p ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0], e.overflows]
          }).sort((e, t) => e[1] - t[1]),
          C = (null == (a = T.filter(e => e[2].slice(0, (0, r.Sg)(e[0]) ? 2 : 3).every(e => e <= 0))[0]) ? true : a[0]) || T[0][0];
        return C !== u ? {
          data: {
            index: b + 1,
            overflows: I
          },
          reset: {
            placement: C
          }
        } : {}
      }
    }
  },
  c = function(e) {
    return true === e && (e = {}), {
      name: "flip",
      options: e,
      async fn(t) {
        var n, i, a, o, l;
        let {
          placement: c,
          middlewareData: u,
          rects: d,
          initialPlacement: f,
          platform: p,
          elements: _
        } = t, {
          mainAxis: h = true,
          crossAxis: m = true,
          fallbackPlacements: g,
          fallbackStrategy: E = "bestFit",
          fallbackAxisSideDirection: y = "none",
          flipAlignment: b = true,
          ...O
        } = (0, r._3)(e, t);
        if (null != (n = u.arrow) && n.alignmentOffset) return {};
        let v = (0, r.C0)(c),
          A = (0, r.TV)(f),
          I = (0, r.C0)(f) === f,
          S = await (null == p.isRTL ? true : p.isRTL(_.floating)),
          T = g || (I || !b ? [(0, r.bV)(f)] : (0, r.WJ)(f)),
          C = "none" !== y;
        !g && C && T.push(...(0, r.lP)(f, b, y, S));
        let N = [f, ...T],
          w = await s(t, O),
          R = [],
          P = (null == (i = u.flip) ? true : i.overflows) || [];
        if (h && R.push(w[v]), m) {
          let e = (0, r.w7)(c, d, S);
          R.push(w[e[0]], w[e[1]])
        }
        if (P = [...P, {
            placement: c,
            overflows: R
          }], !R.every(e => e <= 0)) {
          let e = ((null == (a = u.flip) ? true : a.index) || 0) + 1,
            t = N[e];
          if (t && ("alignment" !== m || A === (0, r.TV)(t) || P.every(e => (0, r.TV)(e.placement) !== A || e.overflows[0] > 0))) return {
            data: {
              index: e,
              overflows: P
            },
            reset: {
              placement: t
            }
          };
          let n = null == (o = P.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? true : o.placement;
          if (!n) switch (E) {
            case "bestFit": {
              let e = null == (l = P.filter(e => {
                if (C) {
                  let t = (0, r.TV)(e.placement);
                  return t === A || "y" === t
                }
                returntrue
              }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? true : l[0];
              e && (n = e);
              break
            }
            case "initialPlacement":
              n = f
          }
          if (c !== n) return {
            reset: {
              placement: n
            }
          }
        }
        return {}
      }
    }
  };

function u(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  }
}

function d(e) {
  return r.r_.some(t => e[t] >= 0)
}
let f = function(e) {
  return true === e && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      let {
        rects: n
      } = t, {
        strategy: i = "referenceHidden",
        ...a
      } = (0, r._3)(e, t);
      switch (i) {
        case "referenceHidden": {
          let e = u(await s(t, {
            ...a,
            elementContext: "reference"
          }), n.reference);
          return {
            data: {
              referenceHiddenOffsets: e,
              referenceHidden: d(e)
            }
          }
        }
        case "escaped": {
          let e = u(await s(t, {
            ...a,
            altBoundary: true
          }), n.floating);
          return {
            data: {
              escapedOffsets: e,
              escaped: d(e)
            }
          }
        }
        default:
          return {}
      }
    }
  }
};

function p(e) {
  let t = min(...e.map(e => e.left)),
    n = min(...e.map(e => e.top));
  return {
    x: t,
    y: n,
    width: max(...e.map(e => e.right)) - t,
    height: max(...e.map(e => e.bottom)) - n
  }
}
let _ = new Set(["left", "top"]);
async function h(e, t) {
  let {
    placement: n,
    platform: i,
    elements: a
  } = e, s = await (null == i.isRTL ? true : i.isRTL(a.floating)), o = (0, r.C0)(n), l = (0, r.Sg)(n), c = "y" === (0, r.TV)(n), u = _.has(o) ? false : 1, d = s && c ? false : 1, f = (0, r._3)(t, e), {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: m
  } = "number" == typeof f ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return l && "number" == typeof m && (h = "end" === l ? false * m : m), c ? {
    x: h * d,
    y: p * u
  } : {
    x: p * u,
    y: h * d
  }
}
let m = function(e) {
    return true === e && (e = 0), {
      name: "offset",
      options: e,
      async fn(t) {
        var n, r;
        let {
          x: i,
          y: a,
          placement: s,
          middlewareData: o
        } = t, l = await h(t, e);
        return s === (null == (n = o.offset) ? true : n.placement) && null != (r = o.arrow) && r.alignmentOffset ? {} : {
          x: i + l.x,
          y: a + l.y,
          data: {
            ...l,
            placement: s
          }
        }
      }
    }
  },
  g = function(e) {
    return true === e && (e = {}), {
      name: "shift",
      options: e,
      async fn(t) {
        let {
          x: n,
          y: i,
          placement: a
        } = t, {
          mainAxis: o = true,
          crossAxis: l = false,
          limiter: c = {
            fn: e => {
              let {
                x: t,
                y: n
              } = e;
              return {
                x: t,
                y: n
              }
            }
          },
          ...u
        } = (0, r._3)(e, t), d = {
          x: n,
          y: i
        }, f = await s(t, u), p = (0, r.TV)((0, r.C0)(a)), _ = (0, r.PG)(p), h = d[_], m = d[p];
        if (o) {
          let e = "y" === _ ? "top" : "left",
            t = "y" === _ ? "bottom" : "right",
            n = h + f[e],
            i = h - f[t];
          h = (0, r.qE)(n, h, i)
        }
        if (l) {
          let e = "y" === p ? "top" : "left",
            t = "y" === p ? "bottom" : "right",
            n = m + f[e],
            i = m - f[t];
          m = (0, r.qE)(n, m, i)
        }
        let g = c.fn({
          ...t,
          [_]: h,
          [p]: m
        });
        return {
          ...g,
          data: {
            x: g.x - n,
            y: g.y - i,
            enabled: {
              [_]: o,
              [p]: l
            }
          }
        }
      }
    }
  },
  E = function(e) {
    return true === e && (e = {}), {
      options: e,
      fn(t) {
        let {
          x: n,
          y: i,
          placement: a,
          rects: s,
          middlewareData: o
        } = t, {
          offset: l = 0,
          mainAxis: c = true,
          crossAxis: u = true
        } = (0, r._3)(e, t), d = {
          x: n,
          y: i
        }, f = (0, r.TV)(a), p = (0, r.PG)(f), h = d[p], m = d[f], g = (0, r._3)(l, t), E = "number" == typeof g ? {
          mainAxis: g,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...g
        };
        if (c) {
          let e = "y" === p ? "height" : "width",
            t = s.reference[p] - s.floating[e] + E.mainAxis,
            n = s.reference[p] + s.reference[e] - E.mainAxis;
          h < t ? h = t : h > n && (h = n)
        }
        if (u) {
          var y, b;
          let e = "y" === p ? "width" : "height",
            t = _.has((0, r.C0)(a)),
            n = s.reference[f] - s.floating[e] + (t && (null == (y = o.offset) ? true : y[f]) || 0) + (t ? 0 : E.crossAxis),
            i = s.reference[f] + s.reference[e] + (t ? 0 : (null == (b = o.offset) ? true : b[f]) || 0) - (t ? E.crossAxis : 0);
          m < n ? m = n : m > i && (m = i)
        }
        return {
          [p]: h,
          [f]: m
        }
      }
    }
  },
  y = function(e) {
    return true === e && (e = {}), {
      name: "size",
      options: e,
      async fn(t) {
        var n, i;
        let a, o, {
            placement: l,
            rects: c,
            platform: u,
            elements: d
          } = t,
          {
            apply: f = () => {},
            ...p
          } = (0, r._3)(e, t),
          _ = await s(t, p),
          h = (0, r.C0)(l),
          m = (0, r.Sg)(l),
          g = "y" === (0, r.TV)(l),
          {
            width: E,
            height: y
          } = c.floating;
        "top" === h || "bottom" === h ? (a = h, o = m === (await (null == u.isRTL ? true : u.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (o = h, a = "end" === m ? "top" : "bottom");
        let b = y - _.top - _.bottom,
          O = E - _.left - _.right,
          v = (0, r.jk)(y - _[a], b),
          A = (0, r.jk)(E - _[o], O),
          I = !t.middlewareData.shift,
          S = v,
          T = A;
        if (null != (n = t.middlewareData.shift) && n.enabled.x && (T = O), null != (i = t.middlewareData.shift) && i.enabled.y && (S = b), I && !m) {
          let e = (0, r.T9)(_.left, 0),
            t = (0, r.T9)(_.right, 0),
            n = (0, r.T9)(_.top, 0),
            i = (0, r.T9)(_.bottom, 0);
          g ? T = E - 2 * (0 !== e || 0 !== t ? e + t : (0, r.T9)(_.left, _.right)) : S = y - 2 * (0 !== n || 0 !== i ? n + i : (0, r.T9)(_.top, _.bottom))
        }
        await f({
          ...t,
          availableWidth: T,
          availableHeight: S
        });
        let C = await u.getDimensions(d.floating);
        return E !== C.width || y !== C.height ? {
          reset: {
            rects: true
          }
        } : {}
      }
    }
  }