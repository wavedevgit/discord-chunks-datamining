/** Chunk was on 29458 **/
/** chunk id: 661462, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk128156 = require("./128156.jsx"),
  Chunk311044 = require("./311044.jsx"),
  Chunk408986 = require("./408986.jsx"),
  Chunk778414 = require("./778414.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk521469 = require("./521469.js");

function p(e) {
  let {
    user: t,
    currentUser: n,
    section: l,
    subsection: i,
    displayProfile: o,
    guildId: f,
    channelId: p,
    onClose: m
  } = e;
  return l === u.oh.ACTIVITY ? (0, r.jsx)(a.Z, {
    user: t,
    currentUser: n,
    displayProfile: o,
    guildId: f,
    channelId: p,
    subsection: i,
    onClose: m
  }) : l === u.oh.MUTUAL_FRIENDS ? (0, r.jsx)(c.Z, {
    user: t,
    guildId: f,
    channelId: p,
    onClose: m
  }) : l === u.oh.MUTUAL_GUILDS ? (0, r.jsx)(s.Z, {
    user: t,
    onClose: m
  }) : l === u.oh.WIDGETS ? (0, r.jsx)(d.C, {
    user: t,
    guildId: f,
    channelId: p
  }) : null
}

function m(e) {
  var t, n, a;
  let {
    user: c,
    currentUser: s,
    displayProfile: d,
    guildId: u,
    channelId: m,
    items: g,
    initialSection: b,
    initialSubsection: j,
    onClose: y
  } = e, {
    trackUserProfileAction: x
  } = (0, o.KZ)(), [{
    section: h,
    subsection: O,
    text: v
  }, _] = l.useState((n = function(e) {
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
  }({}, null != (t = g.find(e => {
    let {
      section: t
    } = e;
    return t === b
  })) ? t : g[0]), a = a = {
    subsection: j
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(a)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
  }), n));
  return (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsx)(i.Ttm, {
      orientation: "horizontal",
      className: f.scroller,
      fade: true,
      paddingFix: false,
      children: (0, r.jsx)(i.njP, {
        type: "top",
        look: "custom",
        selectedItem: h,
        onItemSelect: e => {
          x({
            action: "PRESS_SECTION",
            section: e
          }), _(t => {
            var n;
            return null != (n = g.find(t => t.section === e)) ? n : t
          })
        },
        children: g.map(e => (0, r.jsx)(i.njP.Item, {
          className: f.tabBarItem,
          id: e.section,
          "aria-label": e.text,
          children: e.text
        }, e.section))
      })
    }), (0, r.jsx)(i.njP.Panel, {
      id: h,
      "aria-label": v,
      className: f.tabBarPanel,
      children: (0, r.jsx)(p, {
        user: c,
        currentUser: s,
        displayProfile: d,
        guildId: u,
        channelId: m,
        section: h,
        subsection: O,
        onClose: y
      })
    })]
  })
}