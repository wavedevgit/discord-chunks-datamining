/** Chunk was on web.js **/
/** chunk id: 721037, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk519938 = require("./519938.js"),
  Chunk317381 = require("./317381.js"),
  Chunk988980 = require("./988980.js"),
  Chunk16609 = require("./16609.js"),
  Chunk917107 = require("./917107.js"),
  Chunk866885 = require("./866885.js"),
  Chunk358221 = require("./358221.js"),
  Chunk677601 = require("./677601.jsx"),
  Chunk950796 = require("./950796.js"),
  Chunk591472 = require("./591472.js"),
  Chunk857096 = require("./857096.js"),
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
  Chunk189152 = require("./189152.js");

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
class U extends Chunk73800.PureComponent {
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
    } = this.props, b = document.body.style.getPropertyValue("--custom-guild-sidebar-width"), y = "" !== Chunk238246 ? parseInt(Chunk238246, 10) : Chunk981631.PrS, O = Chunk866885.width - Chunk928518 - (Chunk591472 ? Chunk857096 : 0), v = null != Chunk950796, I = !Chunk358221 && Chunk740492 && Chunk591472 && Chunk210887 < Chunk677601.o;
    return <Chunk522501._X>{<Chunk241915.Z pictureInPictureComponents={M} selectedPIPWindow={module} pipWindows={exports} pipWidth={require} maxX={Chunk73800} maxY={Chunk442837} dockedRect={Chunk317381} theme={Chunk519938} onWindowMove={this.handleWindowMove} onWindowResize={this.handleWindowResize} appContext={Chunk988980} roundCorners={Chunk16609} resizeConfig={k} getDockedRectPositionY={Chunk917107} />}{<Chunk522501.mK className={Chunk442917 ? Chunk189152.belowSidebar : true} />}</Chunk522501._X>
  }
  constructor(...e) {
    super(...e), x(this, "handleWindowMove", (e, t) => {
      a.Ao(e, t)
    }), x(this, "handleWindowResize", e => {
      a.d7(e, w.cL.VIDEO)
    })
  }
}
let G = Chunk442837.ZP.connectStores([Chunk928518.Z, Chunk317381.ZP, Chunk451478.Z, Chunk210887.Z, Chunk592125.Z, Chunk944486.Z, Chunk366050.Z, Chunk358221.Z, Chunk740492.ZP, Chunk591472.Z], e => {
  var t, n, r, i, o, a, d;
  let _, {
      popoutWindowKey: m,
      popoutWindowHasTitleBar: g = false
    } = e,
    E = y.Z.getWindowOpen(R.KJ3.CHANNEL_CALL_POPOUT),
    I = y.Z.getWindowOpen(R.KJ3.ACTIVITY_POPOUT),
    L = s.ZP.getCurrentEmbeddedActivity(),
    x = (0, c.p)(null == L ? true : L.location),
    M = null != L && !(0, u.Z)(x, T.Z, A.Z),
    k = s.ZP.getActivityPanelMode(),
    U = M && k === P.Ez.PANEL,
    G = null != L && null != x && (null == (t = f.Z.getSelectedParticipant(x)) ? true : t.type) === w.fO.ACTIVITY,
    B = h.Z.getConnectedFrame(),
    Z = h.Z.getFrameLayoutMode() === D.U.FOCUSED,
    F = null != m,
    V = F ? y.Z.getWindow(m) : null,
    H = !!F && y.Z.isWindowFullScreen(m),
    Y = N.Z.windowSize();
  F && (Y = null == V ? Y : {
    width: V.innerWidth,
    height: V.innerHeight
  });
  let W = F ? R.IlC.POPOUT : R.IlC.APP,
    K = e => F && (0, b.Y)({
      withTitleBar: g,
      isFullScreen: H
    }) ? e - p.q8 : e;
  _ = null != L && I || F && M ? null : F || !E || M ? null != L && U ? null != (n = S.Z.pipActivityWindow) ? n : S.Z.pipVideoWindow : null != B && Z ? null != (i = null != (r = S.Z.pipFrameWindow) ? r : S.Z.pipVideoWindow) ? i : S.Z.pipActivityWindow : null != (a = null != (o = S.Z.pipVideoWindow) ? o : S.Z.pipActivityWindow) ? a : S.Z.pipFrameWindow : null;
  let z = Array.from(S.Z.pipWindows.values()),
    q = S.Z.pipWidth(w.cL.VIDEO),
    X = z.find(e => e.component === R.NYg.VIDEO),
    Q = z.find(e => e.component === R.NYg.ACTIVITY),
    J = [X, Q, z.find(e => e.component === R.NYg.FRAME)].filter(C.lm),
    $ = v.ZP.callChatSidebarWidth,
    ee = A.Z.getVoiceChannelId(),
    et = A.Z.getChannelId() === ee,
    en = null != ee && f.Z.getChatOpen(ee),
    er = U || G,
    ei = er && null != L && (0, l.q)(L.applicationId),
    eo = !er && null != _ && et && en;
  return {
    selectedPIPWindow: _,
    pipWindows: 0 === J.length ? j : J,
    pipWidth: q,
    maxX: Y.width - (eo ? $ : 0),
    maxY: Y.height,
    theme: O.Z.theme,
    dockedRect: S.Z.getDockedRect(null != (d = null == _ ? true : _.id) ? d : ""),
    getDockedRectPositionY: K,
    appContext: W,
    roundCorners: !ei,
    windowSize: Y,
    inPopoutWindow: F,
    activityPIPWindow: Q,
    chatOpen: en,
    callChatSidebarWidth: $
  }
})(U)