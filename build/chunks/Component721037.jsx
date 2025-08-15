/** Chunk was on web.js **/
/** chunk id: 721037, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk519938 = require("./519938.js"),
  Chunk317381 = require("./317381.js"),
  Chunk988980 = require("./988980.js"),
  Chunk16609 = require("./16609.js"),
  Chunk917107 = require("./917107.js"),
  Chunk866885 = require("./866885.jsx"),
  Chunk358221 = require("./358221.js"),
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

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let M = {
    [Chunk981631.NYg.VIDEO]: Chunk442917.Z,
    [Chunk981631.NYg.ACTIVITY]: Chunk866885.Z,
    [Chunk981631.NYg.FRAME]: Chunk857096.Z
  },
  k = {
    minWidth: Chunk354459.Rv[Chunk354459.cL.VIDEO],
    maxWidth: Chunk354459.$i[Chunk354459.cL.VIDEO]
  },
  j = [];
class U extends Chunk647438.PureComponent {
  render() {
    let {
      selectedPIPWindow: e,
      pipWindows: t,
      pipWidth: n,
      maxX: i,
      maxY: a,
      theme: o,
      dockedRect: s,
      appContext: l,
      roundCorners: c,
      getDockedRectPositionY: u,
      windowSize: d,
      inPopoutWindow: f,
      activityPIPWindow: _,
      chatOpen: p,
      callChatSidebarWidth: h
    } = this.props, E = document.body.style.getPropertyValue("--custom-guild-sidebar-width"), b = "" !== Chunk238246 ? parseInt(Chunk238246, 10) : Chunk981631.PrS, y = Chunk866885.width - Chunk928518 - (Chunk591472 ? Chunk857096 : 0), O = null != Chunk950796, v = !Chunk358221 && Chunk210887 && Chunk591472 && Chunk819439 < Chunk354459.oo;
    return (0, Chunk951288.jsxs)(Chunk522501._X, {
      children: [(0, Chunk951288.jsx)(Chunk241915.Z, {
        pictureInPictureComponents: M,
        selectedPIPWindow: module,
        pipWindows: exports,
        pipWidth: require,
        maxX: Chunk647438,
        maxY: Chunk442837,
        dockedRect: Chunk317381,
        theme: Chunk519938,
        onWindowMove: this.handleWindowMove,
        onWindowResize: this.handleWindowResize,
        appContext: Chunk988980,
        roundCorners: Chunk16609,
        resizeConfig: k,
        getDockedRectPositionY: Chunk917107
      }), (0, Chunk951288.jsx)(Chunk522501.mK, {
        className: Chunk740492 ? Chunk639965.belowSidebar : true
      })]
    })
  }
  constructor(...e) {
    super(...e), x(this, "handleWindowMove", (e, t) => {
      o.Ao(e, t)
    }), x(this, "handleWindowResize", e => {
      o.d7(e, w.cL.VIDEO)
    })
  }
}
let G = Chunk442837.ZP.connectStores([Chunk928518.Z, Chunk317381.ZP, Chunk451478.Z, Chunk210887.Z, Chunk592125.Z, Chunk944486.Z, Chunk366050.Z, Chunk358221.Z, Chunk740492.ZP, Chunk591472.Z], e => {
  var t, n, r, i, a, o, d;
  let h, {
      popoutWindowKey: m,
      popoutWindowHasTitleBar: g = false
    } = e,
    I = b.Z.getWindowOpen(R.KJ3.CHANNEL_CALL_POPOUT),
    L = b.Z.getWindowOpen(R.KJ3.ACTIVITY_POPOUT),
    x = s.ZP.getCurrentEmbeddedActivity(),
    M = (0, c.p)(null == x ? true : x.location),
    k = null != x && !(0, u.Z)(M, T.Z, A.Z),
    U = s.ZP.getActivityPanelMode(),
    G = k && U === P.Ez.PANEL,
    B = null != x && null != M && (null == (t = f.Z.getSelectedParticipant(M)) ? true : t.type) === w.fO.ACTIVITY,
    V = p.Z.getConnectedFrame(),
    F = p.Z.getFrameLayoutMode() === D.U.FOCUSED,
    Z = null != m,
    H = Z ? b.Z.getWindow(m) : null,
    Y = !!Z && b.Z.isWindowFullScreen(m),
    W = N.Z.windowSize();
  Z && (W = null == H ? W : {
    width: H.innerWidth,
    height: H.innerHeight
  });
  let K = Z ? R.IlC.POPOUT : R.IlC.APP,
    z = e => {
      if (Z && (0, E.Y)({
          withTitleBar: g,
          isFullScreen: Y
        })) {
        let t = (0, y.Q)({
          location: "PictureInPicture"
        });
        return e - (0, _.Y7)({
          isPopoutWindow: Z,
          isSearchDesktopTopLevelEnabled: t
        })
      }
      return e
    };
  h = null != x && L || Z && k ? null : Z || !I || k ? null != x && G ? null != (n = S.Z.pipActivityWindow) ? n : S.Z.pipVideoWindow : null != V && F ? null != (i = null != (r = S.Z.pipFrameWindow) ? r : S.Z.pipVideoWindow) ? i : S.Z.pipActivityWindow : null != (o = null != (a = S.Z.pipVideoWindow) ? a : S.Z.pipActivityWindow) ? o : S.Z.pipFrameWindow : null;
  let q = Array.from(S.Z.pipWindows.values()),
    X = S.Z.pipWidth(w.cL.VIDEO),
    Q = q.find(e => e.component === R.NYg.VIDEO),
    J = q.find(e => e.component === R.NYg.ACTIVITY),
    $ = [Q, J, q.find(e => e.component === R.NYg.FRAME)].filter(C.lm),
    ee = v.ZP.callChatSidebarWidth,
    et = A.Z.getVoiceChannelId(),
    en = A.Z.getChannelId() === et,
    er = null != et && f.Z.getChatOpen(et),
    ei = G || B,
    ea = ei && null != x && (0, l.q)(x.applicationId),
    eo = !ei && null != h && en && er;
  return {
    selectedPIPWindow: h,
    pipWindows: 0 === $.length ? j : $,
    pipWidth: X,
    maxX: W.width - (eo ? ee : 0),
    maxY: W.height,
    theme: O.Z.theme,
    dockedRect: S.Z.getDockedRect(null != (d = null == h ? true : h.id) ? d : ""),
    getDockedRectPositionY: z,
    appContext: K,
    roundCorners: !ea,
    windowSize: W,
    inPopoutWindow: Z,
    activityPIPWindow: J,
    chatOpen: er,
    callChatSidebarWidth: ee
  }
})(U)