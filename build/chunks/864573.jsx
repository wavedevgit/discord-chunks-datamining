/** Chunk was on 67544 **/
/** chunk id: 864573, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk302221 = require("./302221.js"),
  Chunk668826 = require("./668826.js"),
  Chunk359013 = require("./359013.js"),
  Chunk120421 = require("./120421.js"),
  Chunk265513 = require("./265513.js"),
  Chunk284539 = require("./284539.js"),
  Chunk67411 = require("./67411.js"),
  Chunk3072 = require("./3072.js"),
  Chunk477839 = require("./477839.js"),
  Chunk18804 = require("./18804.js"),
  Chunk410757 = require("./410757.js");
let Chunk460665 = require("./460665.js"),
  v = new Image,
  O = ["#FFFFFF", "#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
  j = [Chunk477839.FK.BOUNCE_1, Chunk477839.FK.BOUNCE_2, Chunk477839.FK.BOUNCE_3];

function N(e) {
  return Math.floor(Math.random() * e)
}

function P() {
  return Math.random() > .5 ? 1 : false
}

function _() {
  return a().random(0, O.length - 1)
}

function C(e) {
  var t, n;
  let {
    isPaused: o,
    width: a,
    height: C,
    windowKey: Z
  } = e, w = u.Mq[b.yN.BOUNCING_LOGO], E = (0, s.useRef)(null), S = (0, s.useRef)([]), I = (0, g.eR)(x), k = (0, s.useRef)([]), M = (0, i.e7)([d.Z], () => d.Z.getNumPurchasesForItemUpgrade(b.yN.BOUNCING_LOGO, b.uv.BOUNCING_LOGO_MORE_LOGOS)) + 1, R = (0, i.e7)([d.Z], () => d.Z.hasPurchasedUpgrade(b.yN.BOUNCING_LOGO, b.uv.BOUNCING_LOGO_CORNERS)), A = (0, i.e7)([d.Z], () => d.Z.getNumPurchasesForItemUpgrade(b.yN.BOUNCING_LOGO, b.uv.BOUNCING_LOGO_SPEED)), T = (0, i.e7)([d.Z], () => d.Z.hasPurchasedUpgrade(b.yN.BOUNCING_LOGO, b.uv.BOUNCING_LOGO_COLORS)), L = null != (t = b.SZ[A]) ? t : b.SZ["0"], B = a / 1920 * L, D = C / 1080 * L, [F, U] = (0, p.Z)(b.yN.BOUNCING_LOGO), G = (0, s.useRef)(null != (n = F.count) ? n : 0);
  (0, s.useEffect)(() => {
    var e;
    G.current = null != (e = F.count) ? e : 0
  }, [F.count]), (0, m.Z)(j, G.current), (0, s.useEffect)(() => {
    v.onload = () => {
      k.current = O.map(e => (function(e, t) {
        let n = (0, c.oo)(t),
          r = new OffscreenCanvas(71, 53),
          s = r.getContext("2d");
        if (null == s) return r;
        s.drawImage(e, 0, 0, 71, 53);
        let o = s.getImageData(0, 0, 71, 53);
        for (let e = 0; e < o.data.length; e += 4) o.data[e] *= n.r / 255, o.data[e + 1] *= n.g / 255, o.data[e + 2] *= n.b / 255;
        return s.putImageData(o, 0, 0), r
      })(v, e))
    }, v.src = h
  }, []), (0, s.useEffect)(() => {
    if (!(a < 71) && !(C < 53))
      for (let e = 0; e < M - S.current.length; e++) S.current.push({
        x: N(a - 71),
        y: N(C - 53),
        directionX: P(),
        directionY: P(),
        color: T ? _() : 0
      })
  }, [T, C, M, a]), (0, s.useEffect)(() => {
    S.current.forEach(e => {
      e.x = N(a - 71), e.y = N(C - 53)
    })
  }, [C, a]);
  let W = (0, s.useCallback)(e => {
      S.current.forEach(t => {
        t.x += t.directionX * B * e, t.y += t.directionY * D * e;
        let n = t.x <= 0,
          r = t.x >= a - 71,
          s = t.y <= 0,
          o = t.y >= C - 53;
        n ? t.directionX = 1 : r && (t.directionX = false), s ? t.directionY = 1 : o && (t.directionY = false), (n || r || s || o) && (U({
          count: G.current + 1
        }), T && (t.color = _()))
      })
    }, [T, C, U, B, D, a]),
    K = (0, s.useCallback)(() => {
      S.current.forEach(e => {
        let t = e.x <= 0 || e.x >= a - 71,
          n = e.y <= 0 || e.y >= C - 53;
        (t || n) && ((0, l.KH)(b.yN.BOUNCING_LOGO, w.getPoints(t && n, R, T)), I())
      })
    }, [a, C, w, R, T, I]),
    V = (0, s.useCallback)(() => {
      var e;
      let t = null == (e = E.current) ? true : e.getContext("2d");
      null != t && (t.clearRect(0, 0, a, C), S.current.forEach(e => {
        let {
          x: n,
          y: r,
          color: s
        } = e;
        null != k.current[s] && t.drawImage(k.current[s], 0, 0, 71, 53, n, r, 71, 53)
      }))
    }, [C, a]),
    H = (0, s.useCallback)(e => {
      W(e), K(), V()
    }, [V, K, W]);
  return (0, f.Z)({
    onFrame: H,
    isPaused: o,
    windowKey: Z
  }), <canvas ref={E} className={y.canvas} width={a} height={C} />
}