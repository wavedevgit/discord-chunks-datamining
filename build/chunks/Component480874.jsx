/** Chunk was on 1272 **/
/** chunk id: 480874, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk286379 = require("./286379.js"),
  Chunk481060 = require("./481060.js"),
  Chunk183126 = require("./183126.js"),
  Chunk493773 = require("./493773.js"),
  Chunk209613 = require("./209613.js"),
  Chunk82295 = require("./82295.jsx"),
  Chunk797614 = require("./797614.js"),
  Chunk626135 = require("./626135.js"),
  Chunk26373 = require("./26373.js"),
  Chunk486622 = require("./486622.js"),
  Chunk488634 = require("./488634.js"),
  Chunk727813 = require("./727813.js"),
  Chunk355350 = require("./355350.js"),
  Chunk307947 = require("./307947.jsx"),
  Chunk125855 = require("./125855.jsx"),
  Chunk687683 = require("./687683.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932376 = require("./932376.js");

function N() {
  let e = i.useRef(null),
    t = (0, E.Z)(),
    n = (0, O.w)(),
    l = (0, m.V)(),
    N = (0, u.N)(),
    j = (0, p.Z)("message-requests-spam-list"),
    {
      channelId: P
    } = (0, _._)(),
    x = i.useCallback(() => {
      (0, c.showToast)((0, c.createToast)(S.intl.string(S.t["EDYbS+"]), c.ToastType.FAILURE))
    }, []),
    {
      rejectAll: A
    } = (0, b.m)({
      onError: x
    }),
    Z = i.useCallback(() => {
      A(t.map(e => e.channel.id))
    }, [t, A]);
  (0, d.ZP)(() => {
    h.default.track(C.rMx.SPAM_MESSAGE_REQUESTS_VIEWED, {
      num_spam_message_requests: n
    }), g.Z.increment({
      name: s.V.SPAM_MESSAGE_REQUEST_VIEW
    })
  });
  let w = i.useCallback(e => {
      var n, i;
      let {
        row: o
      } = e, s = t[o], c = null == (i = t[o + 1]) || null == (n = i.channel) ? true : n.id, u = s.channel.id;
      return (0, r.jsx)(y.Z, {
        index: o,
        className: a()({
          [T.selected]: null != P && P === u,
          [T.siblingSelected]: null != P && P === c
        }),
        channel: s.channel,
        user: s.user,
        hasSingleMessageRequest: l
      }, u)
    }, [t, l, P]),
    L = i.useCallback(() => (0, r.jsxs)(f.Z, {
      className: T.sectionTitle,
      children: [S.intl.format(S.t.C79Edh, {
        count: n
      }), N && n > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.Text, {
          className: T.titleDivider,
          variant: "eyebrow",
          color: "text-default",
          tag: "span",
          children: "•"
        }), (0, r.jsx)(c.Avr, {
          textVariant: "text-sm/normal",
          text: S.intl.string(S.t.p6t7RC),
          onClick: Z,
          "aria-label": S.intl.string(S.t.p6t7RC)
        })]
      }) : null]
    }, "message-requests-spam-title"), [n, Z, N]);
  return 0 === t.length ? (0, r.jsx)(v.Z, {
    section: I.pS.SPAM
  }) : (0, r.jsx)(o.bG, {
    navigator: j,
    children: (0, r.jsx)(o.SJ, {
      children: n => {
        var {
          ref: i,
          role: l
        } = n, a = function(e, t) {
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
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({
          className: T.list,
          innerRole: l,
          innerAriaLabel: S.intl.string(S.t.e7GWjQ),
          ref: t => {
            var n;
            e.current = t, i.current = null != (n = null == t ? true : t.getScrollerNode()) ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: I.oi,
          rowHeight: I.WN,
          renderSection: L,
          renderRow: w,
          sections: [t.length],
          chunkSize: 30,
          fade: true
        }, a), "message-requests-spam-list")
      }
    })
  })
}