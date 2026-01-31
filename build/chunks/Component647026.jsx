/** Chunk was on 17534 **/
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
    mostRecentQuery: h,
    handleClearSearch: p,
    handleSearchKeyPress: g,
    handleCreateOrAddGuild: f,
    searchResults: m,
    searchFetching: b
  } = e;
  if (b) t = (0, r.jsx)("div", {
    className: o.$$,
    children: (0, r.jsx)(l.y$y, {
      className: o.u1
    })
  });
  else if (0 === m.length) {
    let e = null != f ? a.intl.format(a.t.qWFupn, {
      addServerHook: function(e, t) {
        return (0, r.jsx)(l.MzZ, {
          onClick: f,
          children: e
        }, t)
      }
    }) : a.intl.string(a.t.vYyEnv);
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
        children: a.intl.string(a.t["6HXiuE"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-default",
        className: c.av,
        children: e
      })]
    })
  } else t = (0, r.jsx)("div", {
    className: o.vY,
    children: m.map(e => (0, r.jsx)(s.A, {
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
            children: a.intl.format(a.t.UkOHRd, {
              numResults: m.length,
              query: h
            })
          })]
        }), (0, r.jsx)(l.IWV, {
          query: n,
          "aria-label": a.intl.string(a.t.nL2wKD),
          placeholder: a.intl.string(a.t.nL2wKD),
          onChange: d,
          onClear: p,
          onKeyDown: g
        })]
      }), t]
    })
  })
}