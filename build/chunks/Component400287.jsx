/** Chunk was on web.js **/
/** chunk id: 400287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk538534 = require("./538534.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk125900 = require("./125900.js"),
  Chunk921801 = require("./921801.js"),
  Chunk626135 = require("./626135.js"),
  Chunk695346 = require("./695346.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10198 = require("./10198.js");

function b() {
  let e = Chunk695346.fq.useSetting(),
    t = Chunk695346.eR.useSetting(),
    n = (0, Chunk125900.V2)({
      location: "UserSettingsTextImages"
    }),
    i = Chunk695346.R$.useSetting(),
    b = Chunk695346.cC.useSetting(),
    y = Chunk695346.vF.useSetting(),
    O = Chunk695346.H1.useSetting(),
    v = Chunk695346.ev.useSetting(),
    I = Chunk695346.x4.useSetting(),
    T = Chunk695346.RS.useSetting(),
    S = Chunk695346.NA.useSetting(),
    A = Chunk695346.nc.useSetting(),
    {
      analyticsLocations: C
    } = (0, Chunk906732.ZP)(Chunk100527.Z.TEXT_AND_IMAGES),
    N = () => (0, Chunk951288.jsx)(Chunk538534.E, {
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
      value: b
    });
  return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    tag: Chunk481060.RB0.H1,
    title: Chunk388032.intl.string(Chunk388032.t["/VQax8"]),
    children: [(0, Chunk951288.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.CHAT_INLINE_MEDIA,
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        className: Chunk10198.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.U68Dgo)
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_INLINE_MEDIA_LINKS,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          className: a()(Chunk10198.marginTop8, Chunk10198.marginBottom20),
          value: T,
          onChange: Chunk695346.RS.updateSetting,
          children: Chunk388032.intl.string(Chunk388032.t.U47N1t)
        })
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_INLINE_MEDIA_UPLOADS,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          className: a()(Chunk10198.marginTop8, Chunk10198.marginBottom20),
          value: I,
          note: Chunk388032.intl.formatToPlainString(Chunk388032.t.qjjvqK, {
            maxSize: 10
          }),
          onChange: Chunk695346.x4.updateSetting,
          children: Chunk388032.intl.string(Chunk388032.t.VP11Nj)
        })
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          className: a()(Chunk10198.marginTop8, Chunk10198.marginBottom40),
          value: O,
          note: Chunk388032.intl.string(Chunk388032.t.T0rbtL),
          onChange: Chunk695346.H1.updateSetting,
          children: Chunk388032.intl.string(Chunk388032.t["w8j+yc"])
        })
      })]
    }), (0, Chunk951288.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.CHAT_EMBEDS,
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        className: Chunk10198.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.PWZOn5)
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_EMBEDS_LINK_PREVIEWS,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          className: a()(Chunk10198.marginTop8, Chunk10198.marginBottom40),
          value: S,
          onChange: Chunk695346.NA.updateSetting,
          children: Chunk388032.intl.string(Chunk388032.t.xX0ZTE)
        })
      })]
    }), (0, Chunk951288.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.CHAT_EMOJI,
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        className: Chunk10198.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.sMOuub)
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_EMOJI_REACTIONS,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          className: a()(Chunk10198.marginTop8, Chunk10198.marginBottom20),
          value: A,
          onChange: Chunk695346.nc.updateSetting,
          children: Chunk388032.intl.string(Chunk388032.t.Iv24sr)
        })
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.CHAT_EMOJI_EMOTICONS,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          className: Chunk10198.marginBottom40,
          value: v,
          note: Chunk454585.Z.parse(Chunk388032.intl.string(Chunk388032.t["20dvub"])),
          onChange: Chunk695346.ev.updateSetting,
          children: Chunk388032.intl.string(Chunk388032.t["79qal5"])
        })
      })]
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.CHAT_STICKERS,
      children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: Chunk10198.marginBottom8,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          className: Chunk10198.marginBottom8,
          children: Chunk388032.intl.string(Chunk388032.t["6NtAuL"])
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.CHAT_STICKERS_AUTOCOMPLETE,
          children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
            className: Chunk10198.marginBottom40,
            value: module,
            note: Chunk388032.intl.string(Chunk388032.t["/eVrj4"]),
            onChange: e => {
              _.default.track(m.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: {
                  section: m.jXE.SETTINGS_TEXT_AND_IMAGES
                },
                location_stack: C
              }), p.fq.updateSetting(e)
            },
            children: Chunk388032.intl.string(Chunk388032.t["29xPVV"])
          })
        })]
      })
    }), require && (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.CHAT_SOUNDMOJI,
      children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: Chunk10198.marginBottom8,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          className: Chunk10198.marginBottom8,
          children: Chunk388032.intl.string(Chunk388032.t.EHlAMT)
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
          children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
            className: Chunk10198.marginBottom40,
            value: exports,
            note: Chunk388032.intl.string(Chunk388032.t.hrSIhI),
            onChange: e => {
              _.default.track(m.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                checked: e,
                location: {
                  section: m.jXE.SETTINGS_TEXT_AND_IMAGES
                }
              }), p.eR.updateSetting(e)
            },
            children: Chunk388032.intl.string(Chunk388032.t["CtYr+f"])
          })
        })]
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.CHAT_TEXT_BOX,
      children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: Chunk10198.marginBottom8,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          className: Chunk10198.marginBottom8,
          children: Chunk388032.intl.string(Chunk388032.t.afR0pK)
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.CHAT_TEXT_BOX_PREVIEW,
          children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
            className: a()(Chunk10198.marginTop8, Chunk10198.marginBottom40),
            value: Chunk120356,
            onChange: e => {
              _.default.track(m.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: {
                  section: m.jXE.SETTINGS_TEXT_AND_IMAGES
                }
              }), p.R$.updateSetting(e)
            },
            children: Chunk388032.intl.string(Chunk388032.t.AqGrEB)
          })
        })]
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.CHAT_THREADS,
      children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: Chunk10198.marginBottom40,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          className: Chunk10198.marginBottom8,
          children: Chunk388032.intl.string(Chunk388032.t.B2panJ)
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.CHAT_THREADS_SPLIT_VIEW,
          children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
            className: Chunk10198.marginTop8,
            value: y,
            onChange: Chunk695346.vF.updateSetting,
            children: Chunk388032.intl.string(Chunk388032.t.AInv5u)
          })
        })]
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.CHAT_SPOILERS,
      children: N()
    })]
  })
}