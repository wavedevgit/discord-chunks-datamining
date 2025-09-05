/** Chunk was on 58227 **/
/** chunk id: 707076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _,
  j: () => O
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk72362 = require("./72362.js");

function O(e) {
  let {
    isTooltip: t = false
  } = e, n = [{
    emoji: "\uD83E\uDDD9",
    emojiDescription: E.intl.string(E.t.Jh9uiY),
    title: E.intl.string(E.t.ATF45u),
    selected: true
  }, {
    emoji: "\uD83C\uDFA4",
    emojiDescription: E.intl.string(E.t["nGt+MT"]),
    title: E.intl.string(E.t["30uo7O"]),
    selected: false
  }, {
    emoji: "\uD83D\uDC40",
    emojiDescription: E.intl.string(E.t.hOMH5u),
    title: E.intl.string(E.t["5Z5sgo"]),
    selected: false
  }];
  t && n.pop();
  let i = t ? (0, l.jsx)(a.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      children: E.intl.string(E.t.nTI2mZ)
    }) : (0, l.jsx)(a.X6q, {
      variant: "heading-md/semibold",
      children: E.intl.string(E.t.g1OQtr)
    }),
    s = t ? (0, l.jsx)(a.Text, {
      variant: "text-xxs/normal",
      children: E.intl.format(E.t.hGwDPT, {})
    }) : (0, l.jsx)(a.Text, {
      variant: "text-xs/normal",
      children: E.intl.format(E.t["8XLD3t"], {})
    });
  return (0, l.jsxs)("div", {
    className: r()(T.upsellPreview, T.spacingLarge, {
      [T.tooltip]: t
    }),
    children: [i, (0, l.jsx)("div", {
      className: T.spacingSmall,
      children: n.map((e, t) => {
        let {
          emoji: n,
          emojiDescription: i,
          title: s,
          selected: o
        } = e;
        return (0, l.jsxs)("div", {
          className: r()(T.previewListItem, {
            [T.selected]: o
          }),
          children: [(0, l.jsx)("span", {
            role: "img",
            "aria-label": i,
            children: n
          }), (0, l.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "header-primary",
            children: s
          }), o && (0, l.jsx)("div", {
            className: T.checkboxCircle,
            children: (0, l.jsx)(a.dz2, {
              size: "md",
              color: "currentColor",
              className: T.checkmark
            })
          })]
        }, t)
      })
    }), s]
  })
}

function x() {
  let e = [{
    message: Chunk388032.t.FUUXXl,
    profilePic: "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
    adminTitle: Chunk388032.intl.string(Chunk388032.t.RZVpur)
  }, {
    message: Chunk388032.t.JAXvDQ,
    profilePic: "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
    adminTitle: Chunk388032.intl.string(Chunk388032.t.xyrlg4)
  }, {
    message: Chunk388032.t.Wj9Djo,
    profilePic: "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
    adminTitle: Chunk388032.intl.string(Chunk388032.t["o/LQMj"])
  }, {
    message: Chunk388032.t.ALsMNT,
    profilePic: "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
    adminTitle: Chunk388032.intl.string(Chunk388032.t["uvM+xc"])
  }];
  return (0, Chunk951288.jsx)(Chunk721012.i, {
    testimonials: module
  })
}

function _() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildId()),
    t = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(module)),
    n = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  return null == module || null == exports || null == require ? null : (0, Chunk951288.jsxs)("div", {
    className: Chunk72362.upsellContainer,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk72362.upsellHeader,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk72362.islands,
        children: [(0, Chunk951288.jsx)(Chunk548473.xm, {}), (0, Chunk951288.jsx)(Chunk548473._I, {
          guild: exports,
          mainIslandClassName: Chunk72362.mainIsland,
          balloonDogClassName: Chunk72362.balloonDog
        }), (0, Chunk951288.jsx)(Chunk548473.B0, {})]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk72362.upsellHeaderText,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-xl/semibold",
          children: Chunk388032.intl.string(Chunk388032.t.GnKOAw)
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: Chunk388032.intl.string(Chunk388032.t.SJRFJi)
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk72362.upsellButtons,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.RzWDqa),
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
    }), (0, Chunk951288.jsx)(Chunk481060.$i$, {}), (0, Chunk951288.jsx)(x, {}), (0, Chunk951288.jsx)(Chunk481060.$i$, {}), (0, Chunk951288.jsxs)("div", {
      className: Chunk72362.valuesContainer,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk72362.valueContainer,
        children: [(0, Chunk951288.jsx)(O, {}), (0, Chunk951288.jsxs)("div", {
          className: Chunk72362.valueText,
          children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
            variant: "heading-md/semibold",
            children: Chunk388032.intl.string(Chunk388032.t.Z7kqKS)
          }), (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: Chunk388032.intl.string(Chunk388032.t.di3UCw)
          })]
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk72362.valueContainer,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk72362.valueText,
          children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
            variant: "heading-md/semibold",
            children: Chunk388032.intl.string(Chunk388032.t.O4jYEh)
          }), (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: Chunk388032.intl.string(Chunk388032.t["l/l/Gx"])
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: r()(Chunk72362.upsellPreview, Chunk72362.spacingLarge),
          children: [(0, Chunk951288.jsx)(Chunk150512.Z, {
            guildId: module,
            welcomeMessage: {
              authorIds: [require.id],
              message: Chunk388032.intl.string(Chunk388032.t.hIWAfn)
            }
          }), (0, Chunk951288.jsx)(Chunk869764.k, {
            title: Chunk388032.intl.string(Chunk388032.t["47zu7O"]),
            subtitle: Chunk388032.intl.string(Chunk388032.t.amoSNz),
            completed: true,
            Icon: Chunk481060.VL1,
            variant: "static"
          }), (0, Chunk951288.jsx)(Chunk869764.k, {
            title: Chunk388032.intl.string(Chunk388032.t.EZfTKC),
            subtitle: Chunk388032.intl.string(Chunk388032.t["/sYelZ"]),
            completed: true,
            Icon: Chunk481060.VL1,
            variant: "static"
          })]
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk72362.valueContainer,
        children: [(0, Chunk951288.jsx)("div", {
          className: r()(Chunk72362.upsellPreview, Chunk72362.spacingLarge),
          children: [{
            channelIcon: () => (0, Chunk951288.jsx)(Chunk481060.MqZ, {
              size: "xs",
              color: "currentColor",
              className: Chunk72362.channelIcon
            }),
            channel: Chunk388032.intl.string(Chunk388032.t.MXJozM),
            selected: true
          }, {
            channelIcon: () => (0, Chunk951288.jsx)(Chunk481060.VL1, {
              size: "md",
              color: "currentColor",
              className: Chunk72362.channelIcon
            }),
            channel: Chunk388032.intl.string(Chunk388032.t.Pkj0f3),
            selected: true
          }, {
            channelIcon: () => (0, Chunk951288.jsx)(Chunk481060.VL1, {
              size: "md",
              color: "currentColor",
              className: Chunk72362.channelIcon
            }),
            channel: Chunk388032.intl.string(Chunk388032.t["imVD+v"]),
            selected: false
          }, {
            channelIcon: () => (0, Chunk951288.jsx)(Chunk481060.Mmi, {
              size: "md",
              color: "currentColor",
              className: Chunk72362.channelIcon
            }),
            channel: Chunk388032.intl.string(Chunk388032.t["Pj/Wpq"]),
            selected: true
          }].map((e, t) => {
            let {
              channelIcon: n,
              channel: i,
              selected: s
            } = e;
            return (0, l.jsxs)("div", {
              className: r()(T.previewListItem, T.spaceBetween, {
                [T.selected]: s
              }),
              children: [(0, l.jsxs)("div", {
                className: T.channel,
                children: [n(), (0, l.jsx)(a.Text, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  children: i
                })]
              }), (0, l.jsx)("div", {
                className: r()(T.checkbox, {
                  [T.selected]: s
                }),
                children: s && (0, l.jsx)(a.dz2, {
                  size: "md",
                  color: "currentColor",
                  className: T.checkmark
                })
              })]
            }, t)
          })
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk72362.valueText,
          children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
            variant: "heading-md/semibold",
            children: Chunk388032.intl.string(Chunk388032.t["3T9aHB"])
          }), (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: Chunk388032.intl.string(Chunk388032.t.dA7Cam)
          })]
        })]
      })]
    })]
  })
}