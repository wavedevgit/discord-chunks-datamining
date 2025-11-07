/** Chunk was on 86642 **/
/** chunk id: 434488, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk456100 = require("./456100.js"),
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

function I(e) {
  let {
    channel: t,
    guild: n,
    width: r,
    inPopout: l,
    handleClose: a,
    userParticipantCount: o
  } = e;
  return r < 250 ? (0, i.jsx)(Z, {
    channel: t,
    guild: n,
    width: r,
    inPopout: l,
    handleClose: a,
    userParticipantCount: o
  }) : o > 1 ? (0, i.jsx)(N, {
    channel: t,
    guild: n,
    width: r,
    inPopout: l,
    handleClose: a,
    userParticipantCount: o
  }) : (0, i.jsx)(T, {
    channel: t,
    guild: n,
    width: r,
    inPopout: l
  })
}

function Z(e) {
  let {
    channel: t,
    inPopout: n,
    handleClose: r
  } = e, {
    analyticsLocations: l,
    newestAnalyticsLocation: o
  } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_SHELF_BUTTON), {
    enabled: d
  } = p.c.useExperiment({
    location: "ActivityShelfButtonTile"
  }, {
    autoTrackExposure: true
  }), f = d ? u.iWm : u.gQj;
  return (0, i.jsx)(g.Gt, {
    value: l,
    children: (0, i.jsxs)(O.Z, {
      className: S.root,
      children: [(0, i.jsx)(c.u, {
        asContainer: true,
        text: j.intl.string(j.t.qJvTKQ),
        children: (0, i.jsx)(u.P3F, {
          onClick: () => {
            (0, b.Z)({
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
          className: S.clickableTile,
          children: (0, i.jsx)("div", {
            className: S.iconContainer,
            children: (0, i.jsx)(f, {
              size: "custom",
              color: "currentColor",
              width: 40,
              height: 40
            })
          })
        })
      }), (0, i.jsx)(u.f6W, {
        theme: E.BRd.DARK,
        children: e => (0, i.jsx)(u.P3F, {
          onClick: r,
          className: a()(e, S.shelfButtonCloseButton),
          children: (0, i.jsx)(u.k$p, {
            size: "md",
            color: "currentColor",
            className: S.closeButtonIcon,
            secondaryColor: s.Z.colors.INTERACTIVE_NORMAL.css
          })
        })
      })]
    })
  })
}

function T(e) {
  let {
    channel: t,
    guild: l,
    inPopout: o
  } = e;
  r.useEffect(() => {
    x.default.track(E.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity invite",
      n_participants: 1
    })
  }, []);
  let {
    analyticsLocations: s,
    newestAnalyticsLocation: c
  } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_INVITE), d = (0, _._k)({
    location: "single_user_tile"
  }), {
    enabled: f
  } = p.c.useExperiment({
    location: "SingleUserTile"
  }, {
    autoTrackExposure: true
  });

  function h() {
    (0, u.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("49049"), n.e("7654"), n.e("68971")]).then(n.bind(n, 560114));
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
          source: E.t4x.ACTIVITY_ENTRY_POINT_TILE
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

  function y() {
    (0, b.Z)({
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
  let C = f ? u.iWm : u.nG3,
    v = d.isInCallEntrypointEnabled ? u.oLu : u.iFz;
  return (0, i.jsx)(g.Gt, {
    value: s,
    children: (0, i.jsx)(u.f6W, {
      disableAdaptiveTheme: true,
      theme: E.BRd.MIDNIGHT,
      children: e => (0, i.jsxs)(O.Z, {
        className: a()(S.root, S.singleUserRoot, e),
        children: [(0, i.jsx)("img", {
          src: P,
          className: S.art,
          alt: ""
        }), (0, i.jsxs)(u.ButtonGroup, {
          justify: "center",
          align: "center",
          children: [(0, i.jsx)(u.Button, {
            variant: "secondary",
            icon: v,
            text: d.isInCallEntrypointEnabled ? j.intl.string(j.t["EE+P0H"]) : j.intl.string(j.t["6Qgrev"]),
            onClick: h
          }), (0, i.jsx)(u.Button, {
            variant: "secondary",
            icon: C,
            text: j.intl.string(j.t.qnFavR),
            onClick: y
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
    handleClose: l,
    width: s,
    userParticipantCount: c
  } = e;
  (0, d.ZP)(() => {
    x.default.track(E.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity suggestion",
      n_participants: c
    })
  });
  let p = (0, f.Z)({
      guildId: n.id
    }).slice(0, 3),
    {
      analyticsLocations: b
    } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_SUGGESTION),
    _ = r.useMemo(() => ({
      channel: t,
      type: "channel"
    }), [t]);
  return (0, i.jsx)(g.Gt, {
    value: b,
    children: (0, i.jsxs)(O.Z, {
      className: S.root,
      children: [s > 300 ? (0, i.jsx)(u.Text, {
        className: S.heading,
        variant: s > 550 ? "text-md/semibold" : "text-sm/semibold",
        children: j.intl.string(j.t["7BKMcG"])
      }) : null, (0, i.jsx)("div", {
        className: a()(S.activitiesContainer, {
          [S.activitiesContainerSmol]: s <= 300
        }),
        children: p.map(e => (0, i.jsx)(h.Y, {
          context: _,
          activityItem: e,
          aspectRatio: h.Y.AspectRatio.SIXTEEN_BY_NINE,
          animatedDivClass: S.activitySuggestion,
          commandOrigin: y.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS
        }, e.application.id))
      }), (0, i.jsxs)(u.P3F, {
        className: S.checkboxContainer,
        onClick: function() {
          x.default.track(E.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "permanent",
            n_participants: c
          }), (0, C.Q3)(o.z.VC_TILE_ACTIVITIES_ENTRY_POINT)
        },
        children: [(0, i.jsx)(v.Z, {}), (0, i.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: j.intl.string(j.t["5E9SB9"])
        })]
      }), (0, i.jsx)(u.P3F, {
        className: S.closeButtonContainer,
        onClick: function() {
          x.default.track(E.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "temporary",
            n_participants: c
          }), l()
        },
        children: (0, i.jsx)(u.Dio, {
          size: "md",
          color: "currentColor",
          className: S.closeButton
        })
      })]
    })
  })
}