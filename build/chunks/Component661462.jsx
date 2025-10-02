/** Chunk was on 56848 **/
/** chunk id: 661462, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  F: () => b,
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk128156 = require("./128156.jsx"),
  Chunk311044 = require("./311044.jsx"),
  Chunk408986 = require("./408986.jsx"),
  Chunk778414 = require("./778414.jsx"),
  Chunk414655 = require("./414655.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk323056 = require("./323056.js");

function m(e) {
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

function v(e, t) {
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
    scrollerRef: i
  } = e, a = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
  }(e, ["children", "className", "scrollerRef"]);
  return (0, n.jsx)(s.Ttm, v(m({
    ref: i,
    className: l()(p.tabPanelScroller, r),
    fade: true
  }, a), {
    children: t
  }))
}

function y(e) {
  let {
    user: t,
    currentUser: r,
    section: i,
    subsection: a,
    displayProfile: l,
    guildId: s,
    channelId: o,
    onClose: p
  } = e;
  return i === h.oh.ACTIVITY ? (0, n.jsx)(c.Z, {
    user: t,
    currentUser: r,
    displayProfile: l,
    guildId: s,
    channelId: o,
    subsection: a,
    onClose: p
  }) : i === h.oh.MUTUAL_FRIENDS ? (0, n.jsx)(u.Z, {
    user: t,
    guildId: s,
    channelId: o,
    onClose: p
  }) : i === h.oh.MUTUAL_GUILDS ? (0, n.jsx)(d.Z, {
    user: t,
    onClose: p
  }) : i === h.oh.WIDGETS ? (0, n.jsx)(f.C, {
    user: t,
    guildId: s,
    channelId: o
  }) : i === h.oh.WISHLIST ? (0, n.jsx)(g.Z, {
    profileOwner: t
  }) : null
}

function O(e) {
  var t;
  let {
    user: r,
    currentUser: a,
    displayProfile: l,
    guildId: c,
    channelId: u,
    items: d,
    initialSection: f,
    initialSubsection: g,
    onClose: h
  } = e, {
    trackUserProfileAction: b
  } = (0, o.KZ)(), [{
    section: O,
    subsection: j,
    text: S
  }, P] = i.useState(v(m({}, null != (t = d.find(e => {
    let {
      section: t
    } = e;
    return t === f
  })) ? t : d[0]), {
    subsection: g
  }));
  return (0, n.jsxs)("div", {
    className: p.container,
    children: [(0, n.jsx)(s.Ttm, {
      orientation: "horizontal",
      className: p.tabListScroller,
      fade: true,
      paddingFix: false,
      children: (0, n.jsx)(s.njP, {
        type: "top",
        look: "custom",
        selectedItem: O,
        onItemSelect: e => {
          b({
            action: "PRESS_SECTION",
            section: e
          }), P(t => {
            var r;
            return null != (r = d.find(t => t.section === e)) ? r : t
          })
        },
        children: d.map(e => (0, n.jsx)(s.njP.Item, {
          className: p.tabBarItem,
          id: e.section,
          "aria-label": e.text,
          children: e.text
        }, e.section))
      })
    }), (0, n.jsx)(s.njP.Panel, {
      id: O,
      "aria-label": S,
      className: p.tabBarPanel,
      children: (0, n.jsx)(s.y5t, {
        component: (0, n.jsx)(s.nn4, {
          children: (0, n.jsx)(s.H, {
            children: S
          })
        }),
        children: (0, n.jsx)(y, {
          user: r,
          currentUser: a,
          displayProfile: l,
          guildId: c,
          channelId: u,
          section: O,
          subsection: j,
          onClose: h
        })
      })
    })]
  })
}