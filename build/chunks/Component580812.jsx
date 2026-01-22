/** Chunk was on 7133 **/
/** chunk id: 580812, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
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

function p(e) {
  let {
    guildId: t,
    messageId: n,
    transitionState: p,
    onClose: A
  } = e, [f, I] = l.useState([]), [E, h] = l.useState(), g = l.useCallback(() => {
    let e = {
      raid_alert_type: c.TF.JOIN_RAID,
      raid_alert_id: n,
      false_alarm_type: f.map(e => e.toString()),
      false_alarm_other_reason: E,
      guild_id: t
    };
    (0, s.zV)(d.HAw.GUILD_RAID_FEEDBACK, e), (0, o.xE)(t, n, (0, c.W_)(f)), A(), u.A.showSuccessToast(_.OB.SAFETY_FEEDBACK_SUCCESS)
  }, [A, n, t, E, f]), y = [{
    label: b.intl.string(b.t.yeaXw5),
    value: c.no.LEGITIMATE_ACTIVITY
  }, {
    label: b.intl.string(b.t["o++3B8"]),
    value: c.no.DM_SPAM
  }, {
    label: b.intl.string(b.t.UfHAwZ),
    value: c.no.JOIN_RAID
  }, {
    label: b.intl.string(b.t.K3UWeR),
    value: c.no.OTHER
  }], D = l.useCallback(e => {
    I(e)
  }, []);
  return (0, r.jsx)(a.Modal, {
    onClose: A,
    transitionState: p,
    title: b.intl.string(b.t["1zmw/H"]),
    subtitle: b.intl.string(b.t.nF79oO),
    actions: [{
      text: b.intl.string(b.t["ETE/oC"]),
      onClick: A,
      variant: "secondary"
    }, {
      text: b.intl.string(b.t.Gh3A0O),
      onClick: g
    }],
    children: (0, r.jsxs)("div", {
      className: O.fF,
      children: [(0, r.jsx)(i.$QX, {
        selectedValues: f,
        onChange: D,
        options: y
      }), f.includes(c.no.OTHER) && (0, r.jsx)("div", {
        className: O.Q8,
        children: (0, r.jsx)(i.fs1, {
          placeholder: b.intl.string(b.t["PAM+JR"]),
          onChange: h,
          value: E,
          autoFocus: true
        })
      })]
    })
  })
}