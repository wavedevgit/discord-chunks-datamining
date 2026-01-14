/** Chunk was on 81985 **/
/** chunk id: 5200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => O
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk853590 = require("./853590.js"),
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
var v = ((r = v || {})[r.THIRTEEN_BY_ELEVEN = 0] = "THIRTEEN_BY_ELEVEN", r[r.SIXTEEN_BY_NINE = 1] = "SIXTEEN_BY_NINE", r);

function O(e) {
  var t;
  let {
    context: n,
    activityItem: r,
    onClick: a,
    aspectRatio: v = 0,
    animatedDivClass: O,
    commandOrigin: j
  } = e, {
    onActivityItemSelected: x,
    imageBackground: C,
    activityAction: E,
    labelType: S
  } = (0, u.ZP)({
    context: n,
    activityItem: r,
    guildId: null != (t = n.channel.getGuildId()) ? t : true,
    locationObject: {},
    onActivityItemSelected: a,
    embeddedActivitiesManager: f.Z,
    assetNames: b,
    commandOrigin: j
  }), [_, I] = l.useState(false), P = l.useCallback(() => {
    I(true)
  }, [I]), Z = l.useCallback(() => {
    I(false)
  }, [I]), N = l.useMemo(() => (0, i.jsx)("div", {
    className: m.overlayBadge,
    children: (0, i.jsx)("div", {
      className: m.badgeContainer,
      children: (0, i.jsx)(p.Z, {
        labelType: S
      })
    })
  }), [S]), T = l.useMemo(() => {
    switch (E) {
      case u.JS.JOIN:
        return (0, i.jsx)("div", {
          className: m.activityAction,
          children: (0, i.jsx)("div", {
            className: m.activityActionButton,
            children: (0, i.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: g.intl.string(g.t.VJlc0S)
            })
          })
        });
      case u.JS.LEAVE:
        return (0, i.jsx)("div", {
          className: m.activityAction,
          children: (0, i.jsx)("div", {
            className: o()(m.activityActionButton, m.activityActionButtonDanger),
            children: (0, i.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: g.intl.string(g.t["wH/wDO"])
            })
          })
        });
      case u.JS.START:
      default:
        return null
    }
  }, [E]);
  return (0, i.jsx)(c.P3F, {
    onClick: x,
    onFocus: P,
    onBlur: Z,
    onMouseEnter: P,
    onMouseLeave: Z,
    className: m.activityItemButtonInnerClass,
    children: (0, i.jsx)(c.AMe, {
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
        return (0, i.jsx)(c.f6W, {
          theme: h.BRd.DARK,
          children: e => (0, i.jsxs)(s.animated.div, {
            className: o()(e, m.activityItem, O, {
              [m.activityItem_13_11]: 0 === v,
              [m.activityItem_16_9]: 1 === v
            }),
            style: {
              transform: t.to([0, 1], [1, 1.05]).to(e => "scale(".concat(e, ")"))
            },
            children: [(0, i.jsx)(d.Z, {
              imageBackground: C,
              applicationName: r.application.name,
              imageClassName: m.activitySuggestionImage,
              imageNotFoundClassName: m.brokenImageIconWrapper
            }), N, T]
          })
        })
      }
    })
  })
}
O.AspectRatio = v