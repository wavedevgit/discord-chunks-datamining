/** Chunk was on 78528 **/
/** chunk id: 855446, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => j
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
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
  _ = {
    tension: 800,
    friction: 24
  };
var O = ((r = O || {})[r.THIRTEEN_BY_ELEVEN = 0] = "THIRTEEN_BY_ELEVEN", r[r.SIXTEEN_BY_NINE = 1] = "SIXTEEN_BY_NINE", r);

function j(e) {
  var t;
  let {
    context: n,
    activityItem: r,
    onClick: s,
    aspectRatio: O = 0,
    animatedDivClass: j,
    commandOrigin: v
  } = e, {
    onActivityItemSelected: x,
    imageBackground: E,
    activityAction: C,
    labelType: S
  } = (0, p.Ay)({
    context: n,
    activityItem: r,
    guildId: null != (t = n.channel.getGuildId()) ? t : true,
    locationObject: {},
    onActivityItemSelected: s,
    embeddedActivitiesManager: g.A,
    assetNames: y,
    commandOrigin: v
  }), [I, N] = i.useState(false), T = i.useCallback(() => {
    N(true)
  }, [N]), P = i.useCallback(() => {
    N(false)
  }, [N]), w = i.useMemo(() => (0, l.jsx)("div", {
    className: A.Gz,
    children: (0, l.jsx)("div", {
      className: A.fC,
      children: (0, l.jsx)(f.A, {
        labelType: S
      })
    })
  }), [S]), R = i.useMemo(() => {
    switch (C) {
      case p.o6.JOIN:
        return (0, l.jsx)("div", {
          className: A.m9,
          children: (0, l.jsx)("div", {
            className: A.aF,
            children: (0, l.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: b.intl.string(b.t.VJlc0S)
            })
          })
        });
      case p.o6.LEAVE:
        return (0, l.jsx)("div", {
          className: A.m9,
          children: (0, l.jsx)("div", {
            className: a()(A.aF, A.pS),
            children: (0, l.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: b.intl.string(b.t["wH/wDO"])
            })
          })
        });
      case p.o6.START:
      default:
        return null
    }
  }, [C]);
  return (0, l.jsx)(u.DUT, {
    onClick: x,
    onFocus: T,
    onBlur: P,
    onMouseEnter: T,
    onMouseLeave: P,
    className: A.XA,
    children: (0, l.jsx)(u.c7X, {
      config: _,
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
          theme: m.NJ8.DARK,
          children: e => (0, l.jsx)(d.A, {
            applicationId: r.application.id,
            questContent: c.u.ACTIVITY_SUGGESTION,
            children: n => (0, l.jsxs)(o.animated.div, {
              ref: n,
              className: a()(e, A.LM, j, {
                [A.$g]: 0 === O,
                [A.J3]: 1 === O
              }),
              style: {
                transform: t.to([0, 1], [1, 1.05]).to(e => "scale(".concat(e, ")"))
              },
              children: [(0, l.jsx)(h.A, {
                imageBackground: E,
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
j.AspectRatio = O