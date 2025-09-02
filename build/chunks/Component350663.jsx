/** Chunk was on 46290 **/
/** chunk id: 350663, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  IV: () => E,
  ZP: () => S,
  bt: () => b,
  fd: () => v
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
let b = 256,
  v = 144;

function E(e, t, n) {
  if (e === h.C5.VERTICAL) {
    let e = Math.max(t, b),
      n = Math.max(9 / 16 * e, v);
    return {
      tileWidth: e,
      tileHeight: n
    }
  }
  let i = Math.max(n, v);
  return {
    tileWidth: Math.max(16 / 9 * i, b),
    tileHeight: i
  }
}
let _ = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: true
  },
  S = Chunk647438.memo(function(e) {
    let {
      widgetId: t,
      tileWidth: n,
      tileHeight: o,
      layout: b,
      locked: v,
      activeStreams: E,
      streamParticipants: S,
      participantsVersion: I,
      pinned: x,
      padding: j,
      sizeOffset: C
    } = e, N = S.map(e => ({
      participant: e,
      key: e.user.id,
      width: n,
      height: o,
      locked: v,
      widgetId: t,
      pinned: x
    })), w = (0, c.Z)(n), Z = (0, c.Z)(v), P = b === h.C5.VERTICAL, T = v || Z !== v || w !== n, k = 0, A = 0, D = (0, s.Yzy)(P ? N.map((e, t) => O(y({}, e), {
      y: (k += e.height + (t > 0 ? j : 0)) - e.height,
      x: 0
    })) : N.map((e, t) => O(y({}, e), {
      x: (A += e.width + (t > 0 ? j : 0)) - e.width,
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
    }, T ? "animate-never" : "respect-motion-settings"), R = (0, p.ee)(() => new Set(S.map(e => e.user.id)), [S, I]), L = (0, p.ee)(() => new Set(S.filter(e => E.has((0, u.V9)(e.stream))).map(e => e.user.id)), [S, E, I]);
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
        height: k
      } : {
        width: A
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