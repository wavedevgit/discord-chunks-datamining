/** Chunk was on web.js **/
/** chunk id: 939724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk397927 = require("./397927.js"),
  Chunk496431 = require("./496431.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk338422 = require("./338422.js");
let f = 1e3;

function p(e) {
  let t = e.toString();
  return 1 === t.length ? ["0", t[0]] : [t[0], t[1]]
}

function _(e) {
  switch (e) {
    case "days":
      return u.intl.string(u.t.ixASa2);
    case "hours":
      return u.intl.string(u.t["8sNvNn"]);
    case "minutes":
      return u.intl.string(u.t["Gv6kP/"]);
    case "seconds":
      return u.intl.string(u.t.JhaiLW);
    default:
      return ""
  }
}

function h(e, t) {
  let [n, i] = p(e.unitValue);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: d.bh,
      children: [(0, r.jsxs)("div", {
        className: d.kB,
        children: [(0, r.jsx)("div", {
          className: d.B2,
          children: (0, r.jsx)(l.Text, {
            variant: "text-md/medium",
            color: "always-white",
            children: n
          })
        }), (0, r.jsx)("div", {
          className: d.B2,
          children: (0, r.jsx)(l.Text, {
            variant: "text-md/medium",
            color: "always-white",
            children: i
          })
        })]
      }), (0, r.jsx)(l.Text, {
        variant: "text-xs/semibold",
        color: "always-white",
        children: _(e.unitType)
      })]
    }, e.unitType), !t && (0, r.jsx)(l.Text, {
      className: d.cV,
      variant: "text-lg/normal",
      color: "always-white",
      children: ":"
    })]
  })
}
let m = e => {
  let {
    expiresAt: t,
    className: n
  } = e, i = (0, c.A)(o()(t).toDate(), f);
  if (null == i) return null;
  let {
    days: s,
    hours: p,
    minutes: _,
    seconds: m
  } = i, g = [{
    unitValue: s,
    unitType: "days"
  }, {
    unitValue: p,
    unitType: "hours"
  }, {
    unitValue: _,
    unitType: "minutes"
  }, {
    unitValue: m,
    unitType: "seconds"
  }];
  return (0, r.jsxs)("div", {
    className: a()(d.Xl, n),
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/semibold",
      color: "always-white",
      children: u.intl.string(u.t["/ARFVE"])
    }), (0, r.jsx)("div", {
      className: d.$R,
      children: g.map((e, t) => h(e, t === g.length - 1))
    })]
  })
}