/** Chunk was on 7654 **/
/** chunk id: 603236, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => y,
  S: () => f
}), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk533800 = require("./533800.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk484614 = require("./484614.jsx"),
  Chunk914010 = require("./914010.js"),
  Chunk246946 = require("./246946.js"),
  Chunk626135 = require("./626135.js"),
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
      hideMessage: l ? x.intl.string(x.t["6HzNgZ"]) : null,
      buttonColor: o.zx.Colors.BRAND,
      onCopy: s,
      autoFocus: n,
      disabled: r
    })
  }),
  y = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: a,
      onClose: o,
      modalState: d,
      isApplicationBypassToggleEnabled: g,
      setInviteFlags: y,
      copyValue: E,
      changePage: _,
      inviteChannel: C,
      source: T,
      code: b,
      guildScheduledEvent: N,
      disabled: A,
      application: P
    } = e, {
      maxAge: M,
      maxUses: Z,
      networkError: w,
      showVanityURL: j,
      flags: O
    } = d, V = l.useCallback(() => {
      h.default.track(m.rMx.COPY_INSTANT_INVITE, {
        server: c.Z.getGuildId(),
        channel: null == C ? true : C.id,
        channel_type: null == C ? true : C.type,
        location: T,
        code: b,
        guild_scheduled_event_id: null == N ? true : N.id,
        application_id: null == P ? true : P.id
      })
    }, [null == P ? true : P.id, C, T, b, N]);
    return (0, i.jsxs)(u.Kqy, {
      gap: 16,
      children: [(0, i.jsx)(f, {
        value: E,
        autoFocus: a,
        onCopy: V,
        disabled: A
      }), g && (0, i.jsx)(u.rsf, {
        checked: (0, r.yE)(O, s.$.IS_APPLICATION_BYPASS),
        onChange: e => y((0, r.mB)(O, s.$.IS_APPLICATION_BYPASS, e)),
        disabled: A,
        label: x.intl.string(x.t["1i1bUl"]),
        description: x.intl.string(x.t["jvd/LF"])
      }), n || j ? null : (0, i.jsxs)(u.Text, {
        variant: "text-xs/normal",
        className: S.footerText,
        children: [(0, p.Vg)(M, Z), " ", a ? (0, i.jsx)(u.Anchor, {
          onClick: () => _(I.RV.SETTINGS),
          children: x.intl.string(x.t["VNe8P/"])
        }) : null]
      }), !n && a && j ? (0, i.jsxs)(u.Text, {
        variant: "text-xs/normal",
        className: S.footerText,
        children: [x.intl.string(x.t["0M2U95"]), " "]
      }) : null, null != w ? (0, i.jsx)(v.W, {
        guild: t,
        error: w,
        onClose: o
      }) : null]
    })
  }