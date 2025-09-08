/** Chunk was on web.js **/
/** chunk id: 224724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk621853 = require("./621853.js");
let c = null,
  u = null,
  d = false,
  f = {
    suggestedGamesIds: [],
    suggestedWishlistGamesIds: []
  },
  _ = false,
  p = false,
  h = false;

function m(e) {
  let {
    widgets: t
  } = e;
  if (c = t, null === u) {
    let e = s.default.getCurrentUser();
    if (null != e) {
      var n;
      let t = l.Z.getUserProfile(e.id);
      u = null != (n = null == t ? true : t.widgets) ? n : []
    }
  }
}

function g() {
  c = null, u = null
}

function E(e) {
  let {
    suggestedGamesIds: t,
    suggestedWishlistGamesIds: n
  } = e;
  f.suggestedGamesIds = t, f.suggestedWishlistGamesIds = n, p = false, _ = false
}

function b() {
  _ = true, p = false
}

function y() {
  p = true, _ = false, h = true
}

function O(e) {
  d = true
}

function v(e) {
  d = false, null !== c && (u = null, c = null)
}

function I(e) {
  d = false
}

function T(e) {
  let {
    applicationId: t
  } = e;
  f.suggestedGamesIds = f.suggestedGamesIds.filter(e => e !== t), f.suggestedWishlistGamesIds = f.suggestedWishlistGamesIds.filter(e => e !== t)
}
class S extends Chunk442837.ZP.Store {
  getPendingWidgets() {
    return c
  }
  getSaveablePendingWidgets() {
    return null == c ? null : c.filter(e => e.isSaveable())
  }
  hasPendingChanges() {
    return null !== c && (null === u || !i().isEqual(c, u))
  }
  hasSaveablePendingChanges() {
    let e = this.getSaveablePendingWidgets();
    if (null == module) returnfalse;
    if (null == u) returntrue;
    let t = new Map(u.map(e => [e.id, e])),
      n = new Map(module.map(e => [e.id, e]));
    for (let [e, r] of require) {
      let n = exports.get(module);
      if (null == require || !Chunk392711.isEqual(require)) returntrue
    }
    for (let [e] of exports)
      if (!require.has(module)) returntrue;
    for (let t = 0; exports < module.length; exports++) {
      var r, i;
      if ((null == (r = module[exports]) ? true : Chunk392711.id) !== (null == (i = u[exports]) ? true : i.id)) returntrue
    }
    returnfalse
  }
  get isSubmitting() {
    return d
  }
  get suggestedFetchError() {
    return _
  }
  get suggestedFetchIsLoading() {
    return p
  }
  get suggestedFetchAttempted() {
    return h
  }
  get suggestedGameIds() {
    return f
  }
}
let A = new S(Chunk570140.Z, {
  WIDGET_PENDING_SET: m,
  WIDGET_PENDING_SAVE_START: O,
  WIDGET_PENDING_SAVE_SUCCESS: v,
  WIDGET_PENDING_SAVE_FAILURE: I,
  WIDGET_SUGGESTED_FETCH_SUCCESS: E,
  WIDGET_SUGGESTED_FETCH_FAILURE: b,
  WIDGET_SUGGESTED_FETCH_START: y,
  WIDGET_PENDING_CLEAR: g,
  WIDGET_SUGGESTED_REMOVE_GAME: T
})