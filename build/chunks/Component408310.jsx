/** Chunk was on 82124 **/
/** chunk id: 408310, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk671533 = require("./671533.jsx"),
  Chunk400251 = require("./400251.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk960931 = require("./960931.js"),
  Chunk762451 = require("./762451.js"),
  Chunk176480 = require("./176480.js");
let d = e => {
  let t, {
    searchQuery: n,
    setSearchQuery: d,
    mostRecentQuery: p,
    handleClearSearch: f,
    handleSearchKeyPress: h,
    handleCreateOrAddGuild: g,
    searchResults: m,
    searchFetching: b
  } = e;
  if (b) t = (0, r.jsx)("div", {
    className: s.pageContainer,
    children: (0, r.jsx)(i.$jN, {
      className: s.spinner
    })
  });
  else if (0 === m.length) {
    let e = null != g ? o.intl.format(o.t.qWFupn, {
      addServerHook: function(e, t) {
        return (0, r.jsx)(i.eee, {
          onClick: g,
          children: e
        }, t)
      }
    }) : o.intl.string(o.t.vYyEnv);
    t = (0, r.jsxs)("div", {
      className: c.emptySearchWrapper,
      children: [(0, r.jsx)("img", {
        className: c.emptySearchImage,
        alt: "",
        src: u
      }), (0, r.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: c.emptySearchTitle,
        children: o.intl.string(o.t["6HXiuE"])
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-default",
        className: c.emptySearchSubtitle,
        children: e
      })]
    })
  } else t = (0, r.jsx)("div", {
    className: s.cardsContainer,
    children: m.map(e => (0, r.jsx)(a.Z, {
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
            onClick: f,
            className: c.arrow,
            children: (0, r.jsx)(l.Z, {
              direction: l.Z.Directions.LEFT
            })
          }), (0, r.jsx)(i.Heading, {
            variant: "heading-xl/semibold",
            className: c.searchPageTitle,
            children: o.intl.format(o.t.UkOHRd, {
              numResults: m.length,
              query: p
            })
          })]
        }), (0, r.jsx)(i.E1j, {
          query: n,
          "aria-label": o.intl.string(o.t.nL2wKD),
          placeholder: o.intl.string(o.t.nL2wKD),
          onChange: d,
          onClear: f,
          onKeyDown: h
        })]
      }), t]
    })
  })
}