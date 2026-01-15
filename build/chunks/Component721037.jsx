/** Chunk was on web.js **/
/** chunk id: 721037, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
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
  Chunk113036 = require("./113036.jsx"),
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
  Chunk684692 = require("./684692.js");

function L(e, t, n) {
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
    [Chunk981631.NYg.FRAME]: Chunk857096.Z,
    [Chunk981631.NYg.HAVEN]: Chunk113036.Z
  },
  M = {
    minWidth: Chunk354459.Rv[Chunk354459.cL.VIDEO],
    maxWidth: Chunk354459.$i[Chunk354459.cL.VIDEO]
  },
  k = [];
class U extends Chunk473749.PureComponent {
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
      activityPIPWindow: p,
      chatOpen: _,
      callChatSidebarWidth: h
    } = this.props, m = document.body.style.getPropertyValue("--custom-guild-sidebar-width"), b = "" !== m ? parseInt(m, 10) : P.PrS, y = d.width - b - (_ ? h : 0), O = null != p, v = !f && O && _ && y < R.oo;
    return (0, r.jsxs)(E._X, {
      children: [(0, r.jsx)(g.Z, {
        pictureInPictureComponents: j,
        selectedPIPWindow: e,
        pipWindows: t,
        pipWidth: n,
        maxX: i,
        maxY: a,
        dockedRect: s,
        theme: o,
        onWindowMove: this.handleWindowMove,
        onWindowResize: this.handleWindowResize,
        appContext: l,
        roundCorners: c,
        resizeConfig: M,
        getDockedRectPositionY: u
      }), (0, r.jsx)(E.mK, {
        className: v ? x.belowSidebar : true
      })]
    })
  }
  constructor(...e) {
    super(...e), L(this, "handleWindowMove", (e, t) => {
      o.Ao(e, t)
    }), L(this, "handleWindowResize", e => {
      o.d7(e, R.cL.VIDEO)
    })
  }
}
let G = Chunk442837.ZP.connectStores([Chunk928518.Z, Chunk317381.ZP, Chunk451478.Z, Chunk210887.Z, Chunk592125.Z, Chunk944486.Z, Chunk366050.Z, Chunk358221.Z, Chunk740492.ZP, Chunk591472.Z], e => {
  var t, n, r, i, a, o, d, h;
  let m, {
      popoutWindowKey: g,
      popoutWindowHasTitleBar: E = false
    } = e,
    S = y.Z.getWindowOpen(P.KJ3.CHANNEL_CALL_POPOUT),
    x = y.Z.getWindowOpen(P.KJ3.ACTIVITY_POPOUT),
    L = s.ZP.getCurrentEmbeddedActivity(),
    j = (0, c.p)(null == L ? true : L.location),
    M = null != L && !(0, u.Z)(j, I.Z, C.Z),
    U = s.ZP.getActivityPanelMode(),
    G = M && U === w.Ez.PANEL,
    Z = null != L && null != j && (null == (t = f.Z.getSelectedParticipant(j)) ? true : t.type) === R.fO.ACTIVITY,
    F = _.Z.getConnectedFrame(),
    B = _.Z.getFrameLayoutMode() === D.U.FOCUSED,
    V = null != g,
    H = V ? y.Z.getWindow(g) : null,
    Y = !!V && y.Z.isWindowFullScreen(g),
    W = A.Z.windowSize();
  V && (W = null == H ? W : {
    width: H.innerWidth,
    height: H.innerHeight
  });
  let K = V ? P.IlC.POPOUT : P.IlC.APP,
    z = e => V && (0, b.Y)({
      withTitleBar: E,
      isFullScreen: Y
    }) ? e - (0, p.Y7)({
      isPopoutWindow: V
    }) : e;
  m = null != L && x || V && M || V && null != F ? null : V || !S || M || null != F ? null != L && G ? null != (n = T.Z.pipActivityWindow) ? n : T.Z.pipVideoWindow : null != F && B ? null != (i = null != (r = T.Z.pipFrameWindow) ? r : T.Z.pipVideoWindow) ? i : T.Z.pipActivityWindow : null != (d = null != (o = null != (a = T.Z.pipHavenWindow) ? a : T.Z.pipVideoWindow) ? o : T.Z.pipActivityWindow) ? d : T.Z.pipFrameWindow : null;
  let q = Array.from(T.Z.pipWindows.values()),
    Q = T.Z.pipWidth(R.cL.VIDEO),
    X = q.find(e => e.component === P.NYg.VIDEO),
    J = q.find(e => e.component === P.NYg.ACTIVITY),
    $ = q.find(e => e.component === P.NYg.FRAME),
    ee = [q.find(e => e.component === P.NYg.HAVEN), X, J, $].filter(N.lm),
    et = v.ZP.callChatSidebarWidth,
    en = C.Z.getVoiceChannelId(),
    er = C.Z.getChannelId() === en,
    ei = null != en && f.Z.getChatOpen(en),
    ea = G || Z,
    eo = ea && null != L && (0, l.q)(L.applicationId),
    es = !ea && null != m && er && ei;
  return {
    selectedPIPWindow: m,
    pipWindows: 0 === ee.length ? k : ee,
    pipWidth: Q,
    maxX: W.width - (es ? et : 0),
    maxY: W.height,
    theme: O.Z.theme,
    dockedRect: T.Z.getDockedRect(null != (h = null == m ? true : m.id) ? h : ""),
    getDockedRectPositionY: z,
    appContext: K,
    roundCorners: !eo,
    windowSize: W,
    inPopoutWindow: V,
    activityPIPWindow: J,
    chatOpen: ei,
    callChatSidebarWidth: et
  }
})(U)