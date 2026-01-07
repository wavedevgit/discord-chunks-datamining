/** Chunk was on 91236 **/
/** chunk id: 554226, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk446411 = require("./446411.jsx"),
  Chunk468846 = require("./468846.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk299379 = require("./299379.js"),
  Chunk454585 = require("./454585.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk55406 = require("./55406.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk653198 = require("./653198.js"),
  Chunk348955 = require("./348955.js");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = Chunk454585.Z.reactParserFor(Chunk55406.default.getDefaultRules(Chunk653198)),
  E = {};
class S extends Chunk473749.PureComponent {
  track(e, t, n) {
    this.props.track(e, t, n)
  }
  renderFooter() {
    return (0, r.jsxs)("div", {
      className: b.footer,
      children: [(0, r.jsx)(c.eee, {
        "aria-label": C.intl.string(C.t["/84uiD"]),
        className: b.socialLink,
        href: (0, p.Z)(j.RK.TWITTER),
        target: "blank",
        children: (0, r.jsx)(c.TAi, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, r.jsx)(c.eee, {
        "aria-label": C.intl.string(C.t["h0or/l"]),
        className: b.socialLink,
        href: j.fK7.FACEBOOK_URL,
        target: "blank",
        children: (0, r.jsx)(c.tdR, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, r.jsx)(c.eee, {
        "aria-label": C.intl.string(C.t["5uVPyf"]),
        className: b.socialLink,
        href: j.fK7.INSTAGRAM_URL,
        target: "blank",
        children: (0, r.jsx)(c.gST, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: C.intl.string(C.t.EjVVI7)
      })]
    })
  }
  renderVideo() {
    let {
      changeLog: e
    } = this.props, t = e.youtube_video_id, l = e.video, o = e.image;
    if (null != t && "" !== t) return (0, r.jsx)(d.BC, {
      className: b.video,
      allowFullScreen: false,
      href: "https://youtu.be/".concat(t),
      thumbnail: {
        url: "https://i.ytimg.com/vi/".concat(t, "/hqdefault.jpg"),
        width: 451,
        height: 254
      },
      video: {
        url: "https://www.youtube.com/embed/".concat(t, "?vq=large&rel=0&controls=0&showinfo=0"),
        width: 451,
        height: 254
      },
      provider: h.pn.YOUTUBE,
      maxWidth: 451,
      maxHeight: 254,
      renderVideoComponent: f.lV,
      renderImageComponent: f.Yi,
      renderLinkComponent: f.iT,
      onPlay: () => {
        this.track(j.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, true)
      }
    });
    if (null != l && "" !== l) {
      let e = l.startsWith("https://") ? l : n(595173)("./".concat(l));
      return (0, r.jsx)(g.Z, {
        src: e,
        poster: o,
        width: 451,
        height: 254,
        loop: true,
        muted: true,
        autoPlay: true,
        className: b.video,
        onPlay: () => {
          this.track(j.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, true)
        }
      })
    }
    if (null == o || "" === o) return null;
    {
      let e = o.startsWith("https://") ? o : n(595173)("./".concat(o));
      return (0, r.jsx)("img", {
        className: b.image,
        alt: "",
        src: e,
        width: 451,
        height: 254
      })
    }
  }
  render() {
    let {
      changeLog: e
    } = this.props;
    return (0, r.jsxs)(c.Y0X, {
      transitionState: c.Dvm.ENTERED,
      className: O.modal,
      parentComponent: "ChangeLogStandardTemplate",
      children: [(0, r.jsxs)(c.xBx, {
        align: u.Z.Justify.BETWEEN,
        separator: false,
        children: [this.renderHeader(), (0, r.jsx)(u.Z.Child, {
          grow: 0,
          children: (0, r.jsx)(c.olH, {
            onClick: this.props.onClose
          })
        })]
      }), (0, r.jsx)(c.hzk, {
        className: a()(O.content, b.container, {}),
        scrollerRef: this.scrollerRef,
        onScroll: this.handleScroll,
        children: (0, r.jsxs)("div", {
          tabIndex: 0,
          role: "region",
          "aria-label": C.intl.string(C.t.HzBchE),
          children: [this.renderVideo(), y(e.body, false, {
            changeLog: this,
            interpolations: E,
            onLinkClick: this.trackLinkClick
          })]
        })
      }), (0, r.jsx)(c.mzw, {
        direction: u.Z.Direction.HORIZONTAL,
        children: this.renderFooter()
      })]
    })
  }
  constructor(...e) {
    super(...e), k(this, "scrollerRef", l.createRef()), k(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null != e) {
        var t, n;
        null == (t = (n = this.props).onScroll) || t.call(n, e)
      }
    }), k(this, "trackLinkClick", e => {
      this.props.track(j.rMx.CHANGE_LOG_CTA_CLICKED, {
        cta_type: "inline_link",
        target: e
      }, false)
    }), k(this, "renderHeader", () => {
      let {
        changeLog: e
      } = this.props;
      return (0, r.jsxs)(u.Z.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, r.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          children: C.intl.string(C.t.LRmNAl)
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          className: b.date,
          children: C.intl.format(C.t.Fb8xx2, {
            date: null != e.date && "" !== e.date ? s()(e.date).toDate() : new Date
          })
        })]
      })
    })
  }
}
let L = S