/** Chunk was on 46931 **/
/** chunk id: 673125, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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
let m = {},
  _ = {},
  g = {},
  v = true,
  b = null;

function E(e) {
  if (null == _[e]) {
    let t = o.default.getUser(e);
    if (null == t) return;
    let n = t.getAvatarURL(null, d.Ks),
      r = new Image;
    r.src = n, _[e] = r
  }
}
class h extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default)
  }
  get visibleOverlayCanvas() {
    return v
  }
  getDrawables(e) {
    return null != m[e] ? m[e] : []
  }
  getAvatarImage(e) {
    return _[e]
  }
  getEmojiImage(e) {
    return g[e]
  }
  getDrawMode() {
    return b
  }
}
f(h, "displayName", "SharedCanvasStore");
let y = new h(Chunk570140.Z, {
  SHARED_CANVAS_UPDATE_LINE_POINTS: function(e) {
    let {
      lineId: t,
      newPoints: n,
      userId: r,
      streamerId: i
    } = e, l = m[i];
    if (null == l) m[i] = [{
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
    } = e, _ = (i = p({}, o), l = l = {
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
    if (null == m[u]) m[u] = [_];
    else {
      let e = m[u].findIndex(e => e.id === o.id);
      e >= 0 ? m[u][e] = p({}, m[u][e], _) : m[u].push(_)
    }
    let v = null != (n = null != (t = o.emojiId) ? t : o.emojiName) ? n : "";
    if (null == g[v]) {
      let e = null != o.emojiName ? a.ZP.convertNameToSurrogate(o.emojiName) : null;
      g[v] = new Image, g[v].src = (0, c.qc)({
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
    if (null != m[n]) {
      let e = new Set;
      t.forEach(t => e.add(t.id)), m[n] = m[n].filter(t => !e.has(t.id))
    }
  },
  SHARED_CANVAS_SET_DRAW_MODE: function(e) {
    let {
      drawMode: t
    } = e;
    b = t
  },
  TOGGLE_OVERLAY_CANVAS: function(e) {
    let {} = e;
    v = !v
  }
})