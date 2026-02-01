/** Chunk was on 42402 **/
/** chunk id: 268965, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk226694 = require("./226694.jsx"),
  Chunk946116 = require("./946116.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk10544 = require("./10544.js"),
  Chunk255753 = require("./255753.js"),
  Chunk296753 = require("./296753.js"),
  Chunk663093 = require("./663093.js");
let b = e => {
    let {
      searchQuery: t,
      setSearchQuery: n,
      handleClearSearch: l,
      handleSearchKeyPress: i
    } = e, {
      ref: c,
      width: u
    } = (0, o.Ay)(), h = null != u && u <= 800;
    return (0, r.jsxs)("div", {
      ref: c,
      className: g.wx,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: g.F0,
        src: h ? m : f
      }), (0, r.jsx)("div", {
        className: g.AZ,
        children: (0, r.jsxs)("div", {
          className: s()(g.VW, {
            [g.eO]: h
          }),
          children: [(0, r.jsx)(a.Heading, {
            variant: "heading-xl/semibold",
            className: g.dc,
            children: p.intl.string(p.t.IT7qoC)
          }), (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            className: g.R_,
            children: p.intl.string(p.t["5PoYts"])
          }), (0, r.jsx)(a.NPJ, {
            theme: d.NJ.LIGHT,
            children: e => (0, r.jsx)("div", {
              className: s()(g.MT, e),
              children: (0, r.jsx)(a.IWV, {
                query: t,
                "aria-label": p.intl.string(p.t.nL2wKD),
                placeholder: p.intl.string(p.t.nL2wKD),
                onChange: n,
                onClear: l,
                onKeyDown: i
              })
            })
          })]
        })
      })]
    })
  },
  A = e => {
    let {
      channel: t,
      directoryEntries: n,
      handleCreateOrAddGuild: i,
      searchQuery: s,
      setSearchQuery: o,
      handleClearSearch: d,
      handleSearchKeyPress: f,
      currentCategoryId: m,
      handleSelectCategory: A,
      categoryCounts: y,
      allEntriesCount: O,
      isLoading: j
    } = e;
    return (0, r.jsx)("div", {
      className: h.$$,
      children: (0, r.jsxs)(a.GtU, {
        className: h.XG,
        children: [(0, r.jsx)(b, {
          searchQuery: s,
          setSearchQuery: o,
          handleClearSearch: d,
          handleSearchKeyPress: f
        }), (0, r.jsx)(a.ChK, {
          orientation: "horizontal",
          children: (0, r.jsxs)(a.VQ0, {
            className: g.$H,
            type: "top",
            look: "brand",
            selectedItem: m,
            onItemSelect: e => {
              A(e)
            },
            children: [(0, r.jsx)(a.VQ0.Item, {
              className: g.YU,
              id: u.mU.ALL,
              children: "".concat(p.intl.string(p.t.hEAa2a), " (").concat(O, ")")
            }, u.mU.ALL), (0, u.g2)(t.id).map(e => {
              let {
                value: t,
                label: n
              } = e;
              return (0, r.jsx)(a.VQ0.Item, {
                className: g.YU,
                id: t,
                children: "".concat(n, " ").concat(null != y[t] ? "(".concat(y[t], ")") : "")
              }, t)
            })]
          })
        }), j && null == n ? (0, r.jsx)(a.y$y, {
          className: h.u1
        }) : null == n ? true : n.map((e, t) => (0, r.jsxs)(l.Fragment, {
          children: [true !== e.header ? (0, r.jsx)(a.Text, {
            variant: "text-md/semibold",
            className: g.bV,
            children: e.header
          }) : null, (0, r.jsxs)("div", {
            className: h.vY,
            children: [e.entries.map(e => (0, r.jsx)(c.A, {
              entry: e
            }, e.guildId)), e.appendEndCard && null != i ? (0, r.jsx)(c.s, {
              onClick: i
            }) : null]
          })]
        }, t))]
      })
    })
  }