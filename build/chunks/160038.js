/** Chunk was on 38542 **/
n.d(t, {
  Z: () => b
}), n(47120), n(26686);
var r = n(200651),
  l = n(192379),
  i = n(120356),
  o = n.n(i),
  a = n(46973),
  s = n(481060),
  c = n(304680),
  u = n(706619),
  d = n(695346),
  h = n(131951),
  f = n(626135),
  p = n(572004),
  g = n(63063),
  v = n(476221),
  N = n(981631),
  y = n(65154),
  O = n(388032),
  x = n(926093);
let m = () => {
    h.Z.getMediaEngine().once(a.aB.ConnectionStats, e => {
      let t = Object.values(y.Yn).map(t => {
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
      (0, p.JG)(JSON.stringify(t, null, 2)), (0, s.showToast)((0, s.createToast)(O.NW.string(O.t["t5VZ8/"]), s.ToastType.SUCCESS))
    })
  },
  b = function(e) {
    (0, l.useEffect)(() => {
      f.default.track(N.rMx.OPEN_POPOUT, {
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
          lastPing: i,
          outboundLossRate: a
        } = e, s = d.Sb.getSetting();
        return (0, r.jsxs)(l.Fragment, {
          children: [s && (0, r.jsxs)("div", {
            children: [(0, r.jsx)("div", {
              className: x.graphContainer,
              children: (0, r.jsx)(u.Z, {
                dataPoints: e.pings,
                width: 258,
                height: 80
              })
            }), (0, r.jsx)("div", {
              className: x.popoutText,
              children: (0, r.jsx)("strong", {
                children: v.Z.getShortHostname(t)
              })
            })]
          }), (0, r.jsx)("div", {
            className: x.popoutText,
            children: O.NW.format(O.t["X58/lJ"], {
              averagePing: n.toFixed(0)
            })
          }), null != i ? (0, r.jsx)("div", {
            className: x.popoutText,
            children: O.NW.format(O.t["6iv2TE"], {
              lastPing: i.toFixed(0)
            })
          }) : null, null != a ? (0, r.jsx)("div", {
            className: x.popoutText,
            children: O.NW.format(O.t.VIBJMz, {
              outboundLossRate: a.toFixed(1)
            })
          }) : null, (0, r.jsxs)("div", {
            className: o()(x.popoutText, x.popoutTextDetails),
            children: [null == a ? O.NW.formatToPlainString(O.t.vggaMj, {
              badPing: 250
            }) : null, null != a ? O.NW.formatToPlainString(O.t["3pFz1N"], {
              badPing: 250,
              badLossRate: 10
            }) : null]
          })]
        })
      }, [e]),
      {
        connectionState: i,
        connectionTypeText: a
      } = e,
      p = d.Sb.getSetting(),
      b = {
        [N.hes.AWAITING_ENDPOINT]: O.NW.format(O.t.Eu2vUV, {
          url: N.yXt.STATUS
        }),
        [N.hes.CONNECTING]: O.NW.string(O.t["y+E8aG"]),
        [N.hes.AUTHENTICATING]: O.NW.string(O.t["5lGIZG"]),
        [N.hes.DISCONNECTED]: O.NW.string(O.t.fOX25O),
        [N.hes.RTC_CONNECTING]: O.NW.string(O.t.b5Ubd3),
        [N.hes.ICE_CHECKING]: O.NW.format(O.t.SyoYUV, {
          url: g.Z.getArticleURL(N.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [N.hes.DTLS_CONNECTING]: O.NW.format(O.t.SyoYUV, {
          url: g.Z.getArticleURL(N.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [N.hes.RTC_CONNECTED]: n,
        [N.hes.NO_ROUTE]: O.NW.format(O.t["2tgQnp"], {
          url: g.Z.getArticleURL(N.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [N.hes.RTC_DISCONNECTED]: O.NW.string(O.t.fOX25O)
      } [i];
    return (0, r.jsxs)(r.Fragment, {
      children: ["function" == typeof b ? b() : (0, r.jsx)("p", {
        className: o()(x.popoutText, x.popoutTextDetails),
        children: b
      }), (0, r.jsx)("hr", {
        className: x.separator
      }), (0, r.jsxs)("div", {
        className: x.popoutBottom,
        children: [(0, r.jsxs)("span", {
          className: o()(x.secured, x.textWithIcon),
          children: [(0, r.jsx)(s.mBM, {
            size: "xxs",
            color: s.TVs.colors.TEXT_POSITIVE.css,
            className: x.__invalid_icon
          }), a]
        }), p && h.Z.supports(y.AN.DIAGNOSTICS) && !__OVERLAY__ && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)(s.eee, {
            className: o()(x.debugButton, x.textWithIcon),
            onClick: t,
            children: [O.NW.string(O.t.KBoWg4), (0, r.jsx)(s.rgF, {
              size: "xxs",
              color: "currentColor",
              className: x.__invalid_icon
            })]
          }), (0, r.jsxs)(s.eee, {
            className: o()(x.copyStatsButton, x.textWithIcon),
            onClick: m,
            title: "Copy to clipboard",
            children: [O.NW.string(O.t["XEb+Sk"]), (0, r.jsx)(s.TIy, {
              size: "xxs",
              color: "currentColor",
              className: x.__invalid_icon
            })]
          })]
        }), !p && !__OVERLAY__ && (0, r.jsx)(s.eee, {
          className: x.debugButton,
          href: g.Z.getArticleURL(N.BhN.VOICE_VIDEO_TROUBLESHOOTING),
          children: O.NW.string(O.t.hvVgAQ)
        })]
      })]
    })
  }