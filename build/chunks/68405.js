/** Chunk was on web.js **/
/** chunk id: 68405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PF: () => $,
  R7: () => V,
  Tg: () => Y,
  UU: () => W,
  gK: () => H,
  hM: () => k,
  iy: () => K,
  mO: () => F,
  t1: () => M,
  uL: () => J,
  v2: () => B,
  yC: () => Z
}), require("./704826.js"), require("./35282.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk544891 = require("./544891.js"),
  Chunk377108 = require("./377108.js"),
  Chunk570140 = require("./570140.js"),
  Chunk367907 = require("./367907.js"),
  Chunk690287 = require("./690287.js"),
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
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

function C(e, t) {
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
let N = 250,
  P = /-/g,
  w = "format",
  R = "animated",
  D = "webp",
  x = ".webp",
  L = ".avif",
  j = ".gif";

function M(e) {
  let t = null != e ? {
    [e]: 1
  } : {};
  c.ZP.trackWithMetadata(b.rMx.SEARCH_STARTED, {
    search_type: b.aib.GIF,
    load_id: _.Z.getAnalyticsID(),
    num_modifiers: Object.keys(t).length,
    modifiers: t,
    gif_provider: (0, u.eE)()
  })
}

function k(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  var {
    startTime: r
  } = n, i = C(n, ["startTime"]);
  let a = {
      offset: 0,
      limit: null,
      totalResults: e.length
    },
    o = (0, m._2)(_.Z.getAnalyticsID(), t, T(S({}, a, i), {
      results: e.length
    })),
    s = null == r ? {} : {
      load_duration_ms: Date.now() - r
    };
  c.ZP.trackWithMetadata(b.rMx.SEARCH_RESULT_VIEWED, T(S({}, o, s), {
    gif_provider: (0, u.eE)()
  }))
}

function U(e, t, n) {
  let r = Date.now();
  M(t), o.tn.get({
    url: b.ANM.GIFS_SEARCH,
    query: {
      q: e,
      media_format: _.Z.getSelectedFormat(),
      provider: (0, u.eE)(),
      locale: f.default.locale,
      limit: n
    },
    oldFormErrors: true,
    rejectWithError: true
  }).then(i => {
    let a = i.body;
    k(a, t, {
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
let G = i().debounce(U, N);

function Z(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 ? arguments[3] : true;
  "" === e ? B() : (l.Z.dispatch({
    type: "GIF_PICKER_QUERY",
    query: e
  }), n ? U(e, t, r) : G(e, t, r))
}

function F(e) {
  "" !== e && null != e && o.tn.get({
    url: b.ANM.GIFS_SUGGEST,
    query: {
      q: e,
      provider: (0, u.eE)(),
      limit: 5,
      locale: f.default.locale
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

function B() {
  l.Z.dispatch({
    type: "GIF_PICKER_QUERY",
    query: ""
  })
}

function V(e) {
  let {
    type: t,
    index: n,
    offset: r,
    limit: i,
    results: a,
    totalResults: s,
    query: l,
    gifId: d
  } = e, f = (0, m._2)(_.Z.getAnalyticsID(), t, {
    offset: r,
    limit: i,
    results: a,
    totalResults: s
  });
  if (c.ZP.trackWithMetadata(b.rMx.SEARCH_RESULT_SELECTED, T(S({}, f), {
      index_num: n,
      source_object: "GIF Picker",
      query: l
    })), null != d) {
    let e = (0, u.eE)();
    o.tn.post({
      url: b.ANM.GIFS_SELECT,
      body: {
        id: d,
        q: l,
        provider: e
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}

function H() {
  let e = (0, a.Z)().replace(P, "");
  c.ZP.trackWithMetadata(b.rMx.SEARCH_OPENED, {
    search_type: b.aib.GIF,
    load_id: e
  }), l.Z.wait(() => {
    l.Z.dispatch({
      type: "GIF_PICKER_INITIALIZE",
      analyticsID: e
    })
  })
}

function Y() {
  o.tn.get({
    url: b.ANM.GIFS_TRENDING,
    query: {
      provider: (0, u.eE)(),
      locale: f.default.locale,
      media_format: _.Z.getSelectedFormat()
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

function W(e) {
  let t = Date.now();
  M(b.wI2.TRENDING_GIFS), o.tn.get({
    url: b.ANM.GIFS_TRENDING_GIFS,
    query: {
      media_format: _.Z.getSelectedFormat(),
      provider: (0, u.eE)(),
      locale: f.default.locale,
      limit: e
    },
    oldFormErrors: true,
    rejectWithError: true
  }).then(n => {
    let {
      body: r
    } = n;
    k(r, b.wI2.TRENDING_GIFS, {
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

function K(e) {
  let t = g.Z.toURLSafe(e);
  return null == t ? e : (0, d.MO)(t) ? (0, d.q5)(t).toString() : e
}

function z(e) {
  let t = g.Z.toURLSafe(e.src);
  return null != t && ((0, d._M)(t) || (0, d.MO)(t))
}

function q(e) {
  return z(e) && null != e.gifSrc ? e.gifSrc : e.src
}

function Q(e) {
  let t = g.Z.toURLSafe(e);
  if (null == t) returnfalse;
  let n = t.pathname.toLowerCase();
  return n.endsWith(x) || n.endsWith(L) || n.endsWith(j)
}

function X(e) {
  let t = g.Z.toURLSafe(e);
  if (null == t) return e;
  let n = t.pathname.toLowerCase(),
    r = n.endsWith(x),
    i = n.endsWith(L),
    a = n.endsWith(j);
  return r || i || a ? ((i || a) && t.searchParams.set(w, D), t.searchParams.set(R, "true"), t.toString()) : e
}

function J(e) {
  p.DZ.updateAsync("favoriteGifs", t => {
    var n;
    let r = null != (n = i().max(Object.values(t.gifs).map(e => e.order))) ? n : 0,
      a = q(e),
      o = z(e) && Q(a),
      l = o ? X(a) : a,
      c = o ? s.EO.IMAGE : e.format;
    if (t.gifs[K(e.url)] = T(S({}, e), {
        src: l,
        format: c,
        order: r + 1
      }), s.wK.toBinary(t).length > y.vY) return E.Z.show({
      title: O.intl.string(O.t["+XYXtZ"]),
      body: O.intl.string(O.t.YSDH9n)
    }), false;
    let u = i().size(t.gifs);
    u > 2 && (t.hideTooltip = true), h.default.track(b.rMx.GIF_FAVORITED, {
      total_num_favorited: u
    })
  }, y.fy.INFREQUENT_USER_ACTION)
}

function $(e) {
  p.DZ.updateAsync("favoriteGifs", t => {
    e in t.gifs ? delete t.gifs[e] : delete t.gifs[K(e)], h.default.track(b.rMx.GIF_UNFAVORITED, {
      total_num_favorited: i().size(t.gifs)
    })
  }, y.fy.INFREQUENT_USER_ACTION)
}