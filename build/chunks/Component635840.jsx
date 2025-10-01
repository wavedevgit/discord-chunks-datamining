/** Chunk was on 6284 **/
/** chunk id: 635840, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk167739 = require("./167739.js");
let u = [{
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

function N(t) {
  let {
    application: i,
    subscriptionId: e,
    onClose: N
  } = t, [I, S] = a.useState(false), [x, E] = a.useState(null), [A, O] = a.useState(""), T = a.useCallback(() => {
    null != x && (d.default.track(o.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
      answer: x,
      application_id: i.id,
      reason: A,
      subscription_id: e
    }), N())
  }, [i.id, e, x, N, A]);
  return a.useEffect(() => {
    c.ZP.updatedUnsyncedSettings({
      disableApplicationSubscriptionCancellationSurvey: I
    })
  }, [I]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.xBx, {
      title: C.intl.string(C.t.zPxMdX),
      subtitle: C.intl.string(C.t.QJGdBw)
    }), (0, n.jsxs)(s.fef, {
      children: [(0, n.jsx)("div", {
        className: _.answerChoicesContainer,
        children: (0, n.jsx)(l.Gu, {
          value: x,
          options: u.map(t => {
            let {
              nameGetter: i,
              value: e
            } = t;
            return {
              name: i(),
              value: e
            }
          }),
          onChange: t => E(t.value),
          withTransparentBackground: true
        })
      }), "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === x && (0, n.jsx)("div", {
        className: _.otherField,
        children: (0, n.jsx)(r.oil, {
          autoFocus: true,
          placeholder: C.intl.string(C.t.s6tM8f),
          value: A,
          onChange: O
        })
      })]
    }), (0, n.jsx)(r.mzw, {
      "data-migration-pending": true,
      children: (0, n.jsxs)("div", {
        className: _.footer,
        children: [(0, n.jsx)(l.$q, {
          type: l.M0.INVERTED,
          value: I,
          onChange: (t, i) => S(i),
          size: 20,
          className: _.__invalid_checkbox,
          children: (0, n.jsx)(r.Text, {
            variant: "text-sm/medium",
            children: C.intl.string(C.t["3vPFQk"])
          })
        }), (0, n.jsx)(r.zxk, {
          variant: "primary",
          text: C.intl.string(C.t.geKm7u),
          onClick: T,
          disabled: null == x
        })]
      })
    })]
  })
}