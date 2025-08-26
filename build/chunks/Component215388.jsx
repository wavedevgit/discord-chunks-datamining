/** Chunk was on 73628 **/
/** chunk id: 215388, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk231319 = require("./231319.js"),
  Chunk8542 = require("./8542.js");
let b = (0, Chunk772848.Z)(),
  q = (0, Chunk131704.kt)({
    id: "1",
    type: Chunk981631.d4z.DM
  });

function h() {
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
    className: a()(m.maxLength, {
      [m.errorOverflow]: t
    }),
    "aria-hidden": "true",
    children: [null != (A = null == l ? true : l.length) ? A : 0, " ", null != r && "/ ".concat(r)]
  })
}

function v(e) {
  var A;
  let {
    "aria-labelledby": t,
    className: l,
    id: i,
    autoFocus: c,
    maxLength: f,
    onChange: m,
    onSubmit: v,
    showCharacterCount: j = false,
    placeholder: x,
    required: U,
    value: V,
    enableThemedBackground: O = false,
    parentModalKey: P
  } = e, F = (0, o.Gc0)(), [I, y] = r.useState(() => (0, s.JM)(V)), N = r.useRef(true === c), K = null != t ? t : null == F ? true : F.titleId, T = null != (A = null == F ? true : F.errorId) ? A : b, X = r.useMemo(() => ({
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
    id: i,
    maxCharacterCount: f,
    onChange: function(e, A, t) {
      m(A), y(t)
    },
    placeholder: x,
    required: U,
    channel: q,
    textValue: V,
    richValue: I,
    type: X,
    onBlur: () => {
      N.current = false
    },
    onFocus: () => {
      N.current = true
    },
    focused: N.current,
    onSubmit: null != v ? v : h,
    disableThemedBackground: !O,
    parentModalKey: P,
    emojiPickerCloseOnModalOuterClick: true,
    children: [true === j && (0, n.jsx)(C, {
      hasError: null != F.error || null != f && V.length > f,
      text: V,
      maxLength: f
    }), null != f && (0, n.jsx)(o.nn4, {
      id: b,
      children: g.intl.format(g.t["+DFxLS"], {
        maxLength: f
      })
    })]
  })
}