/** Chunk was on web.js **/
/** chunk id: 68405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PF: () => F,
  R7: () => j,
  Tg: () => U,
  UU: () => G,
  gK: () => k,
  hM: () => P,
  iy: () => B,
  mO: () => x,
  t1: () => R,
  uL: () => Z,
  v2: () => M,
  yC: () => L
}), require("./704826.js"), require("./35282.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk544891 = require("./544891.js"),
  Chunk377108 = require("./377108.js"),
  Chunk570140 = require("./570140.js"),
  Chunk367907 = require("./367907.js"),
  Chunk198620 = require("./198620.js"),
  Chunk706454 = require("./706454.js"),
  Chunk675478 = require("./675478.js"),
  Chunk656733 = require("./656733.js"),
  Chunk626135 = require("./626135.js"),
  Chunk708406 = require("./708406.js"),
  Chunk591759 = require("./591759.js"),
  Chunk668781 = require("./668781.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let C = 250,
  N = /-/g;

function R(e) {
  let t = null != e ? {
    [e]: 1
  } : {};
  c.ZP.trackWithMetadata(E.rMx.SEARCH_STARTED, {
    search_type: E.aib.GIF,
    load_id: _.Z.getAnalyticsID(),
    num_modifiers: Object.keys(t).length,
    modifiers: t
  })
}

function P(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  var {
    startTime: r
  } = n, i = S(n, ["startTime"]);
  let a = {
      offset: 0,
      limit: null,
      totalResults: e.length
    },
    o = (0, h._)(_.Z.getAnalyticsID(), t, T(v({}, a, i), {
      results: e.length
    })),
    s = null == r ? {} : {
      load_duration_ms: Date.now() - r
    };
  c.ZP.trackWithMetadata(E.rMx.SEARCH_RESULT_VIEWED, v({}, o, s))
}

function D(e, t, n) {
  let r = Date.now();
  R(t), o.tn.get({
    url: E.ANM.GIFS_SEARCH,
    query: {
      q: e,
      media_format: _.Z.getSelectedFormat(),
      provider: "tenor",
      locale: d.default.locale,
      limit: n
    },
    oldFormErrors: true,
    rejectWithError: true
  }).then(i => {
    let a = i.body;
    P(a, t, {
      startTime: r,
      limit: n
    }), l.Z.dispatch({
      type: "GIF_PICKER_QUERY_SUCCESS",
      query: e,
      items: a
    })
  }, () => l.Z.dispatch({
    type: "GIF_PICKER_QUERY_FAILURE",
    query: e
  }))
}
let w = i().debounce(D, C);

function L(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 ? arguments[3] : true;
  "" === e ? M() : (l.Z.dispatch({
    type: "GIF_PICKER_QUERY",
    query: e
  }), n ? D(e, t, r) : w(e, t, r))
}

function x(e) {
  "" !== e && null != e && o.tn.get({
    url: E.ANM.GIFS_SUGGEST,
    query: {
      q: e,
      provider: "tenor",
      limit: 5,
      locale: d.default.locale
    },
    oldFormErrors: true,
    rejectWithError: true
  }).then(t => {
    let n = t.body;
    l.Z.dispatch({
      type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
      query: e,
      items: n
    })
  })
}

function M() {
  Chunk570140.Z.dispatch({
    type: "GIF_PICKER_QUERY",
    query: ""
  })
}

function j(e) {
  let {
    type: t,
    index: n,
    offset: r,
    limit: i,
    results: a,
    totalResults: s,
    query: l,
    gifId: u
  } = e, d = (0, h._)(_.Z.getAnalyticsID(), t, {
    offset: r,
    limit: i,
    results: a,
    totalResults: s
  });
  c.ZP.trackWithMetadata(E.rMx.SEARCH_RESULT_SELECTED, T(v({}, d), {
    index_num: n,
    source_object: "GIF Picker",
    query: l
  })), null != u && o.tn.post({
    url: E.ANM.GIFS_SELECT,
    body: {
      id: u,
      q: l
    },
    oldFormErrors: true,
    rejectWithError: true
  })
}

function k() {
  let e = (0, Chunk772848.Z)().replace(N, "");
  Chunk367907.ZP.trackWithMetadata(Chunk981631.rMx.SEARCH_OPENED, {
    search_type: Chunk981631.aib.GIF,
    load_id: module
  }), Chunk570140.Z.wait(() => {
    Chunk570140.Z.dispatch({
      type: "GIF_PICKER_INITIALIZE",
      analyticsID: module
    })
  })
}

function U() {
  Chunk544891.tn.get({
    url: Chunk981631.ANM.GIFS_TRENDING,
    query: {
      provider: "tenor",
      locale: Chunk706454.default.locale,
      media_format: Chunk656733.Z.getSelectedFormat()
    },
    oldFormErrors: true,
    rejectWithError: true
  }).then(e => {
    let {
      body: t
    } = e, {
      categories: n,
      gifs: r
    } = t;
    l.Z.dispatch({
      type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
      trendingCategories: n,
      trendingGIFPreview: r[0]
    })
  })
}

function G(e) {
  let t = Date.now();
  R(E.wI2.TRENDING_GIFS), o.tn.get({
    url: E.ANM.GIFS_TRENDING_GIFS,
    query: {
      media_format: _.Z.getSelectedFormat(),
      provider: "tenor",
      locale: d.default.locale,
      limit: e
    },
    oldFormErrors: true,
    rejectWithError: true
  }).then(n => {
    let {
      body: r
    } = n;
    P(r, E.wI2.TRENDING_GIFS, {
      startTime: t,
      limit: e
    }), l.Z.dispatch({
      type: "GIF_PICKER_QUERY_SUCCESS",
      items: r
    })
  }, () => {
    l.Z.dispatch({
      type: "GIF_PICKER_QUERY_FAILURE"
    })
  })
}

function B(e) {
  let t = m.Z.toURLSafe(e);
  return null == t ? e : (0, u.MO)(t) ? (0, u.q5)(t).toString() : e
}

function Z(e) {
  f.DZ.updateAsync("favoriteGifs", t => {
    var n;
    let r = null != (n = i().max(Object.values(t.gifs).map(e => e.order))) ? n : 0;
    if (t.gifs[B(e.url)] = T(v({}, e), {
        order: r + 1
      }), s.wK.toBinary(t).length > b.vY) return g.Z.show({
      title: y.intl.string(y.t["+XYXtZ"]),
      body: y.intl.string(y.t.YSDH9n)
    }), false;
    let a = i().size(t.gifs);
    a > 2 && (t.hideTooltip = true), p.default.track(E.rMx.GIF_FAVORITED, {
      total_num_favorited: a
    })
  }, b.fy.INFREQUENT_USER_ACTION)
}

function F(e) {
  f.DZ.updateAsync("favoriteGifs", t => {
    e in t.gifs ? delete t.gifs[e] : delete t.gifs[B(e)], p.default.track(E.rMx.GIF_UNFAVORITED, {
      total_num_favorited: i().size(t.gifs)
    })
  }, b.fy.INFREQUENT_USER_ACTION)
}