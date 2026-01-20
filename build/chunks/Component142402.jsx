/** Chunk was on 16582 **/
/** chunk id: 142402, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk957115 = require("./957115.js"),
  Chunk13137 = require("./13137.jsx"),
  Chunk698066 = require("./698066.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk40207 = require("./40207.js");

function f(e) {
  let {
    isStreamer: t,
    stream: f,
    streamApplication: p,
    onClose: g,
    transitionState: j,
    analyticsData: y
  } = e;
  r.useEffect(() => {
    u.default.track(b.rMx.OPEN_MODAL, {
      type: "Stream Problem Report",
      other_user_id: f.ownerId,
      application_id: null != p ? p.id : null,
      application_name: null != p ? p.name : null,
      game_id: null != p ? p.id : null,
      source: "Stream End"
    })
  }, [f.ownerId, p]);
  let O = _.intl.string(_.t["5smP3R"]),
    h = _.intl.string(_.t["0uxA2V"]),
    v = _.intl.string(_.t.CqjnLN),
    E = {
      impressionName: i.ImpressionNames.STREAM_FEEDBACK_MODAL,
      impressionProperties: {
        media_session_id: y.media_session_id,
        rtc_connection_id: y.rtc_connection_id,
        parent_media_session_id: y.parent_media_session_id
      }
    },
    S = {
      value: t ? s.tX.STREAMING : s.tX.STREAM_WATCHING,
      label: _.intl.string(t ? m.default["0ZBLiZ"] : m.default.TVTIT1),
      problemsHeader: _.intl.string(_.t["6Y1t5P"]),
      problemOptions: (0, c.Ez)({
        isStreamer: t
      }),
      freeformConfig: {
        value: s.MJ.FREEFORM,
        label: _.intl.string(_.t.emlT91)
      }
    };
  return (0, a.jsx)(l.Z, {
    onSubmit: function(e) {
      var t, r;
      let {
        dontShowAgain: i,
        rating: l,
        feedback: u,
        category: b,
        problem: m
      } = e;
      i && (0, c.Uv)({
        feedbackType: s.nw.STREAM,
        location: "StreamFeedback"
      }), null != l && ((0, d.Z)({
        problem: null != (t = null == m ? true : m.value) ? t : null,
        category: b,
        variant: null != (r = null == m ? true : m.variant) ? r : null,
        stream: f,
        feedback: u,
        streamApplication: p,
        analyticsData: y,
        location: "Stream End",
        rating: l
      }), null != m && (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("14466").then(n.bind(n, 729328));
        return t => (0, a.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
              var a;
              a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = a
            })
          }
          return e
        }({
          body: _.intl.string(_.t.mMTVnv)
        }, t))
      }))
    },
    onClose: g,
    ratingHeader: O,
    ratingEmojiKind: "face",
    ratingBody: t ? h : v,
    categoriesHeader: _.intl.string(m.default.tq8598),
    optionsTree: [S],
    impression: E,
    transitionState: j
  })
}