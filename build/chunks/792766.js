/** Chunk was on 84552 **/
n.d(t, {
  Z: () => b,
  y: () => h
}), n(953529);
var r = n(255367),
  i = n(73800),
  l = n(120356),
  a = n.n(l),
  o = n(481060),
  s = n(528144),
  c = n(118012),
  u = n(686546),
  d = n(565138),
  p = n(601964),
  m = n(598077),
  f = n(388032),
  g = n(515230);
let _ = e => {
    var t;
    let {
      speaker: n,
      guildId: i,
      isEmbed: l
    } = e, a = new m.Z(n.user);
    return (0, r.jsxs)("div", {
      className: g.speaker,
      children: [(0, r.jsx)(o.qEK, {
        src: a.getAvatarURL(i, l ? 16 : 24),
        size: l ? o.EFr.SIZE_16 : o.EFr.SIZE_24,
        "aria-label": "".concat(n.nick, "-avatar"),
        className: l ? null : g.avatar
      }), (0, r.jsx)(c.Z, {
        size: l ? c.Z.Sizes.SIZE_12 : c.Z.Sizes.SIZE_14,
        color: c.Z.Colors.HEADER_SECONDARY,
        className: g.username,
        children: null != (t = n.nick) ? t : a.username
      })]
    })
  },
  h = e => {
    let {
      guild: t,
      onlineCount: n
    } = e;
    if (null == t) return null;
    let i = new p.ZP(t),
      {
        name: l,
        description: a
      } = i;
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.Z, {
        muted: !0,
        uppercase: !0,
        className: g.alignStart,
        children: f.intl.string(f.t.Eabu19)
      }), (0, r.jsxs)("div", {
        className: g.guild,
        children: [(0, r.jsx)(u.ZP, {
          mask: u.ZP.Masks.SQUIRCLE,
          width: 40,
          height: 40,
          children: (0, r.jsx)(d.Z, {
            guild: i,
            size: d.Z.Sizes.MEDIUM,
            active: !0
          })
        }), (0, r.jsxs)("div", {
          className: g.guildInfo,
          children: [(0, r.jsx)(o.X6q, {
            variant: "heading-sm/semibold",
            children: l
          }), (0, r.jsxs)("div", {
            className: g.speaker,
            children: [(0, r.jsx)("div", {
              className: g.dot
            }), null != n && n > 0 ? (0, r.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: f.intl.format(f.t["LC+S+v"], {
                membersOnline: n
              })
            }) : null]
          })]
        })]
      }), null != a && "" !== a && (0, r.jsx)(o.Text, {
        color: "header-secondary",
        className: g.alignStart,
        variant: "text-sm/normal",
        children: a
      })]
    })
  },
  b = e => {
    var t;
    let {
      stageInstance: n,
      guild: l,
      isCard: m = !1,
      isEmbed: h = !1,
      onClick: b
    } = e, E = i.useMemo(() => null == l ? null : l instanceof p.ZP ? l : new p.ZP(l), [l]);
    if (null == n || null == E) return null;
    let {
      topic: y,
      speaker_count: C,
      participant_count: v
    } = n, x = null != (t = n.members) ? t : [], O = h ? x.slice(0, 3) : x, j = C - O.length;
    return h && (j += x.length - O.length), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: g.flex,
        children: [(0, r.jsxs)("div", {
          className: g.flex,
          children: [(0, r.jsx)(o.ewx, {
            size: "custom",
            color: "currentColor",
            height: 24,
            width: 24,
            className: g.live
          }), (0, r.jsx)(o.X6q, {
            variant: "eyebrow",
            className: a()(g.__invalid_label, g.live),
            children: f.intl.string(f.t["X2K3//"])
          })]
        }), (0, r.jsxs)("div", {
          className: g.background,
          children: [(0, r.jsx)(o.VWR, {
            size: "custom",
            color: "currentColor",
            height: 16,
            width: 16,
            className: g.listeners
          }), (0, r.jsx)(o.X6q, {
            className: a()(g.__invalid_label, g.listeners),
            variant: "heading-sm/semibold",
            children: v
          })]
        })]
      }), h && (0, r.jsxs)("div", {
        className: a()(g.guild, {
          [g.embed]: h
        }),
        children: [(0, r.jsx)(u.ZP, {
          mask: u.ZP.Masks.SQUIRCLE,
          width: 20,
          height: 20,
          children: (0, r.jsx)(d.Z, {
            guild: E,
            size: d.Z.Sizes.MINI,
            active: !0
          })
        }), (0, r.jsx)(o.Text, {
          color: "header-secondary",
          className: g.__invalid_label,
          variant: "text-sm/normal",
          children: E.name
        })]
      }), (0, r.jsx)(s.Z, {
        size: m || h ? s.Z.Sizes.SIZE_16 : s.Z.Sizes.SIZE_20,
        className: a()(g.header, {
          [g.embed]: h
        }),
        children: y
      }), (0, r.jsxs)("div", {
        className: a()(g.members, {
          [g.embed]: h
        }),
        children: [O.length > 0 && (0, r.jsxs)("div", {
          className: g.speakers,
          children: [O.map(e => (0, r.jsx)(_, {
            speaker: e,
            guildId: E.id,
            isEmbed: h
          }, e.user.id)), j > 0 ? (0, r.jsxs)("div", {
            className: g.speaker,
            children: [(0, r.jsx)("div", {
              className: a()(g.icon, {
                [g.embed]: h
              }),
              children: (0, r.jsx)(o.S6n, {
                size: "custom",
                color: "currentColor",
                height: h ? 12 : 14,
                className: g.listeners
              })
            }), (0, r.jsxs)(c.Z, {
              size: h ? c.Z.Sizes.SIZE_12 : c.Z.Sizes.SIZE_14,
              color: c.Z.Colors.HEADER_SECONDARY,
              children: ["+", f.intl.format(f.t.L1pCBQ, {
                count: j
              })]
            })]
          }) : null]
        }), h && (0, r.jsx)(o.zxk, {
          color: o.zxk.Colors.GREEN,
          onClick: b,
          className: g.joinButton,
          children: f.intl.string(f.t.ZYO5OD)
        })]
      })]
    })
  }