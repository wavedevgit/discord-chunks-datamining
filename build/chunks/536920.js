/** Chunk was on 20114 **/
r.d(t, {
  default: () => p
}), r(47120), r(266796);
var a = r(200651),
  n = r(192379),
  s = r(442837),
  i = r(379649),
  o = r(481060),
  l = r(615287),
  d = r(493773),
  c = r(594190),
  u = r(77498),
  m = r(626135),
  _ = r(371651),
  x = r(981631),
  h = r(388032),
  g = r(813214);

function p(e) {
  let {
    onClose: t,
    transitionState: r,
    clientSettingType: p,
    gameId: v
  } = e, [N, k] = n.useState("unreported"), [j, C] = n.useState(""), [b, R] = n.useState(!1), [f, y] = n.useState(!1), [S, z] = n.useState(!1), [I, w] = n.useState(!1), M = (0, s.e7)([u.Z, c.ZP], () => {
    var e;
    let t = null != v ? v : null === (e = c.ZP.getCurrentGameForAnalytics()) || void 0 === e ? void 0 : e.id;
    return null == t ? null : u.Z.getDetectableGame(t)
  }), P = (0, s.e7)([_.default], () => {
    var e;
    let t = null !== (e = null === _.default || void 0 === _.default ? void 0 : _.default.getMostRecentOverlayRenderMethod()) && void 0 !== e ? e : void 0;
    return null != t ? l.gl[t] : void 0
  }), W = n.useMemo(() => {
    let e = {
      not_working: h.t.CHXHFR,
      not_useful: h.t.a95skZ,
      dont_like_changes: h.t.vgqMGx,
      game_crashes_occurred: h.t.IFZ0SU,
      poor_performance: h.t.exRczs,
      bad_experience: h.t.qOm5R0,
      other: h.t["YP/Ttr"]
    };
    return Object.keys(e).map(t => ({
      name: h.NW.string(e[t]),
      value: t
    }))
  }, []), A = async () => {
    if ("unreported" === N && 0 === j.length) {
      z(!0), await (0, i._v)(100), z(!1), w(!0);
      return
    }
    R(!0), await m.default.track(x.rMx.OVERLAY_DISABLED_SURVEY, {
      reason: N,
      comment: j,
      client_setting_type: p,
      application_id: null == M ? void 0 : M.id,
      application_name: null == M ? void 0 : M.name,
      most_recent_overlay_render_method: P
    }), await (0, i._v)(1e3), R(!1), y(!0), await (0, i._v)(1500), t()
  };
  return (0, d.ZP)(() => {
    m.default.track(x.rMx.OPEN_MODAL, {
      type: "overlay_disabled_questionnaire_modal"
    })
  }), (0, a.jsxs)(o.Y0X, {
    transitionState: r,
    "aria-label": h.NW.string(h.t.bomhnZ),
    size: o.CgR.DYNAMIC,
    className: g.root,
    children: [(0, a.jsxs)(o.xBx, {
      children: [(0, a.jsxs)("div", {
        className: g.header,
        children: [(0, a.jsx)(o.X6q, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: h.NW.string(h.t["9JKzxc"])
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          className: g.description,
          children: h.NW.string(h.t["2yjnmZ"])
        })]
      }), (0, a.jsx)(o.olH, {
        onClick: t,
        className: g.closeButton
      })]
    }), (0, a.jsx)(o.hzk, {
      className: g.reasonContainer,
      children: (0, a.jsxs)(o.Ttm, {
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(o.UkV, {
            isShaking: S,
            intensity: 1,
            className: g.radioHeader,
            children: (0, a.jsx)(o.Text, {
              variant: "text-sm/semibold",
              color: I ? "text-danger" : "text-muted",
              children: h.NW.string(h.t.yhUvdX)
            })
          }), (0, a.jsx)(o.FXm, {
            value: N,
            radioItemClassName: g.radioItem,
            className: g.radioGroup,
            radioPosition: "right",
            options: W,
            onChange: e => {
              let {
                value: t
              } = e;
              k(t), w(!1), z(!1)
            }
          })]
        }), (0, a.jsxs)("div", {
          className: g.commentContainer,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "text-muted",
            className: g.commentHeader,
            children: h.NW.string(h.t.LYnrhY)
          }), (0, a.jsx)(o.Kx8, {
            autosize: !0,
            value: j,
            maxLength: 1e3,
            showRemainingCharacterCount: !1,
            placeholder: h.NW.string(h.t["gU+bVF"]),
            onChange: C
          })]
        })]
      })
    }), (0, a.jsxs)(o.mzw, {
      className: g.buttons,
      children: [(0, a.jsx)(o.zxk, {
        disabled: b,
        onClick: () => {
          t()
        },
        color: o.zxk.Colors.PRIMARY,
        children: h.NW.string(h.t["5WxrcX"])
      }), (0, a.jsx)(o.UkV, {
        isShaking: S,
        intensity: 1,
        children: (0, a.jsx)(o.zxk, {
          disabled: b,
          submitting: b,
          onClick: A,
          color: (() => {
            switch (!0) {
              case f:
                return o.zxk.Colors.GREEN;
              case S:
                return o.zxk.Colors.PRIMARY;
              default:
                return o.zxk.Colors.BRAND
            }
          })(),
          children: (() => {
            switch (!0) {
              case f:
                return (0, a.jsx)(o.kmB, {});
              case b:
                return (0, a.jsx)(o.$jN, {
                  type: o.RAz.PULSING_ELLIPSIS
                });
              default:
                return h.NW.string(h.t.geKm7u)
            }
          })()
        })
      })]
    })]
  })
}