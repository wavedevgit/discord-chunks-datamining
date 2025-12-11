/** Chunk was on 24028 **/
/** chunk id: 877758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk785997 = require("./785997.js"),
  Chunk745873 = require("./745873.js");

function r(e) {
  let {
    step: t
  } = e, n = t === l.F.AGE_GATE, o = t === l.F.CHOOSE_TEMPLATE || t === l.F.CREATION_INTENT, r = t === l.F.CUSTOMIZE_GUILD, c = t === l.F.CHANNEL_PROMPT || t === l.F.JOIN_GUILD, d = r || c, u = o || d;
  return (0, a.jsxs)("div", {
    className: i.sidebar,
    children: [(0, a.jsx)("div", {
      className: s()(i.step1, {
        [i.show]: n
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step24Clouds, {
        [i.show]: u
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step34Flag, {
        [i.show]: d
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step24Base, {
        [i.show]: u
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step24Ground, {
        [i.show]: u
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
        [i.show]: d
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step3Character, {
        [i.show]: r
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step4Character, {
        [i.show]: c
      })
    }), (0, a.jsx)("div", {
      className: s()(i.step24Foreground, {
        [i.show]: u
      })
    })]
  })
}