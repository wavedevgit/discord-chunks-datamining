/** Chunk was on web.js **/
/** chunk id: 224724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk621853 = require("./621853.js"),
  Chunk86419 = require("./86419.js");
let u = null,
  d = null,
  f = false,
  _ = {
    suggestedGamesIds: [],
    suggestedWishlistGamesIds: []
  },
  p = false,
  h = false,
  m = false;

function g(e) {
  let {
    widgets: t
  } = e;
  if (u = t, null === d) {
    let e = s.default.getCurrentUser();
    if (null != e) {
      var n;
      let t = l.Z.getUserProfile(e.id);
      d = null != (n = null == t ? true : t.widgets) ? n : []
    }
  }
}

function E() {
  u = null, d = null
}

function b(e) {
  let {
    suggestedGamesIds: t,
    suggestedWishlistGamesIds: n
  } = e;
  _.suggestedGamesIds = t, _.suggestedWishlistGamesIds = n, h = false, p = false
}

function y() {
  p = true, h = false
}

function O() {
  h = true, p = false, m = true
}

function v(e) {
  f = true
}

function I(e) {
  f = false, null !== u && (d = null, u = null)
}

function T(e) {
  f = false
}

function S(e) {
  let {
    applicationId: t
  } = e;
  _.suggestedGamesIds = _.suggestedGamesIds.filter(e => e !== t), _.suggestedWishlistGamesIds = _.suggestedWishlistGamesIds.filter(e => e !== t)
}
class A extends Chunk442837.ZP.Store {
  getPendingWidgets() {
    return u
  }
  getSaveablePendingWidgets() {
    return null == u ? null : u.filter(e => e.games.length > 0)
  }
  hasPendingChanges() {
    return null !== u && (null === d || !i().isEqual(u, d))
  }
  hasSaveablePendingChanges() {
    let e = this.getSaveablePendingWidgets();
    if (null == module) returnfalse;
    if (null == d) returntrue;
    let t = new Map(d.map(e => [e.id, e])),
      n = new Map(module.map(e => [e.id, e]));
    for (let [e, r] of require) {
      let n = exports.get(module);
      if (null == require || !(0, Chunk86419.ou)(Chunk392711.games, require.games, Chunk392711.type)) returntrue
    }
    for (let [e] of exports)
      if (!require.has(module)) returntrue;
    for (let t = 0; exports < module.length; exports++) {
      var r, i;
      if ((null == (r = module[exports]) ? true : Chunk392711.id) !== (null == (i = d[exports]) ? true : i.id)) returntrue
    }
    returnfalse
  }
  get isSubmitting() {
    return f
  }
  get suggestedFetchError() {
    return p
  }
  get suggestedFetchIsLoading() {
    return h
  }
  get suggestedFetchAttempted() {
    return m
  }
  get suggestedGameIds() {
    return _
  }
}
let C = new A(Chunk570140.Z, {
  WIDGET_PENDING_SET: g,
  WIDGET_PENDING_SAVE_START: v,
  WIDGET_PENDING_SAVE_SUCCESS: I,
  WIDGET_PENDING_SAVE_FAILURE: T,
  WIDGET_SUGGESTED_FETCH_SUCCESS: b,
  WIDGET_SUGGESTED_FETCH_FAILURE: y,
  WIDGET_SUGGESTED_FETCH_START: O,
  WIDGET_PENDING_CLEAR: E,
  WIDGET_SUGGESTED_REMOVE_GAME: S
})