/** Chunk was on 37483 **/
/** chunk id: 241046, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk313889 = require("./313889.js"),
  Chunk177862 = require("./177862.js"),
  Chunk36459 = require("./36459.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk141758 = require("./141758.js");

function p(t) {
  let {
    automodDecision: e,
    transitionState: n,
    onClose: p
  } = t, u = s.useCallback(() => {
    (0, r.yw)(l.rMx.GUILD_AUTOMOD_FEEDBACK, {
      feedback_type: o.x2.BUG,
      decision_id: e.decisionId,
      message_id: e.messageId,
      content: e.messageContent
    }), (0, c.Xx)(e.messageId, e.channel, d.d.SUBMIT_FEEDBACK), p()
  }, [e, p]);
  return (0, i.jsxs)(a.Y0X, {
    transitionState: n,
    size: a.CgR.SMALL,
    parentComponent: "AutomodSubmitFeedbackModal",
    children: [(0, i.jsx)(a.xBx, {
      separator: false,
      children: (0, i.jsx)(a.X6q, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: x.intl.string(x.t["7bdzNj"])
      })
    }), (0, i.jsx)(a.hzk, {
      children: (0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: x.intl.string(x.t.Lbpk6u)
      })
    }), (0, i.jsxs)(a.mzw, {
      children: [(0, i.jsx)("div", {
        className: h.button,
        children: (0, i.jsx)(a.zxk, {
          variant: "primary",
          text: x.intl.string(x.t.p89ACg),
          onClick: u
        })
      }), (0, i.jsx)(a.zxk, {
        variant: "secondary",
        text: x.intl.string(x.t["ETE/oK"]),
        onClick: p
      })]
    })]
  })
}