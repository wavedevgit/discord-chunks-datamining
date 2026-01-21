/** Chunk was on 82124 **/
/** chunk id: 5200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => x
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
  Chunk636977 = require("./636977.js"),
  Chunk481060 = require("./481060.js"),
  Chunk633181 = require("./633181.jsx"),
  Chunk542094 = require("./542094.js"),
  Chunk182906 = require("./182906.jsx"),
  Chunk556505 = require("./556505.jsx"),
  Chunk513202 = require("./513202.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk218877 = require("./218877.js");
let v = ["embedded_cover"],
  O = {
    tension: 800,
    friction: 24
  };
var j = ((r = j || {})[r.THIRTEEN_BY_ELEVEN = 0] = "THIRTEEN_BY_ELEVEN", r[r.SIXTEEN_BY_NINE = 1] = "SIXTEEN_BY_NINE", r);

function x(e) {
  var t;
  let {
    context: n,
    activityItem: r,
    onClick: a,
    aspectRatio: j = 0,
    animatedDivClass: x,
    commandOrigin: C
  } = e, {
    onActivityItemSelected: E,
    imageBackground: S,
    activityAction: _,
    labelType: I
  } = (0, p.ZP)({
    context: n,
    activityItem: r,
    guildId: null != (t = n.channel.getGuildId()) ? t : true,
    locationObject: {},
    onActivityItemSelected: a,
    embeddedActivitiesManager: g.Z,
    assetNames: v,
    commandOrigin: C
  }), [P, Z] = l.useState(false), N = l.useCallback(() => {
    Z(true)
  }, [Z]), T = l.useCallback(() => {
    Z(false)
  }, [Z]), A = l.useMemo(() => (0, i.jsx)("div", {
    className: y.overlayBadge,
    children: (0, i.jsx)("div", {
      className: y.badgeContainer,
      children: (0, i.jsx)(h.Z, {
        labelType: I
      })
    })
  }), [I]), w = l.useMemo(() => {
    switch (_) {
      case p.JS.JOIN:
        return (0, i.jsx)("div", {
          className: y.activityAction,
          children: (0, i.jsx)("div", {
            className: y.activityActionButton,
            children: (0, i.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: b.intl.string(b.t.VJlc0S)
            })
          })
        });
      case p.JS.LEAVE:
        return (0, i.jsx)("div", {
          className: y.activityAction,
          children: (0, i.jsx)("div", {
            className: o()(y.activityActionButton, y.activityActionButtonDanger),
            children: (0, i.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: b.intl.string(b.t["wH/wDO"])
            })
          })
        });
      case p.JS.START:
      default:
        return null
    }
  }, [_]);
  return (0, i.jsx)(u.P3F, {
    onClick: E,
    onFocus: N,
    onBlur: T,
    onMouseEnter: N,
    onMouseLeave: T,
    className: y.activityItemButtonInnerClass,
    children: (0, i.jsx)(u.AMe, {
      config: O,
      from: {
        value: 0
      },
      to: {
        value: +!!P
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, i.jsx)(u.f6W, {
          theme: m.BRd.DARK,
          children: e => (0, i.jsx)(d.Z, {
            applicationId: r.application.id,
            questContent: c.j.ACTIVITY_SUGGESTION,
            children: n => (0, i.jsxs)(s.animated.div, {
              ref: n,
              className: o()(e, y.activityItem, x, {
                [y.activityItem_13_11]: 0 === j,
                [y.activityItem_16_9]: 1 === j
              }),
              style: {
                transform: t.to([0, 1], [1, 1.05]).to(e => "scale(".concat(e, ")"))
              },
              children: [(0, i.jsx)(f.Z, {
                imageBackground: S,
                applicationName: r.application.name,
                imageClassName: y.activitySuggestionImage,
                imageNotFoundClassName: y.brokenImageIconWrapper
              }), A, w]
            })
          })
        })
      }
    })
  })
}
x.AspectRatio = j