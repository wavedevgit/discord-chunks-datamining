/** Chunk was on 88569 **/
/** chunk id: 245286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./388685.js"), require("./358797.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk24156 = require("./24156.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk493773 = require("./493773.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk886880 = require("./886880.jsx"),
  Chunk82084 = require("./82084.jsx"),
  Chunk131051 = require("./131051.js"),
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
  Chunk942408 = require("./942408.js");

function _(e) {
  let {
    destinationPanel: t,
    originPanel: n
  } = e;
  (0, g.QB)({
    destinationPane: t,
    originPane: n,
    subsection: y.Z.getSubsection(),
    source: y.Z.getAnalyticsLocation(),
    locationStack: y.Z.getAnalyticsLocations()
  })
}

function w(e) {
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
  let l = O.Z.useField("query"),
    {
      node: a,
      directory: u
    } = (0, b.ZP)(h.E, l),
    d = null != t && null != u.entry(t) ? t : true,
    g = o.useRef(null);
  (0, s.ZP)(() => {
    let e = y.Z.getSection();
    null != e && (_({
      destinationPanel: e,
      originPanel: null
    }), g.current = e)
  });
  let [P, C] = o.useState(false);
  return (o.useEffect(() => {
    let e = () => {
      (0, i.flushSync)(() => {
        C(true), (0, v.default)()
      }), setImmediate(() => {
        c.Z.logout("settings")
      })
    };
    return p.S.subscribe(S.CkL.SETTINGS_TRIGGER_LOGOUT, e), () => {
      p.S.unsubscribe(S.CkL.SETTINGS_TRIGGER_LOGOUT, e)
    }
  }, []), P) ? null : (0, r.jsx)(f.Z, function(e) {
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
    root: a,
    directory: u,
    sidebarHeader: k,
    emptyState: E,
    sidebarFooter: m.Z,
    onPanelChange: e => {
      let t = (0, x.getUserSettingsSectionsByWebUserSettings)().get(e);
      null != t && (_({
        destinationPanel: t,
        originPanel: g.current
      }), g.current = t)
    },
    target: d,
    defaultTarget: j.n.ACCOUNT_PANEL
  }, n))
}

function k() {
  let e = Chunk996733.Z.useField("query"),
    t = Chunk473749.useRef(null),
    [n, i] = (0, Chunk243778.US)([Chunk704215.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]),
    c = Chunk473749.useMemo(() => ({
      title: Chunk388032.intl.string(Chunk388032.t.Kv519a),
      body: Chunk388032.intl.string(Chunk388032.t.cTGJBZ),
      badge: "new",
      position: "right",
      align: "center",
      scrollBehavior: "sticky"
    }), []),
    s = Chunk473749.useCallback(e => {
      O.Z.setState({
        query: e
      })
    }, []),
    f = Chunk473749.useCallback(() => {
      Chunk996733.Z.setState({
        query: ""
      })
    }, []);
  return (0, Chunk54381.jsx)("div", {
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk942408.searchBarContainer,
      children: [(0, Chunk54381.jsx)(Chunk481060.E1j, {
        size: "md",
        query: module,
        onChange: Chunk493773,
        onClear: Chunk82084
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk942408.popoverAnchor,
        ref: exports
      }), (0, Chunk54381.jsx)(Chunk886880.Z, {
        dismissibleContentType: Chunk704215.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
        targetElementRef: exports,
        visibleContent: require,
        markAsDismissed: Chunk24156,
        props: Chunk893776
      })]
    })
  })
}

function E() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk942408.emptySearchResultsContainer,
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