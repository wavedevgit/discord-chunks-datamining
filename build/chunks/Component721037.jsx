/** Chunk was on web.js **/
/** chunk id: 721037, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let x = {
    [Chunk981631.NYg.VIDEO]: Chunk442917.Z,
    [Chunk981631.NYg.ACTIVITY]: Chunk866885.Z,
    [Chunk981631.NYg.FRAME]: Chunk857096.Z
  },
  M = {
    minWidth: Chunk354459.Rv[Chunk354459.cL.VIDEO],
    maxWidth: Chunk354459.$i[Chunk354459.cL.VIDEO]
  },
  k = [];
class j extends Chunk473749.PureComponent {
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
    } = this.props, E = document.body.style.getPropertyValue("--custom-guild-sidebar-width"), b = "" !== Chunk238246 ? parseInt(Chunk238246, 10) : Chunk981631.PrS, y = Chunk866885.width - Chunk928518 - (Chunk591472 ? Chunk857096 : 0), O = null != Chunk950796, v = !Chunk358221 && Chunk740492 && Chunk591472 && Chunk210887 < Chunk354459.oo;
    return (0, Chunk54381.jsxs)(Chunk522501._X, {
      children: [(0, Chunk54381.jsx)(Chunk241915.Z, {
        pictureInPictureComponents: x,
        selectedPIPWindow: module,
        pipWindows: exports,
        pipWidth: require,
        maxX: Chunk473749,
        maxY: Chunk442837,
        dockedRect: Chunk317381,
        theme: Chunk519938,
        onWindowMove: this.handleWindowMove,
        onWindowResize: this.handleWindowResize,
        appContext: Chunk988980,
        roundCorners: Chunk16609,
        resizeConfig: M,
        getDockedRectPositionY: Chunk917107
      }), (0, Chunk54381.jsx)(Chunk522501.mK, {
        className: Chunk442917 ? Chunk639965.belowSidebar : true
      })]
    })
  }
  constructor(...e) {
    super(...e), L(this, "handleWindowMove", (e, t) => {
      o.Ao(e, t)
    }), L(this, "handleWindowResize", e => {
      o.d7(e, P.cL.VIDEO)
    })
  }
}
let U = Chunk442837.ZP.connectStores([Chunk928518.Z, Chunk317381.ZP, Chunk451478.Z, Chunk210887.Z, Chunk592125.Z, Chunk944486.Z, Chunk366050.Z, Chunk358221.Z, Chunk740492.ZP, Chunk591472.Z], e => {
  var t, n, r, i, a, o, d;
  let h, {
      popoutWindowKey: m,
      popoutWindowHasTitleBar: g = false
    } = e,
    v = b.Z.getWindowOpen(N.KJ3.CHANNEL_CALL_POPOUT),
    w = b.Z.getWindowOpen(N.KJ3.ACTIVITY_POPOUT),
    L = s.ZP.getCurrentEmbeddedActivity(),
    x = (0, c.p)(null == L ? true : L.location),
    M = null != L && !(0, u.Z)(x, I.Z, S.Z),
    j = s.ZP.getActivityPanelMode(),
    U = M && j === R.Ez.PANEL,
    G = null != L && null != x && (null == (t = f.Z.getSelectedParticipant(x)) ? true : t.type) === P.fO.ACTIVITY,
    B = p.Z.getConnectedFrame(),
    Z = p.Z.getFrameLayoutMode() === D.U.FOCUSED,
    F = null != m,
    V = F ? b.Z.getWindow(m) : null,
    H = !!F && b.Z.isWindowFullScreen(m),
    W = A.Z.windowSize();
  F && (W = null == V ? W : {
    width: V.innerWidth,
    height: V.innerHeight
  });
  let Y = F ? N.IlC.POPOUT : N.IlC.APP,
    K = e => F && (0, E.Y)({
      withTitleBar: g,
      isFullScreen: H
    }) ? e - (0, _.Y7)({
      isPopoutWindow: F
    }) : e;
  h = null != L && w || F && M || F && null != B ? null : F || !v || M || null != B ? null != L && U ? null != (n = T.Z.pipActivityWindow) ? n : T.Z.pipVideoWindow : null != B && Z ? null != (i = null != (r = T.Z.pipFrameWindow) ? r : T.Z.pipVideoWindow) ? i : T.Z.pipActivityWindow : null != (o = null != (a = T.Z.pipVideoWindow) ? a : T.Z.pipActivityWindow) ? o : T.Z.pipFrameWindow : null;
  let z = Array.from(T.Z.pipWindows.values()),
    q = T.Z.pipWidth(P.cL.VIDEO),
    X = z.find(e => e.component === N.NYg.VIDEO),
    Q = z.find(e => e.component === N.NYg.ACTIVITY),
    J = [X, Q, z.find(e => e.component === N.NYg.FRAME)].filter(C.lm),
    $ = O.ZP.callChatSidebarWidth,
    ee = S.Z.getVoiceChannelId(),
    et = S.Z.getChannelId() === ee,
    en = null != ee && f.Z.getChatOpen(ee),
    er = U || G,
    ei = er && null != L && (0, l.q)(L.applicationId),
    ea = !er && null != h && et && en;
  return {
    selectedPIPWindow: h,
    pipWindows: 0 === J.length ? k : J,
    pipWidth: q,
    maxX: W.width - (ea ? $ : 0),
    maxY: W.height,
    theme: y.Z.theme,
    dockedRect: T.Z.getDockedRect(null != (d = null == h ? true : h.id) ? d : ""),
    getDockedRectPositionY: K,
    appContext: Y,
    roundCorners: !ei,
    windowSize: W,
    inPopoutWindow: F,
    activityPIPWindow: Q,
    chatOpen: en,
    callChatSidebarWidth: $
  }
})(j)