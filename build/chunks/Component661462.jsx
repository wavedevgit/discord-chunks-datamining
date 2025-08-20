/** Chunk was on 16811 **/
/** chunk id: 661462, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk128156 = require("./128156.jsx"),
  Chunk311044 = require("./311044.jsx"),
  Chunk408986 = require("./408986.jsx"),
  Chunk778414 = require("./778414.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk883101 = require("./883101.js");

function m(e) {
  let {
    user: n,
    currentUser: t,
    section: o,
    subsection: l,
    displayProfile: i,
    guildId: f,
    channelId: m,
    onClose: p
  } = e;
  return o === u.oh.ACTIVITY ? (0, r.jsx)(c.Z, {
    user: n,
    currentUser: t,
    displayProfile: i,
    guildId: f,
    channelId: m,
    subsection: l,
    onClose: p
  }) : o === u.oh.MUTUAL_FRIENDS ? (0, r.jsx)(a.Z, {
    user: n,
    guildId: f,
    channelId: m,
    onClose: p
  }) : o === u.oh.MUTUAL_GUILDS ? (0, r.jsx)(s.Z, {
    user: n,
    onClose: p
  }) : o === u.oh.WIDGETS ? (0, r.jsx)(d.C, {
    user: n,
    guildId: f,
    channelId: m
  }) : null
}

function p(e) {
  var n, t, c;
  let {
    user: a,
    currentUser: s,
    displayProfile: d,
    guildId: u,
    channelId: p,
    items: b,
    initialSection: g,
    initialSubsection: x,
    onClose: h
  } = e, {
    trackUserProfileAction: j
  } = (0, i.KZ)(), [{
    section: v,
    subsection: _,
    text: y
  }, I] = o.useState((t = function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        r = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.forEach(function(n) {
        var r;
        r = t[n], n in e ? Object.defineProperty(e, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = r
      })
    }
    return e
  }({}, null != (n = b.find(e => {
    let {
      section: n
    } = e;
    return n === g
  })) ? n : b[0]), c = c = {
    subsection: x
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(c)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(c)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(c, e))
  }), t));
  return (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsx)(l.Ttm, {
      orientation: "horizontal",
      className: f.scroller,
      fade: true,
      paddingFix: false,
      children: (0, r.jsx)(l.njP, {
        type: "top",
        look: "custom",
        selectedItem: v,
        onItemSelect: e => {
          j({
            action: "PRESS_SECTION",
            section: e
          }), I(n => {
            var t;
            return null != (t = b.find(n => n.section === e)) ? t : n
          })
        },
        children: b.map(e => (0, r.jsx)(l.njP.Item, {
          className: f.tabBarItem,
          id: e.section,
          "aria-label": e.text,
          children: e.text
        }, e.section))
      })
    }), (0, r.jsx)(l.njP.Panel, {
      id: v,
      "aria-label": y,
      className: f.tabBarPanel,
      children: (0, r.jsx)(m, {
        user: a,
        currentUser: s,
        displayProfile: d,
        guildId: u,
        channelId: p,
        section: v,
        subsection: _,
        onClose: h
      })
    })]
  })
}