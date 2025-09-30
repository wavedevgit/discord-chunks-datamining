/** Chunk was on 47129 **/
/** chunk id: 245286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk82084 = require("./82084.jsx"),
  Chunk131051 = require("./131051.js"),
  Chunk663389 = require("./663389.js"),
  Chunk88658 = require("./88658.js"),
  Chunk996733 = require("./996733.js"),
  Chunk313789 = require("./313789.js"),
  Chunk914578 = require("./914578.jsx"),
  Chunk920952 = require("./920952.js"),
  Chunk839469 = require("./839469.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk942408 = require("./942408.js");

function v(e) {
  let {
    destinationPanel: t,
    originPanel: n
  } = e;
  (0, c.QB)({
    destinationPane: t,
    originPane: n,
    subsection: u.Z.getSubsection(),
    source: u.Z.getAnalyticsLocation(),
    locationStack: u.Z.getAnalyticsLocations()
  })
}

function T(e) {
  var t, {
      target: n
    } = e,
    l = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["target"]);
  let c = (0, d.Z7)(),
    {
      node: O,
      directory: b
    } = (0, a.Z)(y.Z, c),
    p = (t = g.n.ACCOUNT_PANEL, null == b.entry(n) ? t : n),
    T = i.useRef(null);
  return (0, o.ZP)(() => {
    let e = u.Z.getSection();
    null != e && (v({
      destinationPanel: e,
      originPanel: null
    }), T.current = e)
  }), (0, r.jsx)(s.Z, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    root: O,
    directory: b,
    sidebarHeader: S,
    sidebarFooter: f.Z,
    onPanelChange: e => {
      let t = (0, E.getUserSettingsSectionsByWebUserSettings)().get(e);
      null != t && (v({
        destinationPanel: t,
        originPanel: T.current
      }), T.current = t)
    },
    target: p
  }, l))
}

function S() {
  let e = (0, Chunk996733.Z7)(),
    t = Chunk839469.R.useField("hasSearchResults"),
    n = Chunk839469.R.useField("searchResults");
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.E1j, {
      size: "md",
      query: module,
      onChange: Chunk996733.yN,
      onClear: () => (0, Chunk996733.yN)("")
    }), exports && 0 === require.length && (0, Chunk951288.jsxs)("div", {
      className: Chunk942408.emptySearchResultsContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/semibold",
        color: "text-primary",
        children: Chunk388032.intl.string(Chunk388032.t.zihbmp)
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.XclvsL)
      })]
    })]
  })
}