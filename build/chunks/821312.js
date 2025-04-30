/** Chunk was on 61536 **/
n.d(t, {
  Z: () => p
}), n(388685);
var i = n(200651),
  r = n(192379),
  s = n(120356),
  o = n.n(s),
  a = n(831209),
  l = n(481060),
  c = n(367907),
  d = n(177862),
  x = n(981631),
  u = n(388032),
  h = n(147612);

function p(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: s
  } = e, [p, j] = r.useState([]), [m, _] = r.useState(), C = [{
    text: u.intl.string(u.t["//3pvr"]),
    value: d.C2.DM_SPAM
  }, {
    text: u.intl.string(u.t.SdVsio),
    value: d.C2.MENTION_SPAM
  }, {
    text: u.intl.string(u.t.uTiSVF),
    value: d.C2.CHANNEL_SPAM
  }, {
    text: u.intl.string(u.t.GQczU1),
    value: d.C2.SUS_NEW_MEMBERS
  }, {
    text: u.intl.string(u.t.AAgqy8),
    value: d.C2.CHANGING_SETTINGS
  }, {
    text: u.intl.string(u.t.ryPKb2),
    value: d.C2.OTHER
  }];

  function g(e) {
    p.includes(e) ? j(t => t.filter(t => t !== e)) : j(t => [...t, e])
  }
  return null == t ? (s(), null) : (0, i.jsxs)(l.Y0X, {
    transitionState: n,
    size: l.CgR.MEDIUM,
    children: [(0, i.jsx)(l.xBx, {
      separator: !0,
      children: (0, i.jsxs)("div", {
        className: h.headerContainer,
        children: [(0, i.jsxs)("div", {
          className: h.headerText,
          children: [(0, i.jsx)(l.mBM, {
            size: "xs",
            color: a.Z.INTERACTIVE_NORMAL
          }), (0, i.jsx)(l.X6q, {
            color: "header-primary",
            variant: "heading-md/semibold",
            children: u.intl.string(u.t.f5hd9P)
          })]
        }), (0, i.jsx)(l.P3F, {
          onClick: s,
          children: (0, i.jsx)(l.Dio, {
            size: "xs",
            color: "currentColor",
            className: h.closeIcon
          })
        })]
      })
    }), (0, i.jsx)(l.hzk, {
      children: (0, i.jsx)("div", {
        className: h.options,
        children: C.map(e => {
          let {
            text: t,
            value: n
          } = e;
          return (0, i.jsxs)("div", {
            className: o()(h.optionContainer, {
              [h.optionContainerOther]: n === d.C2.OTHER
            }),
            children: [(0, i.jsxs)(l.P3F, {
              className: h.optionText,
              onClick: () => g(n),
              children: [(0, i.jsx)("div", {
                children: (0, i.jsx)(l.XZJ, {
                  type: l.XZJ.Types.INVERTED,
                  size: 20,
                  value: p.includes(n),
                  onChange: () => g(n)
                })
              }), (0, i.jsx)(l.Text, {
                variant: "text-md/medium",
                color: p.includes(n) ? "interactive-active" : "interactive-normal",
                children: t
              })]
            }), n === d.C2.OTHER && p.includes(d.C2.OTHER) && (0, i.jsx)("div", {
              className: h.textboxContainer,
              children: (0, i.jsx)(l.Kx8, {
                className: h.serverLockdownReasonText,
                placeholder: u.intl.string(u.t["PAM+JS"]),
                onChange: e => _(e),
                value: m,
                rows: 2,
                autoFocus: !0,
                flex: !0
              })
            })]
          }, n)
        })
      })
    }), (0, i.jsx)(l.mzw, {
      children: (0, i.jsx)(l.zxk, {
        onClick: function() {
          (0, c.yw)(x.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
            raid_lockdown_feedback_type: p,
            raid_lockdown_feedback_other_reason: m,
            guild_id: t
          }), s()
        },
        color: l.zxk.Colors.BRAND,
        look: l.zxk.Looks.FILLED,
        submitting: !1,
        children: u.intl.string(u.t.nAt0rK)
      })
    })]
  })
}