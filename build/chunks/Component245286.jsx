/** Chunk was on 91968 **/
/** chunk id: 245286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js"), require("./358797.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk24156 = require("./24156.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk493773 = require("./493773.js"),
  Chunk82084 = require("./82084.jsx"),
  Chunk663389 = require("./663389.js"),
  Chunk585483 = require("./585483.js"),
  Chunk88658 = require("./88658.js"),
  Chunk996733 = require("./996733.js"),
  Chunk313789 = require("./313789.js"),
  Chunk914578 = require("./914578.jsx"),
  Chunk342386 = require("./342386.js"),
  Chunk920952 = require("./920952.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk767254 = require("./767254.js");

function x(e) {
  let {
    destinationPanel: t,
    originPanel: n
  } = e;
  (0, d.QB)({
    destinationPane: t,
    originPane: n,
    subsection: u.Z.getSubsection(),
    source: u.Z.getAnalyticsLocation(),
    locationStack: u.Z.getAnalyticsLocations()
  })
}

function S(e) {
  var {
    target: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }(e, ["target"]);
  let i = b.Z.useField("query"),
    d = o.useRef(null);
  (0, c.ZP)(() => {
    let e = u.Z.getSection();
    null != e && (x({
      destinationPanel: e,
      originPanel: null
    }), d.current = e)
  });
  let v = o.useCallback(e => {
      b.Z.setState({
        query: e
      })
    }, []),
    [h, S] = o.useState(false);
  return (o.useEffect(() => {
    let e = () => {
      (0, a.flushSync)(() => {
        S(true), (0, g.default)()
      }), setImmediate(() => {
        l.Z.logout("settings")
      })
    };
    return f.S.subscribe(j.CkL.SETTINGS_TRIGGER_LOGOUT, e), () => {
      f.S.unsubscribe(j.CkL.SETTINGS_TRIGGER_LOGOUT, e)
    }
  }, []), h) ? null : (0, r.jsx)(s.Z, function(e) {
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
    partialRoot: O.E,
    emptyState: P,
    sidebarFooter: p.Z,
    onPanelChange: e => {
      let t = (0, m.getUserSettingsSectionsByWebUserSettings)().get(e);
      null != t && (x({
        destinationPanel: t,
        originPanel: d.current
      }), d.current = t)
    },
    target: t,
    defaultTarget: y.n.ACCOUNT_PANEL,
    searchQuery: i,
    onSearchChange: v
  }, n))
}

function P() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk767254.emptySearchResultsContainer,
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/semibold",
      color: "text-strong",
      children: Chunk388032.intl.string(Chunk388032.t.zihbmv)
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: Chunk388032.intl.string(Chunk388032.t.XclvsB)
    })]
  })
}