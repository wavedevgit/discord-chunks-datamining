/** Chunk was on 58227 **/
/** chunk id: 707076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _,
  j: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk548473 = require("./548473.jsx"),
  Chunk721012 = require("./721012.jsx"),
  Chunk869764 = require("./869764.jsx"),
  Chunk150512 = require("./150512.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk999382 = require("./999382.js"),
  Chunk983135 = require("./983135.js"),
  Chunk84658 = require("./84658.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk744099 = require("./744099.js");

function x(e) {
  let {
    isTooltip: t = false
  } = e, n = [{
    emoji: "\uD83E\uDDD9",
    emojiDescription: E.intl.string(E.t.Jh9uif),
    title: E.intl.string(E.t.ATF45v),
    selected: true
  }, {
    emoji: "\uD83C\uDFA4",
    emojiDescription: E.intl.string(E.t["nGt+MV"]),
    title: E.intl.string(E.t["30uo7D"]),
    selected: false
  }, {
    emoji: "\uD83D\uDC40",
    emojiDescription: E.intl.string(E.t.hOMH5o),
    title: E.intl.string(E.t["5Z5sgj"]),
    selected: false
  }];
  t && n.pop();
  let i = t ? (0, l.jsx)(a.Text, {
      variant: "text-sm/semibold",
      color: "text-strong",
      children: E.intl.string(E.t.nTI2mQ)
    }) : (0, l.jsx)(a.Heading, {
      variant: "heading-md/semibold",
      children: E.intl.string(E.t.g1OQtu)
    }),
    s = t ? (0, l.jsx)(a.Text, {
      variant: "text-xxs/normal",
      children: E.intl.format(E.t.hGwDPV, {})
    }) : (0, l.jsx)(a.Text, {
      variant: "text-xs/normal",
      children: E.intl.format(E.t["8XLD3r"], {})
    });
  return (0, l.jsxs)("div", {
    className: r()(S.upsellPreview, S.spacingLarge, {
      [S.tooltip]: t
    }),
    children: [i, (0, l.jsx)("div", {
      className: S.spacingSmall,
      children: n.map((e, t) => {
        let {
          emoji: n,
          emojiDescription: i,
          title: s,
          selected: o
        } = e;
        return (0, l.jsxs)("div", {
          className: r()(S.previewListItem, {
            [S.selected]: o
          }),
          children: [(0, l.jsx)("span", {
            role: "img",
            "aria-label": i,
            children: n
          }), (0, l.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-strong",
            children: s
          }), o && (0, l.jsx)("div", {
            className: S.checkboxCircle,
            children: (0, l.jsx)(a.dz2, {
              size: "md",
              color: "currentColor",
              className: S.checkmark
            })
          })]
        }, t)
      })
    }), s]
  })
}

function T() {
  let e = [{
    message: E.t.FUUXXk,
    profilePic: "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
    adminTitle: E.intl.string(E.t.RZVpuo)
  }, {
    message: E.t.JAXvDe,
    profilePic: "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
    adminTitle: E.intl.string(E.t.xyrlg7)
  }, {
    message: E.t.Wj9Djq,
    profilePic: "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
    adminTitle: E.intl.string(E.t["o/LQMi"])
  }, {
    message: E.t.ALsMNZ,
    profilePic: "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
    adminTitle: E.intl.string(E.t["uvM+xc"])
  }];
  return (0, l.jsx)(d.i, {
    testimonials: e
  })
}

function _() {
  let e = (0, s.e7)([N.Z], () => N.Z.getGuildId()),
    t = (0, s.e7)([g.Z], () => g.Z.getGuild(e)),
    n = (0, s.e7)([f.default], () => f.default.getCurrentUser());
  return null == e || null == t || null == n ? null : (0, l.jsxs)("div", {
    className: S.upsellContainer,
    children: [(0, l.jsxs)("div", {
      className: S.upsellHeader,
      children: [(0, l.jsxs)("div", {
        className: S.islands,
        children: [(0, l.jsx)(c.xm, {}), (0, l.jsx)(c._I, {
          guild: t,
          mainIslandClassName: S.mainIsland,
          balloonDogClassName: S.balloonDog
        }), (0, l.jsx)(c.B0, {})]
      }), (0, l.jsxs)("div", {
        className: S.upsellHeaderText,
        children: [(0, l.jsx)(a.Heading, {
          variant: "heading-xl/semibold",
          children: E.intl.string(E.t.GnKOAx)
        }), (0, l.jsx)(a.Text, {
          variant: "text-md/normal",
          children: E.intl.string(E.t.SJRFJj)
        })]
      }), (0, l.jsx)("div", {
        className: S.upsellButtons,
        children: (0, l.jsx)(a.Button, {
          variant: "primary",
          text: E.intl.string(E.t.RzWDqY),
          onClick: function() {
            if (null != e) {
              var t, n;
              h.default.track(O.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), l.forEach(function(t) {
                    var l;
                    l = n[t], t in e ? Object.defineProperty(e, t, {
                      value: l,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = l
                  })
                }
                return e
              }({}, (0, o.hH)(e)), n = n = {
                step: p.PG[p.PG.LANDING],
                back: false,
                skip: false
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, l)
                }
                return n
              })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              }), t)), (0, I.IG)(e, p.PG.LANDING)
            }
          },
          disabled: false
        })
      })]
    }), (0, l.jsx)(a.izJ, {}), (0, l.jsx)(T, {}), (0, l.jsx)(a.izJ, {}), (0, l.jsxs)("div", {
      className: S.valuesContainer,
      children: [(0, l.jsxs)("div", {
        className: S.valueContainer,
        children: [(0, l.jsx)(x, {}), (0, l.jsxs)("div", {
          className: S.valueText,
          children: [(0, l.jsx)(a.Heading, {
            variant: "heading-md/semibold",
            children: E.intl.string(E.t.Z7kqKZ)
          }), (0, l.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: E.intl.string(E.t.di3UC5)
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: S.valueContainer,
        children: [(0, l.jsxs)("div", {
          className: S.valueText,
          children: [(0, l.jsx)(a.Heading, {
            variant: "heading-md/semibold",
            children: E.intl.string(E.t.O4jYEh)
          }), (0, l.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: E.intl.string(E.t["l/l/Gw"])
          })]
        }), (0, l.jsxs)("div", {
          className: r()(S.upsellPreview, S.spacingLarge),
          children: [(0, l.jsx)(m.Z, {
            guildId: e,
            welcomeMessage: {
              authorIds: [n.id],
              message: E.intl.string(E.t.hIWAft)
            }
          }), (0, l.jsx)(u.k, {
            title: E.intl.string(E.t["47zu7B"]),
            subtitle: E.intl.string(E.t["amoSN/"]),
            completed: true,
            Icon: a.VL1,
            variant: "static"
          }), (0, l.jsx)(u.k, {
            title: E.intl.string(E.t.EZfTKE),
            subtitle: E.intl.string(E.t["/sYelW"]),
            completed: true,
            Icon: a.VL1,
            variant: "static"
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: S.valueContainer,
        children: [(0, l.jsx)("div", {
          className: r()(S.upsellPreview, S.spacingLarge),
          children: [{
            channelIcon: () => (0, l.jsx)(a.MqZ, {
              size: "xs",
              color: "currentColor",
              className: S.channelIcon
            }),
            channel: E.intl.string(E.t.MXJozL),
            selected: true
          }, {
            channelIcon: () => (0, l.jsx)(a.VL1, {
              size: "md",
              color: "currentColor",
              className: S.channelIcon
            }),
            channel: E.intl.string(E.t.Pkj0f6),
            selected: true
          }, {
            channelIcon: () => (0, l.jsx)(a.VL1, {
              size: "md",
              color: "currentColor",
              className: S.channelIcon
            }),
            channel: E.intl.string(E.t["imVD+u"]),
            selected: false
          }, {
            channelIcon: () => (0, l.jsx)(a.Mmi, {
              size: "md",
              color: "currentColor",
              className: S.channelIcon
            }),
            channel: E.intl.string(E.t["Pj/Wpt"]),
            selected: true
          }].map((e, t) => {
            let {
              channelIcon: n,
              channel: i,
              selected: s
            } = e;
            return (0, l.jsxs)("div", {
              className: r()(S.previewListItem, S.spaceBetween, {
                [S.selected]: s
              }),
              children: [(0, l.jsxs)("div", {
                className: S.channel,
                children: [n(), (0, l.jsx)(a.Text, {
                  variant: "text-md/medium",
                  color: "text-strong",
                  children: i
                })]
              }), (0, l.jsx)("div", {
                className: r()(S.checkbox, {
                  [S.selected]: s
                }),
                children: s && (0, l.jsx)(a.dz2, {
                  size: "md",
                  color: "currentColor",
                  className: S.checkmark
                })
              })]
            }, t)
          })
        }), (0, l.jsxs)("div", {
          className: S.valueText,
          children: [(0, l.jsx)(a.Heading, {
            variant: "heading-md/semibold",
            children: E.intl.string(E.t["3T9aHG"])
          }), (0, l.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: E.intl.string(E.t.dA7Cag)
          })]
        })]
      })]
    })]
  })
}