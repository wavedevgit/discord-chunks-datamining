/** Chunk was on 40184 **/
/** chunk id: 996606, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./472816.js"), require("./794429.js"), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk785925 = require("./785925.js"),
  Chunk544975 = require("./544975.js"),
  Chunk390551 = require("./390551.js"),
  Chunk130692 = require("./130692.js"),
  Chunk354459 = require("./354459.js"),
  Chunk246447 = require("./246447.js");
let m = e => {
  let {
    seats: t,
    claimedSeat: n,
    participant: l,
    participants: m,
    channel: g,
    flip: b,
    handleHover: y
  } = e, C = r.useRef(null), v = r.useRef(new Set), x = (0, p.Z)(l), {
    setAsset: O,
    sampleAsset: E,
    animationState: j,
    updateAnimationState: S,
    characterAssets: _
  } = (0, u.o)(null == x ? true : x.name), P = r.useMemo(() => Object.values(null != _ ? _ : {}).flat(), [_]), I = m.find(e => e.type === f.fO.USER && e.user.id === l.userId), Z = r.useMemo(() => m.filter(e => {
    let t;
    return t = l.userId, e.type === f.fO.USER && e.speaking && e.user.id !== t
  }), [m, l.userId]), T = r.useMemo(() => Z.flatMap(e => {
    let n = t.find(t => t.claimedBy === e.user.id);
    return null != n ? [n] : []
  }), [Z, t]), [N, A] = r.useState(false), [w, M] = r.useState(0), [R, D] = r.useState(0);
  return r.useEffect(() => {
    A(false)
  }, [x, P]), r.useEffect(() => {
    let e = v.current;
    return () => {
      [...e].forEach(e => window.clearTimeout(e))
    }
  }, []), r.useEffect(() => {
    let e = C.current;
    if (null == e || true === N) return;
    let t = E(),
      n = P.findIndex(e => e === t);
    O(t), D(n), [...e.children].forEach((e, t) => {
      "VIDEO" === e.nodeName && (e.currentTime = 0, t === n && (e.play(), A(true)))
    })
  }, [N, P, E, O]), r.useEffect(() => {
    (null == I ? true : I.speaking) ? S(u.O.TALKING): j === u.O.TALKING && S(u.O.IDLE)
  }, [I, j, S]), r.useEffect(() => {
    T.some(e => {
      switch (n.id) {
        case 1:
        case 2:
        case 3:
          return (null == e ? true : e.id) < n.id;
        case 4:
        case 5:
        case 6:
          return (null == e ? true : e.id) > n.id;
        default:
          returnfalse
      }
    }) && w + 13e3 < Date.now() && (S(u.O.HEAD_TURN), M(Date.now()))
  }, [T, n, w, S]), (0, i.jsxs)(o.P3F, {
    className: h.wrapper,
    style: {
      width: x.width,
      top: x.offset.top,
      left: b ? -x.offset.left : x.offset.left
    },
    onMouseEnter: () => y(true),
    onMouseLeave: () => y(false),
    onClick: e => {
      e.preventDefault(), e.stopPropagation();
      let t = (l.avatar + 1) % d.eJ.length;
      0 === t && (t = 1), c.ZP.update(g.id, {
        avatar: t,
        seat: null == n ? true : n.id
      })
    },
    children: [(0, i.jsx)("div", {
      className: h.vingette,
      style: {
        height: 1.25 * x.height,
        width: 1.25 * x.width
      }
    }), (null == _ ? true : _.decoration) != null && (0, i.jsx)(s.Z, {
      src: _.decoration[0],
      className: a()(h.character, {
        [h.flip]: b
      }),
      autoPlay: true,
      loop: true,
      style: {
        width: x.width
      }
    }), (0, i.jsx)("div", {
      ref: C,
      children: P.map((e, t) => (0, i.jsx)(s.Z, {
        style: {
          opacity: +(t === R),
          width: x.width
        },
        src: e,
        className: a()(h.character, {
          [h.flip]: b
        }),
        onEnded: () => {
          var t, n;
          if (j === u.O.HEAD_TURN && (null == _ || null == (t = _.headTurn) ? true : t.includes(e))) {
            S(u.O.HEAD_TURN_BACK);
            let e = setTimeout(() => {
              A(false), v.current.delete(e)
            }, 2e3);
            v.current.add(e)
          } else j === u.O.HEAD_TURN_BACK && (null == _ || null == (n = _.headTurnBack) ? true : n.includes(e)) && S(u.O.IDLE), A(false)
        },
        autoPlay: false,
        loop: false
      }, e))
    })]
  })
}