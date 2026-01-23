/** Chunk was on 80760 **/
/** chunk id: 218738, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk397927 = require("./397927.js"),
  Chunk930932 = require("./930932.js"),
  Chunk382935 = require("./382935.jsx"),
  Chunk835806 = require("./835806.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk670455 = require("./670455.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk716829 = require("./716829.js");

function p(e) {
  let {
    isStreamer: t,
    stream: p,
    streamApplication: f,
    onClose: g,
    transitionState: O,
    analyticsData: j
  } = e;
  i.useEffect(() => {
    s.default.track(u.HAw.OPEN_MODAL, {
      type: "Stream Problem Report",
      other_user_id: p.ownerId,
      application_id: null != f ? f.id : null,
      application_name: null != f ? f.name : null,
      game_id: null != f ? f.id : null,
      source: "Stream End"
    })
  }, [p.ownerId, f]);
  let y = b.intl.string(b.t["5smP3R"]),
    E = b.intl.string(b.t["0uxA2V"]),
    v = b.intl.string(b.t.CqjnLN),
    S = {
      impressionName: o.ImpressionNames.STREAM_FEEDBACK_MODAL,
      impressionProperties: {
        media_session_id: j.media_session_id,
        rtc_connection_id: j.rtc_connection_id,
        parent_media_session_id: j.parent_media_session_id
      }
    },
    w = {
      value: t ? d.Eq.STREAMING : d.Eq.STREAM_WATCHING,
      label: b.intl.string(t ? m.default["0ZBLiZ"] : m.default.TVTIT1),
      problemsHeader: b.intl.string(b.t["6Y1t5P"]),
      problemOptions: (0, l.wq)({
        isStreamer: t
      }),
      freeformConfig: {
        value: d.j6.FREEFORM,
        label: b.intl.string(b.t.emlT91)
      }
    };
  return (0, r.jsx)(_.A, {
    onSubmit: function(e) {
      var t, i;
      let {
        dontShowAgain: o,
        rating: _,
        feedback: s,
        category: u,
        problem: m
      } = e;
      o && (0, l.n3)({
        feedbackType: d.MW.STREAM,
        location: "StreamFeedback"
      }), null == _ || ((0, c.A)({
        problem: null != (t = null == m ? true : m.value) ? t : null,
        category: u,
        variant: null != (i = null == m ? true : m.variant) ? i : null,
        stream: p,
        feedback: s,
        streamApplication: f,
        analyticsData: j,
        location: "Stream End",
        rating: _
      }), null != m && (0, a.mMO)(async () => {
        let {
          default: e
        } = await n.e("37836").then(n.bind(n, 845671));
        return t => (0, r.jsx)(e, function(e) {
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
          body: b.intl.string(b.t.mMTVnv)
        }, t))
      }))
    },
    onClose: g,
    ratingHeader: y,
    ratingEmojiKind: "face",
    ratingBody: t ? E : v,
    categoriesHeader: b.intl.string(m.default.tq8598),
    optionsTree: [w],
    impression: S,
    transitionState: O
  })
}