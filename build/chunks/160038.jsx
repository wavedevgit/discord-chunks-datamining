/** Chunk was on 82096 **/
/** chunk id: 160038, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./49124.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk46973 = require("./46973.js"),
  Chunk481060 = require("./481060.js"),
  Chunk304680 = require("./304680.js"),
  Chunk706619 = require("./706619.js"),
  Chunk695346 = require("./695346.js"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk63063 = require("./63063.js"),
  Chunk476221 = require("./476221.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.js"),
  Chunk684680 = require("./684680.js");
let E = () => {
    Chunk131951.Z.getMediaEngine().once(Chunk46973.aB.ConnectionStats, e => {
      let t = JSON.stringify(Object.values(y.Yn).map(t => {
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
          (null == e || null == (r = e.transport) ? true : r.localAddress) != null && (e.transport.localAddress = "(redacted)")
        }
        return n
      }).filter(e => e.length > 0), null, 2);
      (0, g.JG)(t, () => (0, a.showToast)((0, a.createToast)(b.intl.string(b.t["t5VZ8/"]), a.ToastType.SUCCESS)))
    })
  },
  m = function(e) {
    (0, l.useEffect)(() => {
      h.default.track(N.rMx.OPEN_POPOUT, {
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
          outboundLossRate: s
        } = e, a = d.Sb.getSetting();
        return <l.Fragment>{a && <div>{<div className={x.graphContainer}><u.Z dataPoints={e.pings} width={258} height={80} /></div>}{<div className={x.popoutText}><strong>{O.Z.getShortHostname(t)}</strong></div>}</div>}{<div className={x.popoutText}>{b.intl.format(b.t["X58/lJ"], {
              averagePing: n.toFixed(0)
            })}</div>}{null != i ? <div className={x.popoutText}>{b.intl.format(b.t["6iv2TE"], {
              lastPing: i.toFixed(0)
            })}</div> : null}{null != s ? <div className={x.popoutText}>{b.intl.format(b.t.VIBJMz, {
              outboundLossRate: s.toFixed(1)
            })}</div> : null}{<div className={o()(x.popoutText, x.popoutTextDetails)}>{null == s ? b.intl.formatToPlainString(b.t.vggaMj, {
              badPing: 250
            }) : null}{null != s ? b.intl.formatToPlainString(b.t["3pFz1N"], {
              badPing: 250,
              badLossRate: 10
            }) : null}</div>}</l.Fragment>
      }, [e]),
      {
        connectionState: i,
        connectionTypeText: s
      } = e,
      g = d.Sb.getSetting(),
      m = {
        [N.hes.AWAITING_ENDPOINT]: b.intl.format(b.t.Eu2vUV, {
          url: N.yXt.STATUS
        }),
        [N.hes.CONNECTING]: b.intl.string(b.t["y+E8aG"]),
        [N.hes.AUTHENTICATING]: b.intl.string(b.t["5lGIZG"]),
        [N.hes.DISCONNECTED]: b.intl.string(b.t.fOX25O),
        [N.hes.RTC_CONNECTING]: b.intl.string(b.t.b5Ubd3),
        [N.hes.ICE_CHECKING]: b.intl.format(b.t.SyoYUV, {
          url: p.Z.getArticleURL(N.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [N.hes.DTLS_CONNECTING]: b.intl.format(b.t.SyoYUV, {
          url: p.Z.getArticleURL(N.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [N.hes.RTC_CONNECTED]: n,
        [N.hes.NO_ROUTE]: b.intl.format(b.t["2tgQnp"], {
          url: p.Z.getArticleURL(N.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [N.hes.RTC_DISCONNECTED]: b.intl.string(b.t.fOX25O)
      } [i];
    return <r.Fragment>{"function" == typeof m ? m() : <p className={o()(x.popoutText, x.popoutTextDetails)}>{m}</p>}{<hr className={x.separator} />}{<div className={x.popoutBottom}>{<span className={o()(x.secured, x.textWithIcon)}>{<a.mBM size={"xxs"} color={a.TVs.colors.TEXT_FEEDBACK_POSITIVE.css} className={x.__invalid_icon} />}{s}</span>}{g && f.Z.supports(y.AN.DIAGNOSTICS) && !__OVERLAY__ && <r.Fragment>{<a.eee className={o()(x.debugButton, x.textWithIcon)} onClick={t}>{b.intl.string(b.t.KBoWg4)}{<a.rgF size={"xxs"} color={"currentColor"} className={x.__invalid_icon} />}</a.eee>}{<a.eee className={o()(x.copyStatsButton, x.textWithIcon)} onClick={E} title={"Copy to clipboard"}>{b.intl.string(b.t["XEb+Sk"])}{<a.TIy size={"xxs"} color={"currentColor"} className={x.__invalid_icon} />}</a.eee>}</r.Fragment>}{!g && !__OVERLAY__ && <a.eee className={x.debugButton} href={p.Z.getArticleURL(N.BhN.VOICE_VIDEO_TROUBLESHOOTING)}>{b.intl.string(b.t.hvVgAQ)}</a.eee>}</div>}</r.Fragment>
  }