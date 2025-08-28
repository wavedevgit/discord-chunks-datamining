/** Chunk was on 83789 **/
/** chunk id: 623132, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => D
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
  Chunk971082 = require("./971082.jsx"),
  Chunk817053 = require("./817053.jsx"),
  Chunk248554 = require("./248554.jsx"),
  Chunk879877 = require("./879877.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk776385 = require("./776385.js");

function I(e) {
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

function S(e, t) {
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

function E(e) {
  var {
    applicationId: t,
    userId: r,
    gameName: i
  } = e, l = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        l = Object.keys(e);
      for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
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
  return null == a ? (0, n.jsx)(s.X6q, S(I({}, l), {
    children: i
  })) : (0, n.jsx)(s.X6q, S(I({}, l), {
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
    id: l
  } = e;
  return (0, n.jsx)(s.nn4, {
    id: l,
    children: _.intl.format(_.t.TM0XDQ, {
      name: p.ZP.getName(r, i, t)
    })
  })
}

function N(e) {
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
    channelId: l
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
      channelId: l,
      id: a
    }), (0, n.jsx)(N, {
      text: t
    })]
  })
}

function C(e) {
  let {
    text: t,
    user: r,
    guildId: l,
    channelId: c,
    widgetType: d,
    applicationId: f
  } = e, g = (0, u.Dt)(), p = (0, u.Dt)(), {
    trackUserProfileAction: O
  } = (0, b.KZ)(), [j, y] = i.useState("idle"), [x, v] = i.useState(null != t ? t : ""), h = i.useRef(null), w = i.useRef(null), I = _.intl.string(_.t.xKSfBQ), S = null != t && "" !== t.trim(), E = i.useCallback(() => {
    y("editing")
  }, []), k = i.useCallback(() => {
    let e = x.trim();
    (0, m.Bu)(d, f, "" !== e ? e : true), y("completed"), O({
      action: "EDIT_ACTION"
    })
  }, [d, f, x, O]), C = i.useCallback(e => {
    v(e)
  }, []);
  return i.useEffect(() => {
    "editing" === j && v(null != t ? t : "")
  }, [t, j]), i.useEffect(() => {
    if ("completed" === j) {
      var e;
      null == (e = h.current) || e.focus()
    }
  }, [j]), "editing" === j ? (0, n.jsxs)("div", {
    className: P.textAreaContainer,
    children: [(0, n.jsx)(s.nn4, {
      tag: "label",
      htmlFor: g,
      children: _.intl.string(_.t.JxKXeX)
    }), (0, n.jsx)(s.Kx8, {
      id: g,
      value: x,
      placeholder: I,
      onChange: C,
      onBlur: k,
      rows: 3,
      autoFocus: "editing" === j,
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k())
      },
      maxLength: o.r
    })]
  }) : (0, n.jsxs)("div", {
    ref: w,
    role: "group",
    "aria-labelledby": p,
    onClick: E,
    className: P.editableCommentContainer,
    children: [(0, n.jsx)(s.vdY, {
      size: "xxs",
      color: s.TVs.colors.ICON_TERTIARY,
      className: P.commentIcon
    }), (0, n.jsx)(T, {
      user: r,
      guildId: l,
      channelId: c,
      id: p
    }), (0, n.jsx)(N, {
      text: null != t ? t : I,
      className: a()(P.editableCommentText, !S && P.placeholder)
    }), (0, n.jsx)(s.P3F, {
      innerRef: h,
      "aria-label": _.intl.string(_.t.ppb9MD),
      onClick: e => {
        e.stopPropagation(), E()
      },
      focusProps: {
        ringTarget: w
      }
    })]
  })
}

function A(e) {
  let {
    applicationId: t,
    guildId: r,
    channelId: i,
    className: l
  } = e, a = (0, h.Z)(t);
  return a.length > 0 ? (0, n.jsx)(O.Z, {
    label: _.intl.formatToPlainString(_.t.ujhJdH, {
      numFriends: a.length
    }),
    className: l,
    users: a,
    guildId: r,
    channelId: i
  }) : null
}

function D(e) {
  let {
    user: t,
    guildId: r,
    channelId: i,
    game: l,
    widgetType: a,
    loading: o = false,
    disableInteraction: u = false
  } = e, {
    gameName: d = _.intl.string(_.t.GIWFlJ),
    imageSrc: f,
    applicationId: p,
    comment: b,
    tags: m
  } = l, O = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, h = g.default.getCurrentUser(), T = (null == h ? true : h.id) === t.id, N = !u && T && a === c.l.FAVORITE_GAMES;
  return o ? (0, n.jsx)(y.i, {}) : (0, n.jsxs)("div", {
    className: P.card,
    children: [(0, n.jsx)(j.Z, {
      className: null == f || u ? true : w.hoverActiveEffect,
      imageSrc: f,
      gameName: d,
      applicationId: p,
      userId: t.id,
      disableInteraction: u,
      hideTooltip: true
    }), (0, n.jsxs)("div", {
      className: P.details,
      children: [u ? (0, n.jsx)(s.X6q, S(I({}, O), {
        children: d
      })) : (0, n.jsx)(E, I({
        applicationId: p,
        userId: t.id,
        gameName: d
      }, O)), N ? (0, n.jsx)(C, {
        text: b,
        user: t,
        guildId: r,
        channelId: i,
        widgetType: a,
        applicationId: p
      }) : (0, n.jsx)(k, {
        text: b,
        user: t,
        guildId: r,
        channelId: i
      }), (0, n.jsx)(x.Z, {
        tags: m,
        isCurrentUser: T,
        widgetType: a,
        applicationId: p,
        disableInteraction: u,
        className: P.tags
      }), !u && (0, n.jsx)(A, {
        className: P.socialProof,
        applicationId: p,
        guildId: r,
        channelId: i
      })]
    }), !u && T && (0, n.jsx)(v.Z, {
      game: l,
      widgetType: a,
      className: P.removeGameButton
    })]
  })
}