/** Chunk was on 20296 **/
/** chunk id: 388080, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
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
  Chunk491068 = require("./491068.js"),
  Chunk400167 = require("./400167.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let k = Chunk454585.Z.reactParserFor(Chunk55406.default.getDefaultRules(Chunk491068)),
  v = {};
class C extends Chunk73800.PureComponent {
  track(e, t, n) {
    this.props.track(e, t, n)
  }
  renderFooter() {
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk491068.footer,
      children: [(0, Chunk255367.jsx)(Chunk481060.eee, {
        "aria-label": Chunk388032.intl.string(Chunk388032.t["/84uiI"]),
        className: Chunk491068.socialLink,
        href: (0, Chunk299379.Z)(Chunk981631.RK.TWITTER),
        target: "blank",
        children: (0, Chunk255367.jsx)(Chunk481060.TAi, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, Chunk255367.jsx)(Chunk481060.eee, {
        "aria-label": Chunk388032.intl.string(Chunk388032.t["h0or/v"]),
        className: Chunk491068.socialLink,
        href: Chunk981631.fK7.FACEBOOK_URL,
        target: "blank",
        children: (0, Chunk255367.jsx)(Chunk481060.tdR, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, Chunk255367.jsx)(Chunk481060.eee, {
        "aria-label": Chunk388032.intl.string(Chunk388032.t["5uVPyc"]),
        className: Chunk491068.socialLink,
        href: Chunk981631.fK7.INSTAGRAM_URL,
        target: "blank",
        children: (0, Chunk255367.jsx)(Chunk481060.gST, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-xs/normal",
        children: Chunk388032.intl.string(Chunk388032.t.EjVVIy)
      })]
    })
  }
  renderVideo() {
    let {
      changeLog: e
    } = this.props, t = module.youtube_video_id, o = module.video, a = module.image;
    if (null != exports && "" !== exports) return (0, Chunk255367.jsx)(Chunk446411.BC, {
      className: Chunk491068.video,
      allowFullScreen: false,
      href: "https://youtu.be/".concat(exports),
      thumbnail: {
        url: "https://i.ytimg.com/vi/".concat(exports, "/hqdefault.jpg"),
        width: 451,
        height: 254
      },
      video: {
        url: "https://www.youtube.com/embed/".concat(exports, "?vq=large&rel=0&controls=0&showinfo=0"),
        width: 451,
        height: 254
      },
      provider: Chunk468846.pn.YOUTUBE,
      maxWidth: 451,
      maxHeight: 254,
      renderVideoComponent: Chunk524444.lV,
      renderImageComponent: Chunk524444.Yi,
      renderLinkComponent: Chunk524444.iT,
      onPlay: () => {
        this.track(Chunk981631.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, true)
      }
    });
    if (null != Chunk73800 && "" !== Chunk73800) {
      let e = Chunk73800.startsWith("https://") ? Chunk73800 : require("./595173.js")("./".concat(Chunk73800));
      return (0, Chunk255367.jsx)(Chunk70097.Z, {
        src: module,
        poster: Chunk120356,
        width: 451,
        height: 254,
        loop: true,
        muted: true,
        autoPlay: true,
        className: Chunk491068.video,
        onPlay: () => {
          this.track(Chunk981631.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, true)
        }
      })
    }
    if (null == Chunk120356 || "" === Chunk120356) return null;
    {
      let e = Chunk120356.startsWith("https://") ? Chunk120356 : require("./595173.js")("./".concat(Chunk120356));
      return (0, Chunk255367.jsx)("img", {
        className: Chunk491068.image,
        alt: "",
        src: module,
        width: 451,
        height: 254
      })
    }
  }
  render() {
    let {
      changeLog: e
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk481060.Y0X, {
      transitionState: Chunk481060.Dvm.ENTERED,
      className: Chunk400167.modal,
      parentComponent: "ChangelogStandardTemplate",
      children: [(0, Chunk255367.jsxs)(Chunk481060.xBx, {
        align: Chunk600164.Z.Justify.BETWEEN,
        separator: false,
        children: [this.renderHeader(), (0, Chunk255367.jsx)(Chunk600164.Z.Child, {
          grow: 0,
          children: (0, Chunk255367.jsx)(Chunk481060.olH, {
            onClick: this.props.onClose
          })
        })]
      }), (0, Chunk255367.jsx)(Chunk481060.hzk, {
        className: i()(Chunk400167.content, Chunk491068.container, {}),
        scrollerRef: this.scrollerRef,
        onScroll: this.handleScroll,
        children: (0, Chunk255367.jsxs)("div", {
          tabIndex: 0,
          role: "region",
          "aria-label": Chunk388032.intl.string(Chunk388032.t.HzBchI),
          children: [this.renderVideo(), k(module.body, false, {
            changeLog: this,
            interpolations: v,
            onLinkClick: this.trackLinkClick
          })]
        })
      }), (0, Chunk255367.jsx)(Chunk481060.mzw, {
        direction: Chunk600164.Z.Direction.HORIZONTAL,
        children: this.renderFooter()
      })]
    })
  }
  constructor(...e) {
    super(...e), j(this, "scrollerRef", o.createRef()), j(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null != e) {
        var t, n;
        null == (t = (n = this.props).onScroll) || t.call(n, e)
      }
    }), j(this, "trackLinkClick", e => {
      this.props.track(f.rMx.CHANGE_LOG_CTA_CLICKED, {
        cta_type: "inline_link",
        target: e
      }, false)
    }), j(this, "renderHeader", () => {
      let {
        changeLog: e
      } = this.props;
      return (0, r.jsxs)(p.Z.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-lg/semibold",
          children: y.intl.string(y.t.LRmNAg)
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          className: x.date,
          children: y.intl.format(y.t.Fb8xx8, {
            date: null != e.date && "" !== e.date ? l()(e.date).toDate() : new Date
          })
        })]
      })
    })
  }
}
let S = C