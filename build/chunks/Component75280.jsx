/** Chunk was on 71447 **/
/** chunk id: 75280, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk92674 = require("./92674.js"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk652896 = require("./652896.js"),
  Chunk256415 = require("./256415.js"),
  Chunk810412 = require("./810412.js"),
  Chunk433560 = require("./433560.jsx"),
  Chunk324093 = require("./324093.js"),
  Chunk916494 = require("./916494.js"),
  Chunk897720 = require("./897720.js"),
  Chunk652215 = require("./652215.js"),
  Chunk578950 = require("./578950.js");

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
let b = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: true
  },
  E = Chunk64700.memo(function(e) {
    let {
      widgetId: t,
      tileWidth: n,
      tileHeight: l,
      layout: E,
      locked: _,
      activeStreams: S,
      streamParticipants: x,
      participantsVersion: I,
      pinned: j,
      padding: C
    } = e, T = x.map(e => ({
      participant: e,
      key: e.user.id,
      width: n,
      height: l,
      locked: _,
      widgetId: t,
      pinned: j
    })), w = (0, u.A)(n), N = (0, u.A)(_), P = E === m.IV.VERTICAL, D = _ || N !== _ || w !== n, R = r.useMemo(() => {
      let e = 0,
        t = 0;
      return P ? T.map((t, n) => v(O({}, t), {
        y: (e += t.height + (n > 0 ? C : 0)) - t.height,
        x: 0
      })) : T.map((e, n) => v(O({}, e), {
        x: (t += e.width + (n > 0 ? C : 0)) - e.width,
        y: 0
      }))
    }, [T, C, P]), L = r.useMemo(() => 0 === R.length ? (0, g.uc)(f.Ub) : R.reduce((e, t) => e + t.height, 0) + (P ? C * (R.length - 1) : 0), [R, P, C]), k = r.useMemo(() => 0 === R.length ? f.Ub : R.reduce((e, t) => e + t.width, 0) + (P ? 0 : C * (R.length - 1)), [R, P, C]), M = (0, s.pnh)(R, {
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
      config: b,
      trail: 100 * !D
    }, D ? "animate-never" : "respect-motion-settings"), z = (0, h.Dk)(() => new Set(x.map(e => e.user.id)), [x, I]), V = (0, h.Dk)(() => new Set(x.filter(e => S.has((0, c._z)(e.stream))).map(e => e.user.id)), [x, S, I]);
    return r.useEffect(() => {
      0 !== z.size && (0, h.Y)(A.uss.GO_LIVE, {
        locked: d.default.isInstanceLocked(),
        shownUserIds: Array.from(z),
        liveUserIds: Array.from(V),
        contentInventoryIds: []
      })
    }, [z, V]), (0, i.jsx)("div", {
      className: a()({
        [y.UT]: true,
        [y.Vd]: P,
        [y.xM]: !P
      }),
      style: P ? {
        height: L
      } : {
        width: k
      },
      children: M((e, t, r, a) => (0, i.jsx)(o.animated.div, {
        className: y.ux,
        style: Object.assign({}, e, {
          width: n,
          height: l,
          zIndex: T.length - a
        }),
        children: (e => {
          let {
            participant: t,
            width: n,
            locked: r,
            widgetId: l,
            pinned: a
          } = e;
          return (0, i.jsx)("div", {
            className: y.iA,
            children: (0, i.jsx)(p.d, {
              participant: t,
              width: n,
              locked: r,
              widgetId: l,
              pinned: a
            }, t.user.id)
          })
        })(t)
      }))
    })
  })