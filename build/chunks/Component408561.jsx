/** Chunk was on 10620 **/
/** chunk id: 408561, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211266 = require("./211266.js"),
  Chunk266454 = require("./266454.js"),
  Chunk624659 = require("./624659.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk924400 = require("./924400.js"),
  Chunk987562 = require("./987562.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  let {
    transitionState: t,
    onClose: _,
    channel: h
  } = e, g = (0, u.Z)(O.TL), S = (0, i.e7)([c.default], () => c.default.getUser(h.getRecipientId()));
  return a.useEffect(() => {
    b.default.track(f.rMx.OPEN_MODAL, {
      type: "DM Mute Feedback Modal"
    })
  }, []), (0, l.jsx)(s.Z, {
    hasCloseButton: true,
    header: v.intl.string(v.t.SxsBFB),
    body: v.intl.formatToPlainString(v.t["7kb7z8"], {
      username: null == S ? true : S.username
    }),
    problems: g,
    feedbackProblems: {
      [O.YA.OTHER]: {
        subheader: v.intl.string(v.t.VQkdtL),
        hint: v.intl.string(v.t.EG3N9f)
      }
    },
    onSubmit: function(e) {
      let {
        problem: t,
        dontShowAgain: a,
        feedback: i,
        closeClicked: u
      } = e;
      a && (0, d.Q3)(r.z.USER_DM_MUTE_FEEDBACK);
      let s = null == t || u;
      (0, E.Z)(t, i, s, a), s || (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("14466").then(n.bind(n, 729328));
        return t => (0, l.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({
          body: v.intl.string(v.t.sYrCub)
        }, t))
      })
    },
    onClose: _,
    transitionState: t,
    otherKey: O.YA.OTHER,
    showHelpdeskLink: false
  })
}