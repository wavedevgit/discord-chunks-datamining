/** Chunk was on 12416 **/
n.d(t, {
  U: () => h,
  Z: () => b
}), n(653041);
var r = n(392711),
  i = n.n(r),
  l = n(772848),
  o = n(15729),
  a = n(731965),
  s = n(125268),
  c = n(673125),
  u = n(984063),
  d = n(88315),
  f = n(199766),
  m = n(813900);
let p = {
    X_OFFSET: 2 * m.qh,
    Y_OFFSET: 25,
    X_SPEED: .5,
    Y_SPEED_MIN: -1,
    Y_SPEED_MAX: -5,
    OPACITY: 1,
    OPACITY_SPEED_MIN: .01,
    OPACITY_SPEED_MAX: .05,
    SIZE_MIN: m.qh / 2,
    SIZE_MAX: m.qh
  },
  h = (0, o.U)(() => ({
    particles: {},
    lastSpawned: {}
  }));

function v(e, t) {
  var n;
  i()(null !== (n = h.getState().particles[e.id]) && void 0 !== n ? n : {}).forEach(t)
}

function b(e) {
  var t, n, r;
  let {
    emojiHose: o,
    context: b,
    canvasWidth: g,
    canvasHeight: y,
    fallbackColor: E,
    outlineColorDark: O,
    outlineColorLight: S,
    streamerId: x,
    deadDrawables: j
  } = e;
  b.save();
  let Z = c.Z.getEmojiImage(null !== (n = null !== (t = o.emojiId) && void 0 !== t ? t : o.emojiName) && void 0 !== n ? n : ""),
    C = (0, d.np)(o.x, g),
    w = (0, d.np)(o.y, y),
    {
      outlineColor: P
    } = (0, d.bg)(o.userId, O, S, E);
  v(o, e => {
    e.x += e.xSpeed * window.devicePixelRatio, e.y += e.ySpeed * window.devicePixelRatio, e.opacity -= e.opacitySpeed, e.opacity <= 0 && (0, a.j)(() => {
      h.setState(t => (delete t.particles[o.id][e.id], 0 === Object.keys(t.particles[o.id]).length && delete t.particles[o.id], t))
    })
  }), ! function(e, t, n) {
    var r;
    let o = null !== (r = h.getState().lastSpawned[e.id]) && void 0 !== r ? r : 0,
      s = Date.now();
    !(o + 100 > s) && e.state !== u.f.STOP && (.8 >= Math.random() || o + 300 < s) && (0, a.j)(() => {
      h.setState(r => {
        var o;
        let a = null !== (o = r.particles[e.id]) && void 0 !== o ? o : {},
          s = i().random(1, 2);
        for (let e = 0; e < s; e++) {
          let e = {
            id: (0, l.Z)(),
            x: t + i().random(-p.X_OFFSET, p.X_OFFSET),
            y: n + i().random(-p.Y_OFFSET, p.Y_OFFSET),
            xSpeed: i().random(-p.X_SPEED, p.X_SPEED),
            ySpeed: i().random(p.Y_SPEED_MIN, p.Y_SPEED_MAX),
            opacity: p.OPACITY,
            opacitySpeed: i().random(p.OPACITY_SPEED_MIN, p.OPACITY_SPEED_MAX),
            size: i().random(p.SIZE_MIN, p.SIZE_MAX)
          };
          a[e.id] = e
        }
        return r.particles[e.id] = a, r.lastSpawned[e.id] = Date.now(), r
      })
    })
  }(o, C, w), (0, f.I)(b, C, w, P, m.q2), (0, f.T)(b, C, w, o.userId), v(o, e => (function(e, t, n) {
    if (null == t) return;
    let r = n.size * window.devicePixelRatio,
      i = n.x - r / 2 * window.devicePixelRatio,
      l = n.y - 1.2 * r * window.devicePixelRatio;
    e.globalAlpha = n.opacity, e.drawImage(t, r / 2 + i, r / 2 + l, r, r)
  })(b, Z, e)), o.lastUpdatedAt + m.FO < Date.now() && (0, s.ZZ)(x, o), o.state === u.f.STOP && !(Object.keys(null !== (r = h.getState().particles[o.id]) && void 0 !== r ? r : {}).length > 0) && j.push(o), b.restore()
}