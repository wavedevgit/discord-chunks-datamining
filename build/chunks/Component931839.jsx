/** Chunk was on 53512 **/
/** chunk id: 931839, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => d,
  Z: () => m
});
var i, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk686529 = require("./686529.js"),
  d = ((i = {})[i.Intro = 0] = "Intro", i[i.Customize = 1] = "Customize", i[i.Tips = 2] = "Tips", i);

function m(e) {
  let {
    selectedTab: t,
    onClick: n,
    submitted: i
  } = e;
  return (0, s.jsxs)("div", {
    className: o.tabs,
    children: [(0, s.jsx)(x, {
      tab: 0,
      selectedTab: t,
      label: c.intl.string(c.t.JwwVrq),
      disabled: i,
      onClick: n
    }), (0, s.jsx)(x, {
      tab: 1,
      selectedTab: t,
      label: c.intl.string(c.t["56vYWV"]),
      disabled: i,
      onClick: n
    }), (0, s.jsx)(x, {
      tab: 2,
      selectedTab: t,
      label: c.intl.string(c.t["0l0rJi"]),
      disabled: !i,
      onClick: n
    })]
  })
}

function x(e) {
  let {
    tab: t,
    selectedTab: n,
    label: i,
    disabled: a,
    onClick: c
  } = e;
  return a ? (0, s.jsxs)("div", {
    className: r()(o.tab, {
      [o.current]: n === t
    }),
    children: [(0, s.jsx)("div", {
      className: o.progressBar
    }), (0, s.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: n === t ? "text-brand" : "text-muted",
      children: i
    })]
  }) : (0, s.jsxs)(l.P3F, {
    onClick: () => c(t),
    className: r()(o.tab, {
      [o.current]: n === t
    }),
    children: [(0, s.jsx)("div", {
      className: o.progressBar
    }), (0, s.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: n === t ? "text-brand" : "text-muted",
      children: i
    })]
  })
}