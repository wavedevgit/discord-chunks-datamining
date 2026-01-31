/** Chunk was on 32502 **/
/** chunk id: 16986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b() {
  let e = g.ML.useSetting(),
    t = g.eK.useSetting(),
    n = g.SI.useSetting(),
    b = g.gs.useSetting(),
    j = g.SY.useSetting(),
    O = g._z.useSetting(),
    E = g.j7.useSetting(),
    S = g.X6.useSetting(),
    f = g.hD.useSetting(),
    C = g.rs.useSetting(),
    v = g.jW.useSetting(),
    y = g.ng.useSetting(),
    T = g.Hu.useSetting(),
    {
      analyticsLocations: _
    } = (0, a.Ay)(r.A.TEXT_AND_IMAGES),
    N = l.useCallback(e => {
      let t = 1 === e;
      t ? c.A.cleanUpPrivateChannelSearchState() : c.A.cleanUpSearchState({
        type: m.I4_.DMS
      }), (0, d._k)({
        prevIsCrossDMSettingEnabled: g.Hu.getSetting(),
        isCrossDMSettingEnabled: t,
        location: d.vy.USER_SETTINGS
      }), g.Hu.updateSetting(t)
    }, []);
  return (0, i.jsx)(x.A, {
    title: A.intl.string(A.t["/VQax8"]),
    children: (0, i.jsxs)(s.BJc, {
      direction: "vertical",
      gap: 24,
      children: [(0, i.jsx)(u.x, {
        setting: p.H.CHAT_INLINE_MEDIA,
        children: (0, i.jsxs)(s.nVY, {
          label: A.intl.string(A.t.U68Dgp),
          children: [(0, i.jsx)(u.x, {
            setting: p.H.CHAT_INLINE_MEDIA_LINKS,
            children: (0, i.jsx)(s.dOG, {
              checked: f,
              onChange: g.hD.updateSetting,
              label: A.intl.string(A.t.U47N1p)
            })
          }), (0, i.jsx)(u.x, {
            setting: p.H.CHAT_INLINE_MEDIA_UPLOADS,
            children: (0, i.jsx)(s.dOG, {
              checked: S,
              description: A.intl.formatToPlainString(A.t.qjjvqO, {
                maxSize: 10
              }),
              onChange: g.X6.updateSetting,
              label: A.intl.string(A.t.VP11No)
            })
          }), (0, i.jsx)(u.x, {
            setting: p.H.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
            children: (0, i.jsx)(s.dOG, {
              checked: O,
              description: A.intl.string(A.t.T0rbtM),
              onChange: g._z.updateSetting,
              label: A.intl.string(A.t["w8j+yW"])
            })
          })]
        })
      }), (0, i.jsxs)(u.x, {
        setting: p.H.CHAT_EMBEDS,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsx)(s.nVY, {
          label: A.intl.string(A.t.PWZOn4),
          children: (0, i.jsx)(u.x, {
            setting: p.H.CHAT_EMBEDS_LINK_PREVIEWS,
            children: (0, i.jsx)(s.dOG, {
              checked: C,
              onChange: g.rs.updateSetting,
              label: A.intl.string(A.t.xX0ZTA)
            })
          })
        })]
      }), (0, i.jsxs)(u.x, {
        setting: p.H.CHAT_EMOJI,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsxs)(s.nVY, {
          label: A.intl.string(A.t.sMOuuS),
          children: [(0, i.jsx)(u.x, {
            setting: p.H.CHAT_EMOJI_REACTIONS,
            children: (0, i.jsx)(s.dOG, {
              checked: v,
              onChange: g.jW.updateSetting,
              label: A.intl.string(A.t.Iv24sm)
            })
          }), (0, i.jsx)(u.x, {
            setting: p.H.CHAT_EMOJI_EMOTICONS,
            children: (0, i.jsx)(s.dOG, {
              checked: E,
              description: o.A.parse(A.intl.string(A.t["20dvuQ"])),
              onChange: g.j7.updateSetting,
              label: A.intl.string(A.t["79qal8"])
            })
          })]
        })]
      }), (0, i.jsxs)(u.x, {
        setting: p.H.CHAT_STICKERS,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsx)(s.nVY, {
          label: A.intl.string(A.t["6NtAuJ"]),
          children: (0, i.jsx)(u.x, {
            setting: p.H.CHAT_STICKERS_AUTOCOMPLETE,
            children: (0, i.jsx)(s.dOG, {
              checked: e,
              description: A.intl.string(A.t["/eVrj8"]),
              onChange: e => {
                h.default.track(m.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                  enabled: e,
                  location: {
                    section: m.JJy.SETTINGS_TEXT_AND_IMAGES
                  },
                  location_stack: _
                }), g.ML.updateSetting(e)
              },
              label: A.intl.string(A.t["29xPVZ"])
            })
          })
        })]
      }), (0, i.jsxs)(u.x, {
        setting: p.H.CHAT_SOUNDMOJI,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsx)(s.nVY, {
          label: A.intl.string(A.t.EHlAMc),
          children: (0, i.jsx)(u.x, {
            setting: p.H.CHAT_SOUNDMOJI_AUTOCOMPLETE,
            children: (0, i.jsx)(s.dOG, {
              checked: t,
              description: A.intl.string(A.t.hrSIhN),
              onChange: e => {
                h.default.track(m.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                  checked: e,
                  location: {
                    section: m.JJy.SETTINGS_TEXT_AND_IMAGES
                  }
                }), g.eK.updateSetting(e)
              },
              label: A.intl.string(A.t["CtYr+U"])
            })
          })
        })]
      }), (0, i.jsxs)(u.x, {
        setting: p.H.CHAT_TEXT_BOX,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsxs)(s.nVY, {
          label: A.intl.string(A.t.afR0pI),
          children: [(0, i.jsx)(u.x, {
            setting: p.H.CHAT_TEXT_BOX_PREVIEW,
            children: (0, i.jsx)(s.dOG, {
              checked: n,
              onChange: e => {
                h.default.track(m.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                  enabled: e,
                  location: {
                    section: m.JJy.SETTINGS_TEXT_AND_IMAGES
                  }
                }), g.SI.updateSetting(e)
              },
              label: A.intl.string(A.t.AqGrEI)
            })
          }), (0, i.jsx)(u.x, {
            setting: p.H.CHAT_MENTION_SUGGESTIONS,
            children: (0, i.jsx)(s.dOG, {
              checked: y,
              description: A.intl.string(A.t.AaXigo),
              onChange: e => {
                g.ng.updateSetting(e)
              },
              label: A.intl.string(A.t.uXQ2xT)
            })
          })]
        })]
      }), (0, i.jsxs)(u.x, {
        setting: p.H.CHAT_THREADS,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsx)(s.nVY, {
          label: A.intl.string(A.t.B2panI),
          children: (0, i.jsx)(u.x, {
            setting: p.H.CHAT_THREADS_SPLIT_VIEW,
            children: (0, i.jsx)(s.dOG, {
              checked: j,
              onChange: g.SY.updateSetting,
              label: A.intl.string(A.t.AInv5m)
            })
          })
        })]
      }), (0, i.jsxs)(u.x, {
        setting: p.H.MESSAGE_SEARCH,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsx)(u.x, {
          setting: p.H.MESSAGE_SEARCH_ALL_DMS,
          children: (0, i.jsx)(s.z6M, {
            label: A.intl.string(A.t["NxjN+q"]),
            options: [{
              name: A.intl.string(A.t["t+fGsk"]),
              value: 0
            }, {
              name: A.intl.string(A.t.MwlEGN),
              value: 1
            }],
            onChange: N,
            value: +!!T
          })
        })]
      }), (0, i.jsxs)(u.x, {
        setting: p.H.CHAT_SPOILERS,
        children: [(0, i.jsx)(s.cGx, {}), (0, i.jsx)(s.z6M, {
          label: A.intl.string(A.t.QgwmVz),
          description: A.intl.string(A.t.TYnRkS),
          options: [{
            name: A.intl.string(A.t["KFH/me"]),
            value: m.P6Q.ON_CLICK
          }, {
            name: A.intl.string(A.t.K5VTBE),
            value: m.P6Q.IF_MODERATOR
          }, {
            name: A.intl.string(A.t.Pe1RbL),
            value: m.P6Q.ALWAYS
          }],
          onChange: e => g.gs.updateSetting(e),
          value: b
        })]
      })]
    })
  })
}