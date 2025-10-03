/** Chunk was on 56848 **/
/** chunk id: 661462, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => y,
  Z: () => b
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
  Chunk414655 = require("./414655.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk883101 = require("./883101.js");

function m(e) {
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

function v(e, t) {
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

function y(e) {
  var {
    children: t,
    className: n,
    scrollerRef: i
  } = e, l = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["children", "className", "scrollerRef"]);
  return (0, r.jsx)(s.Ttm, v(m({
    ref: i,
    className: a()(h.tabPanelScroller, n),
    fade: true
  }, l), {
    children: t
  }))
}

function j(e) {
  let {
    user: t,
    currentUser: n,
    section: i,
    subsection: l,
    displayProfile: a,
    guildId: s,
    channelId: o,
    onClose: h
  } = e;
  return i === p.oh.ACTIVITY ? (0, r.jsx)(c.Z, {
    user: t,
    currentUser: n,
    displayProfile: a,
    guildId: s,
    channelId: o,
    subsection: l,
    onClose: h
  }) : i === p.oh.MUTUAL_FRIENDS ? (0, r.jsx)(u.Z, {
    user: t,
    guildId: s,
    channelId: o,
    onClose: h
  }) : i === p.oh.MUTUAL_GUILDS ? (0, r.jsx)(d.Z, {
    user: t,
    onClose: h
  }) : i === p.oh.WIDGETS ? (0, r.jsx)(f.C, {
    user: t,
    guildId: s,
    channelId: o
  }) : i === p.oh.WISHLIST ? (0, r.jsx)(g.Z, {
    profileOwner: t
  }) : null
}

function b(e) {
  var t;
  let {
    user: n,
    currentUser: l,
    displayProfile: a,
    guildId: c,
    channelId: u,
    items: d,
    initialSection: f,
    initialSubsection: g,
    onClose: p
  } = e, {
    trackUserProfileAction: y
  } = (0, o.KZ)(), [{
    section: b,
    subsection: O,
    text: x
  }, P] = i.useState(v(m({}, null != (t = d.find(e => {
    let {
      section: t
    } = e;
    return t === f
  })) ? t : d[0]), {
    subsection: g
  }));
  return (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(s.Ttm, {
      orientation: "horizontal",
      className: h.tabListScroller,
      fade: true,
      paddingFix: false,
      children: (0, r.jsx)(s.njP, {
        type: "top",
        look: "custom",
        selectedItem: b,
        onItemSelect: e => {
          y({
            action: "PRESS_SECTION",
            section: e
          }), P(t => {
            var n;
            return null != (n = d.find(t => t.section === e)) ? n : t
          })
        },
        children: d.map(e => (0, r.jsx)(s.njP.Item, {
          className: h.tabBarItem,
          id: e.section,
          "aria-label": e.text,
          children: e.text
        }, e.section))
      })
    }), (0, r.jsx)(s.njP.Panel, {
      id: b,
      "aria-label": x,
      className: h.tabBarPanel,
      children: (0, r.jsx)(s.y5t, {
        component: (0, r.jsx)(s.nn4, {
          children: (0, r.jsx)(s.H, {
            children: x
          })
        }),
        children: (0, r.jsx)(j, {
          user: n,
          currentUser: l,
          displayProfile: a,
          guildId: c,
          channelId: u,
          section: b,
          subsection: O,
          onClose: p
        })
      })
    })]
  })
}