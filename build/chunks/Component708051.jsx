/** Chunk was on 43600 **/
/** chunk id: 708051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => x,
  p: () => y
}), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk821418 = require("./821418.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk416052 = require("./416052.jsx"),
  Chunk967198 = require("./967198.js"),
  Chunk351906 = require("./351906.js"),
  Chunk954571 = require("./954571.js"),
  Chunk735547 = require("./735547.js"),
  Chunk299827 = require("./299827.jsx"),
  Chunk172799 = require("./172799.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk912579 = require("./912579.js");
let x = Chunk311907.Ay.connectStores([Chunk351906.A], () => ({
    hideValue: g.A.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: i,
      onCopy: s,
      disabled: a
    } = e;
    return (0, l.jsx)(d.A, {
      value: t,
      hideMessage: i ? m.intl.string(m.t["6HzNgZ"]) : null,
      buttonColor: o.$n.Colors.BRAND,
      onCopy: s,
      autoFocus: n,
      disabled: a
    })
  }),
  y = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: r,
      onClose: o,
      modalState: d,
      isApplicationBypassToggleEnabled: g,
      setInviteFlags: y,
      copyValue: f,
      changePage: E,
      inviteChannel: _,
      source: C,
      code: b,
      guildScheduledEvent: T,
      disabled: N,
      application: M
    } = e, {
      maxAge: O,
      maxUses: j,
      networkError: w,
      showVanityURL: R,
      flags: V
    } = d, U = i.useCallback(() => {
      h.default.track(I.HAw.COPY_INSTANT_INVITE, {
        server: c.A.getGuildId(),
        channel: null == _ ? true : _.id,
        channel_type: null == _ ? true : _.type,
        location: C,
        code: b,
        guild_scheduled_event_id: null == T ? true : T.id,
        application_id: null == M ? true : M.id
      })
    }, [null == M ? true : M.id, _, C, b, T]);
    return (0, l.jsxs)(u.BJc, {
      gap: 16,
      children: [(0, l.jsx)(x, {
        value: f,
        autoFocus: r,
        onCopy: U,
        disabled: N
      }), g && (0, l.jsx)(u.dOG, {
        checked: (0, a.Lt)(V, s.Q.IS_APPLICATION_BYPASS),
        onChange: e => y((0, a.lA)(V, s.Q.IS_APPLICATION_BYPASS, e)),
        disabled: N,
        label: m.intl.string(m.t["1i1bUl"]),
        description: m.intl.string(m.t["jvd/LF"])
      }), n || R ? null : (0, l.jsxs)(u.Text, {
        variant: "text-xs/normal",
        className: S.PJ,
        children: [(0, p.Be)(O, j), " ", r ? (0, l.jsx)(u.MzZ, {
          onClick: () => E(A.QR.SETTINGS),
          children: m.intl.string(m.t["VNe8P/"])
        }) : null]
      }), !n && r && R ? (0, l.jsxs)(u.Text, {
        variant: "text-xs/normal",
        className: S.PJ,
        children: [m.intl.string(m.t["0M2U95"]), " "]
      }) : null, null != w ? (0, l.jsx)(v.X, {
        guild: t,
        error: w,
        onClose: o
      }) : null]
    })
  }