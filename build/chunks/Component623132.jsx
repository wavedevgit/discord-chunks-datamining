/** Chunk was on 49941 **/
/** chunk id: 623132, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./781311.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk624238 = require("./624238.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk780899 = require("./780899.jsx"),
  Chunk733231 = require("./733231.jsx"),
  Chunk817053 = require("./817053.jsx"),
  Chunk248554 = require("./248554.jsx"),
  Chunk879877 = require("./879877.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk919498 = require("./919498.jsx"),
  Chunk394606 = require("./394606.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk776385 = require("./776385.js");

function S(e) {
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

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  let {
    index: t,
    widgetType: n,
    game: i,
    children: l
  } = e, {
    manageFocusOnReorder: a
  } = (0, h.C)();
  return (0, r.jsx)(b.yW, {
    index: t,
    itemId: i.applicationId,
    listType: n,
    itemType: "GAME_DETAILS_CARD",
    itemPreviewProps: {
      game: i,
      widgetType: n
    },
    "aria-label": _.intl.formatToPlainString(_.t["0dR3gw"], {
      positionNumber: t + 1
    }),
    onReorder: (e, t) => (0, m.Eq)(n, e, t),
    onEnd: () => a(i.applicationId),
    className: w.dropTarget,
    dropBeforeClassName: w.dropIndicatorBefore,
    dropAfterClassName: w.dropIndicatorAfter,
    draggingClassName: w.isDragging,
    children: l
  })
}

function C(e) {
  var {
    applicationId: t,
    userId: n,
    gameName: i
  } = e, l = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["applicationId", "userId", "gameName"]);
  let a = (0, d.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: u.m1.UserProfile,
    sourceUserId: n,
    trackEntryPointImpression: true
  });
  return null == a ? (0, r.jsx)(s.Heading, E(S({}, l), {
    children: i
  })) : (0, r.jsx)(s.Heading, E(S({}, l), {
    children: (0, r.jsx)(s.P3F, {
      onClick: a,
      className: w.clickableText,
      children: i
    })
  }))
}

function D(e) {
  let {
    user: t,
    guildId: n,
    channelId: i,
    id: l
  } = e;
  return (0, r.jsx)(s.nn4, {
    id: l,
    children: _.intl.format(_.t.TM0XDY, {
      name: g.ZP.getName(n, i, t)
    })
  })
}

function k(e) {
  let {
    text: t,
    className: n
  } = e;
  return (0, r.jsx)(s.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    className: n,
    children: t
  })
}

function N(e) {
  let {
    text: t,
    user: n,
    guildId: i,
    channelId: l
  } = e, a = (0, c.Dt)();
  return null == t || "" === t.trim() ? null : (0, r.jsxs)("div", {
    role: "group",
    "aria-labelledby": a,
    children: [(0, r.jsx)(s.PEf, {
      size: "xxs",
      color: s.TVs.colors.ICON_MUTED,
      className: w.commentIcon
    }), (0, r.jsx)(D, {
      user: n,
      guildId: i,
      channelId: l,
      id: a
    }), (0, r.jsx)(k, {
      text: t
    })]
  })
}

function A(e) {
  let {
    text: t,
    user: n,
    guildId: l,
    channelId: u,
    widgetType: d,
    applicationId: f
  } = e, g = (0, c.Dt)(), b = (0, c.Dt)(), {
    trackUserProfileEditAction: h
  } = (0, p.KZ)(), [y, O] = i.useState("idle"), [v, j] = i.useState(null != t ? t : ""), x = i.useRef(null), P = i.useRef(null), I = _.intl.string(_.t.xKSfBT), S = null != t && "" !== t.trim(), E = i.useCallback(() => {
    h({
      action: "PRESS_ADD_COMMENTARY",
      widgetEdited: d
    }), O("editing")
  }, [d, h]), T = i.useCallback(() => {
    let e = v.trim(),
      n = e !== (null != t ? t : "").trim();
    (0, m.Bu)(d, f, "" !== e ? e : true), O("completed"), n && h({
      action: "COMMENTARY_EDITED",
      widgetEdited: d,
      gameId: f
    })
  }, [d, f, v, t, h]), C = i.useCallback(e => {
    j(e)
  }, []);
  return i.useEffect(() => {
    "editing" === y && j(null != t ? t : "")
  }, [t, y]), i.useEffect(() => {
    if ("completed" === y) {
      var e;
      null == (e = x.current) || e.focus()
    }
  }, [y]), "editing" === y ? (0, r.jsxs)("div", {
    className: w.textAreaContainer,
    children: [(0, r.jsx)(s.nn4, {
      tag: "label",
      htmlFor: g,
      children: _.intl.string(_.t.JxKXeT)
    }), (0, r.jsx)(s.Kx8, {
      id: g,
      value: v,
      placeholder: I,
      onChange: C,
      onBlur: T,
      rows: 3,
      autoFocus: "editing" === y,
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), T())
      },
      maxLength: o.rN
    })]
  }) : (0, r.jsxs)("div", {
    ref: P,
    role: "group",
    "aria-labelledby": b,
    onClick: E,
    className: w.editableCommentContainer,
    children: [(0, r.jsx)(s.vdY, {
      size: "xxs",
      color: s.TVs.colors.ICON_MUTED,
      className: w.commentIcon
    }), (0, r.jsx)(D, {
      user: n,
      guildId: l,
      channelId: u,
      id: b
    }), (0, r.jsx)(k, {
      text: null != t ? t : I,
      className: a()(w.editableCommentText, !S && w.placeholder)
    }), (0, r.jsx)(s.P3F, {
      innerRef: x,
      "aria-label": _.intl.string(_.t.ppb9MJ),
      onClick: e => {
        e.stopPropagation(), E()
      },
      focusProps: {
        ringTarget: P
      }
    })]
  })
}

function Z(e) {
  let {
    user: t,
    guildId: n,
    channelId: i,
    game: l,
    widgetType: o,
    disableInteraction: c = false,
    index: u,
    onRemoveGame: d,
    coverRef: g,
    className: p
  } = e, {
    applicationId: _,
    comment: D,
    tags: k
  } = l, {
    coverImageUrl: Z,
    gameName: R,
    isLoading: G
  } = (0, P.Z)(_), L = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, M = f.default.getCurrentUser(), B = (null == M ? true : M.id) === t.id, F = 1 === (0, m.Gv)(o), U = !c && B, W = U && (0, m.vI)(o), H = U && !F, {
    registerDragHandleRef: z
  } = (0, h.C)();
  if (G) return (0, r.jsx)(O.i, {});
  let K = () => (0, r.jsx)(y.Z, {
      coverRef: g,
      className: null == Z || c ? true : I.hoverActiveEffect,
      imageSrc: Z,
      gameName: R,
      applicationId: _,
      userId: t.id,
      disableInteraction: c,
      hideTooltip: true
    }),
    q = () => (0, r.jsxs)("div", {
      className: a()(w.card, p),
      children: [H ? (0, r.jsxs)("div", {
        className: w.dragHandleContainer,
        children: [K(), (0, r.jsx)(b.e_, {
          buttonRef: z(l.applicationId),
          className: w.dragHandle
        })]
      }) : K(), (0, r.jsxs)("div", {
        className: w.details,
        children: [c ? (0, r.jsx)(s.Heading, E(S({}, L), {
          children: R
        })) : (0, r.jsx)(C, S({
          applicationId: _,
          userId: t.id,
          gameName: R
        }, L)), W ? (0, r.jsx)(A, {
          text: D,
          user: t,
          guildId: n,
          channelId: i,
          widgetType: o,
          applicationId: _
        }) : (0, r.jsx)(N, {
          text: D,
          user: t,
          guildId: n,
          channelId: i
        }), (0, r.jsx)(v.Z, {
          tags: k,
          isCurrentUser: B,
          widgetType: o,
          applicationId: _,
          disableInteraction: c,
          className: w.tags
        }), !c && (0, r.jsx)(x.F, {
          className: w.socialProof,
          applicationId: _,
          guildId: n,
          channelId: i
        })]
      }), !c && B && (0, r.jsx)(j.Z, {
        game: l,
        widgetType: o,
        className: w.removeGameButton,
        onRemove: () => null == d ? true : d(l.applicationId)
      })]
    });
  return H ? (0, r.jsx)(T, {
    index: null != u ? u : 0,
    widgetType: o,
    game: l,
    children: q()
  }) : q()
}