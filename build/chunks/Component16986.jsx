/** Chunk was on 42402 **/
/** chunk id: 16986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk46054 = require("./46054.js"),
  Chunk753806 = require("./753806.jsx"),
  Chunk145331 = require("./145331.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk253932 = require("./253932.js"),
  Chunk790174 = require("./790174.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function A() {
  let e = h.ML.useSetting(),
    t = h.eK.useSetting(),
    n = h.SI.useSetting(),
    A = h.gs.useSetting(),
    y = h.SY.useSetting(),
    O = h._z.useSetting(),
    j = h.j7.useSetting(),
    x = h.X6.useSetting(),
    _ = h.hD.useSetting(),
    v = h.rs.useSetting(),
    E = h.jW.useSetting(),
    C = h.ng.useSetting(),
    S = h.Hu.useSetting(),
    {
      analyticsLocations: I
    } = (0, a.Ay)(s.A.TEXT_AND_IMAGES),
    N = l.useCallback(e => {
      let t = 1 === e;
      t ? c.A.cleanUpPrivateChannelSearchState() : c.A.cleanUpSearchState({
        type: m.I4_.DMS
      }), (0, u._k)({
        prevIsCrossDMSettingEnabled: h.Hu.getSetting(),
        isCrossDMSettingEnabled: t,
        location: u.vy.USER_SETTINGS
      }), h.Hu.updateSetting(t)
    }, []);
  return (0, r.jsx)(g.A, {
    title: b.intl.string(b.t["/VQax8"]),
    children: (0, r.jsxs)(i.BJc, {
      direction: "vertical",
      gap: 24,
      children: [(0, r.jsx)(d.x, {
        setting: f.H.CHAT_INLINE_MEDIA,
        children: (0, r.jsxs)(i.nVY, {
          label: b.intl.string(b.t.U68Dgp),
          children: [(0, r.jsx)(d.x, {
            setting: f.H.CHAT_INLINE_MEDIA_LINKS,
            children: (0, r.jsx)(i.dOG, {
              checked: _,
              onChange: h.hD.updateSetting,
              label: b.intl.string(b.t.U47N1p)
            })
          }), (0, r.jsx)(d.x, {
            setting: f.H.CHAT_INLINE_MEDIA_UPLOADS,
            children: (0, r.jsx)(i.dOG, {
              checked: x,
              description: b.intl.formatToPlainString(b.t.qjjvqO, {
                maxSize: 10
              }),
              onChange: h.X6.updateSetting,
              label: b.intl.string(b.t.VP11No)
            })
          }), (0, r.jsx)(d.x, {
            setting: f.H.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
            children: (0, r.jsx)(i.dOG, {
              checked: O,
              description: b.intl.string(b.t.T0rbtM),
              onChange: h._z.updateSetting,
              label: b.intl.string(b.t["w8j+yW"])
            })
          })]
        })
      }), (0, r.jsxs)(d.x, {
        setting: f.H.CHAT_EMBEDS,
        children: [(0, r.jsx)(i.cGx, {}), (0, r.jsx)(i.nVY, {
          label: b.intl.string(b.t.PWZOn4),
          children: (0, r.jsx)(d.x, {
            setting: f.H.CHAT_EMBEDS_LINK_PREVIEWS,
            children: (0, r.jsx)(i.dOG, {
              checked: v,
              onChange: h.rs.updateSetting,
              label: b.intl.string(b.t.xX0ZTA)
            })
          })
        })]
      }), (0, r.jsxs)(d.x, {
        setting: f.H.CHAT_EMOJI,
        children: [(0, r.jsx)(i.cGx, {}), (0, r.jsxs)(i.nVY, {
          label: b.intl.string(b.t.sMOuuS),
          children: [(0, r.jsx)(d.x, {
            setting: f.H.CHAT_EMOJI_REACTIONS,
            children: (0, r.jsx)(i.dOG, {
              checked: E,
              onChange: h.jW.updateSetting,
              label: b.intl.string(b.t.Iv24sm)
            })
          }), (0, r.jsx)(d.x, {
            setting: f.H.CHAT_EMOJI_EMOTICONS,
            children: (0, r.jsx)(i.dOG, {
              checked: j,
              description: o.A.parse(b.intl.string(b.t["20dvuQ"])),
              onChange: h.j7.updateSetting,
              label: b.intl.string(b.t["79qal8"])
            })
          })]
        })]
      }), (0, r.jsxs)(d.x, {
        setting: f.H.CHAT_STICKERS,
        children: [(0, r.jsx)(i.cGx, {}), (0, r.jsx)(i.nVY, {
          label: b.intl.string(b.t["6NtAuJ"]),
          children: (0, r.jsx)(d.x, {
            setting: f.H.CHAT_STICKERS_AUTOCOMPLETE,
            children: (0, r.jsx)(i.dOG, {
              checked: e,
              description: b.intl.string(b.t["/eVrj8"]),
              onChange: e => {
                p.default.track(m.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                  enabled: e,
                  location: {
                    section: m.JJy.SETTINGS_TEXT_AND_IMAGES
                  },
                  location_stack: I
                }), h.ML.updateSetting(e)
              },
              label: b.intl.string(b.t["29xPVZ"])
            })
          })
        })]
      }), (0, r.jsxs)(d.x, {
        setting: f.H.CHAT_SOUNDMOJI,
        children: [(0, r.jsx)(i.cGx, {}), (0, r.jsx)(i.nVY, {
          label: b.intl.string(b.t.EHlAMc),
          children: (0, r.jsx)(d.x, {
            setting: f.H.CHAT_SOUNDMOJI_AUTOCOMPLETE,
            children: (0, r.jsx)(i.dOG, {
              checked: t,
              description: b.intl.string(b.t.hrSIhN),
              onChange: e => {
                p.default.track(m.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                  checked: e,
                  location: {
                    section: m.JJy.SETTINGS_TEXT_AND_IMAGES
                  }
                }), h.eK.updateSetting(e)
              },
              label: b.intl.string(b.t["CtYr+U"])
            })
          })
        })]
      }), (0, r.jsxs)(d.x, {
        setting: f.H.CHAT_TEXT_BOX,
        children: [(0, r.jsx)(i.cGx, {}), (0, r.jsxs)(i.nVY, {
          label: b.intl.string(b.t.afR0pI),
          children: [(0, r.jsx)(d.x, {
            setting: f.H.CHAT_TEXT_BOX_PREVIEW,
            children: (0, r.jsx)(i.dOG, {
              checked: n,
              onChange: e => {
                p.default.track(m.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                  enabled: e,
                  location: {
                    section: m.JJy.SETTINGS_TEXT_AND_IMAGES
                  }
                }), h.SI.updateSetting(e)
              },
              label: b.intl.string(b.t.AqGrEI)
            })
          }), (0, r.jsx)(d.x, {
            setting: f.H.CHAT_MENTION_SUGGESTIONS,
            children: (0, r.jsx)(i.dOG, {
              checked: C,
              description: b.intl.string(b.t.AaXigo),
              onChange: e => {
                h.ng.updateSetting(e)
              },
              label: b.intl.string(b.t.uXQ2xT)
            })
          })]
        })]
      }), (0, r.jsxs)(d.x, {
        setting: f.H.CHAT_THREADS,
        children: [(0, r.jsx)(i.cGx, {}), (0, r.jsx)(i.nVY, {
          label: b.intl.string(b.t.B2panI),
          children: (0, r.jsx)(d.x, {
            setting: f.H.CHAT_THREADS_SPLIT_VIEW,
            children: (0, r.jsx)(i.dOG, {
              checked: y,
              onChange: h.SY.updateSetting,
              label: b.intl.string(b.t.AInv5m)
            })
          })
        })]
      }), (0, r.jsxs)(d.x, {
        setting: f.H.MESSAGE_SEARCH,
        children: [(0, r.jsx)(i.cGx, {}), (0, r.jsx)(d.x, {
          setting: f.H.MESSAGE_SEARCH_ALL_DMS,
          children: (0, r.jsx)(i.z6M, {
            label: b.intl.string(b.t["NxjN+q"]),
            options: [{
              name: b.intl.string(b.t["t+fGsk"]),
              value: 0
            }, {
              name: b.intl.string(b.t.MwlEGN),
              value: 1
            }],
            onChange: N,
            value: +!!S
          })
        })]
      }), (0, r.jsxs)(d.x, {
        setting: f.H.CHAT_SPOILERS,
        children: [(0, r.jsx)(i.cGx, {}), (0, r.jsx)(i.z6M, {
          label: b.intl.string(b.t.QgwmVz),
          description: b.intl.string(b.t.TYnRkS),
          options: [{
            name: b.intl.string(b.t["KFH/me"]),
            value: m.P6Q.ON_CLICK
          }, {
            name: b.intl.string(b.t.K5VTBE),
            value: m.P6Q.IF_MODERATOR
          }, {
            name: b.intl.string(b.t.Pe1RbL),
            value: m.P6Q.ALWAYS
          }],
          onChange: e => h.gs.updateSetting(e),
          value: A
        })]
      })]
    })
  })
}