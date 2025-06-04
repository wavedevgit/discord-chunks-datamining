/** Chunk was on 61536 **/
n.d(t, {
  Z: () => p
}), n(388685);
var i = n(255367),
  r = n(73800),
  o = n(120356),
  s = n.n(o),
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
    onClose: o
  } = e, [p, m] = r.useState([]), [j, C] = r.useState(), _ = [{
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
    p.includes(e) ? m(t => t.filter(t => t !== e)) : m(t => [...t, e])
  }
  return null == t ? (o(), null) : (0, i.jsxs)(l.Y0X, {
    transitionState: n,
    size: l.CgR.MEDIUM,
    parentComponent: "GuildRaidLockdownFeedbackModal",
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
          onClick: o,
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
        children: _.map(e => {
          let {
            text: t,
            value: n
          } = e;
          return (0, i.jsxs)("div", {
            className: s()(h.optionContainer, {
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
                onChange: e => C(e),
                value: j,
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
            raid_lockdown_feedback_other_reason: j,
            guild_id: t
          }), o()
        },
        color: l.zxk.Colors.BRAND,
        look: l.zxk.Looks.FILLED,
        submitting: !1,
        children: u.intl.string(u.t.nAt0rK)
      })
    })]
  })
}