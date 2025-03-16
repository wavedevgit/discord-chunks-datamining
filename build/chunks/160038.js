/** Chunk was on 38542 **/
n.d(t, {
  Z: () => x
}), n(47120), n(26686);
var r = n(200651),
  l = n(192379),
  o = n(120356),
  i = n.n(o),
  a = n(46973),
  s = n(481060),
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
  b = n(388032),
  N = n(486193);
let m = () => {
    h.Z.getMediaEngine().once(a.aB.ConnectionStats, e => {
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
      (0, p.JG)(JSON.stringify(t, null, 2)), (0, s.showToast)((0, s.createToast)(b.NW.string(b.t["t5VZ8/"]), s.ToastType.SUCCESS))
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
          outboundLossRate: a
        } = e, s = d.Sb.getSetting();
        return (0, r.jsxs)(l.Fragment, {
          children: [s && (0, r.jsxs)("div", {
            children: [(0, r.jsx)("div", {
              className: N.graphContainer,
              children: (0, r.jsx)(u.Z, {
                dataPoints: e.pings,
                width: 258,
                height: 80
              })
            }), (0, r.jsx)("div", {
              className: N.popoutText,
              children: (0, r.jsx)("strong", {
                children: y.Z.getShortHostname(t)
              })
            })]
          }), (0, r.jsx)("div", {
            className: N.popoutText,
            children: b.NW.format(b.t["X58/lJ"], {
              averagePing: n.toFixed(0)
            })
          }), null != o ? (0, r.jsx)("div", {
            className: N.popoutText,
            children: b.NW.format(b.t["6iv2TE"], {
              lastPing: o.toFixed(0)
            })
          }) : null, null != a ? (0, r.jsx)("div", {
            className: N.popoutText,
            children: b.NW.format(b.t.VIBJMz, {
              outboundLossRate: a.toFixed(1)
            })
          }) : null, (0, r.jsxs)("div", {
            className: i()(N.popoutText, N.popoutTextDetails),
            children: [null == a ? b.NW.formatToPlainString(b.t.vggaMj, {
              badPing: 250
            }) : null, null != a ? b.NW.formatToPlainString(b.t["3pFz1N"], {
              badPing: 250,
              badLossRate: 10
            }) : null]
          })]
        })
      }, [e]),
      {
        connectionState: o,
        connectionTypeText: a
      } = e,
      p = d.Sb.getSetting(),
      x = {
        [v.hes.AWAITING_ENDPOINT]: b.NW.format(b.t.Eu2vUV, {
          url: v.yXt.STATUS
        }),
        [v.hes.CONNECTING]: b.NW.string(b.t["y+E8aG"]),
        [v.hes.AUTHENTICATING]: b.NW.string(b.t["5lGIZG"]),
        [v.hes.DISCONNECTED]: b.NW.string(b.t.fOX25O),
        [v.hes.RTC_CONNECTING]: b.NW.string(b.t.b5Ubd3),
        [v.hes.ICE_CHECKING]: b.NW.format(b.t.SyoYUV, {
          url: g.Z.getArticleURL(v.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [v.hes.DTLS_CONNECTING]: b.NW.format(b.t.SyoYUV, {
          url: g.Z.getArticleURL(v.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [v.hes.RTC_CONNECTED]: n,
        [v.hes.NO_ROUTE]: b.NW.format(b.t["2tgQnp"], {
          url: g.Z.getArticleURL(v.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [v.hes.RTC_DISCONNECTED]: b.NW.string(b.t.fOX25O)
      } [o];
    return (0, r.jsxs)(r.Fragment, {
      children: ["function" == typeof x ? x() : (0, r.jsx)("p", {
        className: i()(N.popoutText, N.popoutTextDetails),
        children: x
      }), (0, r.jsx)("hr", {
        className: N.separator
      }), (0, r.jsxs)("div", {
        className: N.popoutBottom,
        children: [(0, r.jsxs)("span", {
          className: i()(N.secured, N.textWithIcon),
          children: [(0, r.jsx)(s.mBM, {
            size: "xxs",
            color: s.TVs.colors.TEXT_POSITIVE.css,
            className: N.__invalid_icon
          }), a]
        }), p && h.Z.supports(O.AN.DIAGNOSTICS) && !__OVERLAY__ && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)(s.eee, {
            className: i()(N.debugButton, N.textWithIcon),
            onClick: t,
            children: [b.NW.string(b.t.KBoWg4), (0, r.jsx)(s.rgF, {
              size: "xxs",
              color: "currentColor",
              className: N.__invalid_icon
            })]
          }), (0, r.jsxs)(s.eee, {
            className: i()(N.copyStatsButton, N.textWithIcon),
            onClick: m,
            title: "Copy to clipboard",
            children: [b.NW.string(b.t["XEb+Sk"]), (0, r.jsx)(s.TIy, {
              size: "xxs",
              color: "currentColor",
              className: N.__invalid_icon
            })]
          })]
        }), !p && !__OVERLAY__ && (0, r.jsx)(s.eee, {
          className: N.debugButton,
          href: g.Z.getArticleURL(v.BhN.VOICE_VIDEO_TROUBLESHOOTING),
          children: b.NW.string(b.t.hvVgAQ)
        })]
      })]
    })
  }