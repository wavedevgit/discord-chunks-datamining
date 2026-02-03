/** Chunk was on 61344 **/
/** chunk id: 921652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m,
  m: () => p
}), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  r = require.n(Chunk735438),
  Chunk835245 = require("./835245.js"),
  Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js"),
  Chunk318937 = require("./318937.js"),
  Chunk533117 = require("./533117.js"),
  Chunk134753 = require("./134753.js"),
  Chunk666717 = require("./666717.js"),
  Chunk202894 = require("./202894.js");
require("./824217.js");
let p = (0, Chunk353640.v)(() => ({
  particles: {},
  lastSpawned: {}
}));

function f(e, t) {
  var n;
  r()(null != (n = p.getState().particles[e.id]) ? n : {}).forEach(t)
}

function m(e) {
  var t, n, l, a;
  let m, g, {
    emojiHose: A,
    context: b,
    canvasWidth: _,
    canvasHeight: y,
    fallbackColor: v,
    outlineColorDark: E,
    outlineColorLight: O,
    streamerId: C,
    deadDrawables: S
  } = e;
  b.save();
  let x = c.A.getEmojiImage(null != (t = null != (n = A.emojiId) ? n : A.emojiName) ? t : ""),
    j = (0, d._t)(A.x, _),
    I = (0, d._t)(A.y, y),
    {
      outlineColor: T
    } = (0, d.yO)(A.userId, E, O, v);
  f(A, e => {
    e.x += e.xSpeed * window.devicePixelRatio, e.y += e.ySpeed * window.devicePixelRatio, e.opacity -= e.opacitySpeed, e.opacity <= 0 && (0, s.r)(() => {
      p.setState(t => (delete t.particles[A.id][e.id], 0 === Object.keys(t.particles[A.id]).length && delete t.particles[A.id], t))
    })
  }), m = null != (l = p.getState().lastSpawned[A.id]) ? l : 0, m + 100 > (g = Date.now()) || A.state === u.B.STOP || (.8 >= Math.random() || m + 300 < g) && (0, s.r)(() => {
    p.setState(e => {
      var t;
      let n = null != (t = e.particles[A.id]) ? t : {},
        l = r().random(1, 2);
      for (let e = 0; e < l; e++) {
        let e = {
          id: (0, i.A)(),
          x: j + r().random(false, 96),
          y: I + r().random(false, 25),
          xSpeed: r().random(false, .5),
          ySpeed: r().random(false, false),
          opacity: 1,
          opacitySpeed: r().random(.01, .05),
          size: r().random(24, 48)
        };
        n[e.id] = e
      }
      return e.particles[A.id] = n, e.lastSpawned[A.id] = Date.now(), e
    })
  }), (0, h.y)(b, j, I, T, 3), (0, h.k)(b, j, I, A.userId), f(A, e => (function(e, t, n) {
    if (null == t) return;
    let l = n.size * window.devicePixelRatio,
      r = n.x - l / 2 * window.devicePixelRatio,
      i = n.y - 1.2 * l * window.devicePixelRatio;
    e.globalAlpha = n.opacity, e.drawImage(t, l / 2 + r, l / 2 + i, l, l)
  })(b, x, e)), A.lastUpdatedAt + 5e3 < Date.now() && (0, o.RB)(C, A), A.state !== u.B.STOP || Object.keys(null != (a = p.getState().particles[A.id]) ? a : {}).length > 0 || S.push(A), b.restore()
}