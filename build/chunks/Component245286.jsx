/** Chunk was on 88569 **/
/** chunk id: 245286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk82084 = require("./82084.jsx"),
  Chunk663389 = require("./663389.js"),
  Chunk594174 = require("./594174.js"),
  Chunk88658 = require("./88658.js"),
  Chunk996733 = require("./996733.js"),
  Chunk313789 = require("./313789.js"),
  Chunk914578 = require("./914578.jsx"),
  Chunk920952 = require("./920952.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk942408 = require("./942408.js");

function m(e) {
  let {
    destinationPanel: t,
    originPanel: n
  } = e;
  (0, d.QB)({
    destinationPane: t,
    originPane: n,
    subsection: s.Z.getSubsection(),
    source: s.Z.getAnalyticsLocation(),
    locationStack: s.Z.getAnalyticsLocations()
  })
}

function v(e) {
  var {
    target: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }(e, ["target"]);
  let l = f.Z.useField("query"),
    d = o.useRef(null);
  (0, a.ZP)(() => {
    let e = s.Z.getSection();
    null != e && (m({
      destinationPanel: e,
      originPanel: null
    }), d.current = e)
  });
  let O = o.useCallback(e => {
    f.Z.setState({
      query: e
    })
  }, []);
  return (0, i.e7)([u.default], () => null != u.default.getCurrentUser()) ? (0, r.jsx)(c.Z, function(e) {
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
    partialRoot: p.Z,
    emptyState: h,
    sidebarFooter: y.Z,
    onPanelChange: e => {
      let t = (0, g.getUserSettingsSectionsByWebUserSettings)().get(e);
      null != t && (m({
        destinationPanel: t,
        originPanel: d.current
      }), d.current = t)
    },
    target: t,
    defaultTarget: b.n.ACCOUNT_PANEL,
    searchQuery: l,
    onSearchChange: O
  }, n)) : null
}

function h() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk942408.emptySearchResultsContainer,
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/semibold",
      color: "text-primary",
      children: Chunk388032.intl.string(Chunk388032.t.zihbmv)
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-secondary",
      children: Chunk388032.intl.string(Chunk388032.t.XclvsB)
    })]
  })
}