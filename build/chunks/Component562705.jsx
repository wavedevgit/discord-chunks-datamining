/** Chunk was on 29725 **/
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
  } = e, r = (0, h.Z)(), s = (0, l.e7)([o.Z], () => o.Z.useReducedMotion), m = (0, d.Z)(e => e.isOpen), p = (0, l.e7)([u.Z], () => u.Z.getLayers().includes(b.S9g.USER_SETTINGS));
  return s || null == r || m || p ? null : (0, a.jsx)(c.Nq, {
    contentType: i.z.NITRO_TENURE_BADGE_LEVEL_UP,
    timeRecurringConfig: {
      cooldownDurationMs: 12096e5
    },
    groupName: t,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: l
      } = e;
      return (0, a.jsx)(y, {
        recentlyLeveledTenureBadge: r,
        markAsDismissed: l,
        targetElementRef: n,
        shouldShow: t === i.z.NITRO_TENURE_BADGE_LEVEL_UP
      })
    }
  })
}

function y(e) {
  var t;
  let {
    recentlyLeveledTenureBadge: n,
    markAsDismissed: l,
    targetElementRef: i,
    shouldShow: o
  } = e, c = x.Qh.indexOf(n), u = (0, f.J)(x.Qh[c > 0 ? c - 1 : c], {
    ambient: true
  }), h = (0, r.useCallback)(() => {
    l(g.L.TAKE_ACTION), d.Z.setState({
      shouldRenderTenureLevelUp: true
    }), m.S.dispatch(b.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {})
  }, [l]), j = (0, r.useCallback)(() => {
    l(g.L.USER_DISMISS)
  }, [l]), y = x.vK[n], C = v.intl.formatToPlainString(v.t.ewkaVR, {
    timeMilestone: null == (t = (0, p.q)(y.id, y.tenureReqNumMonths)) ? true : t.toLocaleLowerCase()
  }), _ = [{
    text: v.intl.string(v.t.RzWDqY),
    variant: "primary",
    onClick: h
  }];
  return (0, a.jsx)(s.J, {
    targetElementRef: i,
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
    body: C,
    actions: _
  })
}