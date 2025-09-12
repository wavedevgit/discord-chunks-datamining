/** Chunk was on web.js **/
/** chunk id: 508070, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk195623 = require("./195623.js");
let u = 1e3;

function d(e) {
  let t = e.toString();
  return 1 === t.length ? ["0", t[0]] : [t[0], t[1]]
}

function f(e) {
  switch (e) {
    case "days":
      return l.intl.string(l.t.ixASa2);
    case "hours":
      return l.intl.string(l.t["8sNvNj"]);
    case "minutes":
      return l.intl.string(l.t.Gv6kPz);
    case "seconds":
      return l.intl.string(l.t.JhaiLS);
    default:
      return ""
  }
}

function _(e, t) {
  let [n, i] = d(e.unitValue);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: c.timeUnitInnerContainer,
      children: [(0, r.jsxs)("div", {
        className: c.time,
        children: [(0, r.jsx)("div", {
          className: c.timeBoxOutline,
          children: (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "always-white",
            children: n
          })
        }), (0, r.jsx)("div", {
          className: c.timeBoxOutline,
          children: (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "always-white",
            children: i
          })
        })]
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "always-white",
        children: f(e.unitType)
      })]
    }, e.unitType), !t && (0, r.jsx)(o.Text, {
      className: c.unitDivider,
      variant: "text-lg/normal",
      color: "always-white",
      children: ":"
    })]
  })
}
let p = e => {
  let {
    expiresAt: t
  } = e, n = (0, s.Z)(a()(t).toDate(), u);
  if (null == n) return null;
  let {
    days: i,
    hours: d,
    minutes: f,
    seconds: p
  } = n, h = [{
    unitValue: i,
    unitType: "days"
  }, {
    unitValue: d,
    unitType: "hours"
  }, {
    unitValue: f,
    unitType: "minutes"
  }, {
    unitValue: p,
    unitType: "seconds"
  }];
  return (0, r.jsxs)("div", {
    className: c.timerContainer,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "always-white",
      children: l.intl.string(l.t["/ARFVF"])
    }), (0, r.jsx)("div", {
      className: c.timeUnitsOuterContainer,
      children: h.map((e, t) => _(e, t === h.length - 1))
    })]
  })
}