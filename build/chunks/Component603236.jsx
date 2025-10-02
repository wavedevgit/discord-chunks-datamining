/** Chunk was on 7654 **/
/** chunk id: 603236, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => j,
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
  Chunk869306 = require("./869306.js");
let N = Chunk442837.ZP.connectStores([Chunk246946.Z], () => ({
    hideValue: Chunk246946.Z.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: i,
      onCopy: r,
      disabled: a
    } = e;
    return (0, l.jsx)(u.Z, {
      value: t,
      hideMessage: i ? x.intl.string(x.t["6HzNgY"]) : null,
      buttonColor: s.zx.Colors.BRAND,
      onCopy: r,
      autoFocus: n,
      disabled: a
    })
  }),
  j = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: a,
      onClose: s,
      modalState: u,
      isApplicationBypassToggleEnabled: c,
      setInviteFlags: j,
      copyValue: _,
      changePage: S,
      inviteChannel: E,
      source: b,
      code: T,
      guildScheduledEvent: O,
      disabled: y,
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
        channel: null == E ? true : E.id,
        channel_type: null == E ? true : E.type,
        location: b,
        code: T,
        guild_scheduled_event_id: null == O ? true : O.id,
        application_id: null == C ? true : C.id
      })
    }, [null == C ? true : C.id, E, b, T, O]);
    return (0, l.jsxs)(o.Kqy, {
      gap: 16,
      children: [(0, l.jsx)(N, {
        value: _,
        autoFocus: a,
        onCopy: R,
        disabled: y
      }), c && (0, l.jsx)(o.rsf, {
        checked: (0, h.yE)(w, r.$.IS_APPLICATION_BYPASS),
        onChange: e => j((0, h.mB)(w, r.$.IS_APPLICATION_BYPASS, e)),
        disabled: y,
        label: x.intl.string(x.t["1i1bUl"]),
        description: x.intl.string(x.t["jvd/LC"])
      }), n || M ? null : (0, l.jsxs)(o.Text, {
        variant: "text-xs/normal",
        className: f.footerText,
        children: [(0, m.Vg)(P, Z), " ", a ? (0, l.jsx)(o.eee, {
          onClick: () => S(v.RV.SETTINGS),
          children: x.intl.string(x.t.VNe8Pz)
        }) : null]
      }), !n && a && M ? (0, l.jsxs)(o.Text, {
        variant: "text-xs/normal",
        className: f.footerText,
        children: [x.intl.string(x.t["0M2U9/"]), " "]
      }) : null, null != A ? (0, l.jsx)(p.W, {
        guild: t,
        error: A,
        onClose: s
      }) : null]
    })
  }