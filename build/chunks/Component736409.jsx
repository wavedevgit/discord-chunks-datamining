/** Chunk was on 30437 **/
/** chunk id: 736409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => _
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
  Chunk55185 = require("./55185.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk46140 = require("./46140.js");
let _ = e => {
  let {
    children: t,
    isForceShowSharingPopout: n,
    setIsForceShowSharingPopout: _,
    popoutTargetRef: O
  } = e, y = function(e) {
    let {
      isForceShowSharingPopout: t
    } = e, {
      isQuestBarEmpty: n,
      hasLoadedQuestBar: r
    } = (0, c.Ws)({
      location: b.dr.CONFLICT_CHECKS
    }), i = u.G6.useSetting(), o = (0, l.e7)([d.Z], () => d.Z.getLayers().includes(g.S9g.USER_SETTINGS)), a = (0, l.e7)([p.Z], () => p.Z.getStatus()), {
      isOpen: f
    } = (0, s.Z)();
    if ((n && r || t) && !o && !f && !__OVERLAY__) {
      if (!i && a === g.Skl.INVISIBLE) return t ? h.NK.ActivityAndStatus : h.NK.ActivityAndStatusNux;
      if (!i) return t ? h.NK.Activity : h.NK.ActivityNux;
      if (a === g.Skl.INVISIBLE) return t ? h.NK.Status : h.NK.StatusNux
    }
    return null
  }({
    isForceShowSharingPopout: n
  });
  (0, i.useEffect)(() => {
    n && f.default.track(g.rMx.OPEN_POPOUT, {
      type: "SharingPrivacyPopout"
    })
  }, [n]);
  let v = n ? [] : [o.z.SHARE_ACTIVITY_COACHMARK_V2];
  return (0, r.jsx)(a.ZP, {
    contentTypes: v,
    children: e => {
      let {
        visibleContent: i,
        markAsDismissed: l
      } = e, a = i === o.z.SHARE_ACTIVITY_COACHMARK_V2 || n;
      return (0, r.jsx)(h.I, {
        showPopout: a,
        popoutState: y,
        handleClose: () => {
          l(m.L.USER_DISMISS), _(false)
        },
        popoutTargetRef: O,
        children: t
      })
    }
  })
}