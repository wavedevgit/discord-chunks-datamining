/** Chunk was on 53494 **/
n.d(t, {
  j: () => y
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  l = n(704215),
  a = n(481060),
  s = n(605236),
  c = n(243778),
  u = n(667105),
  d = n(695346),
  p = n(819640),
  h = n(626135),
  f = n(316496),
  g = n(55185),
  m = n(981631),
  b = n(921944),
  v = n(46140);
let y = e => {
  let {
    children: t,
    isForceShowSharingPopout: n,
    setIsForceShowSharingPopout: y
  } = e, {
    rtcPopoutEnabled: _
  } = (0, f.S)("SharingPrivacyPopout"), O = (0, u.Ws)({
    location: v.dr.CONFLICT_CHECKS
  }), j = d.G6.useSetting(), [C, x] = (0, i.useState)(!1), S = (0, o.e7)([p.Z], () => p.Z.getLayers().includes(m.S9g.USER_SETTINGS));
  return ((0, i.useEffect)(() => {
    n && h.default.track(m.rMx.OPEN_POPOUT, {
      type: "SharingPrivacyPopout"
    })
  }, [n]), _ && (O || n) && (!j || C) && !S) ? (0, r.jsx)(c.ZP, {
    contentTypes: n ? [] : [l.z.SHARE_ACTIVITY_COACHMARK_V2],
    children: e => {
      let {
        visibleContent: i
      } = e;
      if (i === l.z.SHARE_ACTIVITY_COACHMARK_V2 || n) {
        let e = () => {
          (0, s.EW)(l.z.SHARE_ACTIVITY_COACHMARK_V2, {
            dismissAction: b.L.USER_DISMISS
          }), y(!1), x(!1)
        };
        return (0, r.jsx)(a.yRy, {
          shouldShow: !0,
          position: "bottom",
          align: "center",
          onRequestClose: e,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return n ? (0, r.jsx)(g.z, {
              closePopout: t,
              setToggleDefaultState: x
            }) : (0, r.jsx)(g.r, {
              closePopout: t,
              setToggleDefaultState: x
            })
          },
          children: () => (0, r.jsx)(a.P3F, {
            onClick: e,
            children: t
          })
        })
      }
      return t
    }
  }) : t
}