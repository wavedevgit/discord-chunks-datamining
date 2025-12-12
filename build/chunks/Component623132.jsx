/** Chunk was on 85032 **/
/** chunk id: 623132, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./781311.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk713603 = require("./713603.js"),
  Chunk447921 = require("./447921.js");

function E(e) {
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

function _(e, t) {
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
    children: a
  } = e, {
    manageFocusOnReorder: l
  } = (0, h.C)();
  return (0, r.jsx)(m.yW, {
    index: t,
    itemId: i.applicationId,
    listType: n,
    itemType: "GAME_DETAILS_CARD",
    itemPreviewProps: {
      game: i,
      widgetType: n
    },
    "aria-label": I.intl.formatToPlainString(I.t["0dR3gw"], {
      positionNumber: t + 1
    }),
    onReorder: (e, t) => (0, b.Eq)(n, e, t),
    onEnd: () => l(i.applicationId),
    className: S.dropTarget,
    dropBeforeClassName: S.dropIndicatorBefore,
    dropAfterClassName: S.dropIndicatorAfter,
    draggingClassName: S.isDragging,
    children: a
  })
}

function C(e) {
  var {
    applicationId: t,
    userId: n,
    gameName: i
  } = e, a = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["applicationId", "userId", "gameName"]);
  let l = (0, d.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: u.m1.UserProfile,
    sourceUserId: n,
    trackEntryPointImpression: true
  });
  return null == l ? (0, r.jsx)(c.Heading, _(E({}, a), {
    children: i
  })) : (0, r.jsx)(c.Heading, _(E({}, a), {
    children: (0, r.jsx)(c.P3F, {
      onClick: l,
      className: S.clickableText,
      children: i
    })
  }))
}

function D(e) {
  let {
    user: t,
    guildId: n,
    channelId: i,
    id: a
  } = e;
  return (0, r.jsx)(c.nn4, {
    id: a,
    children: I.intl.format(I.t.TM0XDY, {
      name: g.ZP.getName(n, i, t)
    })
  })
}

function k(e) {
  let {
    text: t,
    className: n
  } = e;
  return (0, r.jsx)(c.Text, {
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
    channelId: a
  } = e, l = (0, s.Dt)();
  return null == t || "" === t.trim() ? null : (0, r.jsxs)("div", {
    role: "group",
    "aria-labelledby": l,
    children: [(0, r.jsx)(c.PEf, {
      size: "xxs",
      color: c.TVs.colors.ICON_MUTED,
      className: S.commentIcon
    }), (0, r.jsx)(D, {
      user: n,
      guildId: i,
      channelId: a,
      id: l
    }), (0, r.jsx)(k, {
      text: t
    })]
  })
}

function A(e) {
  let {
    text: t,
    user: n,
    guildId: a,
    channelId: u,
    widgetType: d,
    applicationId: f
  } = e, g = (0, s.Dt)(), m = (0, s.Dt)(), {
    trackUserProfileEditAction: h
  } = (0, p.KZ)(), [y, v] = i.useState("idle"), [O, j] = i.useState(null != t ? t : ""), x = i.useRef(null), P = i.useRef(null), w = I.intl.string(I.t.xKSfBT), E = null != t && "" !== t.trim(), _ = i.useCallback(() => {
    h({
      action: "PRESS_ADD_COMMENTARY",
      widgetEdited: d
    }), v("editing")
  }, [d, h]), T = i.useCallback(() => {
    let e = O.trim(),
      n = e !== (null != t ? t : "").trim();
    (0, b.Bu)(d, f, "" !== e ? e : true), v("completed"), n && h({
      action: "COMMENTARY_EDITED",
      widgetEdited: d,
      gameId: f
    })
  }, [d, f, O, t, h]), C = i.useCallback(e => {
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
    className: S.textAreaContainer,
    children: [(0, r.jsx)(c.nn4, {
      tag: "label",
      htmlFor: g,
      children: I.intl.string(I.t.JxKXeT)
    }), (0, r.jsx)(c.Kx8, {
      id: g,
      value: O,
      placeholder: w,
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
    "aria-labelledby": m,
    onClick: _,
    className: S.editableCommentContainer,
    children: [(0, r.jsx)(c.vdY, {
      size: "xxs",
      color: c.TVs.colors.ICON_MUTED,
      className: S.commentIcon
    }), (0, r.jsx)(D, {
      user: n,
      guildId: a,
      channelId: u,
      id: m
    }), (0, r.jsx)(k, {
      text: null != t ? t : w,
      className: l()(S.editableCommentText, !E && S.placeholder)
    }), (0, r.jsx)(c.P3F, {
      innerRef: x,
      "aria-label": I.intl.string(I.t.ppb9MJ),
      onClick: e => {
        e.stopPropagation(), _()
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
    game: a,
    widgetType: o,
    disableInteraction: s = false,
    index: u,
    onRemoveGame: d,
    coverRef: g,
    className: p
  } = e, {
    applicationId: I,
    comment: D,
    tags: k
  } = a, {
    coverImageUrl: Z,
    gameName: R,
    isLoading: G
  } = (0, P.Z)(I), M = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, L = f.default.getCurrentUser(), B = (null == L ? true : L.id) === t.id, U = 1 === (0, b.Gv)(o), F = !s && B, W = F && (0, b.vI)(o), H = F && !U, {
    registerDragHandleRef: z
  } = (0, h.C)();
  if (G) return (0, r.jsx)(v.i, {});
  let K = () => (0, r.jsx)(y.Z, {
      coverRef: g,
      className: null == Z || s ? true : w.hoverActiveEffect,
      imageSrc: Z,
      gameName: R,
      applicationId: I,
      userId: t.id,
      disableInteraction: s,
      hideTooltip: true
    }),
    q = () => (0, r.jsxs)("div", {
      className: l()(S.card, p),
      children: [H ? (0, r.jsxs)("div", {
        className: S.dragHandleContainer,
        children: [K(), (0, r.jsx)(m.e_, {
          buttonRef: z(a.applicationId),
          className: S.dragHandle
        })]
      }) : K(), (0, r.jsxs)("div", {
        className: S.details,
        children: [s ? (0, r.jsx)(c.Heading, _(E({}, M), {
          children: R
        })) : (0, r.jsx)(C, E({
          applicationId: I,
          userId: t.id,
          gameName: R
        }, M)), W ? (0, r.jsx)(A, {
          text: D,
          user: t,
          guildId: n,
          channelId: i,
          widgetType: o,
          applicationId: I
        }) : (0, r.jsx)(N, {
          text: D,
          user: t,
          guildId: n,
          channelId: i
        }), (0, r.jsx)(O.Z, {
          tags: k,
          isCurrentUser: B,
          widgetType: o,
          applicationId: I,
          disableInteraction: s,
          className: S.tags
        }), !s && (0, r.jsx)(x.F, {
          className: S.socialProof,
          applicationId: I,
          guildId: n,
          channelId: i
        })]
      }), !s && B && (0, r.jsx)(j.Z, {
        game: a,
        widgetType: o,
        className: S.removeGameButton,
        onRemove: () => null == d ? true : d(a.applicationId)
      })]
    });
  return H ? (0, r.jsx)(T, {
    index: null != u ? u : 0,
    widgetType: o,
    game: a,
    children: q()
  }) : q()
}