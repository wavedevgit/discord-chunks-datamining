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
  Chunk473450 = require("./473450.js");

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
  let i = t ? (0, l.jsx)(s.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      children: E.intl.string(E.t.nTI2mQ)
    }) : (0, l.jsx)(s.Heading, {
      variant: "heading-md/semibold",
      children: E.intl.string(E.t.g1OQtu)
    }),
    a = t ? (0, l.jsx)(s.Text, {
      variant: "text-xxs/normal",
      children: E.intl.format(E.t.hGwDPV, {})
    }) : (0, l.jsx)(s.Text, {
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
          title: a,
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
          }), (0, l.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "header-primary",
            children: a
          }), o && (0, l.jsx)("div", {
            className: S.checkboxCircle,
            children: (0, l.jsx)(s.dz2, {
              size: "md",
              color: "currentColor",
              className: S.checkmark
            })
          })]
        }, t)
      })
    }), a]
  })
}

function T() {
  let e = [{
    message: Chunk388032.t.FUUXXk,
    profilePic: "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
    adminTitle: Chunk388032.intl.string(Chunk388032.t.RZVpuo)
  }, {
    message: Chunk388032.t.JAXvDe,
    profilePic: "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
    adminTitle: Chunk388032.intl.string(Chunk388032.t.xyrlg7)
  }, {
    message: Chunk388032.t.Wj9Djq,
    profilePic: "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
    adminTitle: Chunk388032.intl.string(Chunk388032.t["o/LQMi"])
  }, {
    message: Chunk388032.t.ALsMNZ,
    profilePic: "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
    adminTitle: Chunk388032.intl.string(Chunk388032.t["uvM+xc"])
  }];
  return (0, Chunk54381.jsx)(Chunk721012.i, {
    testimonials: module
  })
}

function _() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildId()),
    t = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(module)),
    n = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  return null == module || null == exports || null == require ? null : (0, Chunk54381.jsxs)("div", {
    className: Chunk473450.upsellContainer,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk473450.upsellHeader,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk473450.islands,
        children: [(0, Chunk54381.jsx)(Chunk548473.xm, {}), (0, Chunk54381.jsx)(Chunk548473._I, {
          guild: exports,
          mainIslandClassName: Chunk473450.mainIsland,
          balloonDogClassName: Chunk473450.balloonDog
        }), (0, Chunk54381.jsx)(Chunk548473.B0, {})]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk473450.upsellHeaderText,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-xl/semibold",
          children: Chunk388032.intl.string(Chunk388032.t.GnKOAx)
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: Chunk388032.intl.string(Chunk388032.t.SJRFJj)
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk473450.upsellButtons,
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.RzWDqY),
          onClick: function() {
            if (null != module) {
              var t, n;
              Chunk626135.default.track(Chunk981631.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, (t = function(e) {
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
              }({}, (0, Chunk367907.hH)(module)), n = n = {
                step: Chunk84658.PG[Chunk84658.PG.LANDING],
                back: false,
                skip: false
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(exports, Object.getOwnPropertyDescriptors(require)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, l)
                }
                return n
              })(Object(require)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              }), exports)), (0, Chunk983135.IG)(module, Chunk84658.PG.LANDING)
            }
          },
          disabled: false
        })
      })]
    }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(T, {}), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)("div", {
      className: Chunk473450.valuesContainer,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk473450.valueContainer,
        children: [(0, Chunk54381.jsx)(x, {}), (0, Chunk54381.jsxs)("div", {
          className: Chunk473450.valueText,
          children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-md/semibold",
            children: Chunk388032.intl.string(Chunk388032.t.Z7kqKZ)
          }), (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: Chunk388032.intl.string(Chunk388032.t.di3UC5)
          })]
        })]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk473450.valueContainer,
        children: [(0, Chunk54381.jsxs)("div", {
          className: Chunk473450.valueText,
          children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-md/semibold",
            children: Chunk388032.intl.string(Chunk388032.t.O4jYEh)
          }), (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: Chunk388032.intl.string(Chunk388032.t["l/l/Gw"])
          })]
        }), (0, Chunk54381.jsxs)("div", {
          className: r()(Chunk473450.upsellPreview, Chunk473450.spacingLarge),
          children: [(0, Chunk54381.jsx)(Chunk150512.Z, {
            guildId: module,
            welcomeMessage: {
              authorIds: [require.id],
              message: Chunk388032.intl.string(Chunk388032.t.hIWAft)
            }
          }), (0, Chunk54381.jsx)(Chunk869764.k, {
            title: Chunk388032.intl.string(Chunk388032.t["47zu7B"]),
            subtitle: Chunk388032.intl.string(Chunk388032.t["amoSN/"]),
            completed: true,
            Icon: Chunk481060.VL1,
            variant: "static"
          }), (0, Chunk54381.jsx)(Chunk869764.k, {
            title: Chunk388032.intl.string(Chunk388032.t.EZfTKE),
            subtitle: Chunk388032.intl.string(Chunk388032.t["/sYelW"]),
            completed: true,
            Icon: Chunk481060.VL1,
            variant: "static"
          })]
        })]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk473450.valueContainer,
        children: [(0, Chunk54381.jsx)("div", {
          className: r()(Chunk473450.upsellPreview, Chunk473450.spacingLarge),
          children: [{
            channelIcon: () => (0, Chunk54381.jsx)(Chunk481060.MqZ, {
              size: "xs",
              color: "currentColor",
              className: Chunk473450.channelIcon
            }),
            channel: Chunk388032.intl.string(Chunk388032.t.MXJozL),
            selected: true
          }, {
            channelIcon: () => (0, Chunk54381.jsx)(Chunk481060.VL1, {
              size: "md",
              color: "currentColor",
              className: Chunk473450.channelIcon
            }),
            channel: Chunk388032.intl.string(Chunk388032.t.Pkj0f6),
            selected: true
          }, {
            channelIcon: () => (0, Chunk54381.jsx)(Chunk481060.VL1, {
              size: "md",
              color: "currentColor",
              className: Chunk473450.channelIcon
            }),
            channel: Chunk388032.intl.string(Chunk388032.t["imVD+u"]),
            selected: false
          }, {
            channelIcon: () => (0, Chunk54381.jsx)(Chunk481060.Mmi, {
              size: "md",
              color: "currentColor",
              className: Chunk473450.channelIcon
            }),
            channel: Chunk388032.intl.string(Chunk388032.t["Pj/Wpt"]),
            selected: true
          }].map((e, t) => {
            let {
              channelIcon: n,
              channel: i,
              selected: a
            } = e;
            return (0, l.jsxs)("div", {
              className: r()(S.previewListItem, S.spaceBetween, {
                [S.selected]: a
              }),
              children: [(0, l.jsxs)("div", {
                className: S.channel,
                children: [n(), (0, l.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  children: i
                })]
              }), (0, l.jsx)("div", {
                className: r()(S.checkbox, {
                  [S.selected]: a
                }),
                children: a && (0, l.jsx)(s.dz2, {
                  size: "md",
                  color: "currentColor",
                  className: S.checkmark
                })
              })]
            }, t)
          })
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk473450.valueText,
          children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-md/semibold",
            children: Chunk388032.intl.string(Chunk388032.t["3T9aHG"])
          }), (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: Chunk388032.intl.string(Chunk388032.t.dA7Cag)
          })]
        })]
      })]
    })]
  })
}