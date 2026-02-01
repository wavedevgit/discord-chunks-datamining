/** Chunk was on 9753 **/
/** chunk id: 695206, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./801541.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk889137 = require("./889137.js"),
  Chunk966974 = require("./966974.js"),
  Chunk397927 = require("./397927.js"),
  Chunk180662 = require("./180662.js"),
  Chunk570766 = require("./570766.jsx"),
  Chunk290794 = require("./290794.jsx"),
  Chunk789646 = require("./789646.jsx"),
  Chunk431174 = require("./431174.jsx"),
  Chunk744180 = require("./744180.js");

function _(e) {
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
}

function h(e) {
  let {
    media: t
  } = e;
  return (0, r.jsx)(c.Heading, {
    variant: "text-md/medium",
    className: g.b1,
    scaleFontToUserSetting: true,
    children: t.text
  })
}

function b(e) {
  let {
    buttonLabel: t,
    secondaryLabel: n,
    handleClick: i,
    isInteractive: l,
    className: s
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(g.ez, s),
    children: [l ? (0, r.jsx)(c.QWc, {
      text: t,
      onClick: i,
      variant: "secondary",
      textVariant: "text-sm/medium"
    }) : (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      scaleFontToUserSetting: true,
      children: t
    }), null != n && (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      scaleFontToUserSetting: true,
      children: n
    })]
  })
}

function y(e) {
  let {
    action: t,
    channelId: n,
    messageId: l,
    isInteractive: a,
    className: s
  } = e, {
    actionButtonRef: o,
    manageFocusOnAction: d
  } = (0, m.Mg)(), p = i.useCallback(async () => {
    (null == t ? true : t.type) != null && (await u.A.handlePollActionTapped({
      channelId: n,
      messageId: l,
      type: t.type
    }), d(t.type))
  }, [null == t ? true : t.type, n, l, d]);
  return null == t ? null : "button" === t.presentation || "secondaryButton" === t.presentation ? (0, r.jsx)(c.Button, {
    buttonRef: o,
    onClick: p,
    disabled: !t.enabled,
    variant: "secondaryButton" === t.presentation ? "secondary" : "primary",
    size: "sm",
    text: t.label
  }, t.presentation) : "textButton" === t.presentation ? (0, r.jsx)(c.QWc, {
    buttonRef: o,
    onClick: p,
    text: t.label,
    variant: "secondary",
    textVariant: "text-sm/medium"
  }) : (0, r.jsx)(b, {
    buttonLabel: t.label,
    secondaryLabel: t.secondaryLabel,
    handleClick: p,
    isInteractive: a,
    className: s
  })
}

function A(e) {
  let t, {
      message: n,
      poll: i,
      className: l
    } = e,
    u = (0, p.hd)(i.containerStyle),
    m = (t = {
      answers: i.answers,
      answersInteraction: i.answersInteraction,
      answerTapAccessibilityLabel: i.answerTapAccessibilityLabel,
      isExpired: i.isExpired,
      canTapAnswers: i.canTapAnswers,
      hasSelectedAnyAnswer: i.hasSelectedAnswer,
      myAvatarUrl: i.myAvatarUrl,
      canShowVoteCounts: i.canShowVoteCounts
    }, (0, s.YW)(i.layoutType).with(o.Z.DEFAULT, () => (0, r.jsx)(f.j, _({}, t))).with(o.Z.IMAGE_ONLY_ANSWERS, () => (0, r.jsx)(d.A, _({}, t))).otherwise(() => null));
  return null == m ? null : (0, r.jsx)("div", {
    className: a()(g.kL, u, l),
    children: (0, r.jsxs)(c.Fmo, {
      children: [(0, r.jsxs)("div", {
        className: g.wx,
        children: [(0, r.jsx)(h, {
          media: i.question
        }), null != i.promptLabel && (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: g.J1,
          scaleFontToUserSetting: true,
          children: i.promptLabel
        })]
      }), m, (0, r.jsxs)("div", {
        className: g.pR,
        children: [(0, r.jsx)(y, {
          channelId: n.getChannelId(),
          messageId: n.id,
          action: i.secondaryAction,
          className: g.Dc,
          isInteractive: i.isInteractive
        }), (0, r.jsx)(y, {
          channelId: n.getChannelId(),
          messageId: n.id,
          action: i.tertiaryAction,
          className: g.vD
        }), (0, r.jsx)(y, {
          channelId: n.getChannelId(),
          messageId: n.id,
          action: i.primaryAction
        })]
      })]
    })
  })
}

function v(e) {
  let {
    message: t,
    poll: n,
    className: i
  } = e;
  return (0, r.jsx)(p.y5, {
    message: t,
    poll: n,
    children: (0, r.jsx)(m.RZ, {
      children: (0, r.jsx)(A, {
        message: t,
        poll: n,
        className: i
      })
    })
  })
}