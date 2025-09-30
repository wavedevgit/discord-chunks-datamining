/** Chunk was on 28382 **/
/** chunk id: 537623, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk369994 = require("./369994.js"),
  Chunk681678 = require("./681678.js"),
  Chunk177862 = require("./177862.js"),
  Chunk981631 = require("./981631.js"),
  Chunk484710 = require("./484710.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk833894 = require("./833894.js");

function I(t) {
  let {
    guildId: e,
    messageId: n,
    transitionState: l,
    onClose: I
  } = t, [b, y] = i.useState([]), [C, A] = i.useState(), g = i.useCallback(() => {
    let t = {
      raid_alert_type: p.wR.JOIN_RAID,
      raid_alert_id: n,
      false_alarm_type: b.map(t => t.toString()),
      false_alarm_other_reason: C,
      guild_id: e
    };
    (0, u.yw)(O.rMx.GUILD_RAID_FEEDBACK, t), (0, d.Fi)(e, n, (0, p.J$)(b)), I(), _.Z.showSuccessToast(f.wQ.SAFETY_FEEDBACK_SUCCESS)
  }, [I, n, e, C, b]), x = [{
    text: h.intl.string(h.t.yeaXw8),
    value: p.$l.LEGITIMATE_ACTIVITY
  }, {
    text: h.intl.string(h.t["o++3Bw"]),
    value: p.$l.DM_SPAM
  }, {
    text: h.intl.string(h.t.UfHAwc),
    value: p.$l.JOIN_RAID
  }, {
    text: h.intl.string(h.t.K3UWeX),
    value: p.$l.OTHER
  }];

  function D(t) {
    b.includes(t) ? y(e => e.filter(e => e !== t)) : y(e => [...e, t])
  }
  return (0, r.jsx)(a.Modal, {
    onClose: I,
    transitionState: l,
    title: h.intl.string(h.t["1zmw/P"]),
    subtitle: h.intl.string(h.t.nF79oK),
    actions: [{
      text: h.intl.string(h.t["ETE/oK"]),
      onClick: I,
      variant: "secondary"
    }, {
      text: h.intl.string(h.t.Gh3A0N),
      onClick: g
    }],
    children: (0, r.jsx)("div", {
      className: E.options,
      children: x.map(t => {
        let {
          text: e,
          value: n
        } = t;
        return (0, r.jsxs)("div", {
          className: o()(E.optionContainer, {
            [E.optionContainerOther]: n === p.$l.OTHER
          }),
          children: [(0, r.jsxs)(c.P3F, {
            className: E.optionText,
            onClick: () => D(n),
            children: [(0, r.jsx)("div", {
              children: (0, r.jsx)(s.$q, {
                type: s.M0.INVERTED,
                size: 20,
                value: b.includes(n),
                onChange: () => D(n)
              })
            }), (0, r.jsx)(c.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: e
            })]
          }), n === p.$l.OTHER && b.includes(p.$l.OTHER) && (0, r.jsx)("div", {
            className: E.textboxContainer,
            children: (0, r.jsx)(c.Kx8, {
              placeholder: h.intl.string(h.t["PAM+JS"]),
              onChange: A,
              value: C,
              autoFocus: true
            })
          })]
        }, n)
      })
    })
  })
}