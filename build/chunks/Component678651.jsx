/** Chunk was on 61526 **/
/** chunk id: 678651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk709054 = require("./709054.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk571270 = require("./571270.js");

function p(e) {
  var t, n;
  let {
    clip: p
  } = e, [f] = (0, o.Z)([null != (t = p.applicationId) ? t : ""]), v = (0, l.e7)([u.default], () => u.default.locale), h = r.useMemo(() => new Date(c.default.extractTimestamp(p.id)), [p.id]);
  return (0, a.jsxs)("div", {
    className: m.root,
    children: [(0, a.jsxs)("div", {
      className: m.nameSection,
      children: [(0, a.jsx)(s.Z, {
        game: f
      }), (0, a.jsx)(i.Text, {
        className: m.name,
        variant: "text-md/medium",
        color: "interactive-active",
        children: null != (n = null == f ? true : f.name) ? n : p.applicationName
      })]
    }), (0, a.jsxs)("div", {
      className: m.timeContainer,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.Text, {
          variant: "text-md/medium",
          className: m.timeTitle,
          children: d.intl.string(d.t.g8pDeY)
        }), (0, a.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "interactive-active",
          children: h.toLocaleDateString(v, {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
          })
        })]
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.Text, {
          variant: "text-md/medium",
          className: m.timeTitle,
          children: d.intl.string(d.t.v6XAgu)
        }), (0, a.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "interactive-active",
          children: h.toLocaleTimeString(v, {
            hour: "numeric",
            minute: "numeric"
          })
        })]
      })]
    })]
  })
}