/** Chunk was on 87379 **/
/** chunk id: 603236, original params: e,t,n (module,exports,require) **/
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
  Chunk869306 = require("./869306.js"),
  Chunk10198 = require("./10198.js");
let w = Chunk442837.ZP.connectStores([Chunk246946.Z], () => ({
    hideValue: Chunk246946.Z.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: i,
      onCopy: a,
      disabled: r
    } = e;
    return (0, o.jsx)(c.Z, {
      value: t,
      hideMessage: i ? C.intl.string(C.t["6HzNgY"]) : null,
      buttonColor: d.zx.Colors.BRAND,
      onCopy: a,
      autoFocus: n,
      disabled: r
    })
  }),
  T = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: a,
      onClose: l,
      modalState: d,
      isApplicationBypassToggleEnabled: c,
      setInviteFlags: u,
      copyValue: T,
      changePage: S,
      inviteChannel: j,
      source: N,
      code: O,
      guildScheduledEvent: y,
      disabled: R,
      application: k
    } = e, {
      maxAge: P,
      maxUses: A,
      networkError: B,
      showVanityURL: L,
      flags: E
    } = d, F = i.useCallback(() => {
      g.default.track(m.rMx.COPY_INSTANT_INVITE, {
        server: b.Z.getGuildId(),
        channel: null == j ? true : j.id,
        channel_type: null == j ? true : j.type,
        location: N,
        code: O,
        guild_scheduled_event_id: null == y ? true : y.id,
        application_id: null == k ? true : k.id
      })
    }, [null == k ? true : k.id, j, N, O, y]);
    return (0, o.jsxs)(o.Fragment, {
      children: [(0, o.jsx)(w, {
        value: T,
        autoFocus: a,
        onCopy: F,
        disabled: R
      }), c && (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)("div", {
          className: I.divider
        }), (0, o.jsx)(s.j7V, {
          className: I.toggle,
          value: (0, h.yE)(E, _.$.IS_APPLICATION_BYPASS),
          onChange: e => u((0, h.mB)(E, _.$.IS_APPLICATION_BYPASS, e)),
          disabled: R,
          hideBorder: true,
          children: (0, o.jsxs)("div", {
            className: I.formText,
            children: [(0, o.jsx)(s.Text, {
              variant: "text-md/semibold",
              children: C.intl.string(C.t["1i1bUl"])
            }), (0, o.jsx)(s.ua7, {
              text: C.intl.string(C.t["jvd/LC"]),
              children: e => (0, o.jsx)(s.d3s, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    o = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), o.forEach(function(t) {
                    var o;
                    o = n[t], t in e ? Object.defineProperty(e, t, {
                      value: o,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = o
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
      }), n || L ? null : (0, o.jsxs)(s.Text, {
        variant: "text-xs/normal",
        className: r()(f.marginTop8, I.footerText),
        children: [(0, v.Vg)(P, A), " ", a ? (0, o.jsx)(s.eee, {
          onClick: () => S(x.RV.SETTINGS),
          children: C.intl.string(C.t.VNe8Pz)
        }) : null]
      }), !n && a && L ? (0, o.jsxs)(s.Text, {
        variant: "text-xs/normal",
        className: r()(f.marginTop8, I.footerText),
        children: [C.intl.string(C.t["0M2U9/"]), " "]
      }) : null, null != B ? (0, o.jsx)(p.W, {
        guild: t,
        error: B,
        onClose: l
      }) : null]
    })
  }