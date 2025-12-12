/** Chunk was on web.js **/
/** chunk id: 403503, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk207871 = require("./207871.js");
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

function m(e, t) {
  let [n, i] = p(e.unitValue);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: d.timeUnitInnerContainer,
      children: [(0, r.jsxs)("div", {
        className: d.time,
        children: [(0, r.jsx)("div", {
          className: d.timeBoxOutline,
          children: (0, r.jsx)(l.Text, {
            variant: "text-md/medium",
            color: "always-white",
            children: n
          })
        }), (0, r.jsx)("div", {
          className: d.timeBoxOutline,
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
      className: d.unitDivider,
      variant: "text-lg/normal",
      color: "always-white",
      children: ":"
    })]
  })
}
let h = e => {
  let {
    expiresAt: t,
    className: n
  } = e, i = (0, c.Z)(s()(t).toDate(), f);
  if (null == i) return null;
  let {
    days: o,
    hours: p,
    minutes: _,
    seconds: h
  } = i, g = [{
    unitValue: o,
    unitType: "days"
  }, {
    unitValue: p,
    unitType: "hours"
  }, {
    unitValue: _,
    unitType: "minutes"
  }, {
    unitValue: h,
    unitType: "seconds"
  }];
  return (0, r.jsxs)("div", {
    className: a()(d.timerContainer, n),
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/semibold",
      color: "always-white",
      children: u.intl.string(u.t["/ARFVE"])
    }), (0, r.jsx)("div", {
      className: d.timeUnitsOuterContainer,
      children: g.map((e, t) => m(e, t === g.length - 1))
    })]
  })
}