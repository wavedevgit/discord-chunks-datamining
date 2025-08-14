/** Chunk was on 74732 **/
/** chunk id: 13137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk50312 = require("./50312.js");
let h = e => s().shuffle(e.map(e => {
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

function v(e) {
  var t;
  let n, i, {
      onMount: a,
      onSubmit: v,
      onClose: j,
      ratingHeader: x,
      ratingBody: S,
      ratingOptions: w,
      ratingEmojiKind: E,
      initialRating: k = null,
      categoriesHeader: C,
      optionsTree: P,
      hideDontShowAgainCheckbox: R,
      impression: T,
      transitionState: N
    } = e,
    L = (0, m.Z)(P),
    [F, D] = l.useState(h(P));
  l.useEffect(() => {
    s().isEqual(L, P) || D(h(P))
  }, [P, L]);
  let I = (0, d.Dt)(),
    [Z, B] = l.useState(false),
    [M, H] = l.useState(k),
    [A, V] = l.useState(null),
    [X, z] = l.useState(null),
    [Y, K] = l.useState("");
  (0, u.ZP)(() => null == a ? true : a()), (0, u.zq)(() => {
    var e;
    v({
      rating: M,
      category: null != (e = null == A ? true : A.value) ? e : null,
      problem: X,
      dontShowAgain: Z,
      feedback: Y
    })
  });
  let U = true,
    G = false;
  return null == M ? (n = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.xJW, {
      className: o()(y.problemInfo, y.ratingSelectorContainer),
      children: (0, r.jsx)(_.Z, {
        ratingOptions: w,
        emojiKind: E,
        selectedRating: M,
        onChangeRating: function(e) {
          H(e), e === O.aZ.GOOD && j()
        }
      })
    }), !R && (0, r.jsx)(c.mzw, {
      className: y.footer,
      direction: b.Z.Direction.HORIZONTAL,
      children: (0, r.jsx)(c.XZJ, {
        type: c.XZJ.Types.INVERTED,
        size: 18,
        value: Z,
        onChange: () => B(!Z),
        children: (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: g.intl.string(g.t["5E9SBw"])
        })
      })
    })]
  }), U = false) : M !== O.aZ.GOOD && null == A ? (n = (0, r.jsx)(c.hzk, {
    className: y.__invalid_content,
    children: (0, r.jsx)(c.xJW, {
      title: C,
      titleClassName: y.noTitleCase,
      className: o()(y.problemInfo, y.presetList, {
        [y.marginBottom16]: R
      }),
      children: (0, r.jsx)(f.Z, {
        options: F,
        onClick: V,
        hideCaret: () => true
      })
    })
  }), i = () => H(null)) : null != A && null == X ? (n = (0, r.jsx)(c.hzk, {
    className: y.__invalid_content,
    children: (0, r.jsx)(c.xJW, {
      title: A.problemsHeader,
      titleClassName: y.noTitleCase,
      className: o()(y.problemInfo, y.presetList, {
        [y.marginBottom16]: R
      }),
      children: (0, r.jsx)(f.Z, {
        options: A.problemOptions,
        onClick: function(e) {
          var t;
          z(e), null != A && null != e && (null == (t = A.freeformConfig) ? true : t.value) !== e.value && j()
        },
        hideCaret: e => {
          var t;
          let {
            value: n
          } = e;
          return (null == (t = A.freeformConfig) ? true : t.value) !== n
        }
      })
    })
  }), i = () => V(null)) : null != A && null != X && (null == (t = A.freeformConfig) ? true : t.value) === X.value && (n = (0, r.jsx)(c.hzk, {
    className: y.__invalid_content,
    children: (0, r.jsxs)(c.xJW, {
      title: g.intl.string(g.t.h95hcn),
      titleClassName: y.noTitleCase,
      className: y.problemInfo,
      children: [(0, r.jsx)(c.Kx8, {
        value: Y,
        maxLength: O.iF,
        onChange: K
      }), !A.freeformConfig.hideHelpdeskLink && (0, r.jsx)(c.Text, {
        className: y.helpdeskLink,
        variant: "text-xs/normal",
        color: "text-muted",
        children: g.intl.format(g.t.ybi2tL, {
          helpdeskURL: p.Z.getSubmitRequestURL()
        })
      })]
    })
  }), i = () => {
    K(""), z(null)
  }, G = true), (0, r.jsxs)(c.Y0X, {
    impression: T,
    transitionState: N,
    className: y.modalRoot,
    "aria-labelledby": I,
    parentComponent: "FeedbackModalV2",
    children: [(0, r.jsxs)(c.xBx, {
      separator: false,
      className: y.headerContainer,
      children: [(0, r.jsx)(c.X6q, {
        id: I,
        variant: "heading-xl/extrabold",
        color: "none",
        children: x
      }), (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "none",
        className: y.ratingBody,
        children: S
      })]
    }), n, U && (0, r.jsxs)(c.mzw, {
      className: y.footer,
      direction: b.Z.Direction.HORIZONTAL,
      children: [(0, r.jsx)(c.zxk, {
        variant: "secondary",
        size: "sm",
        text: g.intl.string(g.t["13/7kZ"]),
        onClick: i
      }), G && (0, r.jsx)(c.zxk, {
        variant: "primary",
        size: "sm",
        text: g.intl.string(g.t.geKm7u),
        onClick: j
      })]
    })]
  })
}