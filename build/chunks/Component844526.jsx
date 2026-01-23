/** Chunk was on 22477 **/
/** chunk id: 844526, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk43105 = require("./43105.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk832248 = require("./832248.js"),
  Chunk186111 = require("./186111.js"),
  Chunk203982 = require("./203982.js"),
  Chunk764231 = require("./764231.js"),
  Chunk881141 = require("./881141.js"),
  Chunk149757 = require("./149757.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx");

function j(e) {
  let {
    groupName: t,
    targetElementRef: n
  } = e, l = (0, h.A)(), s = (0, r.bG)([o.A], () => o.A.useReducedMotion), m = (0, d.A)(e => e.isOpen), p = (0, r.bG)([u.A], () => u.A.getLayers().includes(f.zgK.USER_SETTINGS));
  return s || null == l || m || p ? null : (0, a.jsx)(c.zJ, {
    contentType: i.M.NITRO_TENURE_BADGE_LEVEL_UP,
    timeRecurringConfig: {
      cooldownDurationMs: 12096e5
    },
    groupName: t,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: r
      } = e;
      return (0, a.jsx)(_, {
        recentlyLeveledTenureBadge: l,
        markAsDismissed: r,
        targetElementRef: n,
        shouldShow: t === i.M.NITRO_TENURE_BADGE_LEVEL_UP
      })
    }
  })
}

function _(e) {
  var t;
  let {
    recentlyLeveledTenureBadge: n,
    markAsDismissed: r,
    targetElementRef: i,
    shouldShow: o
  } = e, c = g.sp.indexOf(n), u = (0, x.I)(g.sp[c > 0 ? c - 1 : c], {
    ambient: true
  }), h = (0, l.useCallback)(() => {
    r(b.i.TAKE_ACTION), d.A.setState({
      shouldRenderTenureLevelUp: true
    }), m._.dispatch(f.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {})
  }, [r]), j = (0, l.useCallback)(() => {
    r(b.i.USER_DISMISS)
  }, [r]), _ = g.VD[n], y = v.intl.formatToPlainString(v.t.ewkaVR, {
    timeMilestone: null == (t = (0, p.T)(_.id, _.tenureReqNumMonths)) ? true : t.toLocaleLowerCase()
  }), A = [{
    text: v.intl.string(v.t.RzWDqY),
    variant: "primary",
    onClick: h
  }];
  return (0, a.jsx)(s.A, {
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
    body: y,
    actions: A
  })
}