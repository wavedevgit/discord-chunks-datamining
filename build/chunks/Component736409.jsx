/** Chunk was on 71832 **/
/** chunk id: 736409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk266454 = require("./266454.js"),
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
let j = e => {
  let {
    children: t,
    isForceShowSharingPopout: n,
    setIsForceShowSharingPopout: j
  } = e, [v, x] = (0, i.useState)(false), C = function(e) {
    let {
      isForceShowSharingPopout: t
    } = e, {
      isEnabled: n,
      showActivitySharingIndicatorWhenSharing: r
    } = (0, m.D)("SharingPrivacyPopout"), {
      isQuestBarEmpty: i,
      hasLoadedQuestBar: o
    } = (0, d.Ws)({
      location: _.dr.CONFLICT_CHECKS
    }), a = p.G6.useSetting(), s = (0, l.e7)([f.Z], () => f.Z.getLayers().includes(O.S9g.USER_SETTINGS)), c = (0, l.e7)([h.Z], () => h.Z.getStatus()), {
      isOpen: g
    } = (0, u.Z)();
    if ((i && o || t) && !s && !g && !__OVERLAY__ && n) {
      if (r && a && c !== O.Skl.INVISIBLE) return t ? b.N.Activity : null;
      if (!a && c === O.Skl.INVISIBLE) return t ? b.N.ActivityAndStatus : b.N.ActivityAndStatusNux;
      if (!a) return t ? b.N.Activity : b.N.ActivityNux;
      if (c === O.Skl.INVISIBLE) return t ? b.N.Status : b.N.StatusNux
    }
    return null
  }({
    isForceShowSharingPopout: n
  }), E = (0, i.useRef)(null);
  return ((0, i.useEffect)(() => {
    n && g.default.track(O.rMx.OPEN_POPOUT, {
      type: "SharingPrivacyPopout"
    })
  }, [n]), null != C || v) ? (0, r.jsx)(c.ZP, {
    contentTypes: n ? [] : [o.z.SHARE_ACTIVITY_COACHMARK_V2],
    children: e => {
      let {
        visibleContent: i
      } = e;
      if (i === o.z.SHARE_ACTIVITY_COACHMARK_V2 || n) {
        let e = () => {
          (0, s.Q3)(o.z.SHARE_ACTIVITY_COACHMARK_V2, {
            dismissAction: y.L.USER_DISMISS
          }), j(false), x(false)
        };
        return (0, r.jsx)(a.yRy, {
          targetElementRef: E,
          shouldShow: true,
          spacing: 10,
          position: "top",
          align: "left",
          onRequestClose: e,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, r.jsx)(b.I, {
              closePopout: t,
              onOpen: () => x(true),
              popoutState: C
            })
          },
          children: () => (0, r.jsx)(a.P3F, {
            innerRef: E,
            onClick: e,
            children: t
          })
        })
      }
      return t
    }
  }) : t
}