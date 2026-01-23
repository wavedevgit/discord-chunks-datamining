/** Chunk was on 31748 **/
/** chunk id: 533117, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./321073.js"), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk7584 = require("./7584.js"),
  Chunk287809 = require("./287809.js"),
  Chunk690521 = require("./690521.js"),
  Chunk134753 = require("./134753.js"),
  Chunk666717 = require("./666717.js");

function d(e, t, n) {
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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
require("./824217.js");
let p = {},
  g = {},
  m = {},
  _ = true,
  h = null;

function y(e) {
  if (null == g[e]) {
    let t = o.default.getUser(e);
    if (null == t) return;
    let n = t.getAvatarURL(null, 80),
      r = new Image;
    r.src = n, g[e] = r
  }
}
class A extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.default)
  }
  get visibleOverlayCanvas() {
    return _
  }
  getDrawables(e) {
    return null != p[e] ? p[e] : []
  }
  getAvatarImage(e) {
    return g[e]
  }
  getEmojiImage(e) {
    return m[e]
  }
  getDrawMode() {
    return h
  }
}
d(A, "displayName", "SharedCanvasStore");
let b = new A(Chunk73153.h, {
  SHARED_CANVAS_UPDATE_LINE_POINTS: function(e) {
    let {
      lineId: t,
      newPoints: n,
      userId: r,
      streamerId: l
    } = e, i = p[l];
    if (null == i) p[l] = [{
      type: c.Z.LINE,
      id: t,
      userId: r,
      points: n
    }];
    else {
      let e = i.find(e => e.id === t);
      null == e ? i.push({
        type: c.Z.LINE,
        id: t,
        userId: r,
        points: n
      }) : (0, u.PA)(e) && e.points.push(...n)
    }
    y(r)
  },
  SHARED_CANVAS_UPDATE_EMOJI_HOSE: function(e) {
    var t, n, r, l, i;
    let {
      emojiHose: o,
      streamerId: u,
      userId: d
    } = e, g = (l = f({}, o), i = i = {
      type: c.Z.EMOJI_HOSE
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
    }), l);
    if (null == p[u]) p[u] = [g];
    else {
      let e = p[u].findIndex(e => e.id === o.id);
      e >= 0 ? p[u][e] = f({}, p[u][e], g) : p[u].push(g)
    }
    let _ = null != (t = null != (n = o.emojiId) ? n : o.emojiName) ? t : "";
    if (null == m[_]) {
      let e = null != o.emojiName ? a.Ay.convertNameToSurrogate(o.emojiName) : null;
      m[_] = new Image, m[_].src = (0, s.Ez)({
        id: o.emojiId,
        name: null != (r = null != e ? e : o.emojiName) ? r : "",
        animated: false
      }, 48)
    }
    y(d)
  },
  SHARED_CANVAS_CLEAR_DRAWABLES: function(e) {
    let {
      drawables: t,
      streamerId: n
    } = e;
    if (null != p[n]) {
      let e = new Set;
      t.forEach(t => e.add(t.id)), p[n] = p[n].filter(t => !e.has(t.id))
    }
  },
  SHARED_CANVAS_SET_DRAW_MODE: function(e) {
    let {
      drawMode: t
    } = e;
    h = t
  },
  TOGGLE_OVERLAY_CANVAS: function(e) {
    let {} = e;
    _ = !_
  }
})