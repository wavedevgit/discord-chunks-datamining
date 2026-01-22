/** Chunk was on 21738 **/
/** chunk id: 38894, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk533129 = require("./533129.js"),
  Chunk403362 = require("./403362.js"),
  Chunk670412 = require("./670412.js"),
  Chunk351022 = require("./351022.js"),
  Chunk965660 = require("./965660.js"),
  Chunk383470 = require("./383470.jsx"),
  Chunk166641 = require("./166641.jsx"),
  Chunk324580 = require("./324580.js");

function h(e) {
  let {
    onScroll: t,
    onGuildCardSeen: n,
    onGuildCardClick: a
  } = e, s = (0, l.bG)([c.A], () => {
    var e;
    return null != (e = c.A.getGuildIds({
      categoryId: f.Iq
    })) ? e : f.VX
  }), u = (0, l.bG)([c.A], () => {
    var e;
    return null == (e = c.A.getIsFetching({
      categoryId: f.Iq
    })) || e
  });
  return i.useEffect(() => {
    o.A.fetchFeaturedGuilds()
  }, []), (0, r.jsx)(d.A, {
    tab: f.o.FEATURED,
    guildIds: s,
    loading: u,
    onScroll: t,
    onGuildCardSeen: n,
    onGuildCardClick: a
  })
}

function A(e) {
  let {
    tab: t,
    onScroll: n,
    onGuildCardSeen: a,
    onGuildCardClick: s
  } = e, p = (0, u.Ub)(t), h = (0, l.bG)([c.A], () => {
    var e;
    return null != (e = c.A.getGuildIds({
      categoryId: p
    })) ? e : f.VX
  }), A = (0, l.bG)([c.A], () => {
    var e;
    return null == (e = c.A.getIsFetching({
      categoryId: p
    })) || e
  });
  return i.useEffect(() => {
    o.A.fetchCategoryFeaturedGuilds({
      categoryId: p
    })
  }, [p]), (0, r.jsx)(d.A, {
    tab: t,
    guildIds: h,
    loading: A,
    onScroll: n,
    onGuildCardSeen: a,
    onGuildCardClick: s
  })
}

function g(e) {
  let {
    selectedTab: t,
    onScroll: n,
    onGuildCardSeen: l,
    onGuildCardClick: o
  } = e;
  switch (i.useEffect(() => {
      let e = (0, u.Ub)(t);
      (0, a.np)({
        selectedCategoryId: e
      })
    }, [t]), t) {
    case f.o.FEATURED:
      return (0, r.jsx)(h, {
        tab: t,
        onScroll: n,
        onGuildCardClick: o,
        onGuildCardSeen: l
      });
    case f.o.GAMING:
    case f.o.MUSIC:
    case f.o.ENTERTAINMENT:
    case f.o.TECH:
    case f.o.EDUCATION:
      return (0, r.jsx)(A, {
        tab: t,
        onScroll: n,
        onGuildCardClick: o,
        onGuildCardSeen: l
      }, t);
    case f.o.HUBS:
      return (0, r.jsx)(p.A, {
        onScroll: n
      });
    default:
      (0, s.xb)(t)
  }
}