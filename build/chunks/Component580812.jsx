/** Chunk was on 7133 **/
/** chunk id: 580812, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk554113 = require("./554113.js"),
  Chunk662502 = require("./662502.js"),
  Chunk615550 = require("./615550.js"),
  Chunk652215 = require("./652215.js"),
  Chunk835002 = require("./835002.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk383110 = require("./383110.js");

function A(t) {
  let {
    guildId: e,
    messageId: n,
    transitionState: A,
    onClose: b
  } = t, [I, f] = l.useState([]), [E, h] = l.useState(), g = l.useCallback(() => {
    let t = {
      raid_alert_type: c.TF.JOIN_RAID,
      raid_alert_id: n,
      false_alarm_type: I.map(t => t.toString()),
      false_alarm_other_reason: E,
      guild_id: e
    };
    (0, s.zV)(d.HAw.GUILD_RAID_FEEDBACK, t), (0, o.xE)(e, n, (0, c.W_)(I)), b(), u.A.showSuccessToast(_.OB.SAFETY_FEEDBACK_SUCCESS)
  }, [b, n, e, E, I]), y = [{
    label: p.intl.string(p.t.yeaXw5),
    value: c.no.LEGITIMATE_ACTIVITY
  }, {
    label: p.intl.string(p.t["o++3B8"]),
    value: c.no.DM_SPAM
  }, {
    label: p.intl.string(p.t.UfHAwZ),
    value: c.no.JOIN_RAID
  }, {
    label: p.intl.string(p.t.K3UWeR),
    value: c.no.OTHER
  }], D = l.useCallback(t => {
    f(t)
  }, []);
  return (0, r.jsx)(a.Modal, {
    onClose: b,
    transitionState: A,
    title: p.intl.string(p.t["1zmw/H"]),
    subtitle: p.intl.string(p.t.nF79oO),
    actions: [{
      text: p.intl.string(p.t["ETE/oC"]),
      onClick: b,
      variant: "secondary"
    }, {
      text: p.intl.string(p.t.Gh3A0O),
      onClick: g
    }],
    children: (0, r.jsxs)("div", {
      className: O.fF,
      children: [(0, r.jsx)(i.$QX, {
        selectedValues: I,
        onChange: D,
        options: y
      }), I.includes(c.no.OTHER) && (0, r.jsx)("div", {
        className: O.Q8,
        children: (0, r.jsx)(i.fs1, {
          placeholder: p.intl.string(p.t["PAM+JR"]),
          onChange: h,
          value: E,
          autoFocus: true
        })
      })]
    })
  })
}