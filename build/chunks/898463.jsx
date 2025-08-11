/** Chunk was on web.js **/
/** chunk id: 898463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L,
  r: () => D
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk166459 = require("./166459.js"),
  Chunk95152 = require("./95152.jsx"),
  Chunk476326 = require("./476326.js"),
  Chunk543651 = require("./543651.jsx"),
  Chunk377171 = require("./377171.js"),
  Chunk95398 = require("./95398.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk312097 = require("./312097.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk956664 = require("./956664.js"),
  Chunk709054 = require("./709054.js"),
  Chunk273031 = require("./273031.jsx"),
  Chunk859235 = require("./859235.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk739846 = require("./739846.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];

function R(e) {
  let {
    alt: t,
    spoiler: n,
    renderContent: o,
    size: a
  } = e, [s, l] = i.useState(false);
  return <p.aQ.Provider value={!n}><p.ZP containerStyles={a === O.q.CLIP ? {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        boxShadow: "none"
      } : true} type={p.ZP.Types.ATTACHMENT} onReveal={() => l(true)} className={I.spoilerContainer}>{e => (0, r.jsxs)("div", {
        className: I.spoilerWrapper,
        children: [o(e), (0, r.jsxs)("div", {
          className: I.tags,
          children: [null != t && "" !== t ? (0, r.jsx)("span", {
            className: I.altTag,
            children: v.intl.string(v.t.QEW819)
          }) : null, s && n ? (0, r.jsx)("span", {
            className: I.altTag,
            children: v.intl.string(v.t["F+x38P"])
          }) : null]
        })]
      })}</p.ZP></p.aQ.Provider>
}

function P(e) {
  let {
    file: t,
    alt: n,
    spoiler: o,
    size: s = O.q.MEDIUM,
    onMouseEnter: c
  } = e, [u, d] = i.useState(), [f, _] = i.useState({
    width: 0,
    height: 0
  }), p = s === O.q.SMALL;
  i.useEffect(() => {
    if (null == t || false === C.includes(t.type)) return;
    let e = URL.createObjectURL(t);
    d(e);
    let n = new Image;
    return n.onload = () => {
      let {
        width: e,
        height: t
      } = (0, E.zp)(n.width, n.height);
      _({
        width: e,
        height: t
      })
    }, n.src = e, () => {
      d(true), _({
        width: 0,
        height: 0
      }), URL.revokeObjectURL(e)
    }
  }, [t]);
  let h = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
      return null == u ? <r.Fragment /> : <img src={u} className={a()(I.media, {
          [I.spoiler]: e,
          [I.imageSmall]: p
        })} aria-hidden={true} alt={null != n ? n : ""} style={t ? f : {}} />
    }, [u, p, n, f]),
    g = i.useCallback(() => {
      null != u && (0, m.K)({
        location: "ChannelAttachmentUpload",
        items: [{
          type: "IMAGE",
          url: u
        }],
        shouldHideMediaOptions: true
      })
    }, [u]);
  return <div onMouseEnter={c} className={a()(I.mediaContainer, {
      [I.imageSmall]: p
    })}><l.P3F onClick={g} className={I.clickableMedia}><R size={s} alt={n} spoiler={o} renderContent={h} /></l.P3F></div>
}

function w(e) {
  let {
    file: t,
    alt: n,
    spoiler: o,
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
  }, [t]), <div onMouseEnter={l} className={I.mediaContainer}><R size={s} alt={n} spoiler={o} renderContent={e => (0, r.jsx)(h.Z, {
        ref: f,
        src: u,
        className: a()(I.media, {
          [I.spoiler]: e,
          [I.sizeClip]: s === O.q.CLIP
        }),
        onError: c,
        preload: "none",
        "aria-hidden": true
      })} /></div>
}

function D(e) {
  var t;
  let {
    upload: n,
    size: o = O.q.MEDIUM,
    onMouseEnter: s
  } = e, [l, c] = i.useState(false), u = o === O.q.SMALL;
  return n.isImage && n.item.platform === d.ow.WEB ? <P file={n.item.file} alt={n.description} spoiler={n.spoiler} size={o} onMouseEnter={s} /> : !l && n.isVideo && n.item.platform === d.ow.WEB ? <w file={n.item.file} size={o} alt={n.description} spoiler={n.spoiler} onMouseEnter={s} onVideoLoadError={() => c(true)} /> : <div onMouseEnter={s} className={a()(I.icon, I.__invalid_imageContainer, {
      [I[null != (t = n.classification) ? t : ""]]: true,
      [I.imageSmall]: u
    })}><div className={I.tags}>{n.spoiler ? (0, r.jsx)("span", {
        className: I.altTag,
        children: v.intl.string(v.t["F+x38P"])
      }) : null}</div></div>
}

function L(e) {
  let {
    channelId: t,
    draftType: n,
    upload: o,
    keyboardModeEnabled: d,
    label: p,
    size: h = O.q.MEDIUM,
    canEdit: m = true,
    hideFileName: E = false,
    clip: T
  } = e, A = null != T, C = (h = A ? O.q.CLIP : h) === O.q.SMALL, R = (0, s.e7)([g.Z], () => {
    var e;
    return null == (e = g.Z.getChannel(t)) ? true : e.guild_id
  }), P = e => {
    e.stopPropagation(), (0, l.h7j)(e => <u.default{...N(S({}, e), {
      draftType: n,
      upload: o,
      channelId: t,
      onSubmit: e => {
        let {
          name: r,
          description: i,
          spoiler: a
        } = e;
        c.Z.update(t, o.id, n, {
          filename: r,
          description: i,
          spoiler: a
        })
      }
    })} />)
  };
  return <O.Z actions={(0, r.jsxs)(i.Fragment, {
      children: [m ? (0, r.jsx)(y.Z, {
        className: a()({
          [I.action]: C
        }),
        tooltip: A ? v.intl.string(v.t.MYgdY2) : v.intl.string(v.t.cuurzM),
        onClick: () => c.Z.update(t, o.id, n, {
          spoiler: !o.spoiler
        }),
        children: o.spoiler ? (0, r.jsx)(l.kZF, {
          size: "md",
          color: "currentColor",
          className: a()({
            [I.actionBarIcon]: C
          })
        }) : (0, r.jsx)(l.tEF, {
          size: "xs",
          color: "currentColor",
          className: a()({
            [I.actionBarIcon]: C
          })
        })
      }) : null, m && !A ? (0, r.jsx)(y.Z, {
        className: a()({
          [I.action]: C
        }),
        tooltip: v.intl.string(v.t.Y8ujqq),
        onClick: P,
        children: (0, r.jsx)(l.vdY, {
          size: "xs",
          color: "currentColor",
          className: a()({
            [I.actionBarIcon]: C
          })
        })
      }) : null, (0, r.jsx)(y.Z, {
        className: a()({
          [I.action]: C
        }),
        tooltip: A ? v.intl.string(v.t.MskAXV) : v.intl.string(v.t.vN7REx),
        onClick: () => c.Z.remove(t, o.id, n),
        dangerous: true,
        children: (0, r.jsx)(l.XHJ, {
          size: "md",
          color: "currentColor",
          className: a()({
            [I.actionBarIcon]: C
          })
        })
      })]
    })} draftType={n} id={o.id} channelId={t} handleEditModal={P} keyboardModeEnabled={d} size={h} className={a()({
      [I.attachmentItemSmall]: C
    })}>{<D upload={o} size={h} />}{!E && !A && <div className={I.filenameContainer}><l.Text className={I.filename} variant={"text-sm/normal"}>{null != p ? p : o.filename}</l.Text></div>}{A && <r.Fragment>{<f.Z className={I.clipsFooter} createdAt={b.default.extractTimestamp(T.id)} participantIds={T.users} applicationId={T.applicationId} title={T.name} guildId={R} />}{<l.IGR color={_.Z.BG_BRAND} className={I.clipsBadge} text={v.intl.string(v.t.oA4afH)} />}</r.Fragment>}</O.Z>
}