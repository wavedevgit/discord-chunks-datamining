/** Chunk was on 91848 **/
/** chunk id: 877758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk785997 = require("./785997.js"),
  Chunk880837 = require("./880837.js");

function l(e) {
  let {
    step: t
  } = e, n = t === r.F.AGE_GATE, o = t === r.F.CHOOSE_TEMPLATE || t === r.F.CREATION_INTENT, l = t === r.F.CUSTOMIZE_GUILD, c = t === r.F.CHANNEL_PROMPT || t === r.F.JOIN_GUILD, u = l || c, d = o || u;
  return (0, a.jsxs)("div", {
    className: i.sidebar,
    children: [(0, a.jsx)("div", {
      className: s()(i.step1, {
        [i.show]: n
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step24Clouds, {
        [i.show]: d
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step34Flag, {
        [i.show]: u
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step24Base, {
        [i.show]: d
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step24Ground, {
        [i.show]: d
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step2Base, {
        [i.show]: o
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step2Character, {
        [i.show]: o
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step34Base, {
        [i.show]: u
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step3Character, {
        [i.show]: l
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step4Character, {
        [i.show]: c
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step24Foreground, {
        [i.show]: d
      })
    })]
  })
}