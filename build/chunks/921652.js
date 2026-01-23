/** Chunk was on 31748 **/
/** chunk id: 921652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m,
  m: () => p
}), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
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

function g(e, t) {
  var n;
  l()(null != (n = p.getState().particles[e.id]) ? n : {}).forEach(t)
}

function m(e) {
  var t, n, r, a;
  let m, _, {
    emojiHose: h,
    context: y,
    canvasWidth: A,
    canvasHeight: b,
    fallbackColor: E,
    outlineColorDark: v,
    outlineColorLight: O,
    streamerId: x,
    deadDrawables: S
  } = e;
  y.save();
  let C = c.A.getEmojiImage(null != (t = null != (n = h.emojiId) ? n : h.emojiName) ? t : ""),
    N = (0, d._t)(h.x, A),
    I = (0, d._t)(h.y, b),
    {
      outlineColor: j
    } = (0, d.yO)(h.userId, v, O, E);
  g(h, e => {
    e.x += e.xSpeed * window.devicePixelRatio, e.y += e.ySpeed * window.devicePixelRatio, e.opacity -= e.opacitySpeed, e.opacity <= 0 && (0, o.r)(() => {
      p.setState(t => (delete t.particles[h.id][e.id], 0 === Object.keys(t.particles[h.id]).length && delete t.particles[h.id], t))
    })
  }), m = null != (r = p.getState().lastSpawned[h.id]) ? r : 0, m + 100 > (_ = Date.now()) || h.state === u.B.STOP || (.8 >= Math.random() || m + 300 < _) && (0, o.r)(() => {
    p.setState(e => {
      var t;
      let n = null != (t = e.particles[h.id]) ? t : {},
        r = l().random(1, 2);
      for (let e = 0; e < r; e++) {
        let e = {
          id: (0, i.A)(),
          x: N + l().random(false, 96),
          y: I + l().random(false, 25),
          xSpeed: l().random(false, .5),
          ySpeed: l().random(false, false),
          opacity: 1,
          opacitySpeed: l().random(.01, .05),
          size: l().random(24, 48)
        };
        n[e.id] = e
      }
      return e.particles[h.id] = n, e.lastSpawned[h.id] = Date.now(), e
    })
  }), (0, f.y)(y, N, I, j, 3), (0, f.k)(y, N, I, h.userId), g(h, e => (function(e, t, n) {
    if (null == t) return;
    let r = n.size * window.devicePixelRatio,
      l = n.x - r / 2 * window.devicePixelRatio,
      i = n.y - 1.2 * r * window.devicePixelRatio;
    e.globalAlpha = n.opacity, e.drawImage(t, r / 2 + l, r / 2 + i, r, r)
  })(y, C, e)), h.lastUpdatedAt + 5e3 < Date.now() && (0, s.RB)(x, h), h.state !== u.B.STOP || Object.keys(null != (a = p.getState().particles[h.id]) ? a : {}).length > 0 || S.push(h), y.restore()
}