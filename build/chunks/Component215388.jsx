/** Chunk was on 73628 **/
/** chunk id: 215388, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk886025 = require("./886025.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk703558 = require("./703558.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk980272 = require("./980272.js"),
  Chunk258422 = require("./258422.js");
let h = (0, Chunk772848.Z)(),
  v = (0, Chunk131704.kt)({
    id: "1",
    type: Chunk981631.d4z.DM
  });

function b() {
  return new Promise(e => {
    e({
      shouldClear: false,
      shouldRefocus: true
    })
  })
}

function C(e) {
  var A;
  let {
    hasError: t,
    maxLength: r,
    text: l
  } = e;
  return (0, n.jsxs)("div", {
    className: a()(q.maxLength, {
      [q.errorOverflow]: t
    }),
    "aria-hidden": "true",
    children: [null != (A = null == l ? true : l.length) ? A : 0, " ", null != r && "/ ".concat(r)]
  })
}

function U(e) {
  var A;
  let {
    "aria-labelledby": t,
    className: l,
    id: i,
    autoFocus: c,
    maxLength: f,
    onChange: q,
    onSubmit: U,
    showCharacterCount: j = false,
    placeholder: V,
    required: x,
    value: P,
    enableThemedBackground: O = false,
    parentModalKey: F,
    label: I,
    errorMessage: K
  } = e, y = (0, s.Gc0)(), [N, T] = r.useState(() => (0, d.JM)(P)), X = r.useRef(true === c), Z = null != t ? t : null == y ? true : y.titleId, W = null != (A = null == y ? true : y.errorId) ? A : h;

  function Q(e, A, t) {
    q(A), T(t)
  }
  let z = r.useMemo(() => ({
    analyticsName: "simple",
    autocomplete: {
      alwaysUseLayer: true,
      small: true
    },
    disableAutoFocus: true !== c,
    drafts: {
      type: g.d.ChannelMessage
    },
    emojis: {
      button: true
    },
    permissions: {
      requireSendMessages: false
    },
    submit: {
      useDisabledStylesOnSubmit: true,
      disableEnterToSubmit: true
    }
  }), [c]);
  return (0, n.jsx)(o.N, {
    label: I,
    errorMessage: K,
    id: i,
    required: x,
    children: e => {
      var A, t;
      return (0, n.jsxs)(u.ZP, {
        id: null != (A = null == e ? true : e.controlId) ? A : i,
        "aria-describedby": null != (t = null == e ? true : e.describedById) ? t : W,
        "aria-labelledby": Z,
        "aria-errormessage": null == e ? true : e.errorMessageId,
        "aria-invalid": (null == e ? true : e.errorMessageId) != null,
        className: m.textArea,
        innerClassName: a()(l, m.textAreaInner),
        maxCharacterCount: f,
        onChange: Q,
        placeholder: V,
        required: x,
        channel: v,
        textValue: P,
        richValue: N,
        type: z,
        onBlur: () => {
          X.current = false
        },
        onFocus: () => {
          X.current = true
        },
        focused: X.current,
        onSubmit: null != U ? U : b,
        disableThemedBackground: !O,
        parentModalKey: F,
        emojiPickerCloseOnModalOuterClick: true,
        children: [true === j && (0, n.jsx)(C, {
          hasError: null != y.error || null != f && P.length > f,
          text: P,
          maxLength: f
        }), null != f && (0, n.jsx)(s.nn4, {
          id: h,
          children: p.intl.format(p.t["+DFxLS"], {
            maxLength: f
          })
        })]
      })
    }
  })
}