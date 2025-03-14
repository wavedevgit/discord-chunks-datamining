/** Chunk was on 58173 **/
n.d(t, {
  Z: () => x
}), n(47120), n(26686);
var r = n(200651),
  l = n(192379),
  o = n(120356),
  i = n.n(o),
  s = n(46973),
  a = n(481060),
  c = n(304680),
  u = n(706619),
  d = n(695346),
  h = n(131951),
  f = n(626135),
  p = n(572004),
  g = n(63063),
  y = n(476221),
  v = n(981631),
  O = n(65154),
  N = n(388032),
  b = n(926093);
let m = () => {
    h.Z.getMediaEngine().once(s.aB.ConnectionStats, e => {
      let t = Object.values(O.Yn).map(t => {
        let n = e.filter(e => {
          let {
            connection: n
          } = e;
          return n.context === t
        }).map((e, n) => {
          let r = e.stats;
          return r.context = t, r.index = n, r
        });
        for (let e of n) {
          var r;
          (null == e ? void 0 : null === (r = e.transport) || void 0 === r ? void 0 : r.localAddress) != null && (e.transport.localAddress = "(redacted)")
        }
        return n
      }).filter(e => e.length > 0);
      (0, p.JG)(JSON.stringify(t, null, 2)), (0, a.showToast)((0, a.createToast)(N.NW.string(N.t["t5VZ8/"]), a.ToastType.SUCCESS))
    })
  },
  x = function(e) {
    (0, l.useEffect)(() => {
      f.default.track(v.rMx.OPEN_POPOUT, {
        type: "RTC Connection"
      })
    }, []);
    let t = (0, l.useCallback)(() => {
        let {
          closePopout: t
        } = e;
        null != t && t(), c.bA()
      }, [e]),
      n = (0, l.useCallback)(() => {
        let {
          hostname: t,
          averagePing: n,
          lastPing: o,
          outboundLossRate: s
        } = e, a = d.Sb.getSetting();
        return (0, r.jsxs)(l.Fragment, {
          children: [a && (0, r.jsxs)("div", {
            children: [(0, r.jsx)("div", {
              className: b.graphContainer,
              children: (0, r.jsx)(u.Z, {
                dataPoints: e.pings,
                width: 258,
                height: 80
              })
            }), (0, r.jsx)("div", {
              className: b.popoutText,
              children: (0, r.jsx)("strong", {
                children: y.Z.getShortHostname(t)
              })
            })]
          }), (0, r.jsx)("div", {
            className: b.popoutText,
            children: N.NW.format(N.t["X58/lJ"], {
              averagePing: n.toFixed(0)
            })
          }), null != o ? (0, r.jsx)("div", {
            className: b.popoutText,
            children: N.NW.format(N.t["6iv2TE"], {
              lastPing: o.toFixed(0)
            })
          }) : null, null != s ? (0, r.jsx)("div", {
            className: b.popoutText,
            children: N.NW.format(N.t.VIBJMz, {
              outboundLossRate: s.toFixed(1)
            })
          }) : null, (0, r.jsxs)("div", {
            className: i()(b.popoutText, b.popoutTextDetails),
            children: [null == s ? N.NW.formatToPlainString(N.t.vggaMj, {
              badPing: 250
            }) : null, null != s ? N.NW.formatToPlainString(N.t["3pFz1N"], {
              badPing: 250,
              badLossRate: 10
            }) : null]
          })]
        })
      }, [e]),
      {
        connectionState: o,
        connectionTypeText: s
      } = e,
      p = d.Sb.getSetting(),
      x = {
        [v.hes.AWAITING_ENDPOINT]: N.NW.format(N.t.Eu2vUV, {
          url: v.yXt.STATUS
        }),
        [v.hes.CONNECTING]: N.NW.string(N.t["y+E8aG"]),
        [v.hes.AUTHENTICATING]: N.NW.string(N.t["5lGIZG"]),
        [v.hes.DISCONNECTED]: N.NW.string(N.t.fOX25O),
        [v.hes.RTC_CONNECTING]: N.NW.string(N.t.b5Ubd3),
        [v.hes.ICE_CHECKING]: N.NW.format(N.t.SyoYUV, {
          url: g.Z.getArticleURL(v.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [v.hes.DTLS_CONNECTING]: N.NW.format(N.t.SyoYUV, {
          url: g.Z.getArticleURL(v.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [v.hes.RTC_CONNECTED]: n,
        [v.hes.NO_ROUTE]: N.NW.format(N.t["2tgQnp"], {
          url: g.Z.getArticleURL(v.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [v.hes.RTC_DISCONNECTED]: N.NW.string(N.t.fOX25O)
      } [o];
    return (0, r.jsxs)(r.Fragment, {
      children: ["function" == typeof x ? x() : (0, r.jsx)("p", {
        className: i()(b.popoutText, b.popoutTextDetails),
        children: x
      }), (0, r.jsx)("hr", {
        className: b.separator
      }), (0, r.jsxs)("div", {
        className: b.popoutBottom,
        children: [(0, r.jsxs)("span", {
          className: i()(b.secured, b.textWithIcon),
          children: [(0, r.jsx)(a.mBM, {
            size: "xxs",
            color: a.TVs.colors.TEXT_POSITIVE.css,
            className: b.__invalid_icon
          }), s]
        }), p && h.Z.supports(O.AN.DIAGNOSTICS) && !__OVERLAY__ && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)(a.eee, {
            className: i()(b.debugButton, b.textWithIcon),
            onClick: t,
            children: [N.NW.string(N.t.KBoWg4), (0, r.jsx)(a.rgF, {
              size: "xxs",
              color: "currentColor",
              className: b.__invalid_icon
            })]
          }), (0, r.jsxs)(a.eee, {
            className: i()(b.copyStatsButton, b.textWithIcon),
            onClick: m,
            title: "Copy to clipboard",
            children: [N.NW.string(N.t["XEb+Sk"]), (0, r.jsx)(a.TIy, {
              size: "xxs",
              color: "currentColor",
              className: b.__invalid_icon
            })]
          })]
        }), !p && !__OVERLAY__ && (0, r.jsx)(a.eee, {
          className: b.debugButton,
          href: g.Z.getArticleURL(v.BhN.VOICE_VIDEO_TROUBLESHOOTING),
          children: N.NW.string(N.t.hvVgAQ)
        })]
      })]
    })
  }