/** Chunk was on web.js **/
/** chunk id: 996606, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./472816.js"), require("./794429.js"), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk785925 = require("./785925.js"),
  Chunk544975 = require("./544975.js"),
  Chunk390551 = require("./390551.js"),
  Chunk130692 = require("./130692.js"),
  Chunk354459 = require("./354459.js"),
  Chunk246447 = require("./246447.js");
let m = 13e3,
  h = (e, t) => e.type === p.fO.USER && e.speaking && e.user.id !== t,
  g = e => {
    let {
      seats: t,
      claimedSeat: n,
      participant: a,
      participants: g,
      channel: E,
      flip: b,
      handleHover: y,
      enableAnimations: O = true
    } = e, v = i.useRef(null), S = i.useRef(new Set), I = (0, f.Z)(a), {
      setAsset: T,
      sampleAsset: C,
      animationState: A,
      updateAnimationState: N,
      characterAssets: P
    } = (0, u.o)(null == I ? true : I.name), R = i.useMemo(() => Object.values(null != P ? P : {}).flat(), [P]), w = g.find(e => e.type === p.fO.USER && e.user.id === a.userId), D = i.useMemo(() => g.filter(e => h(e, a.userId)), [g, a.userId]), x = i.useMemo(() => D.flatMap(e => {
      let n = t.find(t => t.claimedBy === e.user.id);
      return null != n ? [n] : []
    }), [D, t]), [L, j] = i.useState(false), [M, k] = i.useState(0), [U, G] = i.useState(0);
    return i.useEffect(() => {
      j(false)
    }, [I, R]), i.useEffect(() => {
      let e = S.current;
      return () => {
        [...e].forEach(e => window.clearTimeout(e))
      }
    }, []), i.useEffect(() => {
      if (!O) return;
      let e = v.current;
      if (null == e || true === L) return;
      let t = C(),
        n = R.findIndex(e => e === t);
      T(t), G(n), [...e.children].forEach((e, t) => {
        if ("VIDEO" !== e.nodeName) return;
        let r = e;
        r.currentTime = 0, t === n && (r.play(), j(true))
      })
    }, [L, R, C, T, O]), i.useEffect(() => {
      O && ((null == w ? true : w.speaking) ? N(u.O.TALKING) : A === u.O.TALKING && N(u.O.IDLE))
    }, [w, A, N, O]), i.useEffect(() => {
      O && x.some(e => {
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
      }) && M + m < Date.now() && (N(u.O.HEAD_TURN), k(Date.now()))
    }, [x, n, M, N, O]), (0, r.jsxs)(s.P3F, {
      className: _.wrapper,
      style: {
        width: I.width,
        top: I.offset.top,
        left: b ? -I.offset.left : I.offset.left
      },
      onMouseEnter: () => y(true),
      onMouseLeave: () => y(false),
      onClick: e => {
        e.preventDefault(), e.stopPropagation();
        let t = (a.avatar + 1) % d.eJ.length;
        0 === t && (t = 1), c.ZP.update(E.id, {
          avatar: t,
          seat: null == n ? true : n.id
        })
      },
      children: [(0, r.jsx)("div", {
        className: _.vingette,
        style: {
          height: 1.25 * I.height,
          width: 1.25 * I.width
        }
      }), (null == P ? true : P.decoration) != null && (0, r.jsx)(l.Z, {
        src: P.decoration[0],
        className: o()(_.character, {
          [_.flip]: b
        }),
        autoPlay: O,
        loop: O,
        style: {
          width: I.width
        }
      }), (0, r.jsx)("div", {
        ref: v,
        children: R.map((e, t) => (0, r.jsx)(l.Z, {
          style: {
            opacity: +(t === U),
            width: I.width
          },
          src: e,
          className: o()(_.character, {
            [_.flip]: b
          }),
          onEnded: () => {
            var t, n;
            if (A === u.O.HEAD_TURN && (null == P || null == (t = P.headTurn) ? true : t.includes(e))) {
              N(u.O.HEAD_TURN_BACK);
              let e = setTimeout(() => {
                j(false), S.current.delete(e)
              }, 2e3);
              S.current.add(e)
            } else A === u.O.HEAD_TURN_BACK && (null == P || null == (n = P.headTurnBack) ? true : n.includes(e)) && N(u.O.IDLE), j(false)
          },
          autoPlay: false,
          loop: false
        }, e))
      })]
    })
  }