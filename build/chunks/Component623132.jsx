/** Chunk was on 75962 **/
/** chunk id: 623132, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk747101 = require("./747101.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk248554 = require("./248554.jsx"),
  Chunk879877 = require("./879877.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk919498 = require("./919498.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk776385 = require("./776385.js");

function E(e) {
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

function S(e) {
  var {
    applicationId: t,
    userId: r,
    gameName: i
  } = e, o = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
  }(e, ["applicationId", "userId", "gameName"]);
  let a = (0, f.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: d.m1.UserProfile,
    sourceUserId: r,
    trackEntryPointImpression: true
  });
  return null == a ? (0, n.jsx)(s.X6q, I(E({}, o), {
    children: i
  })) : (0, n.jsx)(s.X6q, I(E({}, o), {
    children: (0, n.jsx)(s.P3F, {
      onClick: a,
      className: P.clickableText,
      children: i
    })
  }))
}

function T(e) {
  let {
    user: t,
    guildId: r,
    channelId: i,
    id: o
  } = e;
  return (0, n.jsx)(s.nn4, {
    id: o,
    children: _.intl.format(_.t.TM0XDQ, {
      name: p.ZP.getName(r, i, t)
    })
  })
}

function D(e) {
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

function k(e) {
  let {
    text: t,
    user: r,
    guildId: i,
    channelId: o
  } = e, a = (0, u.Dt)();
  return null == t || "" === t.trim() ? null : (0, n.jsxs)("div", {
    role: "group",
    "aria-labelledby": a,
    children: [(0, n.jsx)(s.PEf, {
      size: "xxs",
      color: s.TVs.colors.ICON_TERTIARY,
      className: P.commentIcon
    }), (0, n.jsx)(T, {
      user: r,
      guildId: i,
      channelId: o,
      id: a
    }), (0, n.jsx)(D, {
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
  } = e, g = (0, u.Dt)(), p = (0, u.Dt)(), {
    trackUserProfileEditAction: m
  } = (0, b.KZ)(), [y, j] = i.useState("idle"), [v, h] = i.useState(null != t ? t : ""), x = i.useRef(null), w = i.useRef(null), E = _.intl.string(_.t.xKSfBQ), I = null != t && "" !== t.trim(), S = i.useCallback(() => {
    m({
      action: "PRESS_ADD_COMMENTARY",
      widgetEdited: d
    }), j("editing")
  }, [d, m]), k = i.useCallback(() => {
    let e = v.trim(),
      r = e !== (null != t ? t : "").trim();
    (0, O.Bu)(d, f, "" !== e ? e : true), j("completed"), r && m({
      action: "COMMENTARY_EDITED",
      widgetEdited: d,
      gameId: f
    })
  }, [d, f, v, t, m]), N = i.useCallback(e => {
    h(e)
  }, []);
  return i.useEffect(() => {
    "editing" === y && h(null != t ? t : "")
  }, [t, y]), i.useEffect(() => {
    if ("completed" === y) {
      var e;
      null == (e = x.current) || e.focus()
    }
  }, [y]), "editing" === y ? (0, n.jsxs)("div", {
    className: P.textAreaContainer,
    children: [(0, n.jsx)(s.nn4, {
      tag: "label",
      htmlFor: g,
      children: _.intl.string(_.t.JxKXeX)
    }), (0, n.jsx)(s.Kx8, {
      id: g,
      value: v,
      placeholder: E,
      onChange: N,
      onBlur: k,
      rows: 3,
      autoFocus: "editing" === y,
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k())
      },
      maxLength: l.rN
    })]
  }) : (0, n.jsxs)("div", {
    ref: w,
    role: "group",
    "aria-labelledby": p,
    onClick: S,
    className: P.editableCommentContainer,
    children: [(0, n.jsx)(s.vdY, {
      size: "xxs",
      color: s.TVs.colors.ICON_TERTIARY,
      className: P.commentIcon
    }), (0, n.jsx)(T, {
      user: r,
      guildId: o,
      channelId: c,
      id: p
    }), (0, n.jsx)(D, {
      text: null != t ? t : E,
      className: a()(P.editableCommentText, !I && P.placeholder)
    }), (0, n.jsx)(s.P3F, {
      innerRef: x,
      "aria-label": _.intl.string(_.t.ppb9MD),
      onClick: e => {
        e.stopPropagation(), S()
      },
      focusProps: {
        ringTarget: w
      }
    })]
  })
}

function C(e) {
  let {
    user: t,
    guildId: r,
    channelId: i,
    game: o,
    widgetType: a,
    disableInteraction: l = false
  } = e, {
    gameName: u = _.intl.string(_.t.GIWFlJ),
    imageSrc: d,
    applicationId: f,
    comment: p,
    tags: b
  } = o, O = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, T = g.default.getCurrentUser(), D = (null == T ? true : T.id) === t.id, C = !l && D && a === c.l.FAVORITE_GAMES;
  return (0, m.kO)(f) ? (0, n.jsx)(j.i, {}) : (0, n.jsxs)("div", {
    className: P.card,
    children: [(0, n.jsx)(y.Z, {
      className: null == d || l ? true : w.hoverActiveEffect,
      imageSrc: d,
      gameName: u,
      applicationId: f,
      userId: t.id,
      disableInteraction: l,
      hideTooltip: true
    }), (0, n.jsxs)("div", {
      className: P.details,
      children: [l ? (0, n.jsx)(s.X6q, I(E({}, O), {
        children: u
      })) : (0, n.jsx)(S, E({
        applicationId: f,
        userId: t.id,
        gameName: u
      }, O)), C ? (0, n.jsx)(N, {
        text: p,
        user: t,
        guildId: r,
        channelId: i,
        widgetType: a,
        applicationId: f
      }) : (0, n.jsx)(k, {
        text: p,
        user: t,
        guildId: r,
        channelId: i
      }), (0, n.jsx)(v.Z, {
        tags: b,
        isCurrentUser: D,
        widgetType: a,
        applicationId: f,
        disableInteraction: l,
        className: P.tags
      }), !l && (0, n.jsx)(x.Z, {
        className: P.socialProof,
        applicationId: f,
        guildId: r,
        channelId: i
      })]
    }), !l && D && (0, n.jsx)(h.Z, {
      game: o,
      widgetType: a,
      className: P.removeGameButton
    })]
  })
}