/** Chunk was on 34740 **/
/** chunk id: 434488, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => P
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk127255 = require("./127255.js"),
  Chunk5200 = require("./5200.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk397698 = require("./397698.jsx"),
  Chunk895924 = require("./895924.js"),
  Chunk266454 = require("./266454.js"),
  Chunk340541 = require("./340541.js"),
  Chunk416345 = require("./416345.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk607187 = require("./607187.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk348130 = require("./348130.js"),
  Chunk359165 = require("./359165.js");

function P(e) {
  let {
    channel: t,
    guild: n,
    width: r,
    inPopout: l,
    handleClose: a,
    userParticipantCount: o
  } = e;
  return r < 250 ? (0, i.jsx)(I, {
    channel: t,
    guild: n,
    width: r,
    inPopout: l,
    handleClose: a,
    userParticipantCount: o
  }) : o > 1 ? (0, i.jsx)(T, {
    channel: t,
    guild: n,
    width: r,
    inPopout: l,
    handleClose: a,
    userParticipantCount: o
  }) : (0, i.jsx)(Z, {
    channel: t,
    guild: n,
    width: r,
    inPopout: l
  })
}

function I(e) {
  let {
    channel: t,
    inPopout: n,
    handleClose: r
  } = e, {
    analyticsLocations: l,
    newestAnalyticsLocation: o
  } = (0, m.ZP)(f.Z.VC_TILE_ACTIVITY_SHELF_BUTTON);
  return (0, i.jsx)(m.Gt, {
    value: l,
    children: (0, i.jsxs)(x.Z, {
      className: E.root,
      children: [(0, i.jsx)(c.u, {
        asContainer: true,
        text: j.intl.string(j.t.qJvTKQ),
        children: (0, i.jsx)(u.P3F, {
          onClick: () => {
            (0, g.Z)({
              context: null != t ? {
                type: "channel",
                channel: t
              } : {
                type: "contextless"
              },
              openInPopout: n,
              analyticsLocation: o
            })
          },
          className: E.clickableTile,
          children: (0, i.jsx)("div", {
            className: E.iconContainer,
            children: (0, i.jsx)(u.gQj, {
              size: "custom",
              color: "currentColor",
              width: 40,
              height: 40
            })
          })
        })
      }), (0, i.jsx)(u.f6W, {
        theme: O.BRd.DARK,
        children: e => (0, i.jsx)(u.P3F, {
          onClick: r,
          className: a()(e, E.shelfButtonCloseButton),
          children: (0, i.jsx)(u.k$p, {
            size: "md",
            color: "currentColor",
            className: E.closeButtonIcon,
            secondaryColor: s.Z.colors.INTERACTIVE_NORMAL.css
          })
        })
      })]
    })
  })
}

function Z(e) {
  let {
    channel: t,
    guild: l,
    inPopout: o
  } = e;
  r.useEffect(() => {
    _.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity invite",
      n_participants: 1
    })
  }, []);
  let {
    analyticsLocations: s,
    newestAnalyticsLocation: c
  } = (0, m.ZP)(f.Z.VC_TILE_ACTIVITY_INVITE), d = (0, C._k)({
    location: "single_user_tile"
  });

  function p() {
    (0, u.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("49049"), n.e("7654"), n.e("89772")]).then(n.bind(n, 560114));
      return n => {
        var r, a;
        return (0, i.jsx)(e, (r = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({}, n), a = a = {
          guild: l,
          channel: t,
          source: O.t4x.ACTIVITY_ENTRY_POINT_TILE
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
        }), r))
      }
    }, {
      contextKey: o ? u.u1M : u.z1l
    })
  }

  function h() {
    (0, g.Z)({
      context: null != t ? {
        type: "channel",
        channel: t
      } : {
        type: "contextless"
      },
      openInPopout: o,
      analyticsLocation: c
    })
  }
  let b = d.isInCallEntrypointEnabled ? u.oLu : u.iFz;
  return (0, i.jsx)(m.Gt, {
    value: s,
    children: (0, i.jsx)(u.f6W, {
      disableAdaptiveTheme: true,
      theme: O.BRd.MIDNIGHT,
      children: e => (0, i.jsxs)(x.Z, {
        className: a()(E.root, E.singleUserRoot, e),
        children: [(0, i.jsx)("img", {
          src: S,
          className: E.art,
          alt: ""
        }), (0, i.jsxs)(u.ButtonGroup, {
          justify: "center",
          align: "center",
          children: [(0, i.jsx)(u.Button, {
            variant: "secondary",
            icon: b,
            text: d.isInCallEntrypointEnabled ? j.intl.string(j.t["EE+P0H"]) : j.intl.string(j.t["6Qgrev"]),
            onClick: p
          }), (0, i.jsx)(u.Button, {
            variant: "secondary",
            icon: u.nG3,
            text: j.intl.string(j.t.qnFavR),
            onClick: h
          })]
        })]
      })
    })
  })
}

function T(e) {
  let {
    channel: t,
    guild: n,
    handleClose: l,
    width: s,
    userParticipantCount: c
  } = e;
  (0, d.ZP)(() => {
    _.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity suggestion",
      n_participants: c
    })
  });
  let g = (0, p.Z)({
      guildId: n.id
    }).slice(0, 3),
    {
      analyticsLocations: C
    } = (0, m.ZP)(f.Z.VC_TILE_ACTIVITY_SUGGESTION),
    S = r.useMemo(() => ({
      channel: t,
      type: "channel"
    }), [t]);
  return (0, i.jsx)(m.Gt, {
    value: C,
    children: (0, i.jsxs)(x.Z, {
      className: E.root,
      children: [s > 300 ? (0, i.jsx)(u.Text, {
        className: E.heading,
        variant: s > 550 ? "text-md/semibold" : "text-sm/semibold",
        children: j.intl.string(j.t["7BKMcG"])
      }) : null, (0, i.jsx)("div", {
        className: a()(E.activitiesContainer, {
          [E.activitiesContainerSmol]: s <= 300
        }),
        children: g.map(e => (0, i.jsx)(h.Y, {
          context: S,
          activityItem: e,
          aspectRatio: h.Y.AspectRatio.SIXTEEN_BY_NINE,
          animatedDivClass: E.activitySuggestion,
          commandOrigin: b.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS
        }, e.application.id))
      }), (0, i.jsxs)(u.P3F, {
        className: E.checkboxContainer,
        onClick: function() {
          _.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "permanent",
            n_participants: c
          }), (0, y.Q3)(o.z.VC_TILE_ACTIVITIES_ENTRY_POINT)
        },
        children: [(0, i.jsx)(v.Z, {}), (0, i.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: j.intl.string(j.t["5E9SB9"])
        })]
      }), (0, i.jsx)(u.P3F, {
        className: E.closeButtonContainer,
        onClick: function() {
          _.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "temporary",
            n_participants: c
          }), l()
        },
        children: (0, i.jsx)(u.Dio, {
          size: "md",
          color: "currentColor",
          className: E.closeButton
        })
      })]
    })
  })
}