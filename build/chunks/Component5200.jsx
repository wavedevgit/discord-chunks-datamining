/** Chunk was on 40184 **/
/** chunk id: 5200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => v
}), require("./388685.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk554916 = require("./554916.js"),
  Chunk481060 = require("./481060.js"),
  Chunk542094 = require("./542094.js"),
  Chunk182906 = require("./182906.jsx"),
  Chunk556505 = require("./556505.jsx"),
  Chunk513202 = require("./513202.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk218877 = require("./218877.js");
let b = ["embedded_cover"],
  y = {
    tension: 800,
    friction: 24
  };
var C = ((i = C || {})[i.THIRTEEN_BY_ELEVEN = 0] = "THIRTEEN_BY_ELEVEN", i[i.SIXTEEN_BY_NINE = 1] = "SIXTEEN_BY_NINE", i);

function v(e) {
  var t;
  let {
    context: n,
    activityItem: i,
    onClick: a,
    aspectRatio: C = 0,
    animatedDivClass: v,
    commandOrigin: x
  } = e, {
    onActivityItemSelected: O,
    imageBackground: E,
    activityAction: j,
    labelType: S
  } = (0, u.ZP)({
    context: n,
    activityItem: i,
    guildId: null != (t = n.channel.getGuildId()) ? t : true,
    locationObject: {},
    onActivityItemSelected: a,
    embeddedActivitiesManager: f.Z,
    assetNames: b,
    commandOrigin: x
  }), [_, P] = l.useState(false), I = l.useCallback(() => {
    P(true)
  }, [P]), Z = l.useCallback(() => {
    P(false)
  }, [P]), T = l.useMemo(() => (0, r.jsx)("div", {
    className: g.overlayBadge,
    children: (0, r.jsx)("div", {
      className: g.badgeContainer,
      children: (0, r.jsx)(p.Z, {
        labelType: S
      })
    })
  }), [S]), N = l.useMemo(() => {
    switch (j) {
      case u.JS.JOIN:
        return (0, r.jsx)("div", {
          className: g.activityAction,
          children: (0, r.jsx)("div", {
            className: g.activityActionButton,
            children: (0, r.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: m.intl.string(m.t.VJlc0S)
            })
          })
        });
      case u.JS.LEAVE:
        return (0, r.jsx)("div", {
          className: g.activityAction,
          children: (0, r.jsx)("div", {
            className: o()(g.activityActionButton, g.activityActionButtonDanger),
            children: (0, r.jsx)(c.Text, {
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
  }, [j]);
  return (0, r.jsx)(c.P3F, {
    onClick: O,
    onFocus: I,
    onBlur: Z,
    onMouseEnter: I,
    onMouseLeave: Z,
    className: g.activityItemButtonInnerClass,
    children: (0, r.jsx)(c.AMe, {
      config: y,
      from: {
        value: 0
      },
      to: {
        value: +!!_
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, r.jsx)(c.f6W, {
          theme: h.BRd.DARK,
          children: e => (0, r.jsxs)(s.animated.div, {
            className: o()(e, g.activityItem, v, {
              [g.activityItem_13_11]: 0 === C,
              [g.activityItem_16_9]: 1 === C
            }),
            style: {
              transform: t.to([0, 1], [1, 1.05]).to(e => "scale(".concat(e, ")"))
            },
            children: [(0, r.jsx)(d.Z, {
              imageBackground: E,
              applicationName: i.application.name,
              imageClassName: g.activitySuggestionImage,
              imageNotFoundClassName: g.brokenImageIconWrapper
            }), T, N]
          })
        })
      }
    })
  })
}
v.AspectRatio = C