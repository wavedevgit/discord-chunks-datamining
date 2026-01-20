/** Chunk was on 11010 **/
/** chunk id: 673125, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./539854.js"), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk633302 = require("./633302.js"),
  Chunk594174 = require("./594174.js"),
  Chunk176354 = require("./176354.js"),
  Chunk984063 = require("./984063.js"),
  Chunk88315 = require("./88315.js"),
  Chunk813900 = require("./813900.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let g = {},
  m = {},
  b = {},
  h = true,
  v = null;

function E(e) {
  if (null == m[e]) {
    let t = o.default.getUser(e);
    if (null == t) return;
    let n = t.getAvatarURL(null, d.Ks),
      r = new Image;
    r.src = n, m[e] = r
  }
}
class y extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(o.default)
  }
  get visibleOverlayCanvas() {
    return h
  }
  getDrawables(e) {
    return null != g[e] ? g[e] : []
  }
  getAvatarImage(e) {
    return m[e]
  }
  getEmojiImage(e) {
    return b[e]
  }
  getDrawMode() {
    return v
  }
}
f(y, "displayName", "SharedCanvasStore");
let _ = new y(Chunk570140.Z, {
  SHARED_CANVAS_UPDATE_LINE_POINTS: function(e) {
    let {
      lineId: t,
      newPoints: n,
      userId: r,
      streamerId: i
    } = e, l = g[i];
    if (null == l) g[i] = [{
      type: s.W.LINE,
      id: t,
      userId: r,
      points: n
    }];
    else {
      let e = l.find(e => e.id === t);
      null == e ? l.push({
        type: s.W.LINE,
        id: t,
        userId: r,
        points: n
      }) : (0, u.P7)(e) && e.points.push(...n)
    }
    E(r)
  },
  SHARED_CANVAS_UPDATE_EMOJI_HOSE: function(e) {
    var t, n, r, i, l;
    let {
      emojiHose: o,
      streamerId: u,
      userId: f
    } = e, m = (i = p({}, o), l = l = {
      type: s.W.EMOJI_HOSE
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
    }), i);
    if (null == g[u]) g[u] = [m];
    else {
      let e = g[u].findIndex(e => e.id === o.id);
      e >= 0 ? g[u][e] = p({}, g[u][e], m) : g[u].push(m)
    }
    let h = null != (n = null != (t = o.emojiId) ? t : o.emojiName) ? n : "";
    if (null == b[h]) {
      let e = null != o.emojiName ? a.ZP.convertNameToSurrogate(o.emojiName) : null;
      b[h] = new Image, b[h].src = (0, c.qc)({
        id: o.emojiId,
        name: null != (r = null != e ? e : o.emojiName) ? r : "",
        animated: false
      }, d.qh)
    }
    E(f)
  },
  SHARED_CANVAS_CLEAR_DRAWABLES: function(e) {
    let {
      drawables: t,
      streamerId: n
    } = e;
    if (null != g[n]) {
      let e = new Set;
      t.forEach(t => e.add(t.id)), g[n] = g[n].filter(t => !e.has(t.id))
    }
  },
  SHARED_CANVAS_SET_DRAW_MODE: function(e) {
    let {
      drawMode: t
    } = e;
    v = t
  },
  TOGGLE_OVERLAY_CANVAS: function(e) {
    let {} = e;
    h = !h
  }
})