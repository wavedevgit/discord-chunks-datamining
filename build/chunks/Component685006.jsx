/** Chunk was on 50118 **/
/** chunk id: 685006, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => S,
  xL: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk191336 = require("./191336.js"),
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
let O = (0, Chunk191336.U)(() => ({
    visible: false
  })),
  j = e => {
    (0, s.j)(() => {
      O.setState({
        visible: e
      })
    })
  },
  E = O;

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
  }), c = null == o ? true : o.id, f = (0, y.Z)({
    type: l
  }), {
    sectionCommands: v
  } = (0, b.If)(t, null != c ? c : ""), x = r.useCallback(() => {
    f ? m.yT(g.ti.DISMISSED) : (m.__(g._b.TEXT, C.Ie.NORMAL, {
      applicationId: c
    }), (0, p.yw)(_.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
      application_id: c,
      location: d.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
      source: g._b.TEXT
    }))
  }, [c, f]), O = null != v && v.filter(e => e.type === u.yU.CHAT || e.type === u.yU.PRIMARY_ENTRY_POINT).length > 0, E = !a && null != o && true === O;
  return (r.useEffect(() => (j(E), () => {
    j(false)
  }), [E]), E) ? (0, i.jsx)(P, {
    context: t,
    application: o,
    primaryEntryPointCommand: s,
    onOpenButtonPress: x,
    entryPointCommandButtonRef: n,
    type: l
  }) : null
}

function P(e) {
  let {
    context: t,
    application: n,
    primaryEntryPointCommand: r,
    onOpenButtonPress: l,
    entryPointCommandButtonRef: o,
    type: s
  } = e, u = (0, y.Z)({
    type: s
  }), {
    isExecutingLaunchInteraction: d,
    buttonText: p,
    hasActiveMatchingEmbeddedActivity: h,
    isEmbeddedApp: m,
    currentEmbeddedActivity: g,
    channelRecipientUserId: b,
    setIsExecutingLaunchInteraction: C,
    analyticsLocations: _
  } = (0, f.Z)({
    context: t,
    primaryEntryPointCommand: r,
    application: n,
    showAppLauncherPopup: u
  }), O = (0, f.J)({
    context: t,
    application: n,
    isEmbeddedApp: m,
    hasActiveMatchingEmbeddedActivity: h,
    currentEmbeddedActivity: g,
    onOpenButtonPress: l,
    channelRecipientUserId: b,
    setIsExecutingLaunchInteraction: C,
    analyticsLocations: _
  }), j = h ? "critical-primary" : "primary";
  return (0, i.jsx)("div", {
    className: a()(x.entryPointAppCommandButtonContainer, v.Id),
    children: (0, i.jsx)(c.Button, {
      variant: j,
      loading: d,
      onClick: O,
      fullWidth: true,
      buttonRef: o,
      text: p
    })
  })
}