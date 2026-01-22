/** Chunk was on web.js **/
/** chunk id: 914905, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => x,
  J: () => D
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk608299 = require("./608299.js"),
  Chunk427281 = require("./427281.jsx"),
  Chunk565150 = require("./565150.js"),
  Chunk458517 = require("./458517.jsx"),
  Chunk607470 = require("./607470.jsx"),
  Chunk256905 = require("./256905.jsx"),
  Chunk302031 = require("./302031.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk515718 = require("./515718.js"),
  Chunk661191 = require("./661191.js"),
  Chunk851023 = require("./851023.jsx"),
  Chunk349688 = require("./349688.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk76397 = require("./76397.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];

function R(e) {
  let {
    alt: t,
    spoiler: n,
    renderContent: a,
    size: o
  } = e, [l, c] = i.useState(false);
  return (0, r.jsx)(m.Bs.Provider, {
    value: !n,
    children: (0, r.jsx)(m.Ay, {
      containerStyles: o === O.L.CLIP ? {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        boxShadow: "none"
      } : true,
      type: m.Ay.Types.ATTACHMENT,
      onReveal: () => c(true),
      className: s()(v.spoilerContainer, {
        [v.sizeXSmall]: o === O.L.XSMALL,
        [v.sizeXXSmall]: o === O.L.XXSMALL
      }),
      children: e => (0, r.jsxs)("div", {
        className: v.spoilerWrapper,
        children: [a(e), (0, r.jsxs)("div", {
          className: v.tags,
          children: [null != t && "" !== t ? (0, r.jsx)("span", {
            className: v.altTag,
            children: A.intl.string(A.t.QEW81z)
          }) : null, l && n ? (0, r.jsx)("span", {
            className: v.altTag,
            children: A.intl.string(A.t["F+x38C"])
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
    size: o = O.L.MEDIUM,
    onMouseEnter: l
  } = e, [u, d] = i.useState(), [f, p] = i.useState({
    width: 0,
    height: 0
  }), _ = o === O.L.SMALL;
  i.useEffect(() => {
    if (null == t || false === N.includes(t.type)) return;
    let e = URL.createObjectURL(t);
    d(e);
    let n = new Image;
    return n.onload = () => {
      let {
        width: e,
        height: t
      } = (0, E.z$)(n.width, n.height);
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
        className: s()(v.media, {
          [v.spoiler]: e,
          [v.imageSmall]: _,
          [v.sizeXSmall]: o === O.L.XSMALL,
          [v.sizeXXSmall]: o === O.L.XXSMALL
        }),
        "aria-hidden": true,
        alt: null != n ? n : "",
        style: t ? f : {}
      })
    }, [u, _, o, n, f]),
    g = i.useCallback(() => {
      null != u && (0, h.R)({
        location: "ChannelAttachmentUpload",
        items: [{
          type: "IMAGE",
          url: u
        }],
        shouldHideMediaOptions: true
      })
    }, [u]),
    b = (null == t ? true : t.name) != null ? t.name : A.intl.string(A.t.lduvqL),
    y = null != n && "" !== n ? A.intl.formatToPlainString(A.t["8TRAzR"], {
      filename: b,
      alt: n
    }) : A.intl.formatToPlainString(A.t.lXoOEZ, {
      filename: b
    });
  return (0, r.jsx)("div", {
    onMouseEnter: l,
    className: s()(v.mediaContainer, {
      [v.imageSmall]: _
    }),
    children: (0, r.jsx)(c.DUT, {
      onClick: g,
      className: v.clickableMedia,
      "aria-label": y,
      children: (0, r.jsx)(R, {
        size: o,
        alt: n,
        spoiler: a,
        renderContent: m
      })
    })
  })
}

function P(e) {
  let {
    file: t,
    alt: n,
    spoiler: a,
    size: o = O.L.MEDIUM,
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
    className: v.mediaContainer,
    children: (0, r.jsx)(R, {
      size: o,
      alt: n,
      spoiler: a,
      renderContent: e => (0, r.jsx)(_.A, {
        ref: f,
        src: u,
        className: s()(v.media, {
          [v.spoiler]: e,
          [v.sizeClip]: o === O.L.CLIP,
          [v.sizeXSmall]: o === O.L.XSMALL,
          [v.sizeXXSmall]: o === O.L.XXSMALL
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
    size: a = O.L.MEDIUM,
    onMouseEnter: o
  } = e, [l, c] = i.useState(false);
  return n.isImage && n.item.platform === f.xz.WEB ? (0, r.jsx)(w, {
    file: n.item.file,
    alt: n.description,
    spoiler: n.spoiler,
    size: a,
    onMouseEnter: o
  }) : !l && n.isVideo && n.item.platform === f.xz.WEB ? (0, r.jsx)(P, {
    file: n.item.file,
    size: a,
    alt: n.description,
    spoiler: n.spoiler,
    onMouseEnter: o,
    onVideoLoadError: () => c(true)
  }) : (0, r.jsx)("div", {
    onMouseEnter: o,
    className: s()(v.icon, v[null != (t = n.classification) ? t : ""], {
      [v.imageSmall]: a === O.L.SMALL,
      [v.sizeXSmall]: a === O.L.XSMALL,
      [v.sizeXXSmall]: a === O.L.XXSMALL
    }),
    children: (0, r.jsx)("div", {
      className: v.tags,
      children: n.spoiler ? (0, r.jsx)("span", {
        className: v.altTag,
        children: A.intl.string(A.t["F+x38C"])
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
    size: h = O.L.MEDIUM,
    canEdit: m = true,
    hideFileName: E = false,
    clip: S
  } = e, T = null != S, N = (h = T ? O.L.CLIP : h) === O.L.SMALL, R = (0, o.bG)([g.A], () => {
    var e;
    return null == (e = g.A.getChannel(t)) ? true : e.guild_id
  }), w = e => {
    e.stopPropagation(), (0, c.qfG)(e => (0, r.jsx)(d.default, C(I({}, e), {
      draftType: n,
      upload: a,
      channelId: t,
      onSubmit: e => {
        let {
          name: r,
          description: i,
          spoiler: s
        } = e;
        u.A.update(t, a.id, n, {
          filename: r,
          description: i,
          spoiler: s
        })
      }
    })))
  };
  return (0, r.jsxs)(O.A, {
    actions: (0, r.jsxs)(i.Fragment, {
      children: [m ? (0, r.jsx)(y.A, {
        className: s()({
          [v.action]: N
        }),
        tooltip: T ? A.intl.string(A.t.MYgdY2) : A.intl.string(A.t.cuurzA),
        onClick: () => u.A.update(t, a.id, n, {
          spoiler: !a.spoiler
        }),
        children: a.spoiler ? (0, r.jsx)(c.G3N, {
          size: "md",
          color: "currentColor",
          className: s()({
            [v.actionBarIcon]: N
          })
        }) : (0, r.jsx)(c.bMW, {
          size: "xs",
          color: "currentColor",
          className: s()({
            [v.actionBarIcon]: N
          })
        })
      }) : null, m && !T ? (0, r.jsx)(y.A, {
        className: s()({
          [v.action]: N
        }),
        tooltip: A.intl.string(A.t.Y8ujqr),
        onClick: w,
        children: (0, r.jsx)(c.R2l, {
          size: "xs",
          color: "currentColor",
          className: s()({
            [v.actionBarIcon]: N
          })
        })
      }) : null, (0, r.jsx)(y.A, {
        className: s()({
          [v.action]: N
        }),
        tooltip: T ? A.intl.string(A.t.MskAXa) : A.intl.string(A.t.vN7REz),
        onClick: () => u.A.remove(t, a.id, n),
        dangerous: true,
        children: (0, r.jsx)(c.ucK, {
          size: "md",
          color: "currentColor",
          className: s()({
            [v.actionBarIcon]: N
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
    className: s()({
      [v.attachmentItemSmall]: N
    }),
    children: [(0, r.jsx)(D, {
      upload: a,
      size: h
    }), !E && !T && (0, r.jsx)("div", {
      className: v.filenameContainer,
      "aria-hidden": true,
      children: (0, r.jsx)(c.Text, {
        className: v.filename,
        variant: "text-sm/normal",
        children: null != _ ? _ : a.filename
      })
    }), T && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.A, {
        className: v.clipsFooter,
        createdAt: b.default.extractTimestamp(S.id),
        participantIds: S.users,
        applicationId: S.applicationId,
        title: S.name,
        guildId: R
      }), (0, r.jsx)(c.LpS, {
        color: l.A.colors.BACKGROUND_BRAND.css,
        className: v.clipsBadge,
        text: A.intl.string(A.t.oA4afG)
      })]
    })]
  })
}