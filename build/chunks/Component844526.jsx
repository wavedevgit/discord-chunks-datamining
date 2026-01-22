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
  } = e, l = (0, h.A)(), s = (0, i.bG)([o.A], () => o.A.useReducedMotion), m = (0, d.A)(e => e.isOpen), p = (0, i.bG)([u.A], () => u.A.getLayers().includes(b.zgK.USER_SETTINGS));
  return s || null == l || m || p ? null : (0, a.jsx)(c.zJ, {
    contentType: r.M.NITRO_TENURE_BADGE_LEVEL_UP,
    timeRecurringConfig: {
      cooldownDurationMs: 12096e5
    },
    groupName: t,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e;
      return (0, a.jsx)(y, {
        recentlyLeveledTenureBadge: l,
        markAsDismissed: i,
        targetElementRef: n,
        shouldShow: t === r.M.NITRO_TENURE_BADGE_LEVEL_UP
      })
    }
  })
}

function y(e) {
  var t;
  let {
    recentlyLeveledTenureBadge: n,
    markAsDismissed: i,
    targetElementRef: r,
    shouldShow: o
  } = e, c = x.sp.indexOf(n), u = (0, f.I)(x.sp[c > 0 ? c - 1 : c], {
    ambient: true
  }), h = (0, l.useCallback)(() => {
    i(g.i.TAKE_ACTION), d.A.setState({
      shouldRenderTenureLevelUp: true
    }), m._.dispatch(b.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {})
  }, [i]), j = (0, l.useCallback)(() => {
    i(g.i.USER_DISMISS)
  }, [i]), y = x.VD[n], _ = v.intl.formatToPlainString(v.t.ewkaVR, {
    timeMilestone: null == (t = (0, p.T)(y.id, y.tenureReqNumMonths)) ? true : t.toLocaleLowerCase()
  }), A = [{
    text: v.intl.string(v.t.RzWDqY),
    variant: "primary",
    onClick: h
  }];
  return (0, a.jsx)(s.A, {
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
    body: _,
    actions: A
  })
}