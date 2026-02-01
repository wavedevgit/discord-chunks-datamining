/** Chunk was on 71447 **/
/** chunk id: 75280, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
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

function v(e) {
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

function b(e, t) {
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
  O = Chunk64700.memo(function(e) {
    let {
      widgetId: t,
      tileWidth: n,
      tileHeight: l,
      layout: O,
      locked: x,
      activeStreams: _,
      streamParticipants: S,
      participantsVersion: I,
      pinned: j,
      padding: T
    } = e, C = S.map(e => ({
      participant: e,
      key: e.user.id,
      width: n,
      height: l,
      locked: x,
      widgetId: t,
      pinned: j
    })), N = (0, u.A)(n), w = (0, u.A)(x), P = O === m.IV.VERTICAL, D = x || w !== x || N !== n, R = r.useMemo(() => {
      let e = 0,
        t = 0;
      return P ? C.map((t, n) => b(v({}, t), {
        y: (e += t.height + (n > 0 ? T : 0)) - t.height,
        x: 0
      })) : C.map((e, n) => b(v({}, e), {
        x: (t += e.width + (n > 0 ? T : 0)) - e.width,
        y: 0
      }))
    }, [C, T, P]), k = r.useMemo(() => 0 === R.length ? (0, g.uc)(f.Ub) : R.reduce((e, t) => e + t.height, 0) + (P ? T * (R.length - 1) : 0), [R, P, T]), M = r.useMemo(() => 0 === R.length ? f.Ub : R.reduce((e, t) => e + t.width, 0) + (P ? 0 : T * (R.length - 1)), [R, P, T]), L = (0, o.pnh)(R, {
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
      trail: 100 * !D
    }, D ? "animate-never" : "respect-motion-settings"), U = (0, h.Dk)(() => new Set(S.map(e => e.user.id)), [S, I]), G = (0, h.Dk)(() => new Set(S.filter(e => _.has((0, c._z)(e.stream))).map(e => e.user.id)), [S, _, I]);
    return r.useEffect(() => {
      0 !== U.size && (0, h.Y)(y.uss.GO_LIVE, {
        locked: d.default.isInstanceLocked(),
        shownUserIds: Array.from(U),
        liveUserIds: Array.from(G),
        contentInventoryIds: []
      })
    }, [U, G]), (0, i.jsx)("div", {
      className: a()({
        [A.UT]: true,
        [A.Vd]: P,
        [A.xM]: !P
      }),
      style: P ? {
        height: k
      } : {
        width: M
      },
      children: L((e, t, r, a) => (0, i.jsx)(s.animated.div, {
        className: A.ux,
        style: Object.assign({}, e, {
          width: n,
          height: l,
          zIndex: C.length - a
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
            className: A.iA,
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