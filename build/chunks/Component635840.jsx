/** Chunk was on 6284 **/
/** chunk id: 635840, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk167739 = require("./167739.js");
let _ = [{
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
  nameGetter: () => Chunk388032.intl.string(Chunk388032.t["+RZgNT"])
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
  nameGetter: () => Chunk388032.intl.string(Chunk388032.t.kgPXgo)
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
  nameGetter: () => Chunk388032.intl.string(Chunk388032.t.vujsUF)
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
  nameGetter: () => Chunk388032.intl.string(Chunk388032.t.AYAOLC)
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
  nameGetter: () => Chunk388032.intl.string(Chunk388032.t.wZLu3d)
}];

function C(e) {
  let {
    application: t,
    subscriptionId: i,
    onClose: C
  } = e, [u, N] = a.useState(false), [x, m] = a.useState(null), [S, h] = a.useState(""), I = a.useCallback(() => {
    null != x && (r.default.track(o.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
      answer: x,
      application_id: t.id,
      reason: S,
      subscription_id: i
    }), C())
  }, [t.id, i, x, C, S]);
  return a.useEffect(() => {
    l.ZP.updatedUnsyncedSettings({
      disableApplicationSubscriptionCancellationSurvey: u
    })
  }, [u]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(s.xBx, {
      className: c.headerContainer,
      separator: false,
      children: [(0, n.jsxs)("div", {
        className: c.titleContainer,
        children: [(0, n.jsx)(s.Text, {
          className: c.headerTitle,
          variant: "text-lg/semibold",
          children: d.intl.string(d.t.zPxMdX)
        }), (0, n.jsx)(s.olH, {
          className: c.modalCloseButton,
          onClick: C
        })]
      }), (0, n.jsx)(s.LZC, {
        size: 8
      }), (0, n.jsx)(s.Text, {
        className: c.headerSubtitle,
        variant: "text-md/medium",
        children: d.intl.string(d.t.QJGdBw)
      })]
    }), (0, n.jsxs)(s.hzk, {
      children: [(0, n.jsx)("div", {
        className: c.answerChoicesContainer,
        children: (0, n.jsx)(s.FXm, {
          value: x,
          options: _.map(e => {
            let {
              nameGetter: t,
              value: i
            } = e;
            return {
              name: t(),
              value: i
            }
          }),
          onChange: e => m(e.value),
          withTransparentBackground: true
        })
      }), "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === x && (0, n.jsx)("div", {
        className: c.otherField,
        children: (0, n.jsx)(s.oil, {
          autoFocus: true,
          placeholder: d.intl.string(d.t.s6tM8f),
          value: S,
          onChange: h
        })
      })]
    }), (0, n.jsxs)(s.mzw, {
      className: c.footer,
      children: [(0, n.jsx)(s.zxk, {
        variant: "primary",
        text: d.intl.string(d.t.geKm7u),
        onClick: I,
        disabled: null == x
      }), (0, n.jsx)(s.XZJ, {
        type: s.XZJ.Types.INVERTED,
        value: u,
        onChange: (e, t) => N(t),
        size: 20,
        className: c.__invalid_checkbox,
        children: (0, n.jsx)(s.Text, {
          variant: "text-sm/medium",
          children: d.intl.string(d.t["3vPFQk"])
        })
      })]
    })]
  })
}