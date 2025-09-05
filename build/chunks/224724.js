/** Chunk was on web.js **/
/** chunk id: 224724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk836197 = require("./836197.js"),
  Chunk621853 = require("./621853.js"),
  Chunk86419 = require("./86419.js");
let d = null,
  f = null,
  _ = false,
  p = {
    suggestedGamesIds: [],
    suggestedWishlistGamesIds: []
  },
  h = false,
  m = false,
  g = false;

function E(e) {
  let {
    widgets: t
  } = e;
  if (d = t, null === f) {
    let e = s.default.getCurrentUser();
    if (null != e) {
      var n;
      let t = c.Z.getUserProfile(e.id);
      f = null != (n = null == t ? true : t.widgets) ? n : []
    }
  }
}

function b() {
  d = null, f = null
}

function y(e) {
  let {
    suggestedGamesIds: t,
    suggestedWishlistGamesIds: n
  } = e;
  p.suggestedGamesIds = t, p.suggestedWishlistGamesIds = n, m = false, h = false
}

function O() {
  h = true, m = false
}

function v() {
  m = true, h = false, g = true
}

function I(e) {
  _ = true
}

function T(e) {
  _ = false, null !== d && (f = null, d = null)
}

function S(e) {
  _ = false
}

function A(e) {
  let {
    applicationId: t
  } = e;
  p.suggestedGamesIds = p.suggestedGamesIds.filter(e => e !== t), p.suggestedWishlistGamesIds = p.suggestedWishlistGamesIds.filter(e => e !== t)
}
class C extends Chunk442837.ZP.Store {
  getPendingWidgets() {
    return d
  }
  getSaveablePendingWidgets() {
    return null == d ? null : d.filter(e => !(0, l.W)(e) || e.games.length > 0)
  }
  hasPendingChanges() {
    return null !== d && (null === f || !i().isEqual(d, f))
  }
  hasSaveablePendingChanges() {
    let e = this.getSaveablePendingWidgets();
    if (null == module) returnfalse;
    if (null == f) returntrue;
    let t = new Map(f.map(e => [e.id, e])),
      n = new Map(module.map(e => [e.id, e]));
    for (let [e, r] of require) {
      let n = exports.get(module);
      if (null == require || (0, Chunk836197.W)(Chunk392711) && (0, Chunk836197.W)(require) && !(0, Chunk86419.ou)(Chunk392711.games, require.games, Chunk392711.type)) returntrue
    }
    for (let [e] of exports)
      if (!require.has(module)) returntrue;
    for (let t = 0; exports < module.length; exports++) {
      var r, i;
      if ((null == (r = module[exports]) ? true : Chunk392711.id) !== (null == (i = f[exports]) ? true : i.id)) returntrue
    }
    returnfalse
  }
  get isSubmitting() {
    return _
  }
  get suggestedFetchError() {
    return h
  }
  get suggestedFetchIsLoading() {
    return m
  }
  get suggestedFetchAttempted() {
    return g
  }
  get suggestedGameIds() {
    return p
  }
}
let N = new C(Chunk570140.Z, {
  WIDGET_PENDING_SET: E,
  WIDGET_PENDING_SAVE_START: I,
  WIDGET_PENDING_SAVE_SUCCESS: T,
  WIDGET_PENDING_SAVE_FAILURE: S,
  WIDGET_SUGGESTED_FETCH_SUCCESS: y,
  WIDGET_SUGGESTED_FETCH_FAILURE: O,
  WIDGET_SUGGESTED_FETCH_START: v,
  WIDGET_PENDING_CLEAR: b,
  WIDGET_SUGGESTED_REMOVE_GAME: A
})