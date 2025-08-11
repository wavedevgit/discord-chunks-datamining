/** Chunk was on 75708 **/
/** chunk id: 210308, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk669018 = require("./669018.js");

function C(e) {
  let {
    groupName: t,
    targetElementRef: n
  } = e, r = (0, h.Z)(), l = (0, g.Z)({
    location: "TenureLevelUpCoachmark"
  }), m = (0, d.Z)(e => e.isOpen), p = (0, s.e7)([u.Z], () => u.Z.getLayers().includes(x.S9g.USER_SETTINGS));
  return !l || null == r || m || p ? null : (0, i.jsx)(c.Nq, {
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
      return (0, i.jsx)(o.yRy, {
        shouldShow: t === a.z.NITRO_TENURE_BADGE_LEVEL_UP,
        position: "top",
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, i.jsx)(O, {
            recentlyLeveledTenureBadge: r,
            markAsDismissed: s,
            closePopout: t
          })
        },
        targetElementRef: n,
        children: () => null
      })
    }
  })
}

function O(e) {
  var t;
  let {
    recentlyLeveledTenureBadge: n,
    markAsDismissed: s,
    closePopout: a
  } = e, c = b.Qh.indexOf(n), u = (0, f.J)(b.Qh[c > 0 ? c - 1 : c], {
    ambient: true
  }), g = (0, r.useCallback)(() => {
    s(_.L.TAKE_ACTION), a(), d.Z.setState({
      shouldRenderTenureLevelUp: true
    }), m.S.dispatch(x.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {})
  }, [s, a]), h = (0, r.useCallback)(() => {
    s(_.L.USER_DISMISS), a()
  }, [s, a]), C = b.vK[n];
  return (0, i.jsxs)("div", {
    className: E.contents,
    children: [(0, i.jsx)(o.M0o, {
      className: E.closeButton,
      tooltip: j.intl.string(j.t.cpT0Cg),
      color: o.YX$.TERTIARY,
      size: o.tT7.SIZE_24,
      icon: (0, i.jsx)(o.Dio, {
        size: "xs",
        color: "currentColor"
      }),
      onClick: h
    }), null != u && (0, i.jsx)("img", {
      src: u,
      alt: j.intl.string(C.nameUnformatted),
      className: E.badgeImage
    }), (0, i.jsx)(o.X6q, {
      variant: "heading-md/extrabold",
      children: j.intl.string(j.t.VoDxsb)
    }), (0, i.jsx)(o.Text, {
      variant: "text-sm/medium",
      className: E.subtitle,
      children: j.intl.formatToPlainString(j.t.ewkaVV, {
        timeMilestone: null == (t = (0, p.q)(C.id, C.tenureReqNumMonths)) ? true : t.toLocaleLowerCase()
      })
    }), (0, i.jsx)(l.zx, {
      className: E.checkItOutButton,
      color: l.Tt.WHITE,
      size: l.Ph.SMALL,
      onClick: g,
      children: j.intl.string(j.t.RzWDqa)
    }), (0, i.jsx)("div", {
      className: E.pointer
    })]
  })
}