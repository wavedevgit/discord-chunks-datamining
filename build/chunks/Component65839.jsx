/** Chunk was on 21087 **/
/** chunk id: 65839, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk400251 = require("./400251.jsx"),
  Chunk75666 = require("./75666.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk32455 = require("./32455.js"),
  Chunk468929 = require("./468929.js"),
  Chunk584354 = require("./584354.js"),
  Chunk725060 = require("./725060.js");
let m = e => {
    let {
      searchQuery: t,
      setSearchQuery: n,
      handleClearSearch: i,
      handleSearchKeyPress: l
    } = e, {
      ref: c,
      width: u
    } = (0, o.ZP)(), h = null != u && u <= 800;
    return (0, r.jsxs)("div", {
      ref: c,
      className: p.header,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: p.headerImage,
        src: h ? g : f
      }), (0, r.jsx)("div", {
        className: p.headerContentWrapper,
        children: (0, r.jsxs)("div", {
          className: a()(p.headerContent, {
            [p.headerContentSmall]: h
          }),
          children: [(0, r.jsx)(s.X6q, {
            variant: "heading-xl/semibold",
            className: p.searchTitle,
            children: d.intl.string(d.t.IT7qoK)
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            className: p.searchSubtitle,
            children: d.intl.string(d.t["5PoYtr"])
          }), (0, r.jsx)(s.Rj2, {
            searchTerm: t,
            className: p.searchBox,
            inputClassName: p.searchBoxInput,
            closeIconClassName: p.closeIcon,
            searchIconClassName: p.searchIcon,
            label: d.intl.string(d.t.nL2wKC),
            placeholder: d.intl.string(d.t.nL2wKC),
            onChange: n,
            onClear: i,
            onKeyPress: l,
            cta: null != t && t.length > 0 ? d.intl.string(d.t["CU+6oK"]) : null
          })]
        })
      })]
    })
  },
  b = e => {
    let {
      channel: t,
      directoryEntries: n,
      handleCreateOrAddGuild: l,
      searchQuery: a,
      setSearchQuery: o,
      handleClearSearch: f,
      handleSearchKeyPress: g,
      currentCategoryId: b,
      handleSelectCategory: y,
      categoryCounts: x,
      allEntriesCount: _,
      isLoading: j
    } = e;
    return (0, r.jsx)("div", {
      className: h.pageContainer,
      children: (0, r.jsxs)(s.yWw, {
        className: h.scroller,
        children: [(0, r.jsx)(m, {
          searchQuery: a,
          setSearchQuery: o,
          handleClearSearch: f,
          handleSearchKeyPress: g
        }), (0, r.jsx)(s.h21, {
          orientation: "horizontal",
          children: (0, r.jsxs)(s.njP, {
            className: p.tabBar,
            type: "top",
            look: "brand",
            selectedItem: b,
            onItemSelect: e => {
              y(e)
            },
            children: [(0, r.jsx)(s.njP.Item, {
              className: p.tabBarItem,
              id: u.AR.ALL,
              children: "".concat(d.intl.string(d.t.hEAa2d), " (").concat(_, ")")
            }, u.AR.ALL), (0, u.b7)(t.id).map(e => {
              let {
                value: t,
                label: n
              } = e;
              return (0, r.jsx)(s.njP.Item, {
                className: p.tabBarItem,
                id: t,
                children: "".concat(n, " ").concat(null != x[t] ? "(".concat(x[t], ")") : "")
              }, t)
            })]
          })
        }), j && null == n ? (0, r.jsx)(s.$jN, {
          className: h.spinner
        }) : null == n ? true : n.map((e, t) => (0, r.jsxs)(i.Fragment, {
          children: [true !== e.header ? (0, r.jsx)(s.Text, {
            variant: "text-md/semibold",
            className: p.sectionHeader,
            children: e.header
          }) : null, (0, r.jsxs)("div", {
            className: h.cardsContainer,
            children: [e.entries.map(e => (0, r.jsx)(c.Z, {
              entry: e
            }, e.guildId)), e.appendEndCard && null != l ? (0, r.jsx)(c.m, {
              onClick: l
            }) : null]
          })]
        }, t))]
      })
    })
  }