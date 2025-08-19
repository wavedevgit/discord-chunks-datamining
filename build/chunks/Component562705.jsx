/** Chunk was on 66181 **/
/** chunk id: 562705, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk264418 = require("./264418.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk7093 = require("./7093.js"),
  Chunk819640 = require("./819640.js"),
  Chunk585483 = require("./585483.js"),
  Chunk553896 = require("./553896.js"),
  Chunk101966 = require("./101966.js"),
  Chunk804413 = require("./804413.js"),
  Chunk787528 = require("./787528.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");

function j(e) {
  let {
    groupName: t,
    targetElementRef: n
  } = e, r = (0, g.Z)(), l = (0, p.Z)({
    location: "TenureLevelUpPopover"
  }), u = (0, c.Z)(e => e.isOpen), m = (0, s.e7)([d.Z], () => d.Z.getLayers().includes(b.S9g.USER_SETTINGS));
  return !l || null == r || u || m ? null : (0, i.jsx)(o.Nq, {
    contentType: a.z.NITRO_TENURE_BADGE_LEVEL_UP,
    timeRecurringConfig: {
      cooldownDurationMs: 12096e5
    },
    groupName: t,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: s
      } = e;
      return (0, i.jsx)(E, {
        recentlyLeveledTenureBadge: r,
        markAsDismissed: s,
        targetElementRef: n,
        shouldShow: t === a.z.NITRO_TENURE_BADGE_LEVEL_UP
      })
    }
  })
}

function E(e) {
  var t;
  let {
    recentlyLeveledTenureBadge: n,
    markAsDismissed: s,
    targetElementRef: a,
    shouldShow: o
  } = e, d = f.Qh.indexOf(n), p = (0, h.J)(f.Qh[d > 0 ? d - 1 : d], {
    ambient: true
  }), g = (0, r.useCallback)(() => {
    s(x.L.TAKE_ACTION), c.Z.setState({
      shouldRenderTenureLevelUp: true
    }), u.S.dispatch(b.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {})
  }, [s]), j = (0, r.useCallback)(() => {
    s(x.L.USER_DISMISS)
  }, [s]), E = f.vK[n], C = _.intl.formatToPlainString(_.t.ewkaVV, {
    timeMilestone: null == (t = (0, m.q)(E.id, E.tenureReqNumMonths)) ? true : t.toLocaleLowerCase()
  }), O = [{
    text: _.intl.string(_.t.RzWDqa),
    variant: "primary",
    onClick: g
  }];
  return (0, i.jsx)(l.J, {
    targetElementRef: a,
    onRequestClose: j,
    shouldShow: o,
    caretConfig: {
      position: "bottom",
      align: "center"
    },
    graphic: null != p ? {
      type: "image",
      src: p,
      aspectRatio: "6/4"
    } : true,
    size: "lg",
    title: _.intl.string(_.t.VoDxsb),
    body: C,
    actions: O
  })
}