/** Chunk was on 69283 **/
/** chunk id: 922588, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk930826 = require("./930826.jsx"),
  Chunk547245 = require("./547245.jsx"),
  Chunk308982 = require("./308982.js"),
  Chunk69376 = require("./69376.jsx"),
  Chunk670079 = require("./670079.jsx"),
  Chunk281200 = require("./281200.jsx"),
  Chunk260777 = require("./260777.js"),
  Chunk816906 = require("./816906.js"),
  Chunk91459 = require("./91459.js");
let p = Chunk308982.kg.getState();

function C(e) {
  let {
    channelId: t,
    guildId: n
  } = e, i = a.useRef(null), C = (0, c.e7)([s.Z], () => s.Z.useReducedMotion), [x, S] = a.useState(false), [y, w] = a.useState(true), [N, Z] = a.useState(false), {
    pickedMemberIds: k,
    currentMemberId: P,
    shuffledOrder: T
  } = (0, m.E1)(t), E = (0, b.Z)(t), A = null == T, B = E.every(e => k.includes(e)), {
    animateToMember: M
  } = (0, v.Z)({
    containerRef: i,
    channelId: t,
    memberIds: E
  }), O = a.useCallback(() => {
    var e;
    if (null == T) return;
    let n = null != (e = T.find(e => !k.includes(e))) ? e : null;
    null != n && p.pickName(t, n)
  }, [t, T, k]), j = a.useCallback(() => {
    if (0 === E.length) return;
    let e = (0, o.shuffle)(E),
      n = e[0];
    C ? (p.setShuffledOrder(t, e), p.pickName(t, n)) : (w(false), setTimeout(() => {
      Z(true), S(true), M(n, () => {
        p.setShuffledOrder(t, e), p.pickName(t, n), S(false), setTimeout(() => {
          Z(false), setTimeout(() => w(true), 150)
        }, 300)
      })
    }, 150))
  }, [E, t, M, C]), L = a.useCallback(() => {
    p.reset(t), S(false), Z(false), w(true)
  }, [t]);
  return (0, r.jsx)("div", {
    className: I.container,
    ref: i,
    children: (0, r.jsxs)("div", {
      className: I.contentArea,
      children: [(0, r.jsxs)("div", {
        className: I.leftPanel,
        children: [(0, r.jsx)("div", {
          className: I.screenShareButtonContainer,
          children: (0, r.jsx)(h.Z, {
            channelId: t,
            guildId: n
          })
        }), (0, r.jsx)(_.Z, {
          channelId: t
        }), (0, r.jsx)(g.Z, {
          channelId: t,
          showCountdown: k.length >= 1 || x,
          shuffling: x
        }, null != P ? P : "no-member"), (0, r.jsxs)("div", {
          className: I.buttonContainer,
          children: [(0, r.jsx)(u.Button, {
            icon: A ? u.DuK : true,
            text: A ? "Shuffle" : "Next",
            onClick: A ? j : O,
            disabled: E.length <= 1 || B || x,
            variant: "primary"
          }), (0, r.jsx)(u.Button, {
            text: "Reset",
            onClick: L,
            disabled: 0 === k.length || x,
            variant: "secondary"
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: I.rightPanel,
        children: [(0, r.jsx)("div", {
          className: l()(I.rouletteContainer, {
            [I.hidden]: !N
          }),
          children: (0, r.jsx)(f.Z, {
            channelId: t,
            memberIds: E,
            guildId: n,
            currentMemberId: P,
            shuffling: x
          })
        }), (0, r.jsx)(u.zJl, {
          className: l()(I.listScroller, {
            [I.hidden]: !y
          }),
          children: (0, r.jsx)(d.Z, {
            memberIds: null != T ? T : E,
            guildId: n,
            pickedMemberIds: k,
            currentMemberId: P
          })
        })]
      })]
    })
  })
}