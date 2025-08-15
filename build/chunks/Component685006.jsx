/** Chunk was on 86357 **/
/** chunk id: 685006, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => S,
  xL: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk879690 = require("./879690.js"),
  Chunk731965 = require("./731965.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk409575 = require("./409575.js");
let j = (0, Chunk879690.U)(() => ({
    visible: false
  })),
  O = e => {
    (0, s.j)(() => {
      j.setState({
        visible: e
      })
    })
  },
  E = j;

function S(e) {
  let {
    context: t,
    entryPointCommandButtonRef: n,
    type: l
  } = e, {
    isInitialLoading: a,
    application: o,
    primaryEntryPointCommand: s
  } = (0, h.Z)({
    context: t
  }), c = null == o ? true : o.id, f = (0, _.Z)({
    type: l
  }), {
    sectionCommands: x
  } = (0, b.If)(t, null != c ? c : ""), v = i.useCallback(() => {
    f ? m.yT(g.ti.DISMISSED) : (m.__(g._b.TEXT, y.Ie.NORMAL, {
      applicationId: c
    }), (0, p.yw)(C.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
      application_id: c,
      location: d.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
      source: g._b.TEXT
    }))
  }, [c, f]), j = null != x && x.filter(e => e.type === u.yU.CHAT || e.type === u.yU.PRIMARY_ENTRY_POINT).length > 0, E = !a && null != o && true === j;
  return (i.useEffect(() => (O(E), () => {
    O(false)
  }), [E]), E) ? (0, r.jsx)(P, {
    context: t,
    application: o,
    primaryEntryPointCommand: s,
    onOpenButtonPress: v,
    entryPointCommandButtonRef: n,
    type: l
  }) : null
}

function P(e) {
  let {
    context: t,
    application: n,
    primaryEntryPointCommand: i,
    onOpenButtonPress: l,
    entryPointCommandButtonRef: o,
    type: s
  } = e, u = (0, _.Z)({
    type: s
  }), {
    isExecutingLaunchInteraction: d,
    buttonText: p,
    hasActiveMatchingEmbeddedActivity: h,
    isEmbeddedApp: m,
    currentEmbeddedActivity: g,
    channelRecipientUserId: b,
    setIsExecutingLaunchInteraction: y,
    analyticsLocations: C
  } = (0, f.Z)({
    context: t,
    primaryEntryPointCommand: i,
    application: n,
    showAppLauncherPopup: u
  }), j = (0, f.J)({
    context: t,
    application: n,
    isEmbeddedApp: m,
    hasActiveMatchingEmbeddedActivity: h,
    currentEmbeddedActivity: g,
    onOpenButtonPress: l,
    channelRecipientUserId: b,
    setIsExecutingLaunchInteraction: y,
    analyticsLocations: C
  }), O = h ? "critical-primary" : "primary";
  return (0, r.jsx)("div", {
    className: a()(v.entryPointAppCommandButtonContainer, x.Id),
    children: (0, r.jsx)(c.zxk, {
      variant: O,
      loading: d,
      onClick: j,
      fullWidth: true,
      buttonRef: o,
      text: p
    })
  })
}