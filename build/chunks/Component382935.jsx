/** Chunk was on 49911 **/
/** chunk id: 382935, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  u = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk475743 = require("./475743.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk124480 = require("./124480.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk321563 = require("./321563.jsx"),
  Chunk670455 = require("./670455.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk520783 = require("./520783.js");
let j = e => u().shuffle(e.map(e => {
  var t, n, l;
  return n = function(e) {
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
  }({}, e), l = l = {
    problemOptions: u().shuffle(e.problemOptions).concat(null != (t = e.freeformConfig) ? t : [])
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(l)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
  }), n
}));

function S(e) {
  var t;
  let n, i, {
      onMount: s,
      onSubmit: S,
      onClose: m,
      ratingHeader: N,
      ratingBody: U,
      ratingOptions: D,
      ratingEmojiKind: y,
      initialRating: _ = null,
      categoriesHeader: A,
      optionsTree: C,
      hideDontShowAgainCheckbox: I,
      impression: L,
      transitionState: R
    } = e,
    T = (0, O.A)(C),
    [P, V] = a.useState(j(C));
  a.useEffect(() => {
    u().isEqual(T, C) || V(j(C))
  }, [C, T]);
  let x = (0, c.GV)(),
    [k, w] = a.useState(false),
    [H, F] = a.useState(_),
    [G, B] = a.useState(1 === P.length ? P[0] : null),
    [M, X] = a.useState(null),
    [K, Y] = a.useState("");
  (0, o.Ay)(() => null == s ? true : s()), (0, o.l0)(() => {
    var e;
    S({
      rating: H,
      category: null != (e = null == G ? true : G.value) ? e : null,
      problem: M,
      dontShowAgain: k,
      feedback: K
    })
  });
  let q = true,
    Q = false;
  return null == H ? (n = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: r()(h.OS, h.Ko),
      children: (0, l.jsx)(E.A, {
        ratingOptions: D,
        emojiKind: y,
        selectedRating: H,
        onChangeRating: function(e) {
          F(e), e === g.P0.GOOD && m()
        }
      })
    }), !I && (0, l.jsx)(d.jlY, {
      "data-migration-pending": true,
      className: h.qr,
      direction: b.A.Direction.HORIZONTAL,
      children: (0, l.jsx)(d.Checkbox, {
        checked: k,
        onChange: () => w(!k),
        label: p.intl.string(p.t["5E9SB9"]),
        labelType: "secondary"
      })
    })]
  }), q = false) : H !== g.P0.GOOD && null == G ? (n = (0, l.jsx)(d.$mQ, {
    "data-migration-pending": true,
    children: (0, l.jsx)(d.D0$, {
      label: A,
      children: (0, l.jsx)(f.A, {
        options: P,
        onClick: B,
        hideCaret: () => true
      })
    })
  }), i = () => F(null)) : null != G && null == M ? (n = (0, l.jsx)(d.$mQ, {
    children: (0, l.jsx)(d.D0$, {
      label: G.problemsHeader,
      children: (0, l.jsx)(f.A, {
        options: G.problemOptions,
        onClick: function(e) {
          var t;
          X(e), null != G && null != e && (null == (t = G.freeformConfig) ? true : t.value) !== e.value && m()
        },
        hideCaret: e => {
          var t;
          let {
            value: n
          } = e;
          return (null == (t = G.freeformConfig) ? true : t.value) !== n
        }
      })
    })
  }), i = () => 1 === P.length ? F(null) : B(null)) : null != G && null != M && (null == (t = G.freeformConfig) ? true : t.value) === M.value && (n = (0, l.jsx)(d.$mQ, {
    "data-migration-pending": true,
    children: (0, l.jsx)(d.fs1, {
      label: p.intl.string(p.t.h95hcn),
      helperText: G.freeformConfig.hideHelpdeskLink ? true : p.intl.format(p.t.ybi2tD, {
        helpdeskURL: v.A.getSubmitRequestURL()
      }),
      value: K,
      maxLength: g.u0,
      onChange: Y
    })
  }), i = () => {
    Y(""), X(null)
  }, Q = true), (0, l.jsxs)(d.EOs, {
    "data-migration-pending": true,
    impression: L,
    transitionState: R,
    className: h.CR,
    "aria-labelledby": x,
    parentComponent: "FeedbackModalV2",
    children: [(0, l.jsxs)(d.rQ0, {
      "data-migration-pending": true,
      separator: false,
      className: h.N1,
      children: [(0, l.jsx)(d.Heading, {
        id: x,
        variant: "heading-xl/extrabold",
        color: "none",
        children: N
      }), (0, l.jsx)(d.Text, {
        variant: "text-md/normal",
        color: "none",
        className: h.sB,
        children: U
      })]
    }), n, q && (0, l.jsxs)(d.jlY, {
      "data-migration-pending": true,
      className: h.qr,
      direction: b.A.Direction.HORIZONTAL,
      children: [(0, l.jsx)(d.Button, {
        variant: "secondary",
        size: "sm",
        text: p.intl.string(p.t["13/7kX"]),
        onClick: i
      }), Q && (0, l.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: p.intl.string(p.t.geKm7t),
        onClick: m
      })]
    })]
  })
}