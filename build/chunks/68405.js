/** Chunk was on web.js **/
/** chunk id: 68405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PF: () => J,
  R7: () => B,
  Tg: () => H,
  UU: () => Y,
  gK: () => V,
  hM: () => M,
  iy: () => W,
  mO: () => Z,
  t1: () => j,
  uL: () => X,
  v2: () => F,
  yC: () => G
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

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = C(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let A = 250,
  N = /-/g,
  P = "format",
  R = "animated",
  w = "webp",
  D = ".webp",
  x = ".avif",
  L = ".gif";

function j(e) {
  let t = null != e ? {
    [e]: 1
  } : {};
  c.ZP.trackWithMetadata(E.rMx.SEARCH_STARTED, {
    search_type: E.aib.GIF,
    load_id: p.Z.getAnalyticsID(),
    num_modifiers: Object.keys(t).length,
    modifiers: t
  })
}

function M(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  var {
    startTime: r
  } = n, i = T(n, ["startTime"]);
  let a = {
      offset: 0,
      limit: null,
      totalResults: e.length
    },
    o = (0, m._2)(p.Z.getAnalyticsID(), t, I(v({}, a, i), {
      results: e.length
    })),
    s = null == r ? {} : {
      load_duration_ms: Date.now() - r
    };
  c.ZP.trackWithMetadata(E.rMx.SEARCH_RESULT_VIEWED, v({}, o, s))
}

function k(e, t, n) {
  let r = Date.now();
  j(t), o.tn.get({
    url: E.ANM.GIFS_SEARCH,
    query: {
      q: e,
      media_format: p.Z.getSelectedFormat(),
      provider: "tenor",
      locale: d.default.locale,
      limit: n
    },
    oldFormErrors: true,
    rejectWithError: true
  }).then(i => {
    let a = i.body;
    M(a, t, {
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
let U = i().debounce(k, A);

function G(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 ? arguments[3] : true;
  "" === e ? F() : (l.Z.dispatch({
    type: "GIF_PICKER_QUERY",
    query: e
  }), n ? k(e, t, r) : U(e, t, r))
}

function Z(e) {
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

function F() {
  Chunk570140.Z.dispatch({
    type: "GIF_PICKER_QUERY",
    query: ""
  })
}

function B(e) {
  let {
    type: t,
    index: n,
    offset: r,
    limit: i,
    results: a,
    totalResults: s,
    query: l,
    gifId: u
  } = e, d = (0, m._2)(p.Z.getAnalyticsID(), t, {
    offset: r,
    limit: i,
    results: a,
    totalResults: s
  });
  c.ZP.trackWithMetadata(E.rMx.SEARCH_RESULT_SELECTED, I(v({}, d), {
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

function V() {
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

function H() {
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

function Y(e) {
  let t = Date.now();
  j(E.wI2.TRENDING_GIFS), o.tn.get({
    url: E.ANM.GIFS_TRENDING_GIFS,
    query: {
      media_format: p.Z.getSelectedFormat(),
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
    M(r, E.wI2.TRENDING_GIFS, {
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

function W(e) {
  let t = h.Z.toURLSafe(e);
  return null == t ? e : (0, u.MO)(t) ? (0, u.q5)(t).toString() : e
}

function K(e) {
  let t = h.Z.toURLSafe(e.src);
  return null != t && ((0, u._M)(t) || (0, u.MO)(t))
}

function z(e) {
  return K(e) && null != e.gifSrc ? e.gifSrc : e.src
}

function q(e) {
  let t = h.Z.toURLSafe(e);
  if (null == t) returnfalse;
  let n = t.pathname.toLowerCase();
  return n.endsWith(D) || n.endsWith(x) || n.endsWith(L)
}

function Q(e) {
  let t = h.Z.toURLSafe(e);
  if (null == t) return e;
  let n = t.pathname.toLowerCase(),
    r = n.endsWith(D),
    i = n.endsWith(x),
    a = n.endsWith(L);
  return r || i || a ? ((i || a) && t.searchParams.set(P, w), t.searchParams.set(R, "true"), t.toString()) : e
}

function X(e) {
  f.DZ.updateAsync("favoriteGifs", t => {
    var n;
    let r = null != (n = i().max(Object.values(t.gifs).map(e => e.order))) ? n : 0,
      a = z(e),
      o = K(e) && q(a),
      l = o ? Q(a) : a,
      c = o ? s.EO.IMAGE : e.format;
    if (t.gifs[W(e.url)] = I(v({}, e), {
        src: l,
        format: c,
        order: r + 1
      }), s.wK.toBinary(t).length > b.vY) return g.Z.show({
      title: y.intl.string(y.t["+XYXtZ"]),
      body: y.intl.string(y.t.YSDH9n)
    }), false;
    let u = i().size(t.gifs);
    u > 2 && (t.hideTooltip = true), _.default.track(E.rMx.GIF_FAVORITED, {
      total_num_favorited: u
    })
  }, b.fy.INFREQUENT_USER_ACTION)
}

function J(e) {
  f.DZ.updateAsync("favoriteGifs", t => {
    e in t.gifs ? delete t.gifs[e] : delete t.gifs[W(e)], _.default.track(E.rMx.GIF_UNFAVORITED, {
      total_num_favorited: i().size(t.gifs)
    })
  }, b.fy.INFREQUENT_USER_ACTION)
}