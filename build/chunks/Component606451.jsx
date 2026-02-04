/** Chunk was on 17869 **/
/** chunk id: 606451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk92674 = require("./92674.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk971778 = require("./971778.js"),
  Chunk494783 = require("./494783.js"),
  Chunk342887 = require("./342887.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk938663 = require("./938663.js");

function f() {
  let e, t, n, f, m, g, {
      hasActiveDownloads: A,
      progress: b
    } = (e = (0, s.cf)([c.A], () => c.A.getOngoingDownloads()), t = r.useRef({}), r.useEffect(() => {
      0 === Object.entries(e).length && (t.current = {}), Object.assign(t.current, e)
    }, [e]), f = (n = Object.values(t.current)).some(e => {
      let {
        downloadedBytes: t
      } = e;
      return (null != t ? t : 0) > 0
    }), m = (0, i.sumBy)(n, e => {
      var t;
      return null != (t = null == e ? true : e.downloadedBytes) ? t : 0
    }), {
      hasActiveDownloads: f,
      progress: 0 === (g = (0, i.sumBy)(n, e => {
        var t;
        return null != (t = null == e ? true : e.totalBytes) ? t : 0
      })) ? 0 : Math.floor(m / g * 100)
    }),
    {
      activeVoice: _
    } = (0, u.f)();
  return (0, o.pnh)(A ? null != _ ? "voice-on" : "voice-off" : null, {
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
          children: h.intl.format(h.t["r+uZYZ"], {
            progress: b
          })
        }), (0, l.jsx)(o.QWc, {
          text: h.intl.string(h.t["ETE/oC"]),
          onClick: d.HD,
          variant: "always-white",
          textVariant: "text-sm/normal"
        })]
      }), (0, l.jsx)(o.iCB, {
        percent: b,
        size: o.iCB.Sizes.XSMALL
      })]
    })
  }) : null)
}