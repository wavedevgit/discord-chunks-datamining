/** Chunk was on 61149 **/
/** chunk id: 623132, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk624238 = require("./624238.js"),
  Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
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

function S(e) {
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

function I(e, t) {
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

function C(e) {
  var {
    applicationId: t,
    userId: r,
    gameName: a
  } = e, o = function(e, t) {
    if (null == e) return {};
    var r, n, a = function(e, t) {
      if (null == e) return {};
      var r, n, a = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
    }
    return a
  }(e, ["applicationId", "userId", "gameName"]);
  let i = (0, f.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: d.m1.UserProfile,
    sourceUserId: r,
    trackEntryPointImpression: true
  });
  return null == i ? (0, n.jsx)(s.X6q, I(S({}, o), {
    children: a
  })) : (0, n.jsx)(s.X6q, I(S({}, o), {
    children: (0, n.jsx)(s.P3F, {
      onClick: i,
      className: _.clickableText,
      children: a
    })
  }))
}

function E(e) {
  let {
    user: t,
    guildId: r,
    channelId: a,
    id: o
  } = e;
  return (0, n.jsx)(s.nn4, {
    id: o,
    children: w.intl.format(w.t.TM0XDQ, {
      name: b.ZP.getName(r, a, t)
    })
  })
}

function k(e) {
  let {
    text: t,
    className: r
  } = e;
  return (0, n.jsx)(s.Text, {
    variant: "text-sm/normal",
    color: "text-tertiary",
    className: r,
    children: t
  })
}

function D(e) {
  let {
    text: t,
    user: r,
    guildId: a,
    channelId: o
  } = e, i = (0, u.Dt)();
  return null == t || "" === t.trim() ? null : (0, n.jsxs)("div", {
    role: "group",
    "aria-labelledby": i,
    children: [(0, n.jsx)(s.PEf, {
      size: "xxs",
      color: s.TVs.colors.ICON_TERTIARY,
      className: _.commentIcon
    }), (0, n.jsx)(E, {
      user: r,
      guildId: a,
      channelId: o,
      id: i
    }), (0, n.jsx)(k, {
      text: t
    })]
  })
}

function N(e) {
  let {
    text: t,
    user: r,
    guildId: o,
    channelId: c,
    widgetType: d,
    applicationId: f
  } = e, g = (0, u.Dt)(), b = (0, u.Dt)(), {
    trackUserProfileAction: y
  } = (0, p.KZ)(), [O, j] = a.useState("idle"), [v, x] = a.useState(null != t ? t : ""), h = a.useRef(null), P = a.useRef(null), S = w.intl.string(w.t.xKSfBQ), I = null != t && "" !== t.trim(), C = a.useCallback(() => {
    j("editing")
  }, []), D = a.useCallback(() => {
    let e = v.trim();
    (0, m.Bu)(d, f, "" !== e ? e : true), j("completed"), y({
      action: "EDIT_ACTION"
    })
  }, [d, f, v, y]), N = a.useCallback(e => {
    x(e)
  }, []);
  return a.useEffect(() => {
    "editing" === O && x(null != t ? t : "")
  }, [t, O]), a.useEffect(() => {
    if ("completed" === O) {
      var e;
      null == (e = h.current) || e.focus()
    }
  }, [O]), "editing" === O ? (0, n.jsxs)("div", {
    className: _.textAreaContainer,
    children: [(0, n.jsx)(s.nn4, {
      tag: "label",
      htmlFor: g,
      children: w.intl.string(w.t.JxKXeX)
    }), (0, n.jsx)(s.Kx8, {
      id: g,
      value: v,
      placeholder: S,
      onChange: N,
      onBlur: D,
      rows: 3,
      autoFocus: "editing" === O,
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), D())
      },
      maxLength: l.r
    })]
  }) : (0, n.jsxs)("div", {
    ref: P,
    role: "group",
    "aria-labelledby": b,
    onClick: C,
    className: _.editableCommentContainer,
    children: [(0, n.jsx)(s.vdY, {
      size: "xxs",
      color: s.TVs.colors.ICON_TERTIARY,
      className: _.commentIcon
    }), (0, n.jsx)(E, {
      user: r,
      guildId: o,
      channelId: c,
      id: b
    }), (0, n.jsx)(k, {
      text: null != t ? t : S,
      className: i()(_.editableCommentText, !I && _.placeholder)
    }), (0, n.jsx)(s.P3F, {
      innerRef: h,
      "aria-label": w.intl.string(w.t.ppb9MD),
      onClick: e => {
        e.stopPropagation(), C()
      },
      focusProps: {
        ringTarget: P
      }
    })]
  })
}

function T(e) {
  let {
    applicationId: t,
    guildId: r,
    channelId: a,
    className: o
  } = e, i = (0, h.Z)(t);
  return i.length > 0 ? (0, n.jsx)(y.Z, {
    label: w.intl.formatToPlainString(w.t.ujhJdH, {
      numFriends: i.length
    }),
    className: o,
    users: i,
    guildId: r,
    channelId: a
  }) : null
}

function Z(e) {
  let {
    user: t,
    guildId: r,
    channelId: a,
    game: o,
    widgetType: i,
    loading: l = false,
    disableInteraction: u = false
  } = e, {
    gameName: d = w.intl.string(w.t.GIWFlJ),
    imageSrc: f,
    applicationId: b,
    comment: p,
    tags: m
  } = o, y = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, h = g.default.getCurrentUser(), E = (null == h ? true : h.id) === t.id, k = !u && E && i === c.l.FAVORITE_GAMES;
  return l ? (0, n.jsx)(j.i, {}) : (0, n.jsxs)("div", {
    className: _.card,
    children: [(0, n.jsx)(O.Z, {
      className: null == f || u ? true : P.hoverActiveEffect,
      imageSrc: f,
      gameName: d,
      applicationId: b,
      userId: t.id,
      disableInteraction: u,
      hideTooltip: true
    }), (0, n.jsxs)("div", {
      className: _.details,
      children: [u ? (0, n.jsx)(s.X6q, I(S({}, y), {
        children: d
      })) : (0, n.jsx)(C, S({
        applicationId: b,
        userId: t.id,
        gameName: d
      }, y)), k ? (0, n.jsx)(N, {
        text: p,
        user: t,
        guildId: r,
        channelId: a,
        widgetType: i,
        applicationId: b
      }) : (0, n.jsx)(D, {
        text: p,
        user: t,
        guildId: r,
        channelId: a
      }), (0, n.jsx)(v.Z, {
        tags: m,
        isCurrentUser: E,
        widgetType: i,
        applicationId: b,
        disableInteraction: u,
        className: _.tags
      }), !u && (0, n.jsx)(T, {
        className: _.socialProof,
        applicationId: b,
        guildId: r,
        channelId: a
      })]
    }), !u && E && (0, n.jsx)(x.Z, {
      game: o,
      widgetType: i,
      className: _.removeGameButton
    })]
  })
}