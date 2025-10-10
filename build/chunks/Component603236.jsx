/** Chunk was on 7654 **/
/** chunk id: 603236, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => j,
  S: () => y
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
let y = Chunk442837.ZP.connectStores([Chunk246946.Z], () => ({
    hideValue: Chunk246946.Z.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: l,
      onCopy: s,
      disabled: a
    } = e;
    return (0, i.jsx)(d.Z, {
      value: t,
      hideMessage: l ? I.intl.string(I.t["6HzNgY"]) : null,
      buttonColor: r.zx.Colors.BRAND,
      onCopy: s,
      autoFocus: n,
      disabled: a
    })
  }),
  j = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: a,
      onClose: r,
      modalState: d,
      isApplicationBypassToggleEnabled: c,
      setInviteFlags: j,
      copyValue: C,
      changePage: N,
      inviteChannel: f,
      source: E,
      code: T,
      guildScheduledEvent: b,
      disabled: _,
      application: M
    } = e, {
      maxAge: P,
      maxUses: Z,
      networkError: A,
      showVanityURL: w,
      flags: V
    } = d, R = l.useCallback(() => {
      h.default.track(x.rMx.COPY_INSTANT_INVITE, {
        server: u.Z.getGuildId(),
        channel: null == f ? true : f.id,
        channel_type: null == f ? true : f.type,
        location: E,
        code: T,
        guild_scheduled_event_id: null == b ? true : b.id,
        application_id: null == M ? true : M.id
      })
    }, [null == M ? true : M.id, f, E, T, b]);
    return (0, i.jsxs)(o.Kqy, {
      gap: 16,
      children: [(0, i.jsx)(y, {
        value: C,
        autoFocus: a,
        onCopy: R,
        disabled: _
      }), c && (0, i.jsx)(o.rsf, {
        checked: (0, g.yE)(V, s.$.IS_APPLICATION_BYPASS),
        onChange: e => j((0, g.mB)(V, s.$.IS_APPLICATION_BYPASS, e)),
        disabled: _,
        label: I.intl.string(I.t["1i1bUl"]),
        description: I.intl.string(I.t["jvd/LC"])
      }), n || w ? null : (0, i.jsxs)(o.Text, {
        variant: "text-xs/normal",
        className: S.footerText,
        children: [(0, m.Vg)(P, Z), " ", a ? (0, i.jsx)(o.Anchor, {
          onClick: () => N(v.RV.SETTINGS),
          children: I.intl.string(I.t.VNe8Pz)
        }) : null]
      }), !n && a && w ? (0, i.jsxs)(o.Text, {
        variant: "text-xs/normal",
        className: S.footerText,
        children: [I.intl.string(I.t["0M2U9/"]), " "]
      }) : null, null != A ? (0, i.jsx)(p.W, {
        guild: t,
        error: A,
        onClose: r
      }) : null]
    })
  }