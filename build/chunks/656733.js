/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => k
}), n(704826), n(35282), n(388685);
var r, i = n(442837),
  a = n(377108),
  o = n(570140),
  s = n(868814),
  l = n(981631),
  c = n(388032);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = {
    MP4: "mp4",
    TINYMP4: "tinymp4",
    NANOMP4: "nanomp4",
    WEBM: "webm",
    TINYWEBM: "tinywebm",
    NANOWEBM: "nanowebm"
  },
  h = {
    FIXED_HEIGHT_MP4: "fixed_height.mp4",
    FIXED_HEIGHT_SMALL_MP4: "fixed_height_small.mp4",
    FIXED_WIDTH_MP4: "fixed_width.mp4",
    FIXED_WIDTH_SMALL_MP4: "fixed_width_small.mp4",
    DOWNSIZED_SMALL_MP4: "downsized_small.mp4",
    ORIGINAL_MP4: "original.mp4"
  },
  m = (() => {
    let {
      optimizationsEnabled: e
    } = s.Z.getCurrentConfig({
      location: "GIFPickerViewStore"
    });
    return e ? p.WEBM : p.MP4
  })(),
  g = null,
  E = "",
  b = "",
  y = [],
  O = [],
  v = m,
  I = [],
  T = [];

function S(e) {
  g = e.analyticsID
}

function A(e) {
  "" === (E = e.query) && (b = "", y = [], I = [])
}

function N(e) {
  switch (e) {
    case h.FIXED_HEIGHT_MP4:
    case h.FIXED_HEIGHT_SMALL_MP4:
    case h.FIXED_WIDTH_MP4:
    case h.FIXED_WIDTH_SMALL_MP4:
    case h.DOWNSIZED_SMALL_MP4:
    case h.ORIGINAL_MP4:
    case p.MP4:
    case p.TINYMP4:
    case p.NANOMP4:
    case p.WEBM:
    case p.TINYWEBM:
    case p.NANOWEBM:
      return !0;
    default:
      return !1
  }
}

function C(e) {
  return e.replace(/^https?:/, "")
}

function R(e) {
  if (null != e.query && E === b) return !1;
  null != e.query && (b = e.query), y = e.items.map(e => {
    let {
      width: t,
      height: n,
      src: r,
      gif_src: i,
      url: o,
      id: s
    } = e;
    return {
      width: t,
      height: n,
      src: C(r),
      gifSrc: C(i),
      url: o,
      id: s,
      format: N(v) ? a.EO.VIDEO : a.EO.IMAGE
    }
  })
}

function P(e) {
  let {
    query: t
  } = e;
  if (null == t) return !1;
  b = t, y = []
}

function w(e) {
  let t = e.trendingCategories;
  O = [...null != e.trendingGIFPreview ? [{
    type: l.wI2.TRENDING_GIFS,
    name: c.intl.string(c.t.H6zNFx),
    src: C(e.trendingGIFPreview.src),
    format: a.EO.IMAGE
  }] : [], ...t.map(e => _(d({}, e), {
    src: C(e.src),
    type: l.wI2.TRENDING_CATEGORY,
    format: a.EO.VIDEO
  }))]
}

function D(e) {
  let {
    items: t
  } = e;
  I = t
}

function L(e) {
  let {
    items: t
  } = e;
  T = t
}
class x extends(r = i.ZP.Store) {
  getAnalyticsID() {
    return g
  }
  getQuery() {
    return E
  }
  getResultQuery() {
    return b
  }
  getResultItems() {
    return y
  }
  getTrendingCategories() {
    return O
  }
  getSelectedFormat() {
    return v
  }
  getSuggestions() {
    return I
  }
  getTrendingSearchTerms() {
    return T
  }
}
u(x, "displayName", "GIFPickerViewStore");
let k = new x(o.Z, {
  GIF_PICKER_INITIALIZE: S,
  GIF_PICKER_QUERY: A,
  GIF_PICKER_QUERY_SUCCESS: R,
  GIF_PICKER_QUERY_FAILURE: P,
  GIF_PICKER_TRENDING_FETCH_SUCCESS: w,
  GIF_PICKER_SUGGESTIONS_SUCCESS: D,
  GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: L
})