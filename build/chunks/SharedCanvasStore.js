/** Chunk was on 61344 **/
/** chunk id: 533117, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./321073.js"), require("./896048.js");
var l, Chunk311907 = require("./311907.js"),
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

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
require("./824217.js");
let p = {},
  f = {},
  m = {},
  g = true,
  A = null;

function b(e) {
  if (null == f[e]) {
    let t = s.default.getUser(e);
    if (null == t) return;
    let n = t.getAvatarURL(null, 80),
      l = new Image;
    l.src = n, f[e] = l
  }
}
class _ extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.default)
  }
  get visibleOverlayCanvas() {
    return g
  }
  getDrawables(e) {
    return null != p[e] ? p[e] : []
  }
  getAvatarImage(e) {
    return f[e]
  }
  getEmojiImage(e) {
    return m[e]
  }
  getDrawMode() {
    return A
  }
}
d(_, "displayName", "SharedCanvasStore");
let y = new _(Chunk73153.h, {
  SHARED_CANVAS_UPDATE_LINE_POINTS: function(e) {
    let {
      lineId: t,
      newPoints: n,
      userId: l,
      streamerId: r
    } = e, i = p[r];
    if (null == i) p[r] = [{
      type: c.Z.LINE,
      id: t,
      userId: l,
      points: n
    }];
    else {
      let e = i.find(e => e.id === t);
      null == e ? i.push({
        type: c.Z.LINE,
        id: t,
        userId: l,
        points: n
      }) : (0, u.PA)(e) && e.points.push(...n)
    }
    b(l)
  },
  SHARED_CANVAS_UPDATE_EMOJI_HOSE: function(e) {
    var t, n, l, r, i;
    let {
      emojiHose: s,
      streamerId: u,
      userId: d
    } = e, f = (r = h({}, s), i = i = {
      type: c.Z.EMOJI_HOSE
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
    }), r);
    if (null == p[u]) p[u] = [f];
    else {
      let e = p[u].findIndex(e => e.id === s.id);
      e >= 0 ? p[u][e] = h({}, p[u][e], f) : p[u].push(f)
    }
    let g = null != (t = null != (n = s.emojiId) ? n : s.emojiName) ? t : "";
    if (null == m[g]) {
      let e = null != s.emojiName ? a.Ay.convertNameToSurrogate(s.emojiName) : null;
      m[g] = new Image, m[g].src = (0, o.Ez)({
        id: s.emojiId,
        name: null != (l = null != e ? e : s.emojiName) ? l : "",
        animated: false
      }, 48)
    }
    b(d)
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
    A = t
  },
  TOGGLE_OVERLAY_CANVAS: function(e) {
    let {} = e;
    g = !g
  }
})