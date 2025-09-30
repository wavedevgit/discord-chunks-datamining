/** Chunk was on 7654 **/
/** chunk id: 603236, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => S,
  S: () => E
}), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk451964 = require("./451964.js"),
  Chunk197571 = require("./197571.js");
let E = Chunk442837.ZP.connectStores([Chunk246946.Z], () => ({
    hideValue: Chunk246946.Z.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: i,
      onCopy: r,
      disabled: a
    } = e;
    return (0, l.jsx)(c.Z, {
      value: t,
      hideMessage: i ? j.intl.string(j.t["6HzNgY"]) : null,
      buttonColor: u.zx.Colors.BRAND,
      onCopy: r,
      autoFocus: n,
      disabled: a
    })
  }),
  S = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: r,
      onClose: o,
      modalState: u,
      isApplicationBypassToggleEnabled: c,
      setInviteFlags: h,
      copyValue: S,
      changePage: b,
      inviteChannel: T,
      source: O,
      code: y,
      guildScheduledEvent: C,
      disabled: P,
      application: Z
    } = e, {
      maxAge: A,
      maxUses: M,
      networkError: w,
      showVanityURL: R,
      flags: k
    } = u, D = i.useCallback(() => {
      m.default.track(f.rMx.COPY_INSTANT_INVITE, {
        server: g.Z.getGuildId(),
        channel: null == T ? true : T.id,
        channel_type: null == T ? true : T.type,
        location: O,
        code: y,
        guild_scheduled_event_id: null == C ? true : C.id,
        application_id: null == Z ? true : Z.id
      })
    }, [null == Z ? true : Z.id, T, O, y, C]);
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(E, {
        value: S,
        autoFocus: r,
        onCopy: D,
        disabled: P
      }), c && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: N.divider
        }), (0, l.jsx)(d.j7V, {
          className: N.toggle,
          value: (0, p.yE)(k, s.$.IS_APPLICATION_BYPASS),
          onChange: e => h((0, p.mB)(k, s.$.IS_APPLICATION_BYPASS, e)),
          disabled: P,
          hideBorder: true,
          children: (0, l.jsxs)("div", {
            className: N.formText,
            children: [(0, l.jsx)(d.Text, {
              variant: "text-md/semibold",
              children: j.intl.string(j.t["1i1bUl"])
            }), (0, l.jsx)(d.ua7, {
              text: j.intl.string(j.t["jvd/LC"]),
              children: e => (0, l.jsx)(d.d3s, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), l.forEach(function(t) {
                    var l;
                    l = n[t], t in e ? Object.defineProperty(e, t, {
                      value: l,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = l
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
      }), n || R ? null : (0, l.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: a()(_.marginTop8, N.footerText),
        children: [(0, v.Vg)(A, M), " ", r ? (0, l.jsx)(d.eee, {
          onClick: () => b(I.RV.SETTINGS),
          children: j.intl.string(j.t.VNe8Pz)
        }) : null]
      }), !n && r && R ? (0, l.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: a()(_.marginTop8, N.footerText),
        children: [j.intl.string(j.t["0M2U9/"]), " "]
      }) : null, null != w ? (0, l.jsx)(x.W, {
        guild: t,
        error: w,
        onClose: o
      }) : null]
    })
  }