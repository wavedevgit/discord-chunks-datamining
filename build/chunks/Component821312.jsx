/** Chunk was on 61536 **/
/** chunk id: 821312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk709867 = require("./709867.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk177862 = require("./177862.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk882313 = require("./882313.js");

function p(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: p
  } = e, [f, g] = i.useState([]), [_, O] = i.useState(), h = [{
    label: d.intl.string(d.t["//3pvr"]),
    value: c.C2.DM_SPAM
  }, {
    label: d.intl.string(d.t.SdVsio),
    value: c.C2.MENTION_SPAM
  }, {
    label: d.intl.string(d.t.uTiSVF),
    value: c.C2.CHANNEL_SPAM
  }, {
    label: d.intl.string(d.t.GQczU1),
    value: c.C2.SUS_NEW_MEMBERS
  }, {
    label: d.intl.string(d.t.AAgqy8),
    value: c.C2.CHANGING_SETTINGS
  }, {
    label: d.intl.string(d.t.ryPKb2),
    value: c.C2.OTHER
  }], y = i.useCallback(e => {
    g(e)
  }, []);
  return null == t ? (p(), null) : (0, r.jsx)(l.Modal, {
    transitionState: n,
    title: d.intl.string(d.t.f5hd9P),
    actions: [{
      text: d.intl.string(d.t["ETE/oK"]),
      onClick: p,
      variant: "secondary"
    }, {
      text: d.intl.string(d.t.nAt0rK),
      onClick: function() {
        (0, s.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
          raid_lockdown_feedback_type: f,
          raid_lockdown_feedback_other_reason: _,
          guild_id: t
        }), p()
      },
      disabled: 0 === f.length
    }],
    onClose: p,
    children: (0, r.jsxs)(o.Kqy, {
      gap: 8,
      children: [(0, r.jsx)(a.c, {
        selectedValues: f,
        onChange: y,
        options: h
      }), f.includes(c.C2.OTHER) && (0, r.jsx)("div", {
        className: b.textboxContainer,
        children: (0, r.jsx)(o.Kx8, {
          placeholder: d.intl.string(d.t["PAM+JS"]),
          onChange: O,
          value: _,
          autoFocus: true
        })
      })]
    })
  })
}