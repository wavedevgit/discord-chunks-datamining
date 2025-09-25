/** Chunk was on 73628 **/
/** chunk id: 215388, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
let v = (0, Chunk772848.Z)(),
  q = (0, Chunk131704.kt)({
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
  var t;
  let {
    hasError: A,
    maxLength: n,
    text: a
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(h.maxLength, {
      [h.errorOverflow]: A
    }),
    "aria-hidden": "true",
    children: [null != (t = null == a ? true : a.length) ? t : 0, " ", null != n && "/ ".concat(n)]
  })
}

function j(e) {
  var t;
  let {
    "aria-labelledby": A,
    className: a,
    id: i,
    autoFocus: u,
    maxLength: f,
    onChange: h,
    onSubmit: j,
    showCharacterCount: x = false,
    placeholder: U,
    required: V,
    value: O,
    enableThemedBackground: P = false,
    parentModalKey: F,
    label: y,
    errorMessage: I
  } = e, N = (0, s.Gc0)(), [T, K] = n.useState(() => (0, d.JM)(O)), Z = n.useRef(true === u), W = null != A ? A : null == N ? true : N.titleId, X = null != (t = null == N ? true : N.errorId) ? t : v;

  function Q(e, t, A) {
    h(t), K(A)
  }
  let z = n.useMemo(() => ({
    analyticsName: "simple",
    autocomplete: {
      alwaysUseLayer: true,
      small: true
    },
    disableAutoFocus: true !== u,
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
  }), [u]);
  return (0, r.jsx)(o.N, {
    label: y,
    errorMessage: I,
    id: i,
    required: V,
    children: e => {
      var t, A;
      return (0, r.jsxs)(c.ZP, {
        id: null != (t = null == e ? true : e.controlId) ? t : i,
        "aria-describedby": null != (A = null == e ? true : e.describedById) ? A : X,
        "aria-labelledby": W,
        "aria-errormessage": null == e ? true : e.errorMessageId,
        "aria-invalid": (null == e ? true : e.errorMessageId) != null,
        className: m.textArea,
        innerClassName: l()(a, m.textAreaInner),
        maxCharacterCount: f,
        onChange: Q,
        placeholder: U,
        required: V,
        channel: q,
        textValue: O,
        richValue: T,
        type: z,
        onBlur: () => {
          Z.current = false
        },
        onFocus: () => {
          Z.current = true
        },
        focused: Z.current,
        onSubmit: null != j ? j : b,
        disableThemedBackground: !P,
        parentModalKey: F,
        emojiPickerCloseOnModalOuterClick: true,
        children: [true === x && (0, r.jsx)(C, {
          hasError: null != N.error || null != f && O.length > f,
          text: O,
          maxLength: f
        }), null != f && (0, r.jsx)(s.nn4, {
          id: v,
          children: p.intl.format(p.t["+DFxLS"], {
            maxLength: f
          })
        })]
      })
    }
  })
}