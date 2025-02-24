/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => h
}), n(47120);
var r, i = n(442837),
  o = n(570140);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let s = new Map,
  l = new Set,
  c = new Set;

function u() {
  s = new Map, l = new Set, c = new Set
}

function d(e) {
  let {
    applicationIds: t
  } = e;
  t.forEach(e => {
    l.add(e), c.delete(e)
  })
}

function f(e) {
  let {
    applicationIds: t,
    supplementalGameData: n
  } = e;
  t.forEach(e => {
    l.delete(e), c.delete(e)
  }), n.forEach(e => {
    let {
      application_id: t,
      name: n,
      summary: r,
      websites: i,
      themes: o,
      genres: a,
      platforms: l,
      artwork_urls: c,
      screenshot_urls: u,
      cover_image_url: d,
      first_release_date: f,
      summary_localized: p,
      publisher_names: _,
      developer_names: h
    } = e;
    s.set(t, {
      applicationId: t,
      name: n,
      summary: r,
      summaryLocalized: p,
      websites: i,
      themes: o,
      genres: a,
      platforms: l,
      artwork: c,
      screenshots: u,
      coverImageUrl: d,
      firstReleaseDate: f,
      publishers: null != _ ? _ : [],
      developers: null != h ? h : []
    })
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
class _ extends(r = i.ZP.Store) {
  canFetch(e) {
    return !l.has(e) && !c.has(e) && !s.has(e)
  }
  isFetching(e) {
    return l.has(e)
  }
  getGame(e) {
    return s.get(e)
  }
  getGames(e) {
    return e.map(e => s.get(e))
  }
  getLocalizedName(e) {
    var t;
    return null === (t = s.get(e)) || void 0 === t ? void 0 : t.name
  }
  getThemes(e) {
    var t;
    return null === (t = s.get(e)) || void 0 === t ? void 0 : t.themes
  }
  getCoverImageUrl(e, t) {
    var n;
    let r = null === (n = s.get(e)) || void 0 === n ? void 0 : n.coverImageUrl;
    return null == r ? null : null == t ? r : "".concat(r, "?width=").concat(t.width, "&height=").concat(t.height)
  }
}
a(_, "displayName", "DetectableGameSupplementalStore");
let h = new _(o.Z, {
  LOGOUT: u,
  DETECTABLE_GAME_SUPPLEMENTAL_FETCH: d,
  DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS: f,
  DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE: p
})