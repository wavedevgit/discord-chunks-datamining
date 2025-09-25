/** Chunk was on 15068 **/
/** chunk id: 877758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk785997 = require("./785997.js"),
  Chunk529925 = require("./529925.js");

function i(e) {
  let {
    step: t
  } = e, n = t === r.F.AGE_GATE, o = t === r.F.CHOOSE_TEMPLATE || t === r.F.CREATION_INTENT, i = t === r.F.CUSTOMIZE_GUILD, c = t === r.F.CHANNEL_PROMPT || t === r.F.JOIN_GUILD, u = i || c, d = o || u;
  return (0, a.jsxs)("div", {
    className: l.sidebar,
    children: [(0, a.jsx)("div", {
      className: s()(l.step1, {
        [l.show]: n
      })
    }), (0, a.jsx)("div", {
      className: s()(l.step24Clouds, {
        [l.show]: d
      })
    }), (0, a.jsx)("div", {
      className: s()(l.step34Flag, {
        [l.show]: u
      })
    }), (0, a.jsx)("div", {
      className: s()(l.step24Base, {
        [l.show]: d
      })
    }), (0, a.jsx)("div", {
      className: s()(l.step24Ground, {
        [l.show]: d
      })
    }), (0, a.jsx)("div", {
      className: s()(l.step2Base, {
        [l.show]: o
      })
    }), (0, a.jsx)("div", {
      className: s()(l.step2Character, {
        [l.show]: o
      })
    }), (0, a.jsx)("div", {
      className: s()(l.step34Base, {
        [l.show]: u
      })
    }), (0, a.jsx)("div", {
      className: s()(l.step3Character, {
        [l.show]: i
      })
    }), (0, a.jsx)("div", {
      className: s()(l.step4Character, {
        [l.show]: c
      })
    }), (0, a.jsx)("div", {
      className: s()(l.step24Foreground, {
        [l.show]: d
      })
    })]
  })
}