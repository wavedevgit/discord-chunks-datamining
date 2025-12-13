/** Chunk was on 50751 **/
/** chunk id: 350663, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk706619 = require("./706619.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk569545 = require("./569545.js"),
  Chunk237997 = require("./237997.js"),
  Chunk444295 = require("./444295.js"),
  Chunk752802 = require("./752802.jsx"),
  Chunk68286 = require("./68286.js"),
  Chunk461393 = require("./461393.js"),
  Chunk340101 = require("./340101.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474600 = require("./474600.js");

function O(e) {
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

function v(e, t) {
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
let E = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: true
  },
  S = Chunk473749.memo(function(e) {
    let {
      widgetId: t,
      tileWidth: n,
      tileHeight: a,
      layout: S,
      locked: x,
      activeStreams: I,
      streamParticipants: C,
      participantsVersion: j,
      pinned: _,
      padding: Z
    } = e, N = C.map(e => ({
      participant: e,
      key: e.user.id,
      width: n,
      height: a,
      locked: x,
      widgetId: t,
      pinned: _
    })), w = (0, c.Z)(n), T = (0, c.Z)(x), P = S === g.C5.VERTICAL, A = x || T !== x || w !== n, k = r.useMemo(() => {
      let e = 0,
        t = 0;
      return P ? N.map((t, n) => v(O({}, t), {
        y: (e += t.height + (n > 0 ? Z : 0)) - t.height,
        x: 0
      })) : N.map((e, n) => v(O({}, e), {
        x: (t += e.width + (n > 0 ? Z : 0)) - e.width,
        y: 0
      }))
    }, [N, Z, P]), D = r.useMemo(() => 0 === k.length ? (0, m.MH)(p.bt) : k.reduce((e, t) => e + t.height, 0) + (P ? Z * (k.length - 1) : 0), [k, P, Z]), R = r.useMemo(() => 0 === k.length ? p.bt : k.reduce((e, t) => e + t.width, 0) + (P ? 0 : Z * (k.length - 1)), [k, P, Z]), L = (0, s.Yzy)(k, {
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
      config: E,
      trail: 100 * !A
    }, A ? "animate-never" : "respect-motion-settings"), M = (0, f.ee)(() => new Set(C.map(e => e.user.id)), [C, j]), z = (0, f.ee)(() => new Set(C.filter(e => I.has((0, u.V9)(e.stream))).map(e => e.user.id)), [C, I, j]);
    return r.useEffect(() => {
      0 !== M.size && (0, f.zi)(b.Odu.GO_LIVE, {
        locked: d.default.isInstanceLocked(),
        shownUserIds: Array.from(M),
        liveUserIds: Array.from(z),
        contentInventoryIds: []
      })
    }, [M, z]), (0, i.jsx)("div", {
      className: l()({
        [y.gridContainer]: true,
        [y.vertical]: P,
        [y.horizontal]: !P
      }),
      style: P ? {
        height: D
      } : {
        width: R
      },
      children: L((e, t, r, l) => (0, i.jsx)(o.animated.div, {
        className: y.gridItem,
        style: Object.assign({}, e, {
          width: n,
          height: a,
          zIndex: N.length - l
        }),
        children: (e => {
          let {
            participant: t,
            width: n,
            locked: r,
            widgetId: a,
            pinned: l
          } = e;
          return (0, i.jsx)("div", {
            className: y.tileContainer,
            children: (0, i.jsx)(h.Z, {
              participant: t,
              width: n,
              locked: r,
              widgetId: a,
              pinned: l
            }, t.user.id)
          })
        })(t)
      }))
    })
  })