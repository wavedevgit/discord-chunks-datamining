/** Chunk was on web.js **/
/** chunk id: 366050, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var o, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js");

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

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = new Map,
  h = {},
  g = Chunk981631.VD2.BOTTOM_RIGHT,
  E = {
    [Chunk354459.cL.VIDEO]: Chunk354459.l8[Chunk354459.cL.VIDEO],
    [Chunk354459.cL.CAMERA_PREVIEW]: Chunk354459.l8[Chunk354459.cL.CAMERA_PREVIEW]
  };

function b(e) {
  var t, n;
  let {
    id: o,
    component: s,
    props: l
  } = e;
  if (null != m.get(o)) return;
  let u = {
    id: o,
    component: s,
    position: null != (t = l.position) ? t : g,
    props: l,
    docked: null != (n = l.docked) && n
  };
  m.set(o, u), s === c.NYg.VIDEO ? null == r && (r = o) : s === c.NYg.ACTIVITY ? null == i && (i = o) : s === c.NYg.FRAME && null == a && (a = o)
}

function y(e) {
  let {
    id: t
  } = e;
  if (!m.has(t)) returnfalse;
  {
    m.delete(t);
    let e = Array.from(m.keys());
    r === t ? r = e.find(e => {
      let t = m.get(e);
      return null != t && t.component === c.NYg.VIDEO
    }) : i === t ? i = e.find(e => {
      let t = m.get(e);
      return null != t && t.component === c.NYg.ACTIVITY
    }) : a === t && (a = e.find(e => {
      let t = m.get(e);
      return null != t && t.component === c.NYg.FRAME
    }))
  }
}

function O(e) {
  let {
    id: t,
    position: n
  } = e;
  if (null == t || r !== t && i !== t && a !== t) returnfalse;
  {
    let e = new Map;
    m.forEach((t, r) => {
      e.set(r, _(f({}, t), {
        position: n
      }))
    }), m = e, g = n
  }
}

function v(e) {
  let {
    width: t,
    pipType: n
  } = e;
  E[n] = t
}

function S(e) {
  let {
    id: t,
    rect: n
  } = e;
  h[t] = n
}

function I(e) {
  let {
    id: t
  } = e;
  if (r !== t && i !== t && a !== t) returnfalse;
  {
    let e = m.get(t);
    if (null == e) returnfalse;
    m.set(t, _(f({}, e), {
      hidden: true
    }))
  }
}

function T(e) {
  let {
    id: t
  } = e;
  if (r !== t && i !== t && a !== t) returnfalse;
  {
    let e = m.get(t);
    if (null == e) returnfalse;
    m.set(t, _(f({}, e), {
      hidden: false
    }))
  }
}

function A(e) {
  let {
    id: t
  } = e, n = m.get(t);
  null != n && (n.component === c.NYg.VIDEO ? r = t : n.component === c.NYg.ACTIVITY ? i = t : n.component === c.NYg.FRAME && (a = t))
}

function C() {
  r = null, i = null, a = null, m = new Map
}
class N extends(o = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null == e) {
      g = c.VD2.BOTTOM_RIGHT, E = {
        [u.cL.VIDEO]: u.l8[u.cL.VIDEO],
        [u.cL.CAMERA_PREVIEW]: u.l8[u.cL.CAMERA_PREVIEW]
      };
      return
    }
    g = e.openPosition, E = e.pipWidths
  }
  get pipWindow() {
    var e, t;
    return null == r && null == i && null == a ? null : m.get(null != (t = null != (e = null != r ? r : i) ? module : a) ? exports : "")
  }
  get pipVideoWindow() {
    return null == r ? null : m.get(r)
  }
  get pipActivityWindow() {
    return null == i ? null : m.get(i)
  }
  get pipFrameWindow() {
    return null == a ? null : m.get(a)
  }
  get pipWindows() {
    return m
  }
  pipWidth(e) {
    return E[e]
  }
  isEmbeddedActivityHidden() {
    return null == i
  }
  isFrameHidden() {
    return null == a
  }
  getDockedRect(e) {
    return h[e]
  }
  isOpen(e) {
    return null != e && m.has(e)
  }
  getState() {
    return {
      openPosition: g,
      pipWidths: E
    }
  }
}
d(N, "displayName", "PictureInPictureStore"), d(N, "persistKey", "PictureInPictureStore"), d(N, "migrations", [e => {
  var t, n;
  return {
    pipWidths: {
      [u.cL.VIDEO]: null != (t = e.pipWidth) ? t : u.l8[u.cL.VIDEO],
      [u.cL.CAMERA_PREVIEW]: u.l8[u.cL.CAMERA_PREVIEW]
    },
    openPosition: null != (n = e.openPosition) ? n : c.VD2.BOTTOM_RIGHT
  }
}]);
let P = new N(Chunk570140.Z, {
  PICTURE_IN_PICTURE_OPEN: b,
  PICTURE_IN_PICTURE_CLOSE: y,
  PICTURE_IN_PICTURE_MOVE: O,
  PICTURE_IN_PICTURE_RESIZE: v,
  PICTURE_IN_PICTURE_HIDE: I,
  PICTURE_IN_PICTURE_SHOW: T,
  PICTURE_IN_PICTURE_UPDATE_RECT: S,
  PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: A,
  LOGOUT: C
})