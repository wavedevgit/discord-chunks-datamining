/** Chunk was on 97492 **/
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
  Chunk186111 = require("./186111.js"),
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
      location: m.rE.CONFLICT_CHECKS
    }), l = u.tz.useSetting(), a = (0, i.bG)([d.A], () => d.A.getLayers().includes(b.zgK.USER_SETTINGS)), s = (0, i.bG)([f.A], () => f.A.getStatus()), {
      isOpen: p
    } = (0, o.A)();
    if ((n && r || t) && !a && !p && !__OVERLAY__) {
      if (!l && s === b.clD.INVISIBLE) return t ? h.u5.ActivityAndStatus : h.u5.ActivityAndStatusNux;
      if (!l) return t ? h.u5.Activity : h.u5.ActivityNux;
      if (s === b.clD.INVISIBLE) return t ? h.u5.Status : h.u5.StatusNux
    }
    return null
  }({
    isForceShowSharingPopout: n
  });
  (0, l.useEffect)(() => {
    n && p.default.track(b.HAw.OPEN_POPOUT, {
      type: "SharingPrivacyPopout"
    })
  }, [n]);
  let j = n ? [] : [a.M.SHARE_ACTIVITY_COACHMARK_V2];
  return (0, r.jsx)(s.Ay, {
    contentTypes: j,
    children: e => {
      let {
        visibleContent: l,
        markAsDismissed: i
      } = e, s = l === a.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
      return (0, r.jsx)(h.zd, {
        showPopout: s,
        popoutState: O,
        handleClose: () => {
          i(g.i.USER_DISMISS), A(false)
        },
        popoutTargetRef: y,
        children: t
      })
    }
  })
}