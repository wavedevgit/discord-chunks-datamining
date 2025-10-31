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
    return (0, i.jsx)(u.Z, {
      value: t,
      hideMessage: l ? S.intl.string(S.t["6HzNgZ"]) : null,
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
      modalState: u,
      isApplicationBypassToggleEnabled: c,
      setInviteFlags: E,
      copyValue: y,
      changePage: C,
      inviteChannel: _,
      source: b,
      code: T,
      guildScheduledEvent: N,
      disabled: A,
      application: P
    } = e, {
      maxAge: Z,
      maxUses: M,
      networkError: w,
      showVanityURL: j,
      flags: V
    } = u, O = l.useCallback(() => {
      g.default.track(m.rMx.COPY_INSTANT_INVITE, {
        server: d.Z.getGuildId(),
        channel: null == _ ? true : _.id,
        channel_type: null == _ ? true : _.type,
        location: b,
        code: T,
        guild_scheduled_event_id: null == N ? true : N.id,
        application_id: null == P ? true : P.id
      })
    }, [null == P ? true : P.id, _, b, T, N]);
    return (0, i.jsxs)(o.Kqy, {
      gap: 16,
      children: [(0, i.jsx)(f, {
        value: y,
        autoFocus: r,
        onCopy: O,
        disabled: A
      }), c && (0, i.jsx)(o.rsf, {
        checked: (0, h.yE)(V, s.$.IS_APPLICATION_BYPASS),
        onChange: e => E((0, h.mB)(V, s.$.IS_APPLICATION_BYPASS, e)),
        disabled: A,
        label: S.intl.string(S.t["1i1bUl"]),
        description: S.intl.string(S.t["jvd/LF"])
      }), n || j ? null : (0, i.jsxs)(o.Text, {
        variant: "text-xs/normal",
        className: x.footerText,
        children: [(0, v.Vg)(Z, M), " ", r ? (0, i.jsx)(o.Anchor, {
          onClick: () => C(I.RV.SETTINGS),
          children: S.intl.string(S.t["VNe8P/"])
        }) : null]
      }), !n && r && j ? (0, i.jsxs)(o.Text, {
        variant: "text-xs/normal",
        className: x.footerText,
        children: [S.intl.string(S.t["0M2U95"]), " "]
      }) : null, null != w ? (0, i.jsx)(p.W, {
        guild: t,
        error: w,
        onClose: a
      }) : null]
    })
  }