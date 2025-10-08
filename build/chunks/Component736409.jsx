/** Chunk was on 69310 **/
/** chunk id: 736409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk7093 = require("./7093.js"),
  Chunk667105 = require("./667105.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk819640 = require("./819640.js"),
  Chunk885110 = require("./885110.js"),
  Chunk626135 = require("./626135.js"),
  Chunk316496 = require("./316496.js"),
  Chunk55185 = require("./55185.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk46140 = require("./46140.js");
let y = e => {
  let {
    children: t,
    isForceShowSharingPopout: n,
    setIsForceShowSharingPopout: y,
    popoutTargetRef: O
  } = e, v = function(e) {
    let {
      isForceShowSharingPopout: t
    } = e, {
      isEnabled: n,
      showActivitySharingIndicatorWhenSharing: r
    } = (0, f.D)("SharingPrivacyPopout"), {
      isQuestBarEmpty: i,
      hasLoadedQuestBar: o
    } = (0, c.Ws)({
      location: _.dr.CONFLICT_CHECKS
    }), a = u.G6.useSetting(), h = (0, l.e7)([d.Z], () => d.Z.getLayers().includes(m.S9g.USER_SETTINGS)), b = (0, l.e7)([p.Z], () => p.Z.getStatus()), {
      isOpen: y
    } = (0, s.Z)();
    if ((i && o || t) && !h && !y && !__OVERLAY__ && n) {
      if (r && a && b !== m.Skl.INVISIBLE) return t ? g.NK.Activity : null;
      if (!a && b === m.Skl.INVISIBLE) return t ? g.NK.ActivityAndStatus : g.NK.ActivityAndStatusNux;
      if (!a) return t ? g.NK.Activity : g.NK.ActivityNux;
      if (b === m.Skl.INVISIBLE) return t ? g.NK.Status : g.NK.StatusNux
    }
    return null
  }({
    isForceShowSharingPopout: n
  });
  (0, i.useEffect)(() => {
    n && h.default.track(m.rMx.OPEN_POPOUT, {
      type: "SharingPrivacyPopout"
    })
  }, [n]);
  let j = n ? [] : [o.z.SHARE_ACTIVITY_COACHMARK_V2];
  return (0, r.jsx)(a.ZP, {
    contentTypes: j,
    children: e => {
      let {
        visibleContent: i,
        markAsDismissed: l
      } = e, a = i === o.z.SHARE_ACTIVITY_COACHMARK_V2 || n;
      return (0, r.jsx)(g.I, {
        showPopout: a,
        popoutState: v,
        handleClose: () => {
          l(b.L.USER_DISMISS), y(false)
        },
        popoutTargetRef: O,
        children: t
      })
    }
  })
}