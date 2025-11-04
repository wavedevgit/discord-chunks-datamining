/** Chunk was on 1272 **/
/** chunk id: 590771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk571457 = require("./571457.js"),
  Chunk823379 = require("./823379.js"),
  Chunk275131 = require("./275131.js"),
  Chunk356164 = require("./356164.js"),
  Chunk726115 = require("./726115.js"),
  Chunk962486 = require("./962486.jsx"),
  Chunk149788 = require("./149788.jsx"),
  Chunk128449 = require("./128449.js");

function h(e) {
  let {
    onScroll: t,
    onGuildCardSeen: n,
    onGuildCardClick: a
  } = e, o = (0, l.e7)([c.Z], () => {
    var e;
    return null != (e = c.Z.getGuildIds({
      categoryId: f.Hk
    })) ? e : f.q5
  }), u = (0, l.e7)([c.Z], () => {
    var e;
    return null == (e = c.Z.getIsFetching({
      categoryId: f.Hk
    })) || e
  });
  return i.useEffect(() => {
    s.Z.fetchFeaturedGuilds()
  }, []), (0, r.jsx)(d.Z, {
    tab: f.vf.FEATURED,
    guildIds: o,
    loading: u,
    onScroll: t,
    onGuildCardSeen: n,
    onGuildCardClick: a
  })
}

function g(e) {
  let {
    tab: t,
    onScroll: n,
    onGuildCardSeen: a,
    onGuildCardClick: o
  } = e, p = (0, u.lg)(t), h = (0, l.e7)([c.Z], () => {
    var e;
    return null != (e = c.Z.getGuildIds({
      categoryId: p
    })) ? e : f.q5
  }), g = (0, l.e7)([c.Z], () => {
    var e;
    return null == (e = c.Z.getIsFetching({
      categoryId: p
    })) || e
  });
  return i.useEffect(() => {
    s.Z.fetchCategoryFeaturedGuilds({
      categoryId: p
    })
  }, [p]), (0, r.jsx)(d.Z, {
    tab: t,
    guildIds: h,
    loading: g,
    onScroll: n,
    onGuildCardSeen: a,
    onGuildCardClick: o
  })
}

function m(e) {
  let {
    selectedTab: t,
    onScroll: n,
    onGuildCardSeen: l,
    onGuildCardClick: s
  } = e;
  switch (i.useEffect(() => {
      let e = (0, u.lg)(t);
      (0, a.kR)({
        selectedCategoryId: e
      })
    }, [t]), t) {
    case f.vf.FEATURED:
      return (0, r.jsx)(h, {
        tab: t,
        onScroll: n,
        onGuildCardClick: s,
        onGuildCardSeen: l
      });
    case f.vf.GAMING:
    case f.vf.MUSIC:
    case f.vf.ENTERTAINMENT:
    case f.vf.TECH:
    case f.vf.EDUCATION:
      return (0, r.jsx)(g, {
        tab: t,
        onScroll: n,
        onGuildCardClick: s,
        onGuildCardSeen: l
      }, t);
    case f.vf.HUBS:
      return (0, r.jsx)(p.Z, {
        onScroll: n
      });
    default:
      (0, o.vE)(t)
  }
}