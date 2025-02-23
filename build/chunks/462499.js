/** Chunk was on 84725 (812f4083ee156111.js) **/
n.d(l, {
  default: () => I
}), n(47120), n(266796);
var a = n(200651),
  r = n(192379),
  s = n(658722),
  o = n.n(s),
  i = n(399606),
  t = n(481060),
  c = n(471445),
  d = n(313201),
  u = n(734893),
  h = n(208567),
  m = n(592125),
  x = n(984933),
  p = n(430824),
  v = n(768581),
  g = n(969632),
  j = n(580357),
  k = n(388032),
  N = n(361449);

function C(e, l, n, a) {
  return {
    channelId: e.value,
    title: l,
    description: n,
    emoji: null,
    icon: null != a ? a : null
  }
}

function I(e) {
  var l, n;
  let {
    transitionState: s,
    onClose: I,
    resourceChannel: _,
    guildId: f,
    onSave: b,
    onDelete: W,
    onIconUpload: z
  } = e, B = (0, d.Dt)(), [L, Z] = r.useState(null !== (l = null == _ ? void 0 : _.title) && void 0 !== l ? l : ""), [S, y] = r.useState(null !== (n = null == _ ? void 0 : _.description) && void 0 !== n ? n : ""), [G, R] = r.useState(function(e) {
    if (null == e) return null;
    let l = m.Z.getChannel(e.channelId);
    return null == l ? null : {
      value: l.id,
      label: l.name
    }
  }(_)), X = (0, i.e7)([g.Z], () => {
    var e;
    return null === (e = g.Z.getResourceChannel(null == _ ? void 0 : _.channelId)) || void 0 === e ? void 0 : e.icon
  }), K = (0, i.Wu)([g.Z], () => {
    var e, l;
    return (null !== (l = null === (e = g.Z.getSettings()) || void 0 === e ? void 0 : e.resourceChannels) && void 0 !== l ? l : []).map(e => e.channelId)
  }), M = L.length < u.n || null == G, P = r.useCallback(() => {
    null == G || L.length <= 0 || (b(C(G, L, S, X)), I())
  }, [b, I, L, G, X, S]), U = r.useCallback(() => {
    null == W || W(), I()
  }, [W, I]), w = r.useCallback(e => {
    R(e)
  }, [R]), H = r.useCallback(e => Promise.resolve(x.ZP.getSelectableChannels(f).filter(l => (0, u.k3)(l.channel) && !K.includes(l.channel.id) && o()(e, l.channel.name)).map(e => ({
    value: e.channel.id,
    label: e.channel.name
  }))), [f, K]), T = r.useCallback(e => {
    if (null == e || null == f) return null;
    let l = m.Z.getChannel(e.value),
      n = p.Z.getGuild(f);
    if (null == l || null == n) return null;
    let r = (0, c.KS)(l, n);
    return null == r ? null : (0, a.jsx)(r, {
      size: "xs",
      color: "currentColor",
      className: N.channelIcon
    })
  }, [f]), q = r.useCallback(e => {
    null != z && null != G && z(C(G, L, S), e)
  }, [G, L, z, S]), E = r.useCallback(() => null == X || null == G ? null : v.ZP.getResourceChannelIconURL({
    channelId: G.value,
    icon: X
  }), [G, X]);
  return (0, a.jsxs)(t.Y0X, {
    transitionState: s,
    "aria-labelledby": B,
    children: [(0, a.jsxs)("div", {
      className: N.containerWithHeader,
      children: [(0, a.jsxs)("div", {
        className: N.splitGroup,
        children: [(0, a.jsx)("div", {
          className: N.header,
          children: (0, a.jsx)(t.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: k.NW.string(k.t.iREYFB)
          })
        }), (0, a.jsx)(t.olH, {
          className: N.closeButton,
          onClick: I
        })]
      }), (0, a.jsxs)("div", {
        className: N.formGroup,
        children: [(0, a.jsxs)(t.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [k.NW.string(k.t.nPa4Ji), (0, a.jsx)(j.Z, {})]
        }), (0, a.jsx)(t.VcW, {
          value: G,
          renderOptionPrefix: T,
          options: H,
          onChange: w
        }), (0, a.jsx)(t.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: k.NW.string(k.t.eNDtJC)
        })]
      }), (0, a.jsx)("div", {
        className: N.separator
      }), (0, a.jsxs)("div", {
        className: N.formGroup,
        children: [(0, a.jsxs)(t.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [k.NW.string(k.t["lFy+aW"]), (0, a.jsx)(j.Z, {})]
        }), (0, a.jsx)(t.oil, {
          value: L,
          onChange: Z,
          placeholder: k.NW.string(k.t.XKUimJ),
          maxLength: u.am
        })]
      }), (0, a.jsx)("div", {
        className: N.separator
      }), (0, a.jsxs)("div", {
        className: N.formGroup,
        children: [(0, a.jsx)(t.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: k.NW.string(k.t.CnkilJ)
        }), (0, a.jsx)(t.Kx8, {
          value: S,
          onChange: y,
          placeholder: k.NW.string(k.t.na0V4O),
          maxLength: u.Vu
        })]
      }), (0, a.jsx)("div", {
        className: N.separator
      }), (0, a.jsxs)("div", {
        className: N.splitGroup,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(t.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: k.NW.string(k.t.CB6dys)
          }), (0, a.jsx)(t.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: k.NW.string(k.t.Kcdk7O)
          })]
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(h.Z, {
            className: N.uploader,
            imageClassName: N.uploadImage,
            image: X,
            makeURL: E,
            icon: (0, a.jsx)(t.rG2, {
              size: "md",
              color: "currentColor"
            }),
            hideSize: !0,
            onChange: q,
            iconClassName: N.uploadImageIcon,
            showIcon: null == X
          })
        })]
      })]
    }), (0, a.jsx)(t.mzw, {
      children: (0, a.jsxs)("div", {
        className: N.footerButtons,
        children: [null != _ ? (0, a.jsx)("div", {
          className: N.removeButton,
          children: (0, a.jsx)(t.zxk, {
            size: t.zxk.Sizes.SMALL,
            look: t.zxk.Looks.LINK,
            color: t.zxk.Colors.RED,
            onClick: U,
            children: k.NW.string(k.t.N86XcH)
          })
        }) : (0, a.jsx)("div", {}), (0, a.jsxs)("div", {
          className: N.rightButtons,
          children: [(0, a.jsx)(t.zxk, {
            onClick: I,
            size: t.zxk.Sizes.SMALL,
            look: t.zxk.Looks.LINK,
            color: t.zxk.Colors.PRIMARY,
            children: k.NW.string(k.t["ETE/oK"])
          }), (0, a.jsx)(t.zxk, {
            disabled: M,
            onClick: P,
            children: k.NW.string(k.t.R3BPHx)
          })]
        })]
      })
    })]
  })
}