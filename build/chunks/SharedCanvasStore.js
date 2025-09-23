/** Chunk was on 47387 **/
/** chunk id: 673125, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  E = {},
  g = {},
  b = true,
  S = null;

function v(e) {
  if (null == E[e]) {
    let t = o.default.getUser(e);
    if (null == t) return;
    let n = t.getAvatarURL(null, d.Ks),
      r = new Image;
    r.src = n, E[e] = r
  }
}
class O extends(r = Chunk442837.ZP.Store) {
  get visibleOverlayCanvas() {
    return b
  }
  getDrawables(e) {
    return null != m[e] ? m[e] : []
  }
  getAvatarImage(e) {
    return E[e]
  }
  getEmojiImage(e) {
    return g[e]
  }
  getDrawMode() {
    return S
  }
}
f(O, "displayName", "SharedCanvasStore");
let h = new O(Chunk570140.Z, {
  SHARED_CANVAS_UPDATE_LINE_POINTS: function(e) {
    let {
      lineId: t,
      newPoints: n,
      userId: r,
      streamerId: l
    } = e, i = m[l];
    if (null == i) m[l] = [{
      type: s.W.LINE,
      id: t,
      userId: r,
      points: n
    }];
    else {
      let e = i.find(e => e.id === t);
      null == e ? i.push({
        type: s.W.LINE,
        id: t,
        userId: r,
        points: n
      }) : (0, c.P7)(e) && e.points.push(...n)
    }
    v(r)
  },
  SHARED_CANVAS_UPDATE_EMOJI_HOSE: function(e) {
    var t, n, r, l, i;
    let {
      emojiHose: o,
      streamerId: c,
      userId: f
    } = e, E = (l = p({}, o), i = i = {
      type: s.W.EMOJI_HOSE
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
    if (null == m[c]) m[c] = [E];
    else {
      let e = m[c].findIndex(e => e.id === o.id);
      e >= 0 ? m[c][e] = p({}, m[c][e], E) : m[c].push(E)
    }
    let b = null != (n = null != (t = o.emojiId) ? t : o.emojiName) ? n : "";
    if (null == g[b]) {
      let e = null != o.emojiName ? a.ZP.convertNameToSurrogate(o.emojiName) : null;
      g[b] = new Image, g[b].src = (0, u.qc)({
        id: o.emojiId,
        name: null != (r = null != e ? e : o.emojiName) ? r : "",
        animated: false
      }, d.qh)
    }
    v(f)
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
    S = t
  },
  TOGGLE_OVERLAY_CANVAS: function(e) {
    let {} = e;
    b = !b
  }
})