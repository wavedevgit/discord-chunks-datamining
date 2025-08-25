/** Chunk was on 6284 **/
/** chunk id: 635840, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk103866 = require("./103866.jsx"),
  Chunk213734 = require("./213734.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk167739 = require("./167739.js");
let N = [{
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

function I(t) {
  let {
    application: i,
    subscriptionId: e,
    onClose: I
  } = t, [S, E] = s.useState(false), [x, A] = s.useState(null), [O, T] = s.useState(""), p = s.useCallback(() => {
    null != x && (o.default.track(C.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
      answer: x,
      application_id: i.id,
      reason: O,
      subscription_id: e
    }), I())
  }, [i.id, e, x, I, O]);
  return s.useEffect(() => {
    d.ZP.updatedUnsyncedSettings({
      disableApplicationSubscriptionCancellationSurvey: S
    })
  }, [S]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(r.x, {
      title: _.intl.string(_.t.zPxMdX),
      subtitle: _.intl.string(_.t.QJGdBw)
    }), (0, n.jsxs)(a.f, {
      children: [(0, n.jsx)("div", {
        className: u.answerChoicesContainer,
        children: (0, n.jsx)(c.FXm, {
          value: x,
          options: N.map(t => {
            let {
              nameGetter: i,
              value: e
            } = t;
            return {
              name: i(),
              value: e
            }
          }),
          onChange: t => A(t.value),
          withTransparentBackground: true
        })
      }), "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === x && (0, n.jsx)("div", {
        className: u.otherField,
        children: (0, n.jsx)(c.oil, {
          autoFocus: true,
          placeholder: _.intl.string(_.t.s6tM8f),
          value: O,
          onChange: T
        })
      })]
    }), (0, n.jsx)(l.m, {
      children: (0, n.jsxs)("div", {
        className: u.footer,
        children: [(0, n.jsx)(c.XZJ, {
          type: c.XZJ.Types.INVERTED,
          value: S,
          onChange: (t, i) => E(i),
          size: 20,
          className: u.__invalid_checkbox,
          children: (0, n.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: _.intl.string(_.t["3vPFQk"])
          })
        }), (0, n.jsx)(c.zxk, {
          variant: "primary",
          text: _.intl.string(_.t.geKm7u),
          onClick: p,
          disabled: null == x
        })]
      })
    })]
  })
}