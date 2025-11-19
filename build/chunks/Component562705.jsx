/** Chunk was on 65347 **/
/** chunk id: 562705, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function j(e) {
  let {
    groupName: t,
    targetElementRef: n
  } = e, l = (0, h.Z)(), s = (0, i.e7)([o.Z], () => o.Z.useReducedMotion), m = (0, d.Z)(e => e.isOpen), p = (0, i.e7)([u.Z], () => u.Z.getLayers().includes(f.S9g.USER_SETTINGS));
  return s || null == l || m || p ? null : (0, a.jsx)(c.Nq, {
    contentType: r.z.NITRO_TENURE_BADGE_LEVEL_UP,
    timeRecurringConfig: {
      cooldownDurationMs: 12096e5
    },
    groupName: t,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e;
      return (0, a.jsx)(_, {
        recentlyLeveledTenureBadge: l,
        markAsDismissed: i,
        targetElementRef: n,
        shouldShow: t === r.z.NITRO_TENURE_BADGE_LEVEL_UP
      })
    }
  })
}

function _(e) {
  var t;
  let {
    recentlyLeveledTenureBadge: n,
    markAsDismissed: i,
    targetElementRef: r,
    shouldShow: o
  } = e, c = g.Qh.indexOf(n), u = (0, x.J)(g.Qh[c > 0 ? c - 1 : c], {
    ambient: true
  }), h = (0, l.useCallback)(() => {
    i(b.L.TAKE_ACTION), d.Z.setState({
      shouldRenderTenureLevelUp: true
    }), m.S.dispatch(f.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {})
  }, [i]), j = (0, l.useCallback)(() => {
    i(b.L.USER_DISMISS)
  }, [i]), _ = g.vK[n], y = v.intl.formatToPlainString(v.t.ewkaVR, {
    timeMilestone: null == (t = (0, p.q)(_.id, _.tenureReqNumMonths)) ? true : t.toLocaleLowerCase()
  }), C = [{
    text: v.intl.string(v.t.RzWDqY),
    variant: "primary",
    onClick: h
  }];
  return (0, a.jsx)(s.J, {
    targetElementRef: r,
    onRequestClose: j,
    shouldShow: o,
    caretConfig: {
      align: "center"
    },
    graphic: null != u ? {
      type: "image",
      src: u,
      aspectRatio: "6/4"
    } : true,
    size: "lg",
    title: v.intl.string(v.t.VoDxsV),
    body: y,
    actions: C
  })
}