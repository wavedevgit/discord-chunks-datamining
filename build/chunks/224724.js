/** Chunk was on web.js **/
/** chunk id: 224724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./539854.js");
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
  p = false,
  _ = false,
  m = false;

function h(e) {
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
  f.suggestedGamesIds = t, f.suggestedWishlistGamesIds = n, _ = false, p = false
}

function b() {
  p = true, _ = false
}

function y() {
  _ = true, p = false, m = true
}

function O(e) {
  d = true
}

function v(e) {
  d = false, null !== c && (u = null, c = null)
}

function S(e) {
  d = false
}

function I(e) {
  let {
    applicationId: t
  } = e;
  f.suggestedGamesIds = f.suggestedGamesIds.filter(e => e !== t), f.suggestedWishlistGamesIds = f.suggestedWishlistGamesIds.filter(e => e !== t)
}
class T extends Chunk442837.ZP.Store {
  initialize() {
    this.waitFor(s.default)
  }
  getPendingWidgets() {
    return c
  }
  getSaveablePendingWidgets() {
    return null == c ? null : c.filter(e => !e.isDiscardable())
  }
  hasPendingChanges() {
    return null !== c && (null === u || !i().isEqual(c, u))
  }
  getWidgetUpdates() {
    let e = this.getSaveablePendingWidgets();
    if (null == e || null == u) return {
      changedWidgets: null != e ? e : [],
      removedWidgets: [],
      hasOrderChanges: false
    };
    let t = new Map(u.map(e => [e.id, e])),
      n = new Map(e.map(e => [e.id, e])),
      r = [],
      i = [];
    for (let [e, i] of n) {
      let n = t.get(e);
      null != n && i.isEqual(n) || r.push(i)
    }
    for (let [e, r] of t) n.has(e) || i.push(r);
    let a = false;
    for (let t = 0; t < e.length; t++) {
      var o, s;
      if ((null == (o = e[t]) ? true : o.id) !== (null == (s = u[t]) ? true : s.id)) {
        a = true;
        break
      }
    }
    return {
      changedWidgets: r,
      removedWidgets: i,
      hasOrderChanges: a
    }
  }
  getChangedWidgets() {
    let {
      changedWidgets: e
    } = this.getWidgetUpdates();
    return e
  }
  getRemovedWidgets() {
    let {
      removedWidgets: e
    } = this.getWidgetUpdates();
    return e
  }
  hasUnsavedChanges() {
    let {
      changedWidgets: e,
      removedWidgets: t,
      hasOrderChanges: n
    } = this.getWidgetUpdates();
    return e.length > 0 || t.length > 0 || n
  }
  canSaveChanges() {
    let e = this.getSaveablePendingWidgets();
    return null != e && e.every(e => e.isValid())
  }
  get isSubmitting() {
    return d
  }
  get suggestedFetchError() {
    return p
  }
  get suggestedFetchIsLoading() {
    return _
  }
  get suggestedFetchAttempted() {
    return m
  }
  get suggestedGameIds() {
    return f
  }
}
let C = new T(Chunk570140.Z, {
  WIDGET_PENDING_SET: h,
  WIDGET_PENDING_SAVE_START: O,
  WIDGET_PENDING_SAVE_SUCCESS: v,
  WIDGET_PENDING_SAVE_FAILURE: S,
  WIDGET_SUGGESTED_FETCH_SUCCESS: E,
  WIDGET_SUGGESTED_FETCH_FAILURE: b,
  WIDGET_SUGGESTED_FETCH_START: y,
  WIDGET_PENDING_CLEAR: g,
  WIDGET_SUGGESTED_REMOVE_GAME: I
})