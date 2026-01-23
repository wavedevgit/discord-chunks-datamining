/** Chunk was on web.js **/
/** chunk id: 16986, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
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

function y() {
  let e = _.ML.useSetting(),
    t = _.eK.useSetting(),
    n = _.SI.useSetting(),
    y = _.gs.useSetting(),
    b = _.SY.useSetting(),
    O = _._z.useSetting(),
    v = _.j7.useSetting(),
    A = _.X6.useSetting(),
    I = _.hD.useSetting(),
    S = _.rs.useSetting(),
    T = _.jW.useSetting(),
    C = _.ng.useSetting(),
    N = _.Hu.useSetting(),
    w = _.wT.useSetting(),
    {
      analyticsLocations: R
    } = (0, o.Ay)(s.A.TEXT_AND_IMAGES),
    P = i.useCallback(e => {
      let t = 1 === e;
      t ? u.A.cleanUpPrivateChannelSearchState() : u.A.cleanUpSearchState({
        type: g.I4_.DMS
      }), (0, d._k)({
        prevIsCrossDMSettingEnabled: _.Hu.getSetting(),
        isCrossDMSettingEnabled: t,
        location: d.vy.USER_SETTINGS
      }), _.Hu.updateSetting(t)
    }, []),
    D = () => (0, r.jsx)(a.z6M, {
      label: E.intl.string(E.t.QgwmVz),
      description: E.intl.string(E.t.TYnRkS),
      options: [{
        name: E.intl.string(E.t["KFH/me"]),
        value: g.P6Q.ON_CLICK
      }, {
        name: E.intl.string(E.t.K5VTBE),
        value: g.P6Q.IF_MODERATOR
      }, {
        name: E.intl.string(E.t.Pe1RbL),
        value: g.P6Q.ALWAYS
      }],
      onChange: e => _.gs.updateSetting(e),
      value: y
    });
  return (0, r.jsx)(h.A, {
    title: E.intl.string(E.t["/VQax8"]),
    children: (0, r.jsxs)(a.BJc, {
      direction: "vertical",
      gap: 24,
      children: [(0, r.jsx)(f.x, {
        setting: m.H.CHAT_INLINE_MEDIA,
        children: (0, r.jsxs)(a.nVY, {
          label: E.intl.string(E.t.U68Dgp),
          children: [(0, r.jsx)(f.x, {
            setting: m.H.CHAT_INLINE_MEDIA_LINKS,
            children: (0, r.jsx)(a.dOG, {
              checked: I,
              onChange: _.hD.updateSetting,
              label: E.intl.string(E.t.U47N1p)
            })
          }), (0, r.jsx)(f.x, {
            setting: m.H.CHAT_INLINE_MEDIA_UPLOADS,
            children: (0, r.jsx)(a.dOG, {
              checked: A,
              description: E.intl.formatToPlainString(E.t.qjjvqO, {
                maxSize: 10
              }),
              onChange: _.X6.updateSetting,
              label: E.intl.string(E.t.VP11No)
            })
          }), (0, r.jsx)(f.x, {
            setting: m.H.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
            children: (0, r.jsx)(a.dOG, {
              checked: O,
              description: E.intl.string(E.t.T0rbtM),
              onChange: _._z.updateSetting,
              label: E.intl.string(E.t["w8j+yW"])
            })
          })]
        })
      }), (0, r.jsxs)(f.x, {
        setting: m.H.CHAT_EMBEDS,
        children: [(0, r.jsx)(a.cGx, {}), (0, r.jsx)(a.nVY, {
          label: E.intl.string(E.t.PWZOn4),
          children: (0, r.jsx)(f.x, {
            setting: m.H.CHAT_EMBEDS_LINK_PREVIEWS,
            children: (0, r.jsx)(a.dOG, {
              checked: S,
              onChange: _.rs.updateSetting,
              label: E.intl.string(E.t.xX0ZTA)
            })
          })
        })]
      }), (0, r.jsxs)(f.x, {
        setting: m.H.CHAT_EMOJI,
        children: [(0, r.jsx)(a.cGx, {}), (0, r.jsxs)(a.nVY, {
          label: E.intl.string(E.t.sMOuuS),
          children: [(0, r.jsx)(f.x, {
            setting: m.H.CHAT_EMOJI_REACTIONS,
            children: (0, r.jsx)(a.dOG, {
              checked: T,
              onChange: _.jW.updateSetting,
              label: E.intl.string(E.t.Iv24sm)
            })
          }), (0, r.jsx)(f.x, {
            setting: m.H.CHAT_EMOJI_EMOTICONS,
            children: (0, r.jsx)(a.dOG, {
              checked: v,
              description: c.A.parse(E.intl.string(E.t["20dvuQ"])),
              onChange: _.j7.updateSetting,
              label: E.intl.string(E.t["79qal8"])
            })
          })]
        })]
      }), (0, r.jsxs)(f.x, {
        setting: m.H.CHAT_STICKERS,
        children: [(0, r.jsx)(a.cGx, {}), (0, r.jsx)(a.nVY, {
          label: E.intl.string(E.t["6NtAuJ"]),
          children: (0, r.jsx)(f.x, {
            setting: m.H.CHAT_STICKERS_AUTOCOMPLETE,
            children: (0, r.jsx)(a.dOG, {
              checked: e,
              description: E.intl.string(E.t["/eVrj8"]),
              onChange: e => {
                p.default.track(g.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                  enabled: e,
                  location: {
                    section: g.JJy.SETTINGS_TEXT_AND_IMAGES
                  },
                  location_stack: R
                }), _.ML.updateSetting(e)
              },
              label: E.intl.string(E.t["29xPVZ"])
            })
          })
        })]
      }), (0, r.jsxs)(f.x, {
        setting: m.H.CHAT_SOUNDMOJI,
        children: [(0, r.jsx)(a.cGx, {}), (0, r.jsx)(a.nVY, {
          label: E.intl.string(E.t.EHlAMc),
          children: (0, r.jsx)(f.x, {
            setting: m.H.CHAT_SOUNDMOJI_AUTOCOMPLETE,
            children: (0, r.jsx)(a.dOG, {
              checked: t,
              description: E.intl.string(E.t.hrSIhN),
              onChange: e => {
                p.default.track(g.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                  checked: e,
                  location: {
                    section: g.JJy.SETTINGS_TEXT_AND_IMAGES
                  }
                }), _.eK.updateSetting(e)
              },
              label: E.intl.string(E.t["CtYr+U"])
            })
          })
        })]
      }), (0, r.jsxs)(f.x, {
        setting: m.H.CHAT_TEXT_BOX,
        children: [(0, r.jsx)(a.cGx, {}), (0, r.jsxs)(a.nVY, {
          label: E.intl.string(E.t.afR0pI),
          children: [(0, r.jsx)(f.x, {
            setting: m.H.CHAT_TEXT_BOX_PREVIEW,
            children: (0, r.jsx)(a.dOG, {
              checked: n,
              onChange: e => {
                p.default.track(g.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                  enabled: e,
                  location: {
                    section: g.JJy.SETTINGS_TEXT_AND_IMAGES
                  }
                }), _.SI.updateSetting(e)
              },
              label: E.intl.string(E.t.AqGrEI)
            })
          }), (0, r.jsx)(f.x, {
            setting: m.H.CHAT_MENTION_SUGGESTIONS,
            children: (0, r.jsx)(a.dOG, {
              checked: C,
              description: E.intl.string(E.t.AaXigo),
              onChange: e => {
                _.ng.updateSetting(e)
              },
              label: E.intl.string(E.t.uXQ2xT)
            })
          })]
        })]
      }), (0, r.jsxs)(f.x, {
        setting: m.H.CHAT_THREADS,
        children: [(0, r.jsx)(a.cGx, {}), (0, r.jsx)(a.nVY, {
          label: E.intl.string(E.t.B2panI),
          children: (0, r.jsx)(f.x, {
            setting: m.H.CHAT_THREADS_SPLIT_VIEW,
            children: (0, r.jsx)(a.dOG, {
              checked: b,
              onChange: _.SY.updateSetting,
              label: E.intl.string(E.t.AInv5m)
            })
          })
        })]
      }), (0, r.jsxs)(f.x, {
        setting: m.H.MESSAGE_SEARCH,
        children: [(0, r.jsx)(a.cGx, {}), (0, r.jsx)(f.x, {
          setting: m.H.MESSAGE_SEARCH_ALL_DMS,
          children: (0, r.jsx)(a.z6M, {
            label: E.intl.string(E.t["NxjN+q"]),
            options: [{
              name: E.intl.string(E.t["t+fGsk"]),
              value: 0
            }, {
              name: E.intl.string(E.t.MwlEGN),
              value: 1
            }],
            onChange: P,
            value: +!!N
          })
        })]
      }), (0, r.jsxs)(f.x, {
        setting: m.H.CHAT_SPOILERS,
        children: [(0, r.jsx)(a.cGx, {}), D()]
      }), (0, r.jsxs)(f.x, {
        setting: m.H.CHAT_CHANNEL_LIST_PREVIEWS,
        children: [(0, r.jsx)(a.cGx, {}), (0, r.jsx)(a.z6M, {
          label: E.intl.string(E.t.OAOUoQ),
          options: [{
            name: E.intl.string(E.t["8K53DF"]),
            value: l.P.ALL
          }, {
            name: E.intl.string(E.t.Gw11zg),
            value: l.P.UNREADS
          }, {
            name: E.intl.string(E.t.R2Ok7F),
            value: l.P.NONE
          }],
          onChange: e => _.wT.updateSetting(e),
          value: w
        })]
      })]
    })
  })
}