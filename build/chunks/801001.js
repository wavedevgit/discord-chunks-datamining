/** Chunk was on 1862 **/
n.d(t, {
  default: () => y
}), n(47120), n(266796), n(230036);
var r = n(200651),
  i = n(192379),
  o = n(392711),
  l = n.n(o),
  s = n(442837),
  a = n(481060),
  c = n(706371),
  d = n(563115),
  u = n(313201),
  m = n(661824),
  h = n(984933),
  j = n(430824),
  v = n(823379),
  x = n(402148),
  p = n(570961),
  g = n(208665),
  N = n(460117),
  f = n(290511),
  b = n(388032),
  I = n(741798);

function y(e) {
  let {
    transitionState: t,
    onClose: n,
    onSave: o,
    onDelete: j,
    option: v,
    guild: x,
    prompt: y,
    index: k
  } = e, C = (0, u.Dt)(), P = (0, s.e7)([h.ZP], () => h.ZP.getDefaultChannel(x.id)), [S, _] = i.useState(() => {
    var e;
    return null !== (e = null == v ? void 0 : v.emoji) && void 0 !== e ? e : null
  }), [z, w] = i.useState(() => {
    var e;
    return null !== (e = null == v ? void 0 : v.title) && void 0 !== e ? e : ""
  }), [W, B] = i.useState(() => {
    var e;
    return null !== (e = null == v ? void 0 : v.description) && void 0 !== e ? e : ""
  }), [E, T] = i.useState(() => {
    var e;
    return new Set(null !== (e = null == v ? void 0 : v.channelIds) && void 0 !== e ? e : [])
  }), [R, Z] = i.useState(() => {
    var e;
    return new Set(null !== (e = null == v ? void 0 : v.roleIds) && void 0 !== e ? e : [])
  }), [H, L] = i.useState({}), D = i.useRef(null);
  return i.useLayoutEffect(() => {
    var e;
    return null === (e = D.current) || void 0 === e ? void 0 : e.focus()
  }, []), (0, r.jsxs)(a.Y0X, {
    transitionState: t,
    "aria-labelledby": C,
    children: [(0, r.jsxs)("div", {
      className: I.container,
      children: [(0, r.jsx)(a.olH, {
        className: I.closeButton,
        onClick: n
      }), (0, r.jsx)(a.Text, {
        className: I.questionNumber,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: b.NW.format(b.t.yjS3zs, {
          index: k + 1
        })
      }), (0, r.jsx)(a.X6q, {
        id: C,
        className: I.header,
        variant: "heading-lg/semibold",
        children: null != y.title && y.title.length > 0 ? y.title : b.NW.string(b.t.vY91Cw)
      }), (0, r.jsx)(a.X6q, {
        className: I.nameHeader,
        variant: "heading-md/semibold",
        children: b.NW.string(b.t.VWdcBg)
      }), (0, r.jsx)(a.oil, {
        inputRef: D,
        placeholder: b.NW.string(b.t.EHe6gY),
        value: z,
        onChange: e => w(e),
        maxLength: f.NE,
        autoFocus: !0
      }), (0, r.jsx)(a.pdY, {
        error: H.title
      }), (0, r.jsx)(a.oil, {
        className: I.descriptionInput,
        placeholder: b.NW.string(b.t.mIjgJC),
        value: W,
        onChange: e => B(e),
        maxLength: f.NO
      }), (0, r.jsx)(m.Z, {
        className: I.divider
      }), (0, r.jsx)(a.X6q, {
        className: I.rolesHeader,
        variant: "heading-md/semibold",
        children: b.NW.string(b.t.TtIbPD)
      }), (0, r.jsx)(c.Z, {
        guildId: x.id,
        selectedChannelIds: E,
        placeholder: b.NW.string(b.t.vephiI),
        onChange: T,
        helperText: b.NW.string(b.t.SoT6wc),
        className: I.searchInput
      }), (0, r.jsx)(d.Z, {
        guildId: x.id,
        selectedRoleIds: R,
        disableEveryoneRole: !0,
        placeholder: b.NW.string(b.t.aFO1Iy),
        onChange: Z,
        helperText: b.NW.string(b.t.Mbvpv7),
        className: I.searchInput,
        selectableRoleFilter: e => !e.managed
      }), null == H.roles ? null : (0, r.jsx)(a.pdY, {
        error: H.roles
      }), (0, r.jsx)(O, {
        guild: x,
        roleIds: R
      }), (0, r.jsx)(m.Z, {
        className: I.divider
      }), (0, r.jsxs)("div", {
        className: I.emojiQuestionContainer,
        children: [(0, r.jsxs)("div", {
          className: I.emojiQuestionText,
          children: [(0, r.jsx)(a.X6q, {
            variant: "heading-md/semibold",
            children: b.NW.string(b.t["4ahTBg"])
          }), (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: b.NW.string(b.t.Iv9RGh)
          })]
        }), (0, r.jsx)(N.Z, {
          emoji: S,
          setEmoji: _,
          channel: P
        })]
      })]
    }), (0, r.jsx)(a.mzw, {
      children: (0, r.jsxs)("div", {
        className: I.footerButtons,
        children: [(0, r.jsx)("div", {
          className: I.removeButton,
          children: (0, r.jsx)(a.zxk, {
            size: a.zxk.Sizes.SMALL,
            look: a.zxk.Looks.LINK,
            color: a.zxk.Colors.RED,
            onClick: () => {
              j(), n()
            },
            children: b.NW.string(b.t.N86XcH)
          })
        }), (0, r.jsxs)("div", {
          className: I.rightButtons,
          children: [(0, r.jsx)(a.zxk, {
            onClick: n,
            size: a.zxk.Sizes.SMALL,
            look: a.zxk.Looks.LINK,
            color: a.zxk.Colors.PRIMARY,
            children: b.NW.string(b.t["ETE/oK"])
          }), (0, r.jsx)(a.zxk, {
            onClick: () => {
              var e;
              let t = {
                  id: null !== (e = null == v ? void 0 : v.id) && void 0 !== e ? e : "".concat(Date.now()),
                  title: z,
                  description: W,
                  channelIds: Array.from(E).sort(),
                  roleIds: Array.from(R).sort(),
                  emoji: null == S ? void 0 : S
                },
                r = function(e, t, n, r) {
                  let i = {};
                  r.title.length <= 0 && (i.title = b.NW.string(b.t.p3PKzM));
                  let o = (0, p.en)(e, t, n, r);
                  return null != o && (i.roles = o), i
                }(x, g.Z.editedOnboardingPrompts, y, t);
              L(r), l().isEmpty(r) && (o(t), n())
            },
            children: b.NW.string(b.t.R3BPHx)
          })]
        })]
      })
    })]
  })
}

function O(e) {
  let {
    guild: t,
    roleIds: n
  } = e, i = (0, s.e7)([j.Z], () => j.Z.getRoles(t.id)), o = Array.from(n).map(e => i[e]).filter(v.lm).find(x.F);
  return null == o ? null : (0, r.jsx)("div", {
    className: I.notice,
    children: (0, r.jsxs)("div", {
      className: I.noticeMessage,
      children: [(0, r.jsx)(a.P4T, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: I.noticeIcon
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: b.NW.format(b.t["5zPJER"], {
          permissions: (0, x.i)(t, o).join(", ")
        })
      })]
    })
  })
}