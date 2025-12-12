/** Chunk was on 49941 **/
/** chunk id: 661462, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => v,
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk128156 = require("./128156.jsx"),
  Chunk311044 = require("./311044.jsx"),
  Chunk408986 = require("./408986.jsx"),
  Chunk778414 = require("./778414.jsx"),
  Chunk414655 = require("./414655.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk883101 = require("./883101.js");

function y(e) {
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

function O(e, t) {
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

function v(e) {
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
  return (0, r.jsx)(o.Ttm, O(y({
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
    guildId: o,
    channelId: s,
    onClose: c
  } = e;
  return i === b.oh.ACTIVITY ? (0, r.jsx)(d.Z, {
    user: t,
    currentUser: n,
    displayProfile: a,
    guildId: o,
    channelId: s,
    subsection: l,
    onClose: c
  }) : i === b.oh.MUTUAL_FRIENDS ? (0, r.jsx)(f.Z, {
    user: t,
    guildId: o,
    channelId: s,
    onClose: c
  }) : i === b.oh.MUTUAL_GUILDS ? (0, r.jsx)(g.Z, {
    user: t,
    onClose: c
  }) : i === b.oh.WIDGETS ? (0, r.jsx)(p.C, {
    user: t,
    guildId: o,
    channelId: s
  }) : i === b.oh.WISHLIST ? (0, r.jsx)(m.Z, {
    profileOwner: t
  }) : null
}

function x(e) {
  var t;
  let {
    user: n,
    currentUser: l,
    displayProfile: a,
    guildId: d,
    channelId: f,
    items: g,
    initialSection: p,
    initialSubsection: m,
    onClose: v
  } = e, {
    trackUserProfileAction: x
  } = (0, s.KZ)(), [{
    section: P,
    subsection: _,
    text: I
  }, w] = i.useState(O(y({}, null != (t = g.find(e => {
    let {
      section: t
    } = e;
    return t === p
  })) ? t : g[0]), {
    subsection: m
  }));
  return (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(o.Ttm, {
      orientation: "horizontal",
      className: h.tabListScroller,
      fade: true,
      paddingFix: false,
      children: (0, r.jsx)(o.njP, {
        type: "top",
        look: "custom",
        selectedItem: P,
        onItemSelect: e => {
          if (u.Z.hasSaveablePendingChanges() && P === b.oh.WIDGETS) return void c.Z.notifyPendingWidgets();
          x({
            action: "PRESS_SECTION",
            section: e
          }), w(t => {
            var n;
            return null != (n = g.find(t => t.section === e)) ? n : t
          })
        },
        children: g.map(e => (0, r.jsx)(o.njP.Item, {
          className: h.tabBarItem,
          id: e.section,
          "aria-label": e.text,
          children: e.text
        }, e.section))
      })
    }), (0, r.jsx)(o.njP.Panel, {
      id: P,
      "aria-label": I,
      className: h.tabBarPanel,
      children: (0, r.jsx)(o.y5t, {
        component: (0, r.jsx)(o.nn4, {
          children: (0, r.jsx)(o.H, {
            children: I
          })
        }),
        children: (0, r.jsx)(j, {
          user: n,
          currentUser: l,
          displayProfile: a,
          guildId: d,
          channelId: f,
          section: P,
          subsection: _,
          onClose: v
        })
      })
    })]
  })
}