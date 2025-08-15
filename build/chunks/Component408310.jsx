/** Chunk was on 73551 **/
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
  Chunk806328 = require("./806328.js"),
  Chunk166582 = require("./166582.js"),
  Chunk176480 = require("./176480.js");
let d = e => {
  let t, {
    searchQuery: n,
    setSearchQuery: d,
    mostRecentQuery: p,
    handleClearSearch: h,
    handleSearchKeyPress: f,
    handleCreateOrAddGuild: m,
    searchResults: g,
    searchFetching: b
  } = e;
  if (b) t = (0, r.jsx)("div", {
    className: s.pageContainer,
    children: (0, r.jsx)(i.$jN, {
      className: s.spinner
    })
  });
  else if (0 === g.length) {
    let e = null != m ? o.intl.format(o.t.qWFupq, {
      addServerHook: function(e, t) {
        return (0, r.jsx)(i.eee, {
          onClick: m,
          children: e
        }, t)
      }
    }) : o.intl.string(o.t.vYyEnp);
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
        children: o.intl.string(o.t["6HXiuL"])
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: c.emptySearchSubtitle,
        children: e
      })]
    })
  } else t = (0, r.jsx)("div", {
    className: s.cardsContainer,
    children: g.map(e => (0, r.jsx)(a.Z, {
      entry: e
    }, e.guildId))
  });
  return (0, r.jsx)("div", {
    className: s.pageContainer,
    children: (0, r.jsxs)(i.w0Z, {
      className: s.scroller,
      children: [(0, r.jsxs)("div", {
        className: c.searchHeader,
        children: [(0, r.jsxs)("div", {
          className: c.headerTitleWrapper,
          children: [(0, r.jsx)(i.P3F, {
            onClick: h,
            className: c.arrow,
            children: (0, r.jsx)(l.Z, {
              direction: l.Z.Directions.LEFT
            })
          }), (0, r.jsx)(i.X6q, {
            variant: "heading-xl/semibold",
            className: c.searchPageTitle,
            children: o.intl.format(o.t.UkOHRU, {
              numResults: g.length,
              query: p
            })
          })]
        }), (0, r.jsx)(i.Rj2, {
          searchTerm: n,
          className: c.searchPageBox,
          inputClassName: c.searchPageInput,
          label: o.intl.string(o.t.nL2wKC),
          placeholder: o.intl.string(o.t.nL2wKC),
          onChange: d,
          onClear: h,
          onKeyPress: f,
          cta: null != n && n.length > 0 ? o.intl.string(o.t["CU+6oK"]) : null
        })]
      }), t]
    })
  })
}