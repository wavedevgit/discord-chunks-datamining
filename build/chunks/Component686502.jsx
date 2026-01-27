/** Chunk was on 77870 **/
/** chunk id: 686502, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => C
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk887700 = require("./887700.js"),
  Chunk855446 = require("./855446.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk975412 = require("./975412.jsx"),
  Chunk392054 = require("./392054.js"),
  Chunk826673 = require("./826673.js"),
  Chunk757293 = require("./757293.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk272812 = require("./272812.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk89996 = require("./89996.js"),
  Chunk867010 = require("./867010.js");

function C(e) {
  let {
    channel: t,
    guild: n,
    width: l,
    inPopout: i,
    handleClose: s,
    userParticipantCount: a
  } = e;
  return l < 250 ? (0, r.jsx)(S, {
    channel: t,
    guild: n,
    width: l,
    inPopout: i,
    handleClose: s,
    userParticipantCount: a
  }) : a > 1 ? (0, r.jsx)(N, {
    channel: t,
    guild: n,
    width: l,
    inPopout: i,
    handleClose: s,
    userParticipantCount: a
  }) : (0, r.jsx)(I, {
    channel: t,
    guild: n,
    width: l,
    inPopout: i
  })
}

function S(e) {
  let {
    channel: t,
    inPopout: n,
    handleClose: l
  } = e, {
    analyticsLocations: i,
    newestAnalyticsLocation: a
  } = (0, g.Ay)(f.A.VC_TILE_ACTIVITY_SHELF_BUTTON);
  return (0, r.jsx)(g.f5, {
    value: i,
    children: (0, r.jsxs)(O.A, {
      className: x.zr,
      children: [(0, r.jsx)(c.m, {
        asContainer: true,
        text: v.intl.string(v.t.qJvTKQ),
        children: (0, r.jsx)(u.DUT, {
          onClick: () => {
            (0, m.A)({
              context: null != t ? {
                type: "channel",
                channel: t
              } : {
                type: "contextless"
              },
              openInPopout: n,
              analyticsLocation: a
            })
          },
          className: x.F1,
          children: (0, r.jsx)("div", {
            className: x.zc,
            children: (0, r.jsx)(u.k9F, {
              size: "custom",
              color: "currentColor",
              width: 40,
              height: 40
            })
          })
        })
      }), (0, r.jsx)(u.NPJ, {
        theme: j.NJ8.DARK,
        children: e => (0, r.jsx)(u.DUT, {
          onClick: l,
          className: s()(e, x.lg),
          children: (0, r.jsx)(u.aXh, {
            size: "md",
            color: "currentColor",
            className: x.yP,
            secondaryColor: o.A.colors.INTERACTIVE_TEXT_DEFAULT.css
          })
        })
      })]
    })
  })
}

function I(e) {
  let {
    channel: t,
    guild: i,
    inPopout: a
  } = e;
  l.useEffect(() => {
    _.default.track(j.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity invite",
      n_participants: 1
    })
  }, []);
  let {
    analyticsLocations: o,
    newestAnalyticsLocation: c
  } = (0, g.Ay)(f.A.VC_TILE_ACTIVITY_INVITE);

  function d() {
    (0, u.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(n.bind(n, 234355));
      return n => {
        var l, s;
        return (0, r.jsx)(e, (l = function(e) {
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
        }({}, n), s = s = {
          guild: i,
          channel: t,
          source: j.PE1.ACTIVITY_ENTRY_POINT_TILE
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
        }), l))
      }
    }, {
      contextKey: a ? u.KX8 : u.SYi
    })
  }

  function p() {
    (0, m.A)({
      context: null != t ? {
        type: "channel",
        channel: t
      } : {
        type: "contextless"
      },
      openInPopout: a,
      analyticsLocation: c
    })
  }
  return (0, r.jsx)(g.f5, {
    value: o,
    children: (0, r.jsx)(u.NPJ, {
      disableAdaptiveTheme: true,
      theme: j.NJ8.MIDNIGHT,
      children: e => (0, r.jsxs)(O.A, {
        className: s()(x.zr, x.co, e),
        children: [(0, r.jsx)("img", {
          src: E,
          className: x.Qw,
          alt: ""
        }), (0, r.jsxs)(u.ButtonGroup, {
          justify: "center",
          align: "center",
          children: [(0, r.jsx)(u.Button, {
            variant: "secondary",
            icon: u.Rvf,
            text: v.intl.string(v.t["EE+P0H"]),
            onClick: d
          }), (0, r.jsx)(u.Button, {
            variant: "secondary",
            icon: u.k9F,
            text: v.intl.string(v.t.qnFavR),
            onClick: p
          })]
        })]
      })
    })
  })
}

function N(e) {
  let {
    channel: t,
    guild: n,
    handleClose: i,
    width: o,
    userParticipantCount: c
  } = e;
  (0, d.Ay)(() => {
    _.default.track(j.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity suggestion",
      n_participants: c
    })
  });
  let m = (0, p.A)({
      guildId: n.id
    }).slice(0, 3),
    {
      analyticsLocations: E
    } = (0, g.Ay)(f.A.VC_TILE_ACTIVITY_SUGGESTION),
    C = l.useMemo(() => ({
      channel: t,
      type: "channel"
    }), [t]);
  return (0, r.jsx)(g.f5, {
    value: E,
    children: (0, r.jsxs)(O.A, {
      className: x.zr,
      children: [o > 300 ? (0, r.jsx)(u.Text, {
        className: x.R_,
        variant: o > 550 ? "text-md/semibold" : "text-sm/semibold",
        children: v.intl.string(v.t["7BKMcG"])
      }) : null, (0, r.jsx)("div", {
        className: s()(x.Di, {
          [x.qy]: o <= 300
        }),
        children: m.map(e => (0, r.jsx)(h.C, {
          context: C,
          activityItem: e,
          aspectRatio: h.C.AspectRatio.SIXTEEN_BY_NINE,
          animatedDivClass: x.KU,
          commandOrigin: b.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS
        }, e.application.id))
      }), (0, r.jsxs)(u.DUT, {
        className: x.HI,
        onClick: function() {
          _.default.track(j.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "permanent",
            n_participants: c
          }), (0, A.Dr)(a.M.VC_TILE_ACTIVITIES_ENTRY_POINT)
        },
        children: [(0, r.jsx)(y.A, {}), (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: v.intl.string(v.t["5E9SB9"])
        })]
      }), (0, r.jsx)(u.DUT, {
        className: x.cG,
        onClick: function() {
          _.default.track(j.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "temporary",
            n_participants: c
          }), i()
        },
        children: (0, r.jsx)(u.PGe, {
          size: "md",
          color: "currentColor",
          className: x.b
        })
      })]
    })
  })
}