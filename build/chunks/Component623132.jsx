/** Chunk was on 21585 **/
/** chunk id: 623132, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk776385 = require("./776385.js");

function _(e) {
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

function P(e, t) {
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

function w(e) {
  var {
    applicationId: t,
    userId: r,
    gameName: a
  } = e, i = function(e, t) {
    if (null == e) return {};
    var r, n, a = function(e, t) {
      if (null == e) return {};
      var r, n, a = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
    }
    return a
  }(e, ["applicationId", "userId", "gameName"]);
  let l = (0, d.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: u.m1.UserProfile,
    sourceUserId: r,
    trackEntryPointImpression: true
  });
  return null == l ? (0, n.jsx)(c.X6q, P(_({}, i), {
    children: a
  })) : (0, n.jsx)(c.X6q, P(_({}, i), {
    children: (0, n.jsx)(c.P3F, {
      onClick: l,
      className: h.clickableText,
      children: a
    })
  }))
}

function S(e) {
  let {
    user: t,
    guildId: r,
    channelId: a,
    id: i
  } = e;
  return (0, n.jsx)(c.nn4, {
    id: i,
    children: v.intl.format(v.t.TM0XDQ, {
      name: g.ZP.getName(r, a, t)
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

function E(e) {
  let {
    text: t,
    user: r,
    guildId: a,
    channelId: i
  } = e, l = (0, s.Dt)();
  return null == t || "" === t.trim() ? null : (0, n.jsxs)("div", {
    role: "group",
    "aria-labelledby": l,
    children: [(0, n.jsx)(c.PEf, {
      size: "xxs",
      color: c.TVs.colors.ICON_TERTIARY,
      className: h.commentIcon
    }), (0, n.jsx)(S, {
      user: r,
      guildId: a,
      channelId: i,
      id: l
    }), (0, n.jsx)(I, {
      text: t
    })]
  })
}

function T(e) {
  let {
    text: t,
    user: r,
    guildId: i,
    channelId: o,
    widgetType: u,
    applicationId: d
  } = e, f = (0, s.Dt)(), g = (0, s.Dt)(), [p, m] = a.useState("idle"), [O, j] = a.useState(null != t ? t : ""), y = a.useRef(null), x = a.useRef(null), _ = v.intl.string(v.t.xKSfBQ), P = null != t && "" !== t.trim(), w = a.useCallback(() => {
    m("editing")
  }, []), E = a.useCallback(() => {
    let e = O.trim();
    (0, b.Bu)(u, d, "" !== e ? e : true), m("completed")
  }, [u, d, O]), T = a.useCallback(e => {
    j(e)
  }, []);
  return a.useEffect(() => {
    "editing" === p && j(null != t ? t : "")
  }, [t, p]), a.useEffect(() => {
    if ("completed" === p) {
      var e;
      null == (e = y.current) || e.focus()
    }
  }, [p]), "editing" === p ? (0, n.jsxs)("div", {
    className: h.textAreaContainer,
    children: [(0, n.jsx)(c.nn4, {
      tag: "label",
      htmlFor: f,
      children: v.intl.string(v.t.JxKXeX)
    }), (0, n.jsx)(c.Kx8, {
      id: f,
      value: O,
      placeholder: _,
      onChange: T,
      onBlur: E,
      rows: 3,
      autoFocus: "editing" === p,
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), E())
      }
    })]
  }) : (0, n.jsxs)("div", {
    ref: x,
    role: "group",
    "aria-labelledby": g,
    onClick: w,
    className: h.editableCommentContainer,
    children: [(0, n.jsx)(c.vdY, {
      size: "xxs",
      color: c.TVs.colors.ICON_TERTIARY,
      className: h.commentIcon
    }), (0, n.jsx)(S, {
      user: r,
      guildId: i,
      channelId: o,
      id: g
    }), (0, n.jsx)(I, {
      text: null != t ? t : _,
      className: l()(h.editableCommentText, !P && h.placeholder)
    }), (0, n.jsx)(c.P3F, {
      innerRef: y,
      "aria-label": v.intl.string(v.t.ppb9MD),
      onClick: e => {
        e.stopPropagation(), w()
      },
      focusProps: {
        ringTarget: x
      }
    })]
  })
}

function N(e) {
  let {
    applicationId: t,
    guildId: r,
    channelId: a,
    className: i
  } = e, l = (0, x.Z)(t);
  return l.length > 0 ? (0, n.jsx)(p.Z, {
    label: v.intl.formatToPlainString(v.t.ujhJdH, {
      numFriends: l.length
    }),
    className: i,
    users: l,
    guildId: r,
    channelId: a
  }) : null
}

function k(e) {
  let {
    user: t,
    guildId: r,
    channelId: a,
    game: i,
    widgetType: l,
    loading: s = false,
    disableInteraction: u = false
  } = e, {
    gameName: d = v.intl.string(v.t.GIWFlJ),
    imageSrc: g,
    applicationId: b,
    comment: p,
    tags: x
  } = i, S = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, I = f.default.getCurrentUser(), k = (null == I ? true : I.id) === t.id, C = !u && k && l === o.l.FAVORITE_GAMES;
  return s ? (0, n.jsx)(O.i, {}) : (0, n.jsxs)("div", {
    className: h.card,
    children: [(0, n.jsx)(m.Z, {
      imageSrc: g,
      gameName: d,
      applicationId: b,
      userId: t.id,
      disableInteraction: u,
      hideTooltip: true
    }), (0, n.jsxs)("div", {
      className: h.details,
      children: [u ? (0, n.jsx)(c.X6q, P(_({}, S), {
        children: d
      })) : (0, n.jsx)(w, _({
        applicationId: b,
        userId: t.id,
        gameName: d
      }, S)), C ? (0, n.jsx)(T, {
        text: p,
        user: t,
        guildId: r,
        channelId: a,
        widgetType: l,
        applicationId: b
      }) : (0, n.jsx)(E, {
        text: p,
        user: t,
        guildId: r,
        channelId: a
      }), (0, n.jsx)(j.Z, {
        tags: x,
        isCurrentUser: k,
        widgetType: l,
        applicationId: b,
        disableInteraction: u
      }), !u && (0, n.jsx)(N, {
        className: h.socialProof,
        applicationId: b,
        guildId: r,
        channelId: a
      })]
    }), !u && k && (0, n.jsx)(y.Z, {
      game: i,
      widgetType: l,
      className: h.removeGameButton
    })]
  })
}