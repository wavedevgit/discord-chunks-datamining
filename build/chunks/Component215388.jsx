/** Chunk was on 73628 **/
/** chunk id: 215388, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk703558 = require("./703558.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk3840 = require("./3840.js"),
  Chunk30517 = require("./30517.js");
let h = (0, Chunk772848.Z)(),
  C = (0, Chunk131704.kt)({
    id: "1",
    type: Chunk981631.d4z.DM
  });

function q() {
  return new Promise(e => {
    e({
      shouldClear: false,
      shouldRefocus: true
    })
  })
}

function b(e) {
  var t;
  let {
    hasError: A,
    maxLength: r,
    text: l
  } = e;
  return (0, n.jsxs)("div", {
    className: a()(m.maxLength, {
      [m.errorOverflow]: A
    }),
    "aria-hidden": "true",
    children: [null != (t = null == l ? true : l.length) ? t : 0, " ", null != r && "/ ".concat(r)]
  })
}

function v(e) {
  var t;
  let {
    "aria-labelledby": A,
    className: l,
    id: o,
    autoFocus: c,
    maxLength: f,
    onChange: m,
    onSubmit: v,
    showCharacterCount: x = false,
    placeholder: j,
    required: U,
    value: V,
    enableThemedBackground: P = false,
    parentModalKey: O
  } = e, I = (0, i.Gc0)(), [N, F] = r.useState(() => (0, s.JM)(V)), y = r.useRef(true === c), K = null != A ? A : null == I ? true : I.titleId, T = null != (t = null == I ? true : I.errorId) ? t : h, Z = r.useMemo(() => ({
    analyticsName: "simple",
    autocomplete: {
      alwaysUseLayer: true,
      small: true
    },
    disableAutoFocus: true !== c,
    drafts: {
      type: u.d.ChannelMessage
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
  return (0, n.jsxs)(d.ZP, {
    "aria-describedby": T,
    "aria-labelledby": K,
    innerClassName: a()(l, p.textArea),
    id: o,
    maxCharacterCount: f,
    onChange: function(e, t, A) {
      m(t), F(A)
    },
    placeholder: j,
    required: U,
    channel: C,
    textValue: V,
    richValue: N,
    type: Z,
    onBlur: () => {
      y.current = false
    },
    onFocus: () => {
      y.current = true
    },
    focused: y.current,
    onSubmit: null != v ? v : q,
    disableThemedBackground: !P,
    parentModalKey: O,
    emojiPickerCloseOnModalOuterClick: true,
    children: [true === x && (0, n.jsx)(b, {
      hasError: null != I.error || null != f && V.length > f,
      text: V,
      maxLength: f
    }), null != f && (0, n.jsx)(i.nn4, {
      id: h,
      children: g.intl.format(g.t["+DFxLS"], {
        maxLength: f
      })
    })]
  })
}