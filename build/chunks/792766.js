/** Chunk was on 11814 (b9188d9bdd9a4469.js) **/
n.d(t, {
  Z: () => b,
  y: () => _
}), n(266796);
var r = n(200651),
  i = n(192379),
  a = n(120356),
  o = n.n(a),
  l = n(481060),
  s = n(528144),
  c = n(118012),
  d = n(686546),
  u = n(565138),
  p = n(601964),
  m = n(598077),
  f = n(388032),
  h = n(316184);
let g = e => {
    var t;
    let {
      speaker: n,
      guildId: i,
      isEmbed: a
    } = e, o = new m.Z(n.user);
    return (0, r.jsxs)("div", {
      className: h.speaker,
      children: [(0, r.jsx)(l.qEK, {
        src: o.getAvatarURL(i, a ? 16 : 24),
        size: a ? l.EFr.SIZE_16 : l.EFr.SIZE_24,
        "aria-label": "".concat(n.nick, "-avatar"),
        className: a ? null : h.avatar
      }), (0, r.jsx)(c.Z, {
        size: a ? c.Z.Sizes.SIZE_12 : c.Z.Sizes.SIZE_14,
        color: c.Z.Colors.HEADER_SECONDARY,
        className: h.username,
        children: null !== (t = n.nick) && void 0 !== t ? t : o.username
      })]
    })
  },
  _ = e => {
    let {
      guild: t,
      onlineCount: n
    } = e;
    if (null == t) return null;
    let i = new p.ZP(t),
      {
        name: a,
        description: o
      } = i;
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.Z, {
        muted: !0,
        uppercase: !0,
        className: h.alignStart,
        children: f.NW.string(f.t.Eabu19)
      }), (0, r.jsxs)("div", {
        className: h.guild,
        children: [(0, r.jsx)(d.ZP, {
          mask: d.ZP.Masks.SQUIRCLE,
          width: 40,
          height: 40,
          children: (0, r.jsx)(u.Z, {
            guild: i,
            size: u.Z.Sizes.MEDIUM,
            active: !0
          })
        }), (0, r.jsxs)("div", {
          className: h.guildInfo,
          children: [(0, r.jsx)(l.X6q, {
            variant: "heading-sm/semibold",
            children: a
          }), (0, r.jsxs)("div", {
            className: h.speaker,
            children: [(0, r.jsx)("div", {
              className: h.dot
            }), null != n && n > 0 ? (0, r.jsx)(l.Text, {
              variant: "text-sm/normal",
              children: f.NW.format(f.t["LC+S+v"], {
                membersOnline: n
              })
            }) : null]
          })]
        })]
      }), null != o && "" !== o && (0, r.jsx)(l.Text, {
        color: "header-secondary",
        className: h.alignStart,
        variant: "text-sm/normal",
        children: o
      })]
    })
  },
  b = e => {
    var t;
    let {
      stageInstance: n,
      guild: a,
      isCard: m = !1,
      isEmbed: _ = !1,
      onClick: b
    } = e, v = i.useMemo(() => null == a ? null : a instanceof p.ZP ? a : new p.ZP(a), [a]);
    if (null == n || null == v) return null;
    let {
      topic: y,
      speaker_count: x,
      participant_count: O
    } = n, E = null !== (t = n.members) && void 0 !== t ? t : [], j = _ ? E.slice(0, 3) : E, N = x - j.length;
    return _ && (N += E.length - j.length), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: h.flex,
        children: [(0, r.jsxs)("div", {
          className: h.flex,
          children: [(0, r.jsx)(l.ewx, {
            size: "custom",
            color: "currentColor",
            height: 24,
            width: 24,
            className: h.live
          }), (0, r.jsx)(l.X6q, {
            variant: "eyebrow",
            className: o()(h.__invalid_label, h.live),
            children: f.NW.string(f.t["X2K3//"])
          })]
        }), (0, r.jsxs)("div", {
          className: h.background,
          children: [(0, r.jsx)(l.VWR, {
            size: "custom",
            color: "currentColor",
            height: 16,
            width: 16,
            className: h.listeners
          }), (0, r.jsx)(l.X6q, {
            className: o()(h.__invalid_label, h.listeners),
            variant: "heading-sm/semibold",
            children: O
          })]
        })]
      }), _ && (0, r.jsxs)("div", {
        className: o()(h.guild, {
          [h.embed]: _
        }),
        children: [(0, r.jsx)(d.ZP, {
          mask: d.ZP.Masks.SQUIRCLE,
          width: 20,
          height: 20,
          children: (0, r.jsx)(u.Z, {
            guild: v,
            size: u.Z.Sizes.MINI,
            active: !0
          })
        }), (0, r.jsx)(l.Text, {
          color: "header-secondary",
          className: h.__invalid_label,
          variant: "text-sm/normal",
          children: v.name
        })]
      }), (0, r.jsx)(s.Z, {
        size: m || _ ? s.Z.Sizes.SIZE_16 : s.Z.Sizes.SIZE_20,
        className: o()(h.header, {
          [h.embed]: _
        }),
        children: y
      }), (0, r.jsxs)("div", {
        className: o()(h.members, {
          [h.embed]: _
        }),
        children: [j.length > 0 && (0, r.jsxs)("div", {
          className: h.speakers,
          children: [j.map(e => (0, r.jsx)(g, {
            speaker: e,
            guildId: v.id,
            isEmbed: _
          }, e.user.id)), N > 0 ? (0, r.jsxs)("div", {
            className: h.speaker,
            children: [(0, r.jsx)("div", {
              className: o()(h.icon, {
                [h.embed]: _
              }),
              children: (0, r.jsx)(l.S6n, {
                size: "custom",
                color: "currentColor",
                height: _ ? 12 : 14,
                className: h.listeners
              })
            }), (0, r.jsxs)(c.Z, {
              size: _ ? c.Z.Sizes.SIZE_12 : c.Z.Sizes.SIZE_14,
              color: c.Z.Colors.HEADER_SECONDARY,
              children: ["+", f.NW.format(f.t.L1pCBQ, {
                count: N
              })]
            })]
          }) : null]
        }), _ && (0, r.jsx)(l.zxk, {
          color: l.zxk.Colors.GREEN,
          onClick: b,
          className: h.joinButton,
          children: f.NW.string(f.t.ZYO5OD)
        })]
      })]
    })
  }