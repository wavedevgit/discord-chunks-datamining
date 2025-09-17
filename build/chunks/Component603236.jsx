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
      hideValue: i,
      onCopy: a,
      disabled: r
    } = e;
    return (0, o.jsx)(s.Z, {
      value: n,
      hideMessage: i ? I.intl.string(I.t["6HzNgY"]) : null,
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
      showVanityURL: E,
      flags: B
    } = c, M = i.useCallback(() => {
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
    return (0, o.jsxs)(o.Fragment, {
      children: [(0, o.jsx)(w, {
        value: T,
        autoFocus: a,
        onCopy: M,
        disabled: O
      }), s && (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)("div", {
          className: f.divider
        }), (0, o.jsx)(d.j7V, {
          className: f.toggle,
          value: (0, h.yE)(B, l.$.IS_APPLICATION_BYPASS),
          onChange: e => u((0, h.mB)(B, l.$.IS_APPLICATION_BYPASS, e)),
          disabled: O,
          hideBorder: true,
          children: (0, o.jsxs)("div", {
            className: f.formText,
            children: [(0, o.jsx)(d.Text, {
              variant: "text-md/semibold",
              children: I.intl.string(I.t["1i1bUl"])
            }), (0, o.jsx)(d.ua7, {
              text: I.intl.string(I.t["jvd/LC"]),
              children: e => (0, o.jsx)(d.d3s, function(e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = null != arguments[n] ? arguments[n] : {},
                    o = Object.keys(t);
                  "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }))), o.forEach(function(n) {
                    var o;
                    o = t[n], n in e ? Object.defineProperty(e, n, {
                      value: o,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[n] = o
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
      }), t || E ? null : (0, o.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: r()(C.marginTop8, f.footerText),
        children: [(0, x.Vg)(P, k), " ", a ? (0, o.jsx)(d.eee, {
          onClick: () => S(v.RV.SETTINGS),
          children: I.intl.string(I.t.VNe8Pz)
        }) : null]
      }), !t && a && E ? (0, o.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: r()(C.marginTop8, f.footerText),
        children: [I.intl.string(I.t["0M2U9/"]), " "]
      }) : null, null != R ? (0, o.jsx)(m.W, {
        guild: n,
        error: R,
        onClose: _
      }) : null]
    })
  }