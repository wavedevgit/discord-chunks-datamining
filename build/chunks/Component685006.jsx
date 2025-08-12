/** Chunk was on web.js **/
/** chunk id: 685006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => A,
  xL: () => S
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk97519 = require("./97519.js"),
  Chunk731965 = require("./731965.js"),
  Chunk755721 = require("./755721.js"),
  Chunk911969 = require("./911969.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk450936 = require("./450936.js"),
  Chunk368478 = require("./368478.js"),
  Chunk499254 = require("./499254.js"),
  Chunk827498 = require("./827498.js"),
  Chunk213459 = require("./213459.js"),
  Chunk541716 = require("./541716.js"),
  Chunk61356 = require("./61356.js"),
  Chunk981631 = require("./981631.js"),
  Chunk314734 = require("./314734.js"),
  Chunk299190 = require("./299190.js");
let I = (0, Chunk97519.U)(() => ({
    visible: false
  })),
  T = e => {
    (0, l.j)(() => {
      I.setState({
        visible: e
      })
    })
  },
  S = I;

function A(e) {
  let {
    context: t,
    entryPointCommandButtonRef: n,
    type: o
  } = e, {
    isInitialLoading: a,
    application: s,
    primaryEntryPointCommand: l
  } = (0, _.Z)({
    context: t
  }), c = null == s ? true : s.id, p = (0, b.Z)({
    type: o
  }), {
    sectionCommands: O
  } = (0, g.If)(t, null != c ? c : ""), v = i.useCallback(() => {
    p ? h.yT(m.ti.DISMISSED) : (h.__(m._b.TEXT, E.Ie.NORMAL, {
      applicationId: c
    }), (0, f.yw)(y.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
      application_id: c,
      location: d.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
      source: m._b.TEXT
    }))
  }, [c, p]), I = null != O && O.filter(e => e.type === u.yU.CHAT || e.type === u.yU.PRIMARY_ENTRY_POINT).length > 0, S = !a && null != s && true === I;
  return (i.useEffect(() => (T(S), () => {
    T(false)
  }), [S]), S) ? (0, r.jsx)(N, {
    context: t,
    application: s,
    primaryEntryPointCommand: l,
    onOpenButtonPress: v,
    entryPointCommandButtonRef: n,
    type: o
  }) : null
}

function N(e) {
  let {
    context: t,
    application: n,
    primaryEntryPointCommand: i,
    onOpenButtonPress: o,
    entryPointCommandButtonRef: s,
    type: l
  } = e, u = (0, b.Z)({
    type: l
  }), {
    isExecutingLaunchInteraction: d,
    buttonText: f,
    hasActiveMatchingEmbeddedActivity: _,
    isEmbeddedApp: h,
    currentEmbeddedActivity: m,
    channelRecipientUserId: g,
    setIsExecutingLaunchInteraction: E,
    analyticsLocations: y
  } = (0, p.Z)({
    context: t,
    primaryEntryPointCommand: i,
    application: n,
    showAppLauncherPopup: u
  }), I = (0, p.J)({
    context: t,
    application: n,
    isEmbeddedApp: h,
    hasActiveMatchingEmbeddedActivity: _,
    currentEmbeddedActivity: m,
    onOpenButtonPress: o,
    channelRecipientUserId: g,
    setIsExecutingLaunchInteraction: E,
    analyticsLocations: y
  }), T = _ ? c.zx.Colors.RED : c.zx.Colors.BRAND;
  return (0, r.jsx)(c.zx, {
    className: a()(v.entryPointAppCommandButton, O.Id),
    size: c.zx.Sizes.SMALL,
    color: T,
    submitting: d,
    onClick: I,
    buttonRef: s,
    children: f
  })
}