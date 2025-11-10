/** Chunk was on web.js **/
/** chunk id: 669764, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Map,
  l = new Set,
  c = new Set,
  u = new Set;

function d() {
  s = new Map, l = new Set, c = new Set, u = new Set
}

function f(e) {
  let {
    applicationIds: t
  } = e;
  t.forEach(e => {
    l.add(e), c.delete(e)
  })
}

function _(e) {
  let {
    applicationIds: t,
    supplementalGameData: n
  } = e, r = new Set(t);
  t.forEach(e => {
    l.delete(e), c.delete(e)
  }), n.forEach(e => {
    let {
      application_id: t,
      name: n,
      summary: i,
      websites: a,
      themes: o,
      genres: l,
      platforms: c,
      artwork_urls: u,
      screenshot_urls: d,
      icon_hash: f,
      cover_image_url: _,
      first_release_date: p,
      summary_localized: h,
      publisher_names: m,
      developer_names: g
    } = e;
    r.delete(t), s.set(t, {
      applicationId: t,
      name: n,
      summary: i,
      summaryLocalized: h,
      websites: a,
      themes: o,
      genres: l,
      platforms: c,
      artwork: u,
      screenshots: d,
      iconHash: f,
      coverImageUrl: _,
      firstReleaseDate: p,
      publishers: null != m ? m : [],
      developers: null != g ? g : []
    })
  }), r.forEach(e => {
    s.has(e) || u.add(e)
  })
}

function p(e) {
  let {
    applicationIds: t
  } = e;
  t.forEach(e => {
    l.delete(e), c.add(e)
  })
}
class h extends(r = Chunk442837.ZP.Store) {
  canFetch(e) {
    return !l.has(e) && !c.has(e) && !s.has(e) && !u.has(e)
  }
  isFetching(e) {
    return l.has(e)
  }
  didFetchingFail(e) {
    return c.has(e)
  }
  getGame(e) {
    return s.get(e)
  }
  getGames(e) {
    return e.map(e => s.get(e))
  }
  getLocalizedName(e) {
    var t;
    return null == (t = s.get(e)) ? true : t.name
  }
  getThemes(e) {
    var t;
    return null == (t = s.get(e)) ? true : t.themes
  }
  getCoverImageUrl(e, t) {
    var n;
    let r = null == (n = s.get(e)) ? true : n.coverImageUrl;
    return null == r ? null : null == t ? r : "".concat(r, "?width=").concat(t.width, "&height=").concat(t.height)
  }
  noDataAvailable(e) {
    return u.has(e)
  }
  numNoDataAvailable() {
    return u.size
  }
  numSupplementalGames() {
    return s.size
  }
}
o(h, "displayName", "DetectableGameSupplementalStore");
let m = new h(Chunk570140.Z, {
  LOGOUT: d,
  DETECTABLE_GAME_SUPPLEMENTAL_FETCH: f,
  DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS: _,
  DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE: p
})