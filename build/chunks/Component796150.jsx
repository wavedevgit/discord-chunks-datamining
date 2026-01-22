/** Chunk was on 48666 **/
/** chunk id: 796150, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./896048.js"), require("./142703.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk340287 = require("./340287.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk964486 = require("./964486.js"),
  Chunk883662 = require("./883662.jsx"),
  Chunk628965 = require("./628965.js"),
  Chunk203982 = require("./203982.js"),
  Chunk115063 = require("./115063.js"),
  Chunk152056 = require("./152056.js"),
  Chunk780964 = require("./780964.js"),
  Chunk162396 = require("./162396.jsx"),
  Chunk12901 = require("./12901.js"),
  Chunk921854 = require("./921854.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk249316 = require("./249316.js");

function x(e) {
  let {
    destinationPanel: t,
    originPanel: r
  } = e;
  (0, b.iY)({
    destinationPane: t,
    originPane: r,
    subsection: u.A.getSubsection(),
    source: u.A.getAnalyticsLocation(),
    locationStack: u.A.getAnalyticsLocations()
  })
}

function S(e) {
  let {
    target: t
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, l, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
      return o
    }
    if (o = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          o = Object.getOwnPropertyNames(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    return o
  }(e, ["target"]), a = y.A.useField("query"), b = l.useRef(null);
  (0, i.Ay)(() => {
    let e = u.A.getSection();
    null != e && (x({
      destinationPanel: e,
      originPanel: null
    }), b.current = e)
  });
  let m = l.useCallback(e => {
      y.A.setState({
        query: e
      })
    }, []),
    [v, S] = l.useState(false);
  return (l.useEffect(() => {
    let e = () => {
      (0, o.flushSync)(() => {
        S(true), (0, g.default)()
      }), setImmediate(() => {
        c.A.logout("settings")
      })
    };
    return f._.subscribe(h.jej.SETTINGS_TRIGGER_LOGOUT, e), () => {
      f._.unsubscribe(h.jej.SETTINGS_TRIGGER_LOGOUT, e)
    }
  }, []), v) ? null : (0, n.jsx)(s.A, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    partialRoot: O.D,
    emptyState: P,
    sidebarFooter: p.A,
    onPanelChange: e => {
      let t = (0, j.getUserSettingsSectionsByWebUserSettings)().get(e);
      null != t && (x({
        destinationPanel: t,
        originPanel: b.current
      }), b.current = t)
    },
    target: t,
    defaultTarget: d.X.ACCOUNT_PANEL,
    searchQuery: a,
    onSearchChange: m
  }, r))
}

function P() {
  return (0, n.jsxs)("div", {
    className: v.t,
    children: [(0, n.jsx)(a.Text, {
      variant: "text-sm/semibold",
      color: "text-strong",
      children: m.intl.string(m.t.zihbmv)
    }), (0, n.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: m.intl.string(m.t.XclvsB)
    })]
  })
}