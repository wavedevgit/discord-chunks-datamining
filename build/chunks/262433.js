/** Chunk was on 13873 **/
/** chunk id: 262433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => m,
  Z: () => b
}), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk191336 = require("./191336.js"),
  Chunk731965 = require("./731965.js"),
  Chunk125268 = require("./125268.js"),
  Chunk673125 = require("./673125.js"),
  Chunk984063 = require("./984063.js"),
  Chunk88315 = require("./88315.js"),
  Chunk199766 = require("./199766.js"),
  Chunk813900 = require("./813900.js");
let h = {
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
  m = (0, Chunk191336.U)(() => ({
    particles: {},
    lastSpawned: {}
  }));

function g(e, t) {
  var n;
  i()(null != (n = m.getState().particles[e.id]) ? n : {}).forEach(t)
}

function b(e) {
  var t, n, r;
  let {
    emojiHose: a,
    context: b,
    canvasWidth: _,
    canvasHeight: y,
    fallbackColor: C,
    outlineColorDark: v,
    outlineColorLight: O,
    streamerId: x,
    deadDrawables: E
  } = e;
  b.save();
  let j = c.Z.getEmojiImage(null != (n = null != (t = a.emojiId) ? t : a.emojiName) ? n : ""),
    S = (0, d.np)(a.x, _),
    P = (0, d.np)(a.y, y),
    {
      outlineColor: I
    } = (0, d.bg)(a.userId, v, O, C);
  g(a, e => {
      e.x += e.xSpeed * window.devicePixelRatio, e.y += e.ySpeed * window.devicePixelRatio, e.opacity -= e.opacitySpeed, e.opacity <= 0 && (0, o.j)(() => {
        m.setState(t => (delete t.particles[a.id][e.id], 0 === Object.keys(t.particles[a.id]).length && delete t.particles[a.id], t))
      })
    }),
    function(e, t, n) {
      var r;
      let a = null != (r = m.getState().lastSpawned[e.id]) ? r : 0,
        s = Date.now();
      !(a + 100 > s) && e.state !== u.f.STOP && (.8 >= Math.random() || a + 300 < s) && (0, o.j)(() => {
        m.setState(r => {
          var a;
          let o = null != (a = r.particles[e.id]) ? a : {},
            s = i().random(1, 2);
          for (let e = 0; e < s; e++) {
            let e = {
              id: (0, l.Z)(),
              x: t + i().random(-h.X_OFFSET, h.X_OFFSET),
              y: n + i().random(-h.Y_OFFSET, h.Y_OFFSET),
              xSpeed: i().random(-h.X_SPEED, h.X_SPEED),
              ySpeed: i().random(h.Y_SPEED_MIN, h.Y_SPEED_MAX),
              opacity: h.OPACITY,
              opacitySpeed: i().random(h.OPACITY_SPEED_MIN, h.OPACITY_SPEED_MAX),
              size: i().random(h.SIZE_MIN, h.SIZE_MAX)
            };
            o[e.id] = e
          }
          return r.particles[e.id] = o, r.lastSpawned[e.id] = Date.now(), r
        })
      })
    }(a, S, P), (0, p.I)(b, S, P, I, f.q2), (0, p.T)(b, S, P, a.userId), g(a, e => (function(e, t, n) {
      if (null == t) return;
      let r = n.size * window.devicePixelRatio,
        i = n.x - r / 2 * window.devicePixelRatio,
        l = n.y - 1.2 * r * window.devicePixelRatio;
      e.globalAlpha = n.opacity, e.drawImage(t, r / 2 + i, r / 2 + l, r, r)
    })(b, j, e)), a.lastUpdatedAt + f.FO < Date.now() && (0, s.ZZ)(x, a), a.state !== u.f.STOP || Object.keys(null != (r = m.getState().particles[a.id]) ? r : {}).length > 0 || E.push(a), b.restore()
}