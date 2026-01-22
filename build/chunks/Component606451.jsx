/** Chunk was on 31748 **/
/** chunk id: 606451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk108531 = require("./108531.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk971778 = require("./971778.js"),
  Chunk494783 = require("./494783.js"),
  Chunk342887 = require("./342887.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk938663 = require("./938663.js");

function b() {
  let e, t, n, b, g, m, {
      hasActiveDownloads: h,
      progress: A
    } = (e = (0, s.cf)([c.A], () => c.A.getOngoingDownloads()), t = r.useRef({}), r.useEffect(() => {
      0 === Object.entries(e).length && (t.current = {}), Object.assign(t.current, e)
    }, [e]), b = (n = Object.values(t.current)).some(e => {
      let {
        downloadedBytes: t
      } = e;
      return (null != t ? t : 0) > 0
    }), g = (0, i.sumBy)(n, e => {
      var t;
      return null != (t = null == e ? true : e.downloadedBytes) ? t : 0
    }), {
      hasActiveDownloads: b,
      progress: 0 === (m = (0, i.sumBy)(n, e => {
        var t;
        return null != (t = null == e ? true : e.totalBytes) ? t : 0
      })) ? 0 : Math.floor(g / m * 100)
    }),
    {
      activeVoice: y
    } = (0, u.f)();
  return (0, o.pnh)(h ? null != y ? "voice-on" : "voice-off" : null, {
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
  }, "respect-motion-settings")((e, t) => null != t ? (0, l.jsx)(a.animated.div, {
    style: e,
    className: p.zh,
    children: (0, l.jsxs)("div", {
      className: p.AY,
      children: [(0, l.jsxs)("div", {
        className: p.l_,
        children: [(0, l.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-strong",
          children: f.intl.format(f.t["r+uZYZ"], {
            progress: A
          })
        }), (0, l.jsx)(o.QWc, {
          text: f.intl.string(f.t["ETE/oC"]),
          onClick: d.HD,
          variant: "always-white",
          textVariant: "text-sm/normal"
        })]
      }), (0, l.jsx)(o.kej, {
        percent: A,
        size: o.kej.Sizes.XSMALL
      })]
    })
  }) : null)
}