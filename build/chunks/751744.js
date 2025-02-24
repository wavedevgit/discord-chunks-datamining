/** Chunk was on 82961 **/
n.d(t, {
  default: () => N
}), n(266796);
var o = n(200651),
  i = n(192379),
  r = n(442837),
  s = n(481060),
  l = n(191237),
  a = n(138201),
  c = n(331692),
  d = n(103879),
  x = n(236289),
  m = n(800530),
  u = n(388032),
  h = n(915086);
let f = [{
    title: u.NW.string(u.t["1+E7LC"]),
    description: u.NW.string(u.t.BXiat7)
  }, {
    title: u.NW.string(u.t.iMQXtL),
    description: u.NW.string(u.t.oQ0vws)
  }, {
    title: u.NW.string(u.t["oY/z1d"]),
    description: u.NW.string(u.t.wtj02d)
  }],
  N = function(e) {
    let {
      onClose: t,
      transitionState: n
    } = e, N = (0, r.e7)([x.Z], () => x.Z.getAgeVerificationWebviewUrl()), b = (0, r.e7)([x.Z], () => x.Z.getIsLoadingAgeVerification()), _ = i.useCallback(() => {
      t(), c.Z.close()
    }, [t]), j = i.useCallback(() => {
      c.Z.success(), _(), c.Z.start_verification_check()
    }, [_]);
    return i.useEffect(() => {
      "" !== N && l.Z.showAgeVerification({
        webviewUrl: N,
        onComplete: j
      })
    }, [N, j]), (0, o.jsxs)(s.Y0X, {
      transitionState: n,
      className: h.root,
      children: [(0, o.jsxs)(s.hzk, {
        className: h.content,
        children: [(0, o.jsxs)("div", {
          className: h.header,
          children: [(0, o.jsx)(s.X6q, {
            variant: "heading-xl/bold",
            children: u.NW.string(u.t["9SDLnp"])
          }), (0, o.jsx)(s.X6q, {
            variant: "heading-md/normal",
            color: "header-secondary",
            children: u.NW.string(u.t["yvx///"])
          })]
        }), (0, o.jsx)("div", {
          className: h.listContent,
          children: (0, o.jsx)("div", {
            className: h.table,
            children: f.map((e, t) => {
              let {
                title: n,
                description: i
              } = e;
              return (0, o.jsx)(a.ZP, {
                title: n,
                description: i,
                index: t,
                listType: "numbered",
                titleVariant: "text-md/medium"
              }, t)
            })
          })
        }), (0, o.jsxs)("div", {
          className: h.anotherOption,
          children: [(0, o.jsx)(s.Text, {
            variant: "text-sm/semibold",
            className: h.optionEyebrow,
            color: "header-secondary",
            children: u.NW.string(u.t.WPwp1d)
          }), (0, o.jsx)("div", {
            className: h.table,
            children: (0, o.jsx)(a.ZP, {
              title: u.NW.string(u.t.N9WJMD),
              description: u.NW.string(u.t["NHq38/"]),
              buttonText: u.NW.string(u.t["9iy4lJ"]),
              buttonColor: s.zxk.Colors.PRIMARY,
              titleVariant: "text-md/medium",
              onButtonPress: () => window.open(m.sQ.AGE_VERIFICATION_LINK, "_blank")
            })
          }), (0, o.jsx)("div", {
            className: h.learnMore,
            children: (0, o.jsx)(s.X6q, {
              variant: "heading-sm/medium",
              color: "text-secondary",
              children: u.NW.format(u.t.ZbWsOD, {
                learnMoreLink: m.sQ.LEARN_MORE_UU_APPEAL_LINK
              })
            })
          })]
        })]
      }), (0, o.jsxs)(s.mzw, {
        className: h.footer,
        children: [(0, o.jsx)(s.zxk, {
          onClick: d.FN,
          submitting: b,
          children: u.NW.string(u.t["54b8V1"])
        }), (0, o.jsx)(s.zxk, {
          color: s.zxk.Colors.TRANSPARENT,
          look: s.zxk.Looks.BLANK,
          onClick: _,
          className: h.cancelButton,
          children: u.NW.string(u.t.dKacJy)
        })]
      })]
    })
  }