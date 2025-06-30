/** Chunk was on 55867 **/
n.d(t, {
  default: () => L
}), n(539854), n(953529), n(388685), n(457542);
var a = n(255367),
  i = n(73800),
  r = n(990547),
  o = n(442837),
  l = n(283693),
  c = n(481060),
  d = n(218613),
  s = n(911969),
  u = n(600164),
  _ = n(313201),
  p = n(456269),
  b = n(408987),
  m = n(312146),
  h = n(60222),
  f = n(131704),
  x = n(324067),
  g = n(430824),
  I = n(259580),
  j = n(934415),
  C = n(700785),
  N = n(573261),
  B = n(981631),
  k = n(231338),
  E = n(388032),
  v = n(720848);

function L(e) {
  var t, n;
  let {
    guildId: L,
    transitionState: w,
    onSubmit: y,
    onClose: S
  } = e, D = (0, _.Dt)(), W = (0, _.Dt)(), T = (0, _.Dt)(), P = (0, _.Dt)(), [R, M] = i.useState(B.Sc2), [z, G] = i.useState(B.d4z.GUILD_TEXT), [H, O] = i.useState(""), [Z, A] = i.useState(!1), U = (0, o.e7)([g.Z], () => g.Z.getGuild(L), [L]), V = (0, h.m)(L), F = (0, p.W3)(L), X = (0, m.Ui)(U), q = i.useMemo(() => (function(e) {
    let {
      canCreateStageChannel: t,
      canCreateForumChannel: n,
      canCreateMediaChannel: i
    } = e, r = [{
      icon: c.VL1,
      label: E.intl.string(E.t.pnuRXF),
      value: B.d4z.GUILD_TEXT,
      description: E.intl.string(E.t.Hf5Lb2)
    }, {
      icon: c.gj8,
      label: E.intl.string(E.t.Sx55Oj),
      value: B.d4z.GUILD_VOICE,
      description: E.intl.string(E.t.pqfkoK)
    }];
    return t && r.push({
      icon: c.ewx,
      label: E.intl.string(E.t.pNWst7),
      value: B.d4z.GUILD_STAGE_VOICE,
      description: E.intl.string(E.t.VPAwgo)
    }), n && (r.push({
      icon: c.Mmi,
      label: E.intl.string(E.t.eAVIDw),
      value: B.d4z.GUILD_FORUM,
      description: E.intl.string(E.t.iZ5pgo)
    }), i && r.push({
      icon: c.XBm,
      label: E.intl.string(E.t["6x6fVl"]),
      value: B.d4z.GUILD_MEDIA,
      description: E.intl.string(E.t.JyCrwc),
      isBeta: !0
    })), r.map(e => {
      let {
        icon: t,
        label: n,
        value: i,
        description: r,
        isBeta: o
      } = e;
      return {
        name: (0, a.jsxs)("div", {
          className: v.channelOptionWrapper,
          children: [(0, a.jsx)(t, {
            className: v.icon
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsxs)(c.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: [n, (0, a.jsx)(d.p, {
                isBeta: o
              })]
            }), (0, a.jsx)(c.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              children: r
            })]
          })]
        }),
        value: i,
        channelIcon: t
      }
    })
  })({
    canCreateStageChannel: V,
    canCreateForumChannel: F,
    canCreateMediaChannel: X
  }), [V, F, X]), J = (0, o.e7)([x.Z], () => x.Z.getCategories(L)._categories, [L]), Y = i.useMemo(() => J.map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: t.name
    }
  }), [J]), K = null != (n = null == (t = q.find(e => e.value === z)) ? void 0 : t.channelIcon) ? n : k.Vq, $ = "" !== H;
  return (0, a.jsx)("form", {
    onSubmit: function(e) {
      if (e.preventDefault(), !$) return;
      A(!0);
      let t = {
        type: z,
        name: H,
        parent_id: "null" !== R ? R : void 0,
        permission_overwrites: [{
          id: L,
          type: s.BN.ROLE,
          allow: C.Hn,
          deny: B.Plq.VIEW_CHANNEL
        }]
      };
      N.Z.post({
        url: B.ANM.GUILD_CHANNELS(L),
        body: t,
        oldFormErrors: !0,
        trackedActionData: {
          event: r.NetworkActionNames.CHANNEL_CREATE,
          properties: e => {
            var t, n;
            return (0, l.iG)({
              is_private: !0,
              channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
              channel_type: null == e || null == (n = e.body) ? void 0 : n.type
            })
          }
        },
        rejectWithError: !0
      }).then(e => {
        b.Z.checkGuildTemplateDirty(L), y(e.body.id), S()
      }, e => {}).finally(() => {
        A(!1)
      })
    },
    children: (0, a.jsxs)(c.Y0X, {
      transitionState: w,
      "aria-labelledby": D,
      parentComponent: "ChannelSelectorCreateChannelModal",
      children: [(0, a.jsxs)(c.xBx, {
        children: [(0, a.jsx)(c.X6q, {
          id: D,
          variant: "heading-md/semibold",
          children: E.intl.string(E.t["fUYU+v"])
        }), (0, a.jsx)(c.olH, {
          className: v.closeButton,
          onClick: S
        })]
      }), (0, a.jsxs)(c.hzk, {
        className: v.modalContent,
        children: [(0, a.jsx)(c.xJW, {
          title: E.intl.string(E.t.vHCZws),
          titleId: W,
          children: (0, a.jsx)(c.q4e, {
            placeholder: E.intl.string(E.t["g/Rr2d"]),
            value: R,
            options: Y,
            onChange: e => M(e),
            "aria-labelledby": W
          })
        }), (0, a.jsx)("div", {
          className: v.spacer
        }), (0, a.jsx)(c.xJW, {
          title: E.intl.string(E.t["7ZcXGx"]),
          titleId: T,
          children: (0, a.jsx)(c.FXm, {
            options: q,
            value: z,
            onChange: e => {
              let {
                value: t
              } = e;
              return G(t)
            },
            "aria-labelledby": T
          })
        }), (0, a.jsx)("div", {
          className: v.spacer
        }), (0, a.jsx)(c.xJW, {
          title: E.intl.string(E.t.PVbHDg),
          titleId: P,
          children: (0, a.jsx)(c.oil, {
            value: H,
            onChange: function(e) {
              (0, f.zi)(z) && (e = (0, j.Nj)(e)), O(e)
            },
            maxLength: B.HN8,
            placeholder: E.intl.string(E.t["bw/b8P"]),
            className: v.inputWrapper,
            inputClassName: v.inputInner,
            prefixElement: (0, a.jsx)(K, {
              className: v.inputPrefix,
              color: "currentColor",
              "aria-hidden": !0
            }),
            "aria-labelledby": P,
            autoFocus: !0
          })
        })]
      }), (0, a.jsxs)(c.mzw, {
        justify: u.Z.Justify.BETWEEN,
        children: [(0, a.jsx)(c.zxk, {
          type: "submit",
          submitting: Z,
          disabled: !$,
          children: E.intl.string(E.t.R3BPHx)
        }), (0, a.jsxs)(c.zxk, {
          look: c.zxk.Looks.LINK,
          color: c.zxk.Colors.PRIMARY,
          className: v.backButton,
          innerClassName: v.backButtonInner,
          onClick: S,
          children: [(0, a.jsx)(I.Z, {
            direction: I.Z.Directions.LEFT
          }), E.intl.string(E.t["13/7kZ"])]
        })]
      })]
    })
  })
}