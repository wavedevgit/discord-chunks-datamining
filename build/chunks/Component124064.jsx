/** Chunk was on 5606 **/
/** chunk id: 124064, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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
let f = (0, Chunk915089.Ld)(),
  b = (0, Chunk95701.createChannelRecord)({
    id: "1",
    type: Chunk652215.rbe.DM
  }),
  h = (0, Chunk915089.Ld)();

function A(e) {
  let {
    sectionTitle: t,
    errors: n,
    onBioChange: c,
    pendingBio: u,
    placeholder: A,
    currentBio: E,
    disabled: x = false
  } = e, [O, C] = i.useState(null != u ? u : E), [y, j] = i.useState((0, a.x7)(O)), T = i.useRef(E), v = i.useRef(false);
  return i.useEffect(() => {
    if (T.current !== E) {
      let e = (0, a.x7)(E);
      C(E), j(e)
    }
    T.current = E
  }, [E]), (0, r.jsxs)(p.A, {
    title: t,
    titleId: f,
    description: m.intl.string(m.t.Bbw6Ac),
    errors: n,
    disabled: x,
    children: [(0, r.jsx)(o.Ay, {
      "aria-describedby": h,
      "aria-labelledby": f,
      className: g.i,
      innerClassName: g.Z,
      maxCharacterCount: _.NA2,
      onChange: function(e, t, n) {
        t !== O && (C(t), j(n), c(t))
      },
      placeholder: A,
      channel: b,
      textValue: O,
      richValue: y,
      emojiPickerCloseOnModalOuterClick: true,
      parentModalKey: d.USER_SETTINGS_MODAL_KEY,
      type: s.oU.PROFILE_BIO_INPUT,
      onBlur: () => {
        v.current = false
      },
      onFocus: () => {
        v.current = true
      },
      focused: v.current,
      onSubmit: function() {
        return new Promise(e => {
          e({
            shouldClear: false,
            shouldRefocus: true
          })
        })
      }
    }), (0, r.jsx)(l.AC4, {
      id: h,
      children: m.intl.format(m.t["+DFxLc"], {
        maxLength: _.NA2
      })
    })]
  })
}