/** Chunk was on 21585 **/
/** chunk id: 623132, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk86419 = require("./86419.js"),
  Chunk971082 = require("./971082.jsx"),
  Chunk817053 = require("./817053.jsx"),
  Chunk248554 = require("./248554.jsx"),
  Chunk879877 = require("./879877.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk776385 = require("./776385.js");

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function S(e) {
  var {
    applicationId: t,
    userId: r,
    gameName: l
  } = e, i = function(e, t) {
    if (null == e) return {};
    var r, n, l = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
    }
    return l
  }(e, ["applicationId", "userId", "gameName"]);
  let a = (0, d.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: u.m1.UserProfile,
    sourceUserId: r,
    trackEntryPointImpression: true
  });
  return null == a ? (0, n.jsx)(c.X6q, w(P({}, i), {
    children: l
  })) : (0, n.jsx)(c.X6q, w(P({}, i), {
    children: (0, n.jsx)(c.P3F, {
      onClick: a,
      className: _.clickableText,
      children: l
    })
  }))
}

function E(e) {
  let {
    user: t,
    guildId: r,
    channelId: l,
    id: i
  } = e;
  return (0, n.jsx)(c.nn4, {
    id: i,
    children: x.intl.format(x.t.TM0XDQ, {
      name: g.ZP.getName(r, l, t)
    })
  })
}

function I(e) {
  let {
    text: t,
    className: r
  } = e;
  return (0, n.jsx)(c.Text, {
    variant: "text-sm/normal",
    color: "text-tertiary",
    className: r,
    children: t
  })
}

function T(e) {
  let {
    text: t,
    user: r,
    guildId: l,
    channelId: i
  } = e, a = (0, s.Dt)();
  return null == t || "" === t.trim() ? null : (0, n.jsxs)("div", {
    role: "group",
    "aria-labelledby": a,
    children: [(0, n.jsx)(c.PEf, {
      size: "xxs",
      color: c.TVs.colors.ICON_TERTIARY,
      className: _.commentIcon
    }), (0, n.jsx)(E, {
      user: r,
      guildId: l,
      channelId: i,
      id: a
    }), (0, n.jsx)(I, {
      text: t
    })]
  })
}

function N(e) {
  let {
    text: t,
    user: r,
    guildId: i,
    channelId: o,
    widgetType: u,
    applicationId: d
  } = e, f = (0, s.Dt)(), g = (0, s.Dt)(), [p, m] = l.useState("idle"), [O, j] = l.useState(null != t ? t : ""), y = l.useRef(null), v = l.useRef(null), h = x.intl.string(x.t.xKSfBQ), P = null != t && "" !== t.trim(), w = l.useCallback(() => {
    m("editing")
  }, []), S = l.useCallback(() => {
    let e = O.trim();
    (0, b.Bu)(u, d, "" !== e ? e : true), m("completed")
  }, [u, d, O]), T = l.useCallback(e => {
    j(e)
  }, []);
  return l.useEffect(() => {
    "editing" === p && j(null != t ? t : "")
  }, [t, p]), l.useEffect(() => {
    if ("completed" === p) {
      var e;
      null == (e = y.current) || e.focus()
    }
  }, [p]), "editing" === p ? (0, n.jsxs)("div", {
    className: _.textAreaContainer,
    children: [(0, n.jsx)(c.nn4, {
      tag: "label",
      htmlFor: f,
      children: x.intl.string(x.t.JxKXeX)
    }), (0, n.jsx)(c.Kx8, {
      id: f,
      value: O,
      placeholder: h,
      onChange: T,
      onBlur: S,
      rows: 3,
      autoFocus: "editing" === p,
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), S())
      }
    })]
  }) : (0, n.jsxs)("div", {
    ref: v,
    role: "group",
    "aria-labelledby": g,
    onClick: w,
    className: _.editableCommentContainer,
    children: [(0, n.jsx)(c.vdY, {
      size: "xxs",
      color: c.TVs.colors.ICON_TERTIARY,
      className: _.commentIcon
    }), (0, n.jsx)(E, {
      user: r,
      guildId: i,
      channelId: o,
      id: g
    }), (0, n.jsx)(I, {
      text: null != t ? t : h,
      className: a()(_.editableCommentText, !P && _.placeholder)
    }), (0, n.jsx)(c.P3F, {
      innerRef: y,
      "aria-label": x.intl.string(x.t.ppb9MD),
      onClick: e => {
        e.stopPropagation(), w()
      },
      focusProps: {
        ringTarget: v
      }
    })]
  })
}

function k(e) {
  let {
    applicationId: t,
    guildId: r,
    channelId: l,
    className: i
  } = e, a = (0, v.Z)(t);
  return a.length > 0 ? (0, n.jsx)(p.Z, {
    label: x.intl.formatToPlainString(x.t.ujhJdH, {
      numFriends: a.length
    }),
    className: i,
    users: a,
    guildId: r,
    channelId: l
  }) : null
}

function C(e) {
  let {
    user: t,
    guildId: r,
    channelId: l,
    game: i,
    widgetType: a,
    loading: s = false,
    disableInteraction: u = false
  } = e, {
    gameName: d = x.intl.string(x.t.GIWFlJ),
    imageSrc: g,
    applicationId: b,
    comment: p,
    tags: v
  } = i, E = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, I = f.default.getCurrentUser(), C = (null == I ? true : I.id) === t.id, A = !u && C && a === o.l.FAVORITE_GAMES;
  return s ? (0, n.jsx)(O.i, {}) : (0, n.jsxs)("div", {
    className: _.card,
    children: [(0, n.jsx)(m.Z, {
      className: null == g || u ? true : h.hoverActiveEffect,
      imageSrc: g,
      gameName: d,
      applicationId: b,
      userId: t.id,
      disableInteraction: u,
      hideTooltip: true
    }), (0, n.jsxs)("div", {
      className: _.details,
      children: [u ? (0, n.jsx)(c.X6q, w(P({}, E), {
        children: d
      })) : (0, n.jsx)(S, P({
        applicationId: b,
        userId: t.id,
        gameName: d
      }, E)), A ? (0, n.jsx)(N, {
        text: p,
        user: t,
        guildId: r,
        channelId: l,
        widgetType: a,
        applicationId: b
      }) : (0, n.jsx)(T, {
        text: p,
        user: t,
        guildId: r,
        channelId: l
      }), (0, n.jsx)(j.Z, {
        tags: v,
        isCurrentUser: C,
        widgetType: a,
        applicationId: b,
        disableInteraction: u
      }), !u && (0, n.jsx)(k, {
        className: _.socialProof,
        applicationId: b,
        guildId: r,
        channelId: l
      })]
    }), !u && C && (0, n.jsx)(y.Z, {
      game: i,
      widgetType: a,
      className: _.removeGameButton
    })]
  })
}