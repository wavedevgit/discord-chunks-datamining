/** Chunk was on web.js **/
/** chunk id: 400287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk125900 = require("./125900.js"),
  Chunk611004 = require("./611004.js"),
  Chunk921801 = require("./921801.js"),
  Chunk626135 = require("./626135.js"),
  Chunk695346 = require("./695346.js"),
  Chunk273313 = require("./273313.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk125085 = require("./125085.js"),
  Chunk388032 = require("./388032.jsx");

function b() {
  var e;
  let t = Chunk695346.fq.useSetting(),
    n = Chunk695346.eR.useSetting(),
    b = (0, Chunk125900.V2)({
      location: "UserSettingsTextImages"
    }),
    y = Chunk695346.R$.useSetting(),
    O = Chunk695346.cC.useSetting(),
    v = Chunk695346.vF.useSetting(),
    I = Chunk695346.H1.useSetting(),
    T = Chunk695346.ev.useSetting(),
    S = Chunk695346.x4.useSetting(),
    A = Chunk695346.RS.useSetting(),
    C = Chunk695346.NA.useSetting(),
    N = Chunk695346.nc.useSetting(),
    R = Chunk695346.HV.useSetting(),
    P = null != (e = Chunk695346.rR.useSetting()) ? module : Chunk125085.K,
    {
      analyticsLocations: w
    } = (0, Chunk906732.ZP)(Chunk100527.Z.TEXT_AND_IMAGES),
    D = Chunk647438.useCallback(e => {
      let t = 1 === e;
      t ? u.Z.cleanUpPrivateChannelSearchState() : u.Z.cleanUpSearchState({
        type: m.aib.DMS
      }), _.rR.updateSetting(t)
    }, []),
    x = () => (0, Chunk951288.jsx)(Chunk481060.FXm, {
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
      value: O
    });
  return (0, Chunk951288.jsx)(Chunk273313.Z, {
    title: Chunk388032.intl.string(Chunk388032.t["/VQax8"]),
    children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_INLINE_MEDIA,
        children: (0, Chunk951288.jsxs)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.U68Dgp),
          children: [(0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_INLINE_MEDIA_LINKS,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: A,
              onChange: Chunk695346.RS.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t.U47N1p)
            })
          }), (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_INLINE_MEDIA_UPLOADS,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: S,
              description: Chunk388032.intl.formatToPlainString(Chunk388032.t.qjjvqO, {
                maxSize: 10
              }),
              onChange: Chunk695346.x4.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t.VP11No)
            })
          }), (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: I,
              description: Chunk388032.intl.string(Chunk388032.t.T0rbtM),
              onChange: Chunk695346.H1.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t["w8j+yW"])
            })
          })]
        })
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_EMBEDS,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.PWZOn4),
          children: (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_EMBEDS_LINK_PREVIEWS,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: C,
              onChange: Chunk695346.NA.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t.xX0ZTA)
            })
          })
        })]
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_EMOJI,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsxs)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.sMOuuS),
          children: [(0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_EMOJI_REACTIONS,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: N,
              onChange: Chunk695346.nc.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t.Iv24sm)
            })
          }), (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_EMOJI_EMOTICONS,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: T,
              description: Chunk454585.Z.parse(Chunk388032.intl.string(Chunk388032.t["20dvuQ"])),
              onChange: Chunk695346.ev.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t["79qal8"])
            })
          })]
        })]
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_STICKERS,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t["6NtAuJ"]),
          children: (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_STICKERS_AUTOCOMPLETE,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: exports,
              description: Chunk388032.intl.string(Chunk388032.t["/eVrj8"]),
              onChange: e => {
                f.default.track(m.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                  enabled: e,
                  location: {
                    section: m.jXE.SETTINGS_TEXT_AND_IMAGES
                  },
                  location_stack: w
                }), _.fq.updateSetting(e)
              },
              label: Chunk388032.intl.string(Chunk388032.t["29xPVZ"])
            })
          })
        })]
      }), b && (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_SOUNDMOJI,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.EHlAMc),
          children: (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: require,
              description: Chunk388032.intl.string(Chunk388032.t.hrSIhN),
              onChange: e => {
                f.default.track(m.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                  checked: e,
                  location: {
                    section: m.jXE.SETTINGS_TEXT_AND_IMAGES
                  }
                }), _.eR.updateSetting(e)
              },
              label: Chunk388032.intl.string(Chunk388032.t["CtYr+U"])
            })
          })
        })]
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_TEXT_BOX,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsxs)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.afR0pI),
          children: [(0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_TEXT_BOX_PREVIEW,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: y,
              onChange: e => {
                f.default.track(m.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                  enabled: e,
                  location: {
                    section: m.jXE.SETTINGS_TEXT_AND_IMAGES
                  }
                }), _.R$.updateSetting(e)
              },
              label: Chunk388032.intl.string(Chunk388032.t.AqGrEI)
            })
          }), (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_MENTION_SUGGESTIONS,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: R,
              description: Chunk388032.intl.string(Chunk388032.t.AaXigo),
              onChange: e => {
                _.HV.updateSetting(e)
              },
              label: Chunk388032.intl.string(Chunk388032.t.uXQ2xT)
            })
          })]
        })]
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_THREADS,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.B2panI),
          children: (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_THREADS_SPLIT_VIEW,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: v,
              onChange: Chunk695346.vF.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t.AInv5m)
            })
          })
        })]
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.MESSAGE_SEARCH,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.MESSAGE_SEARCH_ALL_DMS,
          children: (0, Chunk951288.jsx)(Chunk481060.FXm, {
            label: Chunk388032.intl.string(Chunk388032.t["NxjN+q"]),
            options: [{
              name: Chunk388032.intl.string(Chunk388032.t["t+fGsk"]),
              value: 0
            }, {
              name: Chunk388032.intl.string(Chunk388032.t.MwlEGN),
              value: 1
            }],
            onChange: D,
            value: +!!P
          })
        })]
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_SPOILERS,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), x()]
      })]
    })
  })
}