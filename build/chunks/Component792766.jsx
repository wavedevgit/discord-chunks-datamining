/** Chunk was on 91173 **/
/** chunk id: 792766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h,
  y: () => g
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk598077 = require("./598077.js"),
  Chunk411198 = require("./411198.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk407749 = require("./407749.js");
let _ = e => {
    var t;
    let {
      speaker: n,
      guildId: i,
      isEmbed: l
    } = e, a = new d.Z(n.user);
    return (0, r.jsxs)("div", {
      className: f.speaker,
      children: [(0, r.jsx)(s.qEK, {
        src: a.getAvatarURL(i, l ? 16 : 24),
        size: l ? s.EFr.SIZE_16 : s.EFr.SIZE_24,
        "aria-label": "".concat(n.nick, "-avatar"),
        className: l ? null : f.avatar
      }), (0, r.jsx)(s.Text, {
        variant: l ? "text-xs/normal" : "text-sm/normal",
        color: "text-secondary",
        className: f.username,
        children: null != (t = n.nick) ? t : a.username
      })]
    })
  },
  g = e => {
    let {
      guild: t,
      onlineCount: n
    } = e;
    if (null == t) return null;
    let i = p.Qs(t),
      {
        name: l,
        description: a
      } = i;
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-md/normal",
        color: "header-muted",
        className: f.alignStart,
        children: m.intl.string(m.t.Eabu19)
      }), (0, r.jsxs)("div", {
        className: f.guild,
        children: [(0, r.jsx)(c.ZP, {
          mask: c.ZP.Masks.SQUIRCLE,
          width: 40,
          height: 40,
          children: (0, r.jsx)(u.Z, {
            guild: i,
            size: u.Z.Sizes.MEDIUM,
            active: true
          })
        }), (0, r.jsxs)("div", {
          className: f.guildInfo,
          children: [(0, r.jsx)(s.X6q, {
            variant: "heading-sm/semibold",
            children: l
          }), (0, r.jsxs)("div", {
            className: f.speaker,
            children: [(0, r.jsx)("div", {
              className: f.dot
            }), null != n && n > 0 ? (0, r.jsx)(s.Text, {
              variant: "text-sm/normal",
              children: m.intl.format(m.t["LC+S+v"], {
                membersOnline: n
              })
            }) : null]
          })]
        })]
      }), null != a && "" !== a && (0, r.jsx)(s.Text, {
        color: "header-secondary",
        className: f.alignStart,
        variant: "text-sm/normal",
        children: a
      })]
    })
  },
  h = e => {
    var t;
    let {
      stageInstance: n,
      guild: l,
      isCard: d = false,
      isEmbed: g = false,
      onClick: h
    } = e, b = i.useMemo(() => null == l ? null : p.lM(l) ? l : p.Qs(l), [l]);
    if (null == n || null == b) return null;
    let {
      topic: E,
      speaker_count: C,
      participant_count: v
    } = n, O = null != (t = n.members) ? t : [], y = g ? O.slice(0, 3) : O, x = C - y.length;
    return g && (x += O.length - y.length), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: f.flex,
        children: [(0, r.jsxs)("div", {
          className: f.flex,
          children: [(0, r.jsx)(s.ewx, {
            size: "custom",
            color: "currentColor",
            height: 24,
            width: 24,
            className: f.live
          }), (0, r.jsx)(s.X6q, {
            variant: "eyebrow",
            className: a()(f.__invalid_label, f.live),
            children: m.intl.string(m.t["X2K3//"])
          })]
        }), (0, r.jsxs)("div", {
          className: f.background,
          children: [(0, r.jsx)(s.VWR, {
            size: "custom",
            color: "currentColor",
            height: 16,
            width: 16,
            className: f.listeners
          }), (0, r.jsx)(s.X6q, {
            className: a()(f.__invalid_label, f.listeners),
            variant: "heading-sm/semibold",
            children: v
          })]
        })]
      }), g && (0, r.jsxs)("div", {
        className: a()(f.guild, {
          [f.embed]: g
        }),
        children: [(0, r.jsx)(c.ZP, {
          mask: c.ZP.Masks.SQUIRCLE,
          width: 20,
          height: 20,
          children: (0, r.jsx)(u.Z, {
            guild: b,
            size: u.Z.Sizes.MINI,
            active: true
          })
        }), (0, r.jsx)(s.Text, {
          color: "header-secondary",
          className: f.__invalid_label,
          variant: "text-sm/normal",
          children: b.name
        })]
      }), (0, r.jsx)(s.X6q, {
        variant: d || g ? "heading-md/semibold" : "heading-lg/semibold",
        className: a()(f.header, {
          [f.embed]: g
        }),
        children: E
      }), (0, r.jsxs)("div", {
        className: a()(f.members, {
          [f.embed]: g
        }),
        children: [y.length > 0 && (0, r.jsxs)("div", {
          className: f.speakers,
          children: [y.map(e => (0, r.jsx)(_, {
            speaker: e,
            guildId: b.id,
            isEmbed: g
          }, e.user.id)), x > 0 ? (0, r.jsxs)("div", {
            className: f.speaker,
            children: [(0, r.jsx)("div", {
              className: a()(f.icon, {
                [f.embed]: g
              }),
              children: (0, r.jsx)(s.S6n, {
                size: "custom",
                color: "currentColor",
                height: g ? 12 : 14,
                className: f.listeners
              })
            }), (0, r.jsxs)(s.Text, {
              variant: g ? "text-xs/normal" : "text-sm/normal",
              color: "text-secondary",
              children: ["+", m.intl.format(m.t.L1pCBQ, {
                count: x
              })]
            })]
          }) : null]
        }), g && (0, r.jsx)(o.zx, {
          color: o.zx.Colors.GREEN,
          onClick: h,
          className: f.joinButton,
          children: m.intl.string(m.t.ZYO5OD)
        })]
      })]
    })
  }