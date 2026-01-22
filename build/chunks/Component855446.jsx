/** Chunk was on 97492 **/
/** chunk id: 855446, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => v
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk696292 = require("./696292.js"),
  Chunk397927 = require("./397927.js"),
  Chunk753845 = require("./753845.jsx"),
  Chunk849269 = require("./849269.js"),
  Chunk881343 = require("./881343.jsx"),
  Chunk697675 = require("./697675.jsx"),
  Chunk869003 = require("./869003.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk279240 = require("./279240.js");
let y = ["embedded_cover"],
  O = {
    tension: 800,
    friction: 24
  };
var j = ((r = j || {})[r.THIRTEEN_BY_ELEVEN = 0] = "THIRTEEN_BY_ELEVEN", r[r.SIXTEEN_BY_NINE = 1] = "SIXTEEN_BY_NINE", r);

function v(e) {
  var t;
  let {
    context: n,
    activityItem: r,
    onClick: a,
    aspectRatio: j = 0,
    animatedDivClass: v,
    commandOrigin: x
  } = e, {
    onActivityItemSelected: E,
    imageBackground: _,
    activityAction: C,
    labelType: S
  } = (0, f.Ay)({
    context: n,
    activityItem: r,
    guildId: null != (t = n.channel.getGuildId()) ? t : true,
    locationObject: {},
    onActivityItemSelected: a,
    embeddedActivitiesManager: b.A,
    assetNames: y,
    commandOrigin: x
  }), [I, N] = i.useState(false), T = i.useCallback(() => {
    N(true)
  }, [N]), P = i.useCallback(() => {
    N(false)
  }, [N]), w = i.useMemo(() => (0, l.jsx)("div", {
    className: A.Gz,
    children: (0, l.jsx)("div", {
      className: A.fC,
      children: (0, l.jsx)(h.A, {
        labelType: S
      })
    })
  }), [S]), R = i.useMemo(() => {
    switch (C) {
      case f.o6.JOIN:
        return (0, l.jsx)("div", {
          className: A.m9,
          children: (0, l.jsx)("div", {
            className: A.aF,
            children: (0, l.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: m.intl.string(m.t.VJlc0S)
            })
          })
        });
      case f.o6.LEAVE:
        return (0, l.jsx)("div", {
          className: A.m9,
          children: (0, l.jsx)("div", {
            className: s()(A.aF, A.pS),
            children: (0, l.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: m.intl.string(m.t["wH/wDO"])
            })
          })
        });
      case f.o6.START:
      default:
        return null
    }
  }, [C]);
  return (0, l.jsx)(u.DUT, {
    onClick: E,
    onFocus: T,
    onBlur: P,
    onMouseEnter: T,
    onMouseLeave: P,
    className: A.XA,
    children: (0, l.jsx)(u.c7X, {
      config: O,
      from: {
        value: 0
      },
      to: {
        value: +!!I
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, l.jsx)(u.NPJ, {
          theme: g.NJ8.DARK,
          children: e => (0, l.jsx)(d.A, {
            applicationId: r.application.id,
            questContent: c.u.ACTIVITY_SUGGESTION,
            children: n => (0, l.jsxs)(o.animated.div, {
              ref: n,
              className: s()(e, A.LM, v, {
                [A.$g]: 0 === j,
                [A.J3]: 1 === j
              }),
              style: {
                transform: t.to([0, 1], [1, 1.05]).to(e => "scale(".concat(e, ")"))
              },
              children: [(0, l.jsx)(p.A, {
                imageBackground: _,
                applicationName: r.application.name,
                imageClassName: A.jj,
                imageNotFoundClassName: A.v_
              }), w, R]
            })
          })
        })
      }
    })
  })
}
v.AspectRatio = j