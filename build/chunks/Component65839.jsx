/** Chunk was on 5665 **/
/** chunk id: 65839, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk400251 = require("./400251.jsx"),
  Chunk75666 = require("./75666.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk806328 = require("./806328.js"),
  Chunk152013 = require("./152013.js"),
  Chunk584354 = require("./584354.js"),
  Chunk725060 = require("./725060.js");
let g = e => {
    let {
      searchQuery: t,
      setSearchQuery: n,
      handleClearSearch: i,
      handleSearchKeyPress: l
    } = e, {
      ref: c,
      width: u
    } = (0, s.ZP)(), p = null != u && u <= 800;
    return (0, r.jsxs)("div", {
      ref: c,
      className: h.header,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: h.headerImage,
        src: p ? m : f
      }), (0, r.jsx)("div", {
        className: h.headerContentWrapper,
        children: (0, r.jsxs)("div", {
          className: a()(h.headerContent, {
            [h.headerContentSmall]: p
          }),
          children: [(0, r.jsx)(o.X6q, {
            variant: "heading-xl/semibold",
            className: h.searchTitle,
            children: d.intl.string(d.t.IT7qoK)
          }), (0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            className: h.searchSubtitle,
            children: d.intl.string(d.t["5PoYtr"])
          }), (0, r.jsx)(o.E1j, {
            query: t,
            "aria-label": d.intl.string(d.t.nL2wKC),
            placeholder: d.intl.string(d.t.nL2wKC),
            onChange: n,
            onClear: i,
            onKeyDown: l
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
      setSearchQuery: s,
      handleClearSearch: f,
      handleSearchKeyPress: m,
      currentCategoryId: b,
      handleSelectCategory: _,
      categoryCounts: y,
      allEntriesCount: C,
      isLoading: x
    } = e;
    return (0, r.jsx)("div", {
      className: p.pageContainer,
      children: (0, r.jsxs)(o.yWw, {
        className: p.scroller,
        children: [(0, r.jsx)(g, {
          searchQuery: a,
          setSearchQuery: s,
          handleClearSearch: f,
          handleSearchKeyPress: m
        }), (0, r.jsx)(o.h21, {
          orientation: "horizontal",
          children: (0, r.jsxs)(o.njP, {
            className: h.tabBar,
            type: "top",
            look: "brand",
            selectedItem: b,
            onItemSelect: e => {
              _(e)
            },
            children: [(0, r.jsx)(o.njP.Item, {
              className: h.tabBarItem,
              id: u.AR.ALL,
              children: "".concat(d.intl.string(d.t.hEAa2d), " (").concat(C, ")")
            }, u.AR.ALL), (0, u.b7)(t.id).map(e => {
              let {
                value: t,
                label: n
              } = e;
              return (0, r.jsx)(o.njP.Item, {
                className: h.tabBarItem,
                id: t,
                children: "".concat(n, " ").concat(null != y[t] ? "(".concat(y[t], ")") : "")
              }, t)
            })]
          })
        }), x && null == n ? (0, r.jsx)(o.$jN, {
          className: p.spinner
        }) : null == n ? true : n.map((e, t) => (0, r.jsxs)(i.Fragment, {
          children: [true !== e.header ? (0, r.jsx)(o.Text, {
            variant: "text-md/semibold",
            className: h.sectionHeader,
            children: e.header
          }) : null, (0, r.jsxs)("div", {
            className: p.cardsContainer,
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