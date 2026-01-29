/** Chunk was on 2827 **/
/** chunk id: 124064, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk355622 = require("./355622.js"),
  Chunk408018 = require("./408018.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk95701 = require("./95701.js"),
  Chunk128450 = require("./128450.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk973746 = require("./973746.js");
let A = (0, Chunk915089.Ld)(),
  f = (0, Chunk95701.createChannelRecord)({
    id: "1",
    type: Chunk652215.rbe.DM
  }),
  b = (0, Chunk915089.Ld)();

function h(e) {
  let {
    sectionTitle: t,
    errors: n,
    onBioChange: c,
    pendingBio: u,
    placeholder: h,
    currentBio: E,
    disabled: O = false
  } = e, [C, x] = i.useState(null != u ? u : E), [S, T] = i.useState((0, a.x7)(C)), I = i.useRef(E), y = i.useRef(false);
  return i.useEffect(() => {
    if (I.current !== E) {
      let e = (0, a.x7)(E);
      x(E), T(e)
    }
    I.current = E
  }, [E]), (0, r.jsxs)(_.A, {
    title: t,
    titleId: A,
    description: m.intl.string(m.t.Bbw6Ac),
    errors: n,
    disabled: O,
    children: [(0, r.jsx)(o.Ay, {
      "aria-describedby": b,
      "aria-labelledby": A,
      className: g.i,
      innerClassName: g.Z,
      maxCharacterCount: p.NA2,
      onChange: function(e, t, n) {
        t !== C && (x(t), T(n), c(t))
      },
      placeholder: h,
      channel: f,
      textValue: C,
      richValue: S,
      emojiPickerCloseOnModalOuterClick: true,
      parentModalKey: d.USER_SETTINGS_MODAL_KEY,
      type: s.oU.PROFILE_BIO_INPUT,
      onBlur: () => {
        y.current = false
      },
      onFocus: () => {
        y.current = true
      },
      focused: y.current,
      onSubmit: function() {
        return new Promise(e => {
          e({
            shouldClear: false,
            shouldRefocus: true
          })
        })
      }
    }), (0, r.jsx)(l.AC4, {
      id: b,
      children: m.intl.format(m.t["+DFxLc"], {
        maxLength: p.NA2
      })
    })]
  })
}