/** Chunk was on web.js **/
/** chunk id: 898463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x,
  r: () => D
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk166459 = require("./166459.js"),
  Chunk403592 = require("./403592.jsx"),
  Chunk476326 = require("./476326.js"),
  Chunk543651 = require("./543651.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk312097 = require("./312097.jsx"),
  Chunk411405 = require("./411405.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk956664 = require("./956664.js"),
  Chunk709054 = require("./709054.js"),
  Chunk273031 = require("./273031.jsx"),
  Chunk859235 = require("./859235.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk278048 = require("./278048.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];

function P(e) {
  let {
    alt: t,
    spoiler: n,
    renderContent: a,
    size: s
  } = e, [l, c] = i.useState(false);
  return (0, r.jsx)(m.aQ.Provider, {
    value: !n,
    children: (0, r.jsx)(m.ZP, {
      containerStyles: s === O.q.CLIP ? {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        boxShadow: "none"
      } : true,
      type: m.ZP.Types.ATTACHMENT,
      onReveal: () => c(true),
      className: o()(S.spoilerContainer, {
        [S.sizeXSmall]: s === O.q.XSMALL,
        [S.sizeXXSmall]: s === O.q.XXSMALL
      }),
      children: e => (0, r.jsxs)("div", {
        className: S.spoilerWrapper,
        children: [a(e), (0, r.jsxs)("div", {
          className: S.tags,
          children: [null != t && "" !== t ? (0, r.jsx)("span", {
            className: S.altTag,
            children: v.intl.string(v.t.QEW81z)
          }) : null, l && n ? (0, r.jsx)("span", {
            className: S.altTag,
            children: v.intl.string(v.t["F+x38C"])
          }) : null]
        })]
      })
    })
  })
}

function w(e) {
  let {
    file: t,
    alt: n,
    spoiler: a,
    size: s = O.q.MEDIUM,
    onMouseEnter: l
  } = e, [u, d] = i.useState(), [f, p] = i.useState({
    width: 0,
    height: 0
  }), _ = s === O.q.SMALL;
  i.useEffect(() => {
    if (null == t || false === N.includes(t.type)) return;
    let e = URL.createObjectURL(t);
    d(e);
    let n = new Image;
    return n.onload = () => {
      let {
        width: e,
        height: t
      } = (0, E.zp)(n.width, n.height);
      p({
        width: e,
        height: t
      })
    }, n.src = e, () => {
      d(true), p({
        width: 0,
        height: 0
      }), URL.revokeObjectURL(e)
    }
  }, [t]);
  let m = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
      return null == u ? (0, r.jsx)(r.Fragment, {}) : (0, r.jsx)("img", {
        src: u,
        className: o()(S.media, {
          [S.spoiler]: e,
          [S.imageSmall]: _,
          [S.sizeXSmall]: s === O.q.XSMALL,
          [S.sizeXXSmall]: s === O.q.XXSMALL
        }),
        "aria-hidden": true,
        alt: null != n ? n : "",
        style: t ? f : {}
      })
    }, [u, _, s, n, f]),
    g = i.useCallback(() => {
      null != u && (0, h.K)({
        location: "ChannelAttachmentUpload",
        items: [{
          type: "IMAGE",
          url: u
        }],
        shouldHideMediaOptions: true
      })
    }, [u]),
    b = (null == t ? true : t.name) != null ? t.name : v.intl.string(v.t.lduvqL),
    y = null != n && "" !== n ? v.intl.formatToPlainString(v.t["8TRAzR"], {
      filename: b,
      alt: n
    }) : v.intl.formatToPlainString(v.t.lXoOEZ, {
      filename: b
    });
  return (0, r.jsx)("div", {
    onMouseEnter: l,
    className: o()(S.mediaContainer, {
      [S.imageSmall]: _
    }),
    children: (0, r.jsx)(c.P3F, {
      onClick: g,
      className: S.clickableMedia,
      "aria-label": y,
      children: (0, r.jsx)(P, {
        size: s,
        alt: n,
        spoiler: a,
        renderContent: m
      })
    })
  })
}

function R(e) {
  let {
    file: t,
    alt: n,
    spoiler: a,
    size: s = O.q.MEDIUM,
    onMouseEnter: l,
    onVideoLoadError: c
  } = e, [u, d] = i.useState(), f = i.useRef(null);
  return i.useEffect(() => {
    if (null == t) return;
    let e = URL.createObjectURL(t);
    return d(e), () => {
      d(true), URL.revokeObjectURL(e)
    }
  }, [t]), (0, r.jsx)("div", {
    onMouseEnter: l,
    className: S.mediaContainer,
    children: (0, r.jsx)(P, {
      size: s,
      alt: n,
      spoiler: a,
      renderContent: e => (0, r.jsx)(_.Z, {
        ref: f,
        src: u,
        className: o()(S.media, {
          [S.spoiler]: e,
          [S.sizeClip]: s === O.q.CLIP,
          [S.sizeXSmall]: s === O.q.XSMALL,
          [S.sizeXXSmall]: s === O.q.XXSMALL
        }),
        onError: c,
        preload: "none",
        "aria-hidden": true
      })
    })
  })
}

function D(e) {
  var t;
  let {
    upload: n,
    size: a = O.q.MEDIUM,
    onMouseEnter: s
  } = e, [l, c] = i.useState(false);
  return n.isImage && n.item.platform === f.ow.WEB ? (0, r.jsx)(w, {
    file: n.item.file,
    alt: n.description,
    spoiler: n.spoiler,
    size: a,
    onMouseEnter: s
  }) : !l && n.isVideo && n.item.platform === f.ow.WEB ? (0, r.jsx)(R, {
    file: n.item.file,
    size: a,
    alt: n.description,
    spoiler: n.spoiler,
    onMouseEnter: s,
    onVideoLoadError: () => c(true)
  }) : (0, r.jsx)("div", {
    onMouseEnter: s,
    className: o()(S.icon, S[null != (t = n.classification) ? t : ""], {
      [S.imageSmall]: a === O.q.SMALL,
      [S.sizeXSmall]: a === O.q.XSMALL,
      [S.sizeXXSmall]: a === O.q.XXSMALL
    }),
    children: (0, r.jsx)("div", {
      className: S.tags,
      children: n.spoiler ? (0, r.jsx)("span", {
        className: S.altTag,
        children: v.intl.string(v.t["F+x38C"])
      }) : null
    })
  })
}

function x(e) {
  let {
    channelId: t,
    draftType: n,
    upload: a,
    keyboardModeEnabled: f,
    label: _,
    size: h = O.q.MEDIUM,
    canEdit: m = true,
    hideFileName: E = false,
    clip: I
  } = e, C = null != I, N = (h = C ? O.q.CLIP : h) === O.q.SMALL, P = (0, s.e7)([g.Z], () => {
    var e;
    return null == (e = g.Z.getChannel(t)) ? true : e.guild_id
  }), w = e => {
    e.stopPropagation(), (0, c.h7j)(e => (0, r.jsx)(d.default, A(T({}, e), {
      draftType: n,
      upload: a,
      channelId: t,
      onSubmit: e => {
        let {
          name: r,
          description: i,
          spoiler: o
        } = e;
        u.Z.update(t, a.id, n, {
          filename: r,
          description: i,
          spoiler: o
        })
      }
    })))
  };
  return (0, r.jsxs)(O.Z, {
    actions: (0, r.jsxs)(i.Fragment, {
      children: [m ? (0, r.jsx)(y.Z, {
        className: o()({
          [S.action]: N
        }),
        tooltip: C ? v.intl.string(v.t.MYgdY2) : v.intl.string(v.t.cuurzA),
        onClick: () => u.Z.update(t, a.id, n, {
          spoiler: !a.spoiler
        }),
        children: a.spoiler ? (0, r.jsx)(c.kZF, {
          size: "md",
          color: "currentColor",
          className: o()({
            [S.actionBarIcon]: N
          })
        }) : (0, r.jsx)(c.tEF, {
          size: "xs",
          color: "currentColor",
          className: o()({
            [S.actionBarIcon]: N
          })
        })
      }) : null, m && !C ? (0, r.jsx)(y.Z, {
        className: o()({
          [S.action]: N
        }),
        tooltip: v.intl.string(v.t.Y8ujqr),
        onClick: w,
        children: (0, r.jsx)(c.vdY, {
          size: "xs",
          color: "currentColor",
          className: o()({
            [S.actionBarIcon]: N
          })
        })
      }) : null, (0, r.jsx)(y.Z, {
        className: o()({
          [S.action]: N
        }),
        tooltip: C ? v.intl.string(v.t.MskAXa) : v.intl.string(v.t.vN7REz),
        onClick: () => u.Z.remove(t, a.id, n),
        dangerous: true,
        children: (0, r.jsx)(c.XHJ, {
          size: "md",
          color: "currentColor",
          className: o()({
            [S.actionBarIcon]: N
          })
        })
      })]
    }),
    draftType: n,
    id: a.id,
    channelId: t,
    handleEditModal: w,
    keyboardModeEnabled: f,
    size: h,
    className: o()({
      [S.attachmentItemSmall]: N
    }),
    children: [(0, r.jsx)(D, {
      upload: a,
      size: h
    }), !E && !C && (0, r.jsx)("div", {
      className: S.filenameContainer,
      "aria-hidden": true,
      children: (0, r.jsx)(c.Text, {
        className: S.filename,
        variant: "text-sm/normal",
        children: null != _ ? _ : a.filename
      })
    }), C && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.Z, {
        className: S.clipsFooter,
        createdAt: b.default.extractTimestamp(I.id),
        participantIds: I.users,
        applicationId: I.applicationId,
        title: I.name,
        guildId: P
      }), (0, r.jsx)(c.IGR, {
        color: l.Z.colors.BACKGROUND_BRAND.css,
        className: S.clipsBadge,
        text: v.intl.string(v.t.oA4afG)
      })]
    })]
  })
}