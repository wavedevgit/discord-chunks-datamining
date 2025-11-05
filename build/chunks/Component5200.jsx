/** Chunk was on 88647 **/
/** chunk id: 5200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => C
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk426322 = require("./426322.js"),
  Chunk481060 = require("./481060.js"),
  Chunk542094 = require("./542094.js"),
  Chunk182906 = require("./182906.jsx"),
  Chunk556505 = require("./556505.jsx"),
  Chunk513202 = require("./513202.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk748788 = require("./748788.js");
let b = ["embedded_cover"],
  _ = {
    tension: 800,
    friction: 24
  };
var y = ((r = y || {})[r.THIRTEEN_BY_ELEVEN = 0] = "THIRTEEN_BY_ELEVEN", r[r.SIXTEEN_BY_NINE = 1] = "SIXTEEN_BY_NINE", r);

function C(e) {
  var t;
  let {
    context: n,
    activityItem: r,
    onClick: a,
    aspectRatio: y = 0,
    animatedDivClass: C,
    commandOrigin: v
  } = e, {
    onActivityItemSelected: O,
    imageBackground: x,
    activityAction: E,
    labelType: j
  } = (0, u.ZP)({
    context: n,
    activityItem: r,
    guildId: null != (t = n.channel.getGuildId()) ? t : true,
    locationObject: {},
    onActivityItemSelected: a,
    embeddedActivitiesManager: f.Z,
    assetNames: b,
    commandOrigin: v
  }), [S, P] = l.useState(false), I = l.useCallback(() => {
    P(true)
  }, [P]), Z = l.useCallback(() => {
    P(false)
  }, [P]), T = l.useMemo(() => (0, i.jsx)("div", {
    className: g.overlayBadge,
    children: (0, i.jsx)("div", {
      className: g.badgeContainer,
      children: (0, i.jsx)(p.Z, {
        labelType: j
      })
    })
  }), [j]), N = l.useMemo(() => {
    switch (E) {
      case u.JS.JOIN:
        return (0, i.jsx)("div", {
          className: g.activityAction,
          children: (0, i.jsx)("div", {
            className: g.activityActionButton,
            children: (0, i.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: m.intl.string(m.t.VJlc0S)
            })
          })
        });
      case u.JS.LEAVE:
        return (0, i.jsx)("div", {
          className: g.activityAction,
          children: (0, i.jsx)("div", {
            className: o()(g.activityActionButton, g.activityActionButtonDanger),
            children: (0, i.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: m.intl.string(m.t["wH/wDO"])
            })
          })
        });
      case u.JS.START:
      default:
        return null
    }
  }, [E]);
  return (0, i.jsx)(c.P3F, {
    onClick: O,
    onFocus: I,
    onBlur: Z,
    onMouseEnter: I,
    onMouseLeave: Z,
    className: g.activityItemButtonInnerClass,
    children: (0, i.jsx)(c.AMe, {
      config: _,
      from: {
        value: 0
      },
      to: {
        value: +!!S
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, i.jsx)(c.f6W, {
          theme: h.BRd.DARK,
          children: e => (0, i.jsxs)(s.animated.div, {
            className: o()(e, g.activityItem, C, {
              [g.activityItem_13_11]: 0 === y,
              [g.activityItem_16_9]: 1 === y
            }),
            style: {
              transform: t.to([0, 1], [1, 1.05]).to(e => "scale(".concat(e, ")"))
            },
            children: [(0, i.jsx)(d.Z, {
              imageBackground: x,
              applicationName: r.application.name,
              imageClassName: g.activitySuggestionImage,
              imageNotFoundClassName: g.brokenImageIconWrapper
            }), T, N]
          })
        })
      }
    })
  })
}
C.AspectRatio = y