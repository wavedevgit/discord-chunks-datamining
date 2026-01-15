/** Chunk was on web.js **/
/** chunk id: 366050, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o;
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var s, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js");

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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = new Map,
  g = {},
  E = Chunk981631.VD2.BOTTOM_RIGHT,
  b = {
    [Chunk354459.cL.VIDEO]: Chunk354459.l8[Chunk354459.cL.VIDEO],
    [Chunk354459.cL.CAMERA_PREVIEW]: Chunk354459.l8[Chunk354459.cL.CAMERA_PREVIEW],
    [Chunk354459.cL.HAVEN]: Chunk354459.l8[Chunk354459.cL.HAVEN]
  };

function y(e) {
  var t, n;
  let {
    id: s,
    component: l,
    props: c
  } = e;
  if (null != m.get(s)) return;
  let d = {
    id: s,
    component: l,
    position: null != (t = c.position) ? t : E,
    props: c,
    docked: null != (n = c.docked) && n
  };
  m.set(s, d), l === u.NYg.VIDEO ? null == r && (r = s) : l === u.NYg.ACTIVITY ? null == i && (i = s) : l === u.NYg.FRAME ? null == a && (a = s) : l === u.NYg.HAVEN && null == o && (o = s)
}

function O(e) {
  let {
    id: t
  } = e;
  if (!m.has(t)) returnfalse;
  {
    m.delete(t);
    let e = Array.from(m.keys());
    r === t ? r = e.find(e => {
      let t = m.get(e);
      return null != t && t.component === u.NYg.VIDEO
    }) : i === t ? i = e.find(e => {
      let t = m.get(e);
      return null != t && t.component === u.NYg.ACTIVITY
    }) : a === t ? a = e.find(e => {
      let t = m.get(e);
      return null != t && t.component === u.NYg.FRAME
    }) : o === t && (o = e.find(e => {
      let t = m.get(e);
      return null != t && t.component === u.NYg.HAVEN
    }))
  }
}

function v(e) {
  let {
    id: t,
    position: n
  } = e;
  if (null == t || r !== t && i !== t && a !== t && o !== t) returnfalse;
  {
    let e = new Map;
    m.forEach((t, r) => {
      e.set(r, h(p({}, t), {
        position: n
      }))
    }), m = e, E = n
  }
}

function S(e) {
  let {
    width: t,
    pipType: n
  } = e;
  b[n] = t
}

function I(e) {
  let {
    id: t,
    rect: n
  } = e;
  g[t] = n
}

function T(e) {
  let {
    id: t
  } = e;
  if (r !== t && i !== t && a !== t && o !== t) returnfalse;
  {
    let e = m.get(t);
    if (null == e) returnfalse;
    m.set(t, h(p({}, e), {
      hidden: true
    }))
  }
}

function C(e) {
  let {
    id: t
  } = e;
  if (r !== t && i !== t && a !== t && o !== t) returnfalse;
  {
    let e = m.get(t);
    if (null == e) returnfalse;
    m.set(t, h(p({}, e), {
      hidden: false
    }))
  }
}

function A(e) {
  let {
    id: t
  } = e, n = m.get(t);
  null != n && (n.component === u.NYg.VIDEO ? r = t : n.component === u.NYg.ACTIVITY ? i = t : n.component === u.NYg.FRAME ? a = t : n.component === u.NYg.HAVEN && (o = t))
}

function N() {
  r = null, i = null, a = null, o = null, m = new Map
}
class P extends(s = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null == e) {
      var t;
      E = u.VD2.BOTTOM_RIGHT, b = {
        [d.cL.VIDEO]: d.l8[d.cL.VIDEO],
        [d.cL.CAMERA_PREVIEW]: d.l8[d.cL.CAMERA_PREVIEW],
        [d.cL.HAVEN]: null != (t = d.l8[d.cL.HAVEN]) ? t : d.l8[d.cL.VIDEO]
      };
      return
    }
    E = e.openPosition, b = e.pipWidths
  }
  get pipWindow() {
    var e, t, n;
    return null == r && null == i && null == a && null == o ? null : m.get(null != (n = null != (t = null != (e = null != r ? r : i) ? e : a) ? t : o) ? n : "")
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
  get pipHavenWindow() {
    return null == o ? null : m.get(o)
  }
  get pipWindows() {
    return m
  }
  pipWidth(e) {
    return b[e]
  }
  isEmbeddedActivityHidden() {
    return null == i
  }
  isFrameHidden() {
    return null == a
  }
  getDockedRect(e) {
    return g[e]
  }
  isOpen(e) {
    return null != e && m.has(e)
  }
  getState() {
    return {
      openPosition: E,
      pipWidths: b
    }
  }
}
f(P, "displayName", "PictureInPictureStore"), f(P, "persistKey", "PictureInPictureStore"), f(P, "migrations", [e => {
  var t, n, r;
  return {
    pipWidths: {
      [d.cL.VIDEO]: null != (t = e.pipWidth) ? t : d.l8[d.cL.VIDEO],
      [d.cL.CAMERA_PREVIEW]: d.l8[d.cL.CAMERA_PREVIEW],
      [d.cL.HAVEN]: null != (n = d.l8[d.cL.HAVEN]) ? n : d.l8[d.cL.VIDEO]
    },
    openPosition: null != (r = e.openPosition) ? r : u.VD2.BOTTOM_RIGHT
  }
}]);
let w = new P(Chunk570140.Z, {
  PICTURE_IN_PICTURE_OPEN: y,
  PICTURE_IN_PICTURE_CLOSE: O,
  PICTURE_IN_PICTURE_MOVE: v,
  PICTURE_IN_PICTURE_RESIZE: S,
  PICTURE_IN_PICTURE_HIDE: T,
  PICTURE_IN_PICTURE_SHOW: C,
  PICTURE_IN_PICTURE_UPDATE_RECT: I,
  PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: A,
  LOGOUT: N
})