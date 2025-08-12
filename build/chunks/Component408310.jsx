/** Chunk was on 21087 **/
/** chunk id: 408310, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk671533 = require("./671533.jsx"),
  Chunk400251 = require("./400251.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk32455 = require("./32455.js"),
  Chunk493070 = require("./493070.js"),
  Chunk176480 = require("./176480.js");
let d = e => {
  let t, {
    searchQuery: n,
    setSearchQuery: d,
    mostRecentQuery: h,
    handleClearSearch: p,
    handleSearchKeyPress: f,
    handleCreateOrAddGuild: g,
    searchResults: m,
    searchFetching: b
  } = e;
  if (b) t = (0, r.jsx)("div", {
    className: o.pageContainer,
    children: (0, r.jsx)(i.$jN, {
      className: o.spinner
    })
  });
  else if (0 === m.length) {
    let e = null != g ? s.intl.format(s.t.qWFupq, {
      addServerHook: function(e, t) {
        return (0, r.jsx)(i.eee, {
          onClick: g,
          children: e
        }, t)
      }
    }) : s.intl.string(s.t.vYyEnp);
    t = (0, r.jsxs)("div", {
      className: c.emptySearchWrapper,
      children: [(0, r.jsx)("img", {
        className: c.emptySearchImage,
        alt: "",
        src: u
      }), (0, r.jsx)(i.X6q, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: c.emptySearchTitle,
        children: s.intl.string(s.t["6HXiuL"])
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: c.emptySearchSubtitle,
        children: e
      })]
    })
  } else t = (0, r.jsx)("div", {
    className: o.cardsContainer,
    children: m.map(e => (0, r.jsx)(a.Z, {
      entry: e
    }, e.guildId))
  });
  return (0, r.jsx)("div", {
    className: o.pageContainer,
    children: (0, r.jsxs)(i.w0Z, {
      className: o.scroller,
      children: [(0, r.jsxs)("div", {
        className: c.searchHeader,
        children: [(0, r.jsxs)("div", {
          className: c.headerTitleWrapper,
          children: [(0, r.jsx)(i.P3F, {
            onClick: p,
            className: c.arrow,
            children: (0, r.jsx)(l.Z, {
              direction: l.Z.Directions.LEFT
            })
          }), (0, r.jsx)(i.X6q, {
            variant: "heading-xl/semibold",
            className: c.searchPageTitle,
            children: s.intl.format(s.t.UkOHRU, {
              numResults: m.length,
              query: h
            })
          })]
        }), (0, r.jsx)(i.Rj2, {
          searchTerm: n,
          className: c.searchPageBox,
          inputClassName: c.searchPageInput,
          label: s.intl.string(s.t.nL2wKC),
          placeholder: s.intl.string(s.t.nL2wKC),
          onChange: d,
          onClear: p,
          onKeyPress: f,
          cta: null != n && n.length > 0 ? s.intl.string(s.t["CU+6oK"]) : null
        })]
      }), t]
    })
  })
}