/** Chunk was on 62987 **/
/** chunk id: 434488, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => Z
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
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
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  let {
    channel: t,
    guild: n,
    width: i,
    inPopout: l,
    handleClose: a,
    userParticipantCount: o
  } = e;
  return i < 250 ? (0, r.jsx)(T, {
    channel: t,
    guild: n,
    width: i,
    inPopout: l,
    handleClose: a,
    userParticipantCount: o
  }) : o > 1 ? (0, r.jsx)(A, {
    channel: t,
    guild: n,
    width: i,
    inPopout: l,
    handleClose: a,
    userParticipantCount: o
  }) : (0, r.jsx)(N, {
    channel: t,
    guild: n,
    width: i,
    inPopout: l
  })
}

function T(e) {
  let {
    channel: t,
    inPopout: n,
    handleClose: i
  } = e, {
    analyticsLocations: l,
    newestAnalyticsLocation: o
  } = (0, m.ZP)(f.Z.VC_TILE_ACTIVITY_SHELF_BUTTON), {
    enabled: u
  } = d.c.useExperiment({
    location: "ActivityShelfButtonTile"
  }, {
    autoTrackExposure: true
  }), p = u ? c.iWm : c.gQj;
  return (0, r.jsx)(m.Gt, {
    value: l,
    children: (0, r.jsxs)(x.Z, {
      className: E.root,
      children: [(0, r.jsx)(c.ua7, {
        text: j.intl.string(j.t.qJvTKS),
        children: e => {
          var {
            onClick: i
          } = e, l = function(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                l = Object.keys(e);
              for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
          }(e, ["onClick"]);
          return (0, r.jsx)(c.P3F, P(I({}, l), {
            className: E.clickableTile,
            onClick: () => {
              null == i || i(), (0, g.Z)({
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
            children: (0, r.jsx)("div", {
              className: E.iconContainer,
              children: (0, r.jsx)(p, {
                size: "custom",
                color: "currentColor",
                width: 40,
                height: 40
              })
            })
          }))
        }
      }), (0, r.jsx)(c.f6W, {
        theme: O.BRd.DARK,
        children: e => (0, r.jsx)(c.P3F, {
          onClick: i,
          className: a()(e, E.shelfButtonCloseButton),
          children: (0, r.jsx)(c.k$p, {
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

function N(e) {
  let {
    channel: t,
    guild: l,
    inPopout: o
  } = e;
  i.useEffect(() => {
    v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity invite",
      n_participants: 1
    })
  }, []);
  let {
    analyticsLocations: s,
    newestAnalyticsLocation: u
  } = (0, m.ZP)(f.Z.VC_TILE_ACTIVITY_INVITE), {
    entrypoints: p
  } = (0, _._k)({
    location: "single_user_tile"
  }), {
    enabled: h
  } = d.c.useExperiment({
    location: "SingleUserTile"
  }, {
    autoTrackExposure: true
  });

  function b() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("7654"), n.e("62292")]).then(n.bind(n, 560114));
      return n => (0, r.jsx)(e, P(I({}, n), {
        guild: l,
        channel: t,
        source: O.t4x.ACTIVITY_ENTRY_POINT_TILE
      }))
    }, {
      contextKey: o ? c.u1M : c.z1l
    })
  }

  function y() {
    (0, g.Z)({
      context: null != t ? {
        type: "channel",
        channel: t
      } : {
        type: "contextless"
      },
      openInPopout: o,
      analyticsLocation: u
    })
  }
  let C = h ? c.iWm : c.nG3,
    Z = p ? c.oLu : c.iFz;
  return (0, r.jsx)(m.Gt, {
    value: s,
    children: (0, r.jsx)(c.f6W, {
      disableAdaptiveTheme: true,
      theme: O.BRd.MIDNIGHT,
      children: e => (0, r.jsxs)(x.Z, {
        className: a()(E.root, E.singleUserRoot, e),
        children: [(0, r.jsx)("img", {
          src: S,
          className: E.art,
          alt: ""
        }), (0, r.jsxs)(c.hE2, {
          justify: "center",
          align: "center",
          children: [(0, r.jsx)(c.zxk, {
            variant: "secondary",
            icon: Z,
            text: p ? j.intl.string(j.t["EE+P0N"]) : j.intl.string(j.t["6Qgren"]),
            onClick: b
          }), (0, r.jsx)(c.zxk, {
            variant: "secondary",
            icon: C,
            text: j.intl.string(j.t.qnFavb),
            onClick: y
          })]
        })]
      })
    })
  })
}

function A(e) {
  let {
    channel: t,
    guild: n,
    handleClose: l,
    width: s,
    userParticipantCount: d
  } = e;
  (0, u.ZP)(() => {
    v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity suggestion",
      n_participants: d
    })
  });
  let g = (0, p.Z)({
      guildId: n.id
    }).slice(0, 3),
    {
      analyticsLocations: _
    } = (0, m.ZP)(f.Z.VC_TILE_ACTIVITY_SUGGESTION),
    S = i.useMemo(() => ({
      channel: t,
      type: "channel"
    }), [t]);
  return (0, r.jsx)(m.Gt, {
    value: _,
    children: (0, r.jsxs)(x.Z, {
      className: E.root,
      children: [s > 300 ? (0, r.jsx)(c.Text, {
        className: E.heading,
        variant: s > 550 ? "text-md/semibold" : "text-sm/semibold",
        children: j.intl.string(j.t["7BKMcH"])
      }) : null, (0, r.jsx)("div", {
        className: a()(E.activitiesContainer, {
          [E.activitiesContainerSmol]: s <= 300
        }),
        children: g.map(e => (0, r.jsx)(h.Y, {
          context: S,
          activityItem: e,
          aspectRatio: h.Y.AspectRatio.SIXTEEN_BY_NINE,
          animatedDivClass: E.activitySuggestion,
          commandOrigin: b.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS
        }, e.application.id))
      }), (0, r.jsxs)(c.P3F, {
        className: E.checkboxContainer,
        onClick: function() {
          v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "permanent",
            n_participants: d
          }), (0, y.Q3)(o.z.VC_TILE_ACTIVITIES_ENTRY_POINT)
        },
        children: [(0, r.jsx)(C.Z, {}), (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: j.intl.string(j.t["5E9SBw"])
        })]
      }), (0, r.jsx)(c.P3F, {
        className: E.closeButtonContainer,
        onClick: function() {
          v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "temporary",
            n_participants: d
          }), l()
        },
        children: (0, r.jsx)(c.Dio, {
          size: "md",
          color: "currentColor",
          className: E.closeButton
        })
      })]
    })
  })
}