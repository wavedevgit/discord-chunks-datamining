/** Chunk was on 58175 **/
/** chunk id: 821312, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk177862 = require("./177862.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk882313 = require("./882313.js");

function f(t) {
  let {
    guildId: e,
    transitionState: n,
    onClose: l
  } = t, [f, O] = i.useState([]), [g, _] = i.useState(), h = [{
    text: p.intl.string(p.t["//3pvr"]),
    value: d.C2.DM_SPAM
  }, {
    text: p.intl.string(p.t.SdVsio),
    value: d.C2.MENTION_SPAM
  }, {
    text: p.intl.string(p.t.uTiSVF),
    value: d.C2.CHANNEL_SPAM
  }, {
    text: p.intl.string(p.t.GQczU1),
    value: d.C2.SUS_NEW_MEMBERS
  }, {
    text: p.intl.string(p.t.AAgqy8),
    value: d.C2.CHANGING_SETTINGS
  }, {
    text: p.intl.string(p.t.ryPKb2),
    value: d.C2.OTHER
  }];

  function y(t) {
    f.includes(t) ? O(e => e.filter(e => e !== t)) : O(e => [...e, t])
  }
  return null == e ? (l(), null) : (0, r.jsx)(s.Modal, {
    transitionState: n,
    title: p.intl.string(p.t.f5hd9P),
    actions: [{
      text: p.intl.string(p.t["ETE/oK"]),
      onClick: l,
      variant: "secondary"
    }, {
      text: p.intl.string(p.t.nAt0rK),
      onClick: function() {
        (0, c.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
          raid_lockdown_feedback_type: f,
          raid_lockdown_feedback_other_reason: g,
          guild_id: e
        }), l()
      },
      disabled: 0 === f.length
    }],
    onClose: l,
    children: (0, r.jsx)(o.Kqy, {
      gap: 8,
      children: h.map(t => {
        let {
          text: e,
          value: n
        } = t;
        return (0, r.jsxs)("div", {
          className: a()(b.optionContainer, {
            [b.optionContainerOther]: n === d.C2.OTHER
          }),
          children: [(0, r.jsxs)(o.P3F, {
            className: b.optionText,
            onClick: () => y(n),
            children: [(0, r.jsx)("div", {
              children: (0, r.jsx)(o.XZJ, {
                type: o.XZJ.Types.INVERTED,
                size: 20,
                value: f.includes(n),
                onChange: () => y(n)
              })
            }), (0, r.jsx)(o.Text, {
              variant: "text-md/medium",
              color: f.includes(n) ? "interactive-active" : "interactive-normal",
              children: e
            })]
          }), n === d.C2.OTHER && f.includes(d.C2.OTHER) && (0, r.jsx)("div", {
            className: b.textboxContainer,
            children: (0, r.jsx)(o.Kx8, {
              placeholder: p.intl.string(p.t["PAM+JS"]),
              onChange: _,
              value: g,
              autoFocus: true
            })
          })]
        }, n)
      })
    })
  })
}