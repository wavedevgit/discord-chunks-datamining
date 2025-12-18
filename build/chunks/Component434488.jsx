/** Chunk was on 40184 **/
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
    width: r,
    inPopout: l,
    handleClose: a,
    userParticipantCount: o
  } = e;
  return r < 250 ? (0, i.jsx)(P, {
    channel: t,
    guild: n,
    width: r,
    inPopout: l,
    handleClose: a,
    userParticipantCount: o
  }) : o > 1 ? (0, i.jsx)(Z, {
    channel: t,
    guild: n,
    width: r,
    inPopout: l,
    handleClose: a,
    userParticipantCount: o
  }) : (0, i.jsx)(I, {
    channel: t,
    guild: n,
    width: r,
    inPopout: l
  })
}

function P(e) {
  let {
    channel: t,
    inPopout: n,
    handleClose: r
  } = e, {
    analyticsLocations: l,
    newestAnalyticsLocation: o
  } = (0, m.ZP)(h.Z.VC_TILE_ACTIVITY_SHELF_BUTTON);
  return (0, i.jsx)(m.Gt, {
    value: l,
    children: (0, i.jsxs)(x.Z, {
      className: j.root,
      children: [(0, i.jsx)(c.u, {
        asContainer: true,
        text: E.intl.string(E.t.qJvTKQ),
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
          className: j.clickableTile,
          children: (0, i.jsx)("div", {
            className: j.iconContainer,
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
          className: a()(e, j.shelfButtonCloseButton),
          children: (0, i.jsx)(u.k$p, {
            size: "md",
            color: "currentColor",
            className: j.closeButtonIcon,
            secondaryColor: s.Z.colors.INTERACTIVE_TEXT_DEFAULT.css
          })
        })
      })]
    })
  })
}

function I(e) {
  let {
    channel: t,
    guild: l,
    inPopout: o
  } = e;
  r.useEffect(() => {
    v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity invite",
      n_participants: 1
    })
  }, []);
  let {
    analyticsLocations: s,
    newestAnalyticsLocation: c
  } = (0, m.ZP)(h.Z.VC_TILE_ACTIVITY_INVITE);

  function d() {
    (0, u.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("49049"), n.e("7654"), n.e("97016")]).then(n.bind(n, 560114));
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

  function p() {
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
  return (0, i.jsx)(m.Gt, {
    value: s,
    children: (0, i.jsx)(u.f6W, {
      disableAdaptiveTheme: true,
      theme: O.BRd.MIDNIGHT,
      children: e => (0, i.jsxs)(x.Z, {
        className: a()(j.root, j.singleUserRoot, e),
        children: [(0, i.jsx)("img", {
          src: S,
          className: j.art,
          alt: ""
        }), (0, i.jsxs)(u.ButtonGroup, {
          justify: "center",
          align: "center",
          children: [(0, i.jsx)(u.Button, {
            variant: "secondary",
            icon: u.oLu,
            text: E.intl.string(E.t["EE+P0H"]),
            onClick: d
          }), (0, i.jsx)(u.Button, {
            variant: "secondary",
            icon: u.nG3,
            text: E.intl.string(E.t.qnFavR),
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
    v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity suggestion",
      n_participants: c
    })
  });
  let g = (0, p.Z)({
      guildId: n.id
    }).slice(0, 3),
    {
      analyticsLocations: S
    } = (0, m.ZP)(h.Z.VC_TILE_ACTIVITY_SUGGESTION),
    _ = r.useMemo(() => ({
      channel: t,
      type: "channel"
    }), [t]);
  return (0, i.jsx)(m.Gt, {
    value: S,
    children: (0, i.jsxs)(x.Z, {
      className: j.root,
      children: [s > 300 ? (0, i.jsx)(u.Text, {
        className: j.heading,
        variant: s > 550 ? "text-md/semibold" : "text-sm/semibold",
        children: E.intl.string(E.t["7BKMcG"])
      }) : null, (0, i.jsx)("div", {
        className: a()(j.activitiesContainer, {
          [j.activitiesContainerSmol]: s <= 300
        }),
        children: g.map(e => (0, i.jsx)(f.Y, {
          context: _,
          activityItem: e,
          aspectRatio: f.Y.AspectRatio.SIXTEEN_BY_NINE,
          animatedDivClass: j.activitySuggestion,
          commandOrigin: b.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS
        }, e.application.id))
      }), (0, i.jsxs)(u.P3F, {
        className: j.checkboxContainer,
        onClick: function() {
          v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "permanent",
            n_participants: c
          }), (0, y.Q3)(o.z.VC_TILE_ACTIVITIES_ENTRY_POINT)
        },
        children: [(0, i.jsx)(C.Z, {}), (0, i.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: E.intl.string(E.t["5E9SB9"])
        })]
      }), (0, i.jsx)(u.P3F, {
        className: j.closeButtonContainer,
        onClick: function() {
          v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "temporary",
            n_participants: c
          }), l()
        },
        children: (0, i.jsx)(u.Dio, {
          size: "md",
          color: "currentColor",
          className: j.closeButton
        })
      })]
    })
  })
}