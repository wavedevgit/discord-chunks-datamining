/** Chunk was on web.js **/
/** chunk id: 944766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./864466.js"), require("./443073.js"), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk418126 = require("./418126.js"),
  Chunk814550 = require("./814550.js"),
  Chunk572808 = require("./572808.js"),
  Chunk9045 = require("./9045.js"),
  Chunk806931 = require("./806931.js"),
  Chunk447196 = require("./447196.js");
let h = 13e3,
  m = (e, t) => e.type === p.lp.USER && e.speaking && e.user.id !== t,
  g = e => {
    let {
      seats: t,
      claimedSeat: n,
      participant: a,
      participants: g,
      channel: E,
      flip: y,
      handleHover: b,
      enableAnimations: O = true
    } = e, v = i.useRef(null), A = i.useRef(new Set), I = (0, f.A)(a), {
      setAsset: S,
      sampleAsset: T,
      animationState: C,
      updateAnimationState: N,
      characterAssets: w
    } = (0, u.u)(null == I ? true : I.name), R = i.useMemo(() => Object.values(null != w ? w : {}).flat(), [w]), P = g.find(e => e.type === p.lp.USER && e.user.id === a.userId), D = i.useMemo(() => g.filter(e => m(e, a.userId)), [g, a.userId]), L = i.useMemo(() => D.flatMap(e => {
      let n = t.find(t => t.claimedBy === e.user.id);
      return null != n ? [n] : []
    }), [D, t]), [x, M] = i.useState(false), [j, k] = i.useState(0), [U, G] = i.useState(0);
    return i.useEffect(() => {
      M(false)
    }, [I, R]), i.useEffect(() => {
      let e = A.current;
      return () => {
        [...e].forEach(e => window.clearTimeout(e))
      }
    }, []), i.useEffect(() => {
      if (!O) return;
      let e = v.current;
      if (null == e || true === x) return;
      let t = T(),
        n = R.findIndex(e => e === t);
      S(t), G(n), [...e.children].forEach((e, t) => {
        if ("VIDEO" !== e.nodeName) return;
        let r = e;
        r.currentTime = 0, t === n && (r.play(), M(true))
      })
    }, [x, R, T, S, O]), i.useEffect(() => {
      O && ((null == P ? true : P.speaking) ? N(u.f.TALKING) : C === u.f.TALKING && N(u.f.IDLE))
    }, [P, C, N, O]), i.useEffect(() => {
      !O || L.some(e => {
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
      }) && j + h < Date.now() && (N(u.f.HEAD_TURN), k(Date.now()))
    }, [L, n, j, N, O]), (0, r.jsxs)(s.DUT, {
      className: _.iE,
      style: {
        width: I.width,
        top: I.offset.top,
        left: y ? -I.offset.left : I.offset.left
      },
      onMouseEnter: () => b(true),
      onMouseLeave: () => b(false),
      onClick: e => {
        e.preventDefault(), e.stopPropagation();
        let t = (a.avatar + 1) % d.oo.length;
        0 === t && (t = 1), c.Ay.update(E.id, {
          avatar: t,
          seat: null == n ? true : n.id
        })
      },
      children: [(0, r.jsx)("div", {
        className: _.Fk,
        style: {
          height: 1.25 * I.height,
          width: 1.25 * I.width
        }
      }), (null == w ? true : w.decoration) != null && (0, r.jsx)(l.A, {
        src: w.decoration[0],
        className: o()(_.GG, {
          [_.UU]: y
        }),
        autoPlay: O,
        loop: O,
        style: {
          width: I.width
        }
      }), (0, r.jsx)("div", {
        ref: v,
        children: R.map((e, t) => (0, r.jsx)(l.A, {
          style: {
            opacity: +(t === U),
            width: I.width
          },
          src: e,
          className: o()(_.GG, {
            [_.UU]: y
          }),
          onEnded: () => {
            var t, n;
            if (C === u.f.HEAD_TURN && (null == w || null == (t = w.headTurn) ? true : t.includes(e))) {
              N(u.f.HEAD_TURN_BACK);
              let e = setTimeout(() => {
                M(false), A.current.delete(e)
              }, 2e3);
              A.current.add(e)
            } else C === u.f.HEAD_TURN_BACK && (null == w || null == (n = w.headTurnBack) ? true : n.includes(e)) && N(u.f.IDLE), M(false)
          },
          autoPlay: false,
          loop: false
        }, e))
      })]
    })
  }