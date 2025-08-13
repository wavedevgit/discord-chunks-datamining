/** Chunk was on 41753 **/
/** chunk id: 736409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let C = e => {
  let {
    children: t,
    isForceShowSharingPopout: n,
    setIsForceShowSharingPopout: C
  } = e, [v, j] = (0, i.useState)(false), E = function(e) {
    let {
      isForceShowSharingPopout: t
    } = e, {
      isEnabled: n,
      showActivitySharingIndicatorWhenSharing: r
    } = (0, m.D)("SharingPrivacyPopout"), i = (0, d.Ws)({
      location: y.dr.CONFLICT_CHECKS
    }), o = h.G6.useSetting(), s = (0, l.e7)([p.Z], () => p.Z.getLayers().includes(O.S9g.USER_SETTINGS)), a = (0, l.e7)([f.Z], () => f.Z.getStatus()), {
      isOpen: c
    } = (0, u.Z)();
    if ((i || !i && t) && !s && !c && !__OVERLAY__ && n) {
      if (r && o && a !== O.Skl.INVISIBLE) return t ? b.N.Activity : null;
      if (!o && a === O.Skl.INVISIBLE) return t ? b.N.ActivityAndStatus : b.N.ActivityAndStatusNux;
      if (!o) return t ? b.N.Activity : b.N.ActivityNux;
      if (a === O.Skl.INVISIBLE) return t ? b.N.Status : b.N.StatusNux
    }
    return null
  }({
    isForceShowSharingPopout: n
  }), S = (0, i.useRef)(null);
  return ((0, i.useEffect)(() => {
    n && g.default.track(O.rMx.OPEN_POPOUT, {
      type: "SharingPrivacyPopout"
    })
  }, [n]), null != E || v) ? (0, r.jsx)(c.ZP, {
    contentTypes: n ? [] : [o.z.SHARE_ACTIVITY_COACHMARK_V2],
    children: e => {
      let {
        visibleContent: i
      } = e;
      if (i === o.z.SHARE_ACTIVITY_COACHMARK_V2 || n) {
        let e = () => {
          (0, a.Q3)(o.z.SHARE_ACTIVITY_COACHMARK_V2, {
            dismissAction: _.L.USER_DISMISS
          }), C(false), j(false)
        };
        return (0, r.jsx)(s.yRy, {
          targetElementRef: S,
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
              onOpen: () => j(true),
              popoutState: E
            })
          },
          children: () => (0, r.jsx)(s.P3F, {
            innerRef: S,
            onClick: e,
            children: t
          })
        })
      }
      return t
    }
  }) : t
}