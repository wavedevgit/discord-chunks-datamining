/** Chunk was on 31748 **/
/** chunk id: 606451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk864605 = require("./864605.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk971778 = require("./971778.js"),
  Chunk494783 = require("./494783.js"),
  Chunk342887 = require("./342887.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk938663 = require("./938663.js");

function g() {
  let e, t, n, g, m, _, {
      hasActiveDownloads: h,
      progress: y
    } = (e = (0, o.cf)([c.A], () => c.A.getOngoingDownloads()), t = l.useRef({}), l.useEffect(() => {
      0 === Object.entries(e).length && (t.current = {}), Object.assign(t.current, e)
    }, [e]), g = (n = Object.values(t.current)).some(e => {
      let {
        downloadedBytes: t
      } = e;
      return (null != t ? t : 0) > 0
    }), m = (0, i.sumBy)(n, e => {
      var t;
      return null != (t = null == e ? true : e.downloadedBytes) ? t : 0
    }), {
      hasActiveDownloads: g,
      progress: 0 === (_ = (0, i.sumBy)(n, e => {
        var t;
        return null != (t = null == e ? true : e.totalBytes) ? t : 0
      })) ? 0 : Math.floor(m / _ * 100)
    }),
    {
      activeVoice: A
    } = (0, u.f)();
  return (0, s.pnh)(h ? null != A ? "voice-on" : "voice-off" : null, {
    from: {
      opacity: 0,
      translateY: 20
    },
    enter: e => ({
      opacity: 1,
      translateY: "voice-on" === e ? false : 0
    }),
    leave: {
      opacity: 0,
      translateY: 80
    }
  }, "respect-motion-settings")((e, t) => null != t ? (0, r.jsx)(a.animated.div, {
    style: e,
    className: p.zh,
    children: (0, r.jsxs)("div", {
      className: p.AY,
      children: [(0, r.jsxs)("div", {
        className: p.l_,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-strong",
          children: f.intl.format(f.t["r+uZYZ"], {
            progress: y
          })
        }), (0, r.jsx)(s.QWc, {
          text: f.intl.string(f.t["ETE/oC"]),
          onClick: d.HD,
          variant: "always-white",
          textVariant: "text-sm/normal"
        })]
      }), (0, r.jsx)(s.iCB, {
        percent: y,
        size: s.iCB.Sizes.XSMALL
      })]
    })
  }) : null)
}