/** Chunk was on 30355 **/
/** chunk id: 661462, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  F: () => b,
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function b(e) {
  var {
    children: t,
    className: r,
    scrollerRef: l
  } = e, i = function(e, t) {
    if (null == e) return {};
    var r, n, l = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
    }
    return l
  }(e, ["children", "className", "scrollerRef"]);
  return (0, n.jsx)(a.Ttm, j(p({
    ref: l,
    className: s()(m.tabPanelScroller, r),
    fade: true
  }, i), {
    children: t
  }))
}

function h(e) {
  let {
    user: t,
    currentUser: r,
    section: l,
    subsection: i,
    displayProfile: s,
    guildId: a,
    channelId: o,
    onClose: m
  } = e;
  return l === g.oh.ACTIVITY ? (0, n.jsx)(c.Z, {
    user: t,
    currentUser: r,
    displayProfile: s,
    guildId: a,
    channelId: o,
    subsection: i,
    onClose: m
  }) : l === g.oh.MUTUAL_FRIENDS ? (0, n.jsx)(u.Z, {
    user: t,
    guildId: a,
    channelId: o,
    onClose: m
  }) : l === g.oh.MUTUAL_GUILDS ? (0, n.jsx)(d.Z, {
    user: t,
    onClose: m
  }) : l === g.oh.WIDGETS ? (0, n.jsx)(f.C, {
    user: t,
    guildId: a,
    channelId: o
  }) : null
}

function x(e) {
  var t;
  let {
    user: r,
    currentUser: i,
    displayProfile: s,
    guildId: c,
    channelId: u,
    items: d,
    initialSection: f,
    initialSubsection: g,
    onClose: b
  } = e, {
    trackUserProfileAction: x
  } = (0, o.KZ)(), [{
    section: O,
    subsection: v,
    text: y
  }, P] = l.useState(j(p({}, null != (t = d.find(e => {
    let {
      section: t
    } = e;
    return t === f
  })) ? t : d[0]), {
    subsection: g
  }));
  return (0, n.jsxs)("div", {
    className: m.container,
    children: [(0, n.jsx)(a.Ttm, {
      orientation: "horizontal",
      className: m.tabListScroller,
      fade: true,
      paddingFix: false,
      children: (0, n.jsx)(a.njP, {
        type: "top",
        look: "custom",
        selectedItem: O,
        onItemSelect: e => {
          x({
            action: "PRESS_SECTION",
            section: e
          }), P(t => {
            var r;
            return null != (r = d.find(t => t.section === e)) ? r : t
          })
        },
        children: d.map(e => (0, n.jsx)(a.njP.Item, {
          className: m.tabBarItem,
          id: e.section,
          "aria-label": e.text,
          children: e.text
        }, e.section))
      })
    }), (0, n.jsx)(a.njP.Panel, {
      id: O,
      "aria-label": y,
      className: m.tabBarPanel,
      children: (0, n.jsx)(h, {
        user: r,
        currentUser: i,
        displayProfile: s,
        guildId: c,
        channelId: u,
        section: O,
        subsection: v,
        onClose: b
      })
    })]
  })
}