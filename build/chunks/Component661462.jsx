/** Chunk was on 30355 **/
/** chunk id: 661462, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => j,
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk128156 = require("./128156.jsx"),
  Chunk311044 = require("./311044.jsx"),
  Chunk408986 = require("./408986.jsx"),
  Chunk778414 = require("./778414.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk883101 = require("./883101.js");

function p(e) {
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
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  var {
    children: t,
    className: n,
    scrollerRef: l
  } = e, i = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["children", "className", "scrollerRef"]);
  return (0, r.jsx)(s.Ttm, b(p({
    ref: l,
    className: a()(g.tabPanelScroller, n),
    fade: true
  }, i), {
    children: t
  }))
}

function y(e) {
  let {
    user: t,
    currentUser: n,
    section: l,
    subsection: i,
    displayProfile: a,
    guildId: s,
    channelId: o,
    onClose: g
  } = e;
  return l === m.oh.ACTIVITY ? (0, r.jsx)(c.Z, {
    user: t,
    currentUser: n,
    displayProfile: a,
    guildId: s,
    channelId: o,
    subsection: i,
    onClose: g
  }) : l === m.oh.MUTUAL_FRIENDS ? (0, r.jsx)(u.Z, {
    user: t,
    guildId: s,
    channelId: o,
    onClose: g
  }) : l === m.oh.MUTUAL_GUILDS ? (0, r.jsx)(d.Z, {
    user: t,
    onClose: g
  }) : l === m.oh.WIDGETS ? (0, r.jsx)(f.C, {
    user: t,
    guildId: s,
    channelId: o
  }) : null
}

function x(e) {
  var t;
  let {
    user: n,
    currentUser: i,
    displayProfile: a,
    guildId: c,
    channelId: u,
    items: d,
    initialSection: f,
    initialSubsection: m,
    onClose: j
  } = e, {
    trackUserProfileAction: x
  } = (0, o.KZ)(), [{
    section: h,
    subsection: v,
    text: O
  }, P] = l.useState(b(p({}, null != (t = d.find(e => {
    let {
      section: t
    } = e;
    return t === f
  })) ? t : d[0]), {
    subsection: m
  }));
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(s.Ttm, {
      orientation: "horizontal",
      className: g.tabListScroller,
      fade: true,
      paddingFix: false,
      children: (0, r.jsx)(s.njP, {
        type: "top",
        look: "custom",
        selectedItem: h,
        onItemSelect: e => {
          x({
            action: "PRESS_SECTION",
            section: e
          }), P(t => {
            var n;
            return null != (n = d.find(t => t.section === e)) ? n : t
          })
        },
        children: d.map(e => (0, r.jsx)(s.njP.Item, {
          className: g.tabBarItem,
          id: e.section,
          "aria-label": e.text,
          children: e.text
        }, e.section))
      })
    }), (0, r.jsx)(s.njP.Panel, {
      id: h,
      "aria-label": O,
      className: g.tabBarPanel,
      children: (0, r.jsx)(y, {
        user: n,
        currentUser: i,
        displayProfile: a,
        guildId: c,
        channelId: u,
        section: h,
        subsection: v,
        onClose: j
      })
    })]
  })
}