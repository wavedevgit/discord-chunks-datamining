/** Chunk was on 39442 **/
/** chunk id: 661462, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => y,
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk237297 = require("./237297.js");

function y(e) {
  var t, n, {
      children: i,
      className: a,
      scrollerRef: c
    } = e,
    s = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["children", "className", "scrollerRef"]);
  return (0, r.jsx)(o.Ttm, (t = function(e) {
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
    ref: c,
    className: l()(h.tabPanelScroller, a),
    fade: true
  }, s), n = n = {
    children: i
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}

function v(e) {
  let {
    user: t,
    currentUser: n,
    section: i,
    displayProfile: a,
    guildId: l,
    channelId: o,
    onClose: c
  } = e;
  return i === m.oh.ACTIVITY ? (0, r.jsx)(d.Z, {
    user: t,
    currentUser: n,
    displayProfile: a,
    guildId: l,
    channelId: o,
    onClose: c
  }) : i === m.oh.MUTUAL_FRIENDS ? (0, r.jsx)(f.Z, {
    user: t,
    guildId: l,
    channelId: o,
    onClose: c
  }) : i === m.oh.MUTUAL_GUILDS ? (0, r.jsx)(g.Z, {
    user: t,
    onClose: c
  }) : i === m.oh.WIDGETS ? (0, r.jsx)(p.C, {
    user: t,
    guildId: l,
    channelId: o
  }) : i === m.oh.WISHLIST ? (0, r.jsx)(b.Z, {
    profileOwner: t
  }) : null
}

function O(e) {
  var t;
  let {
    user: n,
    currentUser: a,
    displayProfile: l,
    guildId: d,
    channelId: f,
    items: g,
    initialSection: p,
    onClose: b
  } = e, {
    trackUserProfileAction: y
  } = (0, c.KZ)(), [{
    section: O,
    text: j
  }, x] = i.useState(null != (t = g.find(e => {
    let {
      section: t
    } = e;
    return t === p
  })) ? t : g[0]);
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
        selectedItem: O,
        onItemSelect: e => {
          if (u.Z.hasUnsavedChanges() && O === m.oh.WIDGETS) return void s.Z.notifyUnsavedWidgets();
          y({
            action: "PRESS_SECTION",
            section: e
          }), x(t => {
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
      id: O,
      "aria-label": j,
      className: h.tabBarPanel,
      children: (0, r.jsx)(o.y5t, {
        component: (0, r.jsx)(o.nn4, {
          children: (0, r.jsx)(o.H, {
            children: j
          })
        }),
        children: (0, r.jsx)(v, {
          user: n,
          currentUser: a,
          displayProfile: l,
          guildId: d,
          channelId: f,
          section: O,
          onClose: b
        })
      })
    })]
  })
}