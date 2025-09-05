/** Chunk was on 74732 **/
/** chunk id: 13137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk755721 = require("./755721.js"),
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
  Chunk50312 = require("./50312.js");
let v = e => s().shuffle(e.map(e => {
  var t, n, r;
  return n = function(e) {
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
  }({}, e), r = r = {
    problemOptions: s().shuffle(e.problemOptions).concat(null != (t = e.freeformConfig) ? t : [])
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
  }), n
}));

function j(e) {
  var t;
  let n, i, {
      onMount: a,
      onSubmit: j,
      onClose: x,
      ratingHeader: S,
      ratingBody: w,
      ratingOptions: E,
      ratingEmojiKind: k,
      initialRating: C = null,
      categoriesHeader: P,
      optionsTree: R,
      hideDontShowAgainCheckbox: T,
      impression: N,
      transitionState: L
    } = e,
    F = (0, b.Z)(R),
    [D, I] = l.useState(v(R));
  l.useEffect(() => {
    s().isEqual(F, R) || I(v(R))
  }, [R, F]);
  let B = (0, f.Dt)(),
    [M, Z] = l.useState(false),
    [H, A] = l.useState(C),
    [V, z] = l.useState(null),
    [X, Y] = l.useState(null),
    [K, U] = l.useState("");
  (0, m.ZP)(() => null == a ? true : a()), (0, m.zq)(() => {
    var e;
    j({
      rating: H,
      category: null != (e = null == V ? true : V.value) ? e : null,
      problem: X,
      dontShowAgain: M,
      feedback: K
    })
  });
  let G = true,
    q = false;
  return null == H ? (n = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.xJW, {
      className: o()(h.problemInfo, h.ratingSelectorContainer),
      children: (0, r.jsx)(O.Z, {
        ratingOptions: E,
        emojiKind: k,
        selectedRating: H,
        onChangeRating: function(e) {
          A(e), e === g.aZ.GOOD && x()
        }
      })
    }), !T && (0, r.jsx)(u.mzw, {
      className: h.footer,
      direction: d.Z.Direction.HORIZONTAL,
      children: (0, r.jsx)(c.$q, {
        type: c.M0.INVERTED,
        size: 18,
        value: M,
        onChange: () => Z(!M),
        children: (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: y.intl.string(y.t["5E9SBw"])
        })
      })
    })]
  }), G = false) : H !== g.aZ.GOOD && null == V ? (n = (0, r.jsx)(u.hzk, {
    className: h.__invalid_content,
    children: (0, r.jsx)(u.xJW, {
      title: P,
      titleClassName: h.noTitleCase,
      className: o()(h.problemInfo, h.presetList, {
        [h.marginBottom16]: T
      }),
      children: (0, r.jsx)(p.Z, {
        options: D,
        onClick: z,
        hideCaret: () => true
      })
    })
  }), i = () => A(null)) : null != V && null == X ? (n = (0, r.jsx)(u.hzk, {
    className: h.__invalid_content,
    children: (0, r.jsx)(u.xJW, {
      title: V.problemsHeader,
      titleClassName: h.noTitleCase,
      className: o()(h.problemInfo, h.presetList, {
        [h.marginBottom16]: T
      }),
      children: (0, r.jsx)(p.Z, {
        options: V.problemOptions,
        onClick: function(e) {
          var t;
          Y(e), null != V && null != e && (null == (t = V.freeformConfig) ? true : t.value) !== e.value && x()
        },
        hideCaret: e => {
          var t;
          let {
            value: n
          } = e;
          return (null == (t = V.freeformConfig) ? true : t.value) !== n
        }
      })
    })
  }), i = () => z(null)) : null != V && null != X && (null == (t = V.freeformConfig) ? true : t.value) === X.value && (n = (0, r.jsx)(u.hzk, {
    className: h.__invalid_content,
    children: (0, r.jsxs)(u.xJW, {
      title: y.intl.string(y.t.h95hcn),
      titleClassName: h.noTitleCase,
      className: h.problemInfo,
      children: [(0, r.jsx)(u.Kx8, {
        value: K,
        maxLength: g.iF,
        onChange: U
      }), !V.freeformConfig.hideHelpdeskLink && (0, r.jsx)(u.Text, {
        className: h.helpdeskLink,
        variant: "text-xs/normal",
        color: "text-muted",
        children: y.intl.format(y.t.ybi2tL, {
          helpdeskURL: _.Z.getSubmitRequestURL()
        })
      })]
    })
  }), i = () => {
    U(""), Y(null)
  }, q = true), (0, r.jsxs)(u.Y0X, {
    impression: N,
    transitionState: L,
    className: h.modalRoot,
    "aria-labelledby": B,
    parentComponent: "FeedbackModalV2",
    children: [(0, r.jsxs)(u.xBx, {
      separator: false,
      className: h.headerContainer,
      children: [(0, r.jsx)(u.X6q, {
        id: B,
        variant: "heading-xl/extrabold",
        color: "none",
        children: S
      }), (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "none",
        className: h.ratingBody,
        children: w
      })]
    }), n, G && (0, r.jsxs)(u.mzw, {
      className: h.footer,
      direction: d.Z.Direction.HORIZONTAL,
      children: [(0, r.jsx)(u.zxk, {
        variant: "secondary",
        size: "sm",
        text: y.intl.string(y.t["13/7kZ"]),
        onClick: i
      }), q && (0, r.jsx)(u.zxk, {
        variant: "primary",
        size: "sm",
        text: y.intl.string(y.t.geKm7u),
        onClick: x
      })]
    })]
  })
}