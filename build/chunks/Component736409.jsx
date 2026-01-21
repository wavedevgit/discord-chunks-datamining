/** Chunk was on 82124 **/
/** chunk id: 736409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk7093 = require("./7093.js"),
  Chunk659302 = require("./659302.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk819640 = require("./819640.js"),
  Chunk885110 = require("./885110.js"),
  Chunk626135 = require("./626135.js"),
  Chunk55185 = require("./55185.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk324805 = require("./324805.js");
let y = e => {
  let {
    children: t,
    isForceShowSharingPopout: n,
    setIsForceShowSharingPopout: y,
    popoutTargetRef: v
  } = e, O = function(e) {
    let {
      isForceShowSharingPopout: t
    } = e, {
      isQuestBarEmpty: n,
      hasLoadedQuestBar: r
    } = (0, c.Ws)({
      location: b.dr.CONFLICT_CHECKS
    }), i = u.G6.useSetting(), a = (0, l.e7)([d.Z], () => d.Z.getLayers().includes(g.S9g.USER_SETTINGS)), o = (0, l.e7)([p.Z], () => p.Z.getStatus()), {
      isOpen: f
    } = (0, s.Z)();
    if ((n && r || t) && !a && !f && !__OVERLAY__) {
      if (!i && o === g.Skl.INVISIBLE) return t ? h.NK.ActivityAndStatus : h.NK.ActivityAndStatusNux;
      if (!i) return t ? h.NK.Activity : h.NK.ActivityNux;
      if (o === g.Skl.INVISIBLE) return t ? h.NK.Status : h.NK.StatusNux
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
  let j = n ? [] : [a.z.SHARE_ACTIVITY_COACHMARK_V2];
  return (0, r.jsx)(o.ZP, {
    contentTypes: j,
    children: e => {
      let {
        visibleContent: i,
        markAsDismissed: l
      } = e, o = i === a.z.SHARE_ACTIVITY_COACHMARK_V2 || n;
      return (0, r.jsx)(h.I, {
        showPopout: o,
        popoutState: O,
        handleClose: () => {
          l(m.L.USER_DISMISS), y(false)
        },
        popoutTargetRef: v,
        children: t
      })
    }
  })
}