/** Chunk was on 7654 **/
/** chunk id: 603236, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => y,
  S: () => x
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
let x = Chunk442837.ZP.connectStores([Chunk246946.Z], () => ({
    hideValue: Chunk246946.Z.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: i,
      onCopy: s,
      disabled: r
    } = e;
    return (0, l.jsx)(d.Z, {
      value: t,
      hideMessage: i ? S.intl.string(S.t["6HzNgZ"]) : null,
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
      inviteChannel: b,
      source: C,
      code: T,
      guildScheduledEvent: A,
      disabled: N,
      application: M
    } = e, {
      maxAge: P,
      maxUses: Z,
      networkError: j,
      showVanityURL: w,
      flags: R
    } = d, O = i.useCallback(() => {
      h.default.track(m.rMx.COPY_INSTANT_INVITE, {
        server: c.Z.getGuildId(),
        channel: null == b ? true : b.id,
        channel_type: null == b ? true : b.type,
        location: C,
        code: T,
        guild_scheduled_event_id: null == A ? true : A.id,
        application_id: null == M ? true : M.id
      })
    }, [null == M ? true : M.id, b, C, T, A]);
    return (0, l.jsxs)(u.Kqy, {
      gap: 16,
      children: [(0, l.jsx)(x, {
        value: E,
        autoFocus: a,
        onCopy: O,
        disabled: N
      }), g && (0, l.jsx)(u.rsf, {
        checked: (0, r.yE)(R, s.$.IS_APPLICATION_BYPASS),
        onChange: e => y((0, r.mB)(R, s.$.IS_APPLICATION_BYPASS, e)),
        disabled: N,
        label: S.intl.string(S.t["1i1bUl"]),
        description: S.intl.string(S.t["jvd/LF"])
      }), n || w ? null : (0, l.jsxs)(u.Text, {
        variant: "text-xs/normal",
        className: f.footerText,
        children: [(0, p.Vg)(P, Z), " ", a ? (0, l.jsx)(u.Anchor, {
          onClick: () => _(I.RV.SETTINGS),
          children: S.intl.string(S.t["VNe8P/"])
        }) : null]
      }), !n && a && w ? (0, l.jsxs)(u.Text, {
        variant: "text-xs/normal",
        className: f.footerText,
        children: [S.intl.string(S.t["0M2U95"]), " "]
      }) : null, null != j ? (0, l.jsx)(v.W, {
        guild: t,
        error: j,
        onClose: o
      }) : null]
    })
  }