/** Chunk was on web.js **/
/** chunk id: 61881, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
}), require("./896048.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk287809 = require("./287809.js"),
  Chunk622543 = require("./622543.js");
let c = null,
  u = null,
  d = false,
  f = {
    suggestedGamesIds: [],
    suggestedWishlistGamesIds: []
  },
  p = false,
  _ = false,
  h = false;

function m(e) {
  let {
    widgets: t
  } = e;
  if (c = t, null === u) {
    let e = o.default.getCurrentUser();
    if (null != e) {
      var n;
      let t = l.A.getUserProfile(e.id);
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

function y() {
  p = true, _ = false
}

function b() {
  _ = true, p = false, h = true
}

function O(e) {
  d = true
}

function v(e) {
  d = false, null !== c && (u = null, c = null)
}

function A(e) {
  d = false
}

function I(e) {
  let {
    applicationId: t
  } = e;
  f.suggestedGamesIds = f.suggestedGamesIds.filter(e => e !== t), f.suggestedWishlistGamesIds = f.suggestedWishlistGamesIds.filter(e => e !== t)
}
class S extends Chunk311907.Ay.Store {
  initialize() {
    this.waitFor(o.default)
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
      var s, o;
      if ((null == (s = e[t]) ? true : s.id) !== (null == (o = u[t]) ? true : o.id)) {
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
    return h
  }
  get suggestedGameIds() {
    return f
  }
}
let T = new S(Chunk73153.h, {
  WIDGET_PENDING_SET: m,
  WIDGET_PENDING_SAVE_START: O,
  WIDGET_PENDING_SAVE_SUCCESS: v,
  WIDGET_PENDING_SAVE_FAILURE: A,
  WIDGET_SUGGESTED_FETCH_SUCCESS: E,
  WIDGET_SUGGESTED_FETCH_FAILURE: y,
  WIDGET_SUGGESTED_FETCH_START: b,
  WIDGET_PENDING_CLEAR: g,
  WIDGET_SUGGESTED_REMOVE_GAME: I
})