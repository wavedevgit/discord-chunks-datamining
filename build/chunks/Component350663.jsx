/** Chunk was on 46290 **/
/** chunk id: 350663, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  IV: () => E,
  ZP: () => I,
  bt: () => v,
  fd: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk261616 = require("./261616.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk569545 = require("./569545.js"),
  Chunk237997 = require("./237997.js"),
  Chunk444295 = require("./444295.js"),
  Chunk752802 = require("./752802.jsx"),
  Chunk340101 = require("./340101.js"),
  Chunk981631 = require("./981631.js"),
  Chunk339882 = require("./339882.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = 256,
  b = 144;

function E(e, t, n) {
  if (e === h.C5.VERTICAL) {
    let e = Math.max(t, v),
      n = Math.max(9 / 16 * e, b);
    return {
      tileWidth: e,
      tileHeight: n
    }
  }
  let i = Math.max(n, b);
  return {
    tileWidth: Math.max(16 / 9 * i, v),
    tileHeight: i
  }
}
let _ = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: true
  },
  I = Chunk647438.memo(function(e) {
    let {
      widgetId: t,
      tileWidth: n,
      tileHeight: o,
      layout: v,
      locked: b,
      activeStreams: E,
      streamParticipants: I,
      participantsVersion: S,
      pinned: x,
      padding: j,
      sizeOffset: C
    } = e, N = I.map(e => ({
      participant: e,
      key: e.user.id,
      width: n,
      height: o,
      locked: b,
      widgetId: t,
      pinned: x
    })), w = (0, c.Z)(n), Z = (0, c.Z)(b), P = v === h.C5.VERTICAL, T = b || Z !== b || w !== n, A = 0, k = 0, D = (0, s.Yzy)(P ? N.map((e, t) => O(y({}, e), {
      y: (A += e.height + (t > 0 ? j : 0)) - e.height,
      x: 0
    })) : N.map((e, t) => O(y({}, e), {
      x: (k += e.width + (t > 0 ? j : 0)) - e.width,
      y: 0
    })), {
      key: e => e.key,
      from: {
        height: 0,
        opacity: 0
      },
      leave: {
        height: 0,
        opacity: 0
      },
      enter: e => {
        let {
          x: t,
          y: n,
          width: i,
          height: r
        } = e;
        return {
          x: t,
          y: n,
          width: i,
          height: r,
          opacity: 1
        }
      },
      update: e => {
        let {
          x: t,
          y: n,
          width: i,
          height: r
        } = e;
        return {
          x: t,
          y: n,
          width: i,
          height: r
        }
      },
      config: _,
      trail: 100 * !T
    }, T ? "animate-never" : "respect-motion-settings"), R = (0, p.ee)(() => new Set(I.map(e => e.user.id)), [I, S]), L = (0, p.ee)(() => new Set(I.filter(e => E.has((0, u.V9)(e.stream))).map(e => e.user.id)), [I, E, S]);
    return r.useEffect(() => {
      0 !== R.size && (0, p.zi)(m.Odu.GO_LIVE, {
        locked: d.default.isInstanceLocked(),
        shownUserIds: Array.from(R),
        liveUserIds: Array.from(L),
        contentInventoryIds: []
      })
    }, [R, L]), (0, i.jsx)("div", {
      className: l()({
        [g.gridContainer]: true,
        [g.vertical]: P,
        [g.horizontal]: !P
      }),
      style: P ? {
        height: A
      } : {
        width: k
      },
      children: D((e, t, r, l) => (0, i.jsx)(a.animated.div, {
        className: g.gridItem,
        style: Object.assign({}, e, {
          width: n,
          height: o,
          zIndex: N.length - l
        }),
        children: (e => {
          let {
            participant: t,
            width: n,
            locked: r,
            widgetId: o,
            pinned: l
          } = e;
          return (0, i.jsx)("div", {
            className: g.tileContainer,
            children: (0, i.jsx)(f.Z, {
              participant: t,
              width: n,
              locked: r,
              widgetId: o,
              pinned: l
            }, t.user.id)
          })
        })(t)
      }))
    })
  })