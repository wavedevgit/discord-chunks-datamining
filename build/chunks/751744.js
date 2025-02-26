/** Chunk was on 82961 **/
n.d(t, {
  default: () => b
}), n(266796);
var r = n(200651),
  o = n(192379),
  i = n(442837),
  a = n(481060),
  s = n(168107),
  l = n(138201),
  c = n(331692),
  d = n(103879),
  u = n(236289),
  x = n(800530),
  f = n(388032),
  m = n(915086);
let h = [{
    title: f.NW.string(f.t["1+E7LC"]),
    description: f.NW.string(f.t.BXiat7)
  }, {
    title: f.NW.string(f.t.iMQXtL),
    description: f.NW.string(f.t.oQ0vws)
  }, {
    title: f.NW.string(f.t["oY/z1d"]),
    description: f.NW.string(f.t.wtj02d)
  }],
  b = function(e) {
    let {
      onClose: t,
      transitionState: n
    } = e, b = (0, i.e7)([u.Z], () => u.Z.getAgeVerificationWebviewUrl()), N = (0, i.e7)([u.Z], () => u.Z.getIsLoadingAgeVerification()), j = o.useCallback(() => {
      t(), c.Z.close()
    }, [t]), _ = o.useCallback(() => {
      c.Z.success(), j(), c.Z.start_verification_check()
    }, [j]);
    return o.useEffect(() => {
      "" !== b && s.Z.showAgeVerification({
        webviewUrl: b,
        onComplete: _
      })
    }, [b, _]), (0, r.jsxs)(a.Y0X, {
      transitionState: n,
      className: m.root,
      children: [(0, r.jsxs)(a.hzk, {
        className: m.content,
        children: [(0, r.jsxs)("div", {
          className: m.header,
          children: [(0, r.jsx)(a.X6q, {
            variant: "heading-xl/bold",
            children: f.NW.string(f.t["9SDLnp"])
          }), (0, r.jsx)(a.X6q, {
            variant: "heading-md/normal",
            color: "header-secondary",
            children: f.NW.string(f.t["yvx///"])
          })]
        }), (0, r.jsx)("div", {
          className: m.listContent,
          children: (0, r.jsx)("div", {
            className: m.table,
            children: h.map((e, t) => {
              let {
                title: n,
                description: o
              } = e;
              return (0, r.jsx)(l.ZP, {
                title: n,
                description: o,
                index: t,
                listType: "numbered",
                titleVariant: "text-md/medium"
              }, t)
            })
          })
        }), (0, r.jsxs)("div", {
          className: m.anotherOption,
          children: [(0, r.jsx)(a.Text, {
            variant: "text-sm/semibold",
            className: m.optionEyebrow,
            color: "header-secondary",
            children: f.NW.string(f.t.WPwp1d)
          }), (0, r.jsx)("div", {
            className: m.table,
            children: (0, r.jsx)(l.ZP, {
              title: f.NW.string(f.t.N9WJMD),
              description: f.NW.string(f.t["NHq38/"]),
              buttonText: f.NW.string(f.t["9iy4lJ"]),
              buttonColor: a.zxk.Colors.PRIMARY,
              titleVariant: "text-md/medium",
              onButtonPress: () => window.open(x.sQ.AGE_VERIFICATION_LINK, "_blank")
            })
          }), (0, r.jsx)("div", {
            className: m.learnMore,
            children: (0, r.jsx)(a.X6q, {
              variant: "heading-sm/medium",
              color: "text-secondary",
              children: f.NW.format(f.t.ZbWsOD, {
                learnMoreLink: x.sQ.LEARN_MORE_UU_APPEAL_LINK
              })
            })
          })]
        })]
      }), (0, r.jsxs)(a.mzw, {
        className: m.footer,
        children: [(0, r.jsx)(a.zxk, {
          onClick: d.FN,
          submitting: N,
          children: f.NW.string(f.t["54b8V1"])
        }), (0, r.jsx)(a.zxk, {
          color: a.zxk.Colors.TRANSPARENT,
          look: a.zxk.Looks.BLANK,
          onClick: j,
          className: m.cancelButton,
          children: f.NW.string(f.t.dKacJy)
        })]
      })]
    })
  }