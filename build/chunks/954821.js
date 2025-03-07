/** Chunk was on 51724 **/
n.d(t, {
  h: () => _
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(913527),
  a = n.n(s),
  l = n(481060),
  o = n(355467),
  c = n(100527),
  d = n(906732),
  u = n(313201),
  m = n(73346),
  p = n(584825),
  g = n(305342),
  h = n(293810),
  f = n(388032),
  x = n(314516);
let b = e => {
    let [t, n] = i.useState(!1), [r, s] = i.useState(null);
    return {
      cancelSubscription: async t => {
        try {
          return n(!0), await o.EO(t, e), !0
        } catch (e) {
          s(e)
        } finally {
          n(!1)
        }
      },
      error: r,
      submitting: t
    }
  },
  N = e => {
    var t;
    let {
      transitionState: n,
      groupListing: i,
      guildId: s,
      listing: o,
      subscription: N,
      onClose: _
    } = e, E = (0, u.Dt)(), C = (0, p.YB)(s), j = (null == C ? void 0 : null === (t = C.cover_image_asset) || void 0 === t ? void 0 : t.application_id) != null ? (0, m._W)(C.cover_image_asset.application_id, C.cover_image_asset, 440) : void 0, {
      analyticsLocations: O
    } = (0, d.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
      cancelSubscription: v,
      error: S,
      submitting: T
    } = b(O), I = async () => {
      await v(N.id) && _()
    }, y = o.role_benefits.benefits.filter(e => e.ref_type === h.Qs.CHANNEL), A = o.role_benefits.benefits.filter(e => e.ref_type === h.Qs.INTANGIBLE), P = a()(N.currentPeriodEnd).format("MMMM Do, YYYY"), R = f.NW.formatToPlainString(f.t.KsMRPz, {
      numChannels: y.length,
      numAdditionalBenefits: A.length,
      subscriptionEndDate: P
    });
    return (0, r.jsxs)(l.Y0X, {
      transitionState: n,
      className: x.__invalid_modal,
      "aria-labelledby": E,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)("img", {
          src: j,
          alt: "",
          className: x.headerImage
        }), (0, r.jsx)(l.olH, {
          withCircleBackground: !0,
          className: x.closeButton,
          onClick: _
        })]
      }), null != S ? (0, r.jsx)(l.kzN, {
        children: S.message
      }) : null, (0, r.jsxs)(l.hzk, {
        className: x.content,
        children: [(0, r.jsx)(l.X6q, {
          id: E,
          variant: "text-md/medium",
          className: x.title,
          children: f.NW.string(f.t.O6l5tL)
        }), (0, r.jsx)(l.Text, {
          className: x.description,
          variant: "text-sm/normal",
          children: R
        }), (0, r.jsx)(g.c, {
          listingId: o.id,
          guildId: i.guild_id,
          className: x.benefits
        })]
      }), (0, r.jsxs)(l.mzw, {
        className: x.footer,
        children: [(0, r.jsx)(l.zxk, {
          color: l.zxk.Colors.RED,
          onClick: I,
          submitting: T,
          children: f.NW.string(f.t.F6lUDA)
        }), (0, r.jsx)(l.zxk, {
          look: l.zxk.Looks.LINK,
          color: l.zxk.Colors.WHITE,
          className: x.goBackButton,
          onClick: _,
          children: f.NW.string(f.t.EP6EPT)
        })]
      })]
    })
  },
  _ = e => {
    (0, l.h7j)(t => (0, r.jsx)(N, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({}, t, e)))
  }