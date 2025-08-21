/** Chunk was on 92252 **/
/** chunk id: 603236, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  I: () => T,
  S: () => w
}), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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
let w = Chunk442837.ZP.connectStores([Chunk246946.Z], () => ({
    hideValue: Chunk246946.Z.hideInstantInvites
  }))(e => {
    let {
      value: n,
      autoFocus: t,
      hideValue: o,
      onCopy: a,
      disabled: r
    } = e;
    return (0, i.jsx)(s.Z, {
      value: n,
      hideMessage: o ? I.intl.string(I.t["6HzNgY"]) : null,
      buttonColor: c.zx.Colors.BRAND,
      onCopy: a,
      autoFocus: t,
      disabled: r
    })
  }),
  T = e => {
    let {
      guild: n,
      noInvitesAvailable: t,
      showFriends: a,
      onClose: _,
      modalState: c,
      isApplicationBypassToggleEnabled: s,
      setInviteFlags: u,
      copyValue: T,
      changePage: S,
      inviteChannel: j,
      source: N,
      code: y,
      guildScheduledEvent: L,
      disabled: O,
      application: A
    } = e, {
      maxAge: P,
      maxUses: k,
      networkError: R,
      showVanityURL: B,
      flags: E
    } = c, M = o.useCallback(() => {
      g.default.track(p.rMx.COPY_INSTANT_INVITE, {
        server: b.Z.getGuildId(),
        channel: null == j ? true : j.id,
        channel_type: null == j ? true : j.type,
        location: N,
        code: y,
        guild_scheduled_event_id: null == L ? true : L.id,
        application_id: null == A ? true : A.id
      })
    }, [null == A ? true : A.id, j, N, y, L]);
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(w, {
        value: T,
        autoFocus: a,
        onCopy: M,
        disabled: O
      }), s && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: f.divider
        }), (0, i.jsx)(d.j7V, {
          className: f.toggle,
          value: (0, h.yE)(E, l.$.IS_APPLICATION_BYPASS),
          onChange: e => u((0, h.mB)(E, l.$.IS_APPLICATION_BYPASS, e)),
          disabled: O,
          hideBorder: true,
          children: (0, i.jsxs)("div", {
            className: f.formText,
            children: [(0, i.jsx)(d.Text, {
              variant: "text-md/semibold",
              children: I.intl.string(I.t["1i1bUl"])
            }), (0, i.jsx)(d.ua7, {
              text: I.intl.string(I.t["jvd/LC"]),
              children: e => (0, i.jsx)(d.d3s, function(e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = null != arguments[n] ? arguments[n] : {},
                    i = Object.keys(t);
                  "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }))), i.forEach(function(n) {
                    var i;
                    i = t[n], n in e ? Object.defineProperty(e, n, {
                      value: i,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[n] = i
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
      }), t || B ? null : (0, i.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: r()(C.marginTop8, f.footerText),
        children: [(0, x.Vg)(P, k), " ", a ? (0, i.jsx)(d.eee, {
          onClick: () => S(v.RV.SETTINGS),
          children: I.intl.string(I.t.VNe8Pz)
        }) : null]
      }), !t && a && B ? (0, i.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: r()(C.marginTop8, f.footerText),
        children: [I.intl.string(I.t["0M2U9/"]), " "]
      }) : null, null != R ? (0, i.jsx)(m.W, {
        guild: n,
        error: R,
        onClose: _
      }) : null]
    })
  }