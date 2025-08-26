/** Chunk was on web.js **/
/** chunk id: 562705, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk264418 = require("./264418.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk7093 = require("./7093.js"),
  Chunk819640 = require("./819640.js"),
  Chunk585483 = require("./585483.js"),
  Chunk553896 = require("./553896.js"),
  Chunk804413 = require("./804413.js"),
  Chunk787528 = require("./787528.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let y = 12096e5;

function O(e) {
  let {
    groupName: t,
    targetElementRef: n
  } = e, i = (0, p.Z)(), s = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), f = (0, u.Z)(e => e.isOpen), _ = (0, o.e7)([d.Z], () => d.Z.getLayers().includes(g.S9g.USER_SETTINGS));
  return s || null == i || f || _ ? null : (0, r.jsx)(c.Nq, {
    contentType: a.z.NITRO_TENURE_BADGE_LEVEL_UP,
    timeRecurringConfig: {
      cooldownDurationMs: y
    },
    groupName: t,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: o
      } = e;
      return (0, r.jsx)(v, {
        recentlyLeveledTenureBadge: i,
        markAsDismissed: o,
        targetElementRef: n,
        shouldShow: t === a.z.NITRO_TENURE_BADGE_LEVEL_UP
      })
    }
  })
}

function v(e) {
  var t;
  let {
    recentlyLeveledTenureBadge: n,
    markAsDismissed: o,
    targetElementRef: a,
    shouldShow: l
  } = e, c = m.Qh.indexOf(n), d = c > 0 ? c - 1 : c, p = (0, h.J)(m.Qh[d], {
    ambient: true
  }), y = (0, i.useCallback)(() => {
    o(E.L.TAKE_ACTION), u.Z.setState({
      shouldRenderTenureLevelUp: true
    }), f.S.dispatch(g.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {})
  }, [o]), O = (0, i.useCallback)(() => {
    o(E.L.USER_DISMISS)
  }, [o]), v = m.vK[n], I = b.intl.formatToPlainString(b.t.ewkaVV, {
    timeMilestone: null == (t = (0, _.q)(v.id, v.tenureReqNumMonths)) ? true : t.toLocaleLowerCase()
  }), T = {
    position: "bottom",
    align: "center"
  }, S = [{
    text: b.intl.string(b.t.RzWDqa),
    variant: "primary",
    onClick: y
  }];
  return (0, r.jsx)(s.J, {
    targetElementRef: a,
    onRequestClose: O,
    shouldShow: l,
    caretConfig: T,
    graphic: null != p ? {
      type: "image",
      src: p,
      aspectRatio: "6/4"
    } : true,
    size: "lg",
    title: b.intl.string(b.t.VoDxsb),
    body: I,
    actions: S
  })
}