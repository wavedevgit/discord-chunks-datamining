/** Chunk was on 97492 **/
/** chunk id: 647026, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk792831 = require("./792831.jsx"),
  Chunk226694 = require("./226694.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk10544 = require("./10544.js"),
  Chunk898876 = require("./898876.js"),
  Chunk578576 = require("./578576.js");
let d = e => {
  let t, {
    searchQuery: n,
    setSearchQuery: d,
    mostRecentQuery: f,
    handleClearSearch: p,
    handleSearchKeyPress: h,
    handleCreateOrAddGuild: b,
    searchResults: g,
    searchFetching: m
  } = e;
  if (m) t = (0, r.jsx)("div", {
    className: o.$$,
    children: (0, r.jsx)(l.y$y, {
      className: o.u1
    })
  });
  else if (0 === g.length) {
    let e = null != b ? s.intl.format(s.t.qWFupn, {
      addServerHook: function(e, t) {
        return (0, r.jsx)(l.MzZ, {
          onClick: b,
          children: e
        }, t)
      }
    }) : s.intl.string(s.t.vYyEnv);
    t = (0, r.jsxs)("div", {
      className: c.Je,
      children: [(0, r.jsx)("img", {
        className: c.Tc,
        alt: "",
        src: u
      }), (0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: c.gR,
        children: s.intl.string(s.t["6HXiuE"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-default",
        className: c.av,
        children: e
      })]
    })
  } else t = (0, r.jsx)("div", {
    className: o.vY,
    children: g.map(e => (0, r.jsx)(a.A, {
      entry: e
    }, e.guildId))
  });
  return (0, r.jsx)("div", {
    className: o.$$,
    children: (0, r.jsxs)(l.ArX, {
      className: o.XG,
      children: [(0, r.jsxs)("div", {
        className: c.wL,
        children: [(0, r.jsxs)("div", {
          className: c.Dr,
          children: [(0, r.jsx)(l.DUT, {
            onClick: p,
            className: c.UE,
            children: (0, r.jsx)(i.A, {
              direction: i.A.Directions.LEFT
            })
          }), (0, r.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            className: c.s7,
            children: s.intl.format(s.t.UkOHRd, {
              numResults: g.length,
              query: f
            })
          })]
        }), (0, r.jsx)(l.IWV, {
          query: n,
          "aria-label": s.intl.string(s.t.nL2wKD),
          placeholder: s.intl.string(s.t.nL2wKD),
          onChange: d,
          onClear: p,
          onKeyDown: h
        })]
      }), t]
    })
  })
}