/** Chunk was on web.js **/
/** chunk id: 721037, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk519938 = require("./519938.js"),
  Chunk317381 = require("./317381.js"),
  Chunk988980 = require("./988980.js"),
  Chunk16609 = require("./16609.js"),
  Chunk917107 = require("./917107.js"),
  Chunk866885 = require("./866885.jsx"),
  Chunk358221 = require("./358221.js"),
  Chunk677601 = require("./677601.jsx"),
  Chunk950796 = require("./950796.jsx"),
  Chunk591472 = require("./591472.js"),
  Chunk857096 = require("./857096.jsx"),
  Chunk241915 = require("./241915.jsx"),
  Chunk522501 = require("./522501.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk928518 = require("./928518.js"),
  Chunk819439 = require("./819439.js"),
  Chunk210887 = require("./210887.js"),
  Chunk740492 = require("./740492.js"),
  Chunk442917 = require("./442917.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk366050 = require("./366050.js"),
  Chunk944486 = require("./944486.js"),
  Chunk451478 = require("./451478.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js"),
  Chunk918559 = require("./918559.js"),
  Chunk354459 = require("./354459.js"),
  Chunk408491 = require("./408491.js"),
  Chunk639965 = require("./639965.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let j = {
    [Chunk981631.NYg.VIDEO]: Chunk442917.Z,
    [Chunk981631.NYg.ACTIVITY]: Chunk866885.Z,
    [Chunk981631.NYg.FRAME]: Chunk857096.Z
  },
  k = {
    minWidth: Chunk354459.Rv[Chunk354459.cL.VIDEO],
    maxWidth: Chunk354459.$i[Chunk354459.cL.VIDEO]
  },
  U = [];
class G extends Chunk73800.PureComponent {
  render() {
    let {
      selectedPIPWindow: e,
      pipWindows: t,
      pipWidth: n,
      maxX: i,
      maxY: o,
      theme: a,
      dockedRect: s,
      appContext: l,
      roundCorners: c,
      getDockedRectPositionY: u,
      windowSize: d,
      inPopoutWindow: f,
      activityPIPWindow: p,
      chatOpen: h,
      callChatSidebarWidth: m
    } = this.props, b = document.body.style.getPropertyValue("--custom-guild-sidebar-width"), y = "" !== Chunk238246 ? parseInt(Chunk238246, 10) : Chunk981631.PrS, O = Chunk866885.width - Chunk928518 - (Chunk591472 ? Chunk857096 : 0), v = null != Chunk950796, I = !Chunk358221 && Chunk210887 && Chunk591472 && Chunk819439 < Chunk677601.o;
    return (0, Chunk255367.jsxs)(Chunk522501._X, {
      children: [(0, Chunk255367.jsx)(Chunk241915.Z, {
        pictureInPictureComponents: j,
        selectedPIPWindow: module,
        pipWindows: exports,
        pipWidth: require,
        maxX: Chunk73800,
        maxY: Chunk442837,
        dockedRect: Chunk317381,
        theme: Chunk519938,
        onWindowMove: this.handleWindowMove,
        onWindowResize: this.handleWindowResize,
        appContext: Chunk988980,
        roundCorners: Chunk16609,
        resizeConfig: k,
        getDockedRectPositionY: Chunk917107
      }), (0, Chunk255367.jsx)(Chunk522501.mK, {
        className: Chunk740492 ? Chunk639965.belowSidebar : true
      })]
    })
  }
  constructor(...e) {
    super(...e), M(this, "handleWindowMove", (e, t) => {
      a.Ao(e, t)
    }), M(this, "handleWindowResize", e => {
      a.d7(e, D.cL.VIDEO)
    })
  }
}
let B = Chunk442837.ZP.connectStores([Chunk928518.Z, Chunk317381.ZP, Chunk451478.Z, Chunk210887.Z, Chunk592125.Z, Chunk944486.Z, Chunk366050.Z, Chunk358221.Z, Chunk740492.ZP, Chunk591472.Z], e => {
  var t, n, r, i, o, a, d;
  let _, {
      popoutWindowKey: m,
      popoutWindowHasTitleBar: g = false
    } = e,
    E = y.Z.getWindowOpen(P.KJ3.CHANNEL_CALL_POPOUT),
    T = y.Z.getWindowOpen(P.KJ3.ACTIVITY_POPOUT),
    x = s.ZP.getCurrentEmbeddedActivity(),
    M = (0, c.p)(null == x ? true : x.location),
    j = null != x && !(0, u.Z)(M, S.Z, N.Z),
    k = s.ZP.getActivityPanelMode(),
    G = j && k === w.Ez.PANEL,
    B = null != x && null != M && (null == (t = f.Z.getSelectedParticipant(M)) ? true : t.type) === D.fO.ACTIVITY,
    Z = h.Z.getConnectedFrame(),
    F = h.Z.getFrameLayoutMode() === L.U.FOCUSED,
    V = null != m,
    H = V ? y.Z.getWindow(m) : null,
    Y = !!V && y.Z.isWindowFullScreen(m),
    W = C.Z.windowSize();
  V && (W = null == H ? W : {
    width: H.innerWidth,
    height: H.innerHeight
  });
  let K = V ? P.IlC.POPOUT : P.IlC.APP,
    z = e => {
      if (V && (0, b.Y)({
          withTitleBar: g,
          isFullScreen: Y
        })) {
        let t = (0, O.Q)({
          location: "PictureInPicture"
        });
        return e - (0, p.Y7)({
          isPopoutWindow: V,
          isSearchDesktopTopLevelEnabled: t
        })
      }
      return e
    };
  _ = null != x && T || V && j ? null : V || !E || j ? null != x && G ? null != (n = A.Z.pipActivityWindow) ? n : A.Z.pipVideoWindow : null != Z && F ? null != (i = null != (r = A.Z.pipFrameWindow) ? r : A.Z.pipVideoWindow) ? i : A.Z.pipActivityWindow : null != (a = null != (o = A.Z.pipVideoWindow) ? o : A.Z.pipActivityWindow) ? a : A.Z.pipFrameWindow : null;
  let q = Array.from(A.Z.pipWindows.values()),
    X = A.Z.pipWidth(D.cL.VIDEO),
    Q = q.find(e => e.component === P.NYg.VIDEO),
    J = q.find(e => e.component === P.NYg.ACTIVITY),
    $ = [Q, J, q.find(e => e.component === P.NYg.FRAME)].filter(R.lm),
    ee = I.ZP.callChatSidebarWidth,
    et = N.Z.getVoiceChannelId(),
    en = N.Z.getChannelId() === et,
    er = null != et && f.Z.getChatOpen(et),
    ei = G || B,
    eo = ei && null != x && (0, l.q)(x.applicationId),
    ea = !ei && null != _ && en && er;
  return {
    selectedPIPWindow: _,
    pipWindows: 0 === $.length ? U : $,
    pipWidth: X,
    maxX: W.width - (ea ? ee : 0),
    maxY: W.height,
    theme: v.Z.theme,
    dockedRect: A.Z.getDockedRect(null != (d = null == _ ? true : _.id) ? d : ""),
    getDockedRectPositionY: z,
    appContext: K,
    roundCorners: !eo,
    windowSize: W,
    inPopoutWindow: V,
    activityPIPWindow: J,
    chatOpen: er,
    callChatSidebarWidth: ee
  }
})(G)