/** Chunk was on 96888 **/
/** chunk id: 13137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk572539 = require("./572539.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk764920 = require("./764920.jsx"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk862083 = require("./862083.js");
let g = e => s().shuffle(e.map(e => {
  var t, n, a;
  return n = function(e) {
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
  }({}, e), a = a = {
    problemOptions: s().shuffle(e.problemOptions).concat(null != (t = e.freeformConfig) ? t : [])
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(a)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
  }), n
}));

function h(e) {
  var t;
  let n, i, {
      onMount: o,
      onSubmit: h,
      onClose: S,
      ratingHeader: j,
      ratingBody: y,
      ratingOptions: N,
      ratingEmojiKind: C,
      initialRating: D = null,
      categoriesHeader: x,
      optionsTree: L,
      hideDontShowAgainCheckbox: I,
      impression: P,
      transitionState: T
    } = e,
    F = (0, c.Z)(L),
    [R, M] = l.useState(g(L));
  l.useEffect(() => {
    s().isEqual(F, L) || M(g(L))
  }, [L, F]);
  let A = (0, f.Dt)(),
    [k, w] = l.useState(false),
    [U, Z] = l.useState(D),
    [$, H] = l.useState(null),
    [B, G] = l.useState(null),
    [J, K] = l.useState("");
  (0, d.ZP)(() => null == o ? true : o()), (0, d.zq)(() => {
    var e;
    h({
      rating: U,
      category: null != (e = null == $ ? true : $.value) ? e : null,
      problem: B,
      dontShowAgain: k,
      feedback: J
    })
  });
  let V = true,
    z = false;
  return null == U ? (n = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: r()(p.problemInfo, p.ratingSelectorContainer),
      children: (0, a.jsx)(_.Z, {
        ratingOptions: N,
        emojiKind: C,
        selectedRating: U,
        onChangeRating: function(e) {
          Z(e), e === m.aZ.GOOD && S()
        }
      })
    }), !I && (0, a.jsx)(u.mzw, {
      className: p.footer,
      direction: b.Z.Direction.HORIZONTAL,
      children: (0, a.jsx)(u.Checkbox, {
        checked: k,
        onChange: () => w(!k),
        label: E.intl.string(E.t["5E9SB9"]),
        labelType: "secondary"
      })
    })]
  }), V = false) : U !== m.aZ.GOOD && null == $ ? (n = (0, a.jsx)(u.hzk, {
    children: (0, a.jsx)(u.gNt, {
      label: x,
      children: (0, a.jsx)(O.Z, {
        options: R,
        onClick: H,
        hideCaret: () => true
      })
    })
  }), i = () => Z(null)) : null != $ && null == B ? (n = (0, a.jsx)(u.hzk, {
    children: (0, a.jsx)(u.gNt, {
      label: $.problemsHeader,
      children: (0, a.jsx)(O.Z, {
        options: $.problemOptions,
        onClick: function(e) {
          var t;
          G(e), null != $ && null != e && (null == (t = $.freeformConfig) ? true : t.value) !== e.value && S()
        },
        hideCaret: e => {
          var t;
          let {
            value: n
          } = e;
          return (null == (t = $.freeformConfig) ? true : t.value) !== n
        }
      })
    })
  }), i = () => H(null)) : null != $ && null != B && (null == (t = $.freeformConfig) ? true : t.value) === B.value && (n = (0, a.jsx)(u.hzk, {
    children: (0, a.jsx)(u.Kx8, {
      label: E.intl.string(E.t.h95hcn),
      helperText: $.freeformConfig.hideHelpdeskLink ? true : E.intl.format(E.t.ybi2tD, {
        helpdeskURL: v.Z.getSubmitRequestURL()
      }),
      value: J,
      maxLength: m.iF,
      onChange: K
    })
  }), i = () => {
    K(""), G(null)
  }, z = true), (0, a.jsxs)(u.Y0X, {
    impression: P,
    transitionState: T,
    className: p.modalRoot,
    "aria-labelledby": A,
    parentComponent: "FeedbackModalV2",
    children: [(0, a.jsxs)(u.xBx, {
      separator: false,
      className: p.headerContainer,
      children: [(0, a.jsx)(u.Heading, {
        id: A,
        variant: "heading-xl/extrabold",
        color: "none",
        children: j
      }), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "none",
        className: p.ratingBody,
        children: y
      })]
    }), n, V && (0, a.jsxs)(u.mzw, {
      className: p.footer,
      direction: b.Z.Direction.HORIZONTAL,
      children: [(0, a.jsx)(u.Button, {
        variant: "secondary",
        size: "sm",
        text: E.intl.string(E.t["13/7kX"]),
        onClick: i
      }), z && (0, a.jsx)(u.Button, {
        variant: "primary",
        size: "sm",
        text: E.intl.string(E.t.geKm7t),
        onClick: S
      })]
    })]
  })
}