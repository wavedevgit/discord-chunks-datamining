/** Chunk was on 32502 **/
/** chunk id: 16986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk461012 = require("./461012.js"),
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

function j() {
  let e = x.ML.useSetting(),
    t = x.eK.useSetting(),
    n = x.SI.useSetting(),
    j = x.gs.useSetting(),
    O = x.SY.useSetting(),
    E = x._z.useSetting(),
    S = x.j7.useSetting(),
    f = x.X6.useSetting(),
    C = x.hD.useSetting(),
    v = x.rs.useSetting(),
    y = x.jW.useSetting(),
    T = x.ng.useSetting(),
    _ = x.Hu.useSetting(),
    N = x.wT.useSetting(),
    {
      analyticsLocations: I
    } = (0, a.Ay)(r.A.TEXT_AND_IMAGES),
    P = l.useCallback(e => {
      let t = 1 === e;
      t ? d.A.cleanUpPrivateChannelSearchState() : d.A.cleanUpSearchState({
        type: A.I4_.DMS
      }), (0, u._k)({
        prevIsCrossDMSettingEnabled: x.Hu.getSetting(),
        isCrossDMSettingEnabled: t,
        location: u.vy.USER_SETTINGS
      }), x.Hu.updateSetting(t)
    }, []);
  return (0, i.jsx)(p.A, {
    title: b.intl.string(b.t["/VQax8"]),
    children: (0, i.jsxs)(s.BJc, {
      direction: "vertical",
      gap: 24,
      children: [(0, i.jsx)(h.x, {
        setting: m.H.CHAT_INLINE_MEDIA,
        children: (0, i.jsxs)(s.nVY, {
          label: b.intl.string(b.t.U68Dgp),
          children: [(0, i.jsx)(h.x, {
            setting: m.H.CHAT_INLINE_MEDIA_LINKS,
            children: (0, i.jsx)(s.dOG, {
              checked: C,
              onChange: x.hD.updateSetting,
              label: b.intl.string(b.t.U47N1p)
            })
          }), (0, i.jsx)(h.x, {
            setting: m.H.CHAT_INLINE_MEDIA_UPLOADS,
            children: (0, i.jsx)(s.dOG, {
              checked: f,
              description: b.intl.formatToPlainString(b.t.qjjvqO, {
                maxSize: 10
              }),
              onChange: x.X6.updateSetting,
              label: b.intl.string(b.t.VP11No)
            })
          }), (0, i.jsx)(h.x, {
            setting: m.H.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
            children: (0, i.jsx)(s.dOG, {
              checked: E,
              description: b.intl.string(b.t.T0rbtM),
              onChange: x._z.updateSetting,
              label: b.intl.string(b.t["w8j+yW"])
            })
          })]
        })
      }), (0, i.jsxs)(h.x, {
        setting: m.H.CHAT_EMBEDS,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsx)(s.nVY, {
          label: b.intl.string(b.t.PWZOn4),
          children: (0, i.jsx)(h.x, {
            setting: m.H.CHAT_EMBEDS_LINK_PREVIEWS,
            children: (0, i.jsx)(s.dOG, {
              checked: v,
              onChange: x.rs.updateSetting,
              label: b.intl.string(b.t.xX0ZTA)
            })
          })
        })]
      }), (0, i.jsxs)(h.x, {
        setting: m.H.CHAT_EMOJI,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsxs)(s.nVY, {
          label: b.intl.string(b.t.sMOuuS),
          children: [(0, i.jsx)(h.x, {
            setting: m.H.CHAT_EMOJI_REACTIONS,
            children: (0, i.jsx)(s.dOG, {
              checked: y,
              onChange: x.jW.updateSetting,
              label: b.intl.string(b.t.Iv24sm)
            })
          }), (0, i.jsx)(h.x, {
            setting: m.H.CHAT_EMOJI_EMOTICONS,
            children: (0, i.jsx)(s.dOG, {
              checked: S,
              description: c.A.parse(b.intl.string(b.t["20dvuQ"])),
              onChange: x.j7.updateSetting,
              label: b.intl.string(b.t["79qal8"])
            })
          })]
        })]
      }), (0, i.jsxs)(h.x, {
        setting: m.H.CHAT_STICKERS,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsx)(s.nVY, {
          label: b.intl.string(b.t["6NtAuJ"]),
          children: (0, i.jsx)(h.x, {
            setting: m.H.CHAT_STICKERS_AUTOCOMPLETE,
            children: (0, i.jsx)(s.dOG, {
              checked: e,
              description: b.intl.string(b.t["/eVrj8"]),
              onChange: e => {
                g.default.track(A.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                  enabled: e,
                  location: {
                    section: A.JJy.SETTINGS_TEXT_AND_IMAGES
                  },
                  location_stack: I
                }), x.ML.updateSetting(e)
              },
              label: b.intl.string(b.t["29xPVZ"])
            })
          })
        })]
      }), (0, i.jsxs)(h.x, {
        setting: m.H.CHAT_SOUNDMOJI,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsx)(s.nVY, {
          label: b.intl.string(b.t.EHlAMc),
          children: (0, i.jsx)(h.x, {
            setting: m.H.CHAT_SOUNDMOJI_AUTOCOMPLETE,
            children: (0, i.jsx)(s.dOG, {
              checked: t,
              description: b.intl.string(b.t.hrSIhN),
              onChange: e => {
                g.default.track(A.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                  checked: e,
                  location: {
                    section: A.JJy.SETTINGS_TEXT_AND_IMAGES
                  }
                }), x.eK.updateSetting(e)
              },
              label: b.intl.string(b.t["CtYr+U"])
            })
          })
        })]
      }), (0, i.jsxs)(h.x, {
        setting: m.H.CHAT_TEXT_BOX,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsxs)(s.nVY, {
          label: b.intl.string(b.t.afR0pI),
          children: [(0, i.jsx)(h.x, {
            setting: m.H.CHAT_TEXT_BOX_PREVIEW,
            children: (0, i.jsx)(s.dOG, {
              checked: n,
              onChange: e => {
                g.default.track(A.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                  enabled: e,
                  location: {
                    section: A.JJy.SETTINGS_TEXT_AND_IMAGES
                  }
                }), x.SI.updateSetting(e)
              },
              label: b.intl.string(b.t.AqGrEI)
            })
          }), (0, i.jsx)(h.x, {
            setting: m.H.CHAT_MENTION_SUGGESTIONS,
            children: (0, i.jsx)(s.dOG, {
              checked: T,
              description: b.intl.string(b.t.AaXigo),
              onChange: e => {
                x.ng.updateSetting(e)
              },
              label: b.intl.string(b.t.uXQ2xT)
            })
          })]
        })]
      }), (0, i.jsxs)(h.x, {
        setting: m.H.CHAT_THREADS,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsx)(s.nVY, {
          label: b.intl.string(b.t.B2panI),
          children: (0, i.jsx)(h.x, {
            setting: m.H.CHAT_THREADS_SPLIT_VIEW,
            children: (0, i.jsx)(s.dOG, {
              checked: O,
              onChange: x.SY.updateSetting,
              label: b.intl.string(b.t.AInv5m)
            })
          })
        })]
      }), (0, i.jsxs)(h.x, {
        setting: m.H.MESSAGE_SEARCH,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsx)(h.x, {
          setting: m.H.MESSAGE_SEARCH_ALL_DMS,
          children: (0, i.jsx)(s.z6M, {
            label: b.intl.string(b.t["NxjN+q"]),
            options: [{
              name: b.intl.string(b.t["t+fGsk"]),
              value: 0
            }, {
              name: b.intl.string(b.t.MwlEGN),
              value: 1
            }],
            onChange: P,
            value: +!!_
          })
        })]
      }), (0, i.jsxs)(h.x, {
        setting: m.H.CHAT_SPOILERS,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsx)(s.z6M, {
          label: b.intl.string(b.t.QgwmVz),
          description: b.intl.string(b.t.TYnRkS),
          options: [{
            name: b.intl.string(b.t["KFH/me"]),
            value: A.P6Q.ON_CLICK
          }, {
            name: b.intl.string(b.t.K5VTBE),
            value: A.P6Q.IF_MODERATOR
          }, {
            name: b.intl.string(b.t.Pe1RbL),
            value: A.P6Q.ALWAYS
          }],
          onChange: e => x.gs.updateSetting(e),
          value: j
        })]
      }), (0, i.jsxs)(h.x, {
        setting: m.H.CHAT_CHANNEL_LIST_PREVIEWS,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsx)(s.z6M, {
          label: b.intl.string(b.t.OAOUoQ),
          options: [{
            name: b.intl.string(b.t["8K53DF"]),
            value: o.P.ALL
          }, {
            name: b.intl.string(b.t.Gw11zg),
            value: o.P.UNREADS
          }, {
            name: b.intl.string(b.t.R2Ok7F),
            value: o.P.NONE
          }],
          onChange: e => x.wT.updateSetting(e),
          value: N
        })]
      })]
    })
  })
}