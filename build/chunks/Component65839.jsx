/** Chunk was on 5665 **/
/** chunk id: 65839, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk400251 = require("./400251.jsx"),
  Chunk75666 = require("./75666.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk806328 = require("./806328.js"),
  Chunk152013 = require("./152013.js"),
  Chunk584354 = require("./584354.js"),
  Chunk725060 = require("./725060.js");
let b = e => {
    let {
      searchQuery: t,
      setSearchQuery: n,
      handleClearSearch: i,
      handleSearchKeyPress: l
    } = e, {
      ref: c,
      width: u
    } = (0, s.ZP)(), h = null != u && u <= 800;
    return (0, r.jsxs)("div", {
      ref: c,
      className: f.header,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: f.headerImage,
        src: h ? g : m
      }), (0, r.jsx)("div", {
        className: f.headerContentWrapper,
        children: (0, r.jsxs)("div", {
          className: a()(f.headerContent, {
            [f.headerContentSmall]: h
          }),
          children: [(0, r.jsx)(o.X6q, {
            variant: "heading-xl/semibold",
            className: f.searchTitle,
            children: p.intl.string(p.t.IT7qoK)
          }), (0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            className: f.searchSubtitle,
            children: p.intl.string(p.t["5PoYtr"])
          }), (0, r.jsx)(o.f6W, {
            theme: d.BR.LIGHT,
            children: e => (0, r.jsx)("div", {
              className: a()(f.searchContainer, e),
              children: (0, r.jsx)(o.E1j, {
                query: t,
                "aria-label": p.intl.string(p.t.nL2wKC),
                placeholder: p.intl.string(p.t.nL2wKC),
                onChange: n,
                onClear: i,
                onKeyDown: l
              })
            })
          })]
        })
      })]
    })
  },
  _ = e => {
    let {
      channel: t,
      directoryEntries: n,
      handleCreateOrAddGuild: l,
      searchQuery: a,
      setSearchQuery: s,
      handleClearSearch: d,
      handleSearchKeyPress: m,
      currentCategoryId: g,
      handleSelectCategory: _,
      categoryCounts: y,
      allEntriesCount: C,
      isLoading: x
    } = e;
    return (0, r.jsx)("div", {
      className: h.pageContainer,
      children: (0, r.jsxs)(o.yWw, {
        className: h.scroller,
        children: [(0, r.jsx)(b, {
          searchQuery: a,
          setSearchQuery: s,
          handleClearSearch: d,
          handleSearchKeyPress: m
        }), (0, r.jsx)(o.h21, {
          orientation: "horizontal",
          children: (0, r.jsxs)(o.njP, {
            className: f.tabBar,
            type: "top",
            look: "brand",
            selectedItem: g,
            onItemSelect: e => {
              _(e)
            },
            children: [(0, r.jsx)(o.njP.Item, {
              className: f.tabBarItem,
              id: u.AR.ALL,
              children: "".concat(p.intl.string(p.t.hEAa2d), " (").concat(C, ")")
            }, u.AR.ALL), (0, u.b7)(t.id).map(e => {
              let {
                value: t,
                label: n
              } = e;
              return (0, r.jsx)(o.njP.Item, {
                className: f.tabBarItem,
                id: t,
                children: "".concat(n, " ").concat(null != y[t] ? "(".concat(y[t], ")") : "")
              }, t)
            })]
          })
        }), x && null == n ? (0, r.jsx)(o.$jN, {
          className: h.spinner
        }) : null == n ? true : n.map((e, t) => (0, r.jsxs)(i.Fragment, {
          children: [true !== e.header ? (0, r.jsx)(o.Text, {
            variant: "text-md/semibold",
            className: f.sectionHeader,
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