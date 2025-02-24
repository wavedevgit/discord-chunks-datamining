/** Chunk was on 1272 **/
n.d(t, {
  Z: () => T
});
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(91192),
  s = n(286379),
  c = n(481060),
  u = n(183126),
  d = n(493773),
  p = n(209613),
  h = n(82295),
  g = n(797614),
  f = n(626135),
  m = n(26373),
  b = n(486622),
  _ = n(922409),
  E = n(727813),
  O = n(355350),
  N = n(307947),
  v = n(125855),
  y = n(687683),
  I = n(981631),
  C = n(388032),
  S = n(926678);

function T() {
  let e = i.useRef(null),
    t = (0, E.Z)(),
    n = (0, O.w)(),
    l = (0, m.V)(),
    T = (0, u.N)(),
    P = (0, p.Z)("message-requests-spam-list"),
    {
      channelId: j
    } = (0, _._)(),
    A = i.useCallback(() => {
      (0, c.showToast)((0, c.createToast)(C.NW.string(C.t.EDYbS0), c.ToastType.FAILURE))
    }, []),
    {
      rejectAll: Z
    } = (0, b.m)({
      onError: A
    }),
    x = i.useCallback(() => {
      Z(t.map(e => e.channel.id))
    }, [t, Z]);
  (0, d.ZP)(() => {
    f.default.track(I.rMx.SPAM_MESSAGE_REQUESTS_VIEWED, {
      num_spam_message_requests: n
    }), g.Z.increment({
      name: s.V.SPAM_MESSAGE_REQUEST_VIEW
    })
  });
  let L = i.useCallback(e => {
      var n, i;
      let {
        row: a
      } = e, s = t[a], c = null === (i = t[a + 1]) || void 0 === i ? void 0 : null === (n = i.channel) || void 0 === n ? void 0 : n.id, u = s.channel.id;
      return (0, r.jsx)(v.Z, {
        index: a,
        className: o()({
          [S.selected]: null != j && j === u,
          [S.siblingSelected]: null != j && j === c
        }),
        channel: s.channel,
        user: s.user,
        hasSingleMessageRequest: l
      }, u)
    }, [t, l, j]),
    w = i.useCallback(() => (0, r.jsxs)(h.Z, {
      className: S.sectionTitle,
      children: [C.NW.format(C.t.C79Edn, {
        count: n
      }), T && n > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.Text, {
          className: S.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, r.jsx)(c.zxk, {
          onClick: x,
          look: c.iLD.LINK,
          color: c.Ttl.LINK,
          size: c.PhG.SMALL,
          className: S.clearAllButton,
          "aria-label": C.NW.string(C.t.p6t7RE),
          children: C.NW.string(C.t.p6t7RE)
        })]
      }) : null]
    }, "message-requests-spam-title"), [n, x, T]);
  return 0 === t.length ? (0, r.jsx)(N.Z, {
    section: y.pS.SPAM
  }) : (0, r.jsx)(a.bG, {
    navigator: P,
    children: (0, r.jsx)(a.SJ, {
      children: n => {
        var {
          ref: i,
          role: l
        } = n, o = function(e, t) {
          if (null == e) return {};
          var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
        }(n, ["ref", "role"]);
        return (0, r.jsx)(c.aVo, function(e) {
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
          className: S.list,
          innerRole: l,
          innerAriaLabel: C.NW.string(C.t.e7GWjY),
          ref: t => {
            var n;
            e.current = t, i.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: y.oi,
          rowHeight: y.WN,
          renderSection: w,
          renderRow: L,
          sections: [t.length],
          chunkSize: 30,
          fade: !0
        }, o), "message-requests-spam-list")
      }
    })
  })
}