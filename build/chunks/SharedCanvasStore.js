/** Chunk was on 86642 **/
/** chunk id: 673125, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./539854.js"), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk633302 = require("./633302.js"),
  Chunk594174 = require("./594174.js"),
  Chunk176354 = require("./176354.js"),
  Chunk984063 = require("./984063.js"),
  Chunk88315 = require("./88315.js"),
  Chunk813900 = require("./813900.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
let h = {},
  m = {},
  g = {},
  b = true,
  y = null;

function C(e) {
  if (null == m[e]) {
    let t = o.default.getUser(e);
    if (null == t) return;
    let n = t.getAvatarURL(null, d.Ks),
      i = new Image;
    i.src = n, m[e] = i
  }
}
class _ extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default)
  }
  get visibleOverlayCanvas() {
    return b
  }
  getDrawables(e) {
    return null != h[e] ? h[e] : []
  }
  getAvatarImage(e) {
    return m[e]
  }
  getEmojiImage(e) {
    return g[e]
  }
  getDrawMode() {
    return y
  }
}
p(_, "displayName", "SharedCanvasStore");
let v = new _(Chunk570140.Z, {
  SHARED_CANVAS_UPDATE_LINE_POINTS: function(e) {
    let {
      lineId: t,
      newPoints: n,
      userId: i,
      streamerId: r
    } = e, l = h[r];
    if (null == l) h[r] = [{
      type: c.W.LINE,
      id: t,
      userId: i,
      points: n
    }];
    else {
      let e = l.find(e => e.id === t);
      null == e ? l.push({
        type: c.W.LINE,
        id: t,
        userId: i,
        points: n
      }) : (0, u.P7)(e) && e.points.push(...n)
    }
    C(i)
  },
  SHARED_CANVAS_UPDATE_EMOJI_HOSE: function(e) {
    var t, n, i, r, l;
    let {
      emojiHose: o,
      streamerId: u,
      userId: p
    } = e, m = (r = f({}, o), l = l = {
      type: c.W.EMOJI_HOSE
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
    }), r);
    if (null == h[u]) h[u] = [m];
    else {
      let e = h[u].findIndex(e => e.id === o.id);
      e >= 0 ? h[u][e] = f({}, h[u][e], m) : h[u].push(m)
    }
    let b = null != (n = null != (t = o.emojiId) ? t : o.emojiName) ? n : "";
    if (null == g[b]) {
      let e = null != o.emojiName ? a.ZP.convertNameToSurrogate(o.emojiName) : null;
      g[b] = new Image, g[b].src = (0, s.qc)({
        id: o.emojiId,
        name: null != (i = null != e ? e : o.emojiName) ? i : "",
        animated: false
      }, d.qh)
    }
    C(p)
  },
  SHARED_CANVAS_CLEAR_DRAWABLES: function(e) {
    let {
      drawables: t,
      streamerId: n
    } = e;
    if (null != h[n]) {
      let e = new Set;
      t.forEach(t => e.add(t.id)), h[n] = h[n].filter(t => !e.has(t.id))
    }
  },
  SHARED_CANVAS_SET_DRAW_MODE: function(e) {
    let {
      drawMode: t
    } = e;
    y = t
  },
  TOGGLE_OVERLAY_CANVAS: function(e) {
    let {} = e;
    b = !b
  }
})