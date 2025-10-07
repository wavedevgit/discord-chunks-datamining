/** Chunk was on 7654 **/
/** chunk id: 603236, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => S,
  S: () => N
}), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk533800 = require("./533800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk484614 = require("./484614.jsx"),
  Chunk914010 = require("./914010.js"),
  Chunk246946 = require("./246946.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk971130 = require("./971130.js"),
  Chunk530436 = require("./530436.jsx"),
  Chunk245335 = require("./245335.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk451964 = require("./451964.js");
let N = Chunk442837.ZP.connectStores([Chunk246946.Z], () => ({
    hideValue: Chunk246946.Z.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: i,
      onCopy: s,
      disabled: r
    } = e;
    return (0, l.jsx)(u.Z, {
      value: t,
      hideMessage: i ? x.intl.string(x.t["6HzNgY"]) : null,
      buttonColor: a.zx.Colors.BRAND,
      onCopy: s,
      autoFocus: n,
      disabled: r
    })
  }),
  S = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: r,
      onClose: a,
      modalState: u,
      isApplicationBypassToggleEnabled: c,
      setInviteFlags: S,
      copyValue: _,
      changePage: j,
      inviteChannel: b,
      source: E,
      code: y,
      guildScheduledEvent: T,
      disabled: O,
      application: C
    } = e, {
      maxAge: P,
      maxUses: Z,
      networkError: A,
      showVanityURL: M,
      flags: w
    } = u, R = i.useCallback(() => {
      g.default.track(I.rMx.COPY_INSTANT_INVITE, {
        server: d.Z.getGuildId(),
        channel: null == b ? true : b.id,
        channel_type: null == b ? true : b.type,
        location: E,
        code: y,
        guild_scheduled_event_id: null == T ? true : T.id,
        application_id: null == C ? true : C.id
      })
    }, [null == C ? true : C.id, b, E, y, T]);
    return (0, l.jsxs)(o.Kqy, {
      gap: 16,
      children: [(0, l.jsx)(N, {
        value: _,
        autoFocus: r,
        onCopy: R,
        disabled: O
      }), c && (0, l.jsx)(o.rsf, {
        checked: (0, h.yE)(w, s.$.IS_APPLICATION_BYPASS),
        onChange: e => S((0, h.mB)(w, s.$.IS_APPLICATION_BYPASS, e)),
        disabled: O,
        label: x.intl.string(x.t["1i1bUl"]),
        description: x.intl.string(x.t["jvd/LC"])
      }), n || M ? null : (0, l.jsxs)(o.Text, {
        variant: "text-xs/normal",
        className: f.footerText,
        children: [(0, m.Vg)(P, Z), " ", r ? (0, l.jsx)(o.eee, {
          onClick: () => j(v.RV.SETTINGS),
          children: x.intl.string(x.t.VNe8Pz)
        }) : null]
      }), !n && r && M ? (0, l.jsxs)(o.Text, {
        variant: "text-xs/normal",
        className: f.footerText,
        children: [x.intl.string(x.t["0M2U9/"]), " "]
      }) : null, null != A ? (0, l.jsx)(p.W, {
        guild: t,
        error: A,
        onClose: a
      }) : null]
    })
  }