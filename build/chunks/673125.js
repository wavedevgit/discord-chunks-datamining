/** Chunk was on 12416 **/
n.d(t, {
  Z: () => O
}), n(653041), n(47120);
var r, l = n(442837),
  i = n(570140),
  o = n(633302),
  a = n(594174),
  s = n(176354),
  c = n(984063),
  u = n(88315),
  d = n(813900);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function m(e) {
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
let p = {},
  h = {},
  v = {},
  b = !0,
  g = null;

function y(e) {
  if (null == h[e]) {
    let t = a.default.getUser(e);
    if (null == t) return;
    let n = t.getAvatarURL(null, d.Ks),
      r = new Image;
    r.src = n, h[e] = r
  }
}
class E extends(r = l.ZP.Store) {
  get visibleOverlayCanvas() {
    return b
  }
  getDrawables(e) {
    return null != p[e] ? p[e] : []
  }
  getAvatarImage(e) {
    return h[e]
  }
  getEmojiImage(e) {
    return v[e]
  }
  getDrawMode() {
    return g
  }
}
f(E, "displayName", "SharedCanvasStore");
let O = new E(i.Z, {
  SHARED_CANVAS_UPDATE_LINE_POINTS: function(e) {
    let {
      lineId: t,
      newPoints: n,
      userId: r,
      streamerId: l
    } = e, i = p[l];
    if (null == i) p[l] = [{
      type: c.W.LINE,
      id: t,
      userId: r,
      points: n
    }];
    else {
      let e = i.find(e => e.id === t);
      null == e ? i.push({
        type: c.W.LINE,
        id: t,
        userId: r,
        points: n
      }) : (0, u.P7)(e) && e.points.push(...n)
    }
    y(r)
  },
  SHARED_CANVAS_UPDATE_EMOJI_HOSE: function(e) {
    var t, n, r, l, i;
    let {
      emojiHose: a,
      streamerId: u,
      userId: f
    } = e, h = (l = m({}, a), i = i = {
      type: c.W.EMOJI_HOSE
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
    if (null == p[u]) p[u] = [h];
    else {
      let e = p[u].findIndex(e => e.id === a.id);
      e >= 0 ? p[u][e] = m({}, p[u][e], h) : p[u].push(h)
    }
    let b = null !== (n = null !== (t = a.emojiId) && void 0 !== t ? t : a.emojiName) && void 0 !== n ? n : "";
    if (null == v[b]) {
      let e = null != a.emojiName ? o.ZP.convertNameToSurrogate(a.emojiName) : null;
      v[b] = new Image, v[b].src = (0, s.qc)({
        id: a.emojiId,
        name: null !== (r = null != e ? e : a.emojiName) && void 0 !== r ? r : "",
        animated: !1
      }, d.qh)
    }
    y(f)
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
    g = t
  },
  TOGGLE_OVERLAY_CANVAS: function(e) {
    let {} = e;
    b = !b
  }
})