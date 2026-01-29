/** Chunk was on 59024 **/
/** chunk id: 796150, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
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

function _(e) {
  let {
    destinationPanel: t,
    originPanel: n
  } = e;
  (0, b.iY)({
    destinationPane: t,
    originPane: n,
    subsection: u.A.getSubsection(),
    source: u.A.getAnalyticsLocation(),
    locationStack: u.A.getAnalyticsLocations()
  })
}

function x(e) {
  let {
    target: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, l, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
      return o
    }
    if (o = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          o = Object.getOwnPropertyNames(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    return o
  }(e, ["target"]), a = y.A.useField("query"), b = l.useRef(null);
  (0, c.Ay)(() => {
    let e = u.A.getSection();
    null != e && (_({
      destinationPanel: e,
      originPanel: null
    }), b.current = e)
  });
  let O = l.useCallback(e => {
      y.A.setState({
        query: e
      })
    }, []),
    [v, x] = l.useState(false);
  return (l.useEffect(() => {
    let e = () => {
      (0, o.flushSync)(() => {
        x(true), (0, g.default)()
      }), setImmediate(() => {
        i.A.logout("settings")
      })
    };
    return d._.subscribe(j.jej.SETTINGS_TRIGGER_LOGOUT, e), () => {
      d._.unsubscribe(j.jej.SETTINGS_TRIGGER_LOGOUT, e)
    }
  }, []), v) ? null : (0, r.jsx)(s.A, function(e) {
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
    partialRoot: m.D,
    emptyState: S,
    sidebarFooter: f.A,
    onPanelChange: e => {
      let t = (0, h.getUserSettingsSectionsByWebUserSettings)().get(e);
      null != t && (_({
        destinationPanel: t,
        originPanel: b.current
      }), b.current = t)
    },
    target: t,
    defaultTarget: p.X.ACCOUNT_PANEL,
    searchQuery: a,
    onSearchChange: O
  }, n))
}

function S() {
  return (0, r.jsxs)("div", {
    className: v.t,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-sm/semibold",
      color: "text-strong",
      children: O.intl.string(O.t.zihbmv)
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: O.intl.string(O.t.XclvsB)
    })]
  })
}