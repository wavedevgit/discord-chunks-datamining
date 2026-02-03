/** Chunk was on 44669 **/
/** chunk id: 576437, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk832248 = require("./832248.js"),
  Chunk201805 = require("./201805.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk995377 = require("./995377.js"),
  Chunk461213 = require("./461213.js"),
  Chunk954571 = require("./954571.js"),
  Chunk130802 = require("./130802.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk654487 = require("./654487.js");
let A = e => {
  let {
    children: t,
    isForceShowSharingPopout: n,
    setIsForceShowSharingPopout: A,
    popoutTargetRef: y
  } = e, O = function(e) {
    let {
      isForceShowSharingPopout: t
    } = e, {
      isQuestBarEmpty: n,
      hasLoadedQuestBar: r
    } = (0, c.c9)({
      location: b.rE.CONFLICT_CHECKS
    }), l = u.tz.useSetting(), s = (0, d.G)(), a = (0, i.bG)([p.A], () => p.A.getStatus()), {
      isOpen: h
    } = (0, o.A)();
    if ((n && r || t) && !s && !h && !__OVERLAY__) {
      if (!l && a === f.clD.INVISIBLE) return t ? g.u5.ActivityAndStatus : g.u5.ActivityAndStatusNux;
      if (!l) return t ? g.u5.Activity : g.u5.ActivityNux;
      if (a === f.clD.INVISIBLE) return t ? g.u5.Status : g.u5.StatusNux
    }
    return null
  }({
    isForceShowSharingPopout: n
  });
  (0, l.useEffect)(() => {
    n && h.default.track(f.HAw.OPEN_POPOUT, {
      type: "SharingPrivacyPopout"
    })
  }, [n]);
  let j = n ? [] : [s.M.SHARE_ACTIVITY_COACHMARK_V2];
  return (0, r.jsx)(a.Ay, {
    contentTypes: j,
    children: e => {
      let {
        visibleContent: l,
        markAsDismissed: i
      } = e, a = l === s.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
      return (0, r.jsx)(g.zd, {
        showPopout: a,
        popoutState: O,
        handleClose: () => {
          i(m.i.USER_DISMISS), A(false)
        },
        popoutTargetRef: y,
        children: t
      })
    }
  })
}