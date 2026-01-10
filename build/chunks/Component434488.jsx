/** Chunk was on 81985 **/
/** chunk id: 434488, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => _
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
  Chunk448239 = require("./448239.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk607187 = require("./607187.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk165237 = require("./165237.js"),
  Chunk359165 = require("./359165.js");

function _(e) {
  let {
    channel: t,
    guild: n,
    width: i,
    inPopout: l,
    handleClose: a,
    userParticipantCount: o
  } = e;
  return i < 250 ? (0, r.jsx)(I, {
    channel: t,
    guild: n,
    width: i,
    inPopout: l,
    handleClose: a,
    userParticipantCount: o
  }) : o > 1 ? (0, r.jsx)(Z, {
    channel: t,
    guild: n,
    width: i,
    inPopout: l,
    handleClose: a,
    userParticipantCount: o
  }) : (0, r.jsx)(P, {
    channel: t,
    guild: n,
    width: i,
    inPopout: l
  })
}

function I(e) {
  let {
    channel: t,
    inPopout: n,
    handleClose: i
  } = e, {
    analyticsLocations: l,
    newestAnalyticsLocation: o
  } = (0, g.ZP)(h.Z.VC_TILE_ACTIVITY_SHELF_BUTTON);
  return (0, r.jsx)(g.Gt, {
    value: l,
    children: (0, r.jsxs)(j.Z, {
      className: E.root,
      children: [(0, r.jsx)(c.u, {
        asContainer: true,
        text: C.intl.string(C.t.qJvTKQ),
        children: (0, r.jsx)(u.P3F, {
          onClick: () => {
            (0, m.Z)({
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
          children: (0, r.jsx)("div", {
            className: E.iconContainer,
            children: (0, r.jsx)(u.gQj, {
              size: "custom",
              color: "currentColor",
              width: 40,
              height: 40
            })
          })
        })
      }), (0, r.jsx)(u.f6W, {
        theme: x.BRd.DARK,
        children: e => (0, r.jsx)(u.P3F, {
          onClick: i,
          className: a()(e, E.shelfButtonCloseButton),
          children: (0, r.jsx)(u.k$p, {
            size: "md",
            color: "currentColor",
            className: E.closeButtonIcon,
            secondaryColor: s.Z.colors.INTERACTIVE_TEXT_DEFAULT.css
          })
        })
      })]
    })
  })
}

function P(e) {
  let {
    channel: t,
    guild: l,
    inPopout: o
  } = e;
  i.useEffect(() => {
    O.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity invite",
      n_participants: 1
    })
  }, []);
  let {
    analyticsLocations: s,
    newestAnalyticsLocation: c
  } = (0, g.ZP)(h.Z.VC_TILE_ACTIVITY_INVITE);

  function d() {
    (0, u.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("7654"), n.e("49049"), n.e("97016")]).then(n.bind(n, 560114));
      return n => {
        var i, a;
        return (0, r.jsx)(e, (i = function(e) {
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
        }({}, n), a = a = {
          guild: l,
          channel: t,
          source: x.t4x.ACTIVITY_ENTRY_POINT_TILE
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
        }), i))
      }
    }, {
      contextKey: o ? u.u1M : u.z1l
    })
  }

  function p() {
    (0, m.Z)({
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
  return (0, r.jsx)(g.Gt, {
    value: s,
    children: (0, r.jsx)(u.f6W, {
      disableAdaptiveTheme: true,
      theme: x.BRd.MIDNIGHT,
      children: e => (0, r.jsxs)(j.Z, {
        className: a()(E.root, E.singleUserRoot, e),
        children: [(0, r.jsx)("img", {
          src: S,
          className: E.art,
          alt: ""
        }), (0, r.jsxs)(u.ButtonGroup, {
          justify: "center",
          align: "center",
          children: [(0, r.jsx)(u.Button, {
            variant: "secondary",
            icon: u.oLu,
            text: C.intl.string(C.t["EE+P0H"]),
            onClick: d
          }), (0, r.jsx)(u.Button, {
            variant: "secondary",
            icon: u.nG3,
            text: C.intl.string(C.t.qnFavR),
            onClick: p
          })]
        })]
      })
    })
  })
}

function Z(e) {
  let {
    channel: t,
    guild: n,
    handleClose: l,
    width: s,
    userParticipantCount: c
  } = e;
  (0, d.ZP)(() => {
    O.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity suggestion",
      n_participants: c
    })
  });
  let m = (0, p.Z)({
      guildId: n.id
    }).slice(0, 3),
    {
      analyticsLocations: S
    } = (0, g.ZP)(h.Z.VC_TILE_ACTIVITY_SUGGESTION),
    _ = i.useMemo(() => ({
      channel: t,
      type: "channel"
    }), [t]);
  return (0, r.jsx)(g.Gt, {
    value: S,
    children: (0, r.jsxs)(j.Z, {
      className: E.root,
      children: [s > 300 ? (0, r.jsx)(u.Text, {
        className: E.heading,
        variant: s > 550 ? "text-md/semibold" : "text-sm/semibold",
        children: C.intl.string(C.t["7BKMcG"])
      }) : null, (0, r.jsx)("div", {
        className: a()(E.activitiesContainer, {
          [E.activitiesContainerSmol]: s <= 300
        }),
        children: m.map(e => (0, r.jsx)(f.Y, {
          context: _,
          activityItem: e,
          aspectRatio: f.Y.AspectRatio.SIXTEEN_BY_NINE,
          animatedDivClass: E.activitySuggestion,
          commandOrigin: b.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS
        }, e.application.id))
      }), (0, r.jsxs)(u.P3F, {
        className: E.checkboxContainer,
        onClick: function() {
          O.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "permanent",
            n_participants: c
          }), (0, y.Q3)(o.z.VC_TILE_ACTIVITIES_ENTRY_POINT)
        },
        children: [(0, r.jsx)(v.Z, {}), (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: C.intl.string(C.t["5E9SB9"])
        })]
      }), (0, r.jsx)(u.P3F, {
        className: E.closeButtonContainer,
        onClick: function() {
          O.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "temporary",
            n_participants: c
          }), l()
        },
        children: (0, r.jsx)(u.Dio, {
          size: "md",
          color: "currentColor",
          className: E.closeButton
        })
      })]
    })
  })
}