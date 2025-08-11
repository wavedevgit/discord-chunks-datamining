/** Chunk was on 58023 **/
/** chunk id: 603236, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => N,
  S: () => E
}), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk821022 = require("./821022.js"),
  Chunk20493 = require("./20493.js");
let E = Chunk442837.ZP.connectStores([Chunk246946.Z], () => ({
    hideValue: Chunk246946.Z.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: l,
      onCopy: i,
      disabled: a
    } = e;
    return (0, r.jsx)(d.Z, {
      value: t,
      hideMessage: l ? b.intl.string(b.t["6HzNgY"]) : null,
      buttonColor: c.zx.Colors.BRAND,
      onCopy: i,
      autoFocus: n,
      disabled: a
    })
  }),
  N = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: i,
      onClose: o,
      modalState: c,
      isApplicationBypassToggleEnabled: d,
      setInviteFlags: x,
      copyValue: N,
      changePage: C,
      inviteChannel: I,
      source: S,
      code: T,
      guildScheduledEvent: P,
      disabled: w,
      application: Z
    } = e, {
      maxAge: D,
      maxUses: _,
      networkError: R,
      showVanityURL: k,
      flags: A
    } = c, U = l.useCallback(() => {
      g.default.track(j.rMx.COPY_INSTANT_INVITE, {
        server: m.Z.getGuildId(),
        channel: null == I ? true : I.id,
        channel_type: null == I ? true : I.type,
        location: S,
        code: T,
        guild_scheduled_event_id: null == P ? true : P.id,
        application_id: null == Z ? true : Z.id
      })
    }, [null == Z ? true : Z.id, I, S, T, P]);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(E, {
        value: N,
        autoFocus: i,
        onCopy: U,
        disabled: w
      }), d && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: y.divider
        }), (0, r.jsx)(u.j7V, {
          className: y.toggle,
          value: (0, h.yE)(A, s.$.IS_APPLICATION_BYPASS),
          onChange: e => x((0, h.mB)(A, s.$.IS_APPLICATION_BYPASS, e)),
          disabled: w,
          hideBorder: true,
          children: (0, r.jsxs)("div", {
            className: y.formText,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-md/semibold",
              children: b.intl.string(b.t["1i1bUl"])
            }), (0, r.jsx)(u.ua7, {
              text: b.intl.string(b.t["jvd/LC"]),
              children: e => (0, r.jsx)(u.d3s, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = r
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
      }), n || k ? null : (0, r.jsxs)(u.Text, {
        variant: "text-xs/normal",
        className: a()(O.marginTop8, y.footerText),
        children: [(0, v.Vg)(D, _), " ", i ? (0, r.jsx)(u.eee, {
          onClick: () => C(f.RV.SETTINGS),
          children: b.intl.string(b.t.VNe8Pz)
        }) : null]
      }), !n && i && k ? (0, r.jsxs)(u.Text, {
        variant: "text-xs/normal",
        className: a()(O.marginTop8, y.footerText),
        children: [b.intl.string(b.t["0M2U9/"]), " "]
      }) : null, null != R ? (0, r.jsx)(p.W, {
        guild: t,
        error: R,
        onClose: o
      }) : null]
    })
  }