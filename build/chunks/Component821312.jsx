/** Chunk was on 58175 **/
/** chunk id: 821312, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk177862 = require("./177862.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk818830 = require("./818830.js");

function O(t) {
  let {
    guildId: e,
    transitionState: n,
    onClose: l
  } = t, [O, g] = i.useState([]), [_, h] = i.useState(), y = [{
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
    O.includes(t) ? g(e => e.filter(e => e !== t)) : g(e => [...e, t])
  }
  return null == e ? (l(), null) : (0, r.jsx)(a.Modal, {
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
          raid_lockdown_feedback_type: O,
          raid_lockdown_feedback_other_reason: _,
          guild_id: e
        }), l()
      },
      disabled: 0 === O.length
    }],
    onClose: l,
    children: (0, r.jsx)(c.Kqy, {
      gap: 8,
      children: y.map(t => {
        let {
          text: e,
          value: n
        } = t;
        return (0, r.jsxs)("div", {
          className: s()(f.optionContainer, {
            [f.optionContainerOther]: n === u.C2.OTHER
          }),
          children: [(0, r.jsxs)(c.P3F, {
            className: f.optionText,
            onClick: () => x(n),
            children: [(0, r.jsx)("div", {
              children: (0, r.jsx)(c.XZJ, {
                type: c.XZJ.Types.INVERTED,
                size: 20,
                value: O.includes(n),
                onChange: () => x(n)
              })
            }), (0, r.jsx)(c.Text, {
              variant: "text-md/medium",
              color: O.includes(n) ? "interactive-active" : "interactive-normal",
              children: e
            })]
          }), n === u.C2.OTHER && O.includes(u.C2.OTHER) && (0, r.jsx)("div", {
            className: f.textboxContainer,
            children: (0, r.jsx)(o.iS, {
              className: f.serverLockdownReasonText,
              placeholder: b.intl.string(b.t["PAM+JS"]),
              onChange: t => h(t),
              value: _,
              rows: 2,
              autoFocus: true,
              flex: true
            })
          })]
        }, n)
      })
    })
  })
}