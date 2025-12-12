/** Chunk was on 91848 **/
/** chunk id: 877758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk785997 = require("./785997.js"),
  Chunk880837 = require("./880837.js");

function l(e) {
  let {
    step: t
  } = e, n = t === s.F.AGE_GATE, o = t === s.F.CHOOSE_TEMPLATE || t === s.F.CREATION_INTENT, l = t === s.F.CUSTOMIZE_GUILD, c = t === s.F.CHANNEL_PROMPT || t === s.F.JOIN_GUILD, d = l || c, u = o || d;
  return (0, a.jsxs)("div", {
    className: r.sidebar,
    children: [(0, a.jsx)("div", {
      className: i()(r.step1, {
        [r.show]: n
      })
    }), (0, a.jsx)("div", {
      className: i()(r.step24Clouds, {
        [r.show]: u
      })
    }), (0, a.jsx)("div", {
      className: i()(r.step34Flag, {
        [r.show]: d
      })
    }), (0, a.jsx)("div", {
      className: i()(r.step24Base, {
        [r.show]: u
      })
    }), (0, a.jsx)("div", {
      className: i()(r.step24Ground, {
        [r.show]: u
      })
    }), (0, a.jsx)("div", {
      className: i()(r.step2Base, {
        [r.show]: o
      })
    }), (0, a.jsx)("div", {
      className: i()(r.step2Character, {
        [r.show]: o
      })
    }), (0, a.jsx)("div", {
      className: i()(r.step34Base, {
        [r.show]: d
      })
    }), (0, a.jsx)("div", {
      className: i()(r.step3Character, {
        [r.show]: l
      })
    }), (0, a.jsx)("div", {
      className: i()(r.step4Character, {
        [r.show]: c
      })
    }), (0, a.jsx)("div", {
      className: i()(r.step24Foreground, {
        [r.show]: u
      })
    })]
  })
}