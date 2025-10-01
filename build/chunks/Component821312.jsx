/** Chunk was on 58175 **/
/** chunk id: 821312, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk177862 = require("./177862.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk340528 = require("./340528.js");

function g(t) {
  let {
    guildId: e,
    transitionState: n,
    onClose: l
  } = t, [g, f] = i.useState([]), [h, _] = i.useState(), j = [{
    text: b.intl.string(b.t["//3pvr"]),
    value: u.C2.DM_SPAM
  }, {
    text: b.intl.string(b.t.SdVsio),
    value: u.C2.MENTION_SPAM
  }, {
    text: b.intl.string(b.t.uTiSVF),
    value: u.C2.CHANNEL_SPAM
  }, {
    text: b.intl.string(b.t.GQczU1),
    value: u.C2.SUS_NEW_MEMBERS
  }, {
    text: b.intl.string(b.t.AAgqy8),
    value: u.C2.CHANGING_SETTINGS
  }, {
    text: b.intl.string(b.t.ryPKb2),
    value: u.C2.OTHER
  }];

  function x(t) {
    g.includes(t) ? f(e => e.filter(e => e !== t)) : f(e => [...e, t])
  }
  return null == e ? (l(), null) : (0, r.jsx)(s.Modal, {
    transitionState: n,
    title: b.intl.string(b.t.f5hd9P),
    actions: [{
      text: b.intl.string(b.t["ETE/oK"]),
      onClick: l,
      variant: "secondary"
    }, {
      text: b.intl.string(b.t.nAt0rK),
      onClick: function() {
        (0, d.yw)(p.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
          raid_lockdown_feedback_type: g,
          raid_lockdown_feedback_other_reason: h,
          guild_id: e
        }), l()
      },
      disabled: 0 === g.length
    }],
    onClose: l,
    children: (0, r.jsx)(c.Kqy, {
      gap: 8,
      children: j.map(t => {
        let {
          text: e,
          value: n
        } = t;
        return (0, r.jsxs)("div", {
          className: a()(O.optionContainer, {
            [O.optionContainerOther]: n === u.C2.OTHER
          }),
          children: [(0, r.jsxs)(c.P3F, {
            className: O.optionText,
            onClick: () => x(n),
            children: [(0, r.jsx)("div", {
              children: (0, r.jsx)(o.$q, {
                type: o.M0.INVERTED,
                size: 20,
                value: g.includes(n),
                onChange: () => x(n)
              })
            }), (0, r.jsx)(c.Text, {
              variant: "text-md/medium",
              color: g.includes(n) ? "interactive-active" : "interactive-normal",
              children: e
            })]
          }), n === u.C2.OTHER && g.includes(u.C2.OTHER) && (0, r.jsx)("div", {
            className: O.textboxContainer,
            children: (0, r.jsx)(c.Kx8, {
              placeholder: b.intl.string(b.t["PAM+JS"]),
              onChange: _,
              value: h,
              autoFocus: true
            })
          })]
        }, n)
      })
    })
  })
}