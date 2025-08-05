/** Chunk was on 58023 **/
n.d(t, {
  I: () => N,
  S: () => E
}), n(997841);
var r = n(255367),
  l = n(73800),
  i = n(120356),
  a = n.n(i),
  s = n(533800),
  o = n(442837),
  c = n(755721),
  u = n(481060),
  d = n(484614),
  m = n(914010),
  x = n(246946),
  g = n(626135),
  h = n(630388),
  v = n(971130),
  p = n(530436),
  f = n(245335),
  j = n(981631),
  b = n(388032),
  y = n(821022),
  O = n(20493);
let E = o.ZP.connectStores([x.Z], () => ({
    hideValue: x.Z.hideInstantInvites
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
        channel: null == I ? void 0 : I.id,
        channel_type: null == I ? void 0 : I.type,
        location: S,
        code: T,
        guild_scheduled_event_id: null == P ? void 0 : P.id,
        application_id: null == Z ? void 0 : Z.id
      })
    }, [null == Z ? void 0 : Z.id, I, S, T, P]);
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
          hideBorder: !0,
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
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
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