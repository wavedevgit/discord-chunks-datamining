/** Chunk was on web.js **/
/** chunk id: 400287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk945577 = require("./945577.js"),
  Chunk611004 = require("./611004.jsx"),
  Chunk315322 = require("./315322.js"),
  Chunk921801 = require("./921801.js"),
  Chunk626135 = require("./626135.js"),
  Chunk695346 = require("./695346.js"),
  Chunk273313 = require("./273313.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b() {
  var e;
  let t = Chunk695346.fq.useSetting(),
    n = Chunk695346.eR.useSetting(),
    b = Chunk695346.R$.useSetting(),
    y = Chunk695346.cC.useSetting(),
    O = Chunk695346.vF.useSetting(),
    v = Chunk695346.H1.useSetting(),
    S = Chunk695346.ev.useSetting(),
    I = Chunk695346.x4.useSetting(),
    T = Chunk695346.RS.useSetting(),
    A = Chunk695346.NA.useSetting(),
    C = Chunk695346.nc.useSetting(),
    N = Chunk695346.HV.useSetting(),
    P = (0, Chunk945577.xy)({
      location: "UserSettingsTextImages"
    }),
    R = null != (e = Chunk695346.rR.useSetting()) ? module : P,
    {
      analyticsLocations: w
    } = (0, Chunk906732.ZP)(Chunk100527.Z.TEXT_AND_IMAGES),
    D = Chunk473749.useCallback(e => {
      let t = 1 === e;
      t ? u.Z.cleanUpPrivateChannelSearchState() : u.Z.cleanUpSearchState({
        type: g.aib.DMS
      }), (0, d.yn)({
        prevIsCrossDMSettingEnabled: _.rR.getSetting(),
        isCrossDMSettingEnabled: t,
        location: d.Ix.USER_SETTINGS
      }), _.rR.updateSetting(t)
    }, []),
    x = () => (0, Chunk54381.jsx)(Chunk481060.FXm, {
      label: Chunk388032.intl.string(Chunk388032.t.QgwmVz),
      description: Chunk388032.intl.string(Chunk388032.t.TYnRkS),
      options: [{
        name: Chunk388032.intl.string(Chunk388032.t["KFH/me"]),
        value: Chunk981631.A2N.ON_CLICK
      }, {
        name: Chunk388032.intl.string(Chunk388032.t.K5VTBE),
        value: Chunk981631.A2N.IF_MODERATOR
      }, {
        name: Chunk388032.intl.string(Chunk388032.t.Pe1RbL),
        value: Chunk981631.A2N.ALWAYS
      }],
      onChange: e => _.cC.updateSetting(e),
      value: y
    });
  return (0, Chunk54381.jsx)(Chunk273313.Z, {
    title: Chunk388032.intl.string(Chunk388032.t["/VQax8"]),
    children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_INLINE_MEDIA,
        children: (0, Chunk54381.jsxs)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.U68Dgp),
          children: [(0, Chunk54381.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_INLINE_MEDIA_LINKS,
            children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
              checked: T,
              onChange: Chunk695346.RS.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t.U47N1p)
            })
          }), (0, Chunk54381.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_INLINE_MEDIA_UPLOADS,
            children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
              checked: I,
              description: Chunk388032.intl.formatToPlainString(Chunk388032.t.qjjvqO, {
                maxSize: 10
              }),
              onChange: Chunk695346.x4.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t.VP11No)
            })
          }), (0, Chunk54381.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
            children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
              checked: v,
              description: Chunk388032.intl.string(Chunk388032.t.T0rbtM),
              onChange: Chunk695346.H1.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t["w8j+yW"])
            })
          })]
        })
      }), (0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_EMBEDS,
        children: [(0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.PWZOn4),
          children: (0, Chunk54381.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_EMBEDS_LINK_PREVIEWS,
            children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
              checked: A,
              onChange: Chunk695346.NA.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t.xX0ZTA)
            })
          })
        })]
      }), (0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_EMOJI,
        children: [(0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.sMOuuS),
          children: [(0, Chunk54381.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_EMOJI_REACTIONS,
            children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
              checked: C,
              onChange: Chunk695346.nc.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t.Iv24sm)
            })
          }), (0, Chunk54381.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_EMOJI_EMOTICONS,
            children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
              checked: S,
              description: Chunk454585.Z.parse(Chunk388032.intl.string(Chunk388032.t["20dvuQ"])),
              onChange: Chunk695346.ev.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t["79qal8"])
            })
          })]
        })]
      }), (0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_STICKERS,
        children: [(0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t["6NtAuJ"]),
          children: (0, Chunk54381.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_STICKERS_AUTOCOMPLETE,
            children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
              checked: exports,
              description: Chunk388032.intl.string(Chunk388032.t["/eVrj8"]),
              onChange: e => {
                p.default.track(g.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                  enabled: e,
                  location: {
                    section: g.jXE.SETTINGS_TEXT_AND_IMAGES
                  },
                  location_stack: w
                }), _.fq.updateSetting(e)
              },
              label: Chunk388032.intl.string(Chunk388032.t["29xPVZ"])
            })
          })
        })]
      }), (0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_SOUNDMOJI,
        children: [(0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.EHlAMc),
          children: (0, Chunk54381.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
            children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
              checked: require,
              description: Chunk388032.intl.string(Chunk388032.t.hrSIhN),
              onChange: e => {
                p.default.track(g.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                  checked: e,
                  location: {
                    section: g.jXE.SETTINGS_TEXT_AND_IMAGES
                  }
                }), _.eR.updateSetting(e)
              },
              label: Chunk388032.intl.string(Chunk388032.t["CtYr+U"])
            })
          })
        })]
      }), (0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_TEXT_BOX,
        children: [(0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.afR0pI),
          children: [(0, Chunk54381.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_TEXT_BOX_PREVIEW,
            children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
              checked: b,
              onChange: e => {
                p.default.track(g.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                  enabled: e,
                  location: {
                    section: g.jXE.SETTINGS_TEXT_AND_IMAGES
                  }
                }), _.R$.updateSetting(e)
              },
              label: Chunk388032.intl.string(Chunk388032.t.AqGrEI)
            })
          }), (0, Chunk54381.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_MENTION_SUGGESTIONS,
            children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
              checked: N,
              description: Chunk388032.intl.string(Chunk388032.t.AaXigo),
              onChange: e => {
                _.HV.updateSetting(e)
              },
              label: Chunk388032.intl.string(Chunk388032.t.uXQ2xT)
            })
          })]
        })]
      }), (0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_THREADS,
        children: [(0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.B2panI),
          children: (0, Chunk54381.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_THREADS_SPLIT_VIEW,
            children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
              checked: O,
              onChange: Chunk695346.vF.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t.AInv5m)
            })
          })
        })]
      }), (0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.MESSAGE_SEARCH,
        children: [(0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.MESSAGE_SEARCH_ALL_DMS,
          children: (0, Chunk54381.jsx)(Chunk481060.FXm, {
            label: Chunk388032.intl.string(Chunk388032.t["NxjN+q"]),
            options: [{
              name: Chunk388032.intl.string(Chunk388032.t["t+fGsk"]),
              value: 0
            }, {
              name: Chunk388032.intl.string(Chunk388032.t.MwlEGN),
              value: 1
            }],
            onChange: D,
            value: +!!R
          })
        })]
      }), (0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_SPOILERS,
        children: [(0, Chunk54381.jsx)(Chunk481060.izJ, {}), x()]
      })]
    })
  })
}