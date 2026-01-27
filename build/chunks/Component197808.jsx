/** Chunk was on web.js **/
/** chunk id: 197808, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk31728 = require("./31728.js"),
  Chunk933958 = require("./933958.js"),
  Chunk216418 = require("./216418.js"),
  Chunk969151 = require("./969151.js"),
  Chunk108959 = require("./108959.js"),
  Chunk449571 = require("./449571.jsx"),
  Chunk313961 = require("./313961.js"),
  Chunk71855 = require("./71855.jsx"),
  Chunk91242 = require("./91242.js"),
  Chunk210954 = require("./210954.jsx"),
  Chunk26113 = require("./26113.jsx"),
  Chunk205297 = require("./205297.jsx"),
  Chunk699426 = require("./699426.js"),
  Chunk923917 = require("./923917.jsx"),
  Chunk869146 = require("./869146.js"),
  Chunk544028 = require("./544028.js"),
  Chunk964404 = require("./964404.js"),
  Chunk806911 = require("./806911.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk334463 = require("./334463.js"),
  Chunk309010 = require("./309010.js"),
  Chunk531685 = require("./531685.js"),
  Chunk403362 = require("./403362.js"),
  Chunk652215 = require("./652215.js"),
  Chunk5867 = require("./5867.js"),
  Chunk806931 = require("./806931.js"),
  Chunk165610 = require("./165610.js"),
  Chunk315253 = require("./315253.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let M = {
    [Chunk652215.o1q.VIDEO]: Chunk806911.A,
    [Chunk652215.o1q.ACTIVITY]: Chunk449571.A,
    [Chunk652215.o1q.FRAME]: Chunk210954.A,
    [Chunk652215.o1q.HAVEN]: Chunk26113.A
  },
  j = {
    minWidth: Chunk806931.mn[Chunk806931.R8.VIDEO],
    maxWidth: Chunk806931.cF[Chunk806931.R8.VIDEO]
  },
  k = [];
class U extends Chunk64700.PureComponent {
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
    } = this.props, m = document.body.style.getPropertyValue("--custom-guild-sidebar-width"), y = "" !== m ? parseInt(m, 10) : w.MdR, b = d.width - y - (_ ? h : 0), O = null != p, v = !f && O && _ && b < 550;
    return (0, r.jsxs)(E.ic, {
      children: [(0, r.jsx)(g.A, {
        pictureInPictureComponents: M,
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
        resizeConfig: j,
        getDockedRectPositionY: u
      }), (0, r.jsx)(E.Md, {
        className: v ? L.ah : true
      })]
    })
  }
  constructor(...e) {
    super(...e), x(this, "handleWindowMove", (e, t) => {
      o.tw(e, t)
    }), x(this, "handleWindowResize", e => {
      o.EB(e, P.R8.VIDEO)
    })
  }
}
let G = Chunk311907.Ay.connectStores([Chunk869146.A, Chunk933958.Ay, Chunk531685.A, Chunk544028.A, Chunk734057.A, Chunk309010.A, Chunk334463.A, Chunk313961.A, Chunk964404.Ay, Chunk91242.A], e => {
  var t, n, r, i, a, o, d, h;
  let m, {
      popoutWindowKey: g,
      popoutWindowHasTitleBar: E = false
    } = e,
    A = b.A.getWindowOpen(w.MLl.CHANNEL_CALL_POPOUT),
    L = b.A.getWindowOpen(w.MLl.ACTIVITY_POPOUT),
    x = s.Ay.getCurrentEmbeddedActivity(),
    M = (0, c.H)(null == x ? true : x.location),
    j = null != x && !(0, u.A)(M, I.A, T.A),
    U = s.Ay.getActivityPanelMode(),
    G = j && U === R.Gd.PANEL,
    F = null != x && null != M && (null == (n = f.A.getSelectedParticipant(M)) ? true : n.type) === P.lp.ACTIVITY,
    V = _.A.getConnectedFrame(),
    B = _.A.getFrameLayoutMode() === D.y.FOCUSED,
    H = null != g,
    Y = H ? b.A.getWindow(g) : null,
    W = !!H && b.A.isWindowFullScreen(g),
    K = C.A.windowSize();
  H && (K = null == Y ? K : {
    width: Y.innerWidth,
    height: Y.innerHeight
  });
  let z = H ? w.BRT.POPOUT : w.BRT.APP,
    q = e => H && (0, y.q)({
      withTitleBar: E,
      isFullScreen: W
    }) ? e - (0, p.LI)({
      isPopoutWindow: H
    }) : e;
  m = null != x && L || H && j || H && null != V ? null : H || !A || j || null != V ? null != x && G ? null != (r = S.A.pipActivityWindow) ? r : S.A.pipVideoWindow : null != V && B ? null != (i = null != (a = S.A.pipFrameWindow) ? a : S.A.pipVideoWindow) ? i : S.A.pipActivityWindow : null != (o = null != (d = null != (h = S.A.pipHavenWindow) ? h : S.A.pipVideoWindow) ? d : S.A.pipActivityWindow) ? o : S.A.pipFrameWindow : null;
  let Z = Array.from(S.A.pipWindows.values()),
    Q = S.A.pipWidth(P.R8.VIDEO),
    X = Z.find(e => e.component === w.o1q.VIDEO),
    J = Z.find(e => e.component === w.o1q.ACTIVITY),
    $ = Z.find(e => e.component === w.o1q.FRAME),
    ee = [Z.find(e => e.component === w.o1q.HAVEN), X, J, $].filter(N.Vq),
    et = v.Ay.callChatSidebarWidth,
    en = T.A.getVoiceChannelId(),
    er = T.A.getChannelId() === en,
    ei = null != en && f.A.getChatOpen(en),
    ea = G || F,
    eo = ea && null != x && (0, l.q)(x.applicationId),
    es = !ea && null != m && er && ei;
  return {
    selectedPIPWindow: m,
    pipWindows: 0 === ee.length ? k : ee,
    pipWidth: Q,
    maxX: K.width - (es ? et : 0),
    maxY: K.height,
    theme: O.A.theme,
    dockedRect: S.A.getDockedRect(null != (t = null == m ? true : m.id) ? t : ""),
    getDockedRectPositionY: q,
    appContext: z,
    roundCorners: !eo,
    windowSize: K,
    inPopoutWindow: H,
    activityPIPWindow: J,
    chatOpen: ei,
    callChatSidebarWidth: et
  }
})(U)