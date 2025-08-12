/** Chunk was on web.js **/
/** chunk id: 5200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
  Chunk481060 = require("./481060.js"),
  Chunk542094 = require("./542094.js"),
  Chunk182906 = require("./182906.jsx"),
  Chunk556505 = require("./556505.jsx"),
  Chunk513202 = require("./513202.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk968216 = require("./968216.js");
let m = ["embedded_cover"],
  g = {
    tension: 800,
    friction: 24
  };
var E = function(e) {
  return e[e.THIRTEEN_BY_ELEVEN = 0] = "THIRTEEN_BY_ELEVEN", e[e.SIXTEEN_BY_NINE = 1] = "SIXTEEN_BY_NINE", e
}(E || {});

function b(e) {
  var t;
  let {
    context: n,
    activityItem: o,
    onClick: E,
    aspectRatio: b = 0,
    animatedDivClass: y,
    commandOrigin: O
  } = e, {
    onActivityItemSelected: v,
    imageBackground: I,
    activityAction: T,
    labelType: S
  } = (0, c.ZP)({
    context: n,
    activityItem: o,
    guildId: null != (t = n.channel.getGuildId()) ? t : true,
    locationObject: {},
    onActivityItemSelected: E,
    embeddedActivitiesManager: f.Z,
    assetNames: m,
    commandOrigin: O
  }), [A, N] = i.useState(false), C = i.useCallback(() => {
    N(true)
  }, [N]), R = i.useCallback(() => {
    N(false)
  }, [N]), P = i.useMemo(() => (0, r.jsx)("div", {
    className: h.overlayBadge,
    children: (0, r.jsx)("div", {
      className: h.badgeContainer,
      children: (0, r.jsx)(d.Z, {
        labelType: S
      })
    })
  }), [S]), w = i.useMemo(() => {
    switch (T) {
      case c.JS.JOIN:
        return (0, r.jsx)("div", {
          className: h.activityAction,
          children: (0, r.jsx)("div", {
            className: h.activityActionButton,
            children: (0, r.jsx)(l.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: p.intl.string(p.t.VJlc0d)
            })
          })
        });
      case c.JS.LEAVE:
        return (0, r.jsx)("div", {
          className: h.activityAction,
          children: (0, r.jsx)("div", {
            className: a()(h.activityActionButton, h.activityActionButtonDanger),
            children: (0, r.jsx)(l.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: p.intl.string(p.t["wH/wDA"])
            })
          })
        });
      case c.JS.START:
      default:
        return null
    }
  }, [T]);
  return (0, r.jsx)(l.P3F, {
    onClick: v,
    onFocus: C,
    onBlur: R,
    onMouseEnter: C,
    onMouseLeave: R,
    className: h.activityItemButtonInnerClass,
    children: (0, r.jsx)(l.AMe, {
      config: g,
      from: {
        value: 0
      },
      to: {
        value: +!!A
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, r.jsx)(l.f6W, {
          theme: _.BRd.DARK,
          children: e => (0, r.jsxs)(s.animated.div, {
            className: a()(e, h.activityItem, y, {
              [h.activityItem_13_11]: 0 === b,
              [h.activityItem_16_9]: 1 === b
            }),
            style: {
              transform: t.to([0, 1], [1, 1.05]).to(e => "scale(".concat(e, ")"))
            },
            children: [(0, r.jsx)(u.Z, {
              imageBackground: I,
              applicationName: o.application.name,
              imageClassName: h.activitySuggestionImage,
              imageNotFoundClassName: h.brokenImageIconWrapper
            }), P, w]
          })
        })
      }
    })
  })
}
b.AspectRatio = E