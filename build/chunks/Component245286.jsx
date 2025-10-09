/** Chunk was on 75685 **/
/** chunk id: 245286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk886880 = require("./886880.jsx"),
  Chunk82084 = require("./82084.jsx"),
  Chunk131051 = require("./131051.js"),
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

function C(e) {
  let {
    destinationPanel: t,
    originPanel: n
  } = e;
  (0, p.QB)({
    destinationPane: t,
    originPane: n,
    subsection: b.Z.getSubsection(),
    source: b.Z.getAnalyticsLocation(),
    locationStack: b.Z.getAnalyticsLocations()
  })
}

function S(e) {
  var t, {
      target: n
    } = e,
    i = function(e, t) {
      if (null == e) return {};
      var n, r, l = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["target"]);
  let a = j.Z.useField("query"),
    {
      node: c,
      directory: u
    } = (0, f.Z)(y.Z, a),
    p = (t = v.n.ACCOUNT_PANEL, null == u.entry(n) ? t : n),
    g = l.useRef(null);
  return ((0, s.ZP)(() => {
    let e = b.Z.getSection();
    null != e && (C({
      destinationPanel: e,
      originPanel: null
    }), g.current = e)
  }), (0, o.e7)([m.default], () => null != m.default.getCurrentUser())) ? (0, r.jsx)(d.Z, function(e) {
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
    root: c,
    directory: u,
    sidebarHeader: P,
    emptyState: _,
    sidebarFooter: x.Z,
    onPanelChange: e => {
      let t = (0, h.getUserSettingsSectionsByWebUserSettings)().get(e);
      null != t && (C({
        destinationPanel: t,
        originPanel: g.current
      }), g.current = t)
    },
    target: p
  }, i)) : null
}

function P() {
  let e = Chunk996733.Z.useField("query"),
    t = Chunk647438.useRef(null),
    [n, o] = (0, Chunk243778.US)([Chunk704215.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]),
    s = Chunk647438.useMemo(() => ({
      title: Chunk388032.intl.string(Chunk388032.t.Kv519f),
      body: Chunk388032.intl.string(Chunk388032.t.cTGJBQ),
      badge: "new",
      position: "right",
      align: "center",
      scrollBehavior: "sticky"
    }), []),
    d = Chunk647438.useCallback(e => {
      j.Z.setState({
        query: e
      })
    }, []),
    f = Chunk647438.useCallback(() => {
      Chunk996733.Z.setState({
        query: ""
      })
    }, []);
  return (0, Chunk951288.jsx)("div", {
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk942408.searchBarContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.E1j, {
        size: "md",
        query: module,
        onChange: Chunk82084,
        onClear: Chunk131051
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk942408.popoverAnchor,
        ref: exports
      }), (0, Chunk951288.jsx)(Chunk886880.Z, {
        dismissibleContentType: Chunk704215.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
        targetElementRef: exports,
        visibleContent: require,
        markAsDismissed: Chunk442837,
        props: Chunk493773
      })]
    })
  })
}

function _() {
  return (0, Chunk951288.jsxs)("div", {
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
  })
}