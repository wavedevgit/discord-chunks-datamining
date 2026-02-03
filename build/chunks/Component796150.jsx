/** Chunk was on 47147 **/
/** chunk id: 796150, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
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
    originPanel: n
  } = e;
  (0, _.iY)({
    destinationPane: t,
    originPane: n,
    subsection: u.A.getSubsection(),
    source: u.A.getAnalyticsLocation(),
    locationStack: u.A.getAnalyticsLocations()
  })
}

function v(e) {
  let {
    target: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, o, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, n = Reflect.ownKeys(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.getOwnPropertyNames(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }(e, ["target"]), l = b.A.useField("query"), _ = o.useRef(null);
  (0, c.Ay)(() => {
    let e = u.A.getSection();
    null != e && (x({
      destinationPanel: e,
      originPanel: null
    }), _.current = e)
  });
  let h = o.useCallback(e => {
      b.A.setState({
        query: e
      })
    }, []),
    [j, v] = o.useState(false);
  return (o.useEffect(() => {
    let e = () => {
      (0, a.flushSync)(() => {
        v(true), (0, y.default)()
      }), setImmediate(() => {
        i.A.logout("settings")
      })
    };
    return d._.subscribe(O.jej.SETTINGS_TRIGGER_LOGOUT, e), () => {
      d._.unsubscribe(O.jej.SETTINGS_TRIGGER_LOGOUT, e)
    }
  }, []), j) ? null : (0, r.jsx)(s.A, function(e) {
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
    partialRoot: g.D,
    emptyState: S,
    sidebarFooter: f.A,
    onPanelChange: e => {
      let t = (0, m.getUserSettingsSectionsByWebUserSettings)().get(e);
      null != t && (x({
        destinationPanel: t,
        originPanel: _.current
      }), _.current = t)
    },
    target: t,
    defaultTarget: p.X.ACCOUNT_PANEL,
    searchQuery: l,
    onSearchChange: h
  }, n))
}

function S() {
  return (0, r.jsxs)("div", {
    className: j.t,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/semibold",
      color: "text-strong",
      children: h.intl.string(h.t.zihbmv)
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: h.intl.string(h.t.XclvsB)
    })]
  })
}