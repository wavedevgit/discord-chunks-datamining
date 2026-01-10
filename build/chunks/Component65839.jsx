/** Chunk was on 81985 **/
/** chunk id: 65839, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk400251 = require("./400251.jsx"),
  Chunk486527 = require("./486527.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk960931 = require("./960931.js"),
  Chunk375862 = require("./375862.js"),
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
    } = (0, s.ZP)(), f = null != u && u <= 800;
    return (0, r.jsxs)("div", {
      ref: c,
      className: h.header,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: h.headerImage,
        src: f ? m : g
      }), (0, r.jsx)("div", {
        className: h.headerContentWrapper,
        children: (0, r.jsxs)("div", {
          className: a()(h.headerContent, {
            [h.headerContentSmall]: f
          }),
          children: [(0, r.jsx)(o.Heading, {
            variant: "heading-xl/semibold",
            className: h.searchTitle,
            children: p.intl.string(p.t.IT7qoC)
          }), (0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            className: h.searchSubtitle,
            children: p.intl.string(p.t["5PoYts"])
          }), (0, r.jsx)(o.f6W, {
            theme: d.BR.LIGHT,
            children: e => (0, r.jsx)("div", {
              className: a()(h.searchContainer, e),
              children: (0, r.jsx)(o.E1j, {
                query: t,
                "aria-label": p.intl.string(p.t.nL2wKD),
                placeholder: p.intl.string(p.t.nL2wKD),
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
  y = e => {
    let {
      channel: t,
      directoryEntries: n,
      handleCreateOrAddGuild: l,
      searchQuery: a,
      setSearchQuery: s,
      handleClearSearch: d,
      handleSearchKeyPress: g,
      currentCategoryId: m,
      handleSelectCategory: y,
      categoryCounts: v,
      allEntriesCount: O,
      isLoading: j
    } = e;
    return (0, r.jsx)("div", {
      className: f.pageContainer,
      children: (0, r.jsxs)(o.yWw, {
        className: f.scroller,
        children: [(0, r.jsx)(b, {
          searchQuery: a,
          setSearchQuery: s,
          handleClearSearch: d,
          handleSearchKeyPress: g
        }), (0, r.jsx)(o.h21, {
          orientation: "horizontal",
          children: (0, r.jsxs)(o.njP, {
            className: h.tabBar,
            type: "top",
            look: "brand",
            selectedItem: m,
            onItemSelect: e => {
              y(e)
            },
            children: [(0, r.jsx)(o.njP.Item, {
              className: h.tabBarItem,
              id: u.AR.ALL,
              children: "".concat(p.intl.string(p.t.hEAa2a), " (").concat(O, ")")
            }, u.AR.ALL), (0, u.b7)(t.id).map(e => {
              let {
                value: t,
                label: n
              } = e;
              return (0, r.jsx)(o.njP.Item, {
                className: h.tabBarItem,
                id: t,
                children: "".concat(n, " ").concat(null != v[t] ? "(".concat(v[t], ")") : "")
              }, t)
            })]
          })
        }), j && null == n ? (0, r.jsx)(o.$jN, {
          className: f.spinner
        }) : null == n ? true : n.map((e, t) => (0, r.jsxs)(i.Fragment, {
          children: [true !== e.header ? (0, r.jsx)(o.Text, {
            variant: "text-md/semibold",
            className: h.sectionHeader,
            children: e.header
          }) : null, (0, r.jsxs)("div", {
            className: f.cardsContainer,
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