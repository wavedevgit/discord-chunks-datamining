/** Chunk was on 86915 **/
/** chunk id: 603236, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => S,
  S: () => N
}), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk451964 = require("./451964.js"),
  Chunk197571 = require("./197571.js");
let N = Chunk442837.ZP.connectStores([Chunk246946.Z], () => ({
    hideValue: Chunk246946.Z.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: l,
      onCopy: r,
      disabled: s
    } = e;
    return (0, i.jsx)(u.Z, {
      value: t,
      hideMessage: l ? v.intl.string(v.t["6HzNgY"]) : null,
      buttonColor: c.zx.Colors.BRAND,
      onCopy: r,
      autoFocus: n,
      disabled: s
    })
  }),
  S = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: r,
      onClose: o,
      modalState: c,
      isApplicationBypassToggleEnabled: u,
      setInviteFlags: g,
      copyValue: S,
      changePage: O,
      inviteChannel: E,
      source: w,
      code: T,
      guildScheduledEvent: Z,
      disabled: R,
      application: I
    } = e, {
      maxAge: _,
      maxUses: P,
      networkError: A,
      showVanityURL: L,
      flags: D
    } = c, M = l.useCallback(() => {
      m.default.track(b.rMx.COPY_INSTANT_INVITE, {
        server: h.Z.getGuildId(),
        channel: null == E ? true : E.id,
        channel_type: null == E ? true : E.type,
        location: w,
        code: T,
        guild_scheduled_event_id: null == Z ? true : Z.id,
        application_id: null == I ? true : I.id
      })
    }, [null == I ? true : I.id, E, w, T, Z]);
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(N, {
        value: S,
        autoFocus: r,
        onCopy: M,
        disabled: R
      }), u && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: y.divider
        }), (0, i.jsx)(d.j7V, {
          className: y.toggle,
          value: (0, p.yE)(D, a.$.IS_APPLICATION_BYPASS),
          onChange: e => g((0, p.mB)(D, a.$.IS_APPLICATION_BYPASS, e)),
          disabled: R,
          hideBorder: true,
          children: (0, i.jsxs)("div", {
            className: y.formText,
            children: [(0, i.jsx)(d.Text, {
              variant: "text-md/semibold",
              children: v.intl.string(v.t["1i1bUl"])
            }), (0, i.jsx)(d.ua7, {
              text: v.intl.string(v.t["jvd/LC"]),
              children: e => (0, i.jsx)(d.d3s, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), i.forEach(function(t) {
                    var i;
                    i = n[t], t in e ? Object.defineProperty(e, t, {
                      value: i,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = i
                  })
                }
                return e
              }({
                size: "xs",
                color: "currentColor"
              }, e))
            })]
          })
        })]
      }), n || L ? null : (0, i.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: s()(C.marginTop8, y.footerText),
        children: [(0, f.Vg)(_, P), " ", r ? (0, i.jsx)(d.eee, {
          onClick: () => O(j.RV.SETTINGS),
          children: v.intl.string(v.t.VNe8Pz)
        }) : null]
      }), !n && r && L ? (0, i.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: s()(C.marginTop8, y.footerText),
        children: [v.intl.string(v.t["0M2U9/"]), " "]
      }) : null, null != A ? (0, i.jsx)(x.W, {
        guild: t,
        error: A,
        onClose: o
      }) : null]
    })
  }