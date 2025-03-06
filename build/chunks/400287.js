/** Chunk was on 51724 **/
n.d(t, {
  Z: () => N
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(100527),
  o = n(906732),
  c = n(278754),
  d = n(454585),
  u = n(125900),
  m = n(921801),
  p = n(626135),
  g = n(695346),
  h = n(726985),
  f = n(981631),
  x = n(388032),
  b = n(802138);

function N() {
  let e = (0, c.pR)(),
    t = (0, c.Ju)(),
    n = g.fq.useSetting(),
    i = g.eR.useSetting(),
    N = (0, u.V2)({
      location: "UserSettingsTextImages"
    }),
    _ = g.R$.useSetting(),
    E = g.cC.useSetting(),
    j = g.vF.useSetting(),
    C = g.H1.useSetting(),
    O = g.ev.useSetting(),
    v = g.x4.useSetting(),
    S = g.RS.useSetting(),
    T = g.NA.useSetting(),
    I = g.nc.useSetting(),
    {
      analyticsLocations: y
    } = (0, o.ZP)(l.Z.TEXT_AND_IMAGES);
  return (0, r.jsxs)(a.hjN, {
    tag: a.RB0.H1,
    title: x.NW.string(x.t["/VQax8"]),
    children: [(0, r.jsxs)(m.F, {
      setting: h.s6.CHAT_INLINE_MEDIA,
      children: [(0, r.jsx)(a.vwX, {
        className: b.marginBottom8,
        children: x.NW.string(x.t.U68Dgo)
      }), (0, r.jsx)(m.F, {
        setting: h.s6.CHAT_INLINE_MEDIA_LINKS,
        children: (0, r.jsx)(a.j7V, {
          className: s()(b.marginTop8, b.marginBottom20),
          value: S,
          onChange: g.RS.updateSetting,
          children: x.NW.string(x.t.U47N1t)
        })
      }), (0, r.jsx)(m.F, {
        setting: h.s6.CHAT_INLINE_MEDIA_UPLOADS,
        children: (0, r.jsx)(a.j7V, {
          className: s()(b.marginTop8, b.marginBottom20),
          value: v,
          note: x.NW.formatToPlainString(x.t.qjjvqK, {
            maxSize: 10
          }),
          onChange: g.x4.updateSetting,
          children: x.NW.string(x.t.VP11Nj)
        })
      }), (0, r.jsx)(m.F, {
        setting: h.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
        children: (0, r.jsx)(a.j7V, {
          className: s()(b.marginTop8, b.marginBottom40),
          value: C,
          note: x.NW.string(x.t.T0rbtL),
          onChange: g.H1.updateSetting,
          children: x.NW.string(x.t["w8j+yc"])
        })
      })]
    }), (0, r.jsxs)(m.F, {
      setting: h.s6.CHAT_EMBEDS,
      children: [(0, r.jsx)(a.vwX, {
        className: b.marginBottom8,
        children: x.NW.string(x.t.PWZOn5)
      }), (0, r.jsx)(m.F, {
        setting: h.s6.CHAT_EMBEDS_LINK_PREVIEWS,
        children: (0, r.jsx)(a.j7V, {
          className: s()(b.marginTop8, b.marginBottom40),
          value: T,
          onChange: g.NA.updateSetting,
          children: x.NW.string(x.t.xX0ZTE)
        })
      })]
    }), (0, r.jsxs)(m.F, {
      setting: h.s6.CHAT_EMOJI,
      children: [(0, r.jsx)(a.vwX, {
        className: b.marginBottom8,
        children: x.NW.string(x.t.sMOuub)
      }), (0, r.jsx)(m.F, {
        setting: h.s6.CHAT_EMOJI_REACTIONS,
        children: (0, r.jsx)(a.j7V, {
          className: s()(b.marginTop8, b.marginBottom20),
          value: I,
          onChange: g.nc.updateSetting,
          children: x.NW.string(x.t.Iv24sr)
        })
      }), (0, r.jsx)(m.F, {
        setting: h.s6.CHAT_EMOJI_EMOTICONS,
        children: (0, r.jsx)(a.j7V, {
          className: b.marginBottom40,
          value: O,
          note: d.Z.parse(x.NW.string(x.t["20dvub"])),
          onChange: g.ev.updateSetting,
          children: x.NW.string(x.t["79qal5"])
        })
      })]
    }), (0, r.jsx)(m.F, {
      setting: h.s6.CHAT_STICKERS,
      children: (0, r.jsxs)(a.hjN, {
        className: b.marginBottom8,
        children: [(0, r.jsx)(a.vwX, {
          className: b.marginBottom8,
          children: x.NW.string(x.t["6NtAuL"])
        }), t ? null : (0, r.jsx)(m.F, {
          setting: h.s6.CHAT_STICKERS_SUGGESTIONS,
          children: (0, r.jsx)(a.j7V, {
            className: s()(b.marginTop8, b.marginBottom20),
            value: e,
            note: x.NW.string(x.t.r3uQUV),
            onChange: t => {
              p.default.track(f.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                enabled: !e,
                location: {
                  section: f.jXE.SETTINGS_TEXT_AND_IMAGES
                },
                location_stack: y
              }), (0, c.AW)(!e)
            },
            children: x.NW.string(x.t["479+PT"])
          })
        }), (0, r.jsx)(m.F, {
          setting: h.s6.CHAT_STICKERS_AUTOCOMPLETE,
          children: (0, r.jsx)(a.j7V, {
            className: b.marginBottom40,
            value: n,
            note: x.NW.string(x.t["/eVrj4"]),
            onChange: e => {
              p.default.track(f.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: {
                  section: f.jXE.SETTINGS_TEXT_AND_IMAGES
                },
                location_stack: y
              }), g.fq.updateSetting(e)
            },
            children: x.NW.string(x.t["29xPVV"])
          })
        })]
      })
    }), N && (0, r.jsx)(m.F, {
      setting: h.s6.CHAT_SOUNDMOJI,
      children: (0, r.jsxs)(a.hjN, {
        className: b.marginBottom8,
        children: [(0, r.jsx)(a.vwX, {
          className: b.marginBottom8,
          children: x.NW.string(x.t.EHlAMT)
        }), (0, r.jsx)(m.F, {
          setting: h.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
          children: (0, r.jsx)(a.j7V, {
            className: b.marginBottom40,
            value: i,
            note: x.NW.string(x.t.hrSIhI),
            onChange: e => {
              p.default.track(f.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                checked: e,
                location: {
                  section: f.jXE.SETTINGS_TEXT_AND_IMAGES
                }
              }), g.eR.updateSetting(e)
            },
            children: x.NW.string(x.t["CtYr+f"])
          })
        })]
      })
    }), (0, r.jsx)(m.F, {
      setting: h.s6.CHAT_TEXT_BOX,
      children: (0, r.jsxs)(a.hjN, {
        className: b.marginBottom8,
        children: [(0, r.jsx)(a.vwX, {
          className: b.marginBottom8,
          children: x.NW.string(x.t.afR0pK)
        }), (0, r.jsx)(m.F, {
          setting: h.s6.CHAT_TEXT_BOX_PREVIEW,
          children: (0, r.jsx)(a.j7V, {
            className: s()(b.marginTop8, b.marginBottom40),
            value: _,
            onChange: e => {
              p.default.track(f.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: {
                  section: f.jXE.SETTINGS_TEXT_AND_IMAGES
                }
              }), g.R$.updateSetting(e)
            },
            children: x.NW.string(x.t.AqGrEB)
          })
        })]
      })
    }), (0, r.jsx)(m.F, {
      setting: h.s6.CHAT_THREADS,
      children: (0, r.jsxs)(a.hjN, {
        className: b.marginBottom40,
        children: [(0, r.jsx)(a.vwX, {
          className: b.marginBottom8,
          children: x.NW.string(x.t.B2panJ)
        }), (0, r.jsx)(m.F, {
          setting: h.s6.CHAT_THREADS_SPLIT_VIEW,
          children: (0, r.jsx)(a.j7V, {
            className: b.marginTop8,
            value: j,
            onChange: g.vF.updateSetting,
            children: x.NW.string(x.t.AInv5u)
          })
        })]
      })
    }), (0, r.jsx)(m.F, {
      setting: h.s6.CHAT_SPOILERS,
      children: (0, r.jsxs)(a.xJW, {
        title: x.NW.string(x.t.QgwmV1),
        children: [(0, r.jsx)(a.R94, {
          type: a.R94.Types.DESCRIPTION,
          className: b.marginBottom8,
          children: x.NW.string(x.t.TYnRkZ)
        }), (0, r.jsx)(a.FXm, {
          options: [{
            name: x.NW.string(x.t["KFH/mZ"]),
            value: f.A2N.ON_CLICK
          }, {
            name: x.NW.string(x.t.K5VTBA),
            value: f.A2N.IF_MODERATOR
          }, {
            name: x.NW.string(x.t.Pe1RbG),
            value: f.A2N.ALWAYS
          }],
          onChange: e => g.cC.updateSetting(e.value),
          value: E
        })]
      })
    })]
  })
}