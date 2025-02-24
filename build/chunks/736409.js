/** Chunk was on 32098 (8d42f73987ffffd5.js) **/
n.d(t, {
  j: () => w
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(793030),
  o = n(442837),
  a = n(704215),
  s = n(780384),
  c = n(481060),
  u = n(230711),
  d = n(410030),
  p = n(100527),
  h = n(906732),
  f = n(243778),
  g = n(667105),
  m = n(695346),
  b = n(819640),
  v = n(626135),
  y = n(316496),
  _ = n(903002),
  O = n(214492),
  j = n(981631),
  x = n(921944),
  C = n(46140),
  S = n(388032),
  P = n(94594),
  N = n(204794);
let I = {
    topLeftDark: "rgba(62, 22, 137, 0.8)",
    topRightDark: "rgba(160, 86, 242, 0.4)",
    topLeftLight: "rgba(159, 86, 242, 0.4)",
    topRightLight: "rgba(222, 194, 252, 0.5)"
  },
  Z = e => {
    let {
      closePopout: t,
      setToggleDefaultState: n
    } = e, {
      analyticsLocations: o
    } = (0, h.ZP)(p.Z.SHARING_CONTROLS_COACHMARK), a = (0, d.ZP)(), f = m.G6.useSetting(), {
      assets: g,
      count: b
    } = (0, O.fq)(), v = (0, i.useRef)(null);
    return (0, c.Tbt)(v), (0, r.jsxs)("div", {
      className: P.wrapper,
      ref: v,
      children: [(0, r.jsx)("div", {
        className: P.gradient,
        style: {
          background: "radial-gradient(75% 75% at 0% 0%, ".concat((0, s.wj)(a) ? I.topLeftDark : I.topLeftLight, " 0%, transparent 100%),\n    radial-gradient(70% 50% at 100% 0%, ").concat((0, s.wj)(a) ? I.topRightDark : I.topRightLight, " 0%, transparent 100%)")
        }
      }), (0, r.jsxs)("div", {
        className: P.content,
        children: [(0, r.jsx)(c.zxk, {
          className: P.closeButton,
          "aria-label": S.NW.string(S.t.cpT0Cg),
          look: c.zxk.Looks.BLANK,
          size: c.zxk.Sizes.NONE,
          onClick: t,
          children: (0, r.jsx)(c.Dio, {
            size: "xs",
            color: "currentColor"
          })
        }), (0, r.jsx)("img", {
          alt: "",
          src: N.Z,
          className: P.controllerImage
        }), (0, r.jsx)(l.X6, {
          variant: "heading-md/bold",
          className: P.title,
          children: S.NW.string(S.t.PRjSRk)
        }), (0, r.jsxs)("div", {
          className: P.contentContainer,
          children: [(0, r.jsxs)("div", {
            className: P.toggleContainer,
            children: [(0, r.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "header-primary",
              children: S.NW.string(S.t.KY0ilp)
            }), (0, r.jsx)(c.rsf, {
              onChange: e => {
                m.G6.updateSetting(e), e && n(e)
              },
              checked: f
            })]
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            children: S.NW.string(S.t.JW4KKS)
          }), (0, r.jsx)(_.D, {
            assets: g,
            assetCount: b,
            size: _.F.SMALL
          })]
        }), (0, r.jsx)(c.zxk, {
          className: P.viewSettingsButton,
          onClick: () => {
            t(), u.Z.open(j.oAB.ACTIVITY_PRIVACY, null, {
              analyticsLocations: o
            })
          },
          look: c.zxk.Looks.LINK,
          color: c.zxk.Colors.CUSTOM,
          size: c.zxk.Sizes.TINY,
          fullWidth: !0,
          children: S.NW.string(S.t.UPLpRU)
        })]
      })]
    })
  },
  w = e => {
    let {
      children: t,
      isForceShowSharingPopout: n,
      setIsForceShowSharingPopout: l
    } = e, {
      rtcPopoutEnabled: s
    } = (0, y.S)("SharingPrivacyPopout"), u = (0, g.Ws)({
      location: C.dr.CONFLICT_CHECKS
    }), d = m.G6.useSetting(), [p, h] = (0, i.useState)(!1), _ = (0, o.e7)([b.Z], () => b.Z.getLayers().includes(j.S9g.USER_SETTINGS));
    return ((0, i.useEffect)(() => {
      n && v.default.track(j.rMx.OPEN_POPOUT, {
        type: "SharingPrivacyPopout"
      })
    }, [n]), s && (u || n) && (!d || p) && !_) ? (0, r.jsx)(f.ZP, {
      contentTypes: n ? [] : [a.z.SHARE_ACTIVITY_COACHMARK_V2],
      children: e => {
        let {
          visibleContent: i,
          markAsDismissed: o
        } = e;
        return i === a.z.SHARE_ACTIVITY_COACHMARK_V2 || n ? (0, r.jsx)(c.yRy, {
          shouldShow: !0,
          position: "bottom",
          align: "center",
          onRequestClose: () => {
            o(x.L.USER_DISMISS), l(!1), h(!1)
          },
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, r.jsx)(Z, {
              closePopout: t,
              setToggleDefaultState: h
            })
          },
          children: () => t
        }) : t
      }
    }) : t
  }