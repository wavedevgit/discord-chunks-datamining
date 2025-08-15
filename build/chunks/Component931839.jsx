/** Chunk was on 53512 **/
/** chunk id: 931839, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => d,
  Z: () => m
});
var i, Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  return (0, r.jsxs)("div", {
    className: o.tabs,
    children: [(0, r.jsx)(u, {
      tab: 0,
      selectedTab: t,
      label: c.intl.string(c.t.JwwVrq),
      disabled: i,
      onClick: n
    }), (0, r.jsx)(u, {
      tab: 1,
      selectedTab: t,
      label: c.intl.string(c.t["56vYWV"]),
      disabled: i,
      onClick: n
    }), (0, r.jsx)(u, {
      tab: 2,
      selectedTab: t,
      label: c.intl.string(c.t["0l0rJi"]),
      disabled: !i,
      onClick: n
    })]
  })
}

function u(e) {
  let {
    tab: t,
    selectedTab: n,
    label: i,
    disabled: s,
    onClick: c
  } = e;
  return s ? (0, r.jsxs)("div", {
    className: a()(o.tab, {
      [o.current]: n === t
    }),
    children: [(0, r.jsx)("div", {
      className: o.progressBar
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: n === t ? "text-brand" : "text-muted",
      children: i
    })]
  }) : (0, r.jsxs)(l.P3F, {
    onClick: () => c(t),
    className: a()(o.tab, {
      [o.current]: n === t
    }),
    children: [(0, r.jsx)("div", {
      className: o.progressBar
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: n === t ? "text-brand" : "text-muted",
      children: i
    })]
  })
}