/** Chunk was on 66181 **/
/** chunk id: 562705, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk920155 = require("./920155.jsx"),
  Chunk744399 = require("./744399.jsx"),
  Chunk454028 = require("./454028.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk237872 = require("./237872.jsx"),
  Chunk562618 = require("./562618.jsx"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk30083 = require("./30083.js");

function T(e) {
  let {
    groupName: t,
    targetElementRef: n
  } = e, r = (0, _.Z)(), l = (0, x.Z)({
    location: "TenureLevelUpPopover"
  }), o = (0, g.Z)(e => e.isOpen), c = (0, s.e7)([h.Z], () => h.Z.getLayers().includes(C.S9g.USER_SETTINGS));
  return !l || null == r || o || c ? null : (0, i.jsx)(p.Nq, {
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
      return (0, i.jsx)(N, {
        recentlyLeveledTenureBadge: r,
        markAsDismissed: s,
        targetElementRef: n,
        shouldShow: t === a.z.NITRO_TENURE_BADGE_LEVEL_UP
      })
    }
  })
}

function N(e) {
  var t;
  let {
    recentlyLeveledTenureBadge: n,
    markAsDismissed: s,
    targetElementRef: a,
    shouldShow: p
  } = e, h = E.Qh.indexOf(n), x = (0, j.J)(E.Qh[h > 0 ? h - 1 : h], {
    ambient: true
  }), _ = (0, r.useCallback)(() => {
    s(O.L.TAKE_ACTION), g.Z.setState({
      shouldRenderTenureLevelUp: true
    }), f.S.dispatch(C.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {})
  }, [s]), T = (0, r.useCallback)(() => {
    s(O.L.USER_DISMISS)
  }, [s]), N = E.vK[n], I = v.intl.formatToPlainString(v.t.ewkaVV, {
    timeMilestone: null == (t = (0, b.q)(N.id, N.tenureReqNumMonths)) ? true : t.toLocaleLowerCase()
  }), y = {
    position: "bottom",
    align: "center"
  }, A = [{
    text: v.intl.string(v.t.RzWDqa),
    variant: "primary",
    onClick: _
  }];
  return (0, i.jsx)(l.m, {
    targetElementRef: a,
    shouldShow: p,
    caretConfig: y,
    children: (0, i.jsxs)("div", {
      children: [(0, i.jsx)(u.u, {
        onClick: T
      }), null != x ? (0, i.jsx)(c.V, {
        asset: (0, i.jsx)("img", {
          src: x,
          alt: v.intl.string(N.nameUnformatted),
          className: S.badgeImage
        }),
        size: "md"
      }) : null, (0, i.jsx)(m.Y, {
        title: v.intl.string(v.t.VoDxsb),
        body: I,
        hasBottomMargin: true
      }), (0, i.jsx)(o.k, {
        actions: A
      }), (0, i.jsx)(d.$, {
        caretConfig: y
      })]
    })
  })
}