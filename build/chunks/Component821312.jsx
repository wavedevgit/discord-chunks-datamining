/** Chunk was on 58175 **/
/** chunk id: 821312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk177862 = require("./177862.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk247873 = require("./247873.js");

function b(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: b
  } = e, [p, g] = i.useState([]), [f, _] = i.useState(), O = [{
    label: u.intl.string(u.t["//3pvi"]),
    value: o.C2.DM_SPAM
  }, {
    label: u.intl.string(u.t.SdVsip),
    value: o.C2.MENTION_SPAM
  }, {
    label: u.intl.string(u.t.uTiSVL),
    value: o.C2.CHANNEL_SPAM
  }, {
    label: u.intl.string(u.t.GQczU8),
    value: o.C2.SUS_NEW_MEMBERS
  }, {
    label: u.intl.string(u.t.AAgqy3),
    value: o.C2.CHANGING_SETTINGS
  }, {
    label: u.intl.string(u.t.ryPKb7),
    value: o.C2.OTHER
  }], h = i.useCallback(e => {
    g(e)
  }, []);
  return null == t ? (b(), null) : (0, r.jsx)(l.Modal, {
    transitionState: n,
    title: u.intl.string(u.t.f5hd9P),
    actions: [{
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: b,
      variant: "secondary"
    }, {
      text: u.intl.string(u.t.nAt0rE),
      onClick: function() {
        (0, s.yw)(c.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
          raid_lockdown_feedback_type: p,
          raid_lockdown_feedback_other_reason: f,
          guild_id: t
        }), b()
      },
      disabled: 0 === p.length
    }],
    onClose: b,
    children: (0, r.jsxs)(a.Kqy, {
      gap: 8,
      children: [(0, r.jsx)(a.cOn, {
        selectedValues: p,
        onChange: h,
        options: O
      }), p.includes(o.C2.OTHER) && (0, r.jsx)("div", {
        className: d.textboxContainer,
        children: (0, r.jsx)(a.Kx8, {
          placeholder: u.intl.string(u.t["PAM+JR"]),
          onChange: _,
          value: f,
          autoFocus: true
        })
      })]
    })
  })
}