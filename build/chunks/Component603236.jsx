/** Chunk was on 7654 **/
/** chunk id: 603236, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => E,
  S: () => f
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
let f = Chunk442837.ZP.connectStores([Chunk246946.Z], () => ({
    hideValue: Chunk246946.Z.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: l,
      onCopy: s,
      disabled: r
    } = e;
    return (0, i.jsx)(d.Z, {
      value: t,
      hideMessage: l ? I.intl.string(I.t["6HzNgZ"]) : null,
      buttonColor: a.zx.Colors.BRAND,
      onCopy: s,
      autoFocus: n,
      disabled: r
    })
  }),
  E = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: r,
      onClose: a,
      modalState: d,
      isApplicationBypassToggleEnabled: c,
      setInviteFlags: E,
      copyValue: C,
      changePage: y,
      inviteChannel: _,
      source: N,
      code: T,
      guildScheduledEvent: b,
      disabled: j,
      application: A
    } = e, {
      maxAge: Z,
      maxUses: M,
      networkError: P,
      showVanityURL: w,
      flags: V
    } = d, O = l.useCallback(() => {
      g.default.track(x.rMx.COPY_INSTANT_INVITE, {
        server: u.Z.getGuildId(),
        channel: null == _ ? true : _.id,
        channel_type: null == _ ? true : _.type,
        location: N,
        code: T,
        guild_scheduled_event_id: null == b ? true : b.id,
        application_id: null == A ? true : A.id
      })
    }, [null == A ? true : A.id, _, N, T, b]);
    return (0, i.jsxs)(o.Kqy, {
      gap: 16,
      children: [(0, i.jsx)(f, {
        value: C,
        autoFocus: r,
        onCopy: O,
        disabled: j
      }), c && (0, i.jsx)(o.rsf, {
        checked: (0, h.yE)(V, s.$.IS_APPLICATION_BYPASS),
        onChange: e => E((0, h.mB)(V, s.$.IS_APPLICATION_BYPASS, e)),
        disabled: j,
        label: I.intl.string(I.t["1i1bUl"]),
        description: I.intl.string(I.t["jvd/LF"])
      }), n || w ? null : (0, i.jsxs)(o.Text, {
        variant: "text-xs/normal",
        className: S.footerText,
        children: [(0, m.Vg)(Z, M), " ", r ? (0, i.jsx)(o.Anchor, {
          onClick: () => y(p.RV.SETTINGS),
          children: I.intl.string(I.t["VNe8P/"])
        }) : null]
      }), !n && r && w ? (0, i.jsxs)(o.Text, {
        variant: "text-xs/normal",
        className: S.footerText,
        children: [I.intl.string(I.t["0M2U95"]), " "]
      }) : null, null != P ? (0, i.jsx)(v.W, {
        guild: t,
        error: P,
        onClose: a
      }) : null]
    })
  }