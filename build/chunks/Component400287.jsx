/** Chunk was on web.js **/
/** chunk id: 400287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk538534 = require("./538534.jsx"),
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

function y() {
  var e;
  let t = Chunk695346.fq.useSetting(),
    n = Chunk695346.eR.useSetting(),
    y = (0, Chunk125900.V2)({
      location: "UserSettingsTextImages"
    }),
    O = Chunk695346.R$.useSetting(),
    v = Chunk695346.cC.useSetting(),
    I = Chunk695346.vF.useSetting(),
    T = Chunk695346.H1.useSetting(),
    S = Chunk695346.ev.useSetting(),
    A = Chunk695346.x4.useSetting(),
    C = Chunk695346.RS.useSetting(),
    N = Chunk695346.NA.useSetting(),
    R = Chunk695346.nc.useSetting(),
    P = Chunk695346.HV.useSetting(),
    w = null != (e = Chunk695346.rR.useSetting()) ? module : Chunk125085.K,
    {
      analyticsLocations: D
    } = (0, Chunk906732.ZP)(Chunk100527.Z.TEXT_AND_IMAGES),
    L = Chunk647438.useCallback(e => {
      let t = 1 === e;
      t ? d.Z.cleanUpPrivateChannelSearchState() : d.Z.cleanUpSearchState({
        type: g.aib.DMS
      }), p.rR.updateSetting(t)
    }, []),
    x = () => (0, Chunk951288.jsx)(Chunk538534.E, {
      label: Chunk388032.intl.string(Chunk388032.t.QgwmV1),
      description: Chunk388032.intl.string(Chunk388032.t.TYnRkZ),
      options: [{
        name: Chunk388032.intl.string(Chunk388032.t["KFH/mZ"]),
        value: Chunk981631.A2N.ON_CLICK
      }, {
        name: Chunk388032.intl.string(Chunk388032.t.K5VTBA),
        value: Chunk981631.A2N.IF_MODERATOR
      }, {
        name: Chunk388032.intl.string(Chunk388032.t.Pe1RbG),
        value: Chunk981631.A2N.ALWAYS
      }],
      onChange: e => p.cC.updateSetting(e),
      value: v
    });
  return (0, Chunk951288.jsx)(Chunk273313.Z, {
    title: Chunk388032.intl.string(Chunk388032.t["/VQax8"]),
    children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_INLINE_MEDIA,
        children: (0, Chunk951288.jsxs)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.U68Dgo),
          children: [(0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_INLINE_MEDIA_LINKS,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: C,
              onChange: Chunk695346.RS.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t.U47N1t)
            })
          }), (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_INLINE_MEDIA_UPLOADS,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: A,
              description: Chunk388032.intl.formatToPlainString(Chunk388032.t.qjjvqK, {
                maxSize: 10
              }),
              onChange: Chunk695346.x4.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t.VP11Nj)
            })
          }), (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: T,
              description: Chunk388032.intl.string(Chunk388032.t.T0rbtL),
              onChange: Chunk695346.H1.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t["w8j+yc"])
            })
          })]
        })
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_EMBEDS,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.PWZOn5),
          children: (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_EMBEDS_LINK_PREVIEWS,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: N,
              onChange: Chunk695346.NA.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t.xX0ZTE)
            })
          })
        })]
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_EMOJI,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsxs)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.sMOuub),
          children: [(0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_EMOJI_REACTIONS,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: R,
              onChange: Chunk695346.nc.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t.Iv24sr)
            })
          }), (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_EMOJI_EMOTICONS,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: S,
              description: Chunk454585.Z.parse(Chunk388032.intl.string(Chunk388032.t["20dvub"])),
              onChange: Chunk695346.ev.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t["79qal5"])
            })
          })]
        })]
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_STICKERS,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t["6NtAuL"]),
          children: (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_STICKERS_AUTOCOMPLETE,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: exports,
              description: Chunk388032.intl.string(Chunk388032.t["/eVrj4"]),
              onChange: e => {
                _.default.track(g.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                  enabled: e,
                  location: {
                    section: g.jXE.SETTINGS_TEXT_AND_IMAGES
                  },
                  location_stack: D
                }), p.fq.updateSetting(e)
              },
              label: Chunk388032.intl.string(Chunk388032.t["29xPVV"])
            })
          })
        })]
      }), y && (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_SOUNDMOJI,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.EHlAMT),
          children: (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: require,
              description: Chunk388032.intl.string(Chunk388032.t.hrSIhI),
              onChange: e => {
                _.default.track(g.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                  checked: e,
                  location: {
                    section: g.jXE.SETTINGS_TEXT_AND_IMAGES
                  }
                }), p.eR.updateSetting(e)
              },
              label: Chunk388032.intl.string(Chunk388032.t["CtYr+f"])
            })
          })
        })]
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_TEXT_BOX,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsxs)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.afR0pK),
          children: [(0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_TEXT_BOX_PREVIEW,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: O,
              onChange: e => {
                _.default.track(g.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                  enabled: e,
                  location: {
                    section: g.jXE.SETTINGS_TEXT_AND_IMAGES
                  }
                }), p.R$.updateSetting(e)
              },
              label: Chunk388032.intl.string(Chunk388032.t.AqGrEB)
            })
          }), (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_MENTION_SUGGESTIONS,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: P,
              description: Chunk388032.intl.string(Chunk388032.t.AaXigo),
              onChange: e => {
                p.HV.updateSetting(e)
              },
              label: Chunk388032.intl.string(Chunk388032.t.uXQ2xc)
            })
          })]
        })]
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_THREADS,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.B2panJ),
          children: (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.CHAT_THREADS_SPLIT_VIEW,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              checked: I,
              onChange: Chunk695346.vF.updateSetting,
              label: Chunk388032.intl.string(Chunk388032.t.AInv5u)
            })
          })
        })]
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.MESSAGE_SEARCH,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.MESSAGE_SEARCH_ALL_DMS,
          children: (0, Chunk951288.jsx)(Chunk481060.C3N, {
            label: Chunk388032.intl.string(Chunk388032.t.VYODPD),
            children: (0, Chunk951288.jsx)(Chunk538534.E, {
              label: Chunk388032.intl.string(Chunk388032.t["NxjN+v"]),
              options: [{
                name: Chunk388032.intl.string(Chunk388032.t["t+fGsr"]),
                value: 0
              }, {
                name: Chunk388032.intl.string(Chunk388032.t.MwlEGB),
                value: 1
              }],
              onChange: L,
              value: +!!w
            })
          })
        })]
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_SPOILERS,
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), x()]
      })]
    })
  })
}