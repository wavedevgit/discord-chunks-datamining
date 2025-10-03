/** Chunk was on 92592 **/
/** chunk id: 262433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => _,
  Z: () => b
}), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk879690 = require("./879690.js"),
  Chunk731965 = require("./731965.js"),
  Chunk125268 = require("./125268.js"),
  Chunk673125 = require("./673125.js"),
  Chunk984063 = require("./984063.js"),
  Chunk88315 = require("./88315.js"),
  Chunk199766 = require("./199766.js"),
  Chunk813900 = require("./813900.js");
let m = {
    X_OFFSET: 2 * Chunk813900.qh,
    Y_OFFSET: 25,
    X_SPEED: .5,
    Y_SPEED_MIN: false,
    Y_SPEED_MAX: false,
    OPACITY: 1,
    OPACITY_SPEED_MIN: .01,
    OPACITY_SPEED_MAX: .05,
    SIZE_MIN: Chunk813900.qh / 2,
    SIZE_MAX: Chunk813900.qh
  },
  _ = (0, Chunk879690.U)(() => ({
    particles: {},
    lastSpawned: {}
  }));

function g(e, t) {
  var n;
  i()(null != (n = _.getState().particles[e.id]) ? n : {}).forEach(t)
}

function b(e) {
  var t, n, r;
  let {
    emojiHose: a,
    context: b,
    canvasWidth: E,
    canvasHeight: v,
    fallbackColor: h,
    outlineColorDark: S,
    outlineColorLight: y,
    streamerId: O,
    deadDrawables: I
  } = e;
  b.save();
  let C = s.Z.getEmojiImage(null != (n = null != (t = a.emojiId) ? t : a.emojiName) ? n : ""),
    w = (0, d.np)(a.x, E),
    j = (0, d.np)(a.y, v),
    {
      outlineColor: Z
    } = (0, d.bg)(a.userId, S, y, h);
  g(a, e => {
      e.x += e.xSpeed * window.devicePixelRatio, e.y += e.ySpeed * window.devicePixelRatio, e.opacity -= e.opacitySpeed, e.opacity <= 0 && (0, o.j)(() => {
        _.setState(t => (delete t.particles[a.id][e.id], 0 === Object.keys(t.particles[a.id]).length && delete t.particles[a.id], t))
      })
    }),
    function(e, t, n) {
      var r;
      let a = null != (r = _.getState().lastSpawned[e.id]) ? r : 0,
        c = Date.now();
      !(a + 100 > c) && e.state !== u.f.STOP && (.8 >= Math.random() || a + 300 < c) && (0, o.j)(() => {
        _.setState(r => {
          var a;
          let o = null != (a = r.particles[e.id]) ? a : {},
            c = i().random(1, 2);
          for (let e = 0; e < c; e++) {
            let e = {
              id: (0, l.Z)(),
              x: t + i().random(-m.X_OFFSET, m.X_OFFSET),
              y: n + i().random(-m.Y_OFFSET, m.Y_OFFSET),
              xSpeed: i().random(-m.X_SPEED, m.X_SPEED),
              ySpeed: i().random(m.Y_SPEED_MIN, m.Y_SPEED_MAX),
              opacity: m.OPACITY,
              opacitySpeed: i().random(m.OPACITY_SPEED_MIN, m.OPACITY_SPEED_MAX),
              size: i().random(m.SIZE_MIN, m.SIZE_MAX)
            };
            o[e.id] = e
          }
          return r.particles[e.id] = o, r.lastSpawned[e.id] = Date.now(), r
        })
      })
    }(a, w, j), (0, f.I)(b, w, j, Z, p.q2), (0, f.T)(b, w, j, a.userId), g(a, e => (function(e, t, n) {
      if (null == t) return;
      let r = n.size * window.devicePixelRatio,
        i = n.x - r / 2 * window.devicePixelRatio,
        l = n.y - 1.2 * r * window.devicePixelRatio;
      e.globalAlpha = n.opacity, e.drawImage(t, r / 2 + i, r / 2 + l, r, r)
    })(b, C, e)), a.lastUpdatedAt + p.FO < Date.now() && (0, c.ZZ)(O, a), a.state !== u.f.STOP || Object.keys(null != (r = _.getState().particles[a.id]) ? r : {}).length > 0 || I.push(a), b.restore()
}