/** Chunk was on 97492 **/
/** chunk id: 268965, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
let m = e => {
    let {
      searchQuery: t,
      setSearchQuery: n,
      handleClearSearch: l,
      handleSearchKeyPress: i
    } = e, {
      ref: c,
      width: u
    } = (0, o.Ay)(), p = null != u && u <= 800;
    return (0, r.jsxs)("div", {
      ref: c,
      className: h.wx,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: h.F0,
        src: p ? g : b
      }), (0, r.jsx)("div", {
        className: h.AZ,
        children: (0, r.jsxs)("div", {
          className: a()(h.VW, {
            [h.eO]: p
          }),
          children: [(0, r.jsx)(s.Heading, {
            variant: "heading-xl/semibold",
            className: h.dc,
            children: f.intl.string(f.t.IT7qoC)
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            className: h.R_,
            children: f.intl.string(f.t["5PoYts"])
          }), (0, r.jsx)(s.NPJ, {
            theme: d.NJ.LIGHT,
            children: e => (0, r.jsx)("div", {
              className: a()(h.MT, e),
              children: (0, r.jsx)(s.IWV, {
                query: t,
                "aria-label": f.intl.string(f.t.nL2wKD),
                placeholder: f.intl.string(f.t.nL2wKD),
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
      searchQuery: a,
      setSearchQuery: o,
      handleClearSearch: d,
      handleSearchKeyPress: b,
      currentCategoryId: g,
      handleSelectCategory: A,
      categoryCounts: y,
      allEntriesCount: O,
      isLoading: j
    } = e;
    return (0, r.jsx)("div", {
      className: p.$$,
      children: (0, r.jsxs)(s.GtU, {
        className: p.XG,
        children: [(0, r.jsx)(m, {
          searchQuery: a,
          setSearchQuery: o,
          handleClearSearch: d,
          handleSearchKeyPress: b
        }), (0, r.jsx)(s.ChK, {
          orientation: "horizontal",
          children: (0, r.jsxs)(s.VQ0, {
            className: h.$H,
            type: "top",
            look: "brand",
            selectedItem: g,
            onItemSelect: e => {
              A(e)
            },
            children: [(0, r.jsx)(s.VQ0.Item, {
              className: h.YU,
              id: u.mU.ALL,
              children: "".concat(f.intl.string(f.t.hEAa2a), " (").concat(O, ")")
            }, u.mU.ALL), (0, u.g2)(t.id).map(e => {
              let {
                value: t,
                label: n
              } = e;
              return (0, r.jsx)(s.VQ0.Item, {
                className: h.YU,
                id: t,
                children: "".concat(n, " ").concat(null != y[t] ? "(".concat(y[t], ")") : "")
              }, t)
            })]
          })
        }), j && null == n ? (0, r.jsx)(s.y$y, {
          className: p.u1
        }) : null == n ? true : n.map((e, t) => (0, r.jsxs)(l.Fragment, {
          children: [true !== e.header ? (0, r.jsx)(s.Text, {
            variant: "text-md/semibold",
            className: h.bV,
            children: e.header
          }) : null, (0, r.jsxs)("div", {
            className: p.vY,
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