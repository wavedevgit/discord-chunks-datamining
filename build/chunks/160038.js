/** Chunk was on 29611 **/
n.d(t, {
  Z: () => O
}), n(47120), n(26686);
var i = n(200651),
  o = n(192379),
  r = n(120356),
  a = n.n(r),
  l = n(46973),
  c = n(481060),
  s = n(304680),
  u = n(706619),
  d = n(695346),
  _ = n(131951),
  h = n(626135),
  f = n(572004),
  p = n(63063),
  g = n(476221),
  v = n(981631),
  b = n(65154),
  y = n(388032),
  m = n(926093);
let I = () => {
    _.Z.getMediaEngine().once(l.aB.ConnectionStats, e => {
      let t = Object.values(b.Yn).map(t => {
        let n = e.filter(e => {
          let {
            connection: n
          } = e;
          return n.context === t
        }).map((e, n) => {
          let i = e.stats;
          return i.context = t, i.index = n, i
        });
        for (let e of n) {
          var i;
          (null == e ? void 0 : null === (i = e.transport) || void 0 === i ? void 0 : i.localAddress) != null && (e.transport.localAddress = "(redacted)")
        }
        return n
      }).filter(e => e.length > 0);
      (0, f.JG)(JSON.stringify(t, null, 2)), (0, c.showToast)((0, c.createToast)(y.NW.string(y.t["t5VZ8/"]), c.ToastType.SUCCESS))
    })
  },
  O = function(e) {
    (0, o.useEffect)(() => {
      h.default.track(v.rMx.OPEN_POPOUT, {
        type: "RTC Connection"
      })
    }, []);
    let t = (0, o.useCallback)(() => {
        let {
          closePopout: t
        } = e;
        null != t && t(), s.bA()
      }, [e]),
      n = (0, o.useCallback)(() => {
        let {
          hostname: t,
          averagePing: n,
          lastPing: r,
          outboundLossRate: l
        } = e, c = d.Sb.getSetting();
        return (0, i.jsxs)(o.Fragment, {
          children: [c && (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
              className: m.graphContainer,
              children: (0, i.jsx)(u.Z, {
                dataPoints: e.pings,
                width: 258,
                height: 80
              })
            }), (0, i.jsx)("div", {
              className: m.popoutText,
              children: (0, i.jsx)("strong", {
                children: g.Z.getShortHostname(t)
              })
            })]
          }), (0, i.jsx)("div", {
            className: m.popoutText,
            children: y.NW.format(y.t["X58/lJ"], {
              averagePing: n.toFixed(0)
            })
          }), null != r ? (0, i.jsx)("div", {
            className: m.popoutText,
            children: y.NW.format(y.t["6iv2TE"], {
              lastPing: r.toFixed(0)
            })
          }) : null, null != l ? (0, i.jsx)("div", {
            className: m.popoutText,
            children: y.NW.format(y.t.VIBJMz, {
              outboundLossRate: l.toFixed(1)
            })
          }) : null, (0, i.jsxs)("div", {
            className: a()(m.popoutText, m.popoutTextDetails),
            children: [null == l ? y.NW.formatToPlainString(y.t.vggaMj, {
              badPing: 250
            }) : null, null != l ? y.NW.formatToPlainString(y.t["3pFz1N"], {
              badPing: 250,
              badLossRate: 10
            }) : null]
          })]
        })
      }, [e]),
      {
        connectionState: r,
        connectionTypeText: l
      } = e,
      f = d.Sb.getSetting(),
      O = {
        [v.hes.AWAITING_ENDPOINT]: y.NW.format(y.t.Eu2vUV, {
          url: v.yXt.STATUS
        }),
        [v.hes.CONNECTING]: y.NW.string(y.t["y+E8aG"]),
        [v.hes.AUTHENTICATING]: y.NW.string(y.t["5lGIZG"]),
        [v.hes.DISCONNECTED]: y.NW.string(y.t.fOX25O),
        [v.hes.RTC_CONNECTING]: y.NW.string(y.t.b5Ubd3),
        [v.hes.ICE_CHECKING]: y.NW.format(y.t.SyoYUV, {
          url: p.Z.getArticleURL(v.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [v.hes.DTLS_CONNECTING]: y.NW.format(y.t.SyoYUV, {
          url: p.Z.getArticleURL(v.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [v.hes.RTC_CONNECTED]: n,
        [v.hes.NO_ROUTE]: y.NW.format(y.t["2tgQnp"], {
          url: p.Z.getArticleURL(v.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [v.hes.RTC_DISCONNECTED]: y.NW.string(y.t.fOX25O)
      } [r];
    return (0, i.jsxs)(i.Fragment, {
      children: ["function" == typeof O ? O() : (0, i.jsx)("p", {
        className: a()(m.popoutText, m.popoutTextDetails),
        children: O
      }), (0, i.jsx)("hr", {
        className: m.separator
      }), (0, i.jsxs)("div", {
        className: m.popoutBottom,
        children: [(0, i.jsxs)("span", {
          className: a()(m.secured, m.textWithIcon),
          children: [(0, i.jsx)(c.mBM, {
            size: "xxs",
            color: c.TVs.colors.TEXT_POSITIVE.css,
            className: m.__invalid_icon
          }), l]
        }), f && _.Z.supports(b.AN.DIAGNOSTICS) && !__OVERLAY__ && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsxs)(c.eee, {
            className: a()(m.debugButton, m.textWithIcon),
            onClick: t,
            children: [y.NW.string(y.t.KBoWg4), (0, i.jsx)(c.rgF, {
              size: "xxs",
              color: "currentColor",
              className: m.__invalid_icon
            })]
          }), (0, i.jsxs)(c.eee, {
            className: a()(m.copyStatsButton, m.textWithIcon),
            onClick: I,
            title: "Copy to clipboard",
            children: [y.NW.string(y.t["XEb+Sk"]), (0, i.jsx)(c.TIy, {
              size: "xxs",
              color: "currentColor",
              className: m.__invalid_icon
            })]
          })]
        }), !f && !__OVERLAY__ && (0, i.jsx)(c.eee, {
          className: m.debugButton,
          href: p.Z.getArticleURL(v.BhN.VOICE_VIDEO_TROUBLESHOOTING),
          children: y.NW.string(y.t.hvVgAQ)
        })]
      })]
    })
  }